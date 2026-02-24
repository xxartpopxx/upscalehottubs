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
- **SEO:** react-helmet-async + document.title for dynamic titles
- **Architecture:** Modular component-based SPA

## What's Been Implemented

### ✅ Color Visualizer Fix (Feb 24, 2026 - LATEST)
- [x] **Fixed image URL generation** - Correct URL pattern: `{Model}_{Shell}_{Cabinet}_{Corner}.jpg`
- [x] **Corner color options corrected** - Now only "Match Cabinet" or "Black Slate" (matching grandriverspas.com)
- [x] **Dynamic page titles** - Using document.title instead of Helmet for product pages
- [x] **SEO meta tags working** - Description and keywords via Helmet
- [x] **All Grand River products working** - Chariton, Chesapeake, Saginaw, etc.

### ✅ Separate Shopping Pages (Feb 24, 2026)
- [x] **Grand River Spas Page** (/grand-river-spas) - Dedicated page for Grand River products
- [x] **Viking Spas Page** (/viking-spas) - Dedicated page for Viking Spas products  
- [x] **Saunas Page** (/saunas) - Standalone saunas page
- [x] **Navigation Updated** - Direct links instead of dropdown (Home, Grand River Spas, Viking Spas, Saunas, Swim Spas, Cold Plunges, Wellness, Discover, Contact)

### ✅ Slogans Throughout Website (Feb 24, 2026)
- [x] **Hero Section** - "LIVE YOUR HEALTHIEST LIFE WHILE ENJOYING A VACATION EVERYDAY AT HOME"
- [x] **Header** - "American Made & Proud of It" badge on shop pages
- [x] **Footer** - Slogan banner at top + "Proudly Made in America"
- [x] **Shop Pages** - Slogans included on Grand River, Viking, and Saunas pages

### ✅ Product Detail Page Layout (Feb 24, 2026)
- [x] **Side-by-side layout** - Product image on left, color selector on right
- [x] **Corner color selector** - "Match Cabinet" and "Black Slate" options only
- [x] **Dynamic image URL** - Real images from Grand River CDN
- [x] **Color indicator badges** - Show selected shell, cabinet, and corner colors
- [x] **View tabs** - Color Preview, Side View, Overhead View

### ✅ SEO Optimization (Feb 24, 2026)
- [x] **react-helmet-async** for meta tags
- [x] **Dynamic page titles** via document.title (workaround for Helmet title issues)
- [x] **Meta descriptions** with keywords on all pages
- [x] **Open Graph** tags for social sharing

### ✅ True Image Swapping Color System (Feb 20, 2026)
**KEY FEATURE:** Real color combination images from Grand River Spas CDN!
- [x] **True image swapping** - selecting shell/cabinet colors loads actual product images
- [x] **CDN Integration** - Uses Grand River Spas visualizer
- [x] **URL Pattern:** `https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/{Model}_{Shell}_{Cabinet}_{Corner}.jpg`
- [x] **Shell colors:** White, Silver, Opal
- [x] **Cabinet colors:** Coastal Gray, Walnut, Barnwood, Black
- [x] **Corner colors:** Match Cabinet (same as cabinet) or Black Slate

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
│   ├── GrandRiverPage.jsx      # Grand River Spas page
│   ├── VikingSpasPage.jsx      # Viking Spas page
│   ├── SaunasPage.jsx          # Saunas with slogans + SEO
│   ├── SwimSpasPage.jsx        # Swim Spas with filters
│   ├── ProductDetailPage.jsx   # Color visualizer + SEO
│   ├── WellnessPage.jsx
│   ├── HotTubsPage.jsx
│   └── [other pages]
└── data/
    ├── products.js             # All product data with color options
    └── constants.js
```

## Product Data Summary
- **Grand River Spas:** 16 products (Premier + Eco Series)
- **Viking Spas:** 15 products (Elite/Heirloom/Element Series)
- **Swim Spas:** 8 products (4 Grand River + 4 Viking)
- **Saunas:** 2 products
- **Cold Plunges:** 1 product
- **Total Hot Tubs:** 31 products

## Testing Status
- ✅ Color visualizer fully tested (iteration_9.json)
- ✅ All shell colors working
- ✅ All cabinet colors working
- ✅ Corner colors (Match Cabinet / Black Slate) working
- ✅ Dynamic page titles working
- ✅ SEO meta tags working
- ✅ All Grand River products tested (Chariton 2, Chesapeake 2, Saginaw 2)

## Prioritized Backlog

### P0 (Completed - Feb 24, 2026)
- [x] Fix color visualizer - image updates correctly with color selections
- [x] Fix corner color options to match grandriverspas.com (Match Cabinet / Black Slate)
- [x] Fix SEO title on product pages

### P1 (Next Priority)
- [ ] Full product data audit against grandriverspas.com and vikingspas.com
- [ ] Add Schema.org JSON-LD for products (structured data)
- [ ] Lighthouse 100% audit and optimization

### P2 (Future)
- [ ] Add more subtle animations
- [ ] Jingle with localStorage preference
- [ ] Social media embedded feeds (Instagram/Facebook)
- [ ] Testimonials/Reviews section enhancement
