// Product Data with Color Options for Upstate Hot Tubs
// Includes Grand River Spas and Viking Spas products

// Base URL for Grand River Spas color visualizer images
const GR_VISUALIZER_BASE = 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';

// Grand River Spas 2025 Brochure URLs (with page anchors)
const GR_BROCHURE_BASE = 'https://customer-assets.emergentagent.com/job_aqua-american/artifacts/n0tw1z76_GR-2025_Brochure_RevA_Update_E_Final_6.16_final_email.pdf';
const GR_BROCHURES = {
  saginaw: `${GR_BROCHURE_BASE}#page=8`,
  thornapple: `${GR_BROCHURE_BASE}#page=9`,
  muskegon: `${GR_BROCHURE_BASE}#page=10`,
  sturgeon: `${GR_BROCHURE_BASE}#page=11`,
  manistee: `${GR_BROCHURE_BASE}#page=12`,
  eco: `${GR_BROCHURE_BASE}#page=15`,
  full: GR_BROCHURE_BASE,
};

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

// Viking Spas Color Options
// ELITE SERIES: Shell (White, Silver, Opal) + Cabinet (Slate, Chestnut, Stone, Carbon) + Corner (Match/Carbon)
// HEIRLOOM SERIES: Shell (White, Silver, Opal) + Cabinet (Ash Gray, Walnut, Barnwood, Black) + Corner (Match/Black)

