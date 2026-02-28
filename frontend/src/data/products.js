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
    price: '$10,995.99',
    priceValue: 10995.99,
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
    price: '$10,495.99',
    priceValue: 10495.99,
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
    price: '$10,495.99',
    priceValue: 10495.99,
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
    price: '$9,495.99',
    priceValue: 9495.99,
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
    jets: 35,
    price: '$8,995.99',
    priceValue: 8995.99,
    seatingLayout: 'Lounge',
    dimensions: '86″ x 86″ x 37″',
    electrical: '240v/50amp',
    description: 'Well-rounded 6-person spa with quality hydrotherapy.',
    features: ['35 jets', 'Lounge seating', 'LED lighting', 'Cascade water feature'],
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
    price: '$9,495.99',
    priceValue: 9495.99,
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
    price: '$8,995.99',
    priceValue: 8995.99,
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
    price: '$8,995.99',
    priceValue: 8995.99,
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
    persons: 6,
    jets: 28,
    price: '$7,295.99',
    priceValue: 7295.99,
    seatingLayout: 'Lounge',
    dimensions: '86″ x 86″ x 37″',
    electrical: '240v/50amp',
    description: 'Great value 6-person spa with Adirondack-style lounger.',
    features: ['6-person capacity', '28 jets', 'Lounge seating', 'Infinity Edge water feature'],
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
    price: '$8,495.99',
    priceValue: 8495.99,
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
    price: '$7,995.99',
    priceValue: 7995.99,
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
    name: 'Swift Eco 220v',
    brand: 'Grand River Spas',
    series: 'Eco Series',
    modelFamily: 'Swift',
    persons: 3,
    jets: 33,
    price: '$7,495.99',
    priceValue: 7495.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '220v convertible',
    description: 'Compact 3-person hot tub perfect for smaller spaces with 220v power.',
    features: ['Compact design', '220v power', '33 jets', 'Perfect for couples'],
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
    price: '$6,995.99',
    priceValue: 6995.99,
    seatingLayout: 'Open',
    dimensions: '72″ round x 35″ tall',
    electrical: '240v/40amp',
    description: 'Round 5-person hot tub with LED lights and therapeutic jets with 220v power.',
    features: ['Round design', '20 jets', 'Seating for 5', 'LED lighting', '220v power'],
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
    price: '$6,995.99',
    priceValue: 6995.99,
    seatingLayout: 'Open',
    dimensions: '84″ x 84″ x 35″',
    electrical: '240v/40amp',
    description: 'Eco-friendly 6-person hot tub with value pricing.',
    features: ['Eco-friendly design', '35 jets', '6-person capacity', 'Budget-friendly'],
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
    price: '$6,995.99',
    priceValue: 6995.99,
    seatingLayout: 'Open',
    dimensions: '78″ x 60″ x 33″',
    electrical: '120v/15amp',
    description: 'Budget-friendly compact 3-person hot tub with plug-and-play 120v.',
    features: ['Plug-and-play', 'Compact design', '25 jets', '120v power'],
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
    price: '$6,495.99',
    priceValue: 6495.99,
    seatingLayout: 'Open',
    dimensions: '72″ round x 35″ tall',
    electrical: '120v/15amp',
    description: 'Plug-and-play round 5-person Eco Series hot tub with 120v.',
    features: ['Plug-and-play 120v', '20 jets', '5-person capacity', 'Great value'],
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
    description: 'Advanced ozone sanitization system for cleaner, clearer water with fewer chemicals.'
  },
  {
    id: 'gr-extra-touchscreen',
    name: 'Spa Touch Screen',
    price: '$700.00',
    priceValue: 700,
    description: 'Upgrade to a modern touch screen control panel for easier spa management.'
  },
  {
    id: 'gr-extra-airx',
    name: 'Air X Therapy System',
    price: '$300.00',
    priceValue: 300,
    description: 'Enhanced air therapy system for a more luxurious massage experience.'
  },
  {
    id: 'gr-extra-bluetooth',
    name: 'Bluetooth Stereo',
    price: '$950.00',
    priceValue: 950,
    description: 'Premium Bluetooth audio system for music while you relax.'
  },
  {
    id: 'gr-extra-wifi',
    name: 'WiFi Module',
    price: '$400.00',
    priceValue: 400,
    description: 'Control your spa remotely with the WiFi module and smartphone app.'
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
    price: '$13,995.99',
    priceValue: 13995.99,
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
    price: '$12,995.99',
    priceValue: 12995.99,
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
    price: '$11,995.99',
    priceValue: 11995.99,
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
    price: '$12,995.99',
    priceValue: 12995.99,
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
    price: '$11,995.99',
    priceValue: 11995.99,
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
    price: '$12,995.99',
    priceValue: 12995.99,
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
    price: '$11,995.99',
    priceValue: 11995.99,
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
    price: '$12,995.99',
    priceValue: 12995.99,
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
    price: '$9,859.99',
    priceValue: 9859.99,
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
    price: '$9,859.99',
    priceValue: 9859.99,
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
    price: '$9,859.99',
    priceValue: 9859.99,
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
    jets: 30,
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
    features: ['Cascading Waterfall', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover'],
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
    jets: 30,
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
    features: ['Cascading Waterfall', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover'],
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
    persons: 3,
    jets: 35,
    price: '$9,195.99',
    priceValue: 9195.99,
    seatingLayout: 'Lounger',
    dimensions: '60" x 83" x 33.5"',
    waterCapacity: '225 gallons',
    electrical: '220v/60amp',
    pumps: '1 - 6.0bhp Pump',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2150 lbs',
    description: 'Compact 3-person lounger ideal for patios and smaller spaces. Features LED fountain jets.',
    features: ['LED Fountain Jets', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover'],
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
    jets: 40,
    price: '$9,695.99',
    priceValue: 9695.99,
    seatingLayout: 'Lounger',
    dimensions: '82" x 82" x 36"',
    waterCapacity: '320 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 56 frame 6.0',
    filtration: '50 ft²',
    dryWeight: '750 lbs',
    filledWeight: '3400 lbs',
    description: '5-person lounger designed for relaxation and tranquility.',
    features: ['Digital Controls', 'LED Lights', 'Air/Water Multi Jets', 'Relaxation Focused'],
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
    jets: 30,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Bench',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '110v/20a',
    pumps: '1 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2710 lbs',
    description: 'Entry-level spa with plug-and-play convenience. Features K.362 digital topside, black scallop jets, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Black Scallop Jets', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
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
    jets: 30,
    price: '$7,995.99',
    priceValue: 7995.99,
    seatingLayout: 'Bench',
    dimensions: '82" x 82" x 39"',
    waterCapacity: '295 gallons',
    electrical: '220v/60amp',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2710 lbs',
    description: 'Entry-level spa with 220v power. Features K.362 digital topside, black scallop jets, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Black Scallop Jets', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
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
    electrical: '220v/60amp',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2710 lbs',
    description: 'Compact lounger spa perfect for intimate relaxation. Features K.362 digital topside, waterfall, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Cascading Waterfall', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
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
    electrical: '220v/60amp',
    pumps: '2 - 6.0bhp',
    filtration: '50 ft²',
    dryWeight: '350 lbs',
    filledWeight: '2710 lbs',
    description: 'Bench-style spa with ample seating for relaxation. Features K.362 digital topside, waterfall, and LED underwater lighting.',
    features: ['K.362 Digital Topside', 'Cascading Waterfall', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover'],
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
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Heritage',
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
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Tradition',
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
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
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
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Apex',
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
    cabinetColors: ['slate', 'chestnut', 'stone', 'carbon'],
    colorVisualizerBase: 'Elite_ElevateX',
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
    cabinetColors: ['ashGray', 'walnut', 'barnwood', 'black'],
    colorVisualizerBase: 'Viking-3',
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
    price: '$39,995.00',
    priceValue: 39995,
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
    price: '$34,995.00',
    priceValue: 34995,
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
    price: '$29,995.00',
    priceValue: 29995,
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
    price: '$24,995.00',
    priceValue: 24995,
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
    price: '$15,995.99',
    priceValue: 15995.99,
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
    price: '$15,995.99',
    priceValue: 15995.99,
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
    price: '$32,500.00',
    priceValue: 32500,
    dimensions: '92" x 192" x 60"',
    waterCapacity: '1,850 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2700 lbs',
    filledWeight: '17500 lbs',
    description: '16-foot trainer swim spa with swim coach multi-programmable workout, in.Mix lighting, and in.Stream audio.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'Exercise/Rowing & Swim Tether', 'LED Illuminated Fountains', 'LED Corner Lighting'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer']
  },
  {
    id: 'ds-ss-aquex-pro-plus-17',
    name: "17' Aquex Pro Plus",
    brand: 'Dynasty Spas',
    series: 'Aquex Collection',
    length: '17 ft',
    price: '$38,500.00',
    priceValue: 38500,
    dimensions: '92" x 204" x 60"',
    waterCapacity: '2,100 gallons',
    electrical: '220v/60amp',
    pumps: '3 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '2800 lbs',
    filledWeight: '19600 lbs',
    description: '17-foot professional swim spa with dual zone capability, swim coach, and premium in.Mix/in.Stream systems.',
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
    price: '$42,500.00',
    priceValue: 42500,
    dimensions: '92" x 228" x 60"',
    waterCapacity: '2,500 gallons',
    electrical: '220v/60amp',
    pumps: '4 - 5.0bhp + 1 - 7.0bhp',
    filtration: '100 ft²',
    dryWeight: '3200 lbs',
    filledWeight: '23200 lbs',
    description: 'Our largest 19-foot dual-zone swim spa with separate hot tub section, swim coach, and premium features.',
    features: ['K.1000 Topside Control', 'in.Mix Illuminated Jet System', 'in.Stream Audio System', 'Swim Coach Multi-Programmable Workout', 'Dual Temperature Zones', 'Exercise/Rowing & Swim Tether', 'LED Corner Lighting', 'Bench Seating in Hot Tub'],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_928b791fb72d414cba37d3699a061c27~mv2.webp'
    },
    shellColors: ['sterlingMarble'],
    cabinetColors: ['blackConfer', 'grayConfer', 'ashElite', 'coastalGrayElite']
  }
];

// Combined Swim Spas (for backward compatibility)
export const SWIM_SPAS = [...GRAND_RIVER_SWIM_SPAS, ...VIKING_SWIM_SPAS, ...DYNASTY_SWIM_SPAS];

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
      primary: 'https://static.wixstatic.com/media/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg'
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
      primary: 'https://static.wixstatic.com/media/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_eb36eec4d8c14ba196a52637182a7f38~mv2.jpg'
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
      primary: 'https://static.wixstatic.com/media/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_cbf022aa5e2c4eb692e22b73625b0ada~mv2.jpg'
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
      primary: 'https://static.wixstatic.com/media/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_a277699db78c4e0ba8d2195e1414dad4~mv2.jpg'
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
      primary: 'https://static.wixstatic.com/media/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_e56fe49cbb29452ea58188006e11a6b1~mv2.jpg'
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
      primary: 'https://static.wixstatic.com/media/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_c91840fd49044fd690b7277b44cf25fc~mv2.jpg'
    },
    whiteGloveInstallation: true
  }
];

