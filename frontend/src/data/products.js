// Product Data with Color Options for Upstate Hot Tubs

// Shell Color Options
export const SHELL_COLORS = {
  white: { name: 'White Satin', hex: '#F5F5F0', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/white.png' },
  silver: { name: 'Silver Satin', hex: '#C0C0C0', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/silver.png' },
  opal: { name: 'Opal Satin', hex: '#A8B5B8', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/opal.png' },
};

// Cabinet Color Options
export const CABINET_COLORS = {
  coastalGray: { name: 'Coastal Gray', hex: '#6B7280', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/coastalgray.png' },
  walnut: { name: 'Walnut', hex: '#5D4037', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/walnut.png' },
  barnwood: { name: 'Barnwood', hex: '#8B7355', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/barnwood.png' },
  black: { name: 'Black Slate', hex: '#1a1a1a', image: 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/black.png' },
};

// Base URLs for product images by color combination
const getProductImageUrl = (model, shell, cabinet, view) => {
  // Base URL pattern for Grand River Spas images
  const baseUrl = 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06';
  const shellName = shell.charAt(0).toUpperCase() + shell.slice(1);
  const cabinetName = cabinet === 'coastalGray' ? 'CoastalGray' : cabinet.charAt(0).toUpperCase() + cabinet.slice(1);
  const viewSuffix = view === 'overhead' ? 'OH' : 'Side';
  
  // Return a working URL pattern
  return `${baseUrl}/GR_${model}_${shellName}_${cabinetName}_${viewSuffix}_web.png?lossy=2&strip=1&webp=1`;
};

// Premier Series Products
export const PREMIER_PRODUCTS = [
  {
    id: 'chariton-2',
    name: 'Chariton 2',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 61,
    price: '$10,995.00',
    priceValue: 10995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '370 gallons | 1,400 liters',
    dryWeight: '650 lbs. | 295 kg',
    filledWeight: '3738 lbs. | 1693 kg',
    electrical: '240v/60amp',
    description: 'Our largest lounger model, designed for full-body relaxation with Volcano floor jet and focused neck jets.',
    longDescription: 'Step into luxurious comfort with the Chariton—our largest lounger model, designed for full-body relaxation. Every detail is crafted with purpose, from the powerful Volcano floor jet to the focused neck jets in the roomy captain\'s chairs. With its unmatched hydrotherapy and spacious design, the Chariton delivers head-to-toe rejuvenation and elevates every soak into a true spa experience.',
    features: [
      'Volcano floor jet for full-body massage',
      'Captain\'s chairs with focused neck jets',
      'Infinity Edge water feature',
      'LED points-of-light interior and exterior',
      'Balboa Control System',
      '5.5kW Heater',
      'Mazzei ozone injection system'
    ],
    jetDetails: {
      volcano: 1,
      twoInchDirectional: 8,
      twoInchMultiPort: 10,
      twoInchNeck: 8,
      threeInchDirectional: 8,
      threeInchRotating: 8,
      fourInchDirectional: 4,
      fourInchRotating: 6,
      fiveInchDirectional: 3,
      twoInchStationary: 4,
      ozoneJet: 1,
      waterFeatureJets: 2
    },
    options: {
      controls: 'SpaTouch™ 4',
      entertainment: 'Bluetooth® stereo, integrated 5" speakers',
      advancedJetting: 'Air X® Therapy System',
      coverLifter: 'Standard Grand River Spas lifter',
      steps: 'Premium or Standard | Black'
    },
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1',
      lifestyle: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon2_Lifestyle_4.jpg?lossy=2&strip=1&webp=1'
    },
    colorImages: {
      'white-coastalGray': {
        side: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
        overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1'
      },
      'opal-barnwood': {
        side: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
        overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1'
      },
      'silver-walnut': {
        side: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
        overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/GR_Chariton-1-Silver-OH_web.png?lossy=2&strip=1&webp=1'
      }
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'chariton-1',
    name: 'Chariton 1',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 51,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '370 gallons | 1,400 liters',
    dryWeight: '650 lbs. | 295 kg',
    filledWeight: '3738 lbs. | 1693 kg',
    electrical: '240v/60amp',
    description: 'Luxurious lounger with powerful Volcano jet and captain\'s chairs for head-to-toe rejuvenation.',
    longDescription: 'Experience the perfect blend of comfort and therapy with the Chariton 1. This 6-person lounger features a powerful Volcano floor jet and captain\'s chairs with targeted neck jets. Every detail is designed to deliver a full-body spa experience.',
    features: [
      'Volcano floor jet',
      'Captain\'s chairs with neck jets',
      'Infinity Edge water feature',
      'LED lighting system',
      'Balboa Control System',
      '5.5kW Heater'
    ],
    jetDetails: {
      volcano: 1,
      twoInchDirectional: 6,
      twoInchMultiPort: 10,
      twoInchNeck: 10,
      threeInchDirectional: 4,
      threeInchRotating: 6,
      fourInchDirectional: 4,
      fourInchRotating: 4,
      fiveInchDirectional: 3,
      ozoneJet: 1,
      waterFeatureJets: 2
    },
    options: {
      controls: 'SpaTouch™ 4',
      entertainment: 'Bluetooth® stereo, integrated 5" speakers',
      advancedJetting: 'Air X® Therapy System'
    },
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-1_White-Satin_CoastalGray_Side_web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/GR_Chariton-1-Silver-OH_web.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'chesapeake-2',
    name: 'Chesapeake 2',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 7,
    jets: 63,
    price: '$10,995.00',
    priceValue: 10995,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '380 gallons | 1,438 liters',
    electrical: '240v/60amp',
    description: 'Spacious open-seating hot tub with exclusive three-direction swing seats.',
    longDescription: 'The Chesapeake 2 offers spacious open seating for up to 7 adults. Featuring exclusive three-direction swing seats, this spa provides versatile hydrotherapy options for the whole family.',
    features: [
      'Three-direction swing seats',
      'Open seating configuration',
      '63 powerful jets',
      'LED lighting system',
      'Infinity Edge water feature'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White_CoastalGray_web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White-OH_web.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'chesapeake-1',
    name: 'Chesapeake 1',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 7,
    jets: 53,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '380 gallons | 1,438 liters',
    electrical: '240v/60amp',
    description: 'Total-body relaxation with targeted jet therapy for neck, wrists, and feet.',
    longDescription: 'The Chesapeake 1 delivers total-body relaxation with targeted jet therapy. Strategic jet placement provides relief for neck, wrists, and feet while accommodating up to 7 adults comfortably.',
    features: [
      'Targeted neck therapy',
      'Wrist and foot jets',
      'Open seating for 7',
      'LED lighting',
      'Water feature'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal_Black_Side_web-e1751040384296.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal-OH_web.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'saginaw-2',
    name: 'Saginaw 2',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 61,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    dimensionsMetric: '213 cm x 213 cm x 95.25cm',
    waterCapacity: '340 gallons | 1,287 liters',
    electrical: '240v/60amp',
    description: 'Premium 6-person hot tub with advanced jet system and LED lighting.',
    longDescription: 'The Saginaw 2 combines premium features in a perfectly sized package. With 61 jets and seating for 6, this spa delivers powerful hydrotherapy without compromising on space.',
    features: [
      '61 therapeutic jets',
      'Advanced LED lighting',
      'Open seating design',
      'Premium insulation',
      'Water feature'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'saginaw-1',
    name: 'Saginaw 1',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 51,
    price: '$8,995.00',
    priceValue: 8995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    dimensionsMetric: '213 cm x 213 cm x 95.25cm',
    waterCapacity: '340 gallons | 1,287 liters',
    electrical: '240v/60amp',
    description: 'Comfortable 6-person spa with therapeutic jets.',
    longDescription: 'The Saginaw 1 offers comfortable seating for 6 adults with 51 therapeutic jets. Perfect for families looking for quality hydrotherapy at a great value.',
    features: [
      '51 therapeutic jets',
      'LED lighting',
      'Open seating design',
      'Energy efficient'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'thornapple-2',
    name: 'Thornapple 2',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 7,
    jets: 61,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '370 gallons | 1,400 liters',
    electrical: '240v/60amp',
    description: 'Spacious 7-person hot tub with lounger seating.',
    longDescription: 'The Thornapple 2 offers the best of both worlds - a full lounger for complete relaxation and open seating for up to 7 adults. With 61 jets, everyone gets a therapeutic experience.',
    features: [
      'Full-body lounger',
      '61 powerful jets',
      'Seating for 7',
      'LED lighting',
      'Water feature'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'thornapple-1',
    name: 'Thornapple 1',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 7,
    jets: 51,
    price: '$8,995.00',
    priceValue: 8995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 92″ x 37.5″',
    dimensionsMetric: '234 cm x 234 cm x 95.25cm',
    waterCapacity: '370 gallons | 1,400 liters',
    electrical: '240v/60amp',
    description: 'Family-size 7-person spa with premium features.',
    longDescription: 'The Thornapple 1 is perfect for larger families. With seating for 7 and 51 therapeutic jets, everyone can enjoy the benefits of hydrotherapy together.',
    features: [
      'Lounger seating',
      '51 jets',
      'Family-size capacity',
      'LED lighting'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'muskegon-2',
    name: 'Muskegon 2',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 51,
    price: '$8,995.00',
    priceValue: 8995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    dimensionsMetric: '213 cm x 213 cm x 95.25cm',
    waterCapacity: '320 gallons | 1,211 liters',
    electrical: '240v/60amp',
    description: 'Versatile 6-person hot tub perfect for relaxation.',
    longDescription: 'The Muskegon 2 offers versatile seating for 6 adults with 51 therapeutic jets. Its compact footprint makes it perfect for patios and smaller spaces.',
    features: [
      'Compact design',
      '51 jets',
      'Versatile seating',
      'LED lighting'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon2_White_CoastalGray_Side-768x499.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'sturgeon',
    name: 'Sturgeon',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 6,
    jets: 45,
    price: '$7,995.00',
    priceValue: 7995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    dimensionsMetric: '213 cm x 213 cm x 89cm',
    waterCapacity: '300 gallons | 1,135 liters',
    electrical: '240v/60amp',
    description: 'Value-packed 6-person spa with quality construction.',
    longDescription: 'The Sturgeon delivers exceptional value without compromising quality. With seating for 6 and 45 jets, this spa is perfect for those seeking quality hydrotherapy at an accessible price.',
    features: [
      'Value pricing',
      '45 jets',
      'Quality construction',
      'LED lighting'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Silver_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'swift',
    name: 'Swift',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 3,
    jets: 33,
    price: '$6,995.00',
    priceValue: 6995,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    dimensionsMetric: '198 cm x 152 cm x 84cm',
    waterCapacity: '200 gallons | 757 liters',
    electrical: '120v/15amp convertible to 240v',
    description: 'Compact 3-person hot tub that fits perfectly in small outdoor spaces.',
    longDescription: 'The Swift is perfect for couples or small spaces. This compact spa features 33 jets and can run on standard 120v power, making installation simple and affordable.',
    features: [
      'Compact design',
      'Plug-and-play option',
      '33 jets',
      'Perfect for couples'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_2025_Swift_White_Black_Side.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_Swift_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  },
  {
    id: 'manistee',
    name: 'Manistee',
    series: 'Premier Series',
    brand: 'Grand River Spas',
    persons: 5,
    jets: 35,
    price: '$6,599.00',
    priceValue: 6599,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 33″',
    dimensionsMetric: '198 cm x 198 cm x 84cm',
    waterCapacity: '280 gallons | 1,060 liters',
    electrical: '240v/40amp',
    description: 'Energy-efficient 5-person hot tub.',
    longDescription: 'The Manistee offers excellent value with seating for 5 adults. Energy-efficient design keeps operating costs low while delivering quality hydrotherapy.',
    features: [
      'Energy efficient',
      '35 jets',
      'Seating for 5',
      'Value pricing'
    ],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black']
  }
];

// Swim Spas
export const SWIM_SPAS = [
  {
    id: 'valhalla',
    name: 'Valhalla',
    series: 'Freestyle Swim Spas',
    brand: 'Grand River Spas',
    length: '19 ft',
    price: '$39,995.00',
    priceValue: 39995,
    description: 'Our largest swim spa with separate hot tub section.',
    features: ['Dual zone temperature', 'Powerful swim jets', 'Full hot tub section'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'asgard',
    name: 'Asgard',
    series: 'Freestyle Swim Spas',
    brand: 'Grand River Spas',
    length: '17 ft',
    price: '$34,995.00',
    priceValue: 34995,
    description: '17-foot swim spa with versatile design.',
    features: ['Swim current system', 'Therapy seating', 'LED lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White_CoastalGray_web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White-OH_web.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'odin',
    name: 'Odin',
    series: 'Freestyle Swim Spas',
    brand: 'Grand River Spas',
    length: '15 ft',
    price: '$29,995.00',
    priceValue: 29995,
    description: '15-foot swim spa perfect for exercise and relaxation.',
    features: ['Variable speed jets', 'Exercise zone', 'Relaxation seating'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'thor',
    name: 'Thor',
    series: 'Freestyle Swim Spas',
    brand: 'Grand River Spas',
    length: '13 ft',
    price: '$24,995.00',
    priceValue: 24995,
    description: 'Compact swim spa with powerful performance.',
    features: ['Space-efficient', 'Swim jets', 'Therapy seats'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
    }
  }
];

// Saunas
export const SAUNAS = [
  {
    id: 'saunalife-ee8g',
    name: 'SaunaLife Model EE8G Sauna Barrel',
    brand: 'SaunaLife',
    price: '$10,995.95',
    priceValue: 10995,
    persons: 8,
    description: 'Premium barrel sauna for outdoor use.',
    features: ['8-person capacity', 'Premium wood construction', 'Electric heater included'],
    images: {
      primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80',
      secondary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80'
    }
  },
  {
    id: 'saunalife-ee6g',
    name: 'SaunaLife Model EE6G Sauna Barrel',
    brand: 'SaunaLife',
    price: '$8,995.95',
    priceValue: 8995,
    persons: 6,
    description: 'Compact barrel sauna with quality construction.',
    features: ['6-person capacity', 'Thermowood construction', 'Easy assembly'],
    images: {
      primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80',
      secondary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80'
    }
  }
];

// Cold Plunges
export const COLD_PLUNGES = [
  {
    id: 'chill-therapy',
    name: 'Chill Therapy Cold Plunge',
    series: 'Chill Therapy',
    brand: 'Grand River Spas',
    price: 'Call for Price',
    description: 'Professional-grade cold plunge for recovery and wellness.',
    features: ['Temperature control', 'Insulated design', 'Easy maintenance'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_2025_Swift_White_Black_Side.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_Swift_White_OH.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'resolute-pro',
    name: 'The Resolute Pro',
    brand: 'Cold Plunge Co.',
    price: 'Call for Price',
    description: 'Professional-grade cold plunge tub for serious athletes.',
    features: ['Rapid cooling', 'Commercial grade', 'Digital controls'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1'
    }
  }
];

// All Hot Tubs (for backwards compatibility)
export const HOT_TUBS = PREMIER_PRODUCTS;

// Get product by ID
export const getProductById = (id) => {
  return [...PREMIER_PRODUCTS, ...SWIM_SPAS, ...SAUNAS, ...COLD_PLUNGES].find(p => p.id === id);
};

// Get products by category
export const getProductsByCategory = (category) => {
  switch (category) {
    case 'hot-tubs':
      return PREMIER_PRODUCTS;
    case 'swim-spas':
      return SWIM_SPAS;
    case 'saunas':
      return SAUNAS;
    case 'cold-plunges':
      return COLD_PLUNGES;
    default:
      return [];
  }
};
