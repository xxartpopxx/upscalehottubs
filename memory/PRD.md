# Upstate Hot Tubs — Product Requirements & Changelog

## Original Problem Statement (from latest session)
1. **SEO Fix**: The React SPA serves an empty `<div id="root"></div>` shell to crawlers, so Google sees only the `noscript` fallback. Site content is not indexed.
2. **Business Hours Update**: Sunday and Monday should be marked **CLOSED**, with the note: *"Call (864) 837-0155 anytime — we'll open by appointment for you!"*

## Tech Stack
- Frontend: React 19 + React Router v7 + CRA + Tailwind + framer-motion + react-helmet-async
- Hosting: **Netlify** (publish dir `build`, Forms enabled)
- Backend: FastAPI + MongoDB (not touched in this session)

## Solution Architecture (this session)

### SEO via Build-time Prerendering (Puppeteer)
- `frontend/scripts/prerender.js` starts a local static server over the `build/` folder, launches headless Chromium, crawls all 22 static routes, and writes the fully-rendered HTML to `build/<route>/index.html`.
- Netlify automatically serves `build/hours/index.html` when a user / crawler requests `/hours`, so each route now ships with crawler-visible, SEO-rich HTML.
- `sitemap.xml` is regenerated at build time with all 22 URLs and the current `<lastmod>` date.
- Existing `_redirects` (`/*  /index.html  200`) remains as the SPA fallback for unknown deep links — static files take precedence.

### Netlify Compatibility
- `frontend/netlify.toml`:
  - Build command runs `npx puppeteer browsers install chrome` before `npm run build`, ensuring Chromium is present in the build container.
  - `PUPPETEER_CACHE_DIR=/opt/buildhome/.cache/puppeteer` keeps Chromium cached across deploys.
  - `CI=false` so CRA does not treat warnings as errors during deploy.
- Puppeteer launched with `--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-gpu` (Docker-safe).

### Business Hours Update
- New schedule:
  - Sunday & Monday → **CLOSED**
  - Tue, Thu, Fri → 10am–6pm
  - Wed → 10am–8pm (Late Night)
  - Sat → 10am–5pm
- Files updated: `frontend/src/pages/HoursPage.jsx`, `frontend/src/components/layout/Footer.jsx`, `frontend/public/index.html` (JSON-LD `openingHoursSpecification` rewritten + added `specialOpeningHoursSpecification` for the appointment note).

## Changelog

### 2026-06-01 — SEO Prerender + Hours Update
- Added `puppeteer` and `serve-handler` as devDependencies.
- Created `frontend/scripts/prerender.js`.
- Updated `frontend/package.json` scripts: `build` now runs `craco build && node scripts/prerender.js`; `build:spa` keeps the old SPA-only build; new `prerender` script runs prerender alone.
- Updated `frontend/netlify.toml` for Netlify-compatible Puppeteer install + caching.
- Rewrote hours in `HoursPage.jsx` (added `data-testid="hours-row-*"`), Footer hours block (added `data-testid="footer-hours"`), and JSON-LD schema in `public/index.html`.
- Updated `public/robots.txt` to reference `https://www.upstatehottubs.com/sitemap.xml`.
- Verified: 22/22 routes prerendered. Static HTML contains crawler-visible content ("CLOSED", "by appointment for you", "Premium Hot Tubs", etc.).

## Roadmap / Backlog
- P2: Prerender dynamic `/products/:id` routes — would require enumerating product IDs from constants or backend at build time.
- P2: Hook `react-helmet-async` to render OG/Twitter tags into the static HTML per route (currently only `<title>`/`<description>` make it because Helmet writes to `document.head` after mount; some tags may not appear in the static HTML for non-default routes).
- P3: Add `<link rel="alternate">` and per-route canonical tags for stronger SEO.
- P3: Compress prerendered HTML further by stripping inline React-only attributes.

## Files of Reference
- `/app/frontend/scripts/prerender.js` — Puppeteer crawler + sitemap generator
- `/app/frontend/netlify.toml` — Netlify build config (Puppeteer install hook, cache dir)
- `/app/frontend/package.json` — `build` script
- `/app/frontend/src/pages/HoursPage.jsx` — Hours page (CLOSED days, appointment note)
- `/app/frontend/src/components/layout/Footer.jsx` — Footer hours block
- `/app/frontend/public/index.html` — JSON-LD LocalBusiness schema (`openingHoursSpecification`)
- `/app/frontend/public/robots.txt` — sitemap pointer
