import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Check, Users, Droplets, Zap, Ruler, ArrowRight, Info, X } from 'lucide-react';
import { getProductById, getRelatedModel, SHELL_COLORS, CABINET_COLORS } from '../data/products';
import { ASSETS, CONTACT } from '../data/constants';

// Base URL for Grand River Spas visualizer images
const GR_VISUALIZER_BASE = 'https://grandriverspas.com/wp-content/plugins/spa-visualizer/assets/dist/img';

// Generate the actual color combination image URL
const getColorComboImageUrl = (product, shellColor, cabinetColor) => {
  if (!product || product.brand !== 'Grand River Spas') {
    return null;
  }
  
  // Extract model name from product name (e.g., "Chariton 2" -> "Chariton")
  const modelName = product.modelFamily || product.name.split(' ')[0];
  
  // Map shell colors to proper casing
  const shellMap = {
    white: 'White',
    silver: 'Silver',
    opal: 'Opal'
  };
  
  // Map cabinet colors to proper casing
  const cabinetMap = {
    coastalGray: 'CoastalGray',
    walnut: 'Walnut',
    barnwood: 'Barnwood',
    black: 'Black'
  };
  
  const shell = shellMap[shellColor] || 'White';
  const cabinet = cabinetMap[cabinetColor] || 'CoastalGray';
  
  // URL pattern: {Model}_{Shell}_{Cabinet}_{Corner}.jpg
  // Corner typically matches cabinet color
  return `${GR_VISUALIZER_BASE}/${modelName}_${shell}_${cabinet}_${cabinet}.jpg`;
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedModel = useMemo(() => getRelatedModel(product), [product]);
  
  // Set default colors based on product's available colors
  const defaultShell = product?.shellColors?.[0] || 'white';
  const defaultCabinet = product?.cabinetColors?.[0] || 'coastalGray';
  
  const [selectedShell, setSelectedShell] = useState(defaultShell);
  const [selectedCabinet, setSelectedCabinet] = useState(defaultCabinet);
  const [currentView, setCurrentView] = useState('color'); // 'color', 'overhead', 'side'
  const [activeTab, setActiveTab] = useState('overview');
  const [imageError, setImageError] = useState(false);
  const [showColorInfo, setShowColorInfo] = useState(false);
  
  // Reset colors when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedShell(product.shellColors?.[0] || 'white');
      setSelectedCabinet(product.cabinetColors?.[0] || 'coastalGray');
      setImageError(false);
      setCurrentView('color');
    }
  }, [id, product]);
  
  // Reset image error when colors change
  useEffect(() => {
    setImageError(false);
  }, [selectedShell, selectedCabinet]);
  
  if (!product) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/hot-tubs" className="btn-primary">Browse Hot Tubs</Link>
        </div>
      </div>
    );
  }
  
  // Get the current display image based on view and color selection
  const getDisplayImage = () => {
    if (currentView === 'overhead') {
      return product.images.overhead;
    }
    if (currentView === 'side') {
      return product.images.primary;
    }
    // Color view - use color combo image if available
    const colorComboUrl = getColorComboImageUrl(product, selectedShell, selectedCabinet);
    if (colorComboUrl && !imageError) {
      return colorComboUrl;
    }
    return product.images.primary;
  };
  
  const currentImage = getDisplayImage();
  const isGrandRiver = product.brand === 'Grand River Spas';
  
  const specs = [
    { label: 'Seats', value: product.persons ? `${product.persons} Adults` : null, icon: Users },
    { label: 'Jets', value: product.jets, icon: Droplets },
    { label: 'Electrical', value: product.electrical, icon: Zap },
    { label: 'Dimensions', value: product.dimensions, icon: Ruler },
  ].filter(s => s.value);

  return (
    <div className="pt-28 pb-20" data-testid="product-detail-page">
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
        
        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery with Color Swapping */}
          <div>
            <div className="bg-slate-50 relative aspect-[4/3] mb-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentImage}-${selectedShell}-${selectedCabinet}`}
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
              
              {/* Color indicator badges */}
              {currentView === 'color' && isGrandRiver && (
                <div className="absolute bottom-3 left-3 flex gap-2 z-10">
                  <motion.div 
                    key={`shell-${selectedShell}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg text-xs font-medium"
                  >
                    <div 
                      className="w-3 h-3 rounded-full border border-slate-200"
                      style={{ backgroundColor: SHELL_COLORS[selectedShell]?.hex }}
                    />
                    <span>{SHELL_COLORS[selectedShell]?.name}</span>
                  </motion.div>
                  <motion.div 
                    key={`cabinet-${selectedCabinet}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg text-xs font-medium"
                  >
                    <div 
                      className="w-3 h-3 rounded-full border border-slate-200"
                      style={{ backgroundColor: CABINET_COLORS[selectedCabinet]?.hex }}
                    />
                    <span>{CABINET_COLORS[selectedCabinet]?.name}</span>
                  </motion.div>
                </div>
              )}
              
              {/* Navigation arrows */}
              <button 
                onClick={() => {
                  const views = isGrandRiver ? ['color', 'overhead', 'side'] : ['side', 'overhead'];
                  const currentIdx = views.indexOf(currentView);
                  const prevIdx = currentIdx === 0 ? views.length - 1 : currentIdx - 1;
                  setCurrentView(views[prevIdx]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                aria-label="Previous view"
                data-testid="prev-view-btn"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => {
                  const views = isGrandRiver ? ['color', 'overhead', 'side'] : ['side', 'overhead'];
                  const currentIdx = views.indexOf(currentView);
                  const nextIdx = (currentIdx + 1) % views.length;
                  setCurrentView(views[nextIdx]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                aria-label="Next view"
                data-testid="next-view-btn"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* View selector tabs */}
            <div className="flex border border-slate-200">
              {isGrandRiver && (
                <button
                  onClick={() => setCurrentView('color')}
                  className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                    currentView === 'color' 
                      ? 'bg-[#B91C1C] text-white' 
                      : 'bg-white text-[#0A1628] hover:bg-slate-50'
                  }`}
                  data-testid="view-color-btn"
                >
                  Color Preview
                </button>
              )}
              <button
                onClick={() => setCurrentView('side')}
                className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                  currentView === 'side' 
                    ? 'bg-[#B91C1C] text-white' 
                    : 'bg-white text-[#0A1628] hover:bg-slate-50'
                }`}
                data-testid="view-side-btn"
              >
                Side View
              </button>
              <button
                onClick={() => setCurrentView('overhead')}
                className={`flex-1 py-2 font-semibold text-xs uppercase tracking-wider transition-colors ${
                  currentView === 'overhead' 
                    ? 'bg-[#B91C1C] text-white' 
                    : 'bg-white text-[#0A1628] hover:bg-slate-50'
                }`}
                data-testid="view-overhead-btn"
              >
                Overhead View
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 mt-3">
              {isGrandRiver && (
                <button
                  onClick={() => setCurrentView('color')}
                  className={`w-16 h-16 border-2 overflow-hidden relative ${
                    currentView === 'color' ? 'border-[#B91C1C]' : 'border-slate-200'
                  }`}
                  data-testid="thumb-color"
                >
                  <img 
                    src={getColorComboImageUrl(product, selectedShell, selectedCabinet) || product.images.primary}
                    alt="Color preview" 
                    className="w-full h-full object-contain p-1"
                    onError={(e) => { e.target.src = product.images.primary; }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] text-center">
                    Colors
                  </div>
                </button>
              )}
              <button
                onClick={() => setCurrentView('side')}
                className={`w-16 h-16 border-2 overflow-hidden relative ${
                  currentView === 'side' ? 'border-[#B91C1C]' : 'border-slate-200'
                }`}
                data-testid="thumb-side"
              >
                <img 
                  src={product.images.primary} 
                  alt="Side view" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => { e.target.src = ASSETS.logo; }}
                />
              </button>
              <button
                onClick={() => setCurrentView('overhead')}
                className={`w-16 h-16 border-2 overflow-hidden relative ${
                  currentView === 'overhead' ? 'border-[#B91C1C]' : 'border-slate-200'
                }`}
                data-testid="thumb-overhead"
              >
                <img 
                  src={product.images.overhead} 
                  alt="Overhead view" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => { e.target.src = ASSETS.logo; }}
                />
              </button>
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {product.brand && (
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                {product.brand}
              </p>
            )}
            {product.series && (
              <p className="text-sm text-[#B91C1C] font-semibold uppercase tracking-wider mb-2">
                {product.series}
              </p>
            )}
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">
              {product.name}
            </h1>
            
            <p className="text-[#B91C1C] font-bold text-3xl mb-6">{product.price}</p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.longDescription || product.description}
            </p>
            
            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 bg-slate-50 p-4">
                  <spec.icon className="text-[#B91C1C]" size={24} />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">{spec.label}</p>
                    <p className="font-semibold text-[#0A1628]">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Color Selector Section */}
            {product.shellColors && product.cabinetColors && (
              <div className="bg-slate-50 p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628]">
                    Customize Your Spa Colors
                  </h3>
                  <button 
                    onClick={() => setShowColorInfo(!showColorInfo)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Color information"
                  >
                    <Info size={20} />
                  </button>
                </div>
                
                {showColorInfo && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-blue-50 border border-blue-200 text-blue-800 p-4 text-sm rounded mb-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold mb-1">Color Visualization</p>
                        <p>Select colors below to see a realistic preview. Actual colors may vary slightly. Contact us for physical color samples.</p>
                      </div>
                      <button onClick={() => setShowColorInfo(false)} className="text-blue-600 hover:text-blue-800">
                        <X size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Shell Colors */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-600 mb-3">Shell Color</p>
                  <div className="flex gap-3 flex-wrap">
                    {product.shellColors.map((colorKey) => {
                      const color = SHELL_COLORS[colorKey];
                      if (!color) return null;
                      const isSelected = selectedShell === colorKey;
                      
                      return (
                        <motion.button
                          key={colorKey}
                          onClick={() => {
                            setSelectedShell(colorKey);
                            if (currentView !== 'color' && isGrandRiver) setCurrentView('color');
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group"
                          data-testid={`shell-color-${colorKey}`}
                          aria-label={`Select ${color.name} shell color`}
                        >
                          <div className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            isSelected
                              ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                              : 'border-slate-200 hover:border-slate-400'
                          }`}>
                            {color.image ? (
                              <img 
                                src={color.image} 
                                alt={color.name} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.style.backgroundColor = color.hex;
                                }}
                              />
                            ) : (
                              <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                            )}
                            {isSelected && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg"
                              >
                                <Check className="text-[#B91C1C]" size={20} strokeWidth={3} />
                              </motion.div>
                            )}
                          </div>
                          <p className={`text-xs mt-1 text-center font-medium ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                            {color.name.split(' ')[0]}
                          </p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Cabinet Colors */}
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-3">Cabinet Color</p>
                  <div className="flex gap-3 flex-wrap">
                    {product.cabinetColors.map((colorKey) => {
                      const color = CABINET_COLORS[colorKey];
                      if (!color) return null;
                      const isSelected = selectedCabinet === colorKey;
                      
                      return (
                        <motion.button
                          key={colorKey}
                          onClick={() => {
                            setSelectedCabinet(colorKey);
                            if (currentView !== 'color' && isGrandRiver) setCurrentView('color');
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group"
                          data-testid={`cabinet-color-${colorKey}`}
                          aria-label={`Select ${color.name} cabinet color`}
                        >
                          <div className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            isSelected
                              ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                              : 'border-slate-200 hover:border-slate-400'
                          }`}>
                            {color.image ? (
                              <img 
                                src={color.image} 
                                alt={color.name} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.style.backgroundColor = color.hex;
                                }}
                              />
                            ) : (
                              <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                            )}
                            {isSelected && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg"
                              >
                                <Check className="text-[#B91C1C]" size={20} strokeWidth={3} />
                              </motion.div>
                            )}
                          </div>
                          <p className={`text-xs mt-1 text-center font-medium ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                            {color.name.split(' ')[0]}
                          </p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 italic mt-4">
                  Color preview is approximate. Actual product colors may vary. Contact us for physical samples.
                </p>
              </div>
            )}
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg py-4"
                data-testid="request-quote-btn"
              >
                Request a Quote
              </Link>
              <a 
                href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 text-lg py-4"
                data-testid="call-now-btn"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Model Comparison Section - only show if there's a related model */}
        {relatedModel && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] text-center mb-8">
              Quick Comparison
            </h2>
            <div className="bg-slate-50 overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Current Product */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={product.images.overhead}
                      alt={product.name}
                      className="h-48 object-contain"
                      onError={(e) => { e.target.src = ASSETS.logo; }}
                    />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] text-center mb-4">
                    {product.name}
                  </h3>
                  <div className="space-y-3">
                    <ComparisonRow label="Dimensions" value={product.dimensions} />
                    <ComparisonRow label="Seats" value={`${product.persons} Adults`} />
                    <ComparisonRow label="Jet Count" value={product.jets} highlight />
                    <ComparisonRow label="Seating Layout" value={product.seatingLayout} />
                    <ComparisonRow label="Water Capacity" value={product.waterCapacity} />
                    <ComparisonRow label="Electrical" value={product.electrical} />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-2xl font-bold text-[#B91C1C]">{product.price}</p>
                    <p className="text-xs text-slate-500 mt-1">Currently Viewing</p>
                  </div>
                </div>
                
                {/* Related Model */}
                <div className="p-6 md:p-8 bg-white">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={relatedModel.images.overhead}
                      alt={relatedModel.name}
                      className="h-48 object-contain"
                      onError={(e) => { e.target.src = ASSETS.logo; }}
                    />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] text-center mb-4">
                    {relatedModel.name}
                  </h3>
                  <div className="space-y-3">
                    <ComparisonRow label="Dimensions" value={relatedModel.dimensions} />
                    <ComparisonRow label="Seats" value={`${relatedModel.persons} Adults`} />
                    <ComparisonRow label="Jet Count" value={relatedModel.jets} highlight />
                    <ComparisonRow label="Seating Layout" value={relatedModel.seatingLayout} />
                    <ComparisonRow label="Water Capacity" value={relatedModel.waterCapacity} />
                    <ComparisonRow label="Electrical" value={relatedModel.electrical} />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-2xl font-bold text-[#B91C1C]">{relatedModel.price}</p>
                    <Link 
                      to={`/products/${relatedModel.id}`}
                      className="inline-flex items-center gap-2 mt-2 text-sm text-[#B91C1C] hover:underline font-semibold"
                    >
                      View {relatedModel.name} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
        
        {/* Tabs Section */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
            {['overview', 'specifications', 'features', 'options'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold uppercase tracking-wider text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'text-[#B91C1C] border-[#B91C1C]' 
                    : 'text-slate-500 border-transparent hover:text-[#0A1628]'
                }`}
                data-testid={`tab-${tab}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">About the {product.name}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.longDescription || product.description}
                    </p>
                    {product.features && (
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="text-[#B91C1C] flex-shrink-0 mt-1" size={18} />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="bg-slate-50 p-6">
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {['Cover ($850 Value)', 'Cover Lifter ($299 Value)', 'Steps ($195 Value)', 'Starter Chemicals ($150 Value)', 'Delivery & Installation', 'Demo & Training'].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check className="text-green-600" size={18} />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Dimensions & Capacity</h2>
                    <table className="w-full">
                      <tbody>
                        {[
                          { label: 'Dimensions', value: product.dimensions },
                          { label: 'Metric', value: product.dimensionsMetric },
                          { label: 'Water Capacity', value: product.waterCapacity },
                          { label: 'Dry Weight', value: product.dryWeight },
                          { label: 'Filled Weight', value: product.filledWeight },
                          { label: 'Seats', value: product.persons ? `${product.persons} Adults` : null },
                          { label: 'Seating Layout', value: product.seatingLayout },
                        ].filter(r => r.value).map((row) => (
                          <tr key={row.label} className="border-b border-slate-100">
                            <td className="py-3 text-slate-500">{row.label}</td>
                            <td className="py-3 font-semibold text-[#0A1628]">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Technical Specifications</h2>
                    <table className="w-full">
                      <tbody>
                        {[
                          { label: 'Total Jets', value: product.jets },
                          { label: 'Electrical', value: product.electrical },
                          { label: 'Shell Colors', value: product.shellColors?.map(c => SHELL_COLORS[c]?.name).join(', ') },
                          { label: 'Cabinet Colors', value: product.cabinetColors?.map(c => CABINET_COLORS[c]?.name).join(', ') },
                        ].filter(r => r.value).map((row) => (
                          <tr key={row.label} className="border-b border-slate-100">
                            <td className="py-3 text-slate-500">{row.label}</td>
                            <td className="py-3 font-semibold text-[#0A1628]">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">Standard Features</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {(product.features || []).map((feature, idx) => (
                      <div key={idx} className="bg-slate-50 p-6">
                        <Check className="text-[#B91C1C] mb-3" size={24} />
                        <p className="font-semibold text-[#0A1628]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'options' && product.options && (
                <div>
                  <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">Available Options & Accessories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.options).map(([key, value]) => (
                      <div key={key} className="border border-slate-200 p-6">
                        <h3 className="font-semibold text-[#0A1628] capitalize mb-2">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <p className="text-slate-600">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* CTA Banner */}
        <div className="bg-[#0A1628] text-white p-8 md:p-12 mt-16 text-center">
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase mb-4">
            Ready to Start Living Your <span className="text-[#B91C1C]">Healthiest Life</span>?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom for a "Wet Test" - we have robes, towels and slippers! Try before you buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Schedule a Visit</Link>
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="btn-secondary border-white text-white hover:bg-white hover:text-[#0A1628]">
              <Phone size={18} className="inline mr-2" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for comparison rows
const ComparisonRow = ({ label, value, highlight = false }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
    <span className="text-slate-500 text-sm">{label}</span>
    <span className={`font-semibold ${highlight ? 'text-[#B91C1C] text-lg' : 'text-[#0A1628]'}`}>
      {value || '-'}
    </span>
  </div>
);

export default ProductDetailPage;
