# Upstate Hot Tubs — Product Requirements & Changelog

## Original Problem Statement (Feb 2026)
1. **SEO Fix**: The React SPA was serving only `<div id="root"></div>` to crawlers, so Google could not index page content.
2. **Business Hours Update**: Sunday and Monday should be marked **CLOSED**, with the note: *"Call (864) 837-0155 anytime — we'll open by appointment for you!"*
3. **Deploy target**: Netlify.

## Tech Stack
- Frontend: React 19 + React Router v7 + CRA + Tailwind + framer-motion + react-helmet-async
- Hosting: **Netlify** (publish dir `build`, Forms enabled, base = `frontend`)
- Backend: FastAPI + MongoDB (not touched in this session)

## Solution Architecture

### 1. Build-time Prerendering (`frontend/scripts/prerender.js`)
- Pass 1: Spins up a local static server over `build/`, launches headless Chromium, renders **22 static routes**, and accumulates HTML in memory.
- Pass 2: After all renders are complete, writes each route's HTML to `build/<route>/index.html`. This **two-pass approach** prevents the rendered `/` HTML from contaminating subsequent routes via the SPA fallback.
- Each rendered page also gets **SEO injection**:
  - `<link rel="canonical">` pointing to `https://www.upstatehottubs.com/<route>`
  - `og:url`, `og:title`, `og:description`, `twitter:url`, `twitter:title`, `twitter:description` (all page-specific)
  - **BreadcrumbList JSON-LD** for every non-root route
  - **FAQPage JSON-LD** on `/hours` with 4 customer questions (hours, appointment availability, location, contact)
  - When a React page has no Helmet (Contact, Hot Tubs, Wellness, Events, Financing, Spa Butler), the script substitutes the route's title/description from `frontend/scripts/seo-meta.js` so each page ships with a **unique, keyword-rich** `<title>` and meta description.
  - HTML entity double-encoding (`&amp;amp;`) prevented by decoding before re-encoding.
- Regenerates `build/sitemap.xml` with all 22 URLs, `<lastmod>`, `<changefreq>`, `<priority>`.

### 2. Netlify-bulletproof configuration (`frontend/netlify.toml`)
- `NODE_VERSION = "20"` pinned.
- Build command: `npm install --legacy-peer-deps && npx puppeteer browsers install chrome && npm run build` — explicit Chromium install before the build, so prerender never fails for a missing browser.
- `PUPPETEER_CACHE_DIR = /opt/buildhome/.cache/puppeteer` so Chromium persists in Netlify's build cache (subsequent deploys skip the ~150 MB download).
- `CI = "false"` so CRA's ESLint warnings don't break the deploy.
- Security headers preserved (`X-Frame-Options`, `X-XSS-Protection`, etc.) and cache-control headers tuned for `/static/*`, `*.js`, `*.css`, `*.html`, `/sitemap.xml`, `/robots.txt`.
- **3 redirect rules** force a single canonical host: any request to `upstatehottubs.com` or `http://` → `https://www.upstatehottubs.com` (301).

### 3. Business Hours Update
- Schedule:
  - Sunday & Monday → **CLOSED** (highlighted in red on the page)
  - Tue, Thu, Fri → 10am–6pm
  - Wed → 10am–8pm (Late Night)
  - Sat → 10am–5pm
- Appointment note: *"Call (864) 837-0155 anytime — we'll open by appointment for you!"* — appears in the Hours page hero, the Footer, and the JSON-LD `specialOpeningHoursSpecification.description`.
- JSON-LD `openingHoursSpecification` rewritten as a per-day array (Tuesday, Wednesday, Thursday, Friday, Saturday with correct hours; Sunday/Monday omitted = closed signal to Google).
- `data-testid="hours-row-{day}"` added per row; `data-testid="footer-hours"` added on the footer block.

### 4. Per-route SEO map (`frontend/scripts/seo-meta.js`)
Single source of truth for the title, description, breadcrumb chain, and (optionally) FAQ list of each of the 22 routes. Used by `prerender.js`.