// Viking Elite Series cabinet colors
export const VS_ELITE_CABINET_COLORS = {
  slate: { name: 'Slate', hex: '#708090', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/slate.png' },
  chestnut: { name: 'Chestnut', hex: '#954535', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/chestnut.png' },
  stone: { name: 'Stone', hex: '#8B8B83', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/stone.png' },
  carbon: { name: 'Carbon', hex: '#333333', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/carbon.png' },
};

// Viking Heirloom Series cabinet colors
export const VS_HEIRLOOM_CABINET_COLORS = {
  ashGray: { name: 'Ash Gray', hex: '#B2BEB5', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/ash.png' },
  walnut: { name: 'Walnut', hex: '#5D4037', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/walnut.png' },
  barnwood: { name: 'Barnwood', hex: '#8B7355', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/barnwood.png' },
  black: { name: 'Black Slate', hex: '#1a1a1a', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/black.png' },
};

// Viking Shell Colors (same for all series)
export const VS_SHELL_COLORS = {
  white: { name: 'White Satin', hex: '#F5F5F0', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/white.png' },
  silver: { name: 'Silver Satin', hex: '#C0C0C0', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/silver.png' },
  opal: { name: 'Opal Satin', hex: '#A8B5B8', image: 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/opal.png' },
};

// Dynasty Spas Color Options
export const DYNASTY_SHELL_COLORS = {
  sterlingMarble: { name: 'Sterling Marble', hex: '#E8E8E0' },
  stormClouds: { name: 'Storm Clouds', hex: '#6B7B8A' },
  tuscanSun: { name: 'Tuscan Sun', hex: '#C4A35A' },
  smokyMountain: { name: 'Smoky Mountain', hex: '#8B7355' },
};

export const DYNASTY_CABINET_COLORS = {
  blackConfer: { name: 'Black Confer', hex: '#1a1a1a' },
  grayConfer: { name: 'Gray Confer', hex: '#6B7280' },
  ashElite: { name: 'Ash Elite', hex: '#B2BEB5' },
  coastalGrayElite: { name: 'Coastal Gray Elite', hex: '#708090' },
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
    price: '$11,495.99',
    priceValue: 11495.99,
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
    price: '$10,995.99',
    priceValue: 10995.99,
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
    price: '$11,495.99',
    priceValue: 11495.99,
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
    price: '$10,995.99',
    priceValue: 10995.99,
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
    price: '$9,995.99',
    priceValue: 9995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Premium 6-person hot tub with advanced jet system and LED lighting.',
    features: ['61 therapeutic jets', 'Advanced LED lighting', 'Open seating design', 'Premium insulation'],
    brochure: GR_BROCHURES.saginaw,
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
    jets: 35,
    price: '$9,495.99',
    priceValue: 9495.99,
    seatingLayout: 'Lounge',
    dimensions: '86″ x 86″ x 37″',
    electrical: '240v/50amp',
    description: 'Well-rounded 6-person spa with quality hydrotherapy.',
    features: ['35 jets', 'Lounge seating', 'LED lighting', 'Cascade water feature'],
    brochure: GR_BROCHURES.saginaw,
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_1_White_Walnut_Black_Side-768x542.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_1_Silver_OH_web-768x768.png?lossy=2&strip=1&webp=1'
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
    price: '$9,995.99',
    priceValue: 9995.99,
    seatingLayout: 'Lounge',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Thoughtfully designed lounger with unique knee and calf jets.',
    features: ['Unique knee and calf jets', 'Lounger seating', '56 jets', 'Cascade water feature'],
    brochure: GR_BROCHURES.thornapple,
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
    price: '$9,495.99',
    priceValue: 9495.99,
    seatingLayout: 'Lounge',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Comfortable lounger with excellent jet coverage.',
    features: ['Lounger seating', '46 jets', 'LED lighting', 'Value pricing'],
    brochure: GR_BROCHURES.thornapple,
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
    price: '$9,495.99',
    priceValue: 9495.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 37.5″',
    electrical: '240v/60amp',
    description: 'Spacious 7-person open-seating spa with powerful hydrotherapy.',
    features: ['7-person capacity', '56 jets', 'Open seating', 'LED lighting'],
    brochure: GR_BROCHURES.muskegon,
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
    persons: 6,
    jets: 28,
    price: '$7,795.99',
    priceValue: 7795.99,
    seatingLayout: 'Lounge',
    dimensions: '86″ x 86″ x 37″',
    electrical: '240v/50amp',
    description: 'Great value 6-person spa with Adirondack-style lounger.',
    features: ['6-person capacity', '28 jets', 'Lounge seating', 'Infinity Edge water feature'],
    brochure: GR_BROCHURES.muskegon,
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon1_White_Black_Side-768x498.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_1_White_OH-768x768.png?lossy=2&strip=1&webp=1'
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
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/60amp',
    description: 'Value-packed 6-person spa with quality construction.',
    features: ['50 jets', 'Quality construction', 'LED lighting', 'Value pricing'],
    brochure: GR_BROCHURES.sturgeon,
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
    price: '$8,495.99',
    priceValue: 8495.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/60amp',
    description: 'Excellent entry-level Premier Series hot tub.',
    features: ['40 jets', 'Open seating', 'LED lighting', 'Entry-level Premier'],
    brochure: GR_BROCHURES.sturgeon,
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
    name: 'Swift Eco 220v',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Swift',
    persons: 3,
    jets: 33,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '220v convertible',
    description: 'Compact 3-person hot tub perfect for smaller spaces with 220v power.',
    features: ['Compact design', '220v power', '33 jets', 'Perfect for couples'],
    brochure: GR_BROCHURES.eco,
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
    name: 'Manistee 220v',
    brand: 'Grand River Spas',
    series: 'Premier Series',
    modelFamily: 'Manistee',
    persons: 5,
    jets: 20,
    price: '$7,495.99',
    priceValue: 7495.99,
    seatingLayout: 'Open',
    dimensions: '72″ round x 35″ tall',
    electrical: '240v/40amp',
    description: 'Round 5-person hot tub with LED lights and therapeutic jets with 220v power.',
    features: ['Round design', '20 jets', 'Seating for 5', 'LED lighting', '220v power'],
    brochure: GR_BROCHURES.manistee,
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_White_Taupe_Side-768x672.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee-ManisteeEco_White_OH-768x768.png?lossy=2&strip=1&webp=1'
    },
    colorImages: generateGRColorImages('Manistee'),
    shellColors: ['white', 'opal'],
    cabinetColors: ['taupe', 'walnut'],
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
    price: '$7,495.99',
    priceValue: 7495.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/40amp',
    description: 'Eco-friendly 6-person hot tub with value pricing.',
    features: ['Eco-friendly design', '35 jets', '6-person capacity', 'Budget-friendly'],
    brochure: GR_BROCHURES.eco,
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
      overhead: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%201-2_Silver_OH.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['taupe', 'black'],
    relatedModel: null
  },
  {
    id: 'gr-swift-eco',
    name: 'Swift Eco 120v',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Swift',
    persons: 3,
    jets: 25,
    price: '$7,495.99',
    priceValue: 7495.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '120v/15amp',
    description: 'Budget-friendly compact 3-person hot tub with plug-and-play 120v.',
    features: ['Plug-and-play', 'Compact design', '25 jets', '120v power'],
    brochure: GR_BROCHURES.eco,
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
    name: 'Manistee Eco 120v',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Manistee',
    persons: 5,
    jets: 20,
    price: '$6,995.99',
    priceValue: 6995.99,
    seatingLayout: 'Open',
    dimensions: '72″ round x 35″ tall',
    electrical: '120v/15amp',
    description: 'Plug-and-play round 5-person Eco Series hot tub with 120v.',
    features: ['Plug-and-play 120v', '20 jets', '5-person capacity', 'Great value'],
    brochure: GR_BROCHURES.eco,
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_Eco_Opal_Walnut_Side-768x576.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee-ManisteeEco_Opal_OH-768x768.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['white', 'opal'],
    cabinetColors: ['taupe', 'walnut'],
    relatedModel: null
  }
];

// ===========================================
// GRAND RIVER SPAS EXTRAS/OPTIONS
// ===========================================
export const GRAND_RIVER_EXTRAS = [
  {
    id: 'gr-extra-ozone',
    name: 'Ozone',
    price: '$250.00',
    priceValue: 250,
    description: 'Advanced ozone sanitization system for cleaner, clearer water with fewer chemicals.',
    image: 'https://images.pexels.com/photos/6620882/pexels-photo-6620882.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'gr-extra-touchscreen',
    name: 'Spa Touch Screen',
    price: '$700.00',
    priceValue: 700,
    description: 'Upgrade to a modern touch screen control panel for easier spa management.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&fit=crop'
  },
  {
    id: 'gr-extra-airx',
    name: 'Air X Therapy System',
    price: '$300.00',
    priceValue: 300,
    description: 'Enhanced air therapy system for a more luxurious massage experience.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'gr-extra-bluetooth',
    name: 'Bluetooth Stereo',
    price: '$950.00',
    priceValue: 950,
    description: 'Premium Bluetooth audio system for music while you relax.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'gr-extra-wifi',
    name: 'WiFi Module',
    price: '$400.00',
    priceValue: 400,
    description: 'Control your spa remotely with the WiFi module and smartphone app.',
    image: 'https://images.pexels.com/photos/5703426/pexels-photo-5703426.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// ===========================================
// DYNASTY SPAS EXTRAS/OPTIONS BY COLLECTION
// ===========================================

// Generic Dynasty Add-ons (applies to ALL Dynasty spas)
export const DYNASTY_GENERIC_EXTRAS = [
  {
    id: 'ds-generic-stereo',
    name: 'Instream Stereo',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Premium in.Stream audio system for your spa experience.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-generic-circ-pump',
    name: 'Circulation Pump',
    price: '$495.99',
    priceValue: 495.99,
    description: 'Energy-efficient circulation pump for improved water flow and filtration.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// Luxury Collection Add-ons
export const DYNASTY_LUXURY_EXTRAS = [
  {
    id: 'ds-luxury-stereo',
    name: 'Instream Stereo',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Premium in.Stream audio system for your spa experience.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-luxury-circ-pump',
    name: 'Circulation Pump',
    price: '$495.99',
    priceValue: 495.99,
    description: 'Energy-efficient circulation pump for improved water flow and filtration.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// Oasis Collection Add-ons
export const DYNASTY_OASIS_EXTRAS = [
  {
    id: 'ds-oasis-stereo',
    name: 'Instream Stereo',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Premium in.Stream audio system for your spa experience.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-oasis-lighting',
    name: 'In Mix Lighting',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Advanced in.Mix LED lighting system for ambient illumination.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-oasis-circ-pump',
    name: 'Circulation Pump',
    price: '$499.99',
    priceValue: 499.99,
    description: 'Energy-efficient circulation pump for improved water flow and filtration.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-oasis-intouch',
    name: 'In Touch App',
    price: '$399.99',
    priceValue: 399.99,
    description: 'Control your spa remotely with the in.Touch smartphone app.',
    image: 'https://images.pexels.com/photos/5703426/pexels-photo-5703426.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// Vacation Collection Add-ons
export const DYNASTY_VACATION_EXTRAS = [
  {
    id: 'ds-vacation-touchscreen',
    name: 'K1000 Touchscreen',
    price: '$499.99',
    priceValue: 499.99,
    description: 'Upgrade to the K.1000 touchscreen control panel.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&fit=crop'
  },
  {
    id: 'ds-vacation-stereo',
    name: 'Instream Stereo',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Premium in.Stream audio system for your spa experience.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-vacation-circ-pump',
    name: 'Circulation Pump',
    price: '$499.99',
    priceValue: 499.99,
    description: 'Energy-efficient circulation pump for improved water flow and filtration.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ds-vacation-intouch',
    name: 'In Touch App',
    price: '$399.99',
    priceValue: 399.99,
    description: 'Control your spa remotely with the in.Touch smartphone app.',
    image: 'https://images.pexels.com/photos/5703426/pexels-photo-5703426.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// ===========================================
// DYNASTY SPAS PRODUCTS
// ===========================================
export const DYNASTY_SPAS_PRODUCTS = [
  // OASIS COLLECTION
  {
    id: 'ds-paradise-bay-iii',
    name: 'Paradise Bay III',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Paradise Bay',
    persons: 5,
    jets: 83,
    price: '$13,999.99',
    priceValue: 13999.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '550 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '1000 lbs',
    filledWeight: '4800 lbs',
    description: 'Premium 5-person lounger with 83 powerful jets and illuminated fountain features.',
    features: ['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PARADISE_BAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_a461af4de3624cb18c573904c199c7fb~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-paradise-bay-ii',
    name: 'Paradise Bay II',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Paradise Bay',
    persons: 5,
    jets: 83,
    price: '$12,999.99',
    priceValue: 12999.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '550 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 7.0',
    filtration: '100 ft²',
    dryWeight: '1000 lbs',
    filledWeight: '4800 lbs',
    description: '5-person lounger with 83 jets featuring illuminated fountain jets.',
    features: ['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PARADISE_BAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_a461af4de3624cb18c573904c199c7fb~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-palm-island-ii',
    name: 'Palm Island II',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Palm Island',
    persons: 7,
    jets: 76,
    price: '$12,999.99',
    priceValue: 12999.99,
    seatingLayout: 'Bench',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame pumps',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: 'Spacious 7-person bench spa with 76 jets and illuminated fountain features.',
    features: ['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PALM_ISLAND_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_bca37801d2234c42920ff45b5ef8b947~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-palm-island-iii',
    name: 'Palm Island III',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Palm Island',
    persons: 7,
    jets: 76,
    price: '$13,999.99',
    priceValue: 13999.99,
    seatingLayout: 'Bench',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 56 frame pumps',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: 'Spacious 7-person bench spa with 76 jets and illuminated fountain features.',
    features: ['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PALM_ISLAND_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_bca37801d2234c42920ff45b5ef8b947~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-pleasure-cove-ii',
    name: 'Pleasure Cove II',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Pleasure Cove',
    persons: 5,
    jets: 80,
    price: '$12,999.99',
    priceValue: 12999.99,
    seatingLayout: 'Dual Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: '5-person dual lounger with 80 jets featuring illuminated waterfalls.',
    features: ['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PLEASURE_COVE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_ee35b0a0b9df47e1911c752a6dc65d80~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-pleasure-cove-iii',
    name: 'Pleasure Cove III',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Pleasure Cove',
    persons: 5,
    jets: 80,
    price: '$13,999.99',
    priceValue: 13999.99,
    seatingLayout: 'Dual Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: '5-person dual lounger with 80 jets featuring illuminated waterfalls.',
    features: ['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/PLEASURE_COVE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_ee35b0a0b9df47e1911c752a6dc65d80~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-coconut-bay-ii',
    name: 'Coconut Bay II',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Coconut Bay',
    persons: 5,
    jets: 74,
    price: '$12,999.99',
    priceValue: 12999.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame pumps',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: '5-person lounger with 74 jets and beautiful illuminated waterfalls.',
    features: ['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/COCONUT_BAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_7b87b150ef5a451db8a4599e9b9aa68f~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-coconut-bay-iii',
    name: 'Coconut Bay III',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Coconut Bay',
    persons: 5,
    jets: 74,
    price: '$13,999.99',
    priceValue: 13999.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 56 frame pumps',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4300 lbs',
    description: '5-person lounger with 74 jets and beautiful illuminated waterfalls.',
    features: ['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/COCONUT_BAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_7b87b150ef5a451db8a4599e9b9aa68f~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-caribbean-breeze',
    name: 'Caribbean Breeze',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Caribbean Breeze',
    persons: 7,
    jets: 73,
    price: '$10,999.99',
    priceValue: 10999.99,
    seatingLayout: 'Bench',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '750 lbs',
    filledWeight: '3935 lbs',
    description: '7-person bench spa with 73 jets and illuminated fountain features.',
    features: ['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/CARIBBEAN_BREEZE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_fbd8a68293fc44af9ba6616677d13e52~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-nassau-royal',
    name: 'Nassau Royale',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Nassau Royale',
    persons: 5,
    jets: 73,
    price: '$10,999.99',
    priceValue: 10999.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '750 lbs',
    filledWeight: '3975 lbs',
    description: '5-person lounger with 73 jets and illuminated waterfall.',
    features: ['Illuminated Waterfall', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'Digital Controls', 'LED Lights'],
    brochure: '/brochures/NASSAU_ROYALE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_cbdbc08c5de94874956a54d800585201~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  // VACATION COLLECTION
  {
    id: 'ds-cabana-bay',
    name: 'Cabana Bay',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Cabana Bay',
    persons: 5,
    jets: 42,
    price: '$9,999.99',
    priceValue: 9999.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '50 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4370 lbs',
    description: '5-person lounger with cascading waterfall and 42 jets.',
    features: ['Cascading Waterfall', 'Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Ozone Sanitation'],
    brochure: '/brochures/CABANA_BAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_5513dfe4f07146e6b3769397e333b714~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ocean-breeze',
    name: 'Ocean Breeze',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Ocean Breeze',
    persons: 7,
    jets: 42,
    price: '$9,999.99',
    priceValue: 9999.99,
    seatingLayout: 'Bench',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '900 lbs',
    filledWeight: '4570 lbs',
    description: '7-person bench spa with 4 water features and 42 jets.',
    features: ['4 Water Features', 'Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Ozone Sanitation'],
    brochure: '/brochures/OCEAN_BREEZE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_d99c32d0154b4d5784b516fb7f9cf64b~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-twin-palms',
    name: 'Twin Palms',
    brand: 'Dynasty Spas',
    series: 'Oasis Collection',
    modelFamily: 'Twin Palms',
    persons: 3,
    jets: 50,
    price: '$9,999.99',
    priceValue: 9999.99,
    seatingLayout: 'Dual Lounger',
    dimensions: '60" x 82.5" x 30"',
    waterCapacity: '180 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '375 lbs',
    filledWeight: '2175 lbs',
    description: 'Compact 3-person dual lounger perfect for couples.',
    features: ['LED Top Rail Lighting', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'K.1000 Digital Topside'],
    brochure: '/brochures/TWIN_PALMS_PRODUCT_SHEET-5ab8b7c0.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_0eda11c7c2bd4659886b1569a18263e4~mv2.png'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-bimini-110v',
    name: 'Bimini 110v',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Bimini',
    persons: 2,
    jets: 21,
    price: '$8,495.99',
    priceValue: 8495.99,
    seatingLayout: 'Lounger',
    dimensions: '72" x 72" x 33.5"',
    waterCapacity: '160 gallons',
    electrical: '110v/20a',
    pumps: '1 - 3.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '1390 lbs',
    description: 'Intimate 2-person lounger perfect for couples and small spaces. Plug-and-play 110v convenience.',
    features: ['K.506 Digital Topside', 'LED Underwater Light', 'Padded Headrests', 'RMAX Insulation', 'Maintenance Free Skirting', 'Energy Efficient Heater'],
    brochure: '/brochures/BIMINI_2_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_34462486d3164fcfb82328783db9ab3d~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer']
  },
  {
    id: 'ds-bimini-220v',
    name: 'Bimini 220v',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Bimini',
    persons: 2,
    jets: 21,
    price: '$8,495.99',
    priceValue: 8495.99,
    seatingLayout: 'Lounger',
    dimensions: '72" x 72" x 33.5"',
    waterCapacity: '160 gallons',
    electrical: '220v/60amp',
    pumps: '1 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '1390 lbs',
    description: 'Intimate 2-person lounger perfect for couples and small spaces. 220v for faster heating.',
    features: ['K.506 Digital Topside', 'LED Underwater Light', 'Padded Headrests', 'RMAX Insulation', 'Maintenance Free Skirting', 'Energy Efficient Heater'],
    brochure: '/brochures/BIMINI_2_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_34462486d3164fcfb82328783db9ab3d~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer']
  },
  {
    id: 'ds-treasure-cay-110v',
    name: 'Treasure Cay 110v',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Treasure Cay',
    persons: 5,
    jets: 45,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 36"',
    waterCapacity: '300 gallons',
    electrical: '110v/20a',
    pumps: '1 - 56 frame 6.0',
    filtration: '50 ft²',
    dryWeight: '700 lbs',
    filledWeight: '3200 lbs',
    description: '5-person lounger with comfortable seating and 45 jets. Plug-and-play 110v convenience.',
    features: ['Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Ozone Sanitation'],
    brochure: '/brochures/TREASURE_CAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_d5dd6e6b07c84184a58183333213387f~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-treasure-cay-220v',
    name: 'Treasure Cay 220v',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Treasure Cay',
    persons: 5,
    jets: 45,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 36"',
    waterCapacity: '300 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '50 ft²',
    dryWeight: '700 lbs',
    filledWeight: '3200 lbs',
    description: '5-person lounger with comfortable seating and 45 jets. 220v for faster heating.',
    features: ['Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Ozone Sanitation'],
    brochure: '/brochures/TREASURE_CAY_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_d5dd6e6b07c84184a58183333213387f~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-sunset-cove',
    name: 'Sunset Cove',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Sunset Cove',
    persons: 5,
    jets: 33,
    price: '$9,195.99',
    priceValue: 9195.99,
    seatingLayout: 'Lounger',
    dimensions: '60" x 82.5" x 33.5"',
    waterCapacity: '160 gallons',
    electrical: '220v/60amp',
    pumps: '1 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2,150 lbs',
    description: 'Compact 5-person lounger ideal for patios and smaller spaces. Features LED fountain jets.',
    features: ['LED Fountain Jets', 'LED Underwater Lighting', 'Padded Headrests', 'Easy Grip Built-in Handles', 'Maintenance Free Skirting'],
    brochure: '/brochures/SUNSET_COVE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_5cdf2136d8a84cb499f0c63569ebe365~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-tranquility-harbor',
    name: 'Tranquility Harbor',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Tranquility Harbor',
    persons: 7,
    jets: 48,
    price: '$9,695.99',
    priceValue: 9695.99,
    seatingLayout: 'Bench',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '450 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '100 ft²',
    dryWeight: '950 lbs',
    filledWeight: '4700 lbs',
    description: 'Spacious 7-person bench spa with 48 jets for family enjoyment.',
    features: ['Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Family Size'],
    brochure: '/brochures/TRANQUILITY_HARBOR_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_4f5108db76954c94977c8c470414a6df~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-serenity-cove',
    name: 'Serenity Cove',
    brand: 'Dynasty Spas',
    series: 'Vacation Collection',
    modelFamily: 'Serenity Cove',
    persons: 5,
    jets: 42,
    price: '$9,999.99',
    priceValue: 9999.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '675 lbs',
    filledWeight: '3,475 lbs',
    description: '5-person lounger designed for relaxation and tranquility.',
    features: ['Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Relaxation Focused'],
    brochure: '/brochures/SERENITY_COVE_PRODUCT_SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_20ede20bacfc496e90c2dce3d07818f3~mv2.jpg'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  // HIDEAWAY COLLECTION
  {
    id: 'ds-seaside-110v',
    name: 'Seaside 110v',
    brand: 'Dynasty Spas',
    series: 'Hideaway Collection',
    modelFamily: 'Seaside',
    persons: 4,
    jets: 20,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Bench',
    dimensions: '68" x 90" x 35"',
    waterCapacity: '250 gallons',
    electrical: '110v/20a',
    pumps: '1 - 3.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2,350 lbs',
    description: 'Entry-level spa with plug-and-play convenience. Features K.362 digital topside, black scallop jets, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Euro Fountains', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
    brochure: '/brochures/SEASIDE+PRODUCT+SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_5cdf2136d8a84cb499f0c63569ebe365~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer']
  },
  {
    id: 'ds-seaside-220v',
    name: 'Seaside 220v',
    brand: 'Dynasty Spas',
    series: 'Hideaway Collection',
    modelFamily: 'Seaside',
    persons: 4,
    jets: 20,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Bench',
    dimensions: '68" x 90" x 35"',
    waterCapacity: '250 gallons',
    electrical: '220v/60a',
    pumps: '1 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2,350 lbs',
    description: 'Entry-level spa with 220v power. Features K.362 digital topside, black scallop jets, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Euro Fountains', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
    brochure: '/brochures/SEASIDE+PRODUCT+SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_5cdf2136d8a84cb499f0c63569ebe365~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer']
  },
  {
    id: 'ds-bay-bliss',
    name: 'Bay Bliss',
    brand: 'Dynasty Spas',
    series: 'Hideaway Collection',
    modelFamily: 'Bay Bliss',
    persons: 4,
    jets: 30,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60a',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2,710 lbs',
    description: 'Compact lounger spa perfect for intimate relaxation. Features K.362 digital topside and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover'],
    brochure: '/brochures/BAY+BLISS+PRODUCT+SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_5cdf2136d8a84cb499f0c63569ebe365~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer']
  },
  {
    id: 'ds-high-tide',
    name: 'High Tide',
    brand: 'Dynasty Spas',
    series: 'Hideaway Collection',
    modelFamily: 'High Tide',
    persons: 4,
    jets: 30,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Bench',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60a',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2,710 lbs',
    description: 'Bench-style spa with ample seating for relaxation. Features K.362 digital topside and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover'],
    brochure: '/brochures/HIGH+TIDE+PRODUCT+SHEET.pdf',
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_20ede20bacfc496e90c2dce3d07818f3~mv2.jpg'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer']
  },
  // LUXURY COLLECTION - 30TH ANNIVERSARY MODELS
  {
    id: 'ds-bahama-royale',
    name: 'Bahama Royale',
    brand: 'Dynasty Spas',
    series: 'Luxury Collection',
    modelFamily: 'Bahama Royale',
    persons: 5,
    jets: 83,
    price: '$16,959.99',
    priceValue: 16959.99,
    seatingLayout: 'Lounger',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '425 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 6.0bhp',
    filtration: '100 ft²',
    dryWeight: '1000 lbs',
    filledWeight: '4400 lbs',
    description: 'Premium 30th Anniversary lounger spa with deep oversized seating, K.1000 topside control, in.Touch app, and full LED in.Mix lighting throughout.',
    features: ['K.1000 Topside Control', 'In.Touch App', 'LED In.Mix Lighting', 'LED Illuminated Jets', 'LED Illuminated Pillows', 'LED Illuminated Waterfall', 'LED Illuminated Diverters', 'LED Corner Lighting', 'Deep Oversized Seating', 'Lucite Acrylic', '2-Toned Elite Skirting'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_a461af4de3624cb18c573904c199c7fb~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['coastalGrayElite', 'ashElite']
  },
  {
    id: 'ds-imperial-royale',
    name: 'Imperial Royale',
    brand: 'Dynasty Spas',
    series: 'Luxury Collection',
    modelFamily: 'Imperial Royale',
    persons: 7,
    jets: 83,
    price: '$16,995.99',
    priceValue: 16995.99,
    seatingLayout: 'Bench',
    dimensions: '92" x 92" x 39"',
    waterCapacity: '450 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 6.0bhp',
    filtration: '100 ft²',
    dryWeight: '1000 lbs',
    filledWeight: '4400 lbs',
    description: 'Premium 30th Anniversary bench spa seating 7, with deep oversized seating, K.1000 topside control, in.Touch app, and full LED in.Mix lighting.',
    features: ['K.1000 Topside Control', 'In.Touch App', 'LED In.Mix Lighting', 'LED Illuminated Jets', 'LED Illuminated Pillows', 'LED Illuminated Waterfall', 'LED Illuminated Diverters', 'LED Corner Lighting', 'Deep Oversized Seating', 'Lucite Acrylic', '2-Toned Elite Skirting'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_a461af4de3624cb18c573904c199c7fb~mv2.webp'
    },
    shellColors: ['sterlingMarble', 'stormClouds', 'tuscanSun', 'smokyMountain'],
    cabinetColors: ['coastalGrayElite', 'ashElite']
  }
];

// ===========================================
// VIKING SPAS PRODUCTS
// ===========================================
export const VIKING_SPAS_PRODUCTS = [
  // ELITE SERIES - Includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package (Requires upgrade to Spa Touch 4)
  {
    id: 'vs-heritage-1',
    name: 'Heritage 1',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Heritage',
    persons: 7,
    jets: 65,
    price: '$12,495.99',
    priceValue: 12495.99,
    seatingLayout: 'Lounge',
    dimensions: '94″ x 94″ x 38″',
    electrical: '240v/60amp',
    description: 'Our flagship model with premium features and maximum comfort. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Premium lounger', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Elite_Heritage1_Opal_OH-_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Heritage',
    relatedModel: 'vs-heritage-2'
  },
  {
    id: 'vs-heritage-2',
    name: 'Heritage 2',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Heritage',
    persons: 7,
    jets: 70,
    price: '$12,995.99',
    priceValue: 12995.99,
    seatingLayout: 'Lounge',
    dimensions: '94″ x 94″ x 38″',
    electrical: '240v/60amp',
    description: 'Our flagship model with premium features and maximum comfort - enhanced jet configuration. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Premium lounger', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor', 'Enhanced jet configuration'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Elite_Heritage1_Opal_OH-_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Heritage',
    relatedModel: 'vs-heritage-1'
  },
  {
    id: 'vs-tradition-1',
    name: 'Tradition 1',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Tradition',
    persons: 7,
    jets: 58,
    price: '$12,495.99',
    priceValue: 12495.99,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 38″',
    electrical: '240v/60amp',
    description: 'Classic design with modern hydrotherapy features. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Open seating', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Tradition2_Opal_Chestnut_Side_dropshadow-768x461.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Elite_Tradition1_White_OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Tradition',
    relatedModel: 'vs-tradition-2'
  },
  {
    id: 'vs-tradition-2',
    name: 'Tradition 2',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Tradition',
    persons: 7,
    jets: 62,
    price: '$12,995.99',
    priceValue: 12995.99,
    seatingLayout: 'Open',
    dimensions: '92″ x 92″ x 38″',
    electrical: '240v/60amp',
    description: 'Classic design with modern hydrotherapy features - enhanced configuration. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Open seating', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor', 'Enhanced jet configuration'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Tradition2_Opal_Chestnut_Side_dropshadow-768x461.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Elite_Tradition1_White_OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Tradition',
    relatedModel: 'vs-tradition-1'
  },
  {
    id: 'vs-apex-1',
    name: 'Apex 1',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Apex',
    persons: 6,
    jets: 55,
    price: '$10,995.99',
    priceValue: 10995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Peak performance in a mid-size package. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['6-person seating', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex1_Opal_Stone_Side-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex2_White_OH_121324.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
    relatedModel: 'vs-apex-2'
  },
  {
    id: 'vs-apex-2',
    name: 'Apex 2',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Apex',
    persons: 6,
    jets: 60,
    price: '$11,495.99',
    priceValue: 11495.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Peak performance in a mid-size package - enhanced configuration. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['6-person seating', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor', 'Enhanced jet configuration'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex1_Opal_Stone_Side-768x512.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex2_White_OH_121324.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
    relatedModel: 'vs-apex-1'
  },
  {
    id: 'vs-ascent-1',
    name: 'Ascent 1',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Ascent',
    persons: 5,
    jets: 48,
    price: '$11,495.99',
    priceValue: 11495.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 36″',
    electrical: '240v/60amp',
    description: 'Compact Elite Series with powerful performance. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['5-person capacity', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_Chestnut_Side_Dropshadow_1440PX-768x485.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_OH_Dropshadow_1440px.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
    relatedModel: 'vs-ascent-2'
  },
  {
    id: 'vs-ascent-2',
    name: 'Ascent 2',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Ascent',
    persons: 5,
    jets: 52,
    price: '$11,995.99',
    priceValue: 11995.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 36″',
    electrical: '240v/60amp',
    description: 'Compact Elite Series with powerful performance - enhanced configuration. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['5-person capacity', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor', 'Enhanced jet configuration'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_Chestnut_Side_Dropshadow_1440PX-768x485.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_OH_Dropshadow_1440px.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
    relatedModel: 'vs-ascent-1'
  },
  {
    id: 'vs-royale-x',
    name: 'Royal X',
    brand: 'Viking Spas',
    series: 'Elite Series',
    modelFamily: 'Royal X',
    persons: 7,
    jets: 62,
    price: '$10,495.99',
    priceValue: 10495.99,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Premium lounger with our most advanced features. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Full-body lounger', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RoyalX_White_Slate_Carbon-768x395.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RoyalX_White_Overhead-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Elite_RoyalX',
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
    price: '$9,995.99',
    priceValue: 9995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 38″',
    electrical: '240v/60amp',
    description: 'Premium open-seating spa with advanced therapy. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Open seating', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RegalX_Opal_Stone-1-768x439.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RegalX_Opal_Overhead.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Elite_RegalX',
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
    price: '$9,600.99',
    priceValue: 9600.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 36″',
    electrical: '240v/60amp',
    description: 'Compact Elite with maximum features. Elite Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear Guard Ozone, Temp Shield, Foam Board, Premium Light Package. Requires upgrade to Spa Touch 4.',
    features: ['5-person capacity', 'airX Therapy System', 'Everlast Shell', 'Clear Guard Ozone', 'Temp Shield Foam Board', 'Premium LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_ElevateX_White_Slate-768x561.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_ElevateX_White_OH-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Elite_ElevateX',
    relatedModel: null
  },
  // HEIRLOOM SERIES - Includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear CD Ozone, Tempshield, Foam Board, LED Light Package (Requires Upgrade to Spa Touch 4)
  {
    id: 'vs-regal-heirloom',
    name: 'Regal',
    brand: 'Viking Spas',
    series: 'Heirloom Series',
    modelFamily: 'Regal',
    persons: 6,
    jets: 45,
    price: '$9,600.99',
    priceValue: 9600.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 34″',
    electrical: '240v/60amp',
    description: 'Premium features at an excellent value. Heirloom Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear CD Ozone, Tempshield, Foam Board, LED Light Package. Requires upgrade to Spa Touch 4.',
    features: ['6-person seating', 'Everlast Shell', 'Clear CD Ozone', 'Tempshield Foam Board', 'LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_RegalETS_Silver_black_side_dropshadow-768x500.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Regal_White-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['ashGray', 'walnut', 'barnwood', 'black'],
    colorVisualizerBase: 'Regal',
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
    price: '$9,600.99',
    priceValue: 9600.99,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 34″',
    electrical: '240v/60amp',
    description: 'Spacious lounger with Heirloom quality. Heirloom Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear CD Ozone, Tempshield, Foam Board, LED Light Package. Requires upgrade to Spa Touch 4.',
    features: ['7-person capacity', 'Lounger seating', 'Everlast Shell', 'Clear CD Ozone', 'Tempshield Foam Board', 'LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_RoyaleETS_Opal_Walnut_side_dropshadow-768x490.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Royale_Silver-OH_dropshadow-2.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['ashGray', 'walnut', 'barnwood', 'black'],
    colorVisualizerBase: 'Royale',
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
    price: '$9,495.99',
    priceValue: 9495.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 32″',
    electrical: '240v/60amp',
    description: 'Compact Heirloom with excellent value. Heirloom Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear CD Ozone, Tempshield, Foam Board, LED Light Package. Requires upgrade to Spa Touch 4.',
    features: ['5-person capacity', 'Everlast Shell', 'Clear CD Ozone', 'Tempshield Foam Board', 'LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Heirloom_Elevate_White_AshGray-768x489.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Heirloom_Elevate_White_OH-scaled.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['ashGray', 'walnut', 'barnwood', 'black'],
    colorVisualizerBase: 'Heirloom_Elevate',
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
    price: '$8,495.99',
    priceValue: 8495.99,
    seatingLayout: 'Open',
    dimensions: '72″ x 72″ x 33″',
    electrical: '240v/60amp',
    description: 'Classic Viking quality in a cozy package. Heirloom Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Clear CD Ozone, Tempshield, Foam Board, LED Light Package. Requires upgrade to Spa Touch 4.',
    features: ['Compact 4-person', 'Everlast Shell', 'Clear CD Ozone', 'Tempshield Foam Board', 'LED Light Package', 'Hope Resin Floor'],
    images: {
      primary: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-3_Coastal-Gray-SIDE_dropshadow-768x636.png',
      overhead: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-3_White-OH_dropshadow.png'
    },
    shellColors: ['white', 'silver', 'opal'],
    cabinetColors: ['ashGray', 'walnut', 'barnwood', 'black'],
    colorVisualizerBase: 'Viking-3',
    relatedModel: null
  },
  // ELEMENT SERIES (Plug & Play) - Includes: Spa Cover, Everlast Shell, Hope Resin Floor, Tempshield Foam Board, Premium LED Light Package
  {
    id: 'vs-regal-p',
    name: 'Regal P',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Regal P',
    persons: 6,
    jets: 38,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 34″',
    electrical: '120v/15amp',
    description: 'Plug-and-play convenience with premium features. Element Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Tempshield Foam Board, Premium LED Light Package.',
    features: ['Plug-and-play 120v', 'Everlast Shell', 'Hope Resin Floor', 'Tempshield Foam Board', 'Premium LED Light Package'],
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
    name: 'Royal P',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Royal P',
    persons: 7,
    jets: 42,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Lounge',
    dimensions: '92″ x 84″ x 34″',
    electrical: '120v/15amp',
    description: 'Large capacity with plug-and-play simplicity. Element Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Tempshield Foam Board, Premium LED Light Package.',
    features: ['Plug-and-play 120v', 'Lounger seating', 'Everlast Shell', 'Hope Resin Floor', 'Tempshield Foam Board', 'Premium LED Light Package'],
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
    name: 'Elevate P',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Elevate P',
    persons: 5,
    jets: 32,
    price: '$8,495.99',
    priceValue: 8495.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 78″ x 32″',
    electrical: '120v/15amp',
    description: 'Entry-level comfort with easy installation. Element Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Tempshield Foam Board, Premium LED Light Package.',
    features: ['Plug-and-play 120v', 'Compact design', 'Everlast Shell', 'Hope Resin Floor', 'Tempshield Foam Board', 'Premium LED Light Package'],
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
    name: 'Viking P',
    brand: 'Viking Spas',
    series: 'Element Series',
    modelFamily: 'Viking P',
    persons: 4,
    jets: 28,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Open',
    dimensions: '72″ x 72″ x 32″',
    electrical: '120v/15amp',
    description: 'Compact plug-and-play perfection. Element Series includes: Spa Cover, Everlast Shell, Hope Resin Floor, Tempshield Foam Board, Premium LED Light Package.',
    features: ['Plug-and-play 120v', 'Most affordable', 'Everlast Shell', 'Hope Resin Floor', 'Tempshield Foam Board', 'Premium LED Light Package'],
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
// VIKING SPAS EXTRAS/ADD-ONS
// ===========================================
export const VIKING_SPAS_EXTRAS = [
  {
    id: 'vs-extra-clearguard-uv',
    name: 'Clear Guard UV',
    price: '$495.99',
    priceValue: 495.99,
    description: 'Advanced UV water sanitation system for cleaner, clearer water.',
    image: 'https://images.pexels.com/photos/6620882/pexels-photo-6620882.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'vs-extra-wifi',
    name: 'WiFi Module',
    price: '$399.99',
    priceValue: 399.99,
    description: 'Control your spa remotely with the WiFi module and smartphone app.',
    image: 'https://images.pexels.com/photos/5703426/pexels-photo-5703426.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'vs-extra-airx',
    name: 'Air X Therapy',
    price: '$199.99',
    priceValue: 199.99,
    description: 'Enhanced air therapy system for a more luxurious massage experience.',
    image: 'https://images.pexels.com/photos/7365466/pexels-photo-7365466.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'vs-extra-spatouch4',
    name: 'Spa Touch 4',
    price: '$499.99',
    priceValue: 499.99,
    description: 'Upgrade to the Spa Touch 4 touchscreen control panel for easier spa management.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&fit=crop'
  },
  {
    id: 'vs-extra-bba-stereo',
    name: 'BBA Stereo with Subwoofer',
    price: '$995.99',
    priceValue: 995.99,
    description: 'Premium Bluetooth audio system with subwoofer for immersive sound.',
    image: 'https://images.pexels.com/photos/374606/pexels-photo-374606.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// Viking Spas Free Items Note
export const VIKING_SPAS_FREE_ITEMS = {
  note: 'All Viking Spas come with at NO CHARGE: Free Installation, Delivery, Set Up, Cover, Cover Lifter, Steps, and Chemicals.',
  items: ['Free Installation', 'Free Delivery', 'Free Set Up', 'Free Cover', 'Free Cover Lifter', 'Free Steps', 'Free Chemicals']
};

// ===========================================
// SWIM SPAS - GRAND RIVER SPAS
// ===========================================
export const GRAND_RIVER_SWIM_SPAS = [
  {
    id: 'gr-ss-valhalla',
    name: 'Valhalla',
    brand: 'Grand River Spas',
    series: 'Swim Spas',
    length: '19 ft',
    persons: 9,
    jets: 47,
    price: '$39,995.00',
    priceValue: 39995,
    dimensions: '19\' x 7\'6" x 52"',
    waterCapacity: '1,870 gallons',
    electrical: '2 x 5.5 kW/220V',
    pumps: 'Spa Zone 2x3.0BHP, Swim Zone 3x4.0BHP',
    filtration: '6 filters, 50 sq ft each',
    description: 'Our largest swim spa with separate spa and swim zones, dual temperature control, and powerful jet system.',
    features: ['Dual Zone Temperature', 'Spa Zone 6 Seats', 'Swim Zone 3 Seats', '47 Jets Total', 'LED Lighting', '6 Filtration Filters'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['grayOak']
  },
  {
    id: 'gr-ss-asgard',
    name: 'Asgard',
    brand: 'Grand River Spas',
    series: 'Swim Spas',
    length: '15 ft 9 in',
    persons: 5,
    jets: 42,
    price: '$34,995.00',
    priceValue: 34995,
    dimensions: '15\'9" x 7\'6" x 52"',
    waterCapacity: '1,717 gallons',
    electrical: '220V',
    pumps: '3x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: 'Mid-size swim spa with powerful swim zone and relaxation seating.',
    features: ['5-Person Seating', '42 Jets', '3 River Swim Jets', 'Swim Stabilization Jet', 'LED Color Changing Lights', 'BBA Audio System'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['grayOak']
  },
  {
    id: 'gr-ss-odin',
    name: 'Odin',
    brand: 'Grand River Spas',
    series: 'Swim Spas',
    length: '14 ft 9 in',
    persons: 6,
    jets: 59,
    price: '$29,995.00',
    priceValue: 29995,
    dimensions: '14\'9" x 7\'6" x 52"',
    waterCapacity: '1,584 gallons',
    electrical: '220V',
    pumps: '3x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: '15-foot swim spa with 59 jets and 6-person seating for exercise and relaxation.',
    features: ['6-Person Seating', '59 Jets', 'Variable Speed Jets', 'Exercise Zone', 'Relaxation Seating', 'LED Lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['grayOak']
  },
  {
    id: 'gr-ss-thor',
    name: 'Thor',
    brand: 'Grand River Spas',
    series: 'Swim Spas',
    length: '13 ft 2 in',
    persons: 3,
    jets: 21,
    price: '$24,995.00',
    priceValue: 24995,
    dimensions: '13\'2" x 7\'6" x 52"',
    waterCapacity: '1,453 gallons',
    electrical: '220V',
    pumps: '2x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: 'Compact swim spa with powerful performance for smaller spaces.',
    features: ['3-Person Seating', '21 Jets', 'Space-Efficient', 'Swim Jets', 'Therapy Seats', 'LED Lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png?lossy=2&strip=1&webp=1'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['grayOak']
  }
];

export const VIKING_SWIM_SPAS = [
  {
    id: 'vs-ss-valhalla',
    name: 'Valhalla',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '19 ft',
    persons: 9,
    jets: 47,
    price: '$40,495.99',
    priceValue: 40495.99,
    dimensions: '19\' x 7\'6" x 52"',
    waterCapacity: '1,870 gallons',
    electrical: '220V',
    pumps: 'Spa 2x3.0BHP, Swim 3x4.0BHP',
    filtration: '6 filters, 50 sq ft each',
    description: 'Our largest swim spa with separate spa and swim zones for dual-zone temperature control.',
    features: ['Dual Zone Temperature', '47 Jets Total', 'Full Hot Tub Section', '3 River Swim Jets', 'LED Lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'vs-ss-asgard',
    name: 'Asgard',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '15 ft 9 in',
    persons: 5,
    jets: 42,
    price: '$35,495.99',
    priceValue: 35495.99,
    dimensions: '15\'9" x 7\'6" x 52"',
    waterCapacity: '1,717 gallons',
    electrical: '220V',
    pumps: '3x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: 'Mid-size swim spa with versatile design for exercise and relaxation.',
    features: ['3 River Swim Jets', 'Swim Stabilization Jet', 'LED Color Changing Lights', 'BBA Audio System'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'vs-ss-odin',
    name: 'Odin',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '14 ft 9 in',
    persons: 6,
    jets: 59,
    price: '$30,495.99',
    priceValue: 30495.99,
    dimensions: '14\'9" x 7\'6" x 52"',
    waterCapacity: '1,584 gallons',
    electrical: '220V',
    pumps: '3x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: 'Swim spa with 59 jets and 6-person seating for exercise and relaxation.',
    features: ['6-Person Seating', '59 Jets', 'Variable Speed Jets', 'Exercise Zone', 'LED Lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png?lossy=2&strip=1&webp=1'
    }
  },
  {
    id: 'vs-ss-thor',
    name: 'Thor',
    brand: 'Viking Spas',
    series: 'Freestyle Swim Spas',
    length: '13 ft 2 in',
    persons: 3,
    jets: 21,
    price: '$25,495.99',
    priceValue: 25495.99,
    dimensions: '13\'2" x 7\'6" x 52"',
    waterCapacity: '1,453 gallons',
    electrical: '220V',
    pumps: '2x4.0BHP + 1x3.0BHP',
    filtration: '4 filters, 50 sq ft each',
    description: 'Compact swim spa with powerful performance for smaller spaces.',
    features: ['Space-Efficient', 'Swim Jets', 'Therapy Seats', 'LED Lighting'],
    images: {
      primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png?lossy=2&strip=1&webp=1',
      overhead: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png?lossy=2&strip=1&webp=1'
    }
  }
];

// ===========================================
// SWIM SPAS - DYNASTY SPAS
// ===========================================
export const DYNASTY_SWIM_SPAS = [
  {
    id: 'ds-ss-family-island-single',
    name: "11' Family Island Oasis SL",
    brand: 'Dynasty Spas',
    series: 'Family Collection',
    length: '11 ft',
    price: '$16,999.99',
    priceValue: 16999.99,
    dimensions: '92" x 132" x 38"',
    waterCapacity: '550 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2127 lbs',
    filledWeight: '6527 lbs',
    description: 'Family-size swim spa with single lounger, K.1000 topside control, and LED lighting throughout. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'Single Lounger', 'LED Top Rail Lighting', 'LED Illuminated Diverters', 'LED Illuminated Waterfalls', 'LED Underwater Light', 'LED Corner Skirt Lighting', 'Padded Headrests'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-family-island-dual',
    name: "11' Family Island Oasis DL",
    brand: 'Dynasty Spas',
    series: 'Family Collection',
    length: '11 ft',
    price: '$16,999.99',
    priceValue: 16999.99,
    dimensions: '92" x 132" x 38"',
    waterCapacity: '550 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2127 lbs',
    filledWeight: '6527 lbs',
    description: 'Family-size swim spa with dual loungers for maximum comfort and exercise. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'Dual Loungers', 'LED Top Rail Lighting', 'LED Illuminated Diverters', 'LED Illuminated Waterfalls', 'LED Underwater Light', 'LED Corner Skirt Lighting', 'Padded Headrests'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-aquex-party',
    name: "13' Aquex Party",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '13 ft',
    price: '$24,995.99',
    priceValue: 24995.99,
    dimensions: '92" x 160" x 51"',
    waterCapacity: '1,100 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 4.0bhp',
    filtration: '100 ft²',
    dryWeight: '2200 lbs',
    filledWeight: '11000 lbs',
    description: 'Party-ready 13-foot swim spa with bench seating, K.1000 digital controls, and LED illuminated fountain jets. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Digital Topside Control', 'LED Top Rail Lighting', 'LED Illuminated Diverters', 'LED Illuminated Water Fountains', 'LED Underwater Light', 'LED Corner Skirt Lighting', 'Padded Headrests', 'Stainless Steel Grab Bar'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-aquex-pro',
    name: "13' Aquex Pro",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '13 ft',
    price: '$23,995.99',
    priceValue: 23995.99,
    dimensions: '92" x 160" x 55"',
    waterCapacity: '1,530 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2100 lbs',
    filledWeight: '14500 lbs',
    description: 'Professional 13-foot swim spa with exercise equipment and new swim current technology. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'LED Top Rail Lighting', 'LED Illuminated Fountains', 'LED Illuminated Diverters', 'New Exercise Equipment', 'Stainless Steel Grab Bars', 'Ozonator System', 'RMAX Insulation'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-aquex-pro-plus',
    name: "13' Aquex Pro Plus",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '13 ft',
    price: '$27,995.99',
    priceValue: 27995.99,
    dimensions: '92" x 160" x 55"',
    waterCapacity: '1,530 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2100 lbs',
    filledWeight: '14500 lbs',
    description: 'Premium 13-foot swim spa with in.Mix illuminated jets, in.Stream audio, and swim coach workout system. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'LED Illuminated Jets', 'LED Illuminated Waterfalls', 'New Exercise Equipment', 'Stainless Steel Grab Bars'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-aquex-trainer',
    name: "16' Aquex Trainer",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '16 ft',
    price: '$33,995.99',
    priceValue: 33995.99,
    dimensions: '92" x 192" x 60"',
    waterCapacity: '1,850 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2700 lbs',
    filledWeight: '17500 lbs',
    description: '16-foot trainer swim spa with swim coach multi-programmable workout, in.Mix lighting, and in.Stream audio. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'Exercise/Rowing & Swim Tether', 'LED Illuminated Fountains', 'LED Corner Lighting'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer']
  },
  {
    id: 'ds-ss-aquex-pro-17',
    name: "17' Aquex Pro",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '17 ft',
    price: '$34,995.99',
    priceValue: 34995.99,
    dimensions: '92" x 204" x 60"',
    waterCapacity: '2,100 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2800 lbs',
    filledWeight: '19600 lbs',
    description: '17-foot professional swim spa with dual zone capability, swim coach, and premium in.Mix/in.Stream systems. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'Exercise/Rowing & Swim Tether', 'LED Illuminated Jets', 'LED Corner Lighting', 'Stainless Steel Grab Bars'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  },
  {
    id: 'ds-ss-aquex-dual-pro',
    name: "19' Aquex Dual Pro",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '19 ft',
    price: '$38,995.99',
    priceValue: 38995.99,
    dimensions: '92" x 228" x 60"',
    waterCapacity: '2,500 gallons',
    electrical: '220v/60amp',
    pumps: '4 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '3200 lbs',
    filledWeight: '23200 lbs',
    description: 'Our largest 19-foot dual-zone swim spa with separate hot tub section, swim coach, and premium features. Note: Swim spas come in Sterling Marble only. Installation pricing depends on crane placement - this does not include install.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'Dual Temperature Zones', 'Exercise/Rowing & Swim Tether', 'LED Corner Lighting', 'Bench Seating in Hot Tub'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  }
];

// Combined Swim Spas (for backward compatibility) - Viking removed
export const SWIM_SPAS = [...GRAND_RIVER_SWIM_SPAS, ...DYNASTY_SWIM_SPAS];

// Saunas and Cold Plunges
// White Glove Installation available for all saunas: $1,500.00
export const SAUNA_INSTALLATION_OPTION = {
  id: 'sauna-white-glove',
  name: 'White Glove Installation',
  price: '$1,500.00',
  priceValue: 1500,
  description: 'Professional white glove installation service. Our team handles delivery, setup, and ensures your sauna is ready to use.'
};

export const SAUNAS = [
  {
    id: 'sauna-finnmark-fd5-trinity',
    name: 'Finnmark FD-5 Trinity XL Infrared & Steam Sauna Combo',
    brand: 'Finnmark Design',
    series: '3-IN-ONE Combination Saunas',
    price: '$10,995.95',
    priceValue: 10995.95,
    persons: 4,
    dimensions: '75"W x 64"D x 83"H',
    interiorDimensions: '71"W x 57.5"D x 75.5"H',
    weight: '575 lbs (Product) / 840 lbs (Shipping)',
    electrical: '240V / 15 Amp',
    maxTemperature: 'IR 170°F | Traditional 190°F',
    description: 'Enjoy the benefits of Infrared Sauna Bathing at 170-degrees Fahrenheit combined with a true Finnish sauna! Welcome to the ultimate sauna experience. With the Trinity XL 3-IN-ONE from Finnmark, you will expand your wellness in a way like never before.',
    longDescription: 'This sauna combines all the benefits of Finnmark\'s UL-listed Spectrum Plus infrared heaters, traditional 4.5kW sauna heater, and true medical grade Spectrum Red Light™ Therapy all in one beautiful sauna cabin. This culmination of the perfect sauna experience will remind you that less is not always more. Why settle when you can experience it all? Give yourself the gift of self-care and wellness with Finnmark Design\'s Trinity XL 3-IN-ONE home sauna.\n\nThe Trinity Combination Sauna is the only sauna available that combines Finnmark\'s UL listed Spectrum Plus infrared heaters combined with a traditional sauna heater that uses vulcanite sauna stones to radiate and even heat and allow you to splash a ladle of water onto the rocks for steam. True medical grade Spectrum Red Light™ Therapy rounds out this multi-dimensional home wellness system.\n\nDon\'t compromise! Finnmark\'s FD-5 Trinity is the only combination sauna with true UL listed infrared heater panels together with a traditional sauna heater. Furthermore, the IR panels, red light therapy. Get all the benefits of infrared combined with traditional rocks with steam.\n\nGet hot fast! The only IR heaters that have passed the rigorous tests from Underwriter Laboratories used in tandem with a traditional steam sauna stove. Short wave far-infrared penetrates muscles, joints, and makes you sweat 25 times more than carbon panel heaters.\n\nThe traditional 240V/1PH 4.5kW sauna heater lets you splash some water onto the rocks for a luxurious steam sauna experience. Reap the benefits and the intensity only offered by a steam sauna.',
    features: [
      'Spectrum Plus™ UL Listed short wave infrared heaters for deep penetrating heat, up to 25x more than standard carbon panel heaters',
      'Spectrum Red Light™ Therapy - 192 Diode medical grade LED panel capable of producing highly beneficial 650nm of red light therapy combined with chromotherapy',
      'Antimicrobial Western Canadian cedar interior that protects against mold, bacteria and fungus',
      'Thermal Plus™ Aspen exterior that will never rot, warp, decay or chip',
      '3-IN-ONE Combination - UL listed infrared heaters combined with a traditional heater that produces high heat steam plus medical grade Red light therapy LED panel',
      'Built-in LCD Wi-Fi touchscreen controller with bluetooth audio',
      'Audio with 6" Hi-Fi speakers, 8mm tempered glass for ultimate thermal retention',
      'Extra large two-tier bench system',
      'Low EMF sauna tested by a NASA award winning testing facility',
      'High Emissivity infrared heaters',
      'Harvia KIP Series B 4.5KW Sauna Heater included'
    ],
    healthBenefits: [
      'The Spectrum Plus incoloy heaters warm your core body temperature, producing a cleaner, healthier sweat while lowering blood pressure and maintaining heart health',
      'Deeper penetration through sweating goes beyond the muscle and fat rather than a traditional or hot air sauna - work up the best possible sweat in the least amount of time',
      'Spectrum Plus heaters remove 17% more toxins such as cholesterol, fat-soluble toxins, toxic heavy metals, sulfuric acid, sodium, ammonia and uric acid',
      'Full Spectrum Sauna combination provides higher temperatures, full body coverage, deeper penetration, and better experience than any other sauna',
      'Natural pain relief remedy with every infrared sauna session',
      'Athletes appreciate faster muscle recovery with increased blood flow to the muscles, delivering more concentrated oxygen and creating more energy to heal',
      'Red light therapy stimulates production of collagen and other proteins for numerous potential health benefits'
    ],
    heaterSpecs: {
      model: 'Harvia KIP Series B',
      kilowatts: '4.5kW',
      voltage: '240V/1PH',
      amperage: '18.8 Amps',
      roomVolumeMin: '100 cu. ft.',
      roomVolumeMax: '210 cu. ft.',
      heaterDimensions: '16"W x 11"D x 24"H',
      warranty: '2-Year Warranty (Consumer Use)',
      features: ['Wall-mounted', 'Stainless steel construction', 'Built-in controls', 'UL listed', 'Direct rock-to-heating element contact', 'Designed, engineered, and made in Finland']
    },
    specifications: {
      model: 'FD-5',
      externalMaterials: 'Thermo-Aspen',
      interiorMaterials: 'Western Canadian Cedar',
      volts: '240',
      irWatts: '2700',
      amperage: '15',
      plugType: 'NEMA 6-15',
      maxTempIR: '170°F',
      maxTempTraditional: '190°F',
      interiorDimensions: '71"W x 57.5"D x 75.5"H',
      exteriorDimensions: '75"W x 64"D x 83"H',
      roomVolume: '130 cu. ft.',
      doorDimensions: '23.625"W x 68.875"H',
      doorHandleDimensions: '1.5"W x 13.25"H',
      glassThickness: '8mm W/Gasket',
      productWeight: '575 lbs',
      shippingDimensions: '80"W x 40"D x 83"H',
      shippingWeight: '840 lbs'
    },
    shipping: {
      costUS: 'FREE to contiguous United States',
      costCanada: '$490',
      note: 'This exceptional indoor Infrared Sanctuary requires delivery by a special appointment, and on a wooden pallet. The driver is responsible for "curbside delivery only" and will lower the items to ground level.'
    },
    includedItems: [
      'Bottom Panel', 'Top Panel', 'Back Panel', 'Front Panel', 'Left Panel', 'Right Panel',
      'Glass Door', 'Bench Support', 'Bench Top', 'Heater Cable', 'Floor Cable', 'Screws',
      'Power Supply Unit', 'Power Cable', 'Interior Heater Connections with Wood Cover',
      'Door Handle (2 Screws)', 'Infrared Sauna Heater Panels',
      'Harvia KIP Series B 4.5kW Sauna Heater',
      '1 Box of the Harvia AC3000 0-10cm Sauna Stones (44 lbs)',
      'Spectrum LED Near Infrared Ceiling Lights Combined with Medical-Grade Spectrum Red Light Therapy',
      'Controller 2.0, Built-In LCD Wi-Fi Touchscreen Control Panel with Bluetooth Audio',
      'ETL Certification', 'Limited Warranty'
    ],
    images: {
      primary: '/images/saunas/finnmark-fd5-trinity/image-1.png',
      gallery: [
        '/images/saunas/finnmark-fd5-trinity/image-1.png',
        '/images/saunas/finnmark-fd5-trinity/image-2.png',
        '/images/saunas/finnmark-fd5-trinity/image-3.png',
        '/images/saunas/finnmark-fd5-trinity/image-4.png',
        '/images/saunas/finnmark-fd5-trinity/image-5.png',
        '/images/saunas/finnmark-fd5-trinity/image-6.png',
        '/images/saunas/finnmark-fd5-trinity/image-7.png',
        '/images/saunas/finnmark-fd5-trinity/image-8.png',
        '/images/saunas/finnmark-fd5-trinity/image-9.png'
      ]
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-finnmark-fd4-trinity',
    name: 'Finnmark FD-4 Trinity Infrared & Steam Sauna Combo',
    brand: 'Finnmark Design',
    series: '3-IN-ONE Combination Saunas',
    price: '$9,995.95',
    priceValue: 9995.95,
    persons: 2,
    dimensions: '48"W x 48"D x 83"H',
    interiorDimensions: '44.25"W x 45.5"D x 75.5"H',
    weight: '437 lbs (Product) / 618 lbs (Shipping)',
    electrical: '120V / 15-20A',
    plugType: 'NEMA 5-15P',
    maxTemperature: 'IR 170°F | Traditional 190°F',
    description: 'Enjoy the benefits of Infrared Sauna Bathing at 170-degrees Fahrenheit combined with a true Finnish sauna! Welcome to the ultimate sauna experience with the Trinity 3-IN-ONE. This sauna combines all the benefits of Finnmark\'s UL listed Spectrum Plus infrared heaters, traditional 120V sauna heater, and true medical grade Spectrum Red Light™ Therapy all in one beautiful sauna cabin.',
    longDescription: 'The Trinity Combination Sauna is the only sauna available that combines Finnmark\'s UL listed Spectrum Plus infrared heaters combined with a traditional 120V sauna heater, plus true medical grade Spectrum Red Light™ Therapy.\n\nNo need to compromise. Finnmark\'s FD-4 Trinity is the only combination sauna with true UL listed infrared heaters together with a traditional sauna heater.\n\nGet hot fast! The only IR heaters that have passed the rigorous tests from Underwriter Laboratories used in tandem with a traditional steam sauna stove. Short wave far-infrared penetrates muscles, joints, and makes you sweat 25 times more than carbon panel heaters.\n\nThe traditional 1.9kW sauna heater lets you splash water onto the rocks for an authentic steam sauna experience. Enjoy the benefits and the intensity only offered by a steam sauna.\n\nRed light therapy is a type of phototherapy that uses low-level light wavelengths to penetrate the skin and stimulate the production of collagen and other proteins, which can lead to numerous potential health benefits. It\'s a perfect enhancement to your sauna wellness ritual.',
    features: [
      'Spectrum Plus™ UL Listed short wave infrared heaters for deep penetrating heat, up to 25x more than standard carbon panel heaters',
      'Spectrum Red Light™ Therapy - 192 Diode medical grade LED panel capable of producing highly beneficial 650nm of red light therapy combined with chromotherapy',
      'Antimicrobial Western Canadian cedar interior that protects against mold, bacteria and fungus',
      'Thermal Plus™ Aspen exterior that will never rot, warp, decay or chip',
      '3-IN-ONE Combination - UL listed infrared heaters combined with a traditional heater that produces high heat steam plus medical grade Red light therapy LED panel',
      'Built-in LCD Wi-Fi touchscreen controller with bluetooth audio',
      'Audio with 6" Hi-Fi speakers, 8mm tempered glass for ultimate thermal retention',
      'Extra large two-tier bench system',
      'Low EMF sauna tested by a NASA award winning testing facility',
      'High Emissivity infrared heaters',
      'Harvia Vega Compact 1900 Sauna Heater included',
      'Works on standard 120V outlet - no special electrical required'
    ],
    healthBenefits: [
      'The Spectrum Plus incoloy heaters warm your core body temperature, producing a cleaner, healthier sweat while lowering blood pressure and maintaining heart health',
      'Deeper penetration through sweating goes beyond the muscle and fat rather than a traditional or hot air sauna - work up the best possible sweat in the least amount of time',
      'Spectrum Plus heaters remove 17% more toxins such as cholesterol, fat-soluble toxins, toxic heavy metals, sulfuric acid, sodium, ammonia and uric acid',
      'Full Spectrum Sauna combination provides higher temperatures, full body coverage, deeper penetration, and better experience than any other sauna',
      'Natural pain relief remedy with every infrared sauna session',
      'Athletes appreciate faster muscle recovery with increased blood flow to the muscles, delivering more concentrated oxygen and creating more energy to heal',
      'Red light therapy stimulates production of collagen and other proteins for numerous potential health benefits'
    ],
    heaterSpecs: {
      model: 'Harvia Vega Compact 1900',
      kilowatts: '1.9kW',
      voltage: '120V/1PH',
      amperage: '15.9 Amps',
      roomVolumeMin: '70 cu. ft.',
      roomVolumeMax: '106 cu. ft.',
      heaterDimensions: '11"W x 11"D x 21"H',
      heaterWeight: '15.4 lbs',
      warranty: '2-Year Warranty (Consumer Use)',
      features: ['Wall-mounted design', 'Stainless steel construction', 'Built-in controls', 'Ergonomic operating switches', 'Switches can be installed on right or left side', 'Designed, engineered, and made in Finland']
    },
    specifications: {
      model: 'FD-4',
      externalMaterials: 'Thermo-Aspen',
      interiorMaterials: 'Western Red Cedar',
      volts: '120',
      irWatts: '1750',
      amperage: '15/20',
      plugType: 'NEMA 5-15P',
      outlet: 'Standard 120V 15A',
      maxTempIR: '170°F',
      maxTempTraditional: '190°F',
      interiorDimensions: '44.25"W x 45.5"D x 75.5"H',
      exteriorDimensions: '48"W x 48"D x 83"H',
      roomVolume: '86 cu. ft.',
      doorDimensions: '23.625"W x 68.875"H',
      doorHandleDimensions: '1.5"W x 13.25"H',
      glassThickness: '8mm W/Gasket',
      productWeight: '437 lbs',
      shippingDimensions: '80"W x 40"D x 58"H',
      shippingWeight: '618 lbs'
    },
    shipping: {
      costUS: 'FREE to contiguous United States',
      costCanada: '$490',
      note: 'This exceptional indoor Infrared Sanctuary requires delivery by a special appointment, and on a wooden pallet. The driver is responsible for "curbside delivery only" and will lower the items to ground level.'
    },
    includedItems: [
      'Bottom Panel', 'Top Panel', 'Back Panel', 'Front Panel', 'Left Panel', 'Right Panel',
      'Glass Door', 'Bench Support', 'Bench Top', 'Heater Cable', 'Floor Cable', 'Screws',
      'Power Supply Unit', 'Power Cable', 'Interior Heater Connections with Wood Cover',
      'Door Handle (2 Screws)', 'Infrared Sauna Heater Panels',
      'Harvia Vega Compact 1900 Sauna Heater',
      '1 Box of the Harvia AC3000 0-10cm Sauna Stones (29 lbs)',
      'Spectrum LED Near Infrared Ceiling Lights Combined with Medical-Grade Spectrum Red Light Therapy',
      'Controller 2.0, Built-In LCD Wi-Fi Touchscreen Control Panel with Bluetooth Audio',
      'ETL Certification', 'Limited Warranty'
    ],
    images: {
      primary: '/images/saunas/finnmark-fd5-trinity/image-1.png',
      gallery: [
        '/images/saunas/finnmark-fd5-trinity/image-1.png',
        '/images/saunas/finnmark-fd5-trinity/image-2.png',
        '/images/saunas/finnmark-fd5-trinity/image-3.png',
        '/images/saunas/finnmark-fd5-trinity/image-4.png',
        '/images/saunas/finnmark-fd5-trinity/image-5.png'
      ]
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-finnmark-fd3',
    name: 'Finnmark FD-3 Full Spectrum Infrared Sauna',
    brand: 'Finnmark Design',
    series: 'Full Spectrum Infrared Saunas',
    price: '$7,995.95',
    priceValue: 7995.95,
    persons: 4,
    dimensions: '72"W x 46"D x 78"H',
    interiorDimensions: '67"W x 41"D x 70"H',
    weight: '488 lbs (Product) / 605 lbs (Shipping)',
    electrical: '240V / 15A',
    plugType: 'NEMA 6-15P',
    maxTemperature: '170°F',
    description: 'Enjoy the benefits of Infrared Sauna Bathing at 170-degrees Fahrenheit! The Finnmark FD-3 Full Spectrum 3 to 4 person infrared home sauna is the only infrared sauna that combines long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels.',
    longDescription: 'Stretch out and relax in Finnmark Design\'s FD-3 Full-Spectrum 3 to 4 person infrared home sauna. Create a daily wellness retreat in the comfort of your own home.\n\nFinnmark Designs is the only infrared sauna manufacturer that combine long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels. This combination provides higher temperatures, full body coverage, deeper penetration, and an experience better than any other sauna. Each heater is strategically placed to offer the highest level of therapy possible. Achieve temperatures of 170° in less than 1 hour on a standard home outlet, an engineering marvel!\n\nNaturally antimicrobial Western Canadian cedar protects you against mold, bacteria, and fungus for a fresher smelling sauna. The Thermal Plus™ Aspen exterior won\'t rot, warp, decay or chip, making Finnmark Designs full spectrum infrared saunas one of the most durable and longest lasting saunas.',
    features: [
      'Antimicrobial Western Canadian cedar interior that protects against mold, bacteria and fungus',
      'Thermal Plus™ Aspen exterior that will never rot, warp, decay or chip',
      'Only infrared sauna manufacturer combining long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels',
      'Higher temperatures, full body coverage, deeper penetration than any other sauna',
      'Built-in LCD Wi-Fi touchscreen controller with bluetooth audio',
      'Audio with 6" Hi-Fi speakers, 8mm tempered glass for ultimate thermal retention',
      'Removable and adjustable sauna feet for uneven surfaces',
      'Low EMF sauna tested by a NASA award winning testing facility',
      'High Emissivity infrared heaters',
      'Ergonomic bench for comfort',
      'High quality double walled construction with non-toxic wool insulation',
      'Over 15,000 Sold'
    ],
    healthBenefits: [
      'The Spectrum Plus incoloy heaters warm your core body temperature, producing a cleaner, healthier sweat while lowering blood pressure and maintaining heart health',
      'Deeper penetration through sweating goes beyond the muscle and fat rather than a traditional or hot air sauna - work up the best possible sweat in the least amount of time',
      'Spectrum Plus heaters remove 17% more toxins such as cholesterol, fat-soluble toxins, toxic heavy metals, sulfuric acid, sodium, ammonia and uric acid',
      'Full Spectrum Sauna combination provides higher temperatures, full body coverage, deeper penetration, and better experience than any other sauna',
      'Natural pain relief remedy with every infrared sauna session',
      'Athletes appreciate faster muscle recovery with increased blood flow to the muscles, delivering more concentrated oxygen and creating more energy to heal'
    ],
    specifications: {
      outlet: 'NEMA 6-15P',
      voltage: '240V 15A',
      maxTemperature: '170°F',
      interiorDimensions: '67"W x 41"D x 70"H',
      exteriorDimensions: '72"W x 46"D x 78"H',
      roomVolume: '111.3 cu. ft.',
      doorDimensions: '23.625"W x 67.875"H',
      doorHandleDimensions: '1.875"W x 11.625"H',
      glassThickness: '8mm',
      productWeight: '488 lbs',
      shippingDimensions: '80"W x 40"D x 79"H',
      shippingWeight: '605 lbs'
    },
    shipping: {
      costUS: 'FREE to contiguous United States',
      costCanada: '$490',
      note: 'This exceptional indoor Infrared Sanctuary requires delivery by a special appointment, and on a wooden pallet. The driver is responsible for "curbside delivery only" and will lower the items to ground level.'
    },
    includedItems: [
      'Bottom Panel', 'Top Panel', 'Back Panel', 'Front Panel', 'Left Panel', 'Right Panel',
      'Glass Door', 'Bench Support', 'Bench Top', 'Heater Cable', 'Floor Cable', 'Screws',
      'Power Supply Unit', 'Power Cable', 'Interior Heater Connections with Wood Cover',
      'Door Handle (2 Screws)', 'Removable and Adjustable Sauna Feet for Uneven Surfaces',
      'Infrared Sauna Heater Panels', 'Spectrum LED Near Infrared Ceiling Lights',
      'Controller 2.0, Built-In LCD Wi-Fi Touchscreen Control Panel with Bluetooth Audio',
      'Audio Upgrade with 6" Hi-Fi Speakers', '8mm Tempered Glass for Ultimate Thermal Retention',
      'ETL Certification', 'Limited Warranty'
    ],
    images: {
      primary: '/images/saunas/finnmark-fd3/image-1.png',
      gallery: [
        '/images/saunas/finnmark-fd3/image-1.png',
        '/images/saunas/finnmark-fd3/image-2.png',
        '/images/saunas/finnmark-fd3/image-3.png',
        '/images/saunas/finnmark-fd3/image-4.png',
        '/images/saunas/finnmark-fd3/image-5.png',
        '/images/saunas/finnmark-fd3/image-6.png',
        '/images/saunas/finnmark-fd3/image-7.png'
      ]
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-finnmark-fd2',
    name: 'Finnmark FD-2 Full-Spectrum Infrared Sauna 2-Person',
    brand: 'Finnmark Design',
    series: 'Full Spectrum Infrared Saunas',
    price: '$6,995.95',
    priceValue: 6995.95,
    persons: 2,
    dimensions: '48"W x 44"D x 78"H',
    interiorDimensions: '43"W x 40"D x 70"H',
    weight: '393 lbs (Product) / 475 lbs (Shipping)',
    electrical: '120V / 15A',
    plugType: 'NEMA 5-15P',
    maxTemperature: '170°F',
    description: 'Enjoy the benefits of Infrared Sauna Bathing at 170-degrees Fahrenheit! The Finnmark FD-2 Full Spectrum 2 person infrared home sauna is the only infrared sauna that combines long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels.',
    longDescription: 'Finnmark\'s best-selling infrared sauna is the 2-person Model FD-2 Infrared Home Sauna. The only infrared saunas in the industry that combine UL Listed Spectrum Plus™ infrared heaters with Spectrum Carbon 360° panels, allowing you to reach temperatures of 170° in less than 1 hour on a standard home outlet – an engineering marvel.\n\nFinnmark Designs is the only infrared sauna manufacturer that combines long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels. This combination provides higher temperatures, full body coverage, deeper penetration, and an experience better than any other sauna. Each heater is strategically placed to offer the highest level of therapy possible.\n\nIts antimicrobial Western Canadian cedar interior protects you against mold, bacteria, and fungus, for a clean-smelling sauna. The naturally enhanced Thermal Plus™ Aspen exterior won\'t rot, warp, decay, or chip, making Finnmark Designs full spectrum infrared saunas incredibly durable.',
    features: [
      'Antimicrobial Western Canadian cedar interior that protects against mold, bacteria and fungus',
      'Thermal Plus™ Aspen exterior that will never rot, warp, decay or chip',
      'Only infrared sauna manufacturer combining long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels',
      'Higher temperatures, full body coverage, deeper penetration than any other sauna',
      'Built-in LCD Wi-Fi touchscreen controller with bluetooth audio',
      'Audio with 6" Hi-Fi speakers, 8mm tempered glass for ultimate thermal retention',
      'Removable and adjustable sauna feet for uneven surfaces',
      'Low EMF sauna tested by a NASA award winning testing facility',
      'High Emissivity infrared heaters',
      'High quality double walled construction with non-toxic wool insulation',
      'Over 15,000 Sold'
    ],
    healthBenefits: [
      'The Spectrum Plus incoloy heaters warm your core body temperature, producing a cleaner, healthier sweat while lowering blood pressure and maintaining heart health',
      'Deeper penetration through sweating goes beyond the muscle and fat rather than a traditional or hot air sauna - work up the best possible sweat in the least amount of time',
      'Spectrum Plus heaters remove 17% more toxins such as cholesterol, fat-soluble toxins, toxic heavy metals, sulfuric acid, sodium, ammonia and uric acid',
      'Full Spectrum Sauna combination provides higher temperatures, full body coverage, deeper penetration, and better experience than any other sauna',
      'Natural pain relief remedy with every infrared sauna session',
      'Athletes appreciate faster muscle recovery with increased blood flow to the muscles, delivering more concentrated oxygen and creating more energy to heal'
    ],
    specifications: {
      model: 'FD-2',
      externalMaterials: 'Thermo-Aspen',
      interiorMaterials: 'Western Canadian Cedar',
      volts: '120',
      watts: '1750',
      amperage: '15',
      phase: 'Single',
      plugType: 'NEMA 5-15P',
      outlet: 'Standard 120V 15A',
      maxTemperature: '170°F',
      interiorDimensions: '43"W x 40"D x 70"H',
      exteriorDimensions: '48"W x 44"D x 78"H',
      roomVolume: '70 cu. ft.',
      doorDimensions: '23.625"W x 67.875"H',
      doorHandleDimensions: '1.875"W x 11.625"H',
      glassThickness: '8mm',
      productWeight: '393 lbs',
      shippingDimensions: '80"W x 40"D x 58"H',
      shippingWeight: '475 lbs'
    },
    shipping: {
      costUS: 'FREE to contiguous United States',
      costCanada: '$490',
      note: 'This exceptional indoor Infrared Sanctuary requires delivery by a special appointment, and on a wooden pallet. The driver is responsible for "curbside delivery only" and will lower the items to ground level.'
    },
    includedItems: [
      'Bottom Panel', 'Top Panel', 'Back Panel', 'Front Panel', 'Left Panel', 'Right Panel',
      'Glass Door', 'Bench Support', 'Bench Top', 'Heater Cable', 'Floor Cable', 'Screws',
      'Power Supply Unit', 'Power Cable', 'Interior Heater Connections with Wood Cover',
      'Door Handle (2 Screws)', 'Removable and Adjustable Sauna Feet for Uneven Surfaces',
      'Infrared Sauna Heater Panels', 'Spectrum LED Near Infrared Ceiling Lights',
      'Controller 2.0, Built-In LCD Wi-Fi Touchscreen Control Panel with Bluetooth Audio',
      'Audio Upgrade with 6" Hi-Fi Speakers', '8mm Tempered Glass for Ultimate Thermal Retention',
      'ETL Certification', 'Limited Warranty'
    ],
    images: {
      primary: '/images/saunas/finnmark-fd2/image-1.png',
      gallery: [
        '/images/saunas/finnmark-fd2/image-1.png',
        '/images/saunas/finnmark-fd2/image-2.png',
        '/images/saunas/finnmark-fd2/image-3.png',
        '/images/saunas/finnmark-fd2/image-4.png',
        '/images/saunas/finnmark-fd2/image-5.png',
        '/images/saunas/finnmark-fd2/image-6.png',
        '/images/saunas/finnmark-fd2/image-7.png',
        '/images/saunas/finnmark-fd2/image-8.png',
        '/images/saunas/finnmark-fd2/image-9.png',
        '/images/saunas/finnmark-fd2/image-10.png',
        '/images/saunas/finnmark-fd2/image-11.png',
        '/images/saunas/finnmark-fd2/image-12.png'
      ]
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-finnmark-fd1',
    name: 'Finnmark FD-1 Full-Spectrum Infrared Sauna 1-Person',
    brand: 'Finnmark Design',
    series: 'Full Spectrum Infrared Saunas',
    price: '$5,995.95',
    priceValue: 5995.95,
    persons: 1,
    dimensions: '38"W x 38"D x 78"H',
    interiorDimensions: '32"W x 34"D x 70"H',
    weight: '301 lbs (Product) / 390 lbs (Shipping)',
    electrical: '120V / 15A',
    plugType: 'NEMA 5-15P',
    maxTemperature: '170°F',
    description: 'Enjoy the benefits of Infrared Sauna Bathing at 170-degrees Fahrenheit! Transform any space in your home into a personal wellness escape with the compact Finnmark FD-1 Full Spectrum, 1-Person Infrared Sauna.',
    longDescription: 'Transform any space in your home into a personal wellness escape with the compact Finnmark FD-1 Full Spectrum, 1-Person Infrared Sauna. The only infrasauna in the industry that combines UL Listed Spectrum Plus™ infrared heaters with Spectrum Carbon 360° which allows you to reach temperatures of 170° in less than 1 hour on a standard home outlet for a healthy sweat. While others try to compete, they can\'t compare to the quality and craftmanship of Finnmark Design\'s infrared saunas.\n\nAntimicrobial Western Canadian cedar interior resists mold, bacteria, and fungus to keep your sauna free from unpleasant odors. Thermal Plus™ Aspen exterior is organically treated with heat and steam so that it won\'t rot, warp, decay, or chip, making Finnmark Designs full spectrum IR saunas one of the most durable and longest-lasting saunas on the market.\n\nFinnmark Designs is the only infrared sauna manufacturer that combines long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels. This combination provides higher temperatures, full body coverage, deeper penetration, and a better sweating experience - better than any other IR sauna.',
    features: [
      'Antimicrobial Western Canadian cedar interior that protects against mold, bacteria and fungus',
      'Thermal Plus™ Aspen exterior that will never rot, warp, decay or chip',
      'Only infrared sauna manufacturer combining long-wave carbon 360 infrared panels with UL listed short-wave Spectrum Plus™ infrared panels',
      'Higher temperatures, full body coverage, deeper penetration than any other sauna',
      'Built-in LCD Wi-Fi touchscreen controller with bluetooth audio',
      'Audio with 6" Hi-Fi speakers, 8mm tempered glass for ultimate thermal retention',
      'Removable and adjustable sauna feet for uneven surfaces',
      'Low EMF sauna tested by a NASA award winning testing facility',
      'High Emissivity infrared heaters',
      'High quality double walled construction with non-toxic wool insulation',
      'Over 15,000 Sold',
      'Perfect for small spaces - fits anywhere!'
    ],
    healthBenefits: [
      'The Spectrum Plus incoloy heaters warm your core body temperature, producing a cleaner, healthier sweat while lowering blood pressure and maintaining heart health',
      'Deeper penetration through sweating goes beyond the muscle and fat rather than a traditional or hot air sauna - work up the best possible sweat in the least amount of time',
      'Spectrum Plus heaters remove 17% more toxins such as cholesterol, fat-soluble toxins, toxic heavy metals, sulfuric acid, sodium, ammonia and uric acid',
      'Full Spectrum Sauna combination provides higher temperatures, full body coverage, deeper penetration, and better experience than any other sauna',
      'Natural pain relief remedy with every infrared sauna session',
      'Athletes appreciate faster muscle recovery with increased blood flow to the muscles, delivering more concentrated oxygen and creating more energy to heal'
    ],
    specifications: {
      model: 'FD-1',
      externalMaterials: 'Thermo-Aspen',
      interiorMaterials: 'Western Canadian Cedar',
      volts: '120',
      watts: '1750',
      amperage: '15',
      phase: 'Single',
      plugType: 'NEMA 5-15P',
      outlet: 'Standard 120V 15A',
      maxTemperature: '170°F',
      interiorDimensions: '32"W x 34"D x 70"H',
      exteriorDimensions: '38"W x 38"D x 78"H',
      roomVolume: '44.1 cu. ft.',
      doorDimensions: '23.625"W x 67.875"H',
      doorHandleDimensions: '1.875"W x 11.625"H',
      glassThickness: '8mm',
      productWeight: '301 lbs',
      shippingDimensions: '80"W x 40"D x 48"H',
      shippingWeight: '390 lbs'
    },
    shipping: {
      costUS: 'FREE to contiguous United States',
      costCanada: '$490',
      note: 'This exceptional indoor Infrared Sanctuary requires delivery by a special appointment, and on a wooden pallet. The driver is responsible for "curbside delivery only" and will lower the items to ground level.'
    },
    includedItems: [
      'Bottom Panel', 'Top Panel', 'Back Panel', 'Front Panel', 'Left Panel', 'Right Panel',
      'Glass Door', 'Bench Support', 'Bench Top', 'Heater Cable', 'Floor Cable', 'Screws',
      'Power Supply Unit', 'Power Cable', 'Interior Heater Connections with Wood Cover',
      'Door Handle (2 Screws)', 'Removable and Adjustable Sauna Feet for Uneven Surfaces',
      'Infrared Sauna Heater Panels', 'Spectrum LED Near Infrared Ceiling Lights',
      'Controller 2.0, Built-In LCD Wi-Fi Touchscreen Control Panel with Bluetooth Audio',
      'Audio Upgrade with 6" Hi-Fi Speakers', '8mm Tempered Glass for Ultimate Thermal Retention',
      'ETL Certification', 'Limited Warranty'
    ],
    images: {
      primary: '/images/saunas/finnmark-fd1/image-1.png',
      gallery: [
        '/images/saunas/finnmark-fd1/image-1.png',
        '/images/saunas/finnmark-fd1/image-2.png',
        '/images/saunas/finnmark-fd1/image-3.png',
        '/images/saunas/finnmark-fd1/image-4.png',
        '/images/saunas/finnmark-fd1/image-5.png',
        '/images/saunas/finnmark-fd1/image-6.png'
      ]
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-ee8g',
    name: 'SaunaLife Model EE8G Sauna Barrel',
    brand: 'SaunaLife',
    series: 'Barrel Saunas',
    price: '$10,995.95',
    priceValue: 10995.95,
    persons: 8,
    description: 'Premium 8-person barrel sauna for outdoor use. The EE8G features premium Thermowood construction and a powerful electric heater.',
    features: ['8-person capacity', 'Premium Thermowood construction', 'Electric heater included', 'Outdoor ready', 'Easy assembly'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg'
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-ee6g',
    name: 'SaunaLife Model EE6G Sauna Barrel',
    brand: 'SaunaLife',
    series: 'Barrel Saunas',
    price: '$8,995.95',
    priceValue: 8995.95,
    persons: 6,
    description: 'Compact 6-person barrel sauna with quality Thermowood construction. Perfect for smaller spaces.',
    features: ['6-person capacity', 'Thermowood construction', 'Easy assembly', 'Electric heater included'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg'
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-gl4',
    name: 'SaunaLife GL4 Outdoor Sauna Kit',
    brand: 'SaunaLife',
    series: 'Outdoor Saunas',
    price: '$13,995.95',
    priceValue: 13995.95,
    persons: 4,
    description: 'Premium outdoor sauna kit with modern glass design. The GL4 combines traditional sauna benefits with contemporary aesthetics.',
    features: ['4-person capacity', 'Modern glass design', 'Outdoor ready', 'Premium construction', 'Electric heater included'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg'
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-cl3g',
    name: 'SaunaLife Model CL3G',
    brand: 'SaunaLife',
    series: 'Cabin Saunas',
    price: '$5,995.95',
    priceValue: 5995.95,
    persons: 3,
    description: 'Compact cabin-style sauna perfect for smaller spaces. The CL3G offers authentic sauna experience in a space-efficient design.',
    features: ['3-person capacity', 'Cabin-style design', 'Compact footprint', 'Electric heater included', 'Easy assembly'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg'
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-g6',
    name: 'SaunaLife Model G6 Pre-Assembled Outdoor Home Sauna',
    brand: 'SaunaLife',
    series: 'Premium Outdoor Saunas',
    price: '$34,995.95',
    priceValue: 34995.95,
    persons: 6,
    description: 'Our flagship pre-assembled outdoor sauna. The G6 delivers the ultimate luxury sauna experience with premium materials and craftsmanship.',
    features: ['6-person capacity', 'Pre-assembled delivery', 'Premium glass design', 'Luxury finish', 'Professional installation available'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg'
    },
    whiteGloveInstallation: true
  },
  {
    id: 'sauna-cl7g',
    name: 'SaunaLife Model CL7G',
    brand: 'SaunaLife',
    series: 'Cabin Saunas',
    price: '$11,995.95',
    priceValue: 11995.95,
    persons: 7,
    description: 'Large cabin-style sauna for groups and families. The CL7G offers spacious interior with premium construction.',
    features: ['7-person capacity', 'Cabin-style design', 'Spacious interior', 'Electric heater included', 'Premium wood construction'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg'
    },
    whiteGloveInstallation: true
  }
];

export const COLD_PLUNGES = [
  // All-in-One Cold Plunge Systems
  {
    id: 'cp-endeavor-xl',
    name: 'Endeavor XL Plunge + Chiller',
    brand: 'Icebound Essentials',
    series: 'Endeavor',
    price: '$1,699.00',
    originalPrice: '$2,399.00',
    priceValue: 1699,
    category: 'Cold Plunge',
    description: 'The Endeavor XL is our longest tub, built for plungers taller than 6\'3". Classic oval inflatable design with insulated walls.',
    longDescription: 'The Endeavor XL is our longest tub, built for plungers taller than 6\'3" (150 gal, fits 2). Features classic oval inflatable design with insulated walls, fast cooling to 37°F and heating up to 107°F, plus WiFi & app-enabled chiller control.',
    features: [
      'Longest tub - built for plungers taller than 6\'3"',
      '150 gallon capacity, fits 2 comfortably',
      'Classic oval inflatable design with insulated walls',
      'Fast cooling to 37°F and heating up to 107°F',
      'WiFi & app-enabled chiller control',
      '1HP Pro Chiller included',
      'Ozone sanitization system',
      '5-micron filtration',
      'UV-resistant, indoor & outdoor use'
    ],
    specs: {
      dimensions: '71" x 31.5" x 26"',
      capacity: '150 gallons',
      tempRange: '37°F to 107°F',
      power: '1HP Chiller',
      seating: '2 Adults'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/3-min.png?v=1763395067&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/3-min.png?v=1763395067&width=800'
    }
  },
  {
    id: 'cp-endurance-limited',
    name: 'Endurance Limited Edition Plunge + Chiller',
    brand: 'Icebound Essentials',
    series: 'Endurance',
    price: '$1,999.00',
    originalPrice: '$2,799.00',
    priceValue: 1999,
    category: 'Cold Plunge',
    description: 'Choose Big Tex burnt orange or Hot Pink limited edition tub. 155-gallon Endurance tub with double-slipper comfort design.',
    longDescription: 'The Endurance Limited Edition features our signature double-slipper comfort design in Big Tex burnt orange or Hot Pink limited edition colors. Fast heating & cooling from 37–107°F with WiFi & app-enabled chiller control.',
    features: [
      'Limited edition Big Tex Burnt Orange or Hot Pink colors',
      '155-gallon capacity with double-slipper comfort design',
      'Fits 2 comfortably',
      'Fast heating & cooling: 37°F to 107°F',
      'WiFi & app-enabled chiller control',
      '1HP Pro Chiller included',
      'Ozone sanitization system',
      'Ultra-durable, drop-stitch build',
      'UV-resistant, indoor & outdoor use'
    ],
    specs: {
      dimensions: '63" × 38.5" × 26"',
      capacity: '155 gallons',
      tempRange: '37°F to 107°F',
      power: '1HP Chiller',
      seating: '2 Adults'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/orange_endurance_card.jpg?v=1765826555&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/orange_endurance_card.jpg?v=1765826555&width=800'
    }
  },
  {
    id: 'cp-endurance-classic',
    name: 'Endurance Classic Plunge + Chiller',
    brand: 'Icebound Essentials',
    series: 'Endurance',
    price: '$1,999.00',
    originalPrice: '$2,799.00',
    priceValue: 1999,
    category: 'Cold Plunge',
    description: 'Choose French Gray or Cool Gray Endurance tub. 155-gallon with double-slipper comfort design.',
    longDescription: 'The Endurance Classic features our signature double-slipper comfort design in elegant French Gray or Cool Gray. Fast heating & cooling from 37–107°F with WiFi & app-enabled chiller control.',
    features: [
      'French Gray or Cool Gray color options',
      '155-gallon capacity with double-slipper comfort design',
      'Fits 2 comfortably',
      'Fast heating & cooling: 37°F to 107°F',
      'WiFi & app-enabled chiller control',
      '1HP Pro Chiller included',
      'Ozone sanitization system',
      'Ultra-durable, drop-stitch build',
      'UV-resistant, indoor & outdoor use'
    ],
    specs: {
      dimensions: '63" × 38.5" × 26"',
      capacity: '155 gallons',
      tempRange: '37°F to 107°F',
      power: '1HP Chiller',
      seating: '2 Adults'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/french_gray_endurance_card.jpg?v=1765826744&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/french_gray_endurance_card.jpg?v=1765826744&width=800'
    }
  },
  {
    id: 'cp-resolute-pro',
    name: 'The Resolute Pro',
    brand: 'Icebound Essentials',
    series: 'Resolute',
    price: '$6,999.00',
    originalPrice: '$8,999.00',
    priceValue: 6999,
    category: 'Cold Plunge',
    description: 'Sleek acrylic tub with matte black details. Energy efficient heat pump with fast heating & cooling.',
    longDescription: 'The Resolute Pro features a sleek acrylic tub with matte black details. Energy efficient heat pump with fast heating & cooling from 40–104°F. Wi-Fi & app-enabled scheduling included.',
    features: [
      'Sleek acrylic tub with matte black details',
      'Energy efficient heat pump',
      'Fast heating & cooling: 40°F to 104°F',
      'Wi-Fi & app-enabled scheduling',
      'Premium construction',
      'Built for daily use',
      'Commercial-grade durability',
      'White glove delivery included'
    ],
    specs: {
      dimensions: 'Acrylic Tub',
      capacity: 'Full Size',
      tempRange: '40°F to 104°F',
      power: 'Heat Pump',
      seating: '1 Adult'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/ResoluteProPremiumColdPlunge.png?v=1744325052&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/ResoluteProPremiumColdPlunge.png?v=1744325052&width=800'
    }
  },
  // Cold Plunge Tubs Only (without chiller)
  {
    id: 'cp-endurance-classic-tub',
    name: 'Endurance Classic Plunge Tub',
    brand: 'Icebound Essentials',
    series: 'Endurance',
    price: '$1,999.00',
    priceValue: 1999,
    category: 'Cold Plunge Tub',
    description: 'Our signature, double-slipper Endurance tub in French Gray and Cool Gray. Fits 2 comfortably, 155 gallon capacity.',
    longDescription: 'Our signature, double-slipper Endurance tub available in French Gray and Cool Gray. Features ultra-durable, drop-stitch build with chiller-ready connections. UV-resistant for indoor & outdoor use.',
    features: [
      'French Gray or Cool Gray color options',
      'Fits 2 comfortably, 155 gallon capacity',
      'Ultra-durable, drop-stitch build',
      'Chiller-ready connections',
      'UV-resistant, indoor & outdoor use',
      'Double-slipper comfort design',
      'Ready for rafting the Colorado (balance required)'
    ],
    specs: {
      dimensions: '63" × 38.5" × 26"',
      capacity: '155 gallons',
      seating: '2 Adults',
      material: 'Drop-stitch inflatable'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/french_gray_endurance_card.jpg?v=1765826744&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/french_gray_endurance_card.jpg?v=1765826744&width=800'
    }
  },
  {
    id: 'cp-endurance-limited-tub',
    name: 'Endurance Limited Edition Plunge Tub',
    brand: 'Icebound Essentials',
    series: 'Endurance',
    price: '$799.99',
    originalPrice: '$899.99',
    priceValue: 799.99,
    category: 'Cold Plunge Tub',
    description: 'Our signature Endurance tub in limited edition Big Tex Burnt Orange or Hot Pink colors. 155 gallon capacity.',
    longDescription: 'Our signature Endurance tub available in limited edition Big Tex Burnt Orange or Hot Pink colors. Features ultra-durable, drop-stitch build with chiller-ready connections. UV-resistant for indoor & outdoor use.',
    features: [
      'Limited edition Big Tex Burnt Orange or Hot Pink colors',
      'Fits 2 comfortably, 155 gallon capacity',
      'Ultra-durable, drop-stitch build',
      'Chiller-ready connections',
      'UV-resistant, indoor & outdoor use',
      'Double-slipper comfort design'
    ],
    specs: {
      dimensions: '63" × 38.5" × 26"',
      capacity: '155 gallons',
      seating: '2 Adults',
      material: 'Drop-stitch inflatable'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/orange_endurance_card.jpg?v=1765826555&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/orange_endurance_card.jpg?v=1765826555&width=800'
    }
  },
  {
    id: 'cp-endeavor-xl-tub',
    name: 'Endeavor XL Plunge Tub',
    brand: 'Icebound Essentials',
    series: 'Endeavor',
    price: '$449.99',
    originalPrice: '$599.99',
    priceValue: 449.99,
    category: 'Cold Plunge Tub',
    description: 'Classic oval-design, all black for those who prefer a matte finish. 150 gallon capacity, fits 2 comfortably.',
    longDescription: 'Classic oval-design, all black for our New Zealand rugby fans or those who prefer a matte finish. Fits 2 comfortably with 150 gallon capacity. Ultra-durable, drop-stitch build. Our top seller in the US military community.',
    features: [
      'Classic oval design, all black matte finish',
      'Fits 2 comfortably, 150 gallon capacity',
      'Ultra-durable, drop-stitch build',
      'Top seller in US military community',
      'Chiller-ready connections',
      'UV-resistant, indoor & outdoor use'
    ],
    specs: {
      dimensions: '71" x 31.5" x 26"',
      capacity: '150 gallons',
      seating: '2 Adults',
      material: 'Drop-stitch inflatable'
    },
    images: {
      primary: 'https://iceboundessentials.com/cdn/shop/files/endeavor_cold_plunge_tub_1.png?v=1729458216&width=800',
      overhead: 'https://iceboundessentials.com/cdn/shop/files/endeavor_cold_plunge_tub_1.png?v=1729458216&width=800'
    }
  }
];

// ===========================================
// WORLD SAUNA GROUP - OUTDOOR SAUNAS
// ===========================================
export const WORLD_SAUNA_OUTDOOR = [
  // FINSAUNA KEILA COLLECTION
  {
    id: 'wsg-keila-200',
    name: 'Finsauna Keila 200',
    brand: 'World Sauna Group',
    series: 'Outdoor Saunas',
    collection: 'Keila Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'outdoor',
    dimensions: 'W: 59" x D: 65" x H: 86"',
    description: 'Discover the FINSAUNA Keila Collection - where sleek Nordic design meets rugged durability. Featuring rugged Thermo-Spruce walls with striking black trim, knotless Thermo-Aspen benches, and solid, thermally modified floors.',
    longDescription: 'Discover the FINSAUNA Keila Collection - where sleek Nordic design meets rugged durability. Featuring rugged Thermo-Spruce walls with striking black trim, knotless Thermo-Aspen benches, and solid, thermally modified floors, Keilas are built for style, comfort, and longevity. Enjoy an immersive experience with app-controlled lighting and a deluxe all-glass front.',
    features: [
      'Designed for longevity and easy maintenance',
      'Thermo-Spruce exterior walls with sophisticated black trim accents',
      'Lasts up to 3x longer than cedar',
      'Wide, knotless Thermo-Aspen benches for maximum comfort',
      'Solid thermally modified integral floor for easy placement',
      'Deluxe all-glass fronts',
      'App-controlled dimmable LED lighting in backrest and under benches'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_9c1681e591ac46338b8ae7bef8957db1~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_6d27eaf6ceaf44e6b4b0815326a4140c~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3daea8ebfc2c4282ba73f3828fa42457~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_73c502e49e444c6288da11fefe6f69d3~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_b4fb728ab536482eae0c63cadbed6ee0~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_35214fef46874b739767471b2b4cd3fa~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_5b2d2c8f026f4e1badbca77cb5b30854~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_f630d758e3874cbfb12ff4052340bcc5~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3cbf77695b634ea4bc5b8b9471fc8aa0~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_9bcdf2c967c94b4e8b2d92444637954c.pdf'
  },
  {
    id: 'wsg-keila-400',
    name: 'Finsauna Keila 400',
    brand: 'World Sauna Group',
    series: 'Outdoor Saunas',
    collection: 'Keila Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'outdoor',
    dimensions: 'W: 76" x D: 76" x H: 94"',
    description: 'Larger 4-person Keila model with sleek Nordic design and rugged durability. Features Thermo-Spruce walls with black trim and knotless Thermo-Aspen benches.',
    longDescription: 'The FINSAUNA Keila 400 offers spacious seating for up to 4 people while maintaining the premium Nordic craftsmanship of the Keila Collection. Featuring rugged Thermo-Spruce walls with striking black trim, knotless Thermo-Aspen benches, and solid, thermally modified floors, Keilas are built for style, comfort, and longevity.',
    features: [
      'Designed for longevity and easy maintenance',
      'Thermo-Spruce exterior walls with sophisticated black trim accents',
      'Lasts up to 3x longer than cedar',
      'Wide, knotless Thermo-Aspen benches for maximum comfort',
      'Solid thermally modified integral floor for easy placement',
      'Deluxe all-glass fronts',
      'App-controlled dimmable LED lighting in backrest and under benches'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_9c1681e591ac46338b8ae7bef8957db1~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_6d27eaf6ceaf44e6b4b0815326a4140c~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3daea8ebfc2c4282ba73f3828fa42457~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_73c502e49e444c6288da11fefe6f69d3~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_9bcdf2c967c94b4e8b2d92444637954c.pdf'
  },
  // FINSAUNA REVIVA COLLECTION (Barrel Saunas)
  {
    id: 'wsg-reviva-400p',
    name: 'Finsauna Reviva 400P',
    brand: 'World Sauna Group',
    series: 'Outdoor Saunas',
    collection: 'Reviva Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'outdoor',
    dimensions: 'D: 63" x DIA: 91"',
    description: 'The FINSAUNA Reviva Collection elevates the timeless barrel sauna, blending innovation with sleek Scandinavian design. Built from heavy-duty Thermo-Spruce for longevity.',
    longDescription: 'The FINSAUNA Reviva Collection elevates the timeless barrel sauna, blending innovation with sleek Scandinavian design. Built from heavy-duty Thermo-Spruce for longevity, Revivas feature the highest ceiling clearances on the market, ergonomic bench layouts, and luxurious, black-accented details. With app-controlled lighting, gorgeous full-glass fronts, and plenty of heater choices, Revivas bring tradition full circle.',
    features: [
      'Heavy-duty Thermo-Spruce walls and floor deliver exceptional durability',
      'Best ceiling clearances for barrels on the market',
      'Luxurious black accents',
      'Five-board deluxe angled backrests with wide benches',
      'Full front glass for an open, airy feel',
      'Roof drip edges for effective rainwater management',
      'Dimmable LED interior lighting with app-based remote control',
      'Quick installation: Set up and use the same day'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_c443ec09d94a4abb932c2b42210dc9ea~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_2628d530c6af430ab64e28f039f6a035~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_7f890ca02e934106bd29754afef08dd6~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_c1cd2b86b3d14f9ca0ad60d62041d622~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_22e0db58c38244ce949d3877d3da73b2~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_6b47cb5961914ac7afac5d39ad53c6b2~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_d96973c5a3324acfaca7750df581035a~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_5ea979fc62004a95bb53a6cb2d3ecfff.pdf'
  },
  // FINSAUNA SOLARA COLLECTION
  {
    id: 'wsg-solara-400p',
    name: 'Finsauna Solara 400P',
    brand: 'World Sauna Group',
    series: 'Outdoor Saunas',
    collection: 'Solara Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'outdoor',
    dimensions: 'W: 81" x D: 83" x H: 78"',
    description: 'The FINSAUNA Solara Collection hosts the most feature-packed cube saunas on the market. Crafted with heavy-duty Thermo-Spruce for longevity.',
    longDescription: 'The FINSAUNA Solara Collection hosts the most feature-packed cube saunas on the market. Crafted with heavy-duty Thermo-Spruce for longevity, Solaras boast an industry-leading interior height, full front glass for an open, airy feel, and sleek black accents. With ergonomic benches, app-controlled lighting, and fast DIY setup, Solaras offer a captivating new angle on relaxation.',
    features: [
      'The most featured-packed cube saunas on the market today',
      'Best ceiling clearances for cubes on the market',
      'Luxurious black accents',
      'Five-board deluxe angled backrests with wide benches',
      'Full front glass for an open, airy feel',
      'Quick installation: Set up and use the same day',
      'Roof drip edges for effective rainwater management',
      'LED interior lighting with app-based remote control'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_a4bbf0ec6e00413982db9ed945625302~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_b006ae43dc0a4fb0bd6eb002c84411ca~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_c6dd674de2464d9fb408be9b5d4539b2~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_28581b309aad45debeab4c6eb9745272~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_dea17a14aab443f2bb09bab90020866a~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_2f299b7887e44a84bc5c18f20585efa7~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_e45e5dd4828f4882b3e2cfc3442e7da6.pdf'
  },
  {
    id: 'wsg-solara-600',
    name: 'Finsauna Solara 600',
    brand: 'World Sauna Group',
    series: 'Outdoor Saunas',
    collection: 'Solara Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 6,
    category: 'outdoor',
    dimensions: 'W: 91" x D: 79" x H: 93"',
    description: 'The larger Solara 600 offers spacious 6-person capacity with the same premium features of the Solara Collection.',
    longDescription: 'The FINSAUNA Solara 600 is the larger model in the Solara Collection, offering spacious seating for up to 6 people. Crafted with heavy-duty Thermo-Spruce for longevity, it features an industry-leading interior height, full front glass, and sleek black accents.',
    features: [
      'The most featured-packed cube saunas on the market today',
      'Best ceiling clearances for cubes on the market',
      'Luxurious black accents',
      'Five-board deluxe angled backrests with wide benches',
      'Full front glass for an open, airy feel',
      'Quick installation: Set up and use the same day',
      'Roof drip edges for effective rainwater management',
      'LED interior lighting with app-based remote control'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_a4bbf0ec6e00413982db9ed945625302~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_b006ae43dc0a4fb0bd6eb002c84411ca~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_28581b309aad45debeab4c6eb9745272~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_e45e5dd4828f4882b3e2cfc3442e7da6.pdf'
  }
];

// ===========================================
// WORLD SAUNA GROUP - INDOOR SAUNAS
// ===========================================
export const WORLD_SAUNA_INDOOR = [
  // FINSAUNA ISLA COLLECTION - Multiple sizes
  {
    id: 'wsg-isla-55',
    name: 'Finsauna Isla 55',
    brand: 'World Sauna Group',
    series: 'Indoor Saunas',
    collection: 'Isla Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'indoor',
    dimensions: 'W: 59" x D: 59" x H: 80"',
    description: 'Isla indoor saunas combine luxurious Nordic craftsmanship with exceptional value. Handcrafted in Estonia from European white spruce and clear aspen.',
    longDescription: 'Isla indoor saunas combine luxurious Nordic craftsmanship with exceptional value. Handcrafted in Estonia from European white spruce and clear aspen, each Isla features a sleek full-glass front wall, a space-saving profile, and industry-leading fit and finish quality. With thoughtful touches like in-backrest lighting, a waterproof flooring system, and versatile seating, the Isla Series brings luxury spa comfort home, beautifully.',
    features: [
      'Luxury at a value price',
      'Crafted from premium Nordic white spruce and clear aspen',
      'Industry-leading design and best fit-and-finish quality',
      'Full glass front walls for an open, airy feel',
      'Dimmable in-backrest lighting with remote control',
      'Designed for versatility—relax fully reclined or share the space',
      'Handcrafted in Estonia',
      'A World Sauna Group exclusive'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_94870d87bd5143999ac20a44dc607e65~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_b46908be64df4ff5af613617645a2089~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_5b53040fb2f74aa6914dc85a9f63ac43~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_c114b361350842a7a0f7696b3bc0dd2b~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_012bb99855fc4f3e97a7d6e66ad8d1e3~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3ca1b67b95384ddb9b609d2a1d49b0ae~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_cc636580bd6a464c9cb3cf7901ba1799~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_e3096001e6e74d6fad2e443a87a2e717.pdf'
  },
  {
    id: 'wsg-isla-57',
    name: 'Finsauna Isla 57',
    brand: 'World Sauna Group',
    series: 'Indoor Saunas',
    collection: 'Isla Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'indoor',
    dimensions: 'W: 72" x D: 59" x H: 80"',
    description: 'Larger Isla model with capacity for up to 4 people. Features the same premium Nordic craftsmanship and full-glass front wall.',
    longDescription: 'The Isla 57 offers more space while maintaining the premium features of the Isla Collection. Handcrafted in Estonia from European white spruce and clear aspen, with industry-leading fit and finish quality.',
    features: [
      'Luxury at a value price',
      'Crafted from premium Nordic white spruce and clear aspen',
      'Industry-leading design and best fit-and-finish quality',
      'Full glass front walls for an open, airy feel',
      'Dimmable in-backrest lighting with remote control',
      'Designed for versatility—relax fully reclined or share the space',
      'Handcrafted in Estonia',
      'A World Sauna Group exclusive'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_6d8e87525cb04555b522388333b3c951~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_36c8bac4e3414292b895136b10e0e63f~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_02702905861a433a810c402e038880a1~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_755af9db7e2f4546b587081b0161c812~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_8e1641e7b0844c07bfeb998be87ef97a~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_e3096001e6e74d6fad2e443a87a2e717.pdf'
  },
  // FINSAUNA THERMA COLLECTION - Multiple sizes
  {
    id: 'wsg-therma-44',
    name: 'Finsauna Therma 44',
    brand: 'World Sauna Group',
    series: 'Indoor Saunas',
    collection: 'Therma Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'indoor',
    dimensions: 'W: 53" x D: 51" x H: 79"',
    description: 'Therma indoor saunas blend authentic Finnish design with luxurious materials, delivering exceptional quality at an affordable price.',
    longDescription: 'Therma indoor saunas blend authentic Finnish design with luxurious materials, delivering exceptional quality at an affordable price. Handcrafted in Estonia using solid Nordic white spruce and accented with rich two-tone Thermo-Aspen, each Therma features an expansive glass front, grade-A Aspen benches, and refined touches like in-backrest and perimeter lighting. With a range of sizes, the Therma Collection has the versatility to fit your household\'s needs.',
    features: [
      'Solid Nordic white spruce walls and vertical STP paneling for lasting beauty',
      'Stylish two-tone Thermo-Aspen accents',
      'Floor-to-ceiling front glass creates a spacious, open atmosphere',
      'Ergonomic benches with arched backrests',
      'Premium turned-wood door handles',
      'Low-voltage lighting behind the backrest, plus exterior perimeter lighting',
      'Handcrafted in Estonia',
      'A World Sauna Group exclusive'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_3876f1c5537845de87779b2b16bbcb6e~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_3b5fbb957c23410da5dd9f14d2ab96a7~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_506b2f7dfc2848128d245016a5a0ddc6~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_aa547ae4d93c4b7a8c7c29fa0caae28c~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_fb8f966ff10e4d61a8c3a05779cd7a17~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_2eada93233e148b19f07a6ca3607106a~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_866bb2fd924248aaa6bb3faade520173.pdf'
  },
  {
    id: 'wsg-therma-46',
    name: 'Finsauna Therma 46',
    brand: 'World Sauna Group',
    series: 'Indoor Saunas',
    collection: 'Therma Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 3,
    category: 'indoor',
    dimensions: 'W: 78" x D: 54" x H: 80"',
    description: 'Mid-size Therma model with capacity for up to 3 people. Features authentic Finnish design with luxurious two-tone Thermo-Aspen accents.',
    longDescription: 'The Therma 46 offers comfortable seating for up to 3 people while maintaining the premium features of the Therma Collection. Handcrafted in Estonia using solid Nordic white spruce and rich two-tone Thermo-Aspen accents.',
    features: [
      'Solid Nordic white spruce walls and vertical STP paneling for lasting beauty',
      'Stylish two-tone Thermo-Aspen accents',
      'Floor-to-ceiling front glass creates a spacious, open atmosphere',
      'Ergonomic benches with arched backrests',
      'Premium turned-wood door handles',
      'Low-voltage lighting behind the backrest, plus exterior perimeter lighting',
      'Handcrafted in Estonia',
      'A World Sauna Group exclusive'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_303f75f1fcc64a95bb4a55a5e9a33433~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_2cd79cbac1554722ae65770eb73b201d~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_e326d12ec3a84216b57f735d80c07479~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_866bb2fd924248aaa6bb3faade520173.pdf'
  },
  {
    id: 'wsg-therma-57',
    name: 'Finsauna Therma 57',
    brand: 'World Sauna Group',
    series: 'Indoor Saunas',
    collection: 'Therma Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 6,
    category: 'indoor',
    dimensions: 'W: 90" x D: 72" x H: 80"',
    description: 'Larger Therma model with capacity for up to 6 people. Ideal for families or those who want extra space.',
    longDescription: 'The Therma 57 provides generous seating for up to 6 people. Features authentic Finnish design with expansive glass front and luxurious two-tone Thermo-Aspen accents.',
    features: [
      'Solid Nordic white spruce walls and vertical STP paneling for lasting beauty',
      'Stylish two-tone Thermo-Aspen accents',
      'Floor-to-ceiling front glass creates a spacious, open atmosphere',
      'Ergonomic benches with arched backrests',
      'Premium turned-wood door handles',
      'Low-voltage lighting behind the backrest, plus exterior perimeter lighting',
      'Handcrafted in Estonia',
      'A World Sauna Group exclusive'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_34ebfb312898440c9063f7db35b09d54~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_3876f1c5537845de87779b2b16bbcb6e~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_866bb2fd924248aaa6bb3faade520173.pdf'
  }
];

// ===========================================
// WORLD SAUNA GROUP - INFRARED SAUNAS
// ===========================================
export const WORLD_SAUNA_INFRARED = [
  // FINSAUNA FIERA COLLECTION - Multiple sizes
  {
    id: 'wsg-fiera-100',
    name: 'Finsauna Fiera 100',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Fiera Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 1,
    category: 'infrared',
    dimensions: 'W: 36" x D: 36" x H: 75"',
    maxTemperature: '170°F',
    description: 'FINSAUNA\'s Fiera infrared saunas blend modern design with therapeutic comfort, featuring sleek full-glass fronts and premium Canadian hemlock construction.',
    longDescription: 'FINSAUNA\'s Fiera infrared saunas blend modern design with therapeutic comfort, featuring sleek full-glass fronts and premium Canadian hemlock construction. With seven low-EMF carbon fiber heaters, heated slatted floors, and soft ambient LED lighting, Fieras deliver full-body warmth and a deeply relaxing atmosphere. With easy-to-use digital controls and immersive Bluetooth audio, every session is a stress-free getaway.',
    features: [
      'Full front glass provides a sleek, open look',
      'Crafted from beautiful, durable Canadian hemlock',
      'Heated slatted floors add soothing warmth',
      'Soft, soothing LED lighting creates the perfect atmosphere',
      '7 wall-to-wall, low-EMF far-infrared heaters provide full coverage',
      'Quick, efficient preheating process',
      'Immersive Bluetooth audio for music/podcasts'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_7020f94ea65e44279b4f75130acce3ef~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_ec27db8d3da14c9c97e7cb1ada7fcffe~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_a29548363f0042d2ba08b80db6dc2c15~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_cf2e0ab9751d4773b6f20feceeaa68bf~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_58950bbf5737494d80b885aca65c9620~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_623703dd32144ac593fb152744717bf9~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_cb771181ea094c70b39af213b5dccef3~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3dab02b2f12543218d066c5bab871472.pdf'
  },
  {
    id: 'wsg-fiera-200',
    name: 'Finsauna Fiera 200',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Fiera Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'infrared',
    dimensions: 'W: 48" x D: 42" x H: 75"',
    maxTemperature: '170°F',
    description: '2-person Fiera model with premium Canadian hemlock construction and low-EMF carbon fiber heaters.',
    longDescription: 'The Fiera 200 offers comfortable seating for two while maintaining all the premium features of the Fiera Collection. Premium Canadian hemlock construction with low-EMF carbon fiber heaters for therapeutic heat.',
    features: [
      'Full front glass provides a sleek, open look',
      'Crafted from beautiful, durable Canadian hemlock',
      'Heated slatted floors add soothing warmth',
      'Soft, soothing LED lighting creates the perfect atmosphere',
      '7 wall-to-wall, low-EMF far-infrared heaters provide full coverage',
      'Quick, efficient preheating process',
      'Immersive Bluetooth audio for music/podcasts'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_bc7d2e0c787d4737bab928ba138e3e65~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_b80cb0ff17f64b06856d9f715b591245~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_02c980a7ff654266881c81993bb6a732~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3a154ae9c81f4d6e8fb0c9004d34f9d9~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3dab02b2f12543218d066c5bab871472.pdf'
  },
  // FINSAUNA RADIA IR COLLECTION - Multiple sizes
  {
    id: 'wsg-radia-ir-100',
    name: 'Finsauna Radia IR 100',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia IR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 1,
    category: 'infrared',
    dimensions: 'W: 37" x D: 38" x H: 75"',
    maxTemperature: '170°F',
    description: 'FINSAUNA\'s Radia IR line is a marvel of infrared technology, featuring full-spectrum heating with near-, mid-, and far-IR wavelengths.',
    longDescription: 'FINSAUNA\'s Radia IR line is a marvel of infrared technology, featuring full-spectrum heating with near-, mid-, and far-IR wavelengths. High-tech infrared heaters deliver powerful therapeutic benefits, complemented by medical-grade red light therapy and soothing chromatherapy. Constructed from premium Canadian hemlock and featuring beautiful full front glass, Radia IRs provide a rejuvenating, immersive sauna session powered by innovation.',
    features: [
      'Full-spectrum infrared heating - near, mid, and far',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Full front glass provides a sleek, open look',
      'Black waxed accents throughout for stunning contrast',
      'Chromatherapy LED lighting inside and out',
      'Constructed from premium, certified Canadian hemlock',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_cb3630d1b4ed4795b91b711de93aab1e~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_2167f2a12e464bd996032f1ed7b8ffd0~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_e380c1f199b145a88cff2a39be2f5584~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_3826ebedd4674f07b3009d0eb42c3c4d~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3ac7fc248cc04a28ae86d0dea5846dc5.pdf'
  },
  {
    id: 'wsg-radia-ir-200',
    name: 'Finsauna Radia IR 200',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia IR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'infrared',
    dimensions: 'W: 48" x D: 42" x H: 75"',
    maxTemperature: '170°F',
    description: '2-person Radia IR model with full-spectrum infrared heating and medical-grade red light therapy.',
    longDescription: 'The Radia IR 200 offers comfortable seating for two with all the advanced features of the Radia IR Collection. Full-spectrum infrared heating with near-, mid-, and far-IR wavelengths plus medical-grade red light therapy.',
    features: [
      'Full-spectrum infrared heating - near, mid, and far',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Full front glass provides a sleek, open look',
      'Black waxed accents throughout for stunning contrast',
      'Chromatherapy LED lighting inside and out',
      'Constructed from premium, certified Canadian hemlock',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_c767127f7cf14a89a658b0895f0e12d4~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_3e11090fe9e3493a86cd491a38f1b77b~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_69111631ad434bde91be59b624a6df65~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3ac7fc248cc04a28ae86d0dea5846dc5.pdf'
  },
  {
    id: 'wsg-radia-ir-300',
    name: 'Finsauna Radia IR 300',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia IR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 3,
    category: 'infrared',
    dimensions: 'W: 71" x D: 45" x H: 75"',
    maxTemperature: '170°F',
    description: '3-person Radia IR model with full-spectrum infrared heating and medical-grade red light therapy.',
    longDescription: 'The Radia IR 300 provides spacious seating for three with all the advanced features of the Radia IR Collection. Full-spectrum infrared heating with medical-grade red light therapy and chromatherapy.',
    features: [
      'Full-spectrum infrared heating - near, mid, and far',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Full front glass provides a sleek, open look',
      'Black waxed accents throughout for stunning contrast',
      'Chromatherapy LED lighting inside and out',
      'Constructed from premium, certified Canadian hemlock',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_f4e47444e9564626bc6928d750c934cd~mv2.jpg'
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3ac7fc248cc04a28ae86d0dea5846dc5.pdf'
  },
  {
    id: 'wsg-radia-ir-400u',
    name: 'Finsauna Radia IR 400U',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia IR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'infrared',
    dimensions: 'W: 71" x D: 45" x H: 75"',
    maxTemperature: '170°F',
    description: '4-person U-shaped Radia IR model with full-spectrum infrared heating and medical-grade red light therapy.',
    longDescription: 'The Radia IR 400U offers generous U-shaped seating for up to four people with all the advanced features of the Radia IR Collection. Full-spectrum infrared heating with medical-grade red light therapy.',
    features: [
      'Full-spectrum infrared heating - near, mid, and far',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Full front glass provides a sleek, open look',
      'Black waxed accents throughout for stunning contrast',
      'Chromatherapy LED lighting inside and out',
      'Constructed from premium, certified Canadian hemlock',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_f4e47444e9564626bc6928d750c934cd~mv2.jpg'
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_3ac7fc248cc04a28ae86d0dea5846dc5.pdf'
  },
  // FINSAUNA RADIA TIR COLLECTION - Hybrid Traditional + Infrared
  {
    id: 'wsg-radia-tir-200',
    name: 'Finsauna Radia TIR 200',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia TIR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'infrared',
    dimensions: 'W: 49" x D: 49" x H: 80"',
    maxTemperature: '170°F',
    description: 'Radia TIRs offer a versatile 2-in-1 heating experience, pairing powerful infrared therapy with a traditional Finnish sauna heater.',
    longDescription: 'Radia TIRs offer a versatile 2-in-1 heating experience, pairing powerful infrared therapy with a traditional Finnish sauna heater. TIRs allow for use of infrared heat, traditional heat, or both simultaneously. With advanced features like medical-grade red light therapy, Bluetooth speakers, and a touch screen for easy customization, the TIR Collection delivers the best of all worlds for a revitalizing escape.',
    features: [
      'Enjoy traditional heat, infrared, and red light therapy',
      'UL listed traditional heater enables wet/dry use and steam',
      'Simultaneous traditional and infrared operation available',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Chromatherapy LED lighting',
      'Touch screen and Wi-Fi control',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_3cf94d9de3af44cab27a2844974772b2~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_5018ad7d7def4f87958246db4a1229d9~mv2.jpeg',
        'https://static.wixstatic.com/media/209f9f_44d0e74658c64a84b593a46dc84bf729~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_4de5d7fdb7774564872b312e17a70223~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_bb3f26fe0a8047b4860e54066605b9fb~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_6a06d9071c4e410989fe7036eefddb28.pdf'
  },
  {
    id: 'wsg-radia-tir-400',
    name: 'Finsauna Radia TIR 400',
    brand: 'World Sauna Group',
    series: 'Infrared Saunas',
    collection: 'Radia TIR Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 4,
    category: 'infrared',
    dimensions: 'W: 75" x D: 64" x H: 80"',
    maxTemperature: '170°F',
    description: 'Larger 4-person TIR model with 2-in-1 heating - traditional Finnish sauna plus infrared therapy in one unit.',
    longDescription: 'The Radia TIR 400 offers spacious seating for up to 4 people with the versatile 2-in-1 heating experience. Use infrared heat, traditional heat, or both simultaneously for a completely customizable sauna session.',
    features: [
      'Enjoy traditional heat, infrared, and red light therapy',
      'UL listed traditional heater enables wet/dry use and steam',
      'Simultaneous traditional and infrared operation available',
      'Reaches 170°F in less than 1 hour',
      'Medical-grade red light therapy',
      'Chromatherapy LED lighting',
      'Touch screen and Wi-Fi control',
      'Immersive Bluetooth speakers'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_798b02a145f940ffa091ddfc84bd2e31~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_5018ad7d7def4f87958246db4a1229d9~mv2.jpeg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_6a06d9071c4e410989fe7036eefddb28.pdf'
  }
];

// ===========================================
// WORLD SAUNA GROUP - TUBS & PLUNGES
// ===========================================
export const WORLD_SAUNA_PLUNGES = [
  // FINSAUNA AQUAFIN SINGLE
  {
    id: 'wsg-aquafin-single',
    name: 'Finsauna AquaFin Single',
    brand: 'World Sauna Group',
    series: 'Tubs & Plunges',
    collection: 'AquaFin Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 1,
    category: 'plunge',
    dimensions: 'W: 85" x D: 42" x H: 30"',
    description: 'FINSAUNA\'s AquaFin immersion tubs deliver a premium at-home hydrotherapy experience, designed to boost recovery and relaxation through a wide range of temperatures.',
    longDescription: 'FINSAUNA\'s AquaFin immersion tubs deliver a premium at-home hydrotherapy experience, designed to boost recovery and relaxation through a wide range of temperatures. The AquaFin Single features a built-in chiller and a compact design ideal for one, with insulated construction, digital controls, and durable, lockable covers.',
    features: [
      'Hot or cold immersion with precise temperature control',
      'Powerful hydrotherapy jets',
      'Immersive LED lighting',
      'Anti-spillover design for water retention',
      'Solid, sturdy ABS bottom for easy placement',
      'Outdoor ASTM safety-rated, tapered & lockable cover',
      'Optional saltwater & ozone capability'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_f6d0db54b8e34c70a9bf6e08fab8f1dc~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_2810d5dea1e54bc3bc7f3447495245df~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_4a8bd26a6f3a42e6b39b4b3555987ce5~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_422f735696f44b6b99261643d0499f1a~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_ea9a009f30394fadb0914e6ab7f5f85b~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_37e0cfc94e3b4af8bb6e31ce5e0d6c4f~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_d25992ce7abc42e5a20104e6cd4d5ab4.pdf'
  },
  // FINSAUNA AQUAFIN DUO (Hot + Cold)
  {
    id: 'wsg-aquafin-duo',
    name: 'Finsauna AquaFin Duo',
    brand: 'World Sauna Group',
    series: 'Tubs & Plunges',
    collection: 'AquaFin Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    persons: 2,
    category: 'plunge',
    dimensions: 'W: 85" x D: 85" x H: 30"',
    description: 'The AquaFin Duo offers separate hot and cold tub system, perfect for contrast therapy with a partner.',
    longDescription: 'The AquaFin Duo offers a separate hot and cold tub system, perfect for contrast therapy with a partner. Both models include insulated construction, digital controls, and durable, lockable covers - making them a reliable and luxurious addition to any wellness routine.',
    features: [
      'Separate hot and cold tub system',
      'Perfect for contrast therapy',
      'Powerful hydrotherapy jets',
      'Immersive LED lighting',
      'Anti-spillover design for water retention',
      'Outdoor ASTM safety-rated, tapered & lockable cover',
      'Optional saltwater & ozone capability'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_7413db72e5fb4f8284e10e9dc340dfce~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_f6d0db54b8e34c70a9bf6e08fab8f1dc~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_6a99b0607e8c4afaff3ed57ef81f00ec~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_b6f5b27d5a094728acb2ac63e6b4a1cd~mv2.jpg',
        'https://static.wixstatic.com/media/209f9f_99a26ffcafac4ec2bf77468f494e5fce~mv2.jpg'
      ]
    },
    brochure: 'https://www.worldsaunagroup.com/_files/ugd/209f9f_d25992ce7abc42e5a20104e6cd4d5ab4.pdf'
  }
];

// ===========================================
// WORLD SAUNA GROUP - HEATERS
// ===========================================
export const SAUNA_HEATERS = [
  // COZY HEATERS
  {
    id: 'heater-cozy',
    name: 'Cozy Sauna Heater',
    brand: 'Cozy',
    series: 'Sauna Heaters',
    collection: 'Cozy Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric',
    description: 'Cozy sauna heaters deliver reliable performance with efficient heating for your home sauna.',
    longDescription: 'Cozy heaters are designed for reliability and efficiency, providing consistent heat for an authentic sauna experience. Built with quality materials for long-lasting performance.',
    features: [
      'Reliable performance',
      'Efficient heating',
      'Quality construction',
      'Easy installation',
      'Long-lasting durability'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_82a85dadabc4462083cb76fffba8a7f1~mv2.jpg'
    }
  },
  // FINSAUNA HEATERS
  {
    id: 'heater-finsauna',
    name: 'Finsauna Heater',
    brand: 'Finsauna',
    series: 'Sauna Heaters',
    collection: 'Finsauna Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric',
    description: 'Finsauna heaters offer premium Finnish heating technology for the authentic sauna experience.',
    longDescription: 'Engineered in Finland, Finsauna heaters deliver the authentic heat and steam that define the traditional Finnish sauna experience. Premium construction ensures reliable performance for years to come.',
    features: [
      'Finnish engineering',
      'Authentic sauna heat',
      'Premium construction',
      'Reliable performance',
      'Easy to maintain'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_ae2d9a7176ba4a1482d5983b9a818698~mv2.jpg'
    }
  },
  // HUUM HEATERS
  {
    id: 'heater-huum',
    name: 'HUUM Sauna Heater',
    brand: 'HUUM',
    series: 'Sauna Heaters',
    collection: 'HUUM Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric',
    description: 'HUUM sauna heaters combine award-winning Nordic design with advanced technology to deliver a superior sauna experience.',
    longDescription: 'HUUM sauna heaters combine award-winning Nordic design with advanced technology to deliver a superior sauna experience. Crafted in Estonia, these heaters use large stone capacities and minimal metal surfaces to create soft, long-lasting steam. With smart controls and sleek aesthetics, HUUM heaters elevate performance and style in any sauna setting.',
    features: [
      'High stone capacity for gentle, consistent heat and steam',
      'Mobile app for remote access',
      'Eco-conscious Estonian craftsmanship',
      'Minimal yet beautiful design',
      'Award-winning Nordic design'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_a24ee283e30c4575a313162e7678884d~mv2.jpg',
      gallery: [
        'https://static.wixstatic.com/media/209f9f_aaf2c460fea34cc998f76422b6417750~mv2.jpeg',
        'https://static.wixstatic.com/media/209f9f_1fda2f557c09459d8b546fa918ca41f1~mv2.jpeg',
        'https://static.wixstatic.com/media/209f9f_05b044328df94e6888ce7665c2b01d40~mv2.jpeg'
      ]
    }
  },
  // IKI HEATERS
  {
    id: 'heater-iki',
    name: 'IKI Sauna Heater',
    brand: 'IKI',
    series: 'Sauna Heaters',
    collection: 'IKI Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric/Wood',
    description: 'IKI heaters are known for their exceptional stone capacity and ability to produce soft, luxurious steam.',
    longDescription: 'IKI heaters from Finland are renowned for their exceptional stone capacity and superior steam quality. The innovative design allows for massive amounts of sauna stones, creating soft, enveloping steam that defines the ultimate sauna experience.',
    features: [
      'Exceptional stone capacity',
      'Soft, luxurious steam',
      'Finnish craftsmanship',
      'Electric and wood-burning options',
      'Commercial-grade quality'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_6ee23b650f644f7db9e8151e6c0956e1~mv2.jpg'
    }
  },
  // NARVI HEATERS
  {
    id: 'heater-narvi',
    name: 'Narvi Sauna Heater',
    brand: 'Narvi',
    series: 'Sauna Heaters',
    collection: 'Narvi Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric/Wood',
    description: 'Narvi heaters bring Finnish sauna heritage to your home with both electric and wood-burning options.',
    longDescription: 'With over 80 years of Finnish sauna heritage, Narvi heaters represent the pinnacle of traditional sauna heating. Available in both electric and wood-burning models, Narvi offers authentic Finnish sauna heat.',
    features: [
      'Over 80 years of Finnish heritage',
      'Electric and wood-burning options',
      'Traditional Finnish design',
      'Durable construction',
      'Authentic sauna experience'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_68d5250a308b463680d0ac51731a80cc~mv2.jpg'
    }
  },
  // SAUNUM HEATERS
  {
    id: 'heater-saunum',
    name: 'Saunum AirPerfect Heater',
    brand: 'Saunum',
    series: 'Sauna Heaters',
    collection: 'Saunum Collection',
    price: 'Contact for Pricing',
    priceValue: null,
    category: 'heater',
    heaterType: 'Electric',
    description: 'Saunum heaters feature patented air circulation technology for the perfect sauna climate.',
    longDescription: 'Saunum\'s patented AirPerfect technology revolutionizes the sauna experience by circulating fresh air throughout the cabin while maintaining optimal heat. This creates a more comfortable, breathable environment that allows for longer, more enjoyable sauna sessions.',
    features: [
      'Patented AirPerfect technology',
      'Fresh air circulation',
      'Optimal heat distribution',
      'Longer, more comfortable sessions',
      'Smart controls available'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/209f9f_02de3ff99723409fb7b8f1888e8991f9~mv2.jpg'
    }
  }
];

// Combined all World Sauna Group Saunas
export const WORLD_SAUNA_ALL = [...WORLD_SAUNA_OUTDOOR, ...WORLD_SAUNA_INDOOR, ...WORLD_SAUNA_INFRARED];

// Combined all saunas (existing + World Sauna Group)
export const ALL_SAUNAS = [...SAUNAS, ...WORLD_SAUNA_ALL];

// Combined all plunges (existing + World Sauna Group)
export const ALL_PLUNGES = [...COLD_PLUNGES, ...WORLD_SAUNA_PLUNGES];

// Combined Hot Tubs (all brands)
export const HOT_TUBS = [...GRAND_RIVER_PRODUCTS, ...DYNASTY_SPAS_PRODUCTS, ...VIKING_SPAS_PRODUCTS];

// Get product by ID
export const getProductById = (id) => {
  return [...HOT_TUBS, ...SWIM_SPAS, ...ALL_SAUNAS, ...ALL_PLUNGES, ...SAUNA_HEATERS].find(p => p.id === id);
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
      // Default to price-low (lowest to highest)
      return sorted.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
  }
};

// Get unique series
export const getUniqueSeries = (products) => {
  return [...new Set(products.map(p => p.series).filter(Boolean))];
};
