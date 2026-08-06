// Site-wide Constants

// Leisure Wellness logo (beach / wave / sunset watercolor)
export const OLD_LOGO = '/leisure-wellness-logo.png';

// Leisure Wellness logo
export const NEW_LOGO = '/leisure-wellness-logo.png';

// Leisure Wellness logo (light backgrounds)
export const TRANSPARENT_LOGO = '/leisure-wellness-logo.png';

// About Page Image (Grand Opening)
export const ABOUT_IMAGE = 'https://customer-assets.emergentagent.com/job_ad3b0cee-ca9b-4651-9bd8-5c276c5059bb/artifacts/in0ew7x2_Untitled%20design%20%285%29.png';

// Free Items Images (Cover, Cover Lifter, Steps, Chemicals)
export const FREE_ITEMS_IMAGES = {
  cover: 'https://customer-assets.emergentagent.com/job_river-spa-catalog/artifacts/shtl8amd_SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GRE.avif',
  coverLifter: 'https://customer-assets.emergentagent.com/job_river-spa-catalog/artifacts/x4bjk1d4_SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GREENVILLE%20SC%2C%20SWIM%20SPAS%2C%20SWIM%20SPAS%20IN%20GREENVILLE%20SC%2C.avif',
  steps: 'https://customer-assets.emergentagent.com/job_river-spa-catalog/artifacts/jvkm6wp4_SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GREENVILLE%20SC%2C%20SWIM%20SPAS%2C%20SWIM%20SPAS%20IN%20GREENVILLE%20SC%2C-1.avif',
  chemicals: 'https://customer-assets.emergentagent.com/job_river-spa-catalog/artifacts/qcp7yp8w_SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GREENVILLE%20SC%2C%20SWIM%20SPAS%2C%20SWIM%20SPAS%20IN%20GREENVILLE%20SC%2C-2.avif',
};

// Assets URLs
export const ASSETS = {
  logo: NEW_LOGO,
  oldLogo: OLD_LOGO,
  transparentLogo: TRANSPARENT_LOGO,
  heroVideo: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/14akq3sp_SnapSave_App_1155304596774970_1080p.mp4',
  wetTestVideo: 'https://customer-assets.emergentagent.com/job_american-spa-portal/artifacts/atx9u9gd_SnapSave_App_1262194805786001_1080p.mp4',
  jingle: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/80qfrl8e_SnapSave_App_1155304596774970_1080p.mp3',
  aboutImage: ABOUT_IMAGE,
  freeItems: FREE_ITEMS_IMAGES,
};

// Contact Information
export const CONTACT = {
  phone: '(864) 837-0155',
  email: 'info@upstatehottubs.com',
  // Online-only, ships nationwide direct from the factory.
  onlineOnly: true,
  serviceAreas: ['Ships to all 50 states', 'Factory-direct delivery', 'Fast nationwide shipping', 'Order online or by phone'],
};

// Announcement messaging shown across the site (online-only / national)
export const ANNOUNCEMENT = {
  short: "Now online only — factory-direct pricing, shipped to your door nationwide.",
  headline: "Now Online Only — and You Save Because of It.",
  paragraph:
    "Leisure Wellness is now 100% online and shipping nationwide. With no showroom and no retail overhead, we pass those savings straight to you with factory-direct pricing. Order online or over the phone and we'll ship your hot tub, swim spa, sauna or cold plunge straight to your door — anywhere in the country. Same great products, better prices.",
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/upstatehottubs/',
  facebook: 'https://www.facebook.com/upstatehottubs/',
  youtube: 'https://www.youtube.com/@UpstateHotTubs',
  googleBusiness: 'https://www.google.com/search?q=upstate+hot+tubs&lrd=0x885825326c271a2d:0x1891ea6ec8837f87',
  googleReviews: 'https://www.google.com/search?q=upstate+hot+tubs&lrd=0x885825326c271a2d:0x1891ea6ec8837f87#lrd=0x885825326c271a2d:0x1891ea6ec8837f87,3',
  googleMaps: 'https://www.google.com/maps/place/Upstate+Hot+Tubs/data=!4m2!3m1!1s0x885825326c271a2d:0x1891ea6ec8837f87',
};

