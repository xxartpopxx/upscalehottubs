import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ChevronLeft, Flag, Shield, Heart, Phone, Mail, X, Star, Truck, Camera, Smartphone, Plus, Sparkles, BookOpen, MapPin, FileText, Users } from 'lucide-react';
import { ASSETS, CONTACT } from '../data/constants';
import { HOT_TUBS, SWIM_SPAS, COLD_PLUNGES, SAUNAS } from '../data/products';

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

// Hero Section (kept the same as requested)
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
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
            Explore All Models <ChevronRight size={20} />
          </Link>
        </motion.div>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 text-lg font-semibold text-[#D4AF37]">
          Ask about Free Hot Tub & Swim Spa Delivery in Florida and SC
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Quick Links Section (Viking style)
const QuickLinksSection = () => (
  <section className="py-8 bg-[#0A1628]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, title: 'Owner Resources', link: '/about', desc: 'Tips & Support' },
          { icon: FileText, title: 'Get a Brochure', link: '/contact', desc: 'Download Info' },
          { icon: MapPin, title: 'Visit Our Showroom', link: '/contact', desc: 'See In Person' },
          { icon: Sparkles, title: 'Expand Your Wellness', link: '/wellness', desc: 'Learn More' },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={item.link}
              className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg p-4 text-center transition-all group"
            >
              <item.icon className="w-8 h-8 mx-auto mb-2 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <h3 className="font-['Barlow_Condensed'] text-sm font-bold uppercase text-white">{item.title}</h3>
              <p className="text-xs text-white/60">{item.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Trust Badges Section (Compact Viking style)
const TrustBadgesSection = () => (
  <section className="py-6 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#B91C1C]" />
          <div className="text-left">
            <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase text-[#0A1628] block">5% Discount</span>
            <span className="text-xs text-slate-500">Military, Veterans, First Responders</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Flag className="w-6 h-6 text-[#B91C1C]" />
          <div className="text-left">
            <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase text-[#0A1628] block">American Made</span>
            <span className="text-xs text-slate-500">All Products Made in USA</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-[#B91C1C]" />
          <div className="text-left">
            <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase text-[#0A1628] block">Family Owned</span>
            <span className="text-xs text-slate-500">American & Proud of It</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-[#B91C1C]" />
          <div className="text-left">
            <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase text-[#0A1628] block">Free Delivery</span>
            <span className="text-xs text-slate-500">Florida & South Carolina</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Series/Categories Cards Section (Viking style)
const SeriesCardsSection = () => {
  const series = [
    { 
      name: 'Grand River Spas', 
      tagline: 'Premier American Craftsmanship', 
      link: '/grand-river-spas',
      image: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1'
    },
    { 
      name: 'Viking Spas', 
      tagline: 'Family Owned, American Built', 
      link: '/viking-spas',
      image: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png'
    },
    { 
      name: 'Dynasty Spas', 
      tagline: 'Luxury & Innovation', 
      link: '/dynasty-spas',
      image: 'https://static.wixstatic.com/media/5c7c78_a461af4de3624cb18c573904c199c7fb~mv2.webp'
    },
    { 
      name: 'Swim Spas', 
      tagline: 'Swim, Exercise & Relax', 
      link: '/swim-spas',
      image: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1'
    },
    { 
      name: 'Cold Plunges', 
      tagline: 'Benefits of Cold Immersion', 
      link: '/cold-plunges',
      image: COLD_PLUNGES[0]?.images?.primary || ASSETS.logo
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-2">
            Explore Our Collections
          </h2>
          <p className="text-lg text-slate-600">Find the perfect spa for your lifestyle</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {series.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={item.link}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.target.src = ASSETS.logo}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] group-hover:text-[#B91C1C] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{item.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-[#B91C1C] text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
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

// Why Hot Tub Section (Viking style)
const WhyHotTubSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-6">
            Why a <span className="text-[#B91C1C]">Hot Tub</span>?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            For centuries, people have celebrated the soothing properties of warm water to ease aches, pains, and stress. From the luxurious baths of ancient Rome to today's inviting hot tubs, immersing ourselves in warm water leads to remarkable physical and mental rejuvenation.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Experience the therapeutic benefits of hydrotherapy - reduced stress, better sleep, pain relief, and improved circulation - all from the comfort of your backyard.
          </p>
          <Link to="/wellness" className="btn-primary inline-flex items-center gap-2">
            Discover the Benefits <ChevronRight size={18} />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_b1f56408-f888-480b-a4b9-0fa546a42f73/artifacts/1frscfpx_VS_EliteSeries_IN_T_W_2-scaled-1.jpg"
            alt="Couple enjoying hot tub with mountain view"
            className="w-full rounded-lg shadow-2xl"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-[#B91C1C] text-white p-6 rounded-lg shadow-xl"
          >
            <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Wet Test</p>
            <p className="text-sm">Available Daily!</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Why Upstate Section (Viking style)
const WhyUpstateSection = () => (
  <section className="py-20 bg-[#0A1628] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <video autoPlay muted loop playsInline className="w-full rounded-lg shadow-2xl">
            <source src={ASSETS.wetTestVideo} type="video/mp4" />
          </video>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase mb-6">
            Why <span className="text-[#B91C1C]">Upstate Hot Tubs</span>?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Family owned and American proud! We offer high-quality American-made hot tubs, swim spas, saunas, and cold plunges with superior components and craftsmanship.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Free delivery & installation in FL & SC',
              'Try before you buy - Wet Tests available',
              'Cover, cover lifter, steps & chemicals included',
              'Military, Veterans & First Responder discounts',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary inline-flex items-center gap-2">
            Learn About Us <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Shop All Models Carousel (Viking style)
const ShopAllModelsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sortedProducts = sortByPrice([...HOT_TUBS, ...SWIM_SPAS]).slice(0, 16);

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
      const scrollAmount = 320;
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
    <section className="py-16 bg-[#F8FAFC]">
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
            <p className="text-slate-600 mt-1">Sorted by price: Lowest to Highest</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all ${canScrollLeft ? 'bg-[#0A1628] text-white hover:bg-[#B91C1C]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all ${canScrollRight ? 'bg-[#0A1628] text-white hover:bg-[#B91C1C]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sortedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.05, 0.3) }}
              className="flex-shrink-0 w-[300px]"
            >
              <Link 
                to={`/products/${product.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square bg-slate-50 overflow-hidden">
                  <img 
                    src={product.images?.overhead || product.images?.primary}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-4 opacity-100 group-hover:opacity-0 transition-opacity"
                    onError={(e) => e.target.src = ASSETS.logo}
                  />
                  <img 
                    src={product.images?.primary}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    onError={(e) => e.target.src = ASSETS.logo}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0A1628] text-white text-xs px-2 py-1 rounded">
                      {product.series || product.brand}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] group-hover:text-[#B91C1C] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500">{product.persons} Person • {product.jets} Jets</p>
                  <p className="text-lg font-bold text-[#B91C1C] mt-2">{product.price}</p>
                  <span className="inline-flex items-center gap-1 text-[#0A1628] text-sm font-semibold mt-2 group-hover:text-[#B91C1C] group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center gap-2">
            View All Products <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// AR Visualizer Section
const ARVisualizerSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-[#D4AF37]" size={32} />
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">AR Technology</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-6">
            See It In Your <span className="text-[#B91C1C]">Backyard</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Not sure how it will look? Use our AR Visualizer to place a virtual hot tub, swim spa, or sauna in your space using your phone's camera.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Works on most modern smartphones
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Visualize different models and sizes
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              Share with family for input
            </li>
          </ul>
          <Link 
            to="/ar-visualizer" 
            className="btn-primary inline-flex items-center gap-2"
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
          <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3352] rounded-lg p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 mx-auto mb-4 bg-[#B91C1C]/20 rounded-full flex items-center justify-center"
              >
                <Camera className="w-12 h-12 text-[#B91C1C]" />
              </motion.div>
              <p className="text-lg text-white/80 mb-2">Point your camera at your backyard</p>
              <p className="text-sm text-white/50">Available on mobile devices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Product Comparison Section
const ComparisonSection = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showSelector, setShowSelector] = useState(false);
  
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
          <p className="text-slate-400">Select up to 3 products to compare side-by-side</p>
        </motion.div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-[#0A1628] text-white p-4 hidden md:block">
              <div className="h-32 flex items-end pb-2">
                <span className="font-['Barlow_Condensed'] text-lg font-bold">Features</span>
              </div>
              <div className="py-3 border-t border-white/20 text-sm">Category</div>
              <div className="py-3 border-t border-white/20 text-sm">Price</div>
              <div className="py-3 border-t border-white/20 text-sm">Capacity</div>
              <div className="py-3 border-t border-white/20 text-sm">Jets</div>
              <div className="py-3 border-t border-white/20 text-sm">Dimensions</div>
              <div className="py-3 border-t border-white/20 text-sm"></div>
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
                          <X size={14} />
                        </button>
                        <img src={product.images?.primary} alt={product.name} className="h-16 object-contain mb-1" onError={(e) => e.target.src = ASSETS.logo} />
                        <h4 className="font-['Barlow_Condensed'] font-bold text-sm text-center">{product.name}</h4>
                      </div>
                      <div className="py-3 px-4 border-t text-center text-sm"><span className="inline-block px-2 py-0.5 bg-[#0A1628] text-white text-xs rounded">{product.category}</span></div>
                      <div className="py-3 px-4 border-t text-center font-bold text-[#B91C1C]">{product.price || 'Call'}</div>
                      <div className="py-3 px-4 border-t text-center text-sm">{product.persons ? `${product.persons} Person` : '-'}</div>
                      <div className="py-3 px-4 border-t text-center text-sm">{product.jets || '-'}</div>
                      <div className="py-3 px-4 border-t text-center text-xs">{product.dimensions || '-'}</div>
                      <div className="py-3 px-4 border-t text-center">
                        <Link to={`/products/${product.id}`} className="text-[#B91C1C] text-sm font-semibold hover:underline">View Details</Link>
                      </div>
                    </>
                  ) : (
                    <div className="h-full min-h-[320px] flex items-center justify-center p-4">
                      <button 
                        onClick={() => setShowSelector(true)}
                        className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-slate-300 rounded-lg hover:border-[#B91C1C] hover:bg-red-50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-[#B91C1C] flex items-center justify-center transition-colors">
                          <Plus className="text-slate-400 group-hover:text-white" size={24} />
                        </div>
                        <span className="font-['Barlow_Condensed'] font-bold text-slate-600 group-hover:text-[#B91C1C]">Add Product</span>
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
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white max-w-2xl w-full max-h-[80vh] rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="bg-[#0A1628] text-white p-4 flex items-center justify-between">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold">Select a Product</h3>
                <button onClick={() => setShowSelector(false)}><X size={24} /></button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allProducts.map(product => (
                    <button key={product.id} onClick={() => addProduct(product)} disabled={selectedProducts.find(p => p.id === product.id)} className={`p-3 border rounded-lg text-left hover:border-[#B91C1C] hover:bg-red-50 transition-all ${selectedProducts.find(p => p.id === product.id) ? 'opacity-50' : ''}`}>
                      <div className="flex items-center gap-3">
                        <img src={product.images?.primary} alt={product.name} className="w-12 h-12 object-contain" onError={(e) => e.target.src = ASSETS.logo} />
                        <div>
                          <h4 className="font-semibold text-sm">{product.name}</h4>
                          <p className="text-xs text-slate-500">{product.category}</p>
                          <p className="text-xs font-bold text-[#B91C1C]">{product.price || 'Call'}</p>
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

// Wellness Journey Section
const WellnessJourneySection = () => (
  <section className="py-16 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="text-[#D4AF37]" size={24} />
          <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm">Discover More</span>
          <Sparkles className="text-[#D4AF37]" size={24} />
        </div>
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-2">
          Expand Your <span className="text-[#B91C1C]">Wellness Journey</span>
        </h2>
        <p className="text-slate-600">Learn about the health benefits and science behind hydrotherapy</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Health & Wellness', description: 'Discover the therapeutic benefits of hot water therapy.', link: '/wellness', icon: '🌿' },
          { title: 'Balneotherapy', description: 'Learn about ancient water-based healing practices.', link: '/balneotherapy', icon: '💧' },
          { title: 'Anatomy of a Spa', description: 'Understand what makes our spas exceptional.', link: '/anatomy-of-a-spa', icon: '⚙️' }
        ].map((item, idx) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
            <Link to={item.link} className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-[#B91C1C] hover:shadow-lg transition-all group h-full">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-2 group-hover:text-[#B91C1C] transition-colors">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-[#B91C1C] text-sm font-semibold group-hover:gap-2 transition-all">Learn More <ChevronRight size={14} /></span>
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
      
      {/* Keep Hero Section */}
      <HeroSection />
      
      {/* Quick Links (Viking style) */}
      <QuickLinksSection />
      
      {/* Trust Badges (Compact) */}
      <TrustBadgesSection />
      
      {/* Series/Category Cards (Viking style) */}
      <SeriesCardsSection />
      
      {/* Why Hot Tub Section (Viking style) */}
      <WhyHotTubSection />
      
      {/* Why Upstate Section (Viking style) */}
      <WhyUpstateSection />
      
      {/* Shop All Models Carousel (Viking style) */}
      <ShopAllModelsSection />
      
      {/* AR Visualizer Section */}
      <ARVisualizerSection />
      
      {/* Comparison Section */}
      <ComparisonSection />
      
      {/* Wellness Journey Section */}
      <WellnessJourneySection />
    </>
  );
};

export default HomePage;
