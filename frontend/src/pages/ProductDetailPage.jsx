import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Check, Users, Droplets, Zap, Ruler, ArrowRight, Info, X, Flag, GitCompare } from 'lucide-react';
import { getProductById, getRelatedModel, DYNASTY_SPAS_PRODUCTS, DYNASTY_SHELL_COLORS, DYNASTY_CABINET_COLORS, GRAND_RIVER_EXTRAS, GRAND_RIVER_PRODUCTS, SAUNA_INSTALLATION_OPTION, DYNASTY_LUXURY_EXTRAS, DYNASTY_OASIS_EXTRAS, DYNASTY_VACATION_EXTRAS, DYNASTY_GENERIC_EXTRAS } from '../data/products';
import { ASSETS, CONTACT } from '../data/constants';

// Base URL for Grand River Spas visualizer images
const GR_VISUALIZER_BASE = 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';

// Shell and Cabinet colors for display
const SHELL_COLORS = {
  white: { name: 'White Satin', hex: '#F5F5F0' },
  silver: { name: 'Silver Satin', hex: '#C0C0C0' },
  opal: { name: 'Opal Satin', hex: '#A8B5B8' },
};

const CABINET_COLORS = {
  // Grand River
  coastalGray: { name: 'Coastal Gray', hex: '#6B7280', image: `${GR_VISUALIZER_BASE}/coastalgray.png` },
  walnut: { name: 'Walnut', hex: '#5D4037' },
  barnwood: { name: 'Barnwood', hex: '#8B7355' },
  black: { name: 'Black Slate', hex: '#1a1a1a' },
  taupe: { name: 'Taupe', hex: '#8B7D6B' },
  // Dynasty Spas Cabinet Colors
  blackConfer: { name: 'Black Confer', hex: '#1a1a1a' },
  grayConfer: { name: 'Gray Confer', hex: '#6B7280' },
  ashElite: { name: 'Ash Elite', hex: '#B2BEB5' },
  coastalGrayElite: { name: 'Coastal Gray Elite', hex: '#708090' },
};

