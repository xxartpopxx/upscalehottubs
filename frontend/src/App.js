import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, X, Volume2, VolumeX, 
  Instagram, Facebook, Youtube, ChevronRight, ChevronLeft,
  Clock, Award, Shield, Flag, Heart, Send, Star
} from 'lucide-react';
import './App.css';

// New Logo
const NEW_LOGO = 'https://customer-assets.emergentagent.com/job_american-spa-portal/artifacts/agdsrdka_8b31198f-97d1-4e1d-a0ef-9424fb640c06.png';

// About Page Image (Grand Opening)
const ABOUT_IMAGE = 'https://customer-assets.emergentagent.com/job_american-spa-portal/artifacts/iri86zu2_549423966_122190087680361664_6940928450155468082_n.jpg';

// Assets URLs
const ASSETS = {
  logo: NEW_LOGO,
  heroVideo: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/14akq3sp_SnapSave_App_1155304596774970_1080p.mp4',
  wetTestVideo: 'https://customer-assets.emergentagent.com/job_american-spa-portal/artifacts/atx9u9gd_SnapSave_App_1262194805786001_1080p.mp4',
  jingle: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/80qfrl8e_SnapSave_App_1155304596774970_1080p.mp3',
  aboutImage: ABOUT_IMAGE,
};

// Premier Series Product Images (Side is now primary, Overhead is secondary)
const PREMIER_PRODUCTS = {
  chariton2: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-Satin_CoastalGray_Side_Web.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1'
  },
  chariton1: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-1_White-Satin_CoastalGray_Side_web.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/GR_Chariton-1-Silver-OH_web.png?lossy=2&strip=1&webp=1'
  },
  chesapeake2: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White_CoastalGray_web.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White-OH_web.png?lossy=2&strip=1&webp=1'
  },
  chesapeake1: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal_Black_Side_web-e1751040384296.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-1_Opal-OH_web.png?lossy=2&strip=1&webp=1'
  },
  saginaw2: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
  },
  saginaw1: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1'
  },
  thornapple2: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
  },
  thornapple1: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1'
  },
  muskegon2: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon2_White_CoastalGray_Side-768x499.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_2_White_OH.png?lossy=2&strip=1&webp=1'
  },
  sturgeon: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Silver_OH.png?lossy=2&strip=1&webp=1'
  },
  swift: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_2025_Swift_White_Black_Side.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/11/GR_Swift_White_OH.png?lossy=2&strip=1&webp=1'
  },
  manistee: {
    primary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
    secondary: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1'
  },
};

// Contact Information
const CONTACT = {
  phone: '(864) 837-0155',
  email: 'info@upstatehottubs.com',
  address: '1004 West Georgia Rd, Simpsonville, SC 29680',
  hours: 'Always Open',
  serviceAreas: ['Fountain Inn, SC', 'Mauldin, SC', 'Spartanburg, SC', 'Anderson, SC', 'Greenville, SC', 'Greer, SC', 'Five Forks, SC', 'Naples, FL'],
};

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/upstatehottubs/',
  facebook: 'https://www.facebook.com/upstatehottubs/',
  youtube: 'https://www.youtube.com/@UpstateHotTubs',
};

