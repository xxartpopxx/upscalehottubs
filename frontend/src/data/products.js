// Product Data with Color Options for Upstate Hot Tubs
// Includes Grand River Spas and Viking Spas products

// Base URL for Grand River Spas color visualizer images
const GR_VISUALIZER_BASE = 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';

// Generate color combo image URL for Grand River Spas
const getGRColorImage = (model, shell, cabinet, corner = null) => {
  const shellName = shell.charAt(0).toUpperCase() + shell.slice(1);
  const cabinetName = cabinet === 'coastalGray' ? 'CoastalGray' : 
                      cabinet === 'barnwood' ? 'Barnwood' :
                      cabinet === 'walnut' ? 'Walnut' : 
                      cabinet === 'black' ? 'Black' : cabinet;
  const cornerName = corner || cabinetName;
  return `${GR_VISUALIZER_BASE}/${model}_${shellName}_${cabinetName}_${cornerName}.jpg`;
};

// Shell Color Options
export const SHELL_COLORS = {
  white: { name: 'White Satin', hex: '#F5F5F0', image: `${GR_VISUALIZER_BASE}/white.png` },
  silver: { name: 'Silver Satin', hex: '#C0C0C0', image: `${GR_VISUALIZER_BASE}/silver.png` },
  opal: { name: 'Opal Satin', hex: '#A8B5B8', image: `${GR_VISUALIZER_BASE}/opal.png` },
};

// Cabinet Color Options
export const CABINET_COLORS = {
  coastalGray: { name: 'Coastal Gray', hex: '#6B7280', image: `${GR_VISUALIZER_BASE}/coastalgray.png` },
  walnut: { name: 'Walnut', hex: '#5D4037', image: `${GR_VISUALIZER_BASE}/walnut.png` },
  barnwood: { name: 'Barnwood', hex: '#8B7355', image: `${GR_VISUALIZER_BASE}/barnwood.png` },
  black: { name: 'Black Slate', hex: '#1a1a1a', image: `${GR_VISUALIZER_BASE}/black.png` },
  stone: { name: 'Stone', hex: '#8B8B83', image: `${GR_VISUALIZER_BASE}/coastalgray.png` },
  chestnut: { name: 'Chestnut', hex: '#954535', image: `${GR_VISUALIZER_BASE}/walnut.png` },
  ashGray: { name: 'Ash Gray', hex: '#B2BEB5', image: `${GR_VISUALIZER_BASE}/coastalgray.png` },
  slate: { name: 'Slate', hex: '#708090', image: `${GR_VISUALIZER_BASE}/black.png` },
  taupe: { name: 'Taupe', hex: '#8B7D6B', image: `${GR_VISUALIZER_BASE}/walnut.png` },
  carbon: { name: 'Carbon', hex: '#333333', image: `${GR_VISUALIZER_BASE}/black.png` },
};

// Helper to generate all color combinations for a Grand River model
const generateGRColorImages = (modelName) => {
  const shells = ['white', 'silver', 'opal'];
  const cabinets = ['coastalGray', 'walnut', 'barnwood', 'black'];
  const colorImages = {};
  
  shells.forEach(shell => {
    cabinets.forEach(cabinet => {
      const key = `${shell}-${cabinet}`;
      const cabinetName = cabinet === 'coastalGray' ? 'CoastalGray' : 
                          cabinet.charAt(0).toUpperCase() + cabinet.slice(1);
      colorImages[key] = `${GR_VISUALIZER_BASE}/${modelName}_${shell.charAt(0).toUpperCase() + shell.slice(1)}_${cabinetName}_${cabinetName}.jpg`;
    });
  });
  
  return colorImages;
};

