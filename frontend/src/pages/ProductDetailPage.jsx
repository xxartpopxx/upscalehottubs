import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Check, Users, Droplets, Zap, Ruler, ArrowRight, Info, X, Flag, GitCompare } from 'lucide-react';
import { getProductById, getRelatedModel, VIKING_SPAS_PRODUCTS, DYNASTY_SPAS_PRODUCTS, VS_SHELL_COLORS, VS_ELITE_CABINET_COLORS, VS_HEIRLOOM_CABINET_COLORS, DYNASTY_SHELL_COLORS, DYNASTY_CABINET_COLORS } from '../data/products';
import { ASSETS, CONTACT } from '../data/constants';

// Base URL for Grand River Spas visualizer images
const GR_VISUALIZER_BASE = 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';
// Base URL for Viking Spas visualizer images
const VS_VISUALIZER_BASE = 'https://vikingspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';

// Shell and Cabinet colors for display
const SHELL_COLORS = {
  white: { name: 'White Satin', hex: '#F5F5F0', image: `${VS_VISUALIZER_BASE}/white.png` },
  silver: { name: 'Silver Satin', hex: '#C0C0C0', image: `${VS_VISUALIZER_BASE}/silver.png` },
  opal: { name: 'Opal Satin', hex: '#A8B5B8', image: `${VS_VISUALIZER_BASE}/opal.png` },
};

const CABINET_COLORS = {
  // Grand River
  coastalGray: { name: 'Coastal Gray', hex: '#6B7280', image: `${GR_VISUALIZER_BASE}/coastalgray.png` },
  walnut: { name: 'Walnut', hex: '#5D4037', image: `${VS_VISUALIZER_BASE}/walnut.png` },
  barnwood: { name: 'Barnwood', hex: '#8B7355', image: `${VS_VISUALIZER_BASE}/barnwood.png` },
  black: { name: 'Black Slate', hex: '#1a1a1a', image: `${VS_VISUALIZER_BASE}/black.png` },
  taupe: { name: 'Taupe', hex: '#8B7D6B', image: `${GR_VISUALIZER_BASE}/walnut.png` },
  // Viking Elite Series
  slate: { name: 'Slate', hex: '#708090', image: `${VS_VISUALIZER_BASE}/slate.png` },
  chestnut: { name: 'Chestnut', hex: '#954535', image: `${VS_VISUALIZER_BASE}/chestnut.png` },
  stone: { name: 'Stone', hex: '#8B8B83', image: `${VS_VISUALIZER_BASE}/stone.png` },
  carbon: { name: 'Carbon', hex: '#333333', image: `${VS_VISUALIZER_BASE}/carbon.png` },
  // Viking Heirloom Series
  ashGray: { name: 'Ash Gray', hex: '#B2BEB5', image: `${VS_VISUALIZER_BASE}/ash.png` },
  // Dynasty Spas Cabinet Colors
  blackConfer: { name: 'Black Confer', hex: '#1a1a1a' },
  grayConfer: { name: 'Gray Confer', hex: '#6B7280' },
  ashElite: { name: 'Ash Elite', hex: '#B2BEB5' },
  coastalGrayElite: { name: 'Coastal Gray Elite', hex: '#708090' },
};

// Unified color lookup - checks brand-specific colors first (with images), then generic
const getShellColorData = (colorKey) => DYNASTY_SHELL_COLORS[colorKey] || SHELL_COLORS[colorKey] || null;
const getCabinetColorData = (colorKey) => DYNASTY_CABINET_COLORS[colorKey] || CABINET_COLORS[colorKey] || null;

// Corner color options for Viking Spas
const CORNER_COLORS = {
  // Elite Series corners
  carbon: { name: 'Carbon', hex: '#333333', image: `${VS_VISUALIZER_BASE}/carbon.png` },
  // Heirloom Series corners
  black: { name: 'Black Slate', hex: '#1a1a1a', image: `${VS_VISUALIZER_BASE}/black.png` },
};

