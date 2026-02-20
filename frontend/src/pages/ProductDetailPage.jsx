import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Check, Users, Droplets, Zap, Ruler } from 'lucide-react';
import { getProductById, SHELL_COLORS, CABINET_COLORS } from '../data/products';
import { ASSETS, CONTACT } from '../data/constants';
import ColorSelector from '../components/products/ColorSelector';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  
  // Set default colors based on product's available colors
  const defaultShell = product?.shellColors?.[0] || 'white';
  const defaultCabinet = product?.cabinetColors?.[0] || 'coastalGray';
  
  const [selectedShell, setSelectedShell] = useState(defaultShell);
  const [selectedCabinet, setSelectedCabinet] = useState(defaultCabinet);
  const [currentView, setCurrentView] = useState('side');
  const [activeTab, setActiveTab] = useState('overview');
  
  // Reset colors when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedShell(product.shellColors?.[0] || 'white');
      setSelectedCabinet(product.cabinetColors?.[0] || 'coastalGray');
    }
  }, [id, product]);
  
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
  
  // Get the image based on selected colors and view
  const getDisplayImage = () => {
    if (product.colorImages) {
      // Try exact color combination
      const colorKey = `${selectedShell}-${selectedCabinet}`;
      if (product.colorImages[colorKey]) {
        return currentView === 'overhead' 
          ? product.colorImages[colorKey].overhead 
          : product.colorImages[colorKey].side;
      }
      
      // Try to find any matching shell color
      const shellMatch = Object.keys(product.colorImages).find(key => key.startsWith(selectedShell + '-'));
      if (shellMatch && product.colorImages[shellMatch]) {
        return currentView === 'overhead' 
          ? product.colorImages[shellMatch].overhead 
          : product.colorImages[shellMatch].side;
      }
      
      // Try to find any matching cabinet color
      const cabinetMatch = Object.keys(product.colorImages).find(key => key.endsWith('-' + selectedCabinet));
      if (cabinetMatch && product.colorImages[cabinetMatch]) {
        return currentView === 'overhead' 
          ? product.colorImages[cabinetMatch].overhead 
          : product.colorImages[cabinetMatch].side;
      }
      
      // Use first available color combination
      const firstKey = Object.keys(product.colorImages)[0];
      if (firstKey && product.colorImages[firstKey]) {
        return currentView === 'overhead' 
          ? product.colorImages[firstKey].overhead 
          : product.colorImages[firstKey].side;
      }
    }
    
    return currentView === 'overhead' ? product.images.overhead : product.images.primary;
  };
  
  const displayImage = getDisplayImage();
  
  const specs = [
    { label: 'Seats', value: `${product.persons} Adults`, icon: Users },
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
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="bg-slate-50 relative aspect-square mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${displayImage}-${currentView}`}
                  src={displayImage}
                  alt={`${product.name} - ${currentView} view`}
                  className="w-full h-full object-contain p-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => { e.target.src = ASSETS.logo; }}
                />
              </AnimatePresence>
              
              {/* View toggle arrows */}
              <button 
                onClick={() => setCurrentView(currentView === 'side' ? 'overhead' : 'side')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                aria-label="Previous view"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCurrentView(currentView === 'side' ? 'overhead' : 'side')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                aria-label="Next view"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* View selector tabs */}
            <div className="flex border border-slate-200">
              <button
                onClick={() => setCurrentView('side')}
                className={`flex-1 py-3 font-semibold text-sm uppercase tracking-wider transition-colors ${
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
                className={`flex-1 py-3 font-semibold text-sm uppercase tracking-wider transition-colors ${
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
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setCurrentView('side')}
                className={`w-20 h-20 border-2 overflow-hidden ${
                  currentView === 'side' ? 'border-[#B91C1C]' : 'border-slate-200'
                }`}
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
                className={`w-20 h-20 border-2 overflow-hidden ${
                  currentView === 'overhead' ? 'border-[#B91C1C]' : 'border-slate-200'
                }`}
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
            
            {/* Color Selector */}
            {product.shellColors && product.cabinetColors && (
              <ColorSelector
                shellColors={product.shellColors}
                cabinetColors={product.cabinetColors}
                selectedShell={selectedShell}
                selectedCabinet={selectedCabinet}
                onShellChange={setSelectedShell}
                onCabinetChange={setSelectedCabinet}
                colorImages={product.colorImages}
              />
            )}
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                          { label: 'Seats', value: `${product.persons} Adults` },
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

export default ProductDetailPage;