// Hot Tub Products - Side view as primary
const HOT_TUBS = [
  { id: 1, name: 'CHARITON 2', persons: '6 PERSON', price: '$10,995.00', jets: 61, images: PREMIER_PRODUCTS.chariton2, description: 'Our largest lounger model, designed for full-body relaxation with Volcano floor jet and focused neck jets.' },
  { id: 2, name: 'CHARITON 1', persons: '6 PERSON', price: '$9,995.00', jets: 51, images: PREMIER_PRODUCTS.chariton1, description: 'Luxurious lounger with powerful Volcano jet and captain\'s chairs for head-to-toe rejuvenation.' },
  { id: 3, name: 'CHESAPEAKE 2', persons: '7 PERSON', price: '$10,995.00', jets: 63, images: PREMIER_PRODUCTS.chesapeake2, description: 'Spacious open-seating hot tub with exclusive three-direction swing seats.' },
  { id: 4, name: 'CHESAPEAKE 1', persons: '7 PERSON', price: '$9,995.00', jets: 53, images: PREMIER_PRODUCTS.chesapeake1, description: 'Total-body relaxation with targeted jet therapy for neck, wrists, and feet.' },
  { id: 5, name: 'SAGINAW 2', persons: '6 PERSON', price: '$9,995.00', jets: 61, images: PREMIER_PRODUCTS.saginaw2, description: 'Premium 6-person hot tub with advanced jet system and LED lighting.' },
  { id: 6, name: 'SAGINAW 1', persons: '6 PERSON', price: '$8,995.00', jets: 51, images: PREMIER_PRODUCTS.saginaw1, description: 'Comfortable 6-person spa with therapeutic jets.' },
  { id: 7, name: 'THORNAPPLE 2', persons: '7 PERSON', price: '$9,995.00', jets: 61, images: PREMIER_PRODUCTS.thornapple2, description: 'Spacious 7-person hot tub with lounger seating.' },
  { id: 8, name: 'THORNAPPLE 1', persons: '7 PERSON', price: '$8,995.00', jets: 51, images: PREMIER_PRODUCTS.thornapple1, description: 'Family-size 7-person spa with premium features.' },
  { id: 9, name: 'MUSKEGON 2', persons: '6 PERSON', price: '$8,995.00', jets: 51, images: PREMIER_PRODUCTS.muskegon2, description: 'Versatile 6-person hot tub perfect for relaxation.' },
  { id: 10, name: 'STURGEON', persons: '6 PERSON', price: '$7,995.00', jets: 45, images: PREMIER_PRODUCTS.sturgeon, description: 'Value-packed 6-person spa with quality construction.' },
  { id: 11, name: 'SWIFT', persons: '3 PERSON', price: '$6,995.00', jets: 33, images: PREMIER_PRODUCTS.swift, description: 'Compact 2-person hot tub that fits perfectly in small outdoor spaces.' },
  { id: 12, name: 'MANISTEE', persons: '5 PERSON', price: '$6,599.00', jets: 35, images: PREMIER_PRODUCTS.manistee, description: 'Energy-efficient 5-person hot tub.' },
];

// Swim Spas - Side view as primary (using Grand River images for reliability)
const SWIM_SPAS = [
  { id: 1, name: "Family Island Oasis Single Lounger", price: '$16,500.00', images: { primary: PREMIER_PRODUCTS.chariton2.primary, secondary: PREMIER_PRODUCTS.chariton2.secondary }, description: 'Perfect family swim spa with lounger seating.' },
  { id: 2, name: "13' AQUEX PARTY- BENCH", price: '$24,995.00', images: { primary: PREMIER_PRODUCTS.chesapeake2.primary, secondary: PREMIER_PRODUCTS.chesapeake2.secondary }, description: '13-foot party swim spa with bench seating.' },
  { id: 3, name: "13' AQUEX PRO PLUS", price: '$29,595.00', images: { primary: PREMIER_PRODUCTS.thornapple2.primary, secondary: PREMIER_PRODUCTS.thornapple2.secondary }, description: 'Professional-grade 13-foot swim spa.' },
  { id: 4, name: "16' AQUEX TRAINER-Lounger", price: '$33,595.00', images: { primary: PREMIER_PRODUCTS.saginaw2.primary, secondary: PREMIER_PRODUCTS.saginaw2.secondary }, description: 'Full-size 16-foot trainer swim spa.' },
];

// Saunas and Cold Plunges
const SAUNAS = [
  { id: 1, name: 'SaunaLife Model EE8G Sauna Barrel', price: '$10,995.95', images: { primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80', secondary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80' }, description: 'Premium barrel sauna for outdoor use.' },
  { id: 2, name: 'SaunaLife Model EE6G Sauna Barrel', price: '$8,995.95', images: { primary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80', secondary: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80' }, description: 'Compact barrel sauna with quality construction.' },
];

