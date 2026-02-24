# Upstate Hot Tubs Website - Product Requirements Document

## Original Problem Statement
Build and maintain an e-commerce website for Upstate Hot Tubs featuring products from multiple brands: Grand River Spas, Viking Spas, Dynasty Spas, plus saunas and cold plunges.

## Core Requirements
1. Product catalog with data scraped from manufacturer websites
2. Color visualizer/selector for each brand
3. Model comparison feature
4. Complete product information (specs, pricing, images)

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Data**: All products hardcoded in `frontend/src/data/products.js`
- **No Backend**: Pure frontend application, no database

## Key Files
- `frontend/src/data/products.js` - ALL product data (monolithic)
- `frontend/src/pages/ProductDetailPage.jsx` - Product detail + color selector + comparison
- `frontend/src/pages/DynastySpasPage.jsx` - Dynasty listing
- `frontend/src/pages/SwimSpasPage.jsx` - Swim spas with brand filtering
- `frontend/src/components/Header.jsx` - Navigation

## Completed Features (as of Feb 2026)
- [x] Grand River Spas products with color visualizer (shell, cabinet, corner)
- [x] Viking Spas products with 3-part color selector (shell, cabinet, corner)
- [x] Dynasty Spas hot tubs (19 models across Hideaway, Vacation, Oasis, Luxury collections)
- [x] Dynasty Spas color selector with bigger swatches (w-20 h-20) and real CDN images
- [x] Dynasty color names shown in full under swatches
- [x] Dynasty "Your Selection" summary (Shell + Skirt)
- [x] Dynasty "Skirt Color" label (vs "Cabinet Color" for other brands)
- [x] Dynasty swim spas (7 models: Family Island Oasis SL/Dual, Aquex Party/Pro/Pro Plus, 16' Trainer, 17' Pro Plus, 19' Dual Pro)
- [x] Compare Models feature for Viking and Dynasty
- [x] Swim Spas page with brand filtering
- [x] Saunas page
- [x] Cold Plunges page
- [x] About page with YouTube video
- [x] 30th Anniversary models (Bahama Royale, Imperial Royale)

## Dynasty Spas Models (Complete List)
### Hot Tubs
- Hideaway Collection: Bay Bliss, High Tide
- Vacation Collection: Bimini, Treasure Cay, Sunset Cove, Tranquility Harbor, Serenity Cove
- Oasis Collection: Coconut Bay II/III, Caribbean Breeze, Nassau Royal, Cabana Bay, Ocean Breeze, Twin Palms
- Luxury Collection: Paradise Bay III, Paradise Bay II, Palm Island, Pleasure Cove, Bahama Royale, Imperial Royale

### Swim Spas
- Family Collection: 11' Family Island Oasis SL, 11' Family Island Oasis
- Aquex Collection: 13' Aquex Party, 13' Aquex Pro, 13' Aquex Pro Plus, 16' Aquex Trainer, 17' Aquex Pro Plus, 19' Aquex Dual Pro

## Backlog / Future Tasks
- [ ] Full product data audit against source websites (price verification)
- [ ] Schema.org JSON-LD structured data for SEO
- [ ] Lighthouse performance optimization
- [ ] Refactor ProductDetailPage.jsx into brand-specific sub-components
- [ ] Migrate product data from hardcoded JS to backend API + database
- [ ] Testimonials/Reviews section
- [ ] Social media integration (Instagram/Facebook)
