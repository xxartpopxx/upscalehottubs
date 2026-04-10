# Upstate Hot Tubs - Product Requirements Document

## Original Problem Statement
Overhaul the "Upstate Hot Tubs" website by pulling product data (specs, images) from manufacturer sites and integrating them alongside existing hot tub products. Key requirements include adding saunas, cold plunges, heaters, fixing specs, model comparison features, color pickers, and removing Viking Spas brand.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, React Router
- **Backend**: FastAPI (minimal usage - product data is client-side)
- **Database**: MongoDB (not actively used for product data)
- **Data**: All product data hardcoded in `frontend/src/data/products.js`

## What's Been Implemented

### World Sauna Group Integration
- Added Outdoor, Indoor, and Infrared Saunas from World Sauna Group
- Added Tubs/Plunges on dedicated Cold Plunges page
- Added 6 Sauna Heaters (Cozy, Finsauna, HUUM brands)

### Page Structure
- **SaunasPage.jsx**: Consolidated page with 5 filter categories (All Saunas, Outdoor, Indoor, Infrared, Heaters) + dedicated heaters section
- **ColdPlungesPage.jsx**: All cold plunge products (22 total)
- **ProductDetailPage.jsx**: Full product details with color pickers, model comparison, extras/upgrades

### Hot Tub Spec Accuracy (March 2026)
- **Grand River Spas**: All specs verified and corrected from official grandriverspas.com
- **Dynasty Spas**: Specs verified from PDF brochures

### Color Picker Fixes (March 2026)
- Per-product shell/cabinet color restrictions implemented
- Corner color option conditionally shown via `hasCornerOption` field
- Visualizer model prefixes corrected

### Cold Plunge Thumbnails (April 2026)
- All cold plunge products verified with accurate thumbnails
- Finsauna AquaFin Single/Double: wixstatic images from finsaunausa.com
- Finsauna Immersia 100/200 (Natural + Black): wixstatic images from finsaunausa.com
- Aquora models (8 total): local images downloaded to /public/images/aquora/
- Icebound Essentials: Direct CDN images
- Removed duplicate WSG AquaFin entries that showed placeholder logos
- Gallery images from WSG preserved in Finsauna entries

### Other Completed Work
- Grand River color picker thumbnails fixed (dynamic key re-rendering)
- Model comparison dropdowns for Grand River and Dynasty brands
- Viking Spas completely removed
- Add-on feature images for hot tubs (corrected circulation pump vs ozone images)
- Heater filter tab on Saunas page
- Mother's Day popup on HomePage
- Videos assigned to SwimSpasPage, AboutPage, BalneotherapyPage, SpaButlerPage
- Header logo overlap fixed
- American flag emoji on DynastySpasPage
- Dynasty Spas Aquora Cold Plunges added (8 models, "Call for Pricing")

## Backlog

### P1 - Upcoming
- Update World Sauna Group product pricing when user provides official pricing

### P2 - Future
- Add installation/shipping cost display when info is provided
- Refactor `products.js` (5900+ lines) into smaller files by brand/type
- Refactor `ProductDetailPage.jsx` (1100+ lines) into brand-specific sub-components

## Key Files
- `/app/frontend/src/data/products.js` - Central product data (5900+ lines)
- `/app/frontend/src/pages/ProductDetailPage.jsx` - Product detail with color picker and comparisons
- `/app/frontend/src/pages/SaunasPage.jsx` - Saunas + heaters page with filters
- `/app/frontend/src/pages/ColdPlungesPage.jsx` - Cold plunges page
- `/app/frontend/src/pages/HomePage.jsx` - Home with Mother's Day popup
- `/app/frontend/src/components/layout/Header.jsx` - Fixed logo sizing