export const COLD_PLUNGES = [
  {
    id: 'cp-endurance',
    name: 'Endurance Cold Plunge Bundle',
    brand: 'Icebound',
    series: 'Endurance',
    price: '$2,999.00',
    priceValue: 2999,
    description: 'Transform your recovery routine with the Endurance Plunge Bundle – your personal polar paradise. This premium package combines a spacious inflatable tub with a powerful 1HP chiller.',
    longDescription: 'Transform your recovery routine with the Endurance Plunge Bundle – your personal polar paradise. This premium package combines our spacious inflatable tub with a powerful 1HP chiller, delivering temperatures from 37°F to 107.6°F. With WiFi controls, Ozone sanitization, a 5-micron filter, and a self-priming pump, it\'s the ultimate portable solution for serious athletes.',
    features: [
      'Professional-Grade Temperature Control (37°F to 107.6°F)',
      'WiFi-enabled app control',
      '1HP Water Chiller + Heater',
      'Ozone sanitization system',
      '5-micron filtration',
      'Fits two adults comfortably',
      'Dimensions: 63" × 38.5" × 26"',
      'Max Capacity: 155 gallons',
      'Indoor/outdoor versatility'
    ],
    specs: {
      dimensions: '63" × 38.5" × 26"',
      capacity: '155 gallons',
      tempRange: '37°F to 107.6°F',
      power: '1HP Chiller'
    },
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_4888e9c65f014715a52d6f4282ea0929~mv2.png/v1/fill/w_487,h_487,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_4888e9c65f014715a52d6f4282ea0929~mv2.png',
      overhead: 'https://static.wixstatic.com/media/5c7c78_b188f0afaa784b1f9b2968c342fa437b~mv2.png/v1/fill/w_487,h_487,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_b188f0afaa784b1f9b2968c342fa437b~mv2.png'
    }
  },
  {
    id: 'cp-resolute-pro',
    name: 'The Resolute Pro',
    brand: 'Icebound',
    series: 'Resolute',
    price: '$7,999.00',
    priceValue: 7999,
    description: 'Professional-grade cold plunge for serious recovery and wellness. The Resolute Pro offers premium construction and advanced temperature control for athletes and wellness enthusiasts.',
    features: [
      'Professional-grade construction',
      'Advanced temperature control',
      'Premium insulated design',
      'Easy maintenance',
      'Built for daily use',
      'Commercial-grade durability'
    ],
    images: {
      primary: 'https://static.wixstatic.com/media/5c7c78_c8b890519518456695312043eb9b8256~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_c8b890519518456695312043eb9b8256~mv2.jpg',
      overhead: 'https://static.wixstatic.com/media/5c7c78_d0866f32060c4474b537bab6b8a5f1ff~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_d0866f32060c4474b537bab6b8a5f1ff~mv2.jpg'
    }
  }
];

// Combined Hot Tubs (all brands)
export const HOT_TUBS = [...GRAND_RIVER_PRODUCTS, ...VIKING_SPAS_PRODUCTS, ...DYNASTY_SPAS_PRODUCTS];

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
