import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Flag, Shield, Award, Heart, Phone, Mail, X, Star, Truck, Camera, Smartphone, Plus, Minus, Sparkles } from 'lucide-react';
import { ASSETS, CONTACT } from '../data/constants';
import { HOT_TUBS, SWIM_SPAS, COLD_PLUNGES, SAUNAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

// Sort products by price (least to most expensive)
const sortByPrice = (products) => {
  return [...products].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
};

const SORTED_HOT_TUBS = sortByPrice(HOT_TUBS);
const SORTED_SWIM_SPAS = sortByPrice(SWIM_SPAS);

// Tax Special Popup Component
const TaxSpecialPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70" 
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, y: 50 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.8, opacity: 0 }} 
          transition={{ type: "spring", duration: 0.5 }} 
          className="bg-[#0A1628] max-w-lg w-full shadow-2xl relative overflow-hidden" 
          onClick={e => e.stopPropagation()}
        >
          <div className="h-2 bg-[#B91C1C]" />
          <div className="absolute top-12 right-0 w-40 h-40 bg-[#B91C1C]/10 rounded-full blur-3xl" />
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Close popup">
            <X size={24} />
          </button>
          <div className="p-8 text-center relative">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
              <img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-24 mx-auto mb-6" />
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-black uppercase text-white mb-2">
                <span className="text-[#B91C1C]">TAX</span> SPECIAL
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
              </div>
            </motion.div>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/90 text-lg mb-6">
              Email us today or call us for exclusive tax season savings on hot tubs, swim spas, saunas & cold plunges!
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-4">
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="btn-primary w-full flex items-center justify-center gap-2 text-lg" data-testid="popup-call-btn">
                <Phone size={20} /> Call {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="btn-secondary w-full flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-[#0A1628]" data-testid="popup-email-btn">
                <Mail size={20} /> Email Us
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/50 text-sm mt-6">
              Limited time offer. Contact us for details.
            </motion.p>
          </div>
          <div className="h-2 bg-[#B91C1C]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" data-testid="hero-section">
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-125">
      <source src={ASSETS.heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/40 via-[#0A1628]/30 to-[#0A1628]/70" />
    
    <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-3 mb-6">
          <Flag className="text-[#B91C1C]" size={28} />
          <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">American Made & Proud of It</span>
          <Flag className="text-[#B91C1C]" size={28} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }} 
          className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6"
        >
          Live Your <span className="text-[#B91C1C]">Healthiest Life</span><br />While Enjoying a Vacation<br />Everyday at Home
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-90">
          The Best Hot Tubs & Swim Spas Store in Naples Florida, Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/grand-river-spas" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4" data-testid="hero-browse-btn">
            Grand River Spas <ChevronRight size={20} />
          </Link>
          <Link to="/viking-spas" className="bg-white text-[#0A1628] font-['Barlow_Condensed'] font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center justify-center gap-2 text-lg hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg" data-testid="hero-swim-spas-btn">
            Viking Spas <ChevronRight size={20} />
          </Link>
          <Link to="/dynasty-spas" className="bg-[#D4AF37] text-[#0A1628] font-['Barlow_Condensed'] font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center justify-center gap-2 text-lg hover:bg-white hover:text-[#0A1628] transition-all shadow-lg" data-testid="hero-dynasty-btn">
            Dynasty Spas <ChevronRight size={20} />
          </Link>
        </motion.div>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 text-lg font-semibold text-[#D4AF37]">
          Ask about Free Hot Tub & Swim Spa Delivery in Florida and SC
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Updated Trust Section with new content
const TrustSection = () => (
  <section className="py-16 bg-white border-y border-slate-100" data-testid="trust-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { 
            icon: Shield, 
            title: '5% Discount', 
            desc: 'Military, Veterans, First Responders & Law Enforcement',
            subDesc: 'Special Discounts Available'
          },
          { 
            icon: Flag, 
            title: 'American Made', 
            desc: 'All Products Made in the USA',
            subDesc: null
          },
          { 
            icon: Heart, 
            title: 'Family Owned', 
            desc: 'American & Proud of It',
            subDesc: null
          },
          { 
            icon: Truck, 
            title: 'Ask About Free Hot Tub & Swim Spa Delivery', 
            desc: 'Available in Florida & South Carolina',
            subDesc: null
          },
        ].map((item, idx) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1 }} 
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <item.icon className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            </motion.div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
            {item.subDesc && <p className="text-xs text-[#B91C1C] mt-1 font-semibold">{item.subDesc}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// About/Wet Test Section
const AboutSection = () => (
  <section className="py-20 bg-[#0A1628] text-white relative overflow-hidden" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-6">
            Try Before You <span className="text-[#B91C1C]">Buy</span>
          </h2>
          <p className="text-xl leading-relaxed mb-6 text-slate-300">
            Come in today for a "Wet Test" we have robes, towels and slippers! Stop in and try before you buy!
          </p>
          <p className="text-lg leading-relaxed mb-8 text-slate-400">
            At Upstate Hot Tubs, we believe in providing the best experience. Test any of our American-made hot tubs, swim spas, saunas, or cold plunges before making your decision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/hot-tubs" className="btn-primary inline-flex items-center gap-2">Shop Hot Tubs <ChevronRight size={20} /></Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-[#0A1628] inline-flex items-center gap-2">Schedule Visit <ChevronRight size={20} /></Link>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <video autoPlay muted loop playsInline className="w-full h-[400px] object-cover shadow-2xl">
            <source src={ASSETS.wetTestVideo} type="video/mp4" />
          </video>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }} className="absolute -bottom-6 -right-6 bg-[#B91C1C] text-white p-6 shadow-xl">
            <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Wet Test</p>
            <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Available!</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Product Comparison Estimator Component
