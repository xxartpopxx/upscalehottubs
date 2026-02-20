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

## Code Architecture
```
/app/frontend/src/
├── App.js                    # Main app with routes
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navigation with Shop/Discover dropdowns
│   │   ├── Footer.jsx        # Site footer
│   │   └── JinglePlayer.jsx  # Audio jingle button
│   ├── products/
│   │   ├── ProductCard.jsx   # Product card with image gallery
│   │   ├── ProductGrid.jsx   # Products grid layout
│   │   └── ColorSelector.jsx # Shell/cabinet color picker
│   └── ui/                   # Shadcn UI components
├── pages/
│   ├── HomePage.jsx          # Hero, products, categories
│   ├── HotTubsPage.jsx       # Hot tubs catalog
│   ├── SwimSpasPage.jsx      # Swim spas catalog
│   ├── SaunasPage.jsx        # Saunas catalog
│   ├── ColdPlungesPage.jsx   # Cold plunges catalog
│   ├── ProductDetailPage.jsx # Product with color swatches
│   ├── WellnessPage.jsx      # Health benefits content
│   ├── AboutPage.jsx         # Dynasty Spas info
│   ├── ContactPage.jsx       # Form + Google Map
│   ├── EventsPage.jsx        # Community events
│   ├── FinancingPage.jsx     # Financing options
│   └── SpaButlerPage.jsx     # Maintenance services
└── data/
    ├── products.js           # Product catalog with colors
    └── constants.js          # Site constants, wellness content
```

## What's Been Implemented

### ✅ Navigation (Consolidated)
- [x] Home link
- [x] Shop dropdown (Hot Tubs, Swim Spas, Saunas, Cold Plunges)
- [x] Wellness link
- [x] Discover dropdown (About Us, Events, Financing, Spa Butler)
- [x] Contact link
- [x] Mobile responsive menu

### ✅ Product Detail Pages
- [x] Individual routes for each product (/products/:id)
- [x] Shell color swatches (White Satin, Silver Satin, Opal Satin)
- [x] Cabinet color swatches (Coastal Gray, Walnut, Barnwood, Black)
- [x] Side view / Overhead view toggle
- [x] Product specifications display
- [x] Features and options tabs
- [x] Request Quote CTA

### ✅ Wellness Page (NEW)
- [x] Hero section with hot tub image
- [x] "Live Your Best Life" messaging
- [x] Health benefits sections (Hydrotherapy, Sleep, Stress, Family, Arthritis)
- [x] Statistics section
- [x] CTAs to shop/contact

### ✅ Homepage
- [x] Hero video with "AMERICAN MADE" text
- [x] Logo prominently displayed
- [x] Trust badges section
- [x] "Wet Test" section with video
- [x] Hot tubs product grid (8 products)
- [x] "What's Included" section
- [x] Swim spas product grid
- [x] Shop by categories

### ✅ Other Pages
- [x] About page with Dynasty Spas info
- [x] Contact page with Netlify form + Google Map
- [x] Events page with community events
- [x] Financing page with LightStream/HFS links
- [x] Spa Butler page with maintenance packages

### ✅ UI Features
- [x] Tax Special popup modal
- [x] Jingle player button
- [x] Sticky header navigation
- [x] Smooth animations throughout
- [x] Mobile responsive design

## Session Summary (Feb 20, 2026)

### Major Refactoring Completed
1. **Broke down monolithic App.js** (~1000 lines) into modular components
2. **Created proper folder structure** (pages/, components/, data/)
3. **Implemented Product Detail Pages** with color swatch functionality
4. **Added Wellness Page** with health benefits content
5. **Consolidated Navigation** with Shop and Discover dropdown menus

### Files Created
- `/app/frontend/src/components/layout/Header.jsx`
- `/app/frontend/src/components/layout/Footer.jsx`
- `/app/frontend/src/components/layout/JinglePlayer.jsx`
- `/app/frontend/src/components/products/ProductCard.jsx`
- `/app/frontend/src/components/products/ProductGrid.jsx`
- `/app/frontend/src/components/products/ColorSelector.jsx`
- `/app/frontend/src/pages/*.jsx` (12 page components)
- `/app/frontend/src/data/products.js`
- `/app/frontend/src/data/constants.js`

### Testing Status
- ✅ All tests passed (100% success rate)
- ✅ Navigation dropdowns working
- ✅ Product detail pages with color swatches working
- ✅ Wellness page working
- ✅ Contact form and Google Map working

## Prioritized Backlog

### P0 (Completed)
- [x] Code refactoring from monolithic to modular
- [x] Product detail pages with color swatches
- [x] Consolidated navigation
- [x] Wellness page

### P1 (Next Priority)
- [ ] Lighthouse 100% audit and optimization
- [ ] SEO Schema markup (LocalBusiness, Product, Review)
- [ ] Separate products by brand (Grand River vs Viking)

### P2 (Future)
- [ ] Jingle with localStorage preference persistence
- [ ] Social media embedded feeds (Instagram/Facebook)
- [ ] Testimonials/Reviews section
- [ ] Image optimization (WebP/AVIF compression)

## Product Data Summary
- **Hot Tubs:** 12 products (Chariton 1-2, Chesapeake 1-2, Saginaw 1-2, Thornapple 1-2, Muskegon 2, Sturgeon, Swift, Manistee)
- **Swim Spas:** 4 products (Valhalla, Asgard, Odin, Thor)
- **Saunas:** 2 products (SaunaLife EE8G, EE6G)
- **Cold Plunges:** 2 products (Chill Therapy, Resolute Pro)

## Color Options
- **Shell Colors:** White Satin, Silver Satin, Opal Satin
- **Cabinet Colors:** Coastal Gray, Walnut, Barnwood, Black Slate