// Generate the actual color combination image URL for Grand River
const getGRColorComboImageUrl = (product, shellColor, cabinetColor, cornerOption) => {
  if (!product || product.brand !== 'Grand River Spas') {
    return null;
  }
  
  const modelName = product.modelFamily || product.name.split(' ')[0];
  
  const shellMap = { white: 'White', silver: 'Silver', opal: 'Opal' };
  const cabinetMap = { coastalGray: 'CoastalGray', walnut: 'Walnut', barnwood: 'Barnwood', black: 'Black', taupe: 'Taupe' };
  
  const shell = shellMap[shellColor] || 'White';
  const cabinet = cabinetMap[cabinetColor] || 'CoastalGray';
  const corner = cornerOption === 'black' ? 'Black' : cabinet;
  
  return `${GR_VISUALIZER_BASE}/${modelName}_${shell}_${cabinet}_${corner}.jpg`;
};

// Generate the actual color combination image URL for Viking Spas
const getVSColorComboImageUrl = (product, shellColor, cabinetColor, cornerOption) => {
  if (!product || product.brand !== 'Viking Spas') {
    return null;
  }
  
  // Use the colorVisualizerBase if available, otherwise derive from name
  const modelBase = product.colorVisualizerBase || product.modelFamily || product.name;
  
  const shellMap = { white: 'White', silver: 'Silver', opal: 'Opal' };
  
  // Elite Series cabinet map
  const eliteCabinetMap = { slate: 'Slate', chestnut: 'Chestnut', stone: 'Stone', carbon: 'Carbon' };
  // Heirloom Series cabinet map  
  const heirloomCabinetMap = { ashGray: 'Ash', walnut: 'Walnut', barnwood: 'Barnwood', black: 'Black' };
  
  const isElite = product.series === 'Elite Series';
  const cabinetMap = isElite ? eliteCabinetMap : heirloomCabinetMap;
  
  const shell = shellMap[shellColor] || 'Opal';
  const cabinet = cabinetMap[cabinetColor] || (isElite ? 'Carbon' : 'Ash');
  
  // Corner: 'match' means same as cabinet, otherwise use Carbon (Elite) or Black (Heirloom)
  let corner;
  if (cornerOption === 'match') {
    corner = cabinet;
  } else {
    corner = isElite ? 'Carbon' : 'Black';
  }
  
  return `${VS_VISUALIZER_BASE}/${modelBase}_${shell}_${cabinet}_${corner}.png`;
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedModel = useMemo(() => getRelatedModel(product), [product]);
  
  const defaultShell = product?.shellColors?.[0] || 'white';
  const defaultCabinet = product?.cabinetColors?.[0] || 'coastalGray';
  
  const [selectedShell, setSelectedShell] = useState(defaultShell);
  const [selectedCabinet, setSelectedCabinet] = useState(defaultCabinet);
  // Corner option: 'match' means match cabinet color, or specific color like 'carbon' or 'black'
  const [selectedCorner, setSelectedCorner] = useState('match');
  const [currentView, setCurrentView] = useState('color');
  const [activeTab, setActiveTab] = useState('overview');
  const [imageError, setImageError] = useState(false);
  const [selectedCompareModel, setSelectedCompareModel] = useState(null);
  const [showCompareModal, setShowCompareModal] = useState(false);
  
  // Get comparable models from the same brand
  const comparableModels = useMemo(() => {
    if (!product) return [];
    
    if (product.brand === 'Viking Spas') {
      return VIKING_SPAS_PRODUCTS.filter(p => p.id !== product.id);
    }
    if (product.brand === 'Dynasty Spas') {
      return DYNASTY_SPAS_PRODUCTS.filter(p => p.id !== product.id);
    }
    return [];
  }, [product]);
  
  // Set document title - must be before any early returns
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ${product.brand} | Upstate Hot Tubs`;
    } else {
      document.title = 'Product Not Found | Upstate Hot Tubs';
    }
  }, [product]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (product) {
      setSelectedShell(product.shellColors?.[0] || 'white');
      setSelectedCabinet(product.cabinetColors?.[0] || 'coastalGray');
      setSelectedCorner('match'); // Default to matching cabinet
      setCurrentView('color'); // Reset to color view
      setImageError(false);
      setSelectedCompareModel(null);
    }
  }, [product?.id]);
  
  const isGrandRiver = product?.brand === 'Grand River Spas';
  const isViking = product?.brand === 'Viking Spas';
  const isDynasty = product?.brand === 'Dynasty Spas';
  const isSaunaOrColdPlunge = product?.brand === 'SaunaLife' || product?.brand === 'Icebound';
  const isSwimSpa = !!product?.length;
  const hasColorSelector = (isGrandRiver || isViking) && !isSwimSpa;
  
  // Determine corner color options based on series
  const cornerOptions = useMemo(() => {
    if (!isViking || isSwimSpa) return [];
    const isElite = product?.series === 'Elite Series';
    return isElite 
      ? [{ key: 'match', name: 'Match Cabinet' }, { key: 'carbon', name: 'Carbon' }]
      : [{ key: 'match', name: 'Match Cabinet' }, { key: 'black', name: 'Black Slate' }];
  }, [isViking, isSwimSpa, product?.series]);
  
  // Determine available views based on brand - must be before early returns
  const views = useMemo(() => {
    if (isDynasty || isSaunaOrColdPlunge || isSwimSpa) return ['side'];
    if (hasColorSelector) return ['color', 'side', 'overhead'];
    return ['side', 'overhead'];
  }, [isDynasty, isSaunaOrColdPlunge, isSwimSpa, hasColorSelector]);
  
  const currentImage = useMemo(() => {
    if (!product) return ASSETS.logo;
    
    // For Dynasty Spas - only show primary image
    if (isDynasty) {
      return product.images.primary;
    }
    
    if (currentView === 'overhead') {
      return product.images.overhead;
    }
    if (currentView === 'side') {
      return product.images.primary;
    }
    
    // Color visualizer for Grand River
    if (isGrandRiver && !imageError) {
      const colorComboUrl = getGRColorComboImageUrl(product, selectedShell, selectedCabinet, selectedCorner);
      if (colorComboUrl) {
        return colorComboUrl;
      }
    }
    
    // Color visualizer for Viking Spas
    if (isViking && !imageError) {
      const colorComboUrl = getVSColorComboImageUrl(product, selectedShell, selectedCabinet, selectedCorner);
      if (colorComboUrl) {
        return colorComboUrl;
      }
    }
    
    return product.images.primary;
  }, [product, currentView, selectedShell, selectedCabinet, selectedCorner, isGrandRiver, isViking, isDynasty, imageError]);
  
  if (!product) {
    return (
      <div className="pt-36 pb-20 text-center">
        <h2 className="text-2xl font-bold text-[#0A1628]">Product not found</h2>
        <Link to="/hot-tubs" className="text-[#B91C1C] hover:underline mt-4 inline-block">
          Return to Hot Tubs
        </Link>
      </div>
    );
  }

  const specs = [
    { icon: Users, label: 'Seats', value: `${product.persons} Adults` },
    { icon: Droplets, label: 'Jets', value: product.jets },
    { icon: Zap, label: 'Electrical', value: product.electrical },
    { icon: Ruler, label: 'Dimensions', value: product.dimensions },
  ];
  
  const currentViewIndex = views.indexOf(currentView);
  
  const handlePrevView = () => {
    const newIndex = currentViewIndex > 0 ? currentViewIndex - 1 : views.length - 1;
    setCurrentView(views[newIndex]);
  };
  
  const handleNextView = () => {
    const newIndex = currentViewIndex < views.length - 1 ? currentViewIndex + 1 : 0;
    setCurrentView(views[newIndex]);
  };

  // SEO metadata
  const seoDescription = product ? `${product.name} by ${product.brand}. ${product.description} Seats ${product.persons} adults with ${product.jets} jets. ${product.price}. American Made & Proud of It.` : '';
  const seoKeywords = product ? `${product.name}, ${product.brand}, ${product.series}, hot tub, spa, ${product.persons} person hot tub, hydrotherapy` : '';

  return (
    <>
      {product && (
        <Helmet>
          <meta name="description" content={seoDescription} />
          <meta name="keywords" content={seoKeywords} />
        </Helmet>
      )}
      <div className="pt-36 pb-20" data-testid="product-detail-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-slate-500 hover:text-[#B91C1C]">Home</Link></li>
              <ChevronRight size={14} className="text-slate-400" />
              <li><Link to="/hot-tubs" className="text-slate-500 hover:text-[#B91C1C]">Hot Tubs</Link></li>
              <ChevronRight size={14} className="text-slate-400" />
              <li className="text-[#0A1628] font-semibold">{product.name}</li>
            </ol>
          </nav>
          
          {/* Product Name Header */}
          <div className="mb-4">
            <p className="text-sm text-slate-500 uppercase tracking-wider">{product.brand}</p>
            <p className="text-sm text-[#B91C1C] font-semibold uppercase tracking-wider">{product.series}</p>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628]">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-[#B91C1C] mt-1">{product.price}</p>
          </div>
          
          {/* Main Product Section - Image + Color Selector Side by Side */}
          <div className="grid lg:grid-cols-12 gap-6 mb-8">
            {/* Image Gallery */}
            <div className={isSaunaOrColdPlunge ? 'lg:col-span-12' : 'lg:col-span-7'}>
              <div className="bg-slate-50 relative aspect-[4/3] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${currentImage}-${selectedShell}-${selectedCabinet}-${selectedCorner}`}
                    src={currentImage}
                    alt={`${product.name} - ${SHELL_COLORS[selectedShell]?.name} shell with ${CABINET_COLORS[selectedCabinet]?.name} cabinet`}
                    className="w-full h-full object-contain p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      if (currentView === 'color') {
                        setImageError(true);
                        e.target.src = product.images.primary;
                      }
                    }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows - only show when multiple views */}
                {views.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevView}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 shadow-lg transition-all"
                      data-testid="prev-view-btn"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextView}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 shadow-lg transition-all"
                      data-testid="next-view-btn"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                
                {/* Color indicator badges */}
                {currentView === 'color' && hasColorSelector && (
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-10">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg text-xs font-medium">
                      <div className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: SHELL_COLORS[selectedShell]?.hex }} />
                      <span>Shell: {SHELL_COLORS[selectedShell]?.name}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg text-xs font-medium">
                      <div className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: CABINET_COLORS[selectedCabinet]?.hex }} />
                      <span>Cabinet: {CABINET_COLORS[selectedCabinet]?.name}</span>
                    </div>
                    {isViking && selectedCorner !== 'match' && (
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg text-xs font-medium">
                        <div className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: CORNER_COLORS[selectedCorner]?.hex || '#333' }} />
                        <span>Corner: {CORNER_COLORS[selectedCorner]?.name}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* View Tabs & Thumbnails - Only show for hot tubs with multiple views */}
              {!isDynasty && !isSaunaOrColdPlunge && !isSwimSpa && (
                <div className="flex border border-slate-200 mt-2">
                  {hasColorSelector && (
                    <button
                      onClick={() => setCurrentView('color')}
                      className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                        currentView === 'color' ? 'bg-[#B91C1C] text-white' : 'bg-white text-[#0A1628] hover:bg-slate-50'
                      }`}
                      data-testid="view-color-btn"
                    >
                      Color Preview
                    </button>
                  )}
                  <button
                    onClick={() => setCurrentView('side')}
                    className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                      currentView === 'side' ? 'bg-[#B91C1C] text-white' : 'bg-white text-[#0A1628] hover:bg-slate-50'
                    }`}
                    data-testid="view-side-btn"
                  >
                    Side View
                  </button>
                  <button
                    onClick={() => setCurrentView('overhead')}
                    className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                      currentView === 'overhead' ? 'bg-[#B91C1C] text-white' : 'bg-white text-[#0A1628] hover:bg-slate-50'
                    }`}
                    data-testid="view-overhead-btn"
                  >
                    Overhead View
                  </button>
                </div>
              )}
            </div>
            
            {/* Color Selector Panel - 5 columns */}
            {!isSaunaOrColdPlunge && (
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              {product.shellColors && product.cabinetColors && !isDynasty && !isSwimSpa ? (
                <div className="bg-slate-50 p-5 h-full">
                  {/* Mobile: Show mini preview of selected colors at top */}
                  <div className="lg:hidden mb-4 p-3 bg-white rounded-lg border border-slate-200 sticky top-20 z-20">
                    <p className="text-xs font-semibold text-slate-500 mb-2">Selected Colors:</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-slate-300" style={{ backgroundColor: SHELL_COLORS[selectedShell]?.hex }} />
                        <span className="text-xs font-medium">{SHELL_COLORS[selectedShell]?.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-slate-300" style={{ backgroundColor: CABINET_COLORS[selectedCabinet]?.hex }} />
                        <span className="text-xs font-medium">{CABINET_COLORS[selectedCabinet]?.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-4">
                    Customize Your Spa Colors
                  </h3>
                  
                  {/* Shell Colors */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-slate-600 mb-2">Shell Color</p>
                    <div className="flex gap-2 flex-wrap">
                      {product.shellColors.map((colorKey) => {
                        const color = getShellColorData(colorKey);
                        if (!color) return null;
                        const isSelected = selectedShell === colorKey;
                        const swatchSize = isDynasty ? 'w-20 h-20' : 'w-14 h-14';
                        
                        return (
                          <motion.button
                            key={colorKey}
                            onClick={() => {
                              setSelectedShell(colorKey);
                              if (currentView !== 'color' && hasColorSelector) setCurrentView('color');
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                            data-testid={`shell-color-${colorKey}`}
                          >
                            <div className={`${swatchSize} rounded-lg overflow-hidden border-2 transition-all ${
                              isSelected ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-1' : 'border-slate-200 hover:border-slate-400'
                            }`}>
                              {color.image ? (
                                <img src={color.image} alt={color.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = color.hex; }} />
                              ) : (
                                <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                              )}
                              {isSelected && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg">
                                  <Check className="text-[#B91C1C]" size={16} strokeWidth={3} />
                                </motion.div>
                              )}
                            </div>
                            <p className={`text-[10px] mt-1 text-center font-medium ${isDynasty ? 'max-w-20' : 'max-w-14'} ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                              {isDynasty ? color.name : color.name.split(' ')[0]}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Cabinet Colors */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-slate-600 mb-2">{isDynasty ? 'Skirt Color' : 'Cabinet Color'}</p>
                    <div className="flex gap-2 flex-wrap">
                      {product.cabinetColors.map((colorKey) => {
                        const color = getCabinetColorData(colorKey);
                        if (!color) return null;
                        const isSelected = selectedCabinet === colorKey;
                        const swatchSize = isDynasty ? 'w-20 h-20' : 'w-14 h-14';
                        
                        return (
                          <motion.button
                            key={colorKey}
                            onClick={() => {
                              setSelectedCabinet(colorKey);
                              if (currentView !== 'color' && hasColorSelector) setCurrentView('color');
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                            data-testid={`cabinet-color-${colorKey}`}
                          >
                            <div className={`${swatchSize} rounded-lg overflow-hidden border-2 transition-all ${
                              isSelected ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-1' : 'border-slate-200 hover:border-slate-400'
                            }`}>
                              {color.image ? (
                                <img src={color.image} alt={color.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = color.hex; }} />
                              ) : (
                                <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                              )}
                              {isSelected && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg">
                                  <Check className="text-[#B91C1C]" size={16} strokeWidth={3} />
                                </motion.div>
                              )}
                            </div>
                            <p className={`text-[10px] mt-1 text-center font-medium ${isDynasty ? 'max-w-20' : 'max-w-14'} ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                              {isDynasty ? color.name : color.name.split(' ')[0]}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Corner Colors - Viking Spas specific */}
                  {isViking && (
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-slate-600 mb-2">Corner Color</p>
                      <div className="flex gap-3 flex-wrap">
                        {cornerOptions.map((option) => {
                          const isSelected = selectedCorner === option.key;
                          const cornerColor = option.key === 'match' 
                            ? CABINET_COLORS[selectedCabinet] 
                            : CORNER_COLORS[option.key];
                          
                          return (
                            <motion.button
                              key={option.key}
                              onClick={() => {
                                setSelectedCorner(option.key);
                                if (currentView !== 'color') setCurrentView('color');
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative group"
                              data-testid={`corner-color-${option.key}`}
                            >
                              <div className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                isSelected ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-1' : 'border-slate-200 hover:border-slate-400'
                              }`}>
                                {cornerColor?.image ? (
                                  <img src={cornerColor.image} alt={option.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = cornerColor?.hex; }} />
                                ) : (
                                  <div className="w-full h-full" style={{ backgroundColor: cornerColor?.hex }} />
                                )}
                                {isSelected && (
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg">
                                    <Check className="text-[#B91C1C]" size={16} strokeWidth={3} />
                                  </motion.div>
                                )}
                              </div>
                              <p className={`text-[10px] mt-1 text-center font-medium max-w-14 ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                                {option.name}
                              </p>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Corner Colors - Grand River (Match Cabinet or Black) */}
                  {isGrandRiver && (
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-slate-600 mb-2">Corner Color</p>
                      <div className="flex gap-3 flex-wrap">
                        {/* Match Cabinet Option */}
                        <motion.button
                          onClick={() => {
                            setSelectedCorner('match');
                            if (currentView !== 'color') setCurrentView('color');
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group"
                          data-testid="corner-color-match"
                        >
                          <div className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedCorner === 'match' ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-1' : 'border-slate-200 hover:border-slate-400'
                          }`}>
                            <div className="w-full h-full" style={{ backgroundColor: CABINET_COLORS[selectedCabinet]?.hex }} />
                            {selectedCorner === 'match' && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg">
                                <Check className="text-[#B91C1C]" size={16} strokeWidth={3} />
                              </motion.div>
                            )}
                          </div>
                          <p className={`text-[10px] mt-1 text-center font-medium max-w-14 ${selectedCorner === 'match' ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                            Match Cabinet
                          </p>
                        </motion.button>
                        
                        {/* Black Slate Option */}
                        <motion.button
                          onClick={() => {
                            setSelectedCorner('black');
                            if (currentView !== 'color') setCurrentView('color');
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group"
                          data-testid="corner-color-black"
                        >
                          <div className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedCorner === 'black' ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-1' : 'border-slate-200 hover:border-slate-400'
                          }`}>
                            <div className="w-full h-full" style={{ backgroundColor: '#1a1a1a' }} />
                            {selectedCorner === 'black' && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg">
                                <Check className="text-[#B91C1C]" size={16} strokeWidth={3} />
                              </motion.div>
                            )}
                          </div>
                          <p className={`text-[10px] mt-1 text-center font-medium max-w-14 ${selectedCorner === 'black' ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                            Black Slate
                          </p>
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {/* Dynasty Selected Colors Summary */}
                  {isDynasty && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm font-semibold text-[#0A1628] mb-2">Your Selection</p>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600">
                          Shell: <span className="font-semibold text-[#0A1628]">{getShellColorData(selectedShell)?.name || selectedShell}</span>
                        </p>
                        <p className="text-sm text-slate-600">
                          Skirt: <span className="font-semibold text-[#0A1628]">{getCabinetColorData(selectedCabinet)?.name || selectedCabinet}</span>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-xs text-slate-500 mt-4">
                    Actual colors may vary. Contact us for physical color samples.
                  </p>
                  
                  {/* Quick Specs in Color Panel */}
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="grid grid-cols-2 gap-2">
                      {specs.map((spec) => (
                        <div key={spec.label} className="flex items-center gap-2 text-sm">
                          <spec.icon size={14} className="text-[#B91C1C]" />
                          <span className="text-slate-600">{spec.label}:</span>
                          <span className="font-semibold text-[#0A1628]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 p-5 h-full">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-4">
                    Quick Specs
                  </h3>
                  <div className="space-y-3">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex items-center gap-3">
                        <spec.icon size={18} className="text-[#B91C1C]" />
                        <span className="text-slate-600">{spec.label}:</span>
                        <span className="font-semibold text-[#0A1628]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            )}
          </div>
          
          {/* Product Description Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left - Description */}
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>
              
              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a 
                  href={`tel:${CONTACT.phone}`} 
                  className="btn-primary inline-flex items-center gap-2"
                  data-testid="call-btn"
                >
                  <Phone size={18} />
                  Call for Best Price
                </a>
                <Link to="/contact" className="btn-secondary" data-testid="quote-btn">
                  Get a Quote
                </Link>
              </div>
              
              {/* American Made Badge */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Flag size={16} className="text-[#B91C1C]" />
                <span className="font-semibold">American Made & Proud of It</span>
              </div>
            </div>
            
            {/* Right - Features */}
            <div>
              {product.features && (
                <div className="bg-slate-50 p-6">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-[#B91C1C] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Dynasty Spas - Color Reference Section */}
          {isDynasty && product.shellColors && (() => {
            const hideawayModels = ['ds-bay-bliss', 'ds-high-tide', 'ds-seaside'];
            const isHideaway = hideawayModels.includes(product.id);
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
                data-testid="dynasty-color-reference"
              >
                <div className="bg-slate-50 p-6 lg:p-8">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-6 text-center">
                    Available Color Options
                  </h3>
                  <img 
                    src={isHideaway ? '/assets/dynasty_colors_hideaway.png' : '/assets/dynasty_colors_luxury.png'}
                    alt={isHideaway ? "Acrylic Color: Sterling Marble, Skirt Color: Black Confer" : "Acrylic & Skirt Color Options"}
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                    data-testid="dynasty-color-ref-img"
                  />
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Actual colors may vary. Contact us for physical color samples.
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {/* Model Comparison for Grand River (existing related model) */}
          {relatedModel && isGrandRiver && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 mb-8"
            >
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-6 text-center">
                Compare Models
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Current Model */}
                <div className="bg-white p-4 border-2 border-[#B91C1C]">
                  <div className="text-center mb-4">
                    <span className="text-xs bg-[#B91C1C] text-white px-2 py-1 uppercase font-bold">Currently Viewing</span>
                  </div>
                  <img src={product.images.overhead || product.images.primary} alt={product.name} className="w-full h-40 object-contain mb-4" />
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-center text-[#0A1628]">{product.name}</h4>
                  <p className="text-center text-[#B91C1C] font-bold text-lg">{product.price}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-500">Dimensions:</span><span className="font-semibold">{product.dimensions}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Seats:</span><span className="font-semibold">{product.persons} Adults</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Jets:</span><span className="font-semibold text-[#B91C1C]">{product.jets}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Seating:</span><span className="font-semibold">{product.seatingLayout}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Electrical:</span><span className="font-semibold">{product.electrical}</span></div>
                  </div>
                </div>
                
                {/* Related Model */}
                <div className="bg-white p-4 border border-slate-200">
                  <img src={relatedModel.images.overhead || relatedModel.images.primary} alt={relatedModel.name} className="w-full h-40 object-contain mb-4 mt-6" />
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-center text-[#0A1628]">{relatedModel.name}</h4>
                  <p className="text-center text-[#B91C1C] font-bold text-lg">{relatedModel.price}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-500">Dimensions:</span><span className="font-semibold">{relatedModel.dimensions}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Seats:</span><span className="font-semibold">{relatedModel.persons} Adults</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Jets:</span><span className="font-semibold text-[#B91C1C]">{relatedModel.jets}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Seating:</span><span className="font-semibold">{relatedModel.seatingLayout}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Electrical:</span><span className="font-semibold">{relatedModel.electrical}</span></div>
                  </div>
                  <Link to={`/products/${relatedModel.id}`} className="block mt-4 text-center bg-slate-100 hover:bg-slate-200 py-2 text-[#0A1628] font-semibold transition-colors">
                    View {relatedModel.name} <ArrowRight size={14} className="inline ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Model Comparison for Viking Spas and Dynasty Spas */}
          {(isViking || isDynasty) && comparableModels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] flex items-center gap-2">
                  <GitCompare size={24} className="text-[#B91C1C]" />
                  Compare Models
                </h3>
                <p className="text-sm text-slate-500">{comparableModels.length} other {product.brand} models available</p>
              </div>
              
              {/* Model Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select a model to compare:</label>
                <select
                  value={selectedCompareModel?.id || ''}
                  onChange={(e) => {
                    const model = comparableModels.find(m => m.id === e.target.value);
                    setSelectedCompareModel(model || null);
                  }}
                  className="w-full md:w-1/2 border border-slate-300 px-4 py-3 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="">-- Choose a model --</option>
                  {comparableModels.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name} - {model.persons} Person - {model.jets} Jets - {model.price}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Comparison Table */}
              {selectedCompareModel ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Current Model */}
                  <div className="bg-white p-4 border-2 border-[#B91C1C]">
                    <div className="text-center mb-4">
                      <span className="text-xs bg-[#B91C1C] text-white px-2 py-1 uppercase font-bold">Currently Viewing</span>
                    </div>
                    <img src={product.images.primary} alt={product.name} className="w-full h-48 object-contain mb-4" />
                    <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-center text-[#0A1628]">{product.name}</h4>
                    <p className="text-center text-slate-500 text-sm mb-2">{product.series}</p>
                    <p className="text-center text-[#B91C1C] font-bold text-xl">{product.price}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Dimensions:</span>
                        <span className="font-semibold">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Seats:</span>
                        <span className="font-semibold">{product.persons} Adults</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Jets:</span>
                        <span className="font-bold text-[#B91C1C]">{product.jets}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Seating:</span>
                        <span className="font-semibold">{product.seatingLayout}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Electrical:</span>
                        <span className="font-semibold">{product.electrical}</span>
                      </div>
                      {product.waterCapacity && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Water Capacity:</span>
                          <span className="font-semibold">{product.waterCapacity}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Selected Compare Model */}
                  <div className="bg-white p-4 border border-slate-200 hover:border-slate-400 transition-colors">
                    <div className="text-center mb-4">
                      <span className="text-xs bg-slate-600 text-white px-2 py-1 uppercase font-bold">Comparing To</span>
                    </div>
                    <img src={selectedCompareModel.images.primary} alt={selectedCompareModel.name} className="w-full h-48 object-contain mb-4" />
                    <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-center text-[#0A1628]">{selectedCompareModel.name}</h4>
                    <p className="text-center text-slate-500 text-sm mb-2">{selectedCompareModel.series}</p>
                    <p className="text-center text-[#B91C1C] font-bold text-xl">{selectedCompareModel.price}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Dimensions:</span>
                        <span className="font-semibold">{selectedCompareModel.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Seats:</span>
                        <span className={`font-semibold ${selectedCompareModel.persons > product.persons ? 'text-green-600' : selectedCompareModel.persons < product.persons ? 'text-orange-500' : ''}`}>
                          {selectedCompareModel.persons} Adults
                          {selectedCompareModel.persons > product.persons && ' ↑'}
                          {selectedCompareModel.persons < product.persons && ' ↓'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Jets:</span>
                        <span className={`font-bold ${selectedCompareModel.jets > product.jets ? 'text-green-600' : selectedCompareModel.jets < product.jets ? 'text-orange-500' : 'text-[#B91C1C]'}`}>
                          {selectedCompareModel.jets}
                          {selectedCompareModel.jets > product.jets && ' ↑'}
                          {selectedCompareModel.jets < product.jets && ' ↓'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Seating:</span>
                        <span className="font-semibold">{selectedCompareModel.seatingLayout}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Electrical:</span>
                        <span className="font-semibold">{selectedCompareModel.electrical}</span>
                      </div>
                      {selectedCompareModel.waterCapacity && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Water Capacity:</span>
                          <span className="font-semibold">{selectedCompareModel.waterCapacity}</span>
                        </div>
                      )}
                    </div>
                    <Link 
                      to={`/products/${selectedCompareModel.id}`} 
                      className="block mt-4 text-center bg-[#B91C1C] hover:bg-red-700 py-3 text-white font-semibold transition-colors"
                    >
                      View {selectedCompareModel.name} <ArrowRight size={14} className="inline ml-1" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 text-center border border-dashed border-slate-300">
                  <GitCompare size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500">Select a model from the dropdown above to compare specifications</p>
                </div>
              )}
              
              {/* Quick Compare Grid - Show all models at a glance */}
              <div className="mt-8">
                <h4 className="font-semibold text-[#0A1628] mb-4">Quick Overview - All {product.brand} Models</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0A1628] text-white">
                        <th className="px-4 py-2 text-left">Model</th>
                        <th className="px-4 py-2 text-center">Seats</th>
                        <th className="px-4 py-2 text-center">Jets</th>
                        <th className="px-4 py-2 text-center">Seating</th>
                        <th className="px-4 py-2 text-right">Price</th>
                        <th className="px-4 py-2 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Current model row */}
                      <tr className="bg-red-50 border-l-4 border-[#B91C1C]">
                        <td className="px-4 py-3 font-semibold">{product.name} <span className="text-xs text-[#B91C1C]">(current)</span></td>
                        <td className="px-4 py-3 text-center">{product.persons}</td>
                        <td className="px-4 py-3 text-center font-bold text-[#B91C1C]">{product.jets}</td>
                        <td className="px-4 py-3 text-center">{product.seatingLayout}</td>
                        <td className="px-4 py-3 text-right font-semibold">{product.price}</td>
                        <td className="px-4 py-3 text-center">-</td>
                      </tr>
                      {/* Other models */}
                      {comparableModels.slice(0, 8).map((model, idx) => (
                        <tr key={model.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-4 py-3">{model.name}</td>
                          <td className="px-4 py-3 text-center">{model.persons}</td>
                          <td className="px-4 py-3 text-center font-semibold">{model.jets}</td>
                          <td className="px-4 py-3 text-center">{model.seatingLayout}</td>
                          <td className="px-4 py-3 text-right">{model.price}</td>
                          <td className="px-4 py-3 text-center">
                            <Link to={`/products/${model.id}`} className="text-[#B91C1C] hover:underline text-xs font-semibold">
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
