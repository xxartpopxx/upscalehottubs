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
 * Upstate Hot Tubs is online only and ships nationwide — no local geography.
 */

const SITE_URL = 'https://www.upstatehottubs.com';

// Per-route fallback metadata. Used when a page does not set its own
// <title>/<meta name="description"> via react-helmet-async.
const FALLBACK_META = {
  '/': {
    title: 'Upstate Hot Tubs | Hot Tubs, Swim Spas, Saunas & Cold Plunges — Online, Shipped Nationwide',
    description: "Upstate Hot Tubs (formerly Upstate Hot Tubs) is now online only. Shop premium American-made hot tubs, swim spas, saunas and cold plunges at factory-direct prices — shipped straight to your door, nationwide. First Responders, Military and Veterans discounts.",
    breadcrumb: null,
  },
  '/hot-tubs': {
    title: 'American-Made Hot Tubs Online | Factory-Direct, Ships Nationwide | Upstate Hot Tubs',
    description: "Shop premium American-made hot tubs online. Grand River Spas, Dynasty Spas and Viking Spas at factory-direct prices with cover, cover lifter, steps and starter chemicals — shipped nationwide to your door.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }],
  },
  '/grand-river-spas': {
    title: 'Grand River Spas | American-Made Hot Tubs Online | Upstate Hot Tubs',
    description: "Grand River Spas — premium American-built hot tubs at factory-direct prices from Upstate Hot Tubs. Order online, full warranty, financing available, shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Grand River Spas', url: '/grand-river-spas' }],
  },
  '/dynasty-spas': {
    title: 'Dynasty Spas | American-Made Hot Tubs Online | Upstate Hot Tubs',
    description: "Dynasty Spas — American-built hot tubs at factory-direct prices from Upstate Hot Tubs. Quality construction, deep hydrotherapy, ordered online and shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Dynasty Spas', url: '/dynasty-spas' }],
  },
  '/swim-spas': {
    title: 'Swim Spas Online | Factory-Direct, Ships Nationwide | Upstate Hot Tubs',
    description: "American-made swim spas for swimming, exercise, and hydrotherapy at home. Order online from Upstate Hot Tubs at factory-direct prices — shipped straight to your door, nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Swim Spas', url: '/swim-spas' }],
  },
  '/saunas': {
    title: 'Saunas Online | Infrared & Traditional | Ships Nationwide | Upstate Hot Tubs',
    description: "Infrared and traditional saunas at Upstate Hot Tubs. Wellness, recovery and detox for your home — order online and we ship straight to your door, anywhere in the country.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Saunas', url: '/saunas' }],
  },
  '/cold-plunges': {
    title: 'Cold Plunges Online | Recovery & Wellness | Upstate Hot Tubs',
    description: "Cold plunge tubs for athletic recovery, inflammation reduction and mental clarity. Order online from Upstate Hot Tubs — shipped nationwide to your door.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Cold Plunges', url: '/cold-plunges' }],
  },
  '/covers': {
    title: 'Hot Tub Covers & Cover Lifters Online | Upstate Hot Tubs',
    description: "Premium hot tub covers and cover lifters for any make or model. Custom-fit and built to last. Order online from Upstate Hot Tubs — shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Covers', url: '/covers' }],
  },
  '/chemicals': {
    title: 'Hot Tub Chemicals & Water Care Online | Upstate Hot Tubs',
    description: "Spa and hot tub chemicals, sanitizers, balancers and test strips. Order online from Upstate Hot Tubs — shipped straight to your door, nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Chemicals', url: '/chemicals' }],
  },
  '/wellness': {
    title: 'Hot Tub Wellness Benefits | Hydrotherapy | Upstate Hot Tubs',
    description: "Discover the wellness benefits of hot tubs, saunas and cold plunges — stress relief, better sleep, muscle recovery and chronic-pain support. Shop online with Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Wellness', url: '/wellness' }],
  },
  '/about': {
    title: 'About Upstate Hot Tubs | American-Made Hot Tubs Online',
    description: "Upstate Hot Tubs (formerly Upstate Hot Tubs) is a family-run, online-only retailer of premium American-made hot tubs, swim spas, saunas and cold plunges — shipped nationwide with lifetime support.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
  },
  '/anatomy-of-a-spa': {
    title: 'Anatomy of a Hot Tub | How Hot Tubs Are Built | Upstate Hot Tubs',
    description: "Learn how a quality hot tub is built — shell, frame, insulation, jets, pumps, controls and cabinet. A buyer's guide from Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Anatomy of a Spa', url: '/anatomy-of-a-spa' }],
  },
  '/balneotherapy': {
    title: 'Balneotherapy & Hot Tub Therapy Benefits | Upstate Hot Tubs',
    description: "Balneotherapy — the science of mineral and warm-water bathing. How modern hot tubs deliver hydrotherapy benefits at home. A guide from Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Balneotherapy', url: '/balneotherapy' }],
  },
  '/jets': {
    title: 'Hot Tub Jets Explained | Types of Spa Jets | Upstate Hot Tubs',
    description: "A guide to hot tub jet types — directional, rotational, cluster and pulse — and how they deliver hydrotherapy. From Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Jets', url: '/jets' }],
  },
  '/events': {
    title: 'Events & Sales | Upstate Hot Tubs',
    description: "Special events, seasonal sales and community giving from Upstate Hot Tubs. We support First Responders, Law Enforcement, Military and Veterans.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Events', url: '/events' }],
  },
  '/financing': {
    title: 'Hot Tub Financing | Easy Approval | Upstate Hot Tubs',
    description: "Hot tub financing made easy. Multiple lender options, fast approvals and flexible terms. Apply online with Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Financing', url: '/financing' }],
  },
  '/spa-butler': {
    title: 'Spa Butler Hot Tub Maintenance Guide | Upstate Hot Tubs',
    description: "Spa Butler — hot tub cleaning, water care and maintenance tips to keep your spa pristine. From Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Spa Butler', url: '/spa-butler' }],
  },
  '/brochures': {
    title: 'Hot Tub & Swim Spa Brochures | Upstate Hot Tubs',
    description: "Download brochures for Grand River Spas, Dynasty Spas, Viking Swim Spas, saunas and cold plunges. From Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Brochures', url: '/brochures' }],
  },
  '/contact': {
    title: 'Contact Upstate Hot Tubs | Order Online | (864) 837-0155',
    description: "Questions or ready to order? Call (864) 837-0155 or email info@upstatehottubs.com. Upstate Hot Tubs is online only — factory-direct hot tubs, swim spas, saunas and cold plunges shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }],
  },
  '/hours': {
    title: 'Customer Service Hours | Order Online 24/7 | Upstate Hot Tubs',
    description: "Shop online 24/7 at Upstate Hot Tubs. Have questions? Call (864) 837-0155 — our team is here to help you order the right hot tub, swim spa, sauna or cold plunge, shipped nationwide.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hours', url: '/hours' }],
    faq: [
      {
        q: 'Can I order online anytime?',
        a: 'Yes — our online store is open 24/7. Browse and order hot tubs, swim spas, saunas and cold plunges whenever it suits you, and we ship nationwide.',
      },
      {
        q: 'How do I reach the Upstate Hot Tubs team?',
        a: 'Call (864) 837-0155 or email info@upstatehottubs.com. We are happy to help you choose the right unit and answer any questions.',
      },
      {
        q: 'Do you have a showroom to visit?',
        a: 'No — Upstate Hot Tubs is online only, which is exactly why our prices are lower. Order online or by phone and we ship straight to your door.',
      },
      {
        q: 'Where do you ship?',
        a: 'We ship nationwide, straight to your door, anywhere in the United States.',
      },
    ],
  },
  '/ar-visualizer': {
    title: 'Hot Tub AR Visualizer | See It In Your Backyard | Upstate Hot Tubs',
    description: "Use our AR visualizer to see a hot tub or swim spa in your own backyard before you buy. Powered by Upstate Hot Tubs.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'AR Visualizer', url: '/ar-visualizer' }],
  },
  '/membership': {
    title: 'Contrast Therapy Membership | Fire & Ice Society | Upstate Hot Tubs',
    description: "Join the Fire & Ice Society contrast therapy membership from Upstate Hot Tubs — infrared sauna, cold plunge and red light therapy for recovery, relaxation and energy.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Membership', url: '/membership' }],
  },
};

module.exports = { SITE_URL, FALLBACK_META };
