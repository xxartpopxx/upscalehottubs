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
 *   - FAQPage JSON-LD (where the route has known FAQs - e.g. /hours)
 *
 * Pages that have no <title> (HotTubsPage, ContactPage, EventsPage, etc.)
 * use the fallback metadata from this file so the prerendered HTML still
 * ships with strong SEO signals.
 */

const SITE_URL = 'https://www.upstatehottubs.com';

// Per-route fallback metadata. Used when a page does not set its own
// <title>/<meta name="description"> via react-helmet-async.
const FALLBACK_META = {
  '/': {
    title: 'Upstate Hot Tubs | Hot Tubs & Swim Spas in Simpsonville SC, Greenville SC, Naples FL',
    description: "Premium American-Made Hot Tubs, Swim Spas, Saunas and Cold Plunges. Serving Simpsonville, Greenville, Greer, Anderson, Spartanburg, Fountain Inn SC and Naples FL. First Responders, Military and Veterans discounts.",
    breadcrumb: null,
  },
  '/hot-tubs': {
    title: 'Hot Tubs in Simpsonville SC & Greenville SC | Upstate Hot Tubs',
    description: "Shop premium American-made hot tubs in Simpsonville and Greenville, SC. Grand River Spas, Dynasty Spas and Viking Spas with free delivery, cover, cover lifter, steps and starter chemicals.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }],
  },
  '/grand-river-spas': {
    title: 'Grand River Spas | American-Made Hot Tubs | Upstate Hot Tubs',
    description: "Grand River Spas — premium American-built hot tubs sold and delivered by Upstate Hot Tubs in Simpsonville and Greenville, SC. Free delivery, full warranty, financing available.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Grand River Spas', url: '/grand-river-spas' }],
  },
  '/dynasty-spas': {
    title: 'Dynasty Spas | American-Made Hot Tubs | Upstate Hot Tubs',
    description: "Dynasty Spas — American-built hot tubs in stock at Upstate Hot Tubs in Simpsonville, SC. Quality construction, deep hydrotherapy and free delivery throughout the Upstate.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hot Tubs', url: '/hot-tubs' }, { name: 'Dynasty Spas', url: '/dynasty-spas' }],
  },
  '/swim-spas': {
    title: 'Swim Spas in Simpsonville & Greenville SC | Upstate Hot Tubs',
    description: "American-made swim spas for swimming, exercise, and hydrotherapy at home. Sold and delivered by Upstate Hot Tubs in Simpsonville, SC. Free in-home consultation.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Swim Spas', url: '/swim-spas' }],
  },
  '/saunas': {
    title: 'Saunas in Simpsonville SC | Infrared & Traditional | Upstate Hot Tubs',
    description: "Infrared and traditional saunas at Upstate Hot Tubs. Wellness, recovery and detox for your home — serving Simpsonville, Greenville, Spartanburg and the Upstate SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Saunas', url: '/saunas' }],
  },
  '/cold-plunges': {
    title: 'Cold Plunges in Simpsonville SC | Upstate Hot Tubs',
    description: "Cold plunge tubs for athletic recovery, inflammation reduction and mental clarity. Available at Upstate Hot Tubs with delivery throughout South Carolina.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Cold Plunges', url: '/cold-plunges' }],
  },
  '/covers': {
    title: 'Hot Tub Covers & Cover Lifters | Upstate Hot Tubs',
    description: "Premium hot tub covers and cover lifters for any make or model. Custom-fit and built to last. Pickup or delivery from Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Covers', url: '/covers' }],
  },
  '/chemicals': {
    title: 'Hot Tub Chemicals & Water Care | Upstate Hot Tubs',
    description: "Spa and hot tub chemicals, sanitizers, balancers and test strips. Free water testing in our Simpsonville, SC showroom.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Chemicals', url: '/chemicals' }],
  },
  '/wellness': {
    title: 'Hot Tub Wellness Benefits | Hydrotherapy | Upstate Hot Tubs',
    description: "Discover the wellness benefits of hot tubs, saunas and cold plunges — stress relief, better sleep, muscle recovery and chronic-pain support. Visit our Simpsonville SC showroom.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Wellness', url: '/wellness' }],
  },
  '/about': {
    title: 'About Upstate Hot Tubs | American-Made Hot Tubs in SC',
    description: "Upstate Hot Tubs is a family-run dealer of premium American-made hot tubs, swim spas, saunas and cold plunges. Serving SC and Naples FL with free delivery and lifetime support.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
  },
  '/anatomy-of-a-spa': {
    title: 'Anatomy of a Hot Tub | How Hot Tubs Are Built | Upstate Hot Tubs',
    description: "Learn how a quality hot tub is built — shell, frame, insulation, jets, pumps, controls and cabinet. A buyer's guide from Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Anatomy of a Spa', url: '/anatomy-of-a-spa' }],
  },
  '/balneotherapy': {
    title: 'Balneotherapy & Hot Tub Therapy Benefits | Upstate Hot Tubs',
    description: "Balneotherapy — the science of mineral and warm-water bathing. How modern hot tubs deliver hydrotherapy benefits at home. Visit Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Balneotherapy', url: '/balneotherapy' }],
  },
  '/jets': {
    title: 'Hot Tub Jets Explained | Types of Spa Jets | Upstate Hot Tubs',
    description: "A guide to hot tub jet types — directional, rotational, cluster and pulse — and how they deliver hydrotherapy. From Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Jets', url: '/jets' }],
  },
  '/events': {
    title: 'Events & Sales at Upstate Hot Tubs | Simpsonville SC',
    description: "Tent sales, expos and special events at Upstate Hot Tubs. Visit us at our Simpsonville, SC showroom or at upcoming community events.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Events', url: '/events' }],
  },
  '/financing': {
    title: 'Hot Tub Financing in SC | Easy Approval | Upstate Hot Tubs',
    description: "Hot tub financing made easy. Multiple lender options, fast approvals and flexible terms. Apply at Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Financing', url: '/financing' }],
  },
  '/spa-butler': {
    title: 'Spa Butler Hot Tub Maintenance Service | Upstate Hot Tubs',
    description: "Spa Butler — professional hot tub cleaning, water care and maintenance throughout the SC Upstate. Let us keep your spa pristine.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Spa Butler', url: '/spa-butler' }],
  },
  '/brochures': {
    title: 'Hot Tub & Swim Spa Brochures | Upstate Hot Tubs',
    description: "Download brochures for Grand River Spas, Dynasty Spas, Viking Swim Spas, saunas and cold plunges. From Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Brochures', url: '/brochures' }],
  },
  '/contact': {
    title: 'Contact Upstate Hot Tubs | Simpsonville SC | (864) 837-0155',
    description: "Call (864) 837-0155 or visit Upstate Hot Tubs at 1004 West Georgia Rd, Simpsonville SC. Hot tubs, swim spas, saunas and cold plunges with free delivery in SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }],
  },
  '/hours': {
    title: 'Store Hours | Upstate Hot Tubs | Simpsonville SC',
    description: "Visit Upstate Hot Tubs in Simpsonville, SC. Tue, Thu-Fri 10am-6pm, Wednesday 10am-8pm Late Night, Saturday 10am-5pm. Closed Sun & Mon — call (864) 837-0155 anytime to open by appointment!",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Hours', url: '/hours' }],
    faq: [
      {
        q: 'What are Upstate Hot Tubs store hours?',
        a: 'Tuesday, Thursday and Friday 10am-6pm. Wednesday 10am-8pm (Late Night). Saturday 10am-5pm. Closed Sunday and Monday.',
      },
      {
        q: 'Can I visit on Sunday or Monday when the store is closed?',
        a: "Yes — call (864) 837-0155 anytime and we'll open the showroom by appointment so you can come at a time that works for you.",
      },
      {
        q: 'Where is Upstate Hot Tubs located?',
        a: '1004 West Georgia Rd, Simpsonville, SC 29680. Serving Greenville, Greer, Anderson, Spartanburg, Fountain Inn and the SC Upstate.',
      },
      {
        q: 'How do I contact Upstate Hot Tubs?',
        a: 'Call (864) 837-0155 or email info@upstatehottubs.com. You can also visit our showroom in Simpsonville during business hours.',
      },
    ],
  },
  '/ar-visualizer': {
    title: 'Hot Tub AR Visualizer | See It In Your Backyard | Upstate Hot Tubs',
    description: "Use our AR visualizer to see a hot tub or swim spa in your own backyard before you buy. Powered by Upstate Hot Tubs in Simpsonville, SC.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'AR Visualizer', url: '/ar-visualizer' }],
  },
  '/membership': {
    title: 'Hot Tub Membership Program | Upstate Hot Tubs',
    description: "Join the Upstate Hot Tubs membership program for ongoing water care, maintenance and exclusive member discounts. Serving Simpsonville and the SC Upstate.",
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Membership', url: '/membership' }],
  },
};

module.exports = { SITE_URL, FALLBACK_META };
