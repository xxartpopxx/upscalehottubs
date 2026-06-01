/* eslint-disable */
/**
 * Build-time prerender for SEO.
 *
 * For each static route, spin up a local static server pointing at the CRA
 * `build/` folder, navigate to the route in a headless Chromium, wait for the
 * React app to render, then save the resulting HTML as `build/<route>/index.html`.
 *
 * After rendering, this script ALSO injects per-route SEO metadata into the
 * HTML: canonical URL, Open Graph tags, Twitter Card tags, BreadcrumbList
 * JSON-LD, and FAQPage JSON-LD when applicable. This means each prerendered
 * page ships with strong, unique, crawler-visible SEO signals - even for
 * pages whose React code did not call react-helmet-async.
 *
 * Designed to run on Netlify - uses puppeteer's bundled Chromium and
 * --no-sandbox flags so it works inside the Netlify build container.
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');
const { SITE_URL, FALLBACK_META } = require('./seo-meta');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const DEFAULT_OG_IMAGE = 'https://customer-assets.emergentagent.com/job_finnmark-trinity/artifacts/4fc5ihci_unnamed.jpg';

// Static routes to prerender (skip dynamic /products/:id - too many to enumerate)
const ROUTES = Object.keys(FALLBACK_META);

const SITEMAP_META = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/hot-tubs': { changefreq: 'weekly', priority: '0.9' },
  '/swim-spas': { changefreq: 'weekly', priority: '0.9' },
  '/saunas': { changefreq: 'weekly', priority: '0.9' },
  '/cold-plunges': { changefreq: 'weekly', priority: '0.9' },
  '/grand-river-spas': { changefreq: 'weekly', priority: '0.8' },
  '/dynasty-spas': { changefreq: 'weekly', priority: '0.8' },
  '/covers': { changefreq: 'monthly', priority: '0.7' },
  '/chemicals': { changefreq: 'monthly', priority: '0.7' },
  '/wellness': { changefreq: 'monthly', priority: '0.7' },
  '/contact': { changefreq: 'monthly', priority: '0.7' },
  '/hours': { changefreq: 'monthly', priority: '0.7' },
  '/about': { changefreq: 'monthly', priority: '0.6' },
  '/financing': { changefreq: 'monthly', priority: '0.6' },
  '/events': { changefreq: 'monthly', priority: '0.6' },
  '/spa-butler': { changefreq: 'monthly', priority: '0.6' },
  '/anatomy-of-a-spa': { changefreq: 'monthly', priority: '0.5' },
  '/balneotherapy': { changefreq: 'monthly', priority: '0.5' },
  '/jets': { changefreq: 'monthly', priority: '0.5' },
  '/membership': { changefreq: 'monthly', priority: '0.5' },
  '/brochures': { changefreq: 'monthly', priority: '0.4' },
  '/ar-visualizer': { changefreq: 'monthly', priority: '0.4' },
};

// The base <title> baked into the SPA shell (public/index.html). When a
// prerendered page's title matches this, it means the React route did NOT
// set its own Helmet title - we should fall back to the route-specific
// metadata so each page ships with a unique, descriptive title.
const SPA_SHELL_BASE_TITLE = (() => {
  try {
    const shellPath = path.join(BUILD_DIR, 'index.html');
    if (!fs.existsSync(shellPath)) return null;
    const shell = fs.readFileSync(shellPath, 'utf8');
    const m = shell.match(/<title[^>]*>([^<]*)<\/title>/i);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
})();

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function escAttr(s) {
  // Decode any existing entities first so we never double-encode (e.g. &amp; -> &amp;amp;).
  return decodeEntities(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: BUILD_DIR,
        rewrites: [{ source: '**', destination: '/index.html' }],
      })
    );
    server.on('error', reject);
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(45000);

  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    if (/googletagmanager|google-analytics|doubleclick|hotjar|facebook\.net/i.test(url)) {
      return req.abort();
    }
    return req.continue();
  });

  const url = ORIGIN + route;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 800)));
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-prerendered', 'true');
  });

  const html = await page.content();
  await page.close();
  return html;
}

/**
 * Inject per-route SEO into the rendered HTML:
 *   - canonical link
 *   - Open Graph (og:url, og:title, og:description, og:image)
 *   - Twitter Card (twitter:url, twitter:title, twitter:description, twitter:image)
 *   - BreadcrumbList JSON-LD
 *   - FAQPage JSON-LD (when route has FAQs)
 *
 * Idempotent: existing canonical / OG / Twitter tags inside <head> are
 * replaced rather than duplicated.
 */