// Unified color lookup - checks brand-specific colors first (with images), then generic
const getShellColorData = (colorKey) => DYNASTY_SHELL_COLORS[colorKey] || SHELL_COLORS[colorKey] || null;
const getCabinetColorData = (colorKey) => DYNASTY_CABINET_COLORS[colorKey] || CABINET_COLORS[colorKey] || null;

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
  // Products without corner option always use matching cabinet as corner
  const corner = (product.hasCornerOption !== false && cornerOption === 'black') ? 'Black' : cabinet;
  
  return `${GR_VISUALIZER_BASE}/${modelName}_${shell}_${cabinet}_${corner}.jpg`;
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
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  // Get comparable models from the same brand
  const comparableModels = useMemo(() => {
    if (!product) return [];
    
    if (product.brand === 'Dynasty Spas') {
      return DYNASTY_SPAS_PRODUCTS.filter(p => p.id !== product.id);
    }
    if (product.brand === 'Grand River Spas') {
      return GRAND_RIVER_PRODUCTS.filter(p => p.id !== product.id);
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
      setGalleryIndex(0); // Reset gallery index for new product
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);
  
  const isGrandRiver = product?.brand === 'Grand River Spas';
  const isDynasty = product?.brand === 'Dynasty Spas';
  const isWorldSaunaGroup = product?.brand === 'World Sauna Group';
  const isHeater = product?.category === 'heater';
  const isSaunaOrColdPlunge = product?.brand === 'SaunaLife' || product?.brand === 'Icebound' || product?.brand === 'Finnmark Design' || isWorldSaunaGroup || isHeater;
  const isFinnmarkSauna = product?.brand === 'Finnmark Design';
  const isWorldSaunaWithGallery = isWorldSaunaGroup && product?.images?.gallery && product?.images?.gallery.length > 0;
  const isSwimSpa = !!product?.length;
  const hasColorSelector = isGrandRiver && !isSwimSpa;
  
  // No corner options unless product explicitly supports them
  const hasCornerOption = isGrandRiver && product?.hasCornerOption !== false;
  
  // Determine available views based on brand - must be before early returns
  const views = useMemo(() => {
    if (isDynasty || isSaunaOrColdPlunge || isSwimSpa) return ['side'];
    if (hasColorSelector) return ['color', 'side', 'overhead'];
    return ['side', 'overhead'];
  }, [isDynasty, isSaunaOrColdPlunge, isSwimSpa, hasColorSelector]);
  
  const currentImage = useMemo(() => {
    if (!product) return ASSETS.logo;
    
    // For Finnmark saunas with gallery images
    if (isFinnmarkSauna && product.images.gallery && product.images.gallery.length > 0) {
      return product.images.gallery[galleryIndex] || product.images.primary;
    }
    
    // For World Sauna Group products with gallery images
    if (isWorldSaunaWithGallery) {
      return product.images.gallery[galleryIndex] || product.images.primary;
    }
    
    // For Dynasty Spas - only show primary image
    if (isDynasty) {
      return product.images.primary;
    }
    
    // Color visualizer for Grand River - when 'color' view is selected
    if (currentView === 'color' && isGrandRiver && !imageError) {
      const colorComboUrl = getGRColorComboImageUrl(product, selectedShell, selectedCabinet, selectedCorner);
      if (colorComboUrl) {
        return colorComboUrl;
      }
    }
    
    if (currentView === 'overhead') {
      return product.images.overhead;
    }
    if (currentView === 'side') {
      return product.images.primary;
    }
    
    // Default fallback for Grand River color view or any other case
    if (isGrandRiver && !imageError) {
      const colorComboUrl = getGRColorComboImageUrl(product, selectedShell, selectedCabinet, selectedCorner);
      if (colorComboUrl) {
        return colorComboUrl;
      }
    }
    
    return product.images.primary;
  }, [product, currentView, selectedShell, selectedCabinet, selectedCorner, isGrandRiver, isDynasty, isFinnmarkSauna, isWorldSaunaWithGallery, imageError, galleryIndex]);
  
  if (!product) {
    return (
      <div className="pt-36 pb-20 text-center" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)'
      }}>
        <h2 className="text-2xl font-bold text-[#0A1628]">Product not found</h2>
        <Link to="/hot-tubs" className="text-[#B91C1C] hover:underline mt-4 inline-block">
          Return to Hot Tubs
        </Link>
      </div>
    );
  }

  // Different specs for saunas/heaters vs hot tubs
  const specs = isHeater ? [
    { icon: Zap, label: 'Heater Type', value: product.heaterType || 'Electric' },
    { icon: Info, label: 'Brand', value: product.brand || 'N/A' },
  ] : isSaunaOrColdPlunge ? [
    { icon: Users, label: 'Capacity', value: product.persons ? `${product.persons} Persons` : 'N/A' },
    { icon: Zap, label: 'Electrical', value: product.electrical || 'N/A' },
    { icon: Ruler, label: 'Dimensions', value: product.dimensions || 'N/A' },
    ...(product.maxTemperature ? [{ icon: Info, label: 'Max Temp', value: product.maxTemperature }] : []),
    ...(product.collection ? [{ icon: Info, label: 'Collection', value: product.collection }] : []),
  ] : [
    { icon: Users, label: 'Seats', value: `${product.persons} Adults` },
    { icon: Droplets, label: 'Jets', value: product.jets || 'N/A' },
    { icon: Zap, label: 'Electrical', value: product.electrical || 'N/A' },
    { icon: Ruler, label: 'Dimensions', value: product.dimensions || 'N/A' },
    ...(product.waterCapacity ? [{ icon: Droplets, label: 'Water Capacity', value: product.waterCapacity }] : []),
    ...(product.pumps ? [{ icon: Zap, label: 'Pumps', value: product.pumps }] : []),
    ...(product.filtration ? [{ icon: Info, label: 'Filtration', value: product.filtration }] : []),
    ...(product.seatingLayout ? [{ icon: Users, label: 'Layout', value: product.seatingLayout }] : []),
    ...(product.dryWeight ? [{ icon: Ruler, label: 'Dry Weight', value: product.dryWeight }] : []),
    ...(product.filledWeight ? [{ icon: Ruler, label: 'Filled Weight', value: product.filledWeight }] : []),
  ];
  
  const currentViewIndex = views.indexOf(currentView);
  
  // Gallery navigation for Finnmark saunas and World Sauna Group products
  const galleryLength = product?.images?.gallery?.length || 0;
  const hasGallery = (isFinnmarkSauna || isWorldSaunaWithGallery) && galleryLength > 0;
  
  const handlePrevView = () => {
    if (hasGallery) {
      setGalleryIndex(prev => prev > 0 ? prev - 1 : galleryLength - 1);
    } else {
      const newIndex = currentViewIndex > 0 ? currentViewIndex - 1 : views.length - 1;
      setCurrentView(views[newIndex]);
    }
  };
  
  const handleNextView = () => {
    if (hasGallery) {
      setGalleryIndex(prev => prev < galleryLength - 1 ? prev + 1 : 0);
    } else {
      const newIndex = currentViewIndex < views.length - 1 ? currentViewIndex + 1 : 0;
      setCurrentView(views[newIndex]);
    }
  };

  // SEO metadata
  const seoDescription = product ? 
    isSaunaOrColdPlunge 
      ? `${product.name} by ${product.brand}. ${product.description} ${product.persons ? `Capacity: ${product.persons} persons.` : ''} ${product.price}. American Made & Proud of It.`
      : `${product.name} by ${product.brand}. ${product.description} Seats ${product.persons} adults with ${product.jets} jets. ${product.price}. American Made & Proud of It.`
    : '';
  const seoKeywords = product ? 
    isSaunaOrColdPlunge 
      ? `${product.name}, ${product.brand}, ${product.series}, sauna, infrared sauna, wellness, hydrotherapy`
      : `${product.name}, ${product.brand}, ${product.series}, hot tub, spa, ${product.persons} person hot tub, hydrotherapy`
    : '';

  return (
    <>
      {product && (
        <Helmet>
          <meta name="description" content={seoDescription} />
          <meta name="keywords" content={seoKeywords} />
        </Helmet>
      )}
      <div className="pt-28 md:pt-40 pb-10 md:pb-20" data-testid="product-detail-page" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-2 md:px-8">
          {/* Breadcrumb - Hidden on mobile */}
          <nav className="mb-2 md:mb-6 hidden md:block">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-slate-500 hover:text-[#B91C1C]">Home</Link></li>
              <ChevronRight size={14} className="text-slate-400" />
              <li><Link to="/hot-tubs" className="text-slate-500 hover:text-[#B91C1C]">Hot Tubs</Link></li>
              <ChevronRight size={14} className="text-slate-400" />
              <li className="text-[#0A1628] font-semibold">{product.name}</li>
            </ol>
          </nav>
          
          {/* Product Name Header - More compact on mobile */}
          <div className="mb-2 md:mb-4">
            <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{product.brand}</p>
            <p className="text-xs md:text-sm text-[#B91C1C] font-semibold uppercase tracking-wider">{product.series}</p>
            <h1 className="font-['Barlow_Condensed'] text-2xl md:text-5xl font-bold uppercase text-[#0A1628]">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-[#B91C1C] mt-1">{product.price}</p>
          </div>
          
          {/* Main Product Section - Image + Color Selector Side by Side */}
          <div className="grid lg:grid-cols-12 gap-2 md:gap-6 mb-4 md:mb-8">
            {/* Image Gallery - Smaller on mobile */}
            <div className={isSaunaOrColdPlunge ? 'lg:col-span-12' : 'lg:col-span-7'}>
              <div className="bg-slate-50 relative aspect-square md:aspect-[4/3] overflow-hidden">
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
                
                {/* Navigation Arrows - only show when multiple views or has gallery */}
                {(views.length > 1 || (hasGallery && galleryLength > 1)) && (
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
                
                {/* Gallery indicator for products with image galleries */}
                {hasGallery && galleryLength > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {product.images.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === galleryIndex ? 'bg-[#B91C1C] scale-125' : 'bg-white/70 hover:bg-white'
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
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
              
              {/* Grand River Color Combo Thumbnails - Dynamic based on selected colors */}
              {hasColorSelector && isGrandRiver && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Selected Configuration Preview:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {['color', 'side', 'overhead'].map((viewType) => {
                      const viewLabels = { color: 'Color', side: 'Side', overhead: 'Top' };
                      const modelName = product.modelFamily || product.name.split(' ')[0];
                      const shellMap = { white: 'White', silver: 'Silver', opal: 'Opal' };
                      const cabinetMap = { coastalGray: 'CoastalGray', walnut: 'Walnut', barnwood: 'Barnwood', black: 'Black', taupe: 'Taupe' };
                      const shell = shellMap[selectedShell] || 'White';
                      const cabinet = cabinetMap[selectedCabinet] || 'CoastalGray';
                      const corner = selectedCorner === 'black' ? 'Black' : cabinet;
                      
                      let thumbUrl;
                      if (viewType === 'color') {
                        thumbUrl = `https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img/${modelName}_${shell}_${cabinet}_${corner}.jpg`;
                      } else if (viewType === 'side') {
                        thumbUrl = product.images?.side || product.images?.primary;
                      } else {
                        thumbUrl = product.images?.overhead || product.images?.primary;
                      }
                      
                      return (
                        <button
                          key={`${viewType}-${selectedShell}-${selectedCabinet}-${selectedCorner}`}
                          onClick={() => setCurrentView(viewType)}
                          className={`aspect-square overflow-hidden border-2 transition-all rounded ${
                            currentView === viewType ? 'border-[#B91C1C] ring-2 ring-[#B91C1C]' : 'border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          <img 
                            src={thumbUrl} 
                            alt={`${viewLabels[viewType]} view`} 
                            className="w-full h-full object-cover"
                            key={`img-${viewType}-${selectedShell}-${selectedCabinet}-${selectedCorner}`}
                            onError={(e) => { e.target.src = product.images?.primary; }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Gallery Thumbnails for products with galleries */}
              {hasGallery && galleryLength > 1 && (
                <div className="mt-4 grid grid-cols-5 md:grid-cols-9 gap-2">
                  {product.images.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`aspect-square overflow-hidden border-2 transition-all ${
                        idx === galleryIndex ? 'border-[#B91C1C] ring-2 ring-[#B91C1C]' : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Color Selector Panel - 5 columns */}
            {!isSaunaOrColdPlunge && (
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              {product.shellColors && product.cabinetColors && !isDynasty && !isSwimSpa ? (
                <div className="bg-slate-50 p-3 md:p-5 h-full">
                  <h3 className="font-['Barlow_Condensed'] text-base md:text-xl font-bold uppercase text-[#0A1628] mb-2 md:mb-4">
                    Customize Colors
                  </h3>
                  
                  {/* Shell Colors - Compact on mobile */}
                  <div className="mb-3 md:mb-5">
                    <p className="text-xs md:text-sm font-semibold text-slate-600 mb-1 md:mb-2">Shell Color</p>
                    <div className="flex gap-1.5 md:gap-2 flex-wrap">
                      {product.shellColors.map((colorKey) => {
                        const color = getShellColorData(colorKey);
                        if (!color) return null;
                        const isSelected = selectedShell === colorKey;
                        const swatchSize = isDynasty ? 'w-16 h-16 md:w-20 md:h-20' : 'w-10 h-10 md:w-14 md:h-14';
                        
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
                                  <Check className="text-[#B91C1C]" size={14} strokeWidth={3} />
                                </motion.div>
                              )}
                            </div>
                            <p className={`text-[9px] md:text-[10px] mt-0.5 md:mt-1 text-center font-medium ${isDynasty ? 'max-w-16 md:max-w-20' : 'max-w-10 md:max-w-14'} ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                              {isDynasty ? color.name : color.name.split(' ')[0]}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Cabinet Colors - Compact on mobile */}
                  <div className="mb-3 md:mb-5">
                    <p className="text-xs md:text-sm font-semibold text-slate-600 mb-1 md:mb-2">{isDynasty ? 'Skirt Color' : 'Cabinet Color'}</p>
                    <div className="flex gap-1.5 md:gap-2 flex-wrap">
                      {product.cabinetColors.map((colorKey) => {
                        const color = getCabinetColorData(colorKey);
                        if (!color) return null;
                        const isSelected = selectedCabinet === colorKey;
                        const swatchSize = isDynasty ? 'w-16 h-16 md:w-20 md:h-20' : 'w-10 h-10 md:w-14 md:h-14';
                        
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
                                  <Check className="text-[#B91C1C]" size={14} strokeWidth={3} />
                                </motion.div>
                              )}
                            </div>
                            <p className={`text-[9px] md:text-[10px] mt-0.5 md:mt-1 text-center font-medium ${isDynasty ? 'max-w-16 md:max-w-20' : 'max-w-10 md:max-w-14'} ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                              {isDynasty ? color.name : color.name.split(' ')[0]}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Corner Colors - Grand River (Match Cabinet or Black) */}
                  {hasCornerOption && (
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
                <div className="bg-slate-50 p-5">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-3">
                    Quick Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex items-center gap-2 text-sm">
                        <spec.icon size={16} className="text-[#B91C1C] flex-shrink-0" />
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
              
              {/* Brochure Download */}
              {product.brochure && (
                <div className="mt-4">
                  <a 
                    href={product.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0A1628] font-semibold transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Download Product Brochure
                  </a>
                </div>
              )}
              
              {/* Product Video */}
              {product.video && (
                <div className="mt-6">
                  <h4 className="font-semibold text-[#0A1628] mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B91C1C]">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Watch Product Video
                  </h4>
                  <div className="aspect-video bg-slate-100 overflow-hidden rounded-lg">
                    <iframe
                      src={product.video.replace('watch?v=', 'embed/')}
                      title={`${product.name} Video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              
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
          
          {/* Grand River Spas - Full Specifications Section */}
          {isGrandRiver && !isSwimSpa && product.fullSpecs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
              data-testid="grand-river-full-specs"
            >
              <div className="bg-white border border-slate-200 p-6 lg:p-8">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-6 text-center border-b border-slate-200 pb-4">
                  Full Specifications
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Basic Specs */}
                  <div className="space-y-4">
                    {/* Basic Info Table */}
                    <div className="overflow-hidden border border-slate-200">
                      <table className="w-full">
                        <tbody className="divide-y divide-slate-200">
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628] w-1/2">Seats</td>
                            <td className="px-4 py-3 text-slate-700">{product.persons} Adults</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Lounge/Non-Lounge</td>
                            <td className="px-4 py-3 text-slate-700">{product.seatingLayout}</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Dimensions</td>
                            <td className="px-4 py-3 text-slate-700">
                              {product.dimensions}
                              {product.dimensionsMetric && <span className="block text-xs text-slate-500">{product.dimensionsMetric}</span>}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Water Capacity</td>
                            <td className="px-4 py-3 text-slate-700">{product.waterCapacity}</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Dry Weight</td>
                            <td className="px-4 py-3 text-slate-700">{product.dryWeight}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Filled Weight</td>
                            <td className="px-4 py-3 text-slate-700">{product.filledWeight}</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Total Jets</td>
                            <td className="px-4 py-3 text-slate-700 font-bold text-[#B91C1C]">{product.jets}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Jets Breakdown */}
                    {product.fullSpecs.jetsBreakdown && (
                      <div className="border border-slate-200">
                        <div className="bg-[#0A1628] px-4 py-3">
                          <h4 className="font-bold text-white uppercase text-sm">Jets Breakdown</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-1.5">
                            {product.fullSpecs.jetsBreakdown.map((jet, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-[#B91C1C] font-bold">•</span>
                                <span className="text-slate-700">{jet}</span>
                              </li>
                            ))}
                          </ul>
                          {product.fullSpecs.auxiliaryJets && (
                            <div className="mt-3 pt-3 border-t border-slate-200">
                              <span className="text-xs font-semibold text-slate-500 uppercase">Auxiliary Jets:</span>
                              <p className="text-sm text-slate-700 mt-1">{product.fullSpecs.auxiliaryJets}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column - Technical Specs */}
                  <div className="space-y-4">
                    {/* Technical Specs Table */}
                    <div className="overflow-hidden border border-slate-200">
                      <table className="w-full">
                        <tbody className="divide-y divide-slate-200">
                          {product.fullSpecs.lightingSystem && (
                            <tr className="bg-slate-50">
                              <td className="px-4 py-3 font-semibold text-[#0A1628] w-1/2">Lighting System</td>
                              <td className="px-4 py-3 text-slate-700">{product.fullSpecs.lightingSystem}</td>
                            </tr>
                          )}
                          {product.fullSpecs.waterFeature && product.fullSpecs.waterFeature !== 'N/A' && (
                            <tr>
                              <td className="px-4 py-3 font-semibold text-[#0A1628]">Water Feature</td>
                              <td className="px-4 py-3 text-slate-700">{product.fullSpecs.waterFeature}</td>
                            </tr>
                          )}
                          {product.fullSpecs.controlSystem && (
                            <tr className="bg-slate-50">
                              <td className="px-4 py-3 font-semibold text-[#0A1628]">Control System</td>
                              <td className="px-4 py-3 text-slate-700">{product.fullSpecs.controlSystem}</td>
                            </tr>
                          )}
                          {product.fullSpecs.heater && (
                            <tr>
                              <td className="px-4 py-3 font-semibold text-[#0A1628]">Heater</td>
                              <td className="px-4 py-3 text-slate-700">{product.fullSpecs.heater}</td>
                            </tr>
                          )}
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Jet Pumps</td>
                            <td className="px-4 py-3 text-slate-700">{product.pumps}</td>
                          </tr>
                          {product.fullSpecs.performanceRating && (
                            <tr>
                              <td className="px-4 py-3 font-semibold text-[#0A1628]">Performance Rating</td>
                              <td className="px-4 py-3 text-slate-700 font-bold text-[#B91C1C]">{product.fullSpecs.performanceRating}</td>
                            </tr>
                          )}
                          <tr className="bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-[#0A1628]">Filtration</td>
                            <td className="px-4 py-3 text-slate-700">{product.filtration}</td>
                          </tr>
                          {product.fullSpecs.waterCare && (
                            <tr>
                              <td className="px-4 py-3 font-semibold text-[#0A1628]">Water Care</td>
                              <td className="px-4 py-3 text-slate-700">{product.fullSpecs.waterCare}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Energy Efficiency */}
                    {product.fullSpecs.energyEfficiency && (
                      <div className="border border-slate-200">
                        <div className="bg-green-700 px-4 py-3">
                          <h4 className="font-bold text-white uppercase text-sm">Energy Efficiency</h4>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-slate-700">{product.fullSpecs.energyEfficiency}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Spa Cover */}
                    {product.fullSpecs.spaCover && (
                      <div className="border border-slate-200">
                        <div className="bg-slate-600 px-4 py-3">
                          <h4 className="font-bold text-white uppercase text-sm">Spa Cover</h4>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-slate-700">{product.fullSpecs.spaCover}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Color Options */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-4">Color Options</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {product.fullSpecs.shellColorOptions && (
                      <div className="bg-slate-50 p-4">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Shell Colors</span>
                        <p className="text-sm text-[#0A1628] mt-1">{product.fullSpecs.shellColorOptions}</p>
                      </div>
                    )}
                    {product.fullSpecs.cabinetColorOptions && (
                      <div className="bg-slate-50 p-4">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Cabinet Colors</span>
                        <p className="text-sm text-[#0A1628] mt-1">{product.fullSpecs.cabinetColorOptions}</p>
                      </div>
                    )}
                    {product.fullSpecs.cornerColorOptions && product.fullSpecs.cornerColorOptions !== 'N/A' && (
                      <div className="bg-slate-50 p-4">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Corner Colors</span>
                        <p className="text-sm text-[#0A1628] mt-1">{product.fullSpecs.cornerColorOptions}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Accessories */}
                {product.fullSpecs.accessories && (
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-4">Model Options & Accessories</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.fullSpecs.accessories.controls && (
                        <div className="flex items-start gap-3 bg-slate-50 p-4">
                          <div className="w-8 h-8 bg-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase block">Controls</span>
                            <p className="text-sm text-[#0A1628] font-medium">{product.fullSpecs.accessories.controls}</p>
                          </div>
                        </div>
                      )}
                      {product.fullSpecs.accessories.entertainment && product.fullSpecs.accessories.entertainment !== 'N/A' && (
                        <div className="flex items-start gap-3 bg-slate-50 p-4">
                          <div className="w-8 h-8 bg-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase block">Entertainment</span>
                            <p className="text-sm text-[#0A1628] font-medium">{product.fullSpecs.accessories.entertainment}</p>
                          </div>
                        </div>
                      )}
                      {product.fullSpecs.accessories.advancedJetting && product.fullSpecs.accessories.advancedJetting !== 'N/A' && (
                        <div className="flex items-start gap-3 bg-slate-50 p-4">
                          <div className="w-8 h-8 bg-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                            <Droplets size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase block">Advanced Jetting</span>
                            <p className="text-sm text-[#0A1628] font-medium">{product.fullSpecs.accessories.advancedJetting}</p>
                          </div>
                        </div>
                      )}
                      {product.fullSpecs.accessories.coverLifter && (
                        <div className="flex items-start gap-3 bg-slate-50 p-4">
                          <div className="w-8 h-8 bg-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase block">Cover Lifter</span>
                            <p className="text-sm text-[#0A1628] font-medium">{product.fullSpecs.accessories.coverLifter}</p>
                          </div>
                        </div>
                      )}
                      {product.fullSpecs.accessories.steps && (
                        <div className="flex items-start gap-3 bg-slate-50 p-4">
                          <div className="w-8 h-8 bg-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase block">Steps</span>
                            <p className="text-sm text-[#0A1628] font-medium">{product.fullSpecs.accessories.steps}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
          
          {/* Grand River Spas - Available Extras/Upgrades Section */}
          {isGrandRiver && !isSwimSpa && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
              data-testid="grand-river-extras"
            >
              <div className="bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] p-6 lg:p-8">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white mb-6 text-center">
                  Available Upgrades & Extras
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {GRAND_RIVER_EXTRAS.map((extra) => (
                    <div key={extra.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                      {extra.image && (
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={extra.image} 
                            alt={extra.name}
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="text-white font-bold text-center mb-2">{extra.name}</h4>
                        <p className="text-[#B91C1C] font-bold text-xl text-center">{extra.price}</p>
                        <p className="text-slate-300 text-xs text-center mt-2">{extra.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm text-center mt-4">
                  Ask your sales representative about adding these upgrades to your order.
                </p>
              </div>
            </motion.div>
          )}

          {/* Sauna - White Glove Installation Option */}
          {(product?.brand === 'SaunaLife' || product?.brand === 'Finnmark Design' || isWorldSaunaGroup) && !isHeater && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
              data-testid="sauna-installation"
            >
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 p-6 lg:p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white mb-2">
                      White Glove Installation Available
                    </h3>
                    <p className="text-amber-100">
                      {SAUNA_INSTALLATION_OPTION?.description || 'Professional installation by our expert team. We handle delivery, assembly, and setup so you can relax.'}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg border border-white/30 text-center">
                    <span className="text-white text-sm block mb-1">Add Professional Installation</span>
                    <span className="text-white font-bold text-3xl">{SAUNA_INSTALLATION_OPTION?.price || 'Contact for Quote'}</span>
                  </div>
                </div>
                <p className="text-amber-200 text-sm text-center md:text-left mt-4">
                  Contact us to add white glove installation to your sauna order.
                </p>
              </div>
            </motion.div>
          )}

          {/* Dynasty Spas - Available Extras/Upgrades Section */}
          {isDynasty && !isSwimSpa && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
              data-testid="dynasty-extras"
            >
              <div className="bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] p-6 lg:p-8">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white mb-6 text-center">
                  Available Upgrades & Extras for {product?.series}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(product?.series === 'Luxury Collection' ? DYNASTY_LUXURY_EXTRAS :
                    product?.series === 'Oasis Collection' ? DYNASTY_OASIS_EXTRAS :
                    product?.series === 'Vacation Collection' ? DYNASTY_VACATION_EXTRAS : DYNASTY_GENERIC_EXTRAS).map((extra) => (
                    <div key={extra.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                      {extra.image && (
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={extra.image} 
                            alt={extra.name}
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="text-white font-bold text-center mb-2">{extra.name}</h4>
                        <p className="text-[#B91C1C] font-bold text-xl text-center">{extra.price}</p>
                        <p className="text-slate-300 text-xs text-center mt-2">{extra.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm text-center mt-4">
                  Ask your sales representative about adding these upgrades to your order.
                </p>
              </div>
            </motion.div>
          )}

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

          {/* Model Comparison for Grand River */}
          {isGrandRiver && comparableModels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] flex items-center gap-2">
                  <GitCompare size={24} className="text-[#B91C1C]" />
                  Compare Grand River Models
                </h3>
                <p className="text-sm text-slate-500">{comparableModels.length} other models available</p>
              </div>
              
              {/* Model Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select a model to compare:</label>
                <select
                  data-testid="grand-river-compare-select"
                  value={selectedCompareModel?.id || (relatedModel?.id || '')}
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
              
              {/* Comparison Display */}
              {(selectedCompareModel || relatedModel) && (
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
                  
                  {/* Selected Compare Model */}
                  {(() => {
                    const compareModel = selectedCompareModel || relatedModel;
                    return (
                      <div className="bg-white p-4 border border-slate-200">
                        <div className="text-center mb-4">
                          <span className="text-xs bg-slate-600 text-white px-2 py-1 uppercase font-bold">Compare With</span>
                        </div>
                        <img src={compareModel.images.overhead || compareModel.images.primary} alt={compareModel.name} className="w-full h-40 object-contain mb-4" />
                        <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-center text-[#0A1628]">{compareModel.name}</h4>
                        <p className="text-center text-[#B91C1C] font-bold text-lg">{compareModel.price}</p>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-500">Dimensions:</span><span className="font-semibold">{compareModel.dimensions}</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Seats:</span><span className="font-semibold">{compareModel.persons} Adults</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Jets:</span><span className="font-semibold text-[#B91C1C]">{compareModel.jets}</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Seating:</span><span className="font-semibold">{compareModel.seatingLayout}</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Electrical:</span><span className="font-semibold">{compareModel.electrical}</span></div>
                        </div>
                        <Link to={`/products/${compareModel.id}`} className="block mt-4 text-center bg-[#B91C1C] hover:bg-red-700 py-2 text-white font-semibold transition-colors">
                          View {compareModel.name} <ArrowRight size={14} className="inline ml-1" />
                        </Link>
                      </div>
                    );
                  })()}
                </div>
              )}
            </motion.div>
          )}
          
          {/* Model Comparison for Dynasty Spas */}
          {isDynasty && comparableModels.length > 0 && (
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
                  data-testid="dynasty-compare-select"
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
