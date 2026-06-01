/* eslint-disable */
/**
 * Build-time prerender for SEO.
 *
 * For each static route, spin up a local static server pointing at the CRA
 * `build/` folder, navigate to the route in a headless Chromium, wait for the
 * React app to render, then save the resulting HTML as `build/<route>/index.html`.
 *
 * This makes search-engine crawlers (Googlebot, Bingbot, etc.) see fully-
 * rendered content rather than the empty `<div id="root"></div>` shell.
 *
 * Designed to run on Netlify - uses puppeteer's bundled Chromium and
 * --no-sandbox flags so it works inside the Netlify build container.
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const SITE_URL = 'https://www.upstatehottubs.com';

// Static routes to prerender (skip dynamic /products/:id - too many to enumerate)
const ROUTES = [
  '/',
  '/hot-tubs',
  '/grand-river-spas',
  '/dynasty-spas',
  '/swim-spas',
  '/saunas',
  '/cold-plunges',
  '/covers',
  '/chemicals',
  '/wellness',
  '/about',
  '/anatomy-of-a-spa',
  '/balneotherapy',
  '/jets',
  '/events',
  '/financing',
  '/spa-butler',
  '/brochures',
  '/contact',
  '/hours',
  '/ar-visualizer',
  '/membership',
];

// Per-route metadata for sitemap.xml
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

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: BUILD_DIR,
        // SPA fallback for unknown deep links during the crawl phase
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

  // Block heavy/irrelevant requests so the page settles fast
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    // Skip analytics/tracking, but allow everything else (fonts/images may
    // affect layout-bound rendering for SEO previews)
    if (/googletagmanager|google-analytics|doubleclick|hotjar|facebook\.net/i.test(url)) {
      return req.abort();
    }
    return req.continue();
  });

  const url = ORIGIN + route;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });

  // Give React Helmet, Suspense fallbacks, and lazy components a beat to settle
  await page.evaluate(
    () => new Promise((r) => setTimeout(r, 800))
  );

  // Mark this HTML as prerendered so the app can choose to skip a re-mount flash if desired
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-prerendered', 'true');
  });

  const html = await page.content();
  await page.close();
  return html;
}

function outputPathFor(route) {
  if (route === '/') {
    return path.join(BUILD_DIR, 'index.html');
  }
  // /hours  -> build/hours/index.html  (Netlify serves these automatically)
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
  try {
    for (const route of ROUTES) {
      try {
        process.stdout.write(`[prerender] ${route} ... `);
        const html = await renderRoute(browser, route);
        const outFile = outputPathFor(route);
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, html, 'utf8');
        successCount += 1;
        console.log(`OK (${(html.length / 1024).toFixed(1)} KB)`);
      } catch (err) {
        failures.push({ route, error: err.message });
        console.log(`FAILED: ${err.message}`);
      }
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
    // Don't fail the deploy for a single bad route - the SPA fallback still works
    if (failures.length === ROUTES.length) {
      process.exit(1);
    }
  }
})().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
