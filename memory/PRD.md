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
│   │   └── ColorSelector.jsx # Shell/cabinet color picker with checkmarks
│   └── ui/                   # Shadcn UI components
├── pages/
│   ├── HomePage.jsx          # Hero, products, categories
│   ├── HotTubsPage.jsx       # Hot tubs with FILTERS + brand separation
│   ├── SwimSpasPage.jsx      # Swim spas catalog
│   ├── SaunasPage.jsx        # Saunas catalog
│   ├── ColdPlungesPage.jsx   # Cold plunges catalog
│   ├── ProductDetailPage.jsx # Product with COLOR-CHANGING swatches
│   ├── WellnessPage.jsx      # Health benefits content
│   ├── AboutPage.jsx         # Dynasty Spas info
│   ├── ContactPage.jsx       # Form + Google Map
│   ├── EventsPage.jsx        # Community events
│   ├── FinancingPage.jsx     # Financing options
│   └── SpaButlerPage.jsx     # Maintenance services
└── data/
    ├── products.js           # Products with colorImages, filter/sort functions
    └── constants.js          # Site constants, wellness content
```

## What's Been Implemented

### ✅ Product Color Swatches (NEW - Feb 20, 2026)
- [x] Shell color swatches change product images when clicked
- [x] Cabinet color swatches change product images when clicked
- [x] Checkmarks appear on selected colors
- [x] Fallback image logic when exact color combo not available
- [x] Brand name displayed above series name

### ✅ Shop Filters (NEW - Feb 20, 2026)
- [x] Filter toggle button with active filter count
- [x] Brand filter: All Brands, Grand River Spas, Viking Spas
- [x] Price filters: Min ($5k, $7k, $9k, $10k) / Max ($7k-$15k)
- [x] Capacity filter: 1-3, 4-6, 7+ persons
- [x] Series filter (dynamic based on brand)
- [x] Seating layout filter: Open / Lounge
- [x] Sort: Featured, Price Low/High, Name A-Z, Most Jets
- [x] Clear all filters button

### ✅ Brand Separation (NEW - Feb 20, 2026)
- [x] Grand River Spas section with 12 products
- [x] Viking Spas section with 15 products
- [x] Both brands on same page when "All Brands" selected
- [x] Viking products include: Elite Series, Heirloom Series, Element Series

### ✅ Navigation (Consolidated)
- [x] Home link
- [x] Shop dropdown (Hot Tubs, Swim Spas, Saunas, Cold Plunges)
- [x] Wellness link
- [x] Discover dropdown (About Us, Events, Financing, Spa Butler)
- [x] Contact link
- [x] Mobile responsive menu

### ✅ Product Detail Pages
- [x] Individual routes for each product (/products/:id)
- [x] Color swatches with image changing
- [x] Side view / Overhead view toggle
- [x] Product specifications display
- [x] Features and options tabs
- [x] Request Quote CTA

### ✅ Wellness Page
- [x] Hero section with hot tub image
- [x] "Live Your Best Life" messaging
- [x] Health benefits sections
- [x] CTAs to shop/contact

### ✅ Other Pages
- [x] Homepage with hero video, products, categories
- [x] About page with Dynasty Spas info
- [x] Contact page with Netlify form + Google Map
- [x] Events, Financing, Spa Butler pages

## Product Data Summary

### Grand River Spas (12 products)
- Premier Series: Chariton 1-2, Chesapeake 1-2, Saginaw 1-2, Thornapple 1-2, Muskegon 2, Sturgeon, Swift, Manistee
- Price range: $6,599 - $10,995
- IDs: gr-chariton-2, gr-chariton-1, etc.

### Viking Spas (15 products)
- Elite Series: Heritage, Tradition, Apex, Ascent, Royale X, Regal X, Elevate X
- Heirloom Series: Regal, Royale, Elevate, Viking
- Element Series: Regal P+, Royale P+, Elevate P+, Viking P+
- Price range: $5,495 - $12,995
- IDs: vs-heritage, vs-tradition, etc.

### Swim Spas (4 products)
- Valhalla, Asgard, Odin, Thor
- Price range: $24,995 - $39,995

## Color Options
- **Shell Colors:** White Satin, Silver Satin, Opal Satin
- **Cabinet Colors (Grand River):** Coastal Gray, Walnut, Barnwood, Black Slate
- **Cabinet Colors (Viking):** Stone, Chestnut, Slate, Ash Gray

## Testing Status
- ✅ All features tested (100% success rate)
- ✅ Color swatches changing images - verified
- ✅ Filters working correctly - verified
- ✅ Brand separation - verified

## Prioritized Backlog

### P1 (Next Priority)
- [ ] Lighthouse 100% audit and optimization
- [ ] SEO Schema markup (LocalBusiness, Product, Review)

### P2 (Future)
- [ ] Jingle with localStorage preference
- [ ] Social media embedded feeds (Instagram/Facebook)
- [ ] Testimonials/Reviews section
- [ ] Image optimization (WebP/AVIF compression)
- [ ] Product comparison feature