function injectSeo(html, route) {
  const meta = FALLBACK_META[route] || {};
  const pageUrl = SITE_URL + (route === '/' ? '/' : route);

  // Pull title/description that the React app actually rendered.
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const renderedTitle = titleMatch && titleMatch[1].trim();

  // If the rendered title equals the SPA shell's base <title>, the page
  // did NOT set its own Helmet title - prefer the route-specific fallback.
  // Decode entities so "Hot Tubs &amp; Swim Spas" matches "Hot Tubs & Swim Spas".
  const usingShellTitle =
    renderedTitle &&
    SPA_SHELL_BASE_TITLE &&
    decodeEntities(renderedTitle) === decodeEntities(SPA_SHELL_BASE_TITLE);
  const title =
    !usingShellTitle && renderedTitle && renderedTitle.length > 10
      ? renderedTitle
      : meta.title || renderedTitle;

  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i);
  const renderedDesc = descMatch && descMatch[1].trim();
  // The SPA shell description in index.html starts with "Hot tubs and Swim Spas in Naples Florida"
  // - if we see that we know no page-level Helmet description was set.
  const SHELL_DESC_PREFIX = 'Hot tubs and Swim Spas in Naples Florida';
  const usingShellDesc = renderedDesc && renderedDesc.startsWith(SHELL_DESC_PREFIX);
  const description =
    !usingShellDesc && renderedDesc && renderedDesc.length > 20
      ? renderedDesc
      : meta.description || renderedDesc;

  // Remove any existing canonical / og:url / og:title / og:description /
  // twitter:url / twitter:title / twitter:description so we can re-emit
  // page-specific versions. (We keep the static og:image from index.html.)
  let out = html
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']og:url["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']og:title["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']og:description["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']twitter:url["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']twitter:title["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']twitter:description["'][^>]*>\s*/gi, '');

  // Make sure title and description in <head> are page-specific.
  // If the React app rendered them properly, keep them. If we're using
  // route-fallback metadata (because the React page lacked Helmet), we
  // also OVERWRITE the existing <title> and description tags in the head
  // so the prerendered HTML carries the correct per-page values.
  if (!titleMatch || !renderedTitle) {
    out = out.replace(/<head>/i, `<head>\n    <title>${escAttr(meta.title || '')}</title>`);
  } else if (usingShellTitle && meta.title) {
    out = out.replace(/<title[^>]*>[^<]*<\/title>/i, `<title>${escAttr(meta.title)}</title>`);
  }
  if ((!descMatch || !renderedDesc) && meta.description) {
    out = out.replace(/<head>/i, `<head>\n    <meta name="description" content="${escAttr(meta.description)}">`);
  } else if (usingShellDesc && meta.description) {
    // Replace ALL existing meta description tags (some pages have multiple)
    out = out.replace(
      /<meta[^>]+name=["']description["'][^>]*>/gi,
      `<meta name="description" content="${escAttr(meta.description)}">`
    );
  }

  // Build the new SEO block.
  const seoTags = [
    `<link rel="canonical" href="${pageUrl}">`,
    `<meta property="og:url" content="${pageUrl}">`,
    `<meta property="og:title" content="${escAttr(title || '')}">`,
    `<meta property="og:description" content="${escAttr(description || '')}">`,
    `<meta property="twitter:url" content="${pageUrl}">`,
    `<meta property="twitter:title" content="${escAttr(title || '')}">`,
    `<meta property="twitter:description" content="${escAttr(description || '')}">`,
  ];

  // BreadcrumbList JSON-LD (for any non-root route with crumbs)
  if (Array.isArray(meta.breadcrumb) && meta.breadcrumb.length > 0) {
    const itemListElement = meta.breadcrumb.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE_URL + (c.url === '/' ? '/' : c.url),
    }));
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };
    seoTags.push(
      `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`
    );
  }

  // FAQPage JSON-LD (currently used by /hours)
  if (Array.isArray(meta.faq) && meta.faq.length > 0) {
    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: meta.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    };
    seoTags.push(
      `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`
    );
  }

  // Insert SEO block just before </head>
  out = out.replace(/<\/head>/i, `${seoTags.map((t) => '    ' + t).join('\n')}\n  </head>`);

  return out;
}

function outputPathFor(route) {
  if (route === '/') {
    return path.join(BUILD_DIR, 'index.html');
  }
  return path.join(BUILD_DIR, route.replace(/^\//, ''), 'index.html');
}

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((route) => {
    const meta = SITEMAP_META[route] || { changefreq: 'monthly', priority: '0.5' };
    const loc = SITE_URL + (route === '/' ? '/' : route);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log(`✓ sitemap.xml written with ${ROUTES.length} URLs`);
}

(async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`[prerender] build directory not found at ${BUILD_DIR}. Run "react-scripts build" first.`);
    process.exit(1);
  }

  console.log(`[prerender] Starting static server on ${ORIGIN}...`);
  const server = await startStaticServer();

  console.log('[prerender] Launching headless Chromium...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  let successCount = 0;
  const failures = [];
  const renderedFiles = []; // { outFile, html }
  try {
    // PASS 1 - render every route while the static server is still
    // serving the original SPA-shell `index.html`. We accumulate the
    // results and only write to disk after every route is rendered,
    // so prerendering `/` cannot contaminate subsequent routes via
    // the server's SPA fallback.
    for (const route of ROUTES) {
      try {
        process.stdout.write(`[prerender] ${route} ... `);
        const rawHtml = await renderRoute(browser, route);
        const html = injectSeo(rawHtml, route);
        const outFile = outputPathFor(route);
        renderedFiles.push({ outFile, html });
        successCount += 1;
        console.log(`OK (${(html.length / 1024).toFixed(1)} KB, +SEO)`);
      } catch (err) {
        failures.push({ route, error: err.message });
        console.log(`FAILED: ${err.message}`);
      }
    }

    // PASS 2 - flush everything to disk now that rendering is done.
    for (const { outFile, html } of renderedFiles) {
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, 'utf8');
    }

    writeSitemap();
  } finally {
    await browser.close();
    server.close();
  }

  console.log('');
  console.log(`[prerender] Done. ${successCount}/${ROUTES.length} routes prerendered.`);
  if (failures.length) {
    console.log('[prerender] Failures:');
    failures.forEach((f) => console.log(`  - ${f.route}: ${f.error}`));
    if (failures.length === ROUTES.length) {
      process.exit(1);
    }
  }
})().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
