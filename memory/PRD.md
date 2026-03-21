# Upstate Hot Tubs - Product Requirements Document

## Original Problem Statement
Overhaul the "Upstate Hot Tubs" website by pulling product data (specs, images) from World Sauna Group and integrating them alongside existing hot tub products. Key requirements include adding saunas, cold plunges, heaters, fixing specs, model comparison features, color pickers, and removing Viking Spas brand.

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
- **ColdPlungesPage.jsx**: All cold plunge products
- **ProductDetailPage.jsx**: Full product details with color pickers, model comparison, extras/upgrades

### Hot Tub Enhancements
- Corrected Dynasty Spas specs from PDF brochures
- Added add-on feature images for hot tubs
- Updated key features for Dynasty Spa models
- Fixed Grand River color picker thumbnails (dynamic key for re-rendering)
- Model comparison dropdowns for both Grand River and Dynasty brands

### Code Cleanup
- Removed all Viking Spas products, data, and conditional logic

## Completed Tasks (March 2026)
- [x] World Sauna Group product integration (all categories)
- [x] Saunas page with category filters + heaters section
- [x] Cold Plunges page update
- [x] Hot tub spec corrections from brochures
- [x] Add-on images for hot tubs
- [x] Grand River color picker fix
- [x] Grand River model comparison dropdown
- [x] Dynasty model comparison dropdown
- [x] Viking Spas removal
- [x] Heater filter tab on Saunas page

## Backlog

### P1 - Upcoming
- Update World Sauna Group product pricing when user provides official pricing

### P2 - Future
- Verify/correct Grand River Spas specs (similar to Dynasty correction)
- Add installation/shipping cost display when info is provided
- Refactor `products.js` (4000+ lines) into smaller files by brand/type
- Refactor `ProductDetailPage.jsx` (1100+ lines) into brand-specific sub-components

## Key Files
- `/app/frontend/src/data/products.js` - Central product data (4000+ lines)
- `/app/frontend/src/pages/ProductDetailPage.jsx` - Product detail with comparisons
- `/app/frontend/src/pages/SaunasPage.jsx` - Saunas + heaters page with filters
- `/app/frontend/src/pages/ColdPlungesPage.jsx` - Cold plunges page
