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
- `frontend/src/components/Header.jsx` - Navigation

## Completed Features

### Feb 24, 2026 (Current Session)
- [x] Grand River swim spas added (Valhalla, Asgard, Odin, Thor) with proper specs from grandriverspas.com
- [x] Dynasty color selector REMOVED from product detail pages (user preference)
- [x] Static "Available Color Options" reference section added to Dynasty product pages
- [x] Dynasty listing page - large color options panel in hero (Acrylic + Skirt colors)
- [x] Fixed all broken le-cdn image URLs → replaced with working wixstatic.com/smushcdn URLs
- [x] Added new Dynasty hot tub models: Bay Bliss, High Tide, Bahama Royale, Imperial Royale
- [x] Added Dynasty swim spa models: 13' Aquex Pro, 17' Aquex Pro Plus
- [x] Updated swim spa specs with proper dimensions, water capacity, pumps, weights
- [x] Moved Viking swim spas to Grand River brand (correct attribution)

### Prior Session
- [x] Grand River Spas products with color visualizer
- [x] Viking Spas products with 3-part color selector (shell, cabinet, corner)
- [x] Dynasty Spas hot tubs (19 models across Hideaway, Vacation, Oasis, Luxury collections)
- [x] Compare Models feature for Viking and Dynasty
- [x] Swim Spas page with brand filtering
- [x] Saunas, Cold Plunges, Wellness pages
- [x] About page with YouTube video

## Dynasty Spas Models (Complete - 19 Hot Tubs + 8 Swim Spas)
### Hot Tubs
- Hideaway: Bay Bliss, High Tide
- Vacation: Bimini, Treasure Cay, Sunset Cove, Tranquility Harbor, Serenity Cove
- Oasis: Coconut Bay II/III, Caribbean Breeze, Nassau Royal, Cabana Bay, Ocean Breeze, Twin Palms
- Luxury: Paradise Bay III, Paradise Bay II, Palm Island, Pleasure Cove, Bahama Royale, Imperial Royale

### Swim Spas
- Family: 11' Family Island Oasis SL, 11' Family Island Oasis
- Aquex: 13' Party, 13' Pro, 13' Pro Plus, 16' Trainer, 17' Pro Plus, 19' Dual Pro

## Grand River Swim Spas (4 models)
- Valhalla (19'), Asgard (15'9"), Odin (14'9"), Thor (13'2")

## Backlog / Future Tasks
- [ ] Full product data audit vs source sites (price verification)
- [ ] Refactor ProductDetailPage.jsx into brand-specific sub-components
- [ ] Migrate product data to backend API + database
- [ ] SEO structured data (Schema.org JSON-LD)
- [ ] Performance optimization
- [ ] Testimonials/Reviews section