const COLD_PLUNGES = [
  { id: 1, name: 'Endurance Cold Plunge Bundle', price: 'Call for Price', images: { primary: PREMIER_PRODUCTS.swift.primary, secondary: PREMIER_PRODUCTS.swift.secondary }, description: 'Complete cold plunge system with chiller.' },
  { id: 2, name: 'The Resolute Pro', price: 'Call for Price', images: { primary: PREMIER_PRODUCTS.manistee.primary, secondary: PREMIER_PRODUCTS.manistee.secondary }, description: 'Professional-grade cold plunge tub.' },
];

// Tax Special Popup Component
const TaxSpecialPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
        <motion.div initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="bg-[#0A1628] max-w-lg w-full shadow-2xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
          <div className="h-2 bg-[#B91C1C]" />
          <div className="absolute top-12 right-0 w-40 h-40 bg-[#B91C1C]/10 rounded-full blur-3xl" />
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Close popup"><X size={24} /></button>
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
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/50 text-sm mt-6">Limited time offer. Contact us for details.</motion.p>
          </div>
          <div className="h-2 bg-[#B91C1C]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Jingle Player
const JinglePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
      else { audioRef.current.play(); setIsPlaying(true); }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={ASSETS.jingle} loop preload="none" />
      <motion.button data-testid="jingle-toggle-btn" onClick={togglePlay} className="fixed bottom-6 right-6 z-50 bg-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:bg-[#DC2626] transition-all" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }} aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
};

