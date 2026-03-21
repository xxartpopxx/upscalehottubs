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

### Hot Tub Spec Accuracy (March 2026)
- **Grand River Spas**: All specs verified and corrected from official grandriverspas.com
  - Chariton 2: 63 jets (was 61), added water capacity, pumps, filtration
  - Chesapeake: Added water capacity (430gal), dry/filled weight, corrected layout
  - Saginaw 2: Jets 53 (was 61), dimensions 86x86x37 (was 84x84x37.5)
  - Thornapple: Persons 7 (was 6), jets corrected, layout Non-Lounge (was Lounge)
  - Muskegon 2: Persons 6 (was 7), jets 41 (was 56), layout Lounge (was Open)
  - Sturgeon: Jets 31 (was 50/40), dimensions 78x78x35 (was 84x84), electrical 240v/40amp
  - Swift: Now Premier Series, dimensions 60x84x34 (was 78x60x33), electrical 240v/50amp
  - Manistee: Corrected layout, added full specs
  - All Eco models: Corrected to 120v/15amp plug-and-play specs
- **Dynasty Spas**: Specs verified from PDF brochures
  - Paradise Bay: Dimensions corrected to 92x102x39 (was 92x92)
  - All other specs confirmed accurate

### Color Picker Fixes (March 2026)
- Per-product shell/cabinet color restrictions:
  - Sturgeon: Silver/Opal shells only, Walnut/Taupe cabinets only
  - Manistee: White/Opal shells only, Walnut/Taupe cabinets only
  - Swift: Full range (White/Silver/Opal + CoastalGray/Walnut/Barnwood/Black)
- Corner color option: Conditionally shown via `hasCornerOption` field
  - Hidden for: Sturgeon, Manistee, and all Eco models
  - Visible for: Chariton, Chesapeake, Saginaw, Thornapple, Muskegon, Swift
- Visualizer model prefixes corrected:
  - Swift → `Premier_Swift`
  - Sturgeon Eco → `SturgeonEco`
  - Swift Eco → `SwiftECO`
  - Manistee Eco → `ManisteeEco`

### Other Completed Work
- Grand River color picker thumbnails fixed (dynamic key re-rendering)
- Model comparison dropdowns for Grand River and Dynasty brands
- Viking Spas completely removed
- Add-on feature images for hot tubs
- Heater filter tab on Saunas page

## Backlog

### P1 - Upcoming
- Update World Sauna Group product pricing when user provides official pricing

### P2 - Future
- Add installation/shipping cost display when info is provided
- Refactor `products.js` (4000+ lines) into smaller files by brand/type
- Refactor `ProductDetailPage.jsx` (1100+ lines) into brand-specific sub-components

## Key Files
- `/app/frontend/src/data/products.js` - Central product data (4000+ lines)
- `/app/frontend/src/pages/ProductDetailPage.jsx` - Product detail with color picker and comparisons
- `/app/frontend/src/pages/SaunasPage.jsx` - Saunas + heaters page with filters
- `/app/frontend/src/pages/ColdPlungesPage.jsx` - Cold plunges page
