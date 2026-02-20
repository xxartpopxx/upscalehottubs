# Upstate Hot Tubs Website - Product Requirements Document

## Project Overview
**Last Updated:** February 20, 2026

Premium hot tub retailer website serving Naples, FL and South Carolina.

## Business Information
- **Phone:** (864) 837-0155
- **Email:** info@upstatehottubs.com
- **Address:** 1004 West Georgia Rd, Simpsonville, SC 29680
- **Hours:** Always Open

## Technical Stack
- **Frontend:** React 19 + Vite + Tailwind CSS
- **Routing:** react-router-dom
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Architecture:** Modular component-based SPA

## What's Been Implemented

### ✅ Color Visualization System (UPDATED - Feb 20, 2026)
**KEY CHANGE:** No longer swaps images when colors change!
- [x] **Single base image per product** - same photo stays consistent
- [x] **CSS color tint overlays** - shell/cabinet colors applied via blend modes
- [x] **Color indicator badges** on image showing selected colors
- [x] **Color name labels** under each swatch
- [x] **Color summary section** at bottom of selector
- [x] **Info tooltip** explaining color visualization

Technical implementation:
- `ColorTintOverlay` component uses CSS gradients with `mixBlendMode: multiply`
- Shell color applies to upper/inner portion via radial gradient
- Cabinet color applies to lower/outer portion via linear gradient
- Smooth 500ms transition when colors change

### ✅ Wellness Page (ENHANCED - Feb 20, 2026)
- [x] **Hero section** with "Live Your Best Life" messaging
- [x] **Image gallery** with 3 lifestyle/product images
- [x] **5 benefit sections** each with:
  - Real lifestyle images
  - 3 bullet points with leaf icons
  - Icon badges
- [x] **Statistics section** (37°C, 15-20 min, 40% stress reduction)
- [x] **2 testimonials** with 5-star ratings
- [x] **Feature grid** (Joint Relief, Circulation, Sleep, Recovery)
- [x] **CTA section** with gradient background

### ✅ Shop Filters
- [x] Brand filter: All Brands, Grand River Spas, Viking Spas
- [x] Price filters: Min/Max
- [x] Capacity filter: 1-3, 4-6, 7+ persons
- [x] Series filter (dynamic based on brand)
- [x] Seating layout filter: Open / Lounge
- [x] Sort: Featured, Price Low/High, Name A-Z, Most Jets

### ✅ Brand Separation
- [x] Grand River Spas section (12 products)
- [x] Viking Spas section (15 products)

### ✅ Navigation
- [x] Shop dropdown (Hot Tubs, Swim Spas, Saunas, Cold Plunges)
- [x] Wellness link
- [x] Discover dropdown (About, Events, Financing, Spa Butler)

## Code Architecture
```
/app/frontend/src/
├── components/products/
│   ├── ColorSelector.jsx     # Color swatches with labels
│   └── ProductCard.jsx       # Product cards
├── pages/
│   ├── ProductDetailPage.jsx # ColorTintOverlay system
│   ├── WellnessPage.jsx      # Enhanced with images
│   └── HotTubsPage.jsx       # Filters + brand separation
└── data/
    └── products.js           # 27 hot tubs + filters
```

## Product Data Summary
- **Grand River Spas:** 12 products (Premier Series)
- **Viking Spas:** 15 products (Elite/Heirloom/Element Series)
- **Swim Spas:** 4 products
- **Total Hot Tubs:** 27 products

## Testing Status
- ✅ All features tested (100% success rate)
- ✅ Color overlay system - verified
- ✅ Wellness page images - verified
- ✅ Filters and brand separation - verified

## Prioritized Backlog

### P1 (Next Priority)
- [ ] Lighthouse 100% audit and optimization
- [ ] SEO Schema markup (LocalBusiness, Product, Review)

### P2 (Future)
- [ ] Jingle with localStorage preference
- [ ] Social media embedded feeds
- [ ] Product comparison feature
