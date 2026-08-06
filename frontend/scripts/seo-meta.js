/* eslint-disable */
/**
 * Per-route SEO metadata used by the prerender script.
 *
 * For each route we inject (or override) into the prerendered HTML:
 *   - <link rel="canonical">
 *   - <meta property="og:url">         (page-specific, not just /)
 *   - <meta property="og:title">       (page's <title>)
 *   - <meta property="og:description"> (page's meta description)
 *   - <meta property="twitter:url">
 *   - <meta property="twitter:title">
 *   - <meta property="twitter:description">
 *   - BreadcrumbList JSON-LD (for non-root routes)
 *   - FAQPage JSON-LD (where the route has known FAQs)
 *
 * Leisure Wellness is online only and ships nationwide — no local geography.
 */

const SITE_URL = 'https://www.upstatehottubs.com';

// Per-route fallback metadata. Used when a page does not set its own
// <title>/<meta name="description"> via react-helmet-async.
const FALLBACK_META = {
  '/': {
    title: 'Leisure Wellness | Hot Tubs, Swim Spas, Saunas & Cold Plunges — Online, Shipped Nationwide',
    description: "Leisure Wellness (formerly Upstate Hot Tubs) is now online only. Shop premium American-made hot tubs, swim spas, saunas and cold plunges at factory-direct prices — shipped straight to your door, nationwide. First Responders, Military and Veterans discounts.",
    breadcrumb: null,
  },
  '/hot-tubs': {
    title: 'American-Made Hot Tubs Online | Factory-Direct, Ships Nationwide | Leisure Wellness',
    description: "Shop premium American-made hot tubs online. Grand River Spas, Dynasty Spas and Viking Spas at factory-direct prices with cover, cover lifter, steps and starter chemicals — shipped nationwide to your door.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }],
  },
  '/grand-river-spas': {
    title: 'Grand River Spas | American-Made Hot Tubs Online | Leisure Wellness',
    description: "Grand River Spas — premium American-built hot tubs at factory-direct prices from Leisure Wellness. Order online, full warranty, financing available, shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Grand River Spas', url: '/grand-river-spas' }],
  },
  '/dynasty-spas': {
    title: 'Dynasty Spas | American-Made Hot Tubs Online | Leisure Wellness',
    description: "Dynasty Spas — American-built hot tubs at factory-direct prices from Leisure Wellness. Quality construction, deep hydrotherapy, ordered online and shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Dynasty Spas', url: '/dynasty-spas' }],
  },
  '/swim-spas': {
    title: 'Swim Spas Online | Factory-Direct, Ships Nationwide | Leisure Wellness',
    description: "American-made swim spas for swimming, exercise, and hydrotherapy at home. Order online from Leisure Wellness at factory-direct prices — shipped straight to your door, nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Swim Spas', url: '/swim-spas' }],
  },
  '/saunas': {
    title: 'Saunas Online | Infrared & Traditional | Ships Nationwide | Leisure Wellness',
    description: "Infrared and traditional saunas at Leisure Wellness. Wellness, recovery and detox for your home — order online and we ship straight to your door, anywhere in the country.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Saunas', url: '/saunas' }],
  },
  '/cold-plunges': {
    title: 'Cold Plunges Online | Recovery & Wellness | Leisure Wellness',
    description: "Cold plunge tubs for athletic recovery, inflammation reduction and mental clarity. Order online from Leisure Wellness — shipped nationwide to your door.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Cold Plunges', url: '/cold-plunges' }],
  },
  '/covers': {
    title: 'Hot Tub Covers & Cover Lifters Online | Leisure Wellness',
    description: "Premium hot tub covers and cover lifters for any make or model. Custom-fit and built to last. Order online from Leisure Wellness — shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Covers', url: '/covers' }],
  },
  '/chemicals': {
    title: 'Hot Tub Chemicals & Water Care Online | Leisure Wellness',
    description: "Spa and hot tub chemicals, sanitizers, balancers and test strips. Order online from Leisure Wellness — shipped straight to your door, nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Chemicals', url: '/chemicals' }],
  },
  '/wellness': {
    title: 'Hot Tub Wellness Benefits | Hydrotherapy | Leisure Wellness',
    description: "Discover the wellness benefits of hot tubs, saunas and cold plunges — stress relief, better sleep, muscle recovery and chronic-pain support. Shop online with Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Wellness', url: '/wellness' }],
  },
  '/about': {
    title: 'About Leisure Wellness | American-Made Hot Tubs Online',
    description: "Leisure Wellness (formerly Upstate Hot Tubs) is a family-run, online-only retailer of premium American-made hot tubs, swim spas, saunas and cold plunges — shipped nationwide with lifetime support.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
  },
  '/anatomy-of-a-spa': {
    title: 'Anatomy of a Hot Tub | How Hot Tubs Are Built | Leisure Wellness',
    description: "Learn how a quality hot tub is built — shell, frame, insulation, jets, pumps, controls and cabinet. A buyer's guide from Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Anatomy of a Spa', url: '/anatomy-of-a-spa' }],
  },
  '/balneotherapy': {
    title: 'Balneotherapy & Hot Tub Therapy Benefits | Leisure Wellness',
    description: "Balneotherapy — the science of mineral and warm-water bathing. How modern hot tubs deliver hydrotherapy benefits at home. A guide from Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Balneotherapy', url: '/balneotherapy' }],
  },
  '/jets': {
    title: 'Hot Tub Jets Explained | Types of Spa Jets | Leisure Wellness',
    description: "A guide to hot tub jet types — directional, rotational, cluster and pulse — and how they deliver hydrotherapy. From Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Jets', url: '/jets' }],
  },
  '/events': {
    title: 'Events & Sales | Leisure Wellness',
    description: "Special events, seasonal sales and community giving from Leisure Wellness. We support First Responders, Law Enforcement, Military and Veterans.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Events', url: '/events' }],
  },
  '/financing': {
    title: 'Hot Tub Financing | Easy Approval | Leisure Wellness',
    description: "Hot tub financing made easy. Multiple lender options, fast approvals and flexible terms. Apply online with Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Financing', url: '/financing' }],
  },
  '/spa-butler': {
    title: 'Spa Butler Hot Tub Maintenance Guide | Leisure Wellness',
    description: "Spa Butler — hot tub cleaning, water care and maintenance tips to keep your spa pristine. From Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Spa Butler', url: '/spa-butler' }],
  },
  '/brochures': {
    title: 'Hot Tub & Swim Spa Brochures | Leisure Wellness',
    description: "Download brochures for Grand River Spas, Dynasty Spas, Viking Swim Spas, saunas and cold plunges. From Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Brochures', url: '/brochures' }],
  },
  '/contact': {
    title: 'Contact Leisure Wellness | Order Online | (864) 837-0155',
    description: "Questions or ready to order? Call (864) 837-0155 or email info@upstatehottubs.com. Leisure Wellness is online only — factory-direct hot tubs, swim spas, saunas and cold plunges shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }],
  },
  '/hours': {
    title: 'Customer Service Hours | Order Online 24/7 | Leisure Wellness',
    description: "Shop online 24/7 at Leisure Wellness. Have questions? Call (864) 837-0155 — our team is here to help you order the right hot tub, swim spa, sauna or cold plunge, shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hours', url: '/hours' }],
    faq: [
      {
        q: 'Can I order online anytime?',
        a: 'Yes — our online store is open 24/7. Browse and order hot tubs, swim spas, saunas and cold plunges whenever it suits you, and we ship nationwide.',
      },
      {
        q: 'How do I reach the Leisure Wellness team?',
        a: 'Call (864) 837-0155 or email info@upstatehottubs.com. We are happy to help you choose the right unit and answer any questions.',
      },
      {
        q: 'Do you have a showroom to visit?',
        a: 'No — Leisure Wellness is online only, which is exactly why our prices are lower. Order online or by phone and we ship straight to your door.',
      },
      {
        q: 'Where do you ship?',
        a: 'We ship nationwide, straight to your door, anywhere in the United States.',
      },
    ],
  },
  '/ar-visualizer': {
    title: 'Hot Tub AR Visualizer | See It In Your Backyard | Leisure Wellness',
    description: "Use our AR visualizer to see a hot tub or swim spa in your own backyard before you buy. Powered by Leisure Wellness.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'AR Visualizer', url: '/ar-visualizer' }],
  },
  '/membership': {
    title: 'Contrast Therapy Membership | Fire & Ice Society | Leisure Wellness',
    description: "Join the Fire & Ice Society contrast therapy membership from Leisure Wellness — infrared sauna, cold plunge and red light therapy for recovery, relaxation and energy.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Membership', url: '/membership' }],
  },
};

module.exports = { SITE_URL, FALLBACK_META };
