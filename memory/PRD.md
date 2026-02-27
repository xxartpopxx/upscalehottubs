# Upstate Hot Tubs - Product Requirements Document

## Original Problem Statement
Overhaul the "Upstate Hot Tubs" website with visual and functional changes including header redesign, hero video positioning, new content sections, mobile UX improvements, and a clean red/white/blue theme.

## Core Requirements
1. Header with "upstatehottubs" branding, updated logo
2. Hero video fully visible below nav, text below video (not overlaid)
3. "LIVE YOUR HEALTHIEST LIFE" headline with white outline
4. Animated American flags replacing "AMERICAN MADE" text
5. "Try Before You Buy Wet Test" section (compact, minimal whitespace)
6. "$1,500 value free" note on accessories line
7. Clean red/white/blue theme with subtle accents
8. "The Collection", "Why Upstate Hot Tubs?", "Why a Hot Tub?" sections
9. Shop All Models sorted lowest to highest price, mixed brands
10. Remove all Florida/Naples references
11. Videos on Wellness, Spa Butler, Balneotherapy, About pages
12. Dynasty Spas product corrections (Luxury->Oasis, Hideaway->Vacation)
13. Mobile: sticky color preview on product pages, compact layout

## Architecture
- Frontend: React + Tailwind CSS + Vite
- Backend: FastAPI (untouched)
- Database: MongoDB (untouched)
- Product data: Hardcoded in frontend constants

## What's Been Implemented
- Homepage redesign with all new sections
- Hero section: repositioned video, outlined text, animated flags
- Wet Test section with compact layout
- Trust badges, Resource cards, Product collections
- Shop All Models carousel with mixed brands
- Clean white theme with subtle red/blue accents
- Multiple video integrations on content pages
- Dynasty Spas product data corrections
- Mobile UX: sticky color preview, compact product page
- All Florida/Naples references removed
- Logo updated across site

## Resolved Issues (Feb 2026)
- Hero video cut off by nav bar: Fixed by adjusting responsive top padding (pt-24 md:pt-32 lg:pt-40)
- Wet Test section whitespace: Removed excessive padding, made section compact (py-2 container)

## Backlog
- P2: Migrate product data from frontend constants to backend API