// Navigation
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Hot Tubs', href: '/hot-tubs' },
    { name: 'Swim Spas', href: '/swim-spas' },
    { name: 'Saunas', href: '/saunas' },
    { name: 'Cold Plunges', href: '/cold-plunges' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Financing', href: '/financing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <motion.img src={ASSETS.logo} alt="Upstate Hot Tubs - Made in the USA" className={`object-contain transition-all duration-300 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`} loading="eager" whileHover={{ scale: 1.05 }} />
          </Link>
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${location.pathname === link.href ? 'text-[#B91C1C]' : 'text-[#0A1628]'}`}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden xl:flex items-center gap-3">
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold hover:text-[#B91C1C] text-sm">
              <Phone size={16} /> {CONTACT.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm px-4 py-2">Get a Quote</Link>
          </div>
          <button className="xl:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu" data-testid="mobile-menu-btn">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="xl:hidden overflow-hidden bg-white">
              <div className="py-4 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div key={link.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.05 }}>
                    <Link to={link.href} className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C] hover:bg-slate-50" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-4 border-t">
                  <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold mb-4"><Phone size={18} /> {CONTACT.phone}</a>
                  <Link to="/contact" className="btn-primary block text-center" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

// Hero Section - AMERICAN MADE on top, Logo below
const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" data-testid="hero-section">
    {/* Zoomed Video - autoplay on mobile */}
    <video autoPlay muted loop playsInline webkit-playsinline="true" className="absolute inset-0 w-full h-full object-cover scale-125">
      <source src={ASSETS.heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/40 via-[#0A1628]/30 to-[#0A1628]/70" />
    
    <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {/* AMERICAN MADE on TOP */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-3 mb-6">
          <Flag className="text-[#B91C1C]" size={28} />
          <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">American Made</span>
          <Flag className="text-[#B91C1C]" size={28} />
        </motion.div>
        
        {/* Logo BELOW American Made */}
        <motion.img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-32 md:h-40 mx-auto mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }} />
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
          Start Living Your<br /><span className="text-[#B91C1C]">Healthiest Life</span> Today
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-90">
          The Best Hot Tubs & Swim Spas Store in Naples Florida, Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4" data-testid="hero-browse-btn">
            Browse Hot Tubs <ChevronRight size={20} />
          </Link>
          <Link to="/swim-spas" className="bg-white text-[#0A1628] font-['Barlow_Condensed'] font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center justify-center gap-2 text-lg hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg" data-testid="hero-swim-spas-btn">
            Browse Swim Spas <ChevronRight size={20} />
          </Link>
        </motion.div>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-8 text-lg font-semibold text-[#D4AF37]">
          Ask about Free Hot Tub & Swim Spa Delivery in Florida and SC
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Product Card with SWIPEABLE image gallery - Side view as default
const ProductCard = ({ product, onClick }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [product.images.primary, product.images.secondary];
  const [touchStart, setTouchStart] = useState(null);
  
  const handleTouchStart = (e) => {
    e.stopPropagation();
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStart(null);
  };
  
  return (
    <motion.div whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} className="product-card group cursor-pointer bg-white" onClick={onClick} data-testid={`product-card-${product.id}`}>
      <div className="aspect-square overflow-hidden bg-slate-50 relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.img key={currentImage} src={images[currentImage]} alt={product.name} className="w-full h-full object-contain p-4" loading="lazy" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} onError={(e) => { e.target.src = ASSETS.logo; }} />
        </AnimatePresence>
        {/* Swipe arrows */}
        <button onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev - 1 + images.length) % images.length); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Previous image">
          <ChevronLeft size={20} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev + 1) % images.length); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Next image">
          <ChevronRight size={20} />
        </button>
        {/* Image dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }} className={`w-2 h-2 rounded-full transition-all ${currentImage === idx ? 'bg-[#B91C1C] w-4' : 'bg-slate-300'}`} aria-label={`View image ${idx + 1}`} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-1">{product.name}</h3>
        {product.persons && <p className="text-sm text-slate-500 mb-1">{product.persons}</p>}
        {product.jets && <p className="text-sm text-slate-400">{product.jets} Jets</p>}
        <p className="text-[#B91C1C] font-bold text-lg mt-2">{product.price}</p>
        <motion.button whileHover={{ x: 5 }} className="mt-3 text-sm font-semibold text-[#0A1628] group-hover:text-[#B91C1C] flex items-center gap-1">
          Quick View <ChevronRight size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Product Modal with image gallery
const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!isOpen || !product) return null;
  const images = [product.images.primary, product.images.secondary];
  
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
        <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <div className="flex border-b">
              <button onClick={() => setCurrentImage(0)} className={`flex-1 p-3 font-semibold transition-colors ${currentImage === 0 ? 'bg-[#B91C1C] text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>Side View</button>
              <button onClick={() => setCurrentImage(1)} className={`flex-1 p-3 font-semibold transition-colors ${currentImage === 1 ? 'bg-[#B91C1C] text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>Overhead View</button>
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img key={currentImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={images[currentImage]} alt={product.name} className="w-full h-80 object-contain bg-slate-100 p-4" onError={(e) => { e.target.src = ASSETS.logo; }} />
              </AnimatePresence>
              <button onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white" aria-label="Previous"><ChevronLeft size={24} /></button>
              <button onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white" aria-label="Next"><ChevronRight size={24} /></button>
            </div>
            <button onClick={onClose} className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-lg z-10" aria-label="Close"><X size={20} /></button>
          </div>
          <div className="p-6">
            <h3 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-2">{product.name}</h3>
            {product.persons && <p className="text-slate-500 mb-2">{product.persons} {product.jets && `• ${product.jets} Jets`}</p>}
            <p className="text-[#B91C1C] font-bold text-3xl mb-4">{product.price}</p>
            <p className="text-slate-600 mb-6">{product.description}</p>
            <Link to="/contact" className="btn-primary block text-center" onClick={onClose}>Request Quote</Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Products Grid
const ProductsGrid = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
            <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
          </motion.div>
        ))}
      </div>
      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

// About/Wet Test Section with video - autoplay on mobile
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
          <video autoPlay muted loop playsInline webkit-playsinline="true" className="w-full h-[400px] object-cover shadow-2xl">
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

// Trust Section
const TrustSection = () => (
  <section className="py-16 bg-white border-y border-slate-100" data-testid="trust-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: Shield, title: '5% Discount', desc: 'First Responders & Law Enforcement' },
          { icon: Award, title: 'Military & Veterans', desc: 'Special Discounts Available' },
          { icon: Flag, title: 'American Made', desc: 'All Products Made in USA' },
          { icon: Heart, title: 'Family Owned', desc: 'American and Proud of it!' },
        ].map((item, idx) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <item.icon className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            </motion.div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Logo Banner Section
const LogoBanner = () => (
  <section className="py-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-4 flex justify-center">
      <motion.img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-32 md:h-40" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} />
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
        {[{ name: 'COVER', value: '$850.00 Value' }, { name: 'COVER LIFTER', value: '$299.00 Value' }, { name: 'STEPS', value: '$195.00 Value' }, { name: 'STARTER CHEMICALS', value: '$150.00 Value' }].map((item, idx) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className="bg-white p-6 text-center shadow-lg">
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
    { name: 'Hot Tubs', href: '/hot-tubs', image: PREMIER_PRODUCTS.chariton2.primary },
    { name: 'Swim Spas', href: '/swim-spas', image: PREMIER_PRODUCTS.chesapeake2.primary },
    { name: 'Saunas', href: '/saunas', image: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80' },
    { name: 'Cold Plunges', href: '/cold-plunges', image: PREMIER_PRODUCTS.swift.primary },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-12">Shop By Categories</motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div key={cat.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Link to={cat.href} className="group relative aspect-square overflow-hidden bg-slate-100 block">
                <motion.img src={cat.image} alt={cat.name} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} loading="lazy" onError={(e) => { e.target.src = ASSETS.logo; }} />
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

// Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
      setSubmitted(true);
    } catch (error) { console.error('Form error:', error); }
  };

  if (submitted) {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We've received your message and will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1">Full Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></div>
        <div><label htmlFor="email" className="block text-sm font-semibold text-[#0A1628] mb-1">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label htmlFor="phone" className="block text-sm font-semibold text-[#0A1628] mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
        <div><label htmlFor="interest" className="block text-sm font-semibold text-[#0A1628] mb-1">I'm Interested In</label><select id="interest" name="interest" className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] outline-none bg-white transition-colors" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}><option value="">Select an option</option><option value="hot-tub">Hot Tub</option><option value="swim-spa">Swim Spa</option><option value="sauna">Sauna</option><option value="cold-plunge">Cold Plunge</option><option value="other">Other</option></select></div>
      </div>
      <div><label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1">Message *</label><textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] outline-none resize-none transition-colors" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} /></div>
      <motion.button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-testid="contact-submit"><Send size={18} /> Send Message</motion.button>
    </form>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-[#0A1628] text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-24 mb-6" loading="lazy" />
          <p className="text-slate-400 text-sm leading-relaxed mb-6">Buy American and live your healthiest life and have "A Vacation Everyday"</p>
          <div className="flex gap-3">
            {[{ icon: Instagram, href: SOCIAL_LINKS.instagram }, { icon: Facebook, href: SOCIAL_LINKS.facebook }, { icon: Youtube, href: SOCIAL_LINKS.youtube }].map(({ icon: Icon, href }) => (
              <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors" whileHover={{ scale: 1.1 }}>
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Quick Links</h3>
          <div className="space-y-2">{['Hot Tubs', 'Swim Spas', 'Saunas', 'Cold Plunges', 'About', 'Events', 'Financing'].map(link => <Link key={link} to={`/${link.toLowerCase().replace(' ', '-')}`} className="block text-slate-400 hover:text-white text-sm transition-colors">{link}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Contact Us</h3>
          <div className="space-y-3">
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm"><Phone size={16} className="text-[#B91C1C]" /> {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm"><Mail size={16} className="text-[#B91C1C]" /> {CONTACT.email}</a>
            <div className="flex items-start gap-3 text-slate-300 text-sm"><MapPin size={16} className="text-[#B91C1C] flex-shrink-0 mt-1" /> {CONTACT.address}</div>
            <div className="flex items-center gap-3 text-slate-300 text-sm"><Clock size={16} className="text-[#B91C1C]" /> {CONTACT.hours}</div>
          </div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 gap-1">{CONTACT.serviceAreas.map(area => <span key={area} className="text-slate-400 text-xs">{area}</span>)}</div>
          <Link to="/contact" className="btn-primary inline-block mt-6 text-sm px-4 py-2">Get a Quote</Link>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Upstate Hot Tubs. All Rights Reserved.</p>
        <p className="text-slate-500 text-sm flex items-center gap-2"><Flag size={14} className="text-[#B91C1C]" /> Proudly Made in America</p>
      </div>
    </div>
  </footer>
);

// Page Components
const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('taxPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => { setShowPopup(true); sessionStorage.setItem('taxPopupSeen', 'true'); }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <TaxSpecialPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">Shop Our American Made Hot Tubs</h2>
            <div className="w-24 h-1 bg-[#B91C1C] mx-auto" />
          </motion.div>
          <ProductsGrid products={HOT_TUBS.slice(0, 8)} />
          <div className="text-center mt-8">
            <Link to="/hot-tubs" className="btn-secondary inline-flex items-center gap-2">View All Hot Tubs <ChevronRight size={18} /></Link>
          </div>
        </div>
      </div>
      <IncludedSection />
      <LogoBanner />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-[#0A1628] mb-4">American Made Swim Spas</h2>
            <div className="w-24 h-1 bg-[#B91C1C] mx-auto" />
          </motion.div>
          <ProductsGrid products={SWIM_SPAS} />
        </div>
      </div>
      <CategoriesSection />
    </>
  );
};

const HotTubsPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Shop Our American Made Hot Tubs</motion.h1>
      <p className="text-xl text-slate-600 mb-12">Premium quality hot tubs made in the USA. Swipe to see both views!</p>
      <ProductsGrid products={HOT_TUBS} />
    </div>
  </div>
);

const SwimSpasPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">American Made Swim Spas</motion.h1>
      <p className="text-xl text-slate-600 mb-12">Exercise, swim, and relax in our premium swim spas.</p>
      <ProductsGrid products={SWIM_SPAS} />
    </div>
  </div>
);

const SaunasPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Shop Our Saunas</motion.h1>
      <p className="text-xl text-slate-600 mb-12">RELAX-RENEW-REPEAT - Start living your healthiest life with a sauna!</p>
      <ProductsGrid products={SAUNAS} />
    </div>
  </div>
);

const ColdPlungesPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Cold Plunges</motion.h1>
      <p className="text-xl text-slate-600 mb-12">RELAX-RENEW-REPEAT - See why adding a Cold Plunge will help your health.</p>
      <ProductsGrid products={COLD_PLUNGES} />
    </div>
  </div>
);

// About Page with Grand Opening Image
const AboutPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Grand Opening Hero Image */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <img src={ASSETS.aboutImage} alt="Upstate Hot Tubs Grand Opening" className="w-full h-[400px] object-cover shadow-xl" />
      </motion.div>
      
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-8">Why Dynasty Spas?</motion.h1>
      <p className="text-xl text-slate-600 mb-8">Our 4 Best Reasons to Buy "MADE IN AMERICA" Spas</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: 'American Jobs', text: 'The loss of American family owned manufacturing jobs over the past 15 years has had a staggering effect. Our American made spas ensure Dynasty Spas keeps manufacturing in the United States.' },
          { title: 'Environmental Concerns', text: 'American-Made Spas carry a much smaller carbon footprint than products overseas. Shipping products around the globe comes at a high environmental cost.' },
          { title: 'Quality', text: 'When you see "Made In The USA" sticker on your spa, you know you have good quality. Dynasty Spas has full control of the manufacturing process.' },
          { title: 'Factory Service', text: 'Dynasty spas factory service starts by treating others like they would like to be treated. Returning calls same day, following up, and getting orders out quickly.' },
        ].map((item, idx) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-slate-50 p-8">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">{item.title}</h3>
            <p className="text-slate-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-[#0A1628] text-white p-8 md:p-12">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-6">Dynasty Spas 4 Seasons Of Benefits</h2>
        <p className="text-slate-300 mb-6">Taking a spa is enjoyable all year round, but it's even more so in the winter. There is nothing better than enjoying warm and relaxing water to forget the inconveniences of the cold season.</p>
        <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
          <li>• Heat-Shield RMAX insulation system</li>
          <li>• Multi-Layered fiberglass spa shell</li>
          <li>• Foil faced RMAX Foam Panels</li>
          <li>• Maintenance Free Confer Skirting</li>
          <li>• ABS Permanent Bottom</li>
          <li>• Up to 7 times the R-Value of competing models</li>
        </ul>
      </div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Upstate Hot Tubs Events</motion.h1>
      <p className="text-xl text-slate-600 mb-12">We believe in our community and giving back. 10% discount to First Responders, Law Enforcement, Military and Veterans.</p>
      {[
        { title: '9-11 Reading Of The Names', date: 'September 11, 2025 - 8:15am', desc: '24th Anniversary of 9-11 at Gracely Park, Simpsonville' },
        { title: 'Christmas In July', date: 'July 26, 2025 10am-5pm', desc: '20% off on that day only! Complimentary drinks and cookies.' },
        { title: 'National Night Out', date: 'August 5, 2025 6pm-8pm', desc: 'Join Simpsonville Police & Firefighters at Heritage Park!' },
      ].map((event, idx) => (
        <motion.div key={event.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-slate-50 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-2">{event.title}</h2>
          <p className="text-lg font-semibold text-[#B91C1C] mb-4">{event.date}</p>
          <p className="text-slate-600">{event.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const FinancingPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Financing Your New Hot Tub</motion.h1>
      <p className="text-xl text-slate-600 mb-12">YES, WE OFFER EXCELLENT FINANCING THROUGH TWO COMPANIES.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { name: 'LightStream', href: 'https://www.lightstream.com/hot-tub-financing', desc: 'Hot Tub Financing made simple' },
          { name: 'HFS Financial', href: 'https://www.hfsfinancial.net/promo/681a2e80e67418f6142e1b65/', desc: 'Swimming Pool & Hot Tub Financing' },
        ].map((fin) => (
          <motion.a key={fin.name} href={fin.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white border-2 border-slate-200 p-8 hover:border-[#B91C1C] transition-colors text-center">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">{fin.name}</h3>
            <p className="text-slate-600 mb-4">{fin.desc}</p>
            <span className="text-[#B91C1C] font-semibold">Apply Now →</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Contact Us</motion.h1>
      <p className="text-xl text-slate-600 mb-12">We're here to help! Fill out the form below.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />
        <div>
          <div className="bg-[#0A1628] text-white p-8 mb-8">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><Phone size={20} className="text-[#B91C1C]" /> {CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><Mail size={20} className="text-[#B91C1C]" /> {CONTACT.email}</a>
              <div className="flex items-start gap-3 text-slate-300"><MapPin size={20} className="text-[#B91C1C] flex-shrink-0 mt-1" /> {CONTACT.address}</div>
              <div className="flex items-center gap-3 text-slate-300"><Clock size={20} className="text-[#B91C1C]" /> {CONTACT.hours}</div>
            </div>
          </div>
          <div className="bg-slate-50 p-8">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">{CONTACT.serviceAreas.map(area => <span key={area} className="bg-white px-3 py-1 text-sm text-slate-600 border">{area}</span>)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Scroll to top
const ScrollToTop = () => { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; };

// App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hot-tubs" element={<HotTubsPage />} />
            <Route path="/swim-spas" element={<SwimSpasPage />} />
            <Route path="/saunas" element={<SaunasPage />} />
            <Route path="/cold-plunges" element={<ColdPlungesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <JinglePlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