// ===========================================
// GRAND RIVER SPAS PRODUCTS - PREMIER SERIES
// ===========================================
export const GRAND_RIVER_PRODUCTS = [
  {
    id: 'gr-chariton-2',
    name: 'Chariton 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Chariton',
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
    longDescription: 'Step into luxurious comfort with the Chariton—our largest lounger model, designed for full-body relaxation. Every detail is crafted with purpose, from the powerful Volcano floor jet to the focused neck jets in the roomy captain\'s chairs.',
    features: ['Volcano floor jet for full-body massage', 'Captain\'s chairs with focused neck jets', 'Infinity Edge water feature', 'LED points-of-light, interior and exterior', 'Balboa Control System', '5.5kW Heater', 'Mazzei ozone injection system'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Chariton'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-chariton-1'
  },
  {
    id: 'gr-chariton-1',
    name: 'Chariton 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Chariton',
    persons: 6,
    jets: 51,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 92″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Luxurious lounger with powerful Volcano jet and captain\'s chairs for head-to-toe rejuvenation.',
    features: ['Volcano floor jet', 'Captain\'s chairs with neck jets', 'Infinity Edge water feature', 'LED lighting system', 'Balboa Control System'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-1_White-Satin_CoastalGray_Side_web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/GR_Chariton-1-Silver-OH_web.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Chariton'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-chariton-2'
  },
  {
    id: 'gr-chesapeake-2',
    name: 'Chesapeake 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Chesapeake',
    persons: 7,
    jets: 63,
    price: '$10,995.00',
    priceValue: 10995,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Spacious open-seating hot tub with exclusive three-direction swing seats.',
    features: ['Three-direction "swing" seats', 'Captain\'s chairs with jet therapy', 'Cascade water feature', '63 powerful jets', 'LED lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White_CoastalGray_web.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White-OH_web.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Chesapeake'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-chesapeake-1'
  },
  {
    id: 'gr-chesapeake-1',
    name: 'Chesapeake 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Chesapeake',
    persons: 7,
    jets: 53,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Total-body relaxation with targeted jet therapy for neck, wrists, and feet.',
    features: ['Targeted neck, wrist, and foot therapy', 'Three-direction swing seats', 'Open seating for 7', 'Cascade water feature'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal_Black_Side_web-e1751040384296.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal-OH_web.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Chesapeake'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-chesapeake-2'
  },
  {
    id: 'gr-saginaw-2',
    name: 'Saginaw 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Saginaw',
    persons: 6,
    jets: 61,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Premium 6-person hot tub with advanced jet system and LED lighting.',
    features: ['61 therapeutic jets', 'Advanced LED lighting', 'Open seating design', 'Premium insulation'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Saginaw'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-saginaw-1'
  },
  {
    id: 'gr-saginaw-1',
    name: 'Saginaw 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Saginaw',
    persons: 6,
    jets: 51,
    price: '$8,995.00',
    priceValue: 8995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Well-rounded 6-person spa with quality hydrotherapy.',
    features: ['51 jets', 'Open seating', 'LED lighting', 'Quality construction'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_1_Silver_Black_Side.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_1_Silver_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Saginaw'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-saginaw-2'
  },
  {
    id: 'gr-thornapple-2',
    name: 'Thornapple 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Thornapple',
    persons: 6,
    jets: 56,
    price: '$9,495.00',
    priceValue: 9495,
    seatingLayout: 'Lounge',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Thoughtfully designed lounger with unique knee and calf jets.',
    features: ['Unique knee and calf jets', 'Lounger seating', '56 jets', 'Cascade water feature'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Thornapple'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-thornapple-1'
  },
  {
    id: 'gr-thornapple-1',
    name: 'Thornapple 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Thornapple',
    persons: 6,
    jets: 46,
    price: '$8,495.00',
    priceValue: 8495,
    seatingLayout: 'Lounge',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Comfortable lounger with excellent jet coverage.',
    features: ['Lounger seating', '46 jets', 'LED lighting', 'Value pricing'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple1_White_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Thornapple'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-thornapple-2'
  },
  {
    id: 'gr-muskegon-2',
    name: 'Muskegon 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Muskegon',
    persons: 7,
    jets: 56,
    price: '$9,495.00',
    priceValue: 9495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Spacious 7-person open-seating spa with powerful hydrotherapy.',
    features: ['7-person capacity', '56 jets', 'Open seating', 'LED lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon2_White_CoastalGray_Side-768x499.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_2_White_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Muskegon'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-muskegon-1'
  },
  {
    id: 'gr-muskegon-1',
    name: 'Muskegon 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Muskegon',
    persons: 7,
    jets: 46,
    price: '$8,495.00',
    priceValue: 8495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Great value 7-person spa with quality features.',
    features: ['7-person capacity', '46 jets', 'Open seating', 'Value pricing'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon1_Opal_Walnut_Side-768x499.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_1_Silver_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Muskegon'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-muskegon-2'
  },
  {
    id: 'gr-sturgeon-2',
    name: 'Sturgeon 2',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Sturgeon',
    persons: 6,
    jets: 50,
    price: '$8,495.00',
    priceValue: 8495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/60amp',
    description: 'Value-packed 6-person spa with quality construction.',
    features: ['50 jets', 'Quality construction', 'LED lighting', 'Value pricing'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
      overhead: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%201-2_Silver_OH.png'
    },
    colorImages: generateGRColorImages('Sturgeon'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-sturgeon-1'
  },
  {
    id: 'gr-sturgeon-1',
    name: 'Sturgeon 1',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Sturgeon',
    persons: 6,
    jets: 40,
    price: '$7,495.00',
    priceValue: 7495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/60amp',
    description: 'Excellent entry-level Premier Series hot tub.',
    features: ['40 jets', 'Open seating', 'LED lighting', 'Entry-level Premier'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
      overhead: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%201-2_Silver_OH.png'
    },
    colorImages: generateGRColorImages('Sturgeon'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: 'gr-sturgeon-2'
  },
  {
    id: 'gr-swift',
    name: 'Swift',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Swift',
    persons: 3,
    jets: 33,
    price: '$6,995.00',
    priceValue: 6995,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '120v/15amp convertible',
    description: 'Compact 3-person hot tub perfect for smaller spaces.',
    features: ['Compact design', 'Plug-and-play option', '33 jets', 'Perfect for couples'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_2025_Swift_White_Black_Side.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_Swift_White_OH.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Swift'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: null
  },
  {
    id: 'gr-manistee',
    name: 'Manistee',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Manistee',
    persons: 5,
    jets: 35,
    price: '$6,599.00',
    priceValue: 6599,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 33″',
    electrical: '240v/40amp',
    description: 'Energy-efficient 5-person hot tub with great value.',
    features: ['Energy efficient', '35 jets', 'Seating for 5', 'Value pricing'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Manistee'),
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'barnwood', 'black'],
    relatedModel: null
  },
  // ECO SERIES
  {
    id: 'gr-sturgeon-eco',
    name: 'Sturgeon Eco',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Sturgeon',
    persons: 6,
    jets: 35,
    price: '$5,995.00',
    priceValue: 5995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/40amp',
    description: 'Eco-friendly 6-person hot tub with value pricing.',
    features: ['Eco-friendly design', '35 jets', '6-person capacity', 'Budget-friendly'],
    images: {
      primary: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%20Eco_White_Taupe_Side-768x617.png',
      overhead: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%20Eco_White_OH.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['taupe', 'black'],
    relatedModel: null
  },
  {
    id: 'gr-swift-eco',
    name: 'Swift Eco',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Swift',
    persons: 3,
    jets: 25,
    price: '$4,995.00',
    priceValue: 4995,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '120v/15amp',
    description: 'Budget-friendly compact 3-person hot tub.',
    features: ['Plug-and-play', 'Compact design', '25 jets', 'Most affordable'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_2025_Swift_White_Black_Side.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_Swift_White_OH.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['taupe', 'black'],
    relatedModel: null
  },
  {
    id: 'gr-manistee-eco',
    name: 'Manistee Eco',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Manistee',
    persons: 5,
    jets: 28,
    price: '$5,495.00',
    priceValue: 5495,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 33″',
    electrical: '240v/40amp',
    description: 'Value-packed 5-person Eco Series hot tub.',
    features: ['Eco-friendly', '28 jets', '5-person capacity', 'Great value'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['taupe', 'black'],
    relatedModel: null
  }
];

// ===========================================
// VIKING SPAS PRODUCTS
// ===========================================
export const VIKING_SPAS_PRODUCTS = [
  // ELITE SERIES
  {
    id: 'vs-heritage',
    name: 'Heritage',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Heritage',
    persons: 7,
    jets: 65,
    price: '$12,995.00',
    priceValue: 12995,
    seatingLayout: 'Lounge',
    dimensions: '94″ x 94″ x 38″',
    electrical: '240v/60amp',
    description: 'Our flagship model with premium features and maximum comfort.',
    features: ['Premium lounger', 'airX Therapy System', 'Bluetooth stereo', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Elite_Heritage1_Opal_OH-_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['stone', 'chestnut', 'black', 'slate'],
    relatedModel: null
  },
  {
    id: 'vs-tradition',
    name: 'Tradition',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Tradition',
    persons: 7,
    jets: 58,
    price: '$11,995.00',
    priceValue: 11995,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 38″',
    electrical: '240v/60amp',
    description: 'Classic design with modern hydrotherapy features.',
    features: ['Open seating', 'airX Therapy System', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Tradition2_Opal_Chestnut_Side_dropshadow-768x461.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Elite_Tradition1_White_OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['stone', 'chestnut', 'black', 'slate'],
    relatedModel: null
  },
  {
    id: 'vs-apex',
    name: 'Apex',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Apex',
    persons: 6,
    jets: 55,
    price: '$10,995.00',
    priceValue: 10995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Peak performance in a mid-size package.',
    features: ['6-person seating', 'airX Therapy System', 'Bluetooth stereo'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex1_Opal_Stone_Side-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex2_White_OH_121324.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['stone', 'chestnut', 'black', 'slate'],
    relatedModel: null
  },
  {
    id: 'vs-ascent',
    name: 'Ascent',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Ascent',
    persons: 5,
    jets: 48,
    price: '$9,995.00',
    priceValue: 9995,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 36″',
    electrical: '240v/60amp',
    description: 'Compact Elite Series with powerful performance.',
    features: ['5-person capacity', 'airX Therapy System', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_Chestnut_Side_Dropshadow_1440PX-768x485.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_OH_Dropshadow_1440px.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['stone', 'chestnut', 'black', 'slate'],
    relatedModel: null
  },
  {
    id: 'vs-royale-x',
    name: 'Royale X',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Royale X',
    persons: 7,
    jets: 62,
    price: '$13,495.00',
    priceValue: 13495,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Premium lounger with our most advanced features.',
    features: ['Full-body lounger', 'airX Therapy System', 'Premium jets', 'Bluetooth stereo'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RoyalX_White_Slate_Carbon-768x395.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RoyalX_White_Overhead-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'carbon', 'stone', 'chestnut'],
    relatedModel: null
  },
  {
    id: 'vs-regal-x',
    name: 'Regal X',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Regal X',
    persons: 6,
    jets: 58,
    price: '$12,495.00',
    priceValue: 12495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Premium open-seating spa with advanced therapy.',
    features: ['Open seating', 'airX Therapy System', 'Premium construction', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RegalX_Opal_Stone-1-768x439.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RegalX_Opal_Overhead.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['stone', 'carbon', 'slate', 'chestnut'],
    relatedModel: null
  },
  {
    id: 'vs-elevate-x',
    name: 'Elevate X',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Elevate X',
    persons: 5,
    jets: 52,
    price: '$11,495.00',
    priceValue: 11495,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 36″',
    electrical: '240v/60amp',
    description: 'Compact Elite with maximum features.',
    features: ['5-person capacity', 'airX Therapy System', 'Premium jets'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_ElevateX_White_Slate-768x561.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_ElevateX_White_OH-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'stone', 'carbon', 'chestnut'],
    relatedModel: null
  },
  // HEIRLOOM SERIES
  {
    id: 'vs-regal-heirloom',
    name: 'Regal',
    brand: 'Viking Spas',
    series: 'Heirloom Series',
    modelFamily: 'Regal',
    persons: 6,
    jets: 45,
    price: '$8,995.00',
    priceValue: 8995,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 34″',
    electrical: '240v/60amp',
    description: 'Premium features at an excellent value.',
    features: ['6-person seating', 'LED lighting', 'Quality construction'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_RegalETS_Silver_black_side_dropshadow-768x500.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Regal_White-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'black', 'barnwood'],
    relatedModel: null
  },
  {
    id: 'vs-royale-heirloom',
    name: 'Royale',
    brand: 'Viking Spas',
    series: 'Heirloom Series',
    modelFamily: 'Royale',
    persons: 7,
    jets: 50,
    price: '$9,495.00',
    priceValue: 9495,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 34″',
    electrical: '240v/60amp',
    description: 'Spacious lounger with Heirloom quality.',
    features: ['7-person capacity', 'Lounger seating', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_RoyaleETS_Opal_Walnut_side_dropshadow-768x490.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Royale_Silver-OH_dropshadow-2.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['walnut', 'coastalGray', 'black', 'barnwood'],
    relatedModel: null
  },
  {
    id: 'vs-elevate',
    name: 'Elevate',
    brand: 'Viking Spas',
    series: 'Heirloom Series',
    modelFamily: 'Elevate',
    persons: 5,
    jets: 38,
    price: '$7,995.00',
    priceValue: 7995,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 32″',
    electrical: '240v/60amp',
    description: 'Compact Heirloom with excellent value.',
    features: ['5-person capacity', 'LED lighting', 'Quality construction'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Heirloom_Elevate_White_AshGray-768x489.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Heirloom_Elevate_White_OH-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['ashGray', 'walnut', 'black', 'barnwood'],
    relatedModel: null
  },
  {
    id: 'vs-viking-heirloom',
    name: 'Viking',
    brand: 'Viking Spas',
    series: 'Heirloom Series',
    modelFamily: 'Viking',
    persons: 4,
    jets: 32,
    price: '$6,995.00',
    priceValue: 6995,
    seatingLayout: 'Open',
    dimensions: '72″ x 72″ x 33″',
    electrical: '240v/60amp',
    description: 'Classic Viking quality in a cozy package.',
    features: ['Compact 4-person', 'LED lighting', 'Quality build'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-3_Coastal-Gray-SIDE_dropshadow-768x636.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-3_White-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['coastalGray', 'walnut', 'black', 'barnwood'],
    relatedModel: null
  },
  // ELEMENT SERIES (Plug & Play)
  {
    id: 'vs-regal-p',
    name: 'Regal P+',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Regal P',
    persons: 6,
    jets: 38,
    price: '$6,495.00',
    priceValue: 6495,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 34″',
    electrical: '120v/15amp',
    description: 'Plug-and-play convenience with premium features.',
    features: ['Plug-and-play', '120v operation', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/Regal-P_Walnut-wBlk-SIDE-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Regal-P_White_OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['walnut', 'black', 'barnwood', 'coastalGray'],
    relatedModel: null
  },
  {
    id: 'vs-royale-p',
    name: 'Royale P+',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Royale P',
    persons: 7,
    jets: 42,
    price: '$6,995.00',
    priceValue: 6995,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 34″',
    electrical: '120v/15amp',
    description: 'Large capacity with plug-and-play simplicity.',
    features: ['Plug-and-play', 'Lounger seating', '120v operation'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Regal-P_Barnwood-wBlk-SIDE_dropshadow-768x585.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Royale-P_White-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['barnwood', 'walnut', 'black', 'coastalGray'],
    relatedModel: null
  },
  {
    id: 'vs-elevate-p',
    name: 'Elevate P+',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Elevate P',
    persons: 5,
    jets: 32,
    price: '$5,995.00',
    priceValue: 5995,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 32″',
    electrical: '120v/15amp',
    description: 'Entry-level comfort with easy installation.',
    features: ['Plug-and-play', 'Compact design', '120v operation'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Element_Elevate-P_White_Walnut-768x571.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Element_ElevateP_White_OH-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['walnut', 'black', 'barnwood', 'coastalGray'],
    relatedModel: null
  },
  {
    id: 'vs-viking-p',
    name: 'Viking P+',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Viking P',
    persons: 4,
    jets: 28,
    price: '$5,495.00',
    priceValue: 5495,
    seatingLayout: 'Open',
    dimensions: '72″ x 72″ x 32″',
    electrical: '120v/15amp',
    description: 'Compact plug-and-play perfection.',
    features: ['Plug-and-play', 'Most affordable', '120v operation'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-2P_Walnut-SIDE_-Dropshadow-768x672.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-2P_Opal-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['walnut', 'black', 'barnwood', 'coastalGray'],
    relatedModel: null
  }
];

// ===========================================
// SWIM SPAS - GRAND RIVER SPAS
// ===========================================
export const GRAND_RIVER_SWIM_SPAS = [
  {
    id: 'gr-ss-valhalla',
    name: 'Valhalla',
    brand: 'Grand River Spas',
    series: 'Freestyle Swim Spas',
    length: '19 ft',
    price: '$39,995.00',
    priceValue: 39995,
    description: 'Our largest swim spa with separate hot tub section.',
    features: ['Dual zone temperature', 'Powerful swim jets', 'Full hot tub section'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI2-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Valhalla_overhead.png'
    }
  },
  {
    id: 'gr-ss-asgard',
    name: 'Asgard',
    brand: 'Grand River Spas',
    series: 'Freestyle Swim Spas',
    length: '17 ft',
    price: '$34,995.00',
    priceValue: 34995,
    description: '17-foot swim spa with versatile design.',
    features: ['Swim current system', 'Therapy seating', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-2-768x579.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png'
    }
  },
  {
    id: 'gr-ss-odin',
    name: 'Odin',
    brand: 'Grand River Spas',
    series: 'Freestyle Swim Spas',
    length: '15 ft',
    price: '$29,995.00',
    priceValue: 29995,
    description: '15-foot swim spa perfect for exercise and relaxation.',
    features: ['Variable speed jets', 'Exercise zone', 'Relaxation seating'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-3-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png'
    }
  },
  {
    id: 'gr-ss-thor',
    name: 'Thor',
    brand: 'Grand River Spas',
    series: 'Freestyle Swim Spas',
    length: '13 ft',
    price: '$24,995.00',
    priceValue: 24995,
    description: 'Compact swim spa with powerful performance.',
    features: ['Space-efficient', 'Swim jets', 'Therapy seats'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor_Corner-View_dropshadow-768x678.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png'
    }
  }
];

// ===========================================
// SWIM SPAS - VIKING SPAS
// ===========================================
export const VIKING_SWIM_SPAS = [
  {
    id: 'vs-ss-valhalla',
    name: 'Valhalla',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '19 ft',
    price: '$39,995.00',
    priceValue: 39995,
    description: 'Our largest swim spa with separate hot tub section.',
    features: ['Dual zone temperature', 'Powerful swim jets', 'Full hot tub section'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI2-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Valhalla_overhead.png'
    }
  },
  {
    id: 'vs-ss-asgard',
    name: 'Asgard',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '17 ft',
    price: '$34,995.00',
    priceValue: 34995,
    description: '17-foot swim spa with versatile design.',
    features: ['Swim current system', 'Therapy seating', 'LED lighting'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-2-768x579.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png'
    }
  },
  {
    id: 'vs-ss-odin',
    name: 'Odin',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '15 ft',
    price: '$29,995.00',
    priceValue: 29995,
    description: '15-foot swim spa perfect for exercise and relaxation.',
    features: ['Variable speed jets', 'Exercise zone', 'Relaxation seating'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-3-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png'
    }
  },
  {
    id: 'vs-ss-thor',
    name: 'Thor',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '13 ft',
    price: '$24,995.00',
    priceValue: 24995,
    description: 'Compact swim spa with powerful performance.',
    features: ['Space-efficient', 'Swim jets', 'Therapy seats'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor_Corner-View_dropshadow-768x678.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png'
    }
  }
];

// Combined Swim Spas (for backward compatibility)
export const SWIM_SPAS = [...GRAND_RIVER_SWIM_SPAS, ...VIKING_SWIM_SPAS];

// Saunas and Cold Plunges
export const SAUNAS = [
  {
    id: 'sauna-ee8g',
    name: 'SaunaLife Model EE8G Sauna Barrel',
    brand: 'SaunaLife',
    series: 'Barrel Saunas',
    price: '$10,995.95',
    priceValue: 10995,
    persons: 8,
    description: 'Premium barrel sauna for outdoor use.',
    features: ['8-person capacity', 'Premium wood construction', 'Electric heater included'],
    images: {
      primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80',
      overhead: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80'
    }
  },
  {
    id: 'sauna-ee6g',
    name: 'SaunaLife Model EE6G Sauna Barrel',
    brand: 'SaunaLife',
    series: 'Barrel Saunas',
    price: '$8,995.95',
    priceValue: 8995,
    persons: 6,
    description: 'Compact barrel sauna with quality construction.',
    features: ['6-person capacity', 'Thermowood construction', 'Easy assembly'],
    images: {
      primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80',
      overhead: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80'
    }
  }
];

export const COLD_PLUNGES = [
  {
    id: 'cp-chill-therapy',
    name: 'Chill Therapy Cold Plunge',
    brand: 'Viking Spas',
    series: 'Chill Therapy',
    price: 'Call for Price',
    description: 'Professional-grade cold plunge for recovery and wellness.',
    features: ['Temperature control', 'Insulated design', 'Easy maintenance'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/Chill-Therapy_Corner-View1-600x450-1.jpg',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/06/Chill-Therapy_Overhead-600x433-1.jpg'
    }
  }
];

// Combined Hot Tubs (both brands)
export const HOT_TUBS = [...GRAND_RIVER_PRODUCTS, ...VIKING_SPAS_PRODUCTS];

// Get product by ID
export const getProductById = (id) => {
  return [...HOT_TUBS, ...SWIM_SPAS, ...SAUNAS, ...COLD_PLUNGES].find(p => p.id === id);
};

// Get related model
export const getRelatedModel = (product) => {
  if (!product?.relatedModel) return null;
  return getProductById(product.relatedModel);
};

// Get products by brand
export const getProductsByBrand = (brand) => {
  return HOT_TUBS.filter(p => p.brand === brand);
};

// Filter products
export const filterProducts = (products, filters) => {
  return products.filter(product => {
    if (filters.brand && filters.brand !== 'all' && product.brand !== filters.brand) return false;
    if (filters.minPrice && product.priceValue < filters.minPrice) return false;
    if (filters.maxPrice && product.priceValue > filters.maxPrice) return false;
    if (filters.persons && filters.persons !== 'all') {
      if (filters.persons === '1-3' && (product.persons < 1 || product.persons > 3)) return false;
      if (filters.persons === '4-6' && (product.persons < 4 || product.persons > 6)) return false;
      if (filters.persons === '7+' && product.persons < 7) return false;
    }
    if (filters.series && filters.series !== 'all' && product.series !== filters.series) return false;
    if (filters.seatingLayout && filters.seatingLayout !== 'all' && product.seatingLayout !== filters.seatingLayout) return false;
    return true;
  });
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
    case 'price-high':
      return sorted.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

// Get unique series
export const getUniqueSeries = (products) => {
  return [...new Set(products.map(p => p.series).filter(Boolean))];
};