### 5. Canonical host normalization
- All `https://upstatehottubs.com/...` canonicals in source files (GrandRiverPage, SwimSpasPage, SaunasPage, VikingSpasPage, HomePage) updated to `https://www.upstatehottubs.com/...`.

## Verified Outputs (Feb 2026 build)
- **22 prerendered HTML files** (~30–130 KB each)
- **Crawler-visible content** on every route (Googlebot sees fully-rendered HTML, not the `noscript` line)
- **Per-page unique titles**: e.g.
  - `/hours` → "Store Hours | Upstate Hot Tubs | Simpsonville, SC"
  - `/contact` → "Contact Upstate Hot Tubs | Simpsonville SC | (864) 837-0155"
  - `/wellness` → "Hot Tub Wellness Benefits | Hydrotherapy | Upstate Hot Tubs"
- **Exactly 1 canonical per page** (no duplicates)
- **JSON-LD blocks per page**: 2 (homepage: LocalBusiness + Product) up to 4 (/hours: + BreadcrumbList + FAQPage)
- **sitemap.xml**: 22 URLs with `<lastmod>` (today), `<changefreq>`, `<priority>`
- **robots.txt** points to `https://www.upstatehottubs.com/sitemap.xml`

## Changelog

### 2026-06-01 — SEO Prerender + Hours Update (initial session)
- Added `puppeteer` and `serve-handler` as devDependencies.
- Created `frontend/scripts/prerender.js`.
- Updated `frontend/package.json` scripts: `build` runs `craco build && node scripts/prerender.js`.
- Rewrote hours in `HoursPage.jsx`, `Footer.jsx`, and JSON-LD in `public/index.html`.

### 2026-06-01 — Netlify hardening + deep SEO
- `frontend/netlify.toml`: pinned Node 20; explicit `puppeteer browsers install chrome`; cache dir; 301 redirects from apex/HTTP to `https://www.upstatehottubs.com`; per-asset cache headers.
- `frontend/scripts/prerender.js`:
  - Two-pass render-then-write (prevents `/` polluting other routes).
  - Per-route canonical, OG, Twitter, BreadcrumbList JSON-LD injection.
  - FAQPage JSON-LD on `/hours`.
  - Title/description fallback to `seo-meta.js` when a React page lacks Helmet.
  - HTML-entity decode before re-encode to prevent double-encoding.
- Added `frontend/scripts/seo-meta.js` (per-route SEO map).
- Normalized all in-source canonical URLs to `https://www.upstatehottubs.com`.

## Roadmap / Backlog

- **P2**: Per-brand Open Graph images (e.g. `/dynasty-spas` → branded `og:image`) for richer social shares.
- **P2**: Prerender dynamic `/products/:id` routes — needs the product-ID list at build time (enumerate from `frontend/src/data/products.js`).
- **P3**: Image sitemap (`sitemap-images.xml`) for Google Images.
- **P3**: Proper 404 page that returns HTTP 404 (currently SPA fallback returns 200 for unknown paths).
- **P3**: Add `<link rel="alternate">` and HrefLang if a Spanish or other locale is added.

## Files of Reference
- `/app/frontend/scripts/prerender.js` — Puppeteer crawler + sitemap + per-page SEO injection
- `/app/frontend/scripts/seo-meta.js` — Per-route title/description/breadcrumb/FAQ data
- `/app/frontend/netlify.toml` — Netlify build config (Puppeteer install hook, host redirects, headers)
- `/app/frontend/package.json` — `build` script (`craco build && node scripts/prerender.js`)
- `/app/frontend/src/pages/HoursPage.jsx` — Hours page (CLOSED days, appointment note)
- `/app/frontend/src/components/layout/Footer.jsx` — Footer hours block
- `/app/frontend/public/index.html` — JSON-LD LocalBusiness schema, OG defaults
- `/app/frontend/public/robots.txt` — sitemap pointer (www)
