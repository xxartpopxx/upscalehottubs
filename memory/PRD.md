# Upstate Hot Tubs Website - Product Requirements Document

## Project Overview
**Last Updated:** February 24, 2026

Premium hot tub retailer website serving Naples, FL and South Carolina.

## Brand Slogans
- **Main Slogan:** "Live your healthiest life while enjoying a vacation everyday at home."
- **Secondary Slogan:** "American Made & Proud of It"

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
- **SEO:** react-helmet-async
- **Architecture:** Modular component-based SPA

## What's Been Implemented

### ✅ Separate Shopping Pages (NEW - Feb 24, 2026)
- [x] **Grand River Spas Page** (/grand-river-spas) - Dedicated page for Grand River products
- [x] **Viking Spas Page** (/viking-spas) - Dedicated page for Viking Spas products  
- [x] **Saunas Page** (/saunas) - Standalone saunas page
- [x] **Navigation Updated** - Direct links instead of dropdown (Home, Grand River Spas, Viking Spas, Saunas, Swim Spas, Cold Plunges, Wellness, Discover, Contact)

### ✅ Slogans Throughout Website (NEW - Feb 24, 2026)
- [x] **Hero Section** - "LIVE YOUR HEALTHIEST LIFE WHILE ENJOYING A VACATION EVERYDAY AT HOME"
- [x] **Header** - "American Made & Proud of It" badge on shop pages
- [x] **Footer** - Slogan banner at top + "Proudly Made in America"
- [x] **Shop Pages** - Slogans included on Grand River, Viking, and Saunas pages

### ✅ Compact Product Detail Layout (NEW - Feb 24, 2026)
- [x] **Smaller image area** (aspect ratio 4:3 instead of square)
- [x] **Color options visible without scrolling**
- [x] **Compact view tabs and thumbnails**

### ✅ SEO Optimization (NEW - Feb 24, 2026)
- [x] **react-helmet-async** for dynamic page titles and meta tags
- [x] **Meta descriptions** with keywords on all pages
- [x] **Open Graph** tags for social sharing
- [x] **Canonical URLs**

### ✅ True Image Swapping Color System (Feb 20, 2026)
**KEY FEATURE:** Real color combination images from Grand River Spas CDN!
- [x] **True image swapping** - selecting shell/cabinet colors loads actual product images
- [x] **CDN Integration** - Uses Grand River Spas visualizer
- [x] **Color Preview tab** - dedicated view for color visualization
- [x] **Color indicator badges** on image showing selected colors
- [x] **Shell colors:** White, Silver, Opal (with texture swatches)
- [x] **Cabinet colors:** Coastal Gray, Walnut, Barnwood, Black

### ✅ Model Comparison Table (Feb 20, 2026)
- [x] **Side-by-side comparison** of current product vs related model
- [x] **Specifications compared** (Dimensions, Seats, Jets, Seating Layout, Water Capacity, Electrical)

### ✅ Navigation
- [x] Direct links: Grand River Spas, Viking Spas, Saunas, Swim Spas, Cold Plunges
- [x] Wellness link
- [x] Discover dropdown (About, Events, Financing, Spa Butler)

## Code Architecture
```
/app/frontend/src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Updated navigation (no Shop dropdown)
│   │   ├── Footer.jsx          # Updated with slogans
│   │   └── JinglePlayer.jsx
│   └── products/
│       ├── ColorSelector.jsx
│       ├── ProductCard.jsx
│       └── ProductGrid.jsx
├── pages/
│   ├── HomePage.jsx            # Updated hero with slogans
│   ├── GrandRiverPage.jsx      # NEW - Grand River Spas page
│   ├── VikingSpasPage.jsx      # NEW - Viking Spas page
│   ├── SaunasPage.jsx          # Updated with slogans + SEO
│   ├── ProductDetailPage.jsx   # Compact layout
│   ├── WellnessPage.jsx
│   ├── HotTubsPage.jsx
│   └── [other pages]
└── data/
    ├── products.js
    └── constants.js
```

## Product Data Summary
- **Grand River Spas:** 12 products (Premier Series)
- **Viking Spas:** 15 products (Elite/Heirloom/Element Series)
- **Swim Spas:** 4 products
- **Saunas:** 2 products
- **Cold Plunges:** 1 product
- **Total Hot Tubs:** 27 products

## Testing Status
- ✅ All features tested
- ✅ Separate shopping pages working
- ✅ Navigation updated
- ✅ Slogans displayed throughout
- ✅ Compact product detail layout
- ✅ SEO meta tags added

## Prioritized Backlog

### P0 (Completed This Session - Feb 24, 2026)
- [x] Add slogans throughout website
- [x] Create separate Grand River Spas page
- [x] Create separate Viking Spas page  
- [x] Update navigation to direct links
- [x] Make product detail more compact
- [x] Add SEO optimization with react-helmet-async

### P1 (Next Priority)
- [ ] Lighthouse 100% audit and optimization
- [ ] Schema markup (LocalBusiness, Product, Review)
- [ ] Add more subtle animations

### P2 (Future)
- [ ] Jingle with localStorage preference
- [ ] Social media embedded feeds (Instagram/Facebook)
- [ ] Testimonials/Reviews section enhancement
