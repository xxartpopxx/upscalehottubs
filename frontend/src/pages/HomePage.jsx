import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ChevronLeft, Flag, Shield, Heart, Phone, Mail, X, Star, Truck, Camera, Smartphone, Plus, Sparkles, BookOpen, MapPin, FileText, Users, Droplets, Moon, Activity, ThermometerSun, Award, Gift } from 'lucide-react';
import { ASSETS, CONTACT } from '../data/constants';
import { HOT_TUBS, SWIM_SPAS, COLD_PLUNGES, SAUNAS, DYNASTY_SPAS_PRODUCTS } from '../data/products';

// Sort products by price (least to most expensive)
const sortByPrice = (products) => {
  return [...products].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
};

const ALL_PRODUCTS = [
  ...sortByPrice(HOT_TUBS),
  ...sortByPrice(SWIM_SPAS),
  ...sortByPrice(SAUNAS),
  ...sortByPrice(COLD_PLUNGES),
];

// Tax Special Popup Component - Uses transparent logo
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
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Close popup">
            <X size={24} />
          </button>
          <div className="p-8 text-center relative">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
              <img src={ASSETS.transparentLogo} alt="Upstate Hot Tubs" className="h-24 mx-auto mb-6" />
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
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="btn-primary w-full flex items-center justify-center gap-2 text-lg">
                <Phone size={20} /> Call {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="btn-secondary w-full flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-[#0A1628]">
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

// NEW Hero Section - Video without text overlay, text below - Gradient background
const HeroSection = () => (
  <section className="relative pt-24 md:pt-32 lg:pt-40" style={{
    background: 'linear-gradient(180deg, #e8f4fc 0%, #d0e8f7 30%, #b8dcf2 60%, #a0d0ed 100%)',
    backgroundImage: `
      linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,230,250,0.7) 50%, rgba(160,210,240,0.8) 100%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.3' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
  }} data-testid="hero-section">
    {/* Video Section - Smaller to fit fully */}
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        <video autoPlay muted loop playsInline className="w-full h-full object-contain bg-black">
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
      </div>
    </div>
    
    {/* Text Content Below Video - Red White Blue Theme */}
    <div className="py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Animated American Flags - More realistic waving effect */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ 
                rotateY: [0, 10, 0, -10, 0],
                skewX: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src="https://flagcdn.com/w160/us.png"
                alt="American Flag"
                className="w-14 h-9 md:w-20 md:h-12 object-cover rounded shadow-lg border border-slate-600"
              />
            </motion.div>
            <span className="text-lg md:text-2xl font-bold tracking-widest uppercase text-[#0A1628]">American Made & Proud of It</span>
            <motion.div
              animate={{ 
                rotateY: [0, -10, 0, 10, 0],
                skewX: [0, -2, 0, 2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src="https://flagcdn.com/w160/us.png"
                alt="American Flag"
                className="w-14 h-9 md:w-20 md:h-12 object-cover rounded shadow-lg border border-slate-600"
              />
            </motion.div>
          </div>
          
          <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Live Your{' '}
            <span className="text-[#B91C1C]">Healthiest Life</span>
            <br />
            <span className="text-[#0A1628]">While Enjoying a Vacation</span>
            <br />
            <span className="text-[#0A1628]">Everyday at Home</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-6 max-w-4xl mx-auto text-[#0A1628]/80">
            The Best Hot Tubs & Swim Spas Store in Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Explore All Models <ChevronRight size={22} />
            </Link>
          </div>
          
          <p className="text-lg md:text-xl font-bold text-[#B91C1C]">
            Ask about Free Hot Tub, Swim Spa, Sauna & Cold Plunge Delivery in SC
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// Trust Badges Section - White background, compact
const TrustBadgesSection = () => (
  <section className="py-3 bg-white border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center gap-0.5 p-2">
          <Shield className="w-5 h-5 text-[#B91C1C]" />
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">5% Discount</span>
          <span className="text-[10px] text-slate-500">Military & Veterans</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 p-2">
          <Flag className="w-5 h-5 text-[#1E40AF]" />
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">American Made</span>
          <span className="text-[10px] text-slate-500">Made in USA</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 p-2">
          <Heart className="w-5 h-5 text-[#B91C1C]" />
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">Family Owned</span>
          <span className="text-[10px] text-slate-500">American & Proud</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 p-2">
          <Truck className="w-5 h-5 text-[#1E40AF]" />
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">Free Delivery</span>
          <span className="text-[10px] text-slate-500">South Carolina</span>
        </div>
      </div>
    </div>
  </section>
);

// NEW Best Warranty Section with gradient and links
const BestWarrantySection = () => (
  <section className="py-10 md:py-14" style={{
    background: 'linear-gradient(135deg, #0A1628 0%, #1a3352 50%, #0A1628 100%)'
  }}>
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Award className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]" />
          </motion.div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white">
            Best <span className="text-[#D4AF37]">Warranty</span> in the Business
          </h2>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Award className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]" />
          </motion.div>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-6">
          We stand behind every hot tub, swim spa, sauna and cold plunge we sell. Our industry-leading warranty gives you peace of mind and confidence in your purchase.
        </p>
        <p className="text-base md:text-lg text-[#D4AF37] font-semibold mb-8">
          All warranties include parts and labor! We have our own in-house tech!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/dynasty-spas" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <span className="text-[#D4AF37] font-bold text-lg">Dynasty Spas Warranty →</span>
          </Link>
          <Link to="/grand-river-spas" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <span className="text-[#D4AF37] font-bold text-lg">Grand River Spas Warranty →</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-[#D4AF37] font-bold text-lg">✓ Comprehensive Coverage</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-[#D4AF37] font-bold text-lg">✓ Local Service</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-[#D4AF37] font-bold text-lg">✓ Fast Response</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// NEW Free Items Section - Static (no floating animation)
const FreeItemsSection = () => {
  const freeItems = [
    { name: 'Spa Cover', image: ASSETS.freeItems.cover },
    { name: 'Cover Lifter', image: ASSETS.freeItems.coverLifter },
    { name: 'Steps', image: ASSETS.freeItems.steps },
    { name: 'Chemicals', image: ASSETS.freeItems.chemicals },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-10 h-10 text-[#B91C1C]" />
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#0A1628]">
              <span className="text-[#B91C1C]">FREE</span> With Your Hot Tub Purchase
            </h2>
            <Gift className="w-10 h-10 text-[#B91C1C]" />
          </div>
          <p className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-2">
            Over $1,500 Value Included!
          </p>
          <p className="text-lg text-slate-600">
            Delivery • Installation • Set Up • Cover • Cover Lifter • Steps • Chemicals
          </p>
        </motion.div>

        {/* Static Product Grid - No floating animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {freeItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Static Container - No animation */}
              <div className="relative mb-4">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C]/20 to-[#D4AF37]/20 rounded-full blur-xl scale-110" />
                
                {/* Product Image */}
                <div className="relative bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
                
                {/* FREE Badge - Static */}
                <div className="absolute -top-3 -right-3 bg-[#B91C1C] text-white font-bold text-sm px-3 py-1 rounded-full shadow-lg">
                  FREE
                </div>
              </div>
              
              {/* Item Name */}
              <h3 className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase text-[#0A1628] text-center">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Free Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#0A1628] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <Truck className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold">Free Delivery</span>
            </div>
            <div className="bg-[#0A1628] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z"/>
              </svg>
              <span className="font-bold">Free Installation</span>
            </div>
            <div className="bg-[#0A1628] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
              <span className="font-bold">Free Set Up</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// NEW Try Before You Buy - Wet Test Section - Filled with logo, images, big text
const WetTestSection = () => (
  <section className="bg-white" data-testid="wet-test-section">
    <div className="flex flex-col md:flex-row items-stretch">
      {/* Video Side - Full bleed */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={ASSETS.wetTestVideo} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Content Side - Packed with logo, big text, images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2 bg-[#0A1628] text-white p-6 md:p-8 lg:p-10 flex flex-col justify-between"
      >
        {/* Logo at top - Use OLD logo for Family Owned section */}
        <div className="flex items-center gap-4 mb-4">
          <img src={ASSETS.oldLogo} alt="Upstate Hot Tubs" className="h-16 md:h-20 lg:h-24 object-contain" />
          <div>
            <p className="font-['Barlow_Condensed'] text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider text-white/80">Family Owned</p>
            <p className="font-['Barlow_Condensed'] text-base md:text-lg text-[#D4AF37] font-semibold">American Made & Proud</p>
          </div>
        </div>

        {/* Main heading */}
        <div className="border-l-4 border-[#B91C1C] pl-5 mb-4">
          <h3 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none mb-1 text-white">
            Try Before You Buy
          </h3>
          <h3 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none text-[#B91C1C]">
            "Wet Test"
          </h3>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/90">
          Bring your suits — we have <span className="font-bold text-white">robes, slippers, and towels</span>. Try today!
        </p>
        
        <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-3 text-white">
          Why <span className="text-[#B91C1C]">Upstate</span>?
        </h2>
        
        <ul className="space-y-2 mb-5 text-lg md:text-xl lg:text-2xl">
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            Free delivery & installation in SC
          </li>
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            Accessories included <span className="font-bold text-[#D4AF37]">— $1,500 Value FREE!</span>
          </li>
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            Military & First Responder discounts
          </li>
        </ul>
        
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="bg-[#B91C1C] hover:bg-[#991B1B] text-white inline-flex items-center gap-2 text-lg md:text-xl font-bold py-3 px-8 uppercase tracking-wider transition-colors">
            Schedule Wet Test <ChevronRight size={22} />
          </Link>
          <Link to="/about" className="border-2 border-white/50 hover:border-white text-white inline-flex items-center gap-2 text-lg md:text-xl font-bold py-3 px-8 uppercase tracking-wider transition-colors">
            Learn More <ChevronRight size={22} />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// NEW Prominent Wet Test Banner
const WetTestBanner = () => (
  <section className="py-16 md:py-20 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
          Try Before You Buy
        </h2>
        <h3 className="font-['Barlow_Condensed'] text-3xl md:text-5xl font-bold uppercase mb-6 text-white/90">
          "Wet Test"
        </h3>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto">
          Bring your suits — we have <span className="font-bold">robes, slippers, and towels</span>. Try today!
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#B91C1C] px-10 py-5 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wider hover:bg-slate-100 transition-all">
          Schedule Your Wet Test <ChevronRight size={24} />
        </Link>
      </motion.div>
    </div>
  </section>
);

// NEW Resource Cards Section (like File 4 - 3 large cards) - Updated with Hot Tub/Sauna Images
const ResourceCardsSection = () => {
  const cards = [
    {
      title: 'Owner Resources',
      image: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png',
      link: '/about',
    },
    {
      title: 'Get a Brochure',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      link: '/contact',
    },
    {
      title: 'Visit Our Showroom',
      image: SAUNAS[0]?.images?.primary || 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
      link: '/contact',
    },
  ];

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={card.link}
                className="group block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all h-64 md:h-80"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-lg group-hover:gap-3 transition-all">
                    LEARN MORE <ChevronRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NEW Product Collection Grid (like File 5) - Gradient background
const ProductCollectionSection = () => {
  const collections = [
    {
      name: 'Hot Tubs',
      subtitle: 'Grand River & Dynasty Spas',
      tagline: 'Premium American Craftsmanship',
      link: '/hot-tubs',
      image: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
    },
    {
      name: 'Saunas',
      subtitle: 'Traditional & Infrared',
      tagline: 'Relaxation & Detoxification',
      link: '/saunas',
      image: SAUNAS[0]?.images?.primary || 'https://images.unsplash.com/photo-1574427386945-ae011838ee9a?w=600',
    },
    {
      name: 'Cold Plunges',
      subtitle: 'Cold Therapy Benefits',
      tagline: 'Recovery & Wellness',
      link: '/cold-plunges',
      image: COLD_PLUNGES[0]?.images?.primary || 'https://images.unsplash.com/photo-1574427386945-ae011838ee9a?w=600',
    },
    {
      name: 'Swim Spas',
      subtitle: 'Exercise & Relaxation',
      tagline: 'Swim, Exercise and Relax',
      link: '/swim-spas',
      image: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
    },
  ];

  return (
    <section className="py-16" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a8d4ef 100%)',
      backgroundImage: `
        linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,240,250,0.8) 30%, rgba(180,220,245,0.7) 70%, rgba(160,210,240,0.8) 100%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-4">
            Expand Your <span className="text-[#B91C1C]">Wellness Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">Find the perfect product for your lifestyle</p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={item.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.target.src = ASSETS.logo}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-[#0A1628] group-hover:text-[#B91C1C] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-base md:text-lg text-[#B91C1C] font-semibold mt-1">{item.subtitle}</p>
                  <p className="text-sm md:text-base text-slate-500 mt-2">{item.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-[#B91C1C] text-lg font-bold mt-4 group-hover:gap-3 transition-all">
                    Learn More <ChevronRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NEW The Collection - Location Based Section - Cleaner design (Without Viking)
const LocationCollectionSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        {/* Subtle accent line */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
            <div className="w-6 h-0.5 bg-[#B91C1C]"></div>
            <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
          </div>
        </div>
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4 text-[#0A1628]">
          The <span className="text-[#B91C1C]">Collection</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600">Shop our premium American-made hot tubs and spas</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Grand River Spas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-xl p-6 border-t-4 border-[#1E40AF] hover:shadow-lg transition-all text-center"
        >
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-2">
            Grand River Spas
          </h3>
          <p className="text-slate-600 mb-4">American Made Premium Quality</p>
          <Link to="/grand-river-spas" className="btn-primary inline-flex items-center gap-2">
            Shop Now <ChevronRight size={18} />
          </Link>
        </motion.div>

        {/* Dynasty Spas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-50 rounded-xl p-6 border-t-4 border-[#B91C1C] hover:shadow-lg transition-all text-center"
        >
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-2">
            Dynasty Spas
          </h3>
          <p className="text-slate-600 mb-4">4 Seasons of Relaxation</p>
          <Link to="/dynasty-spas" className="btn-primary inline-flex items-center gap-2">
            Shop Now <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);
// Removed duplicate closing tags

// NEW Why Hot Tubs Section - Gradient design
const WhyHotTubsSection = () => (
  <section className="py-16 md:py-20" style={{
    background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 30%, #d0e8f7 70%, #c0e0f4 100%)'
  }}>
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        {/* Subtle accent line */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
            <div className="w-6 h-0.5 bg-[#B91C1C]"></div>
            <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
          </div>
        </div>
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-4">
          Why a <span className="text-[#B91C1C]">Hot Tub</span>?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          For centuries, people have celebrated the soothing properties of warm water to ease aches, pains, and stress.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Droplets, title: 'Hydrotherapy', desc: 'Improve circulation, muscle recovery, and reduce anxiety.' },
          { icon: Moon, title: 'Better Sleep', desc: 'Warm water and jets melt away stress for better rest.' },
          { icon: Heart, title: 'Stress Relief', desc: 'Release endorphins and unwind in soothing warm water.' },
          { icon: Activity, title: 'Pain Relief', desc: 'Ease joint stiffness and increase flexibility naturally.' },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-all border-t-2 border-[#B91C1C]"
          >
            <item.icon className="w-10 h-10 mx-auto text-[#1E40AF] mb-4" />
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/wellness" className="btn-primary inline-flex items-center gap-2">
          Discover All Benefits <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

// Shop All Models Carousel - Mixed brands from Dynasty, Grand River (no Viking)
const ShopAllModelsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mix products from different brands, sorted by lowest price first (excluding Viking)
  const allProducts = [...HOT_TUBS, ...SWIM_SPAS, ...DYNASTY_SPAS_PRODUCTS]
    .filter(p => p.brand === 'Grand River Spas' || p.brand === 'Dynasty Spas')
    .sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
  
  // Get a mix of products from each brand
  const grandRiver = allProducts.filter(p => p.brand === 'Grand River Spas').slice(0, 8);
  const dynasty = allProducts.filter(p => p.brand === 'Dynasty Spas').slice(0, 8);
  
  // Interleave the brands for variety
  const mixedProducts = [];
  for (let i = 0; i < 8; i++) {
    if (grandRiver[i]) mixedProducts.push(grandRiver[i]);
    if (dynasty[i]) mixedProducts.push(dynasty[i]);
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="py-16" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #e8f4fc 50%, #d8ecf8 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628]">
              Shop All Models
            </h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all ${canScrollLeft ? 'bg-[#0A1628] text-white hover:bg-[#B91C1C]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all ${canScrollRight ? 'bg-[#0A1628] text-white hover:bg-[#B91C1C]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mixedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.05, 0.3) }}
              className="flex-shrink-0 w-[320px]"
            >
              <Link 
                to={`/products/${product.id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square bg-slate-50 overflow-hidden">
                  {/* Show PRIMARY image (actual hot tub) */}
                  <img 
                    src={product.images?.primary}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    onError={(e) => e.target.src = ASSETS.logo}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0A1628] text-white text-sm px-3 py-1 rounded font-semibold">
                      {product.brand}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-['Barlow_Condensed'] text-xl md:text-2xl font-bold text-[#0A1628] group-hover:text-[#B91C1C] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-base text-slate-500 mt-1">{product.persons} Person • {product.jets} Jets</p>
                  <p className="text-xl font-bold text-[#B91C1C] mt-2">{product.price}</p>
                  <span className="inline-flex items-center gap-1 text-[#0A1628] text-base font-semibold mt-3 group-hover:text-[#B91C1C] group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center gap-2 text-lg">
            View All Products <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// AR Visualizer Section - Small line blurb
const ARVisualizerSection = () => (
  <section className="py-8 bg-gradient-to-r from-slate-50 to-slate-100">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left"
      >
        <div className="flex items-center gap-3">
          <Camera className="text-[#D4AF37]" size={28} />
          <span className="font-['Barlow_Condensed'] text-xl md:text-2xl font-bold uppercase text-[#0A1628]">
            AR Technology
          </span>
        </div>
        <p className="text-lg text-slate-600">
          Want to see how a hot tub looks in your backyard? Try our AR Visualizer on your phone!
        </p>
        <Link 
          to="/ar-visualizer" 
          className="btn-primary inline-flex items-center gap-2 text-base whitespace-nowrap"
        >
          <Smartphone size={18} />
          Try It Now
        </Link>
      </motion.div>
    </div>
  </section>
);

// Product Comparison Section with gradient
const ComparisonSection = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showSelector, setShowSelector] = useState(false);
  
  // Exclude Viking products from comparison
  const allProducts = [
    ...HOT_TUBS.filter(p => p.brand !== 'Viking Spas').map(p => ({ ...p, category: 'Hot Tub' })),
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
    <section className="py-16 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-10"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-white mb-2">
            Compare Products
          </h2>
          <p className="text-lg text-slate-400">Select up to 3 products to compare side-by-side</p>
        </motion.div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-[#0A1628] text-white p-4 hidden md:block">
              <div className="h-32 flex items-end pb-2">
                <span className="font-['Barlow_Condensed'] text-xl font-bold">Features</span>
              </div>
              <div className="py-3 border-t border-white/20 text-base">Category</div>
              <div className="py-3 border-t border-white/20 text-base">Price</div>
              <div className="py-3 border-t border-white/20 text-base">Capacity</div>
              <div className="py-3 border-t border-white/20 text-base">Jets</div>
              <div className="py-3 border-t border-white/20 text-base">Dimensions</div>
              <div className="py-3 border-t border-white/20 text-base"></div>
            </div>

            {[0, 1, 2].map((index) => {
              const product = selectedProducts[index];
              return (
                <div key={index} className="border-l border-slate-200 first:border-l-0">
                  {product ? (
                    <>
                      <div className="p-4 h-32 flex flex-col items-center justify-center relative bg-slate-50">
                        <button 
                          onClick={() => removeProduct(product.id)}
                          className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                        >
                          <X size={16} />
                        </button>
                        <img src={product.images?.primary} alt={product.name} className="h-16 object-contain mb-1" onError={(e) => e.target.src = ASSETS.logo} />
                        <h4 className="font-['Barlow_Condensed'] font-bold text-base text-center">{product.name}</h4>
                      </div>
                      <div className="py-3 px-4 border-t text-center text-base"><span className="inline-block px-3 py-1 bg-[#0A1628] text-white text-sm rounded font-semibold">{product.category}</span></div>
                      <div className="py-3 px-4 border-t text-center font-bold text-[#B91C1C] text-lg">{product.price || 'Call'}</div>
                      <div className="py-3 px-4 border-t text-center text-base">{product.persons ? `${product.persons} Person` : '-'}</div>
                      <div className="py-3 px-4 border-t text-center text-base">{product.jets || '-'}</div>
                      <div className="py-3 px-4 border-t text-center text-sm">{product.dimensions || '-'}</div>
                      <div className="py-3 px-4 border-t text-center">
                        <Link to={`/products/${product.id}`} className="text-[#B91C1C] text-base font-semibold hover:underline">View Details</Link>
                      </div>
                    </>
                  ) : (
                    <div className="h-full min-h-[320px] flex items-center justify-center p-4">
                      <button 
                        onClick={() => setShowSelector(true)}
                        className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-[#B91C1C] hover:bg-red-50 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-full bg-slate-100 group-hover:bg-[#B91C1C] flex items-center justify-center transition-colors">
                          <Plus className="text-slate-400 group-hover:text-white" size={28} />
                        </div>
                        <span className="font-['Barlow_Condensed'] font-bold text-lg text-slate-600 group-hover:text-[#B91C1C]">Add Product</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {showSelector && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setShowSelector(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white max-w-2xl w-full max-h-[80vh] rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="bg-[#0A1628] text-white p-4 flex items-center justify-between">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold">Select a Product</h3>
                <button onClick={() => setShowSelector(false)}><X size={28} /></button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allProducts.map(product => (
                    <button key={product.id} onClick={() => addProduct(product)} disabled={selectedProducts.find(p => p.id === product.id)} className={`p-3 border rounded-lg text-left hover:border-[#B91C1C] hover:bg-red-50 transition-all ${selectedProducts.find(p => p.id === product.id) ? 'opacity-50' : ''}`}>
                      <div className="flex items-center gap-3">
                        <img src={product.images?.primary} alt={product.name} className="w-14 h-14 object-contain" onError={(e) => e.target.src = ASSETS.logo} />
                        <div>
                          <h4 className="font-semibold text-base">{product.name}</h4>
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

// Home Page Component - Rearranged sections
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
        <title>Upstate Hot Tubs | American Made Hot Tubs & Swim Spas | South Carolina</title>
        <meta name="description" content="Live your healthiest life while enjoying a vacation everyday at home. American made hot tubs, swim spas, saunas & cold plunges from Grand River Spas and Dynasty Spas. Serving Greenville, Simpsonville SC and the Upstate." />
        <meta name="keywords" content="hot tubs, swim spas, saunas, cold plunges, American made, Grand River Spas, Dynasty Spas, Greenville SC, Simpsonville SC, Upstate" />
        <meta property="og:title" content="Upstate Hot Tubs | American Made Hot Tubs & Swim Spas" />
        <meta property="og:description" content="Live your healthiest life while enjoying a vacation everyday at home. American made and proud of it!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://upstatehottubs.com" />
      </Helmet>
      
      <TaxSpecialPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      
      {/* 1. Hero Section - Video */}
      <HeroSection />
      
      {/* 2. Trust Badges */}
      <TrustBadgesSection />
      
      {/* 3. Expand Your Wellness Journey (Hot Tubs, Saunas, Cold Plunges, Swim Spas) */}
      <ProductCollectionSection />
      
      {/* 4. Why a Hot Tub? */}
      <WhyHotTubsSection />
      
      {/* 5. Why Upstate / Wet Test Section */}
      <WetTestSection />
      
      {/* 6. Shop All Models Carousel */}
      <ShopAllModelsSection />
      
      {/* 7. Best Warranty Section with links */}
      <BestWarrantySection />
      
      {/* 8. Free Items Section */}
      <FreeItemsSection />
      
      {/* 9. The Collection (Grand River & Dynasty) */}
      <LocationCollectionSection />
      
      {/* 10. Product Comparison */}
      <ComparisonSection />
      
      {/* 11. Resource Cards */}
      <ResourceCardsSection />
      
      {/* 12. AR Visualizer Section */}
      <ARVisualizerSection />
    </>
  );
};

export default HomePage;
