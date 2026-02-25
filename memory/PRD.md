# Upstate Hot Tubs Website - Product Requirements Document

## Original Problem Statement
Build and maintain an e-commerce website for Upstate Hot Tubs featuring products from multiple brands: Grand River Spas, Viking Spas, Dynasty Spas, plus saunas and cold plunges. Data is scraped from manufacturer websites.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Data**: All products hardcoded in `frontend/src/data/products.js`
- **No Backend**: Pure frontend application

## Key Files
- `frontend/src/data/products.js` - ALL product data
- `frontend/src/pages/ProductDetailPage.jsx` - Product detail, color selector, comparison
- `frontend/src/pages/DynastySpasPage.jsx` - Dynasty listing with large color panel
- `frontend/src/pages/SwimSpasPage.jsx` - Swim spas (Grand River + Dynasty)
- `frontend/src/pages/ColdPlungesPage.jsx` - Cold plunges with 4 informational content sections
- `frontend/src/components/layout/Header.jsx` - Navigation with Discover dropdown
- `frontend/src/pages/HomePage.jsx` - Homepage with categories, product grids

## Completed Features

### Feb 25, 2026 (Current Session)
- [x] Cold Plunges page: Added 4 new informational content sections from scraped source URLs
  - Recovery Guide (ice bath timing before/after workout)
  - Skin Benefits (cold therapy for beauty)
  - Chiller Guide (HP vs cooling capacity comparison table)
  - Water Maintenance Guide (testing, chemicals, filtration, schedule)
- [x] Each long section uses ExpandableSection component with expand/collapse toggle
- [x] Homepage: Updated "Shop By Categories" thumbnails for Swim Spas and Cold Plunges to use actual product images

### Feb 24, 2026 (Previous Session)
- [x] Grand River swim spas added (Valhalla, Asgard, Odin, Thor)
- [x] Dynasty color selector REMOVED; static color reference section added
- [x] Fixed all broken le-cdn image URLs
- [x] Added new Dynasty hot tub and swim spa models
- [x] Created 4 new content pages: Covers, Anatomy of a Spa, Balneotherapy, Jets
- [x] Added "Discover" dropdown menu to Header
- [x] Added Features & Benefits to Dynasty Spas page
- [x] Added Health Benefits YouTube video to Wellness page
- [x] Fixed header overlap CSS issue
- [x] Removed duplicate slogan from page templates

### Prior Session
- [x] Grand River Spas products with color visualizer
- [x] Viking Spas products with 3-part color selector
- [x] Dynasty Spas hot tubs (19 models)
- [x] Compare Models feature
- [x] Swim Spas, Saunas, Cold Plunges, Wellness pages
- [x] About page with YouTube video

## Backlog / Future Tasks
- [ ] Full product data audit vs source sites (price verification)
- [ ] Refactor ProductDetailPage.jsx into brand-specific sub-components
- [ ] Migrate product data to backend API + database
- [ ] SEO structured data (Schema.org JSON-LD)
- [ ] Performance optimization
- [ ] Testimonials/Reviews section
