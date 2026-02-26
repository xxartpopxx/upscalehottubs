import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ChevronLeft, Flag, Shield, Heart, Phone, Mail, X, Star, Truck, Camera, Smartphone, Plus, Sparkles, BookOpen, MapPin, FileText, Users, Droplets, Moon, Activity, ThermometerSun } from 'lucide-react';
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

// NEW Hero Section - Video without text overlay, text below - BIGGER VIDEO
const HeroSection = () => (
  <section className="relative" data-testid="hero-section">
    {/* Video Section - No Text Overlay - BIGGER */}
    <div className="relative h-[70vh] min-h-[500px] md:h-[80vh] overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/90" />
    </div>
    
    {/* Text Content Below Video - Red White Blue Theme */}
    <div className="bg-[#0A1628] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flag className="text-[#B91C1C]" size={32} />
            <span className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">American Made & Proud of It</span>
            <Flag className="text-[#B91C1C]" size={32} />
          </div>
          
          <h1 className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
            Live Your <span className="text-[#B91C1C]">Healthiest Life</span>
            <br />
            <span className="text-white">While Enjoying a Vacation</span>
            <br />
            <span className="text-white">Everyday at Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 max-w-4xl mx-auto text-slate-200">
            The Best Hot Tubs & Swim Spas Store in Naples Florida, Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2 text-xl px-10 py-5">
              Explore All Models <ChevronRight size={24} />
            </Link>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-[#D4AF37]">
            Ask about Free Hot Tub, Swim Spa, Sauna & Cold Plunge Delivery in Florida and SC
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// Trust Badges Section - Bigger, Red White Blue
const TrustBadgesSection = () => (
  <section className="py-8 bg-white border-b-4 border-[#B91C1C]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center gap-2 p-4">
          <Shield className="w-10 h-10 text-[#B91C1C]" />
          <span className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase text-[#0A1628]">5% Discount</span>
          <span className="text-sm md:text-base text-slate-600">Military, Veterans, First Responders & Law Enforcement</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <Flag className="w-10 h-10 text-[#1E40AF]" />
          <span className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase text-[#0A1628]">American Made</span>
          <span className="text-sm md:text-base text-slate-600">All Products Made in the USA</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <Heart className="w-10 h-10 text-[#B91C1C]" />
          <span className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase text-[#0A1628]">Family Owned</span>
          <span className="text-sm md:text-base text-slate-600">American & Proud of It</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <Truck className="w-10 h-10 text-[#1E40AF]" />
          <span className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase text-[#0A1628]">Free Delivery</span>
          <span className="text-sm md:text-base text-slate-600">Available in Florida & South Carolina</span>
        </div>
      </div>
    </div>
  </section>
);

// NEW Try Before You Buy - Wet Test Section with Video (moved higher)
const WetTestSection = () => (
  <section className="py-16 md:py-20 bg-[#0A1628] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Video Side */}
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
        
        {/* Content Side - With Wet Test Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
            Why <span className="text-[#B91C1C]">Upstate Hot Tubs</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
            Family owned and American proud! We offer high-quality American-made hot tubs, swim spas, saunas, and cold plunges with superior components and craftsmanship.
          </p>
          
          {/* Try Before You Buy - Wet Test Highlight */}
          <div className="bg-[#B91C1C] rounded-lg p-6 mb-6">
            <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-black uppercase mb-2">
              Try Before You Buy "Wet Test"
            </h3>
            <p className="text-lg md:text-xl">
              Bring your suits — we have <span className="font-bold">robes, slippers, and towels</span>. Try today!
            </p>
          </div>
          
          <ul className="space-y-4 mb-8 text-lg md:text-xl">
            {[
              'Free delivery & installation in FL & SC',
              'Cover, cover lifter, steps & chemicals included',
              'Military, Veterans & First Responder discounts',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/about" className="btn-primary inline-flex items-center gap-2 text-lg">
            Learn About Us <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
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

// NEW Resource Cards Section (like File 4 - 3 large cards)
const ResourceCardsSection = () => {
  const cards = [
    {
      title: 'Owner Resources',
      image: 'https://images.unsplash.com/photo-1574427386945-ae011838ee9a?w=600&h=400&fit=crop',
      link: '/about',
    },
    {
      title: 'Get a Brochure',
      image: 'https://images.unsplash.com/photo-1647833190352-0e7e579b45b6?w=600&h=400&fit=crop',
      link: '/contact',
    },
    {
      title: 'Visit Our Showroom',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop',
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

// NEW Product Collection Grid (like File 5)
const ProductCollectionSection = () => {
  const collections = [
    {
      name: 'Hot Tubs',
      subtitle: 'Viking, Grand River & Dynasty Spas',
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
  ];

  const bottomCollections = [
    {
      name: 'Swim Spas',
      subtitle: 'Exercise & Relaxation',
      tagline: 'Swim, Exercise and Relax',
      link: '/swim-spas',
      image: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
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

        {/* Top Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
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

        {/* Bottom Row - Centered Swim Spas */}
        <div className="flex justify-center">
          {bottomCollections.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <Link 
                to={item.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
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

// NEW The Collection - Location Based Section
const LocationCollectionSection = () => (
  <section className="py-16 md:py-20 bg-[#0A1628] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4">
          The <span className="text-[#B91C1C]">Collection</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-300">Shop by your location for the best selection</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Greenville SC & The Upstate */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#B91C1C] transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-[#B91C1C]" size={32} />
            <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase">
              Greenville SC & The Upstate
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 mb-6">
            Click for <span className="text-white font-bold">Grand River and Dynasty Spas</span> — American Made
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/grand-river-spas" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Grand River Spas <ChevronRight size={20} />
            </Link>
            <Link to="/dynasty-spas" className="btn-secondary border-white text-white hover:bg-white hover:text-[#0A1628] flex items-center justify-center gap-2 text-lg">
              Dynasty Spas <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Naples & Southwest FL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#B91C1C] transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-[#D4AF37]" size={32} />
            <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase">
              Naples & Southwest FL
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 mb-6">
            Click for <span className="text-white font-bold">Viking, Grand River and Dynasty Spas</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/viking-spas" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Viking Spas <ChevronRight size={20} />
            </Link>
            <Link to="/grand-river-spas" className="btn-secondary border-white text-white hover:bg-white hover:text-[#0A1628] flex items-center justify-center gap-2 text-lg">
              More Options <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// NEW Why Hot Tubs Section - Reinforced
const WhyHotTubsSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-4">
          Why a <span className="text-[#B91C1C]">Hot Tub</span>?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          For centuries, people have celebrated the soothing properties of warm water to ease aches, pains, and stress. Experience the therapeutic benefits of hydrotherapy from the comfort of your backyard.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Droplets, title: 'Hydrotherapy', desc: 'Improve circulation, muscle recovery, and reduce anxiety with the power of water.' },
          { icon: Moon, title: 'Better Sleep', desc: 'Warm water and jets melt away stress, helping you sleep soundly.' },
          { icon: Heart, title: 'Stress Relief', desc: 'Release endorphins and unwind from the day in soothing warm water.' },
          { icon: Activity, title: 'Pain Relief', desc: 'Ease joint stiffness, reduce inflammation, and increase flexibility naturally.' },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-all border-2 border-transparent hover:border-[#B91C1C]"
          >
            <item.icon className="w-12 h-12 mx-auto text-[#B91C1C] mb-4" />
            <h3 className="font-['Barlow_Condensed'] text-xl md:text-2xl font-bold uppercase text-[#0A1628] mb-2">{item.title}</h3>
            <p className="text-base md:text-lg text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/wellness" className="btn-primary inline-flex items-center gap-2 text-lg">
          Discover All Benefits <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

// Shop All Models Carousel
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
            <p className="text-lg text-slate-600 mt-1">Sorted by price: Lowest to Highest</p>
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
          {sortedProducts.map((product, idx) => (
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
                    <span className="bg-[#0A1628] text-white text-sm px-3 py-1 rounded font-semibold">
                      {product.series || product.brand}
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
            <Camera className="text-[#D4AF37]" size={36} />
            <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-lg">AR Technology</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-6">
            See It In Your <span className="text-[#B91C1C]">Backyard</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
            Not sure how it will look? Use our AR Visualizer to place a virtual hot tub, swim spa, or sauna in your space using your phone's camera.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-lg text-slate-600">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
              Works on most modern smartphones
            </li>
            <li className="flex items-center gap-3 text-lg text-slate-600">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
              Visualize different models and sizes
            </li>
            <li className="flex items-center gap-3 text-lg text-slate-600">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
              Share with family for input
            </li>
          </ul>
          <Link 
            to="/ar-visualizer" 
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Smartphone size={22} />
            Launch AR Visualizer
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3352] rounded-xl p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-28 h-28 mx-auto mb-4 bg-[#B91C1C]/20 rounded-full flex items-center justify-center"
              >
                <Camera className="w-14 h-14 text-[#B91C1C]" />
              </motion.div>
              <p className="text-xl text-white/80 mb-2">Point your camera at your backyard</p>
              <p className="text-base text-white/50">Available on mobile devices</p>
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
      
      {/* Hero Section - Video without overlay text */}
      <HeroSection />
      
      {/* Trust Badges - Bigger */}
      <TrustBadgesSection />
      
      {/* Try Before You Buy - Wet Test Banner */}
      <WetTestBanner />
      
      {/* Resource Cards - Large 3-card grid */}
      <ResourceCardsSection />
      
      {/* Product Collection Grid */}
      <ProductCollectionSection />
      
      {/* Location-Based Collection */}
      <LocationCollectionSection />
      
      {/* Why Hot Tubs Section */}
      <WhyHotTubsSection />
      
      {/* Why Upstate / Wet Test Section */}
      <WetTestSection />
      
      {/* Shop All Models Carousel */}
      <ShopAllModelsSection />
      
      {/* AR Visualizer Section */}
      <ARVisualizerSection />
      
      {/* Comparison Section */}
      <ComparisonSection />
    </>
  );
};

export default HomePage;