// Buyer's Guides - Downloadable PDFs
export const BUYERS_GUIDES = [
  {
    id: 'hot-tub-guide',
    title: 'Hot Tub Buying Guide',
    description: 'Everything you need to know before purchasing a hot tub — sizing, features, hydrotherapy benefits, energy efficiency, and budget tips.',
    file: '/brochures/Leisure-Wellness-Naples-Hot-Tub-Buying-Guide.pdf',
    cover: 'https://customer-assets.emergentagent.com/job_368729df-d6bb-4b62-9b0c-cb186aa3bff7/artifacts/f6vovx3o_leisure-wellness-naples-hot-tub-buying-guide.pdf.pdf',
    accent: '#EA6A1E'
  },
  {
    id: 'sauna-guide',
    title: 'Sauna Buying Guide',
    description: 'A complete guide to choosing the right sauna — infrared vs. traditional, sizing, wellness benefits, installation, and what to expect.',
    file: '/brochures/Leisure-Wellness-Naples-Sauna-Buying-Guide.pdf',
    cover: 'https://customer-assets.emergentagent.com/job_368729df-d6bb-4b62-9b0c-cb186aa3bff7/artifacts/bcib2eug_leisure-wellness-naples-sauna-buying-guide_3.pdf.pdf',
    accent: '#0F766E'
  },
];

// Curated Google Reviews
export const GOOGLE_REVIEWS = [
  {
    name: 'Greg M.',
    rating: 5,
    date: 'Recent',
    text: "Amazing staff and products. The warranty is the best in the business. They were the best in every category. We love our American Made Hot Tub."
  },
  {
    name: 'Sarah T.',
    rating: 5,
    date: 'Recent',
    text: "Drew and Greg are fair, knowledgeable, and really care about their customers. I highly recommend visiting if you are in the market for a hot tub."
  },
  {
    name: 'Michael R.',
    rating: 5,
    date: 'Recent',
    text: "Amazing experience buying our Marquis Hot Tub from Drew and Greg. We have had to service our hot tub several times and we can't thank them enough."
  },
  {
    name: 'Jennifer L.',
    rating: 5,
    date: 'Recent',
    text: "Dawn knows how to treat people, and we have been very satisfied to work with her. AAA+++ customer service! Had my first warranty issue and it was taken care of within a few days!"
  },
  {
    name: 'David K.',
    rating: 5,
    date: 'Recent',
    text: "Great no-pressure sales experience. We are really happy with our purchase and look forward to many years of enjoyment. The service reps are courteous, very knowledgeable, and always kept us in the loop."
  },
  {
    name: 'Linda H.',
    rating: 5,
    date: 'Recent',
    text: "The hot tub was delivered first thing in the morning on the date they said they would be there. They had 5 guys to remove the old hot tub and replace it with a new one. Couldn't be happier!"
  },
  {
    name: 'Robert P.',
    rating: 5,
    date: 'Recent',
    text: "Bought my tub here 3 years ago. Used it a lot. Best experience ever. The wellness benefits are real — better sleep, less back pain, and a happier me."
  },
  {
    name: 'Amanda S.',
    rating: 5,
    date: 'Recent',
    text: "These are the wellness experts! They took the time to truly understand my health goals — joint pain, sleep, and stress — and matched me with the perfect hot tub. Life-changing."
  },
];

export const GOOGLE_RATING = {
  average: 4.9,
  count: 28,
};

// Wellness Content
export const WELLNESS_BENEFITS = [
  {
    id: 'hydrotherapy',
    title: 'Hydrotherapy: The Real Deal',
    description: 'Hydrotherapy has been around since ancient civilizations. Today\'s hot tubs come with spa jets that do wonders like improving circulation, helping your muscles recover, and lowering anxiety.',
    icon: 'Droplets'
  },
  {
    id: 'sleep',
    title: 'Sleep Like a Baby',
    description: 'Tossing and turning at night? A hot tub might be the fix you need. The warm water and jets help melt away stress and loosen up muscles, so you can sleep like a rock.',
    icon: 'Moon'
  },
  {
    id: 'stress',
    title: 'Stress? Meet Your Match',
    description: 'Hot water improves circulation, calms your nerves, and reduces pain. Soak in hot water, and your body releases endorphins, helping you unwind from the day and relax.',
    icon: 'Heart'
  },
  {
    id: 'family',
    title: 'Family Time, But Better',
    description: 'Quality family time is priceless. Jump in the hot tub for some bonding time away from screens and distractions. It\'s a terrific way to make memories while boosting your well-being.',
    icon: 'Users'
  },
  {
    id: 'arthritis',
    title: 'Arthritis Relief, Naturally',
    description: 'The heat and gentle massage of water therapy help ease joint stiffness and pain. Plus, regular use can reduce inflammation and increase muscle flexibility, so you can stay active and feel good.',
    icon: 'Activity'
  }
];