const ComparisonEstimator = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showSelector, setShowSelector] = useState(false);
  
  // Combine all products for comparison
  const allProducts = [
    ...HOT_TUBS.map(p => ({ ...p, category: 'Hot Tub' })),
    ...SWIM_SPAS.map(p => ({ ...p, category: 'Swim Spa' })),
    ...SAUNAS.map(p => ({ ...p, category: 'Sauna' })),
    ...COLD_PLUNGES.map(p => ({ ...p, category: 'Cold Plunge' })),
  ].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));

  const addProduct = (product) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    setShowSelector(false);
  };

  const removeProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">
            Compare Products
          </h2>
          <p className="text-lg text-slate-600 mb-4">Select up to 3 products to compare side-by-side</p>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto" />
        </motion.div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {/* Headers/Labels Column */}
            <div className="bg-[#0A1628] text-white p-4 hidden md:block">
              <div className="h-48 flex items-end pb-4">
                <span className="font-['Barlow_Condensed'] text-xl font-bold">Features</span>
              </div>
              <div className="py-4 border-t border-white/20">Category</div>
              <div className="py-4 border-t border-white/20">Price</div>
              <div className="py-4 border-t border-white/20">Capacity</div>
              <div className="py-4 border-t border-white/20">Jets</div>
              <div className="py-4 border-t border-white/20">Dimensions</div>
              <div className="py-4 border-t border-white/20">Brand</div>
              <div className="py-4 border-t border-white/20"></div>
            </div>

            {/* Product Columns */}
            {[0, 1, 2].map((index) => {
              const product = selectedProducts[index];
              return (
                <div key={index} className="border-l border-slate-200 first:border-l-0">
                  {product ? (
                    <>
                      <div className="p-4 h-48 flex flex-col items-center justify-center relative bg-slate-50">
                        <button 
                          onClick={() => removeProduct(product.id)}
                          className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                        >
                          <X size={16} />
                        </button>
                        <img 
                          src={product.images?.primary} 
                          alt={product.name}
                          className="h-24 object-contain mb-2"
                          onError={(e) => e.target.src = ASSETS.logo}
                        />
                        <h4 className="font-['Barlow_Condensed'] text-lg font-bold text-center">{product.name}</h4>
                      </div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Category</div>
                      <div className="py-4 px-4 border-t text-center">
                        <span className="inline-block px-3 py-1 bg-[#0A1628] text-white text-sm rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Price</div>
                      <div className="py-4 px-4 border-t text-center font-bold text-[#B91C1C] text-lg">
                        {product.price || 'Call for Price'}
                      </div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Capacity</div>
                      <div className="py-4 px-4 border-t text-center">
                        {product.persons ? `${product.persons} Person${product.persons > 1 ? 's' : ''}` : '-'}
                      </div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Jets</div>
                      <div className="py-4 px-4 border-t text-center">{product.jets || '-'}</div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Dimensions</div>
                      <div className="py-4 px-4 border-t text-center text-sm">{product.dimensions || '-'}</div>
                      <div className="py-4 px-4 border-t text-center md:hidden font-semibold text-slate-500">Brand</div>
                      <div className="py-4 px-4 border-t text-center">{product.brand || '-'}</div>
                      <div className="py-4 px-4 border-t text-center">
                        <Link 
                          to={`/products/${product.id}`}
                          className="btn-primary text-sm px-4 py-2"
                        >
                          View Details
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="h-full min-h-[500px] flex items-center justify-center p-4">
                      <button 
                        onClick={() => setShowSelector(true)}
                        className="flex flex-col items-center gap-4 p-8 border-2 border-dashed border-slate-300 rounded-lg hover:border-[#B91C1C] hover:bg-red-50 transition-all group"
                      >
                        <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-[#B91C1C] flex items-center justify-center transition-colors">
                          <Plus className="text-slate-400 group-hover:text-white" size={32} />
                        </div>
                        <span className="font-['Barlow_Condensed'] text-lg font-bold text-slate-600 group-hover:text-[#B91C1C]">
                          Add Product
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Selector Modal */}
        {showSelector && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setShowSelector(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white max-w-2xl w-full max-h-[80vh] rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-[#0A1628] text-white p-4 flex items-center justify-between">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold">Select a Product</h3>
                <button onClick={() => setShowSelector(false)} className="p-1 hover:bg-white/10 rounded">
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {allProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => addProduct(product)}
                      disabled={selectedProducts.find(p => p.id === product.id)}
                      className={`p-4 border rounded-lg text-left hover:border-[#B91C1C] hover:bg-red-50 transition-all ${
                        selectedProducts.find(p => p.id === product.id) ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.images?.primary} 
                          alt={product.name}
                          className="w-16 h-16 object-contain"
                          onError={(e) => e.target.src = ASSETS.logo}
                        />
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-slate-500">{product.category}</p>
                          <p className="text-sm font-bold text-[#B91C1C]">{product.price || 'Call'}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// AR Visualizer Section
const ARVisualizerSection = () => (
  <section className="py-20 bg-[#0A1628] text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-[#D4AF37]" size={32} />
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">AR Technology</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase mb-6">
            See It In Your <span className="text-[#B91C1C]">Backyard</span>
          </h2>
          <p className="text-xl leading-relaxed mb-6 text-slate-300">
            Not sure how it will look? Use our AR Visualizer to place a virtual hot tub, swim spa, or sauna in your space using your phone's camera.
          </p>
          <ul className="space-y-3 mb-8 text-slate-300">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Works on most modern smartphones
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Visualize different models and sizes
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Share with family for input
            </li>
          </ul>
          <Link 
            to="/ar-visualizer" 
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Smartphone size={20} />
            Launch AR Visualizer
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#1a2d4a] to-[#0A1628] rounded-lg p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 mx-auto mb-6 bg-[#B91C1C]/20 rounded-full flex items-center justify-center"
              >
                <Camera className="w-16 h-16 text-[#B91C1C]" />
              </motion.div>
              <p className="text-xl text-white/80 mb-4">Point your camera at your backyard</p>
              <p className="text-white/50">Available on mobile devices</p>
            </div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-[#0A1628] p-4 rounded-lg shadow-xl"
          >
            <Smartphone className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Included Section
const IncludedSection = () => (
  <section className="py-20 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">Each Hot Tub Comes With...</h2>
        <p className="text-xl text-slate-600">We got you covered with our hot tub starter pack!</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { name: 'COVER', value: '$850.00 Value' }, 
          { name: 'COVER LIFTER', value: '$299.00 Value' }, 
          { name: 'STEPS', value: '$195.00 Value' }, 
          { name: 'STARTER CHEMICALS', value: '$150.00 Value' }
        ].map((item, idx) => (
          <motion.div 
            key={item.name} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1 }} 
            whileHover={{ y: -5 }} 
            className="bg-white p-6 text-center shadow-lg"
          >
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-2">{item.name}</h3>
            <p className="text-[#B91C1C] font-semibold">{item.value}</p>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-['Barlow_Condensed'] font-bold text-center text-[#0A1628]">
        Also includes delivery, set up, installation, demo and more!
      </motion.p>
    </div>
  </section>
);

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { name: 'Hot Tubs', href: '/hot-tubs', image: HOT_TUBS[0]?.images?.primary },
    { name: 'Swim Spas', href: '/swim-spas', image: SWIM_SPAS[0]?.images?.primary },
    { name: 'Saunas', href: '/saunas', image: 'https://static.wixstatic.com/media/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg/v1/fill/w_487,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_3cbf8456e11243cf847d41383384f44c~mv2.jpg' },
    { name: 'Cold Plunges', href: '/cold-plunges', image: COLD_PLUNGES[0]?.images?.primary },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-12">
          Shop By Categories
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={cat.href} className="group relative aspect-square overflow-hidden bg-slate-100 block">
                <motion.img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.5 }} 
                  loading="lazy" 
                  onError={(e) => { e.target.src = ASSETS.logo; }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent flex items-end justify-center pb-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Image Banner (replacing logo banner with user's image)
const FeaturedImageBanner = () => (
  <section className="py-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-4 flex justify-center">
      <motion.img 
        src="https://customer-assets.emergentagent.com/job_b1f56408-f888-480b-a4b9-0fa546a42f73/artifacts/1frscfpx_VS_EliteSeries_IN_T_W_2-scaled-1.jpg" 
        alt="Hot Tub Lifestyle - Couple enjoying mountain view" 
        className="w-full max-w-4xl rounded-lg shadow-2xl" 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ type: "spring" }} 
      />
    </div>
  </section>
);

// Wellness Journey Section
const WellnessJourneySection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1a3352] text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-[#D4AF37]" size={28} />
          <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">Discover More</span>
          <Sparkles className="text-[#D4AF37]" size={28} />
        </div>
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase mb-4">
          Expand Your <span className="text-[#B91C1C]">Wellness Journey</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Learn about the health benefits and science behind hydrotherapy
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Health & Wellness',
            description: 'Discover the therapeutic benefits of hot water therapy for your body and mind.',
            link: '/wellness',
            icon: '🌿'
          },
          {
            title: 'Balneotherapy',
            description: 'Learn about the ancient practice of water-based healing and its modern applications.',
            link: '/balneotherapy',
            icon: '💧'
          },
          {
            title: 'Anatomy of a Spa',
            description: 'Understand the components that make our spas the best in comfort and durability.',
            link: '/anatomy-of-a-spa',
            icon: '⚙️'
          }
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={item.link}
              className="block bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group h-full"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-3 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 mb-4">{item.description}</p>
              <span className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Home Page Component
const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('taxPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => { 
        setShowPopup(true); 
        sessionStorage.setItem('taxPopupSeen', 'true'); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Upstate Hot Tubs | American Made Hot Tubs & Swim Spas | Naples FL & SC</title>
        <meta name="description" content="Live your healthiest life while enjoying a vacation everyday at home. American made hot tubs, swim spas, saunas & cold plunges from Grand River Spas and Viking Spas. Serving Naples FL, Greenville, Simpsonville SC." />
        <meta name="keywords" content="hot tubs, swim spas, saunas, cold plunges, American made, Grand River Spas, Viking Spas, Naples FL, Greenville SC, Simpsonville SC" />
        <meta property="og:title" content="Upstate Hot Tubs | American Made Hot Tubs & Swim Spas" />
        <meta property="og:description" content="Live your healthiest life while enjoying a vacation everyday at home. American made and proud of it!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://upstatehottubs.com" />
      </Helmet>
      
      <TaxSpecialPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      
      {/* Hot Tubs Section - Sorted by price (least to most expensive) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">Shop Our American Made Hot Tubs</h2>
            <p className="text-lg text-slate-600 mb-4">Premium American-made hot tubs for the ultimate relaxation experience</p>
            <p className="text-sm text-[#B91C1C] font-semibold">Sorted by price: Lowest to Highest</p>
            <div className="w-24 h-1 bg-[#B91C1C] mx-auto mt-4" />
          </motion.div>
          <ProductGrid products={SORTED_HOT_TUBS.slice(0, 8)} linkPrefix="/products" />
          <div className="text-center mt-8 space-x-4">
            <Link to="/grand-river-spas" className="btn-primary inline-flex items-center gap-2">Grand River Spas <ChevronRight size={18} /></Link>
            <Link to="/viking-spas" className="btn-secondary inline-flex items-center gap-2">Viking Spas <ChevronRight size={18} /></Link>
          </div>
        </div>
      </div>
      
      <IncludedSection />
      
      {/* Comparison Estimator */}
      <ComparisonEstimator />
      
      {/* AR Visualizer Section */}
      <ARVisualizerSection />
      
      {/* Featured Image (replacing logo banner) */}
      <FeaturedImageBanner />
      
      {/* Wellness Journey Section */}
      <WellnessJourneySection />
      
      {/* Swim Spas Section - Sorted by price */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">American Made Swim Spas</h2>
            <p className="text-lg text-slate-600 mb-4">American Made & Proud of It</p>
            <p className="text-sm text-[#B91C1C] font-semibold">Sorted by price: Lowest to Highest</p>
            <div className="w-24 h-1 bg-[#B91C1C] mx-auto mt-4" />
          </motion.div>
          <ProductGrid products={SORTED_SWIM_SPAS} linkPrefix="/products" />
        </div>
      </div>
      
      <CategoriesSection />
    </>
  );
};

export default HomePage;
