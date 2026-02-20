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

### ✅ True Image Swapping Color System (LATEST - Feb 20, 2026)
**KEY FEATURE:** Real color combination images from Grand River Spas CDN!
- [x] **True image swapping** - selecting shell/cabinet colors loads actual product images
- [x] **CDN Integration** - Uses Grand River Spas visualizer: `https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/{Model}_{Shell}_{Cabinet}_{Cabinet}.jpg`
- [x] **Color Preview tab** - dedicated view for color visualization
- [x] **Color indicator badges** on image showing selected colors
- [x] **Shell colors:** White, Silver, Opal (with texture swatches)
- [x] **Cabinet colors:** Coastal Gray, Walnut, Barnwood, Black
- [x] **Fallback handling** - reverts to primary image if CDN image fails
- [x] **View tabs:** Color Preview, Side View, Overhead View

### ✅ Model Comparison Table (NEW - Feb 20, 2026)
- [x] **Side-by-side comparison** of current product vs related model
- [x] **Specifications compared:**
  - Dimensions
  - Seats
  - Jet Count (highlighted in red)
  - Seating Layout
  - Water Capacity
  - Electrical
- [x] **Prices displayed** with "Currently Viewing" and "View [Model]" links
- [x] **Overhead images** for visual comparison

### ✅ Wellness Page (UPDATED - Feb 20, 2026)
- [x] **Bouncing mouse animation REMOVED** as per user request
- [x] **Hero section** with "Live Your Best Life" messaging
- [x] **Image gallery** with 3 lifestyle/product images
- [x] **5 benefit sections** each with real images and bullet points
- [x] **Statistics section** (37°C, 15-20 min, 40% stress reduction, 100% Made in America)
- [x] **2 testimonials** with 5-star ratings
- [x] **Feature grid** (Joint Relief, Circulation, Sleep, Recovery)
- [x] **CTA section** with gradient background

### ✅ Shop Filters (UPDATED - Feb 20, 2026)
- [x] Brand filter: All Brands, Grand River Spas, Viking Spas
- [x] Price filters: Min/Max
- [x] Capacity filter: 1-3, 4-6, 7+ persons
- [x] Series filter (dynamic based on brand)
- [x] Seating layout filter: Open / Lounge
- [x] **Sort options:** Featured, Price Low/High, Name A-Z
- [x] **"Most Jets" sort option REMOVED** as per user request

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
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── JinglePlayer.jsx
│   └── products/
│       ├── ColorSelector.jsx     # Color swatches with texture images
│       ├── ProductCard.jsx       # Product cards for grid
│       └── ProductGrid.jsx       # Grid layout component
├── pages/
│   ├── ProductDetailPage.jsx     # True image swapping + comparison table
│   ├── WellnessPage.jsx          # Enhanced wellness (no bouncing mouse)
│   ├── HotTubsPage.jsx           # Filters + brand separation
│   ├── HomePage.jsx              # Landing page
│   ├── ContactPage.jsx           # Contact form
│   ├── AboutPage.jsx             # About us
│   └── [other pages]
└── data/
    ├── products.js               # 27 hot tubs + color images
    └── constants.js              # Business info, assets
```

## Product Data Summary
- **Grand River Spas:** 12 products (Premier Series)
- **Viking Spas:** 15 products (Elite/Heirloom/Element Series)
- **Swim Spas:** 4 products
- **Saunas:** 2 products
- **Cold Plunges:** 1 product
- **Total Hot Tubs:** 27 products

## Testing Status
- ✅ All features tested (100% success rate - iteration_8.json)
- ✅ True image swapping - verified with CDN URLs
- ✅ Model comparison table - verified
- ✅ "Most Jets" removed - verified
- ✅ Bouncing mouse removed - verified
- ✅ Brand filters and sorting - verified

## Prioritized Backlog

### P0 (Completed This Session)
- [x] True image swapping for color selection
- [x] Model comparison table on product pages
- [x] Remove "Most Jets" sort option
- [x] Remove bouncing mouse animation

### P1 (Next Priority)
- [ ] Lighthouse 100% audit and optimization
- [ ] SEO Schema markup (LocalBusiness, Product, Review)
- [ ] Add more subtle animations

### P2 (Future)
- [ ] Jingle with localStorage preference
- [ ] Social media embedded feeds (Instagram/Facebook)
- [ ] Testimonials/Reviews section enhancement
