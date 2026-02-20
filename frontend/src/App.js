import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, X, Volume2, VolumeX, 
  Instagram, Facebook, Youtube, ChevronRight, Star,
  Clock, Users, Award, Shield, Flag, Heart
} from 'lucide-react';
import './App.css';

// Assets URLs
const ASSETS = {
  logo: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/6h8mdfo5_511646436_122177782610361664_8084525456028207706_n.jpg',
  heroVideo: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/14akq3sp_SnapSave_App_1155304596774970_1080p.mp4',
  jingle: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/80qfrl8e_SnapSave_App_1155304596774970_1080p.mp3',
  photos: {
    photo1: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/8a9qnrwn_untitled%20folder%202.zip',
  }
};

// Product Images from Grand River Spas and Viking Spas
const PRODUCT_IMAGES = {
  hotTubs: {
    saginaw: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1',
    thornapple: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1',
    muskegon: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_2_White_OH.png?lossy=2&strip=1&webp=1',
    sturgeon: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%201-2_Silver_OH.png',
    manistee: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
    heritage: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Elite_Heritage1_Opal_OH-_dropshadow.png',
    tradition: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Elite_Tradition1_White_OH_dropshadow.png',
    apex: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex2_White_OH_121324.png',
  },
  swimSpas: {
    valhalla: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Valhalla_overhead.png',
    asgard: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png',
    odin: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png',
    thor: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png',
  },
  coldPlunge: 'https://vikingspas.com/wp-content/uploads/2024/06/Chill-Therapy_Overhead-600x433-1.jpg',
  sauna: 'https://images.unsplash.com/photo-1612362141890-59bc3be0cfc5?w=600&q=80',
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

// Hot Tub Products Data (Preserving exact content from original site)
const HOT_TUBS = [
  { id: 1, name: 'SAGINAW 2', persons: '6 PERSON', price: '$9,995.00', image: PRODUCT_IMAGES.hotTubs.saginaw, link: 'https://grandriverspas.com/model/saginaw-i/' },
  { id: 2, name: 'SAGINAW 1', persons: '6 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.saginaw, link: 'https://grandriverspas.com/model/saginaw-i/' },
  { id: 3, name: 'THORNAPPLE 2', persons: '7 PERSON', price: '$9,995.00', image: PRODUCT_IMAGES.hotTubs.thornapple, link: 'https://grandriverspas.com/model/thornapple/' },
  { id: 4, name: 'THORNAPPLE 1', persons: '7 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.thornapple, link: 'https://grandriverspas.com/model/thornapple/' },
  { id: 5, name: 'MUSKEGON 2', persons: '6 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.muskegon, link: 'https://grandriverspas.com/model/muskegon/' },
  { id: 6, name: 'STURGEON 1', persons: '6 PERSON', price: '$7,995.00', image: PRODUCT_IMAGES.hotTubs.sturgeon, link: 'https://grandriverspas.com/model/sturgeon/' },
  { id: 7, name: 'MANISTEE ECO', persons: '5 PERSON', price: '$6,599.00', image: PRODUCT_IMAGES.hotTubs.manistee, link: 'https://grandriverspas.com/model/manistee-eco/' },
  { id: 8, name: 'ECO STURGEON', persons: '6 PERSON', price: '$6,599.00', image: PRODUCT_IMAGES.hotTubs.sturgeon, link: 'https://grandriverspas.com/model/sturgeon-eco/' },
];

const SWIM_SPAS = [
  { id: 1, name: "Family Island Oasis Single Lounger", price: '$16,500.00', image: PRODUCT_IMAGES.swimSpas.valhalla, link: 'https://grandriverspas.com/model/valhalla/' },
  { id: 2, name: "13' AQUEX PARTY- BENCH", price: '$24,995.00', image: PRODUCT_IMAGES.swimSpas.asgard, link: 'https://grandriverspas.com/model/asgard/' },
  { id: 3, name: "11\" Family Island Oasis Dual Lounger", price: '$16,500.00', image: PRODUCT_IMAGES.swimSpas.odin, link: 'https://grandriverspas.com/model/odin/' },
  { id: 4, name: "13' AQUEX PRO PLUS", price: '$29,595.00', image: PRODUCT_IMAGES.swimSpas.thor, link: 'https://grandriverspas.com/model/thor/' },
];

const SAUNAS = [
  { id: 1, name: 'SaunaLife Model EE8G Sauna Barrel', price: '$10,995.95', image: PRODUCT_IMAGES.sauna, link: 'https://www.upstatehottubs.com/equipment' },
  { id: 2, name: 'SaunaLife Model EE6G Sauna Barrel', price: '$8,995.95', image: PRODUCT_IMAGES.sauna, link: 'https://www.upstatehottubs.com/equipment' },
  { id: 3, name: 'SaunaLife GL4 Outdoor Sauna Kit', price: '$13,995.95', image: PRODUCT_IMAGES.sauna, link: 'https://www.upstatehottubs.com/equipment' },
];

const COLD_PLUNGES = [
  { id: 1, name: 'Endurance Cold Plunge Bundle', price: 'Call for Price', image: PRODUCT_IMAGES.coldPlunge, link: 'https://www.upstatehottubs.com/coldplunges' },
  { id: 2, name: 'The Resolute Pro', price: 'Call for Price', image: PRODUCT_IMAGES.coldPlunge, link: 'https://www.upstatehottubs.com/coldplunges' },
];

// Jingle Player Component
const JinglePlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      }
    }
  };

  useEffect(() => {
    // Load saved preference
    const savedMuted = localStorage.getItem('jingleMuted');
    if (savedMuted !== null) {
      setIsMuted(savedMuted === 'true');
    }
  }, []);

  useEffect(() => {
    // Save preference
    localStorage.setItem('jingleMuted', isMuted.toString());
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <audio ref={audioRef} src={ASSETS.jingle} loop preload="none" />
      <motion.button
        data-testid="jingle-toggle-btn"
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:bg-[#DC2626] transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? 'Pause jingle' : 'Play jingle'}
        title={isPlaying ? 'Click to pause' : 'Click to play jingle'}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hot Tubs', href: '#hot-tubs' },
    { name: 'Swim Spas', href: '#swim-spas' },
    { name: 'Saunas', href: '#saunas' },
    { name: 'Cold Plunges', href: '#cold-plunges' },
    { name: 'Financing', href: '#financing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center" data-testid="logo-link" aria-label="Upstate Hot Tubs Home">
            <img 
              src={ASSETS.logo} 
              alt="Upstate Hot Tubs - Made in the USA" 
              className="h-16 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-[#0A1628] uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors link-underline"
                data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 text-[#0A1628] font-semibold hover:text-[#B91C1C] transition-colors"
              data-testid="header-phone"
              aria-label={`Call us at ${CONTACT.phone}`}
            >
              <Phone size={18} />
              <span>{CONTACT.phone}</span>
            </a>
            <a 
              href="#contact"
              className="btn-primary"
              data-testid="header-cta"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0A1628]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C] hover:bg-slate-50 transition-colors min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t">
                  <a 
                    href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-[#0A1628] font-semibold mb-4"
                  >
                    <Phone size={18} />
                    <span>{CONTACT.phone}</span>
                  </a>
                  <a href="#contact" className="btn-primary block text-center">
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      data-testid="hero-section"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1713270232684-b63930585172?w=1920&q=80"
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flag className="text-[#B91C1C]" size={28} />
            <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">American Made</span>
            <Flag className="text-[#B91C1C]" size={28} />
          </div>
          
          <h1 className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
            Start Living Your<br />
            <span className="text-[#B91C1C]">Healthiest Life</span> Today
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-90">
            The Best Hot Tubs & Swim Spas Store in Naples Florida, Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#hot-tubs" 
              className="btn-primary inline-flex items-center justify-center gap-2"
              data-testid="hero-browse-btn"
            >
              Browse Hot Tubs <ChevronRight size={20} />
            </a>
            <a 
              href="#swim-spas" 
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-[#0A1628] inline-flex items-center justify-center gap-2"
              data-testid="hero-swim-spas-btn"
            >
              Browse Swim Spas <ChevronRight size={20} />
            </a>
          </div>
          
          <p className="mt-8 text-lg font-semibold text-[#D4AF37]">
            Ask about Free Hot Tub & Swim Spa Delivery in Florida and SC
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

// Wet Test Section
const WetTestSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0A1628] text-white relative overflow-hidden" data-testid="wet-test-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-6">
              WET TEST
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-slate-300">
              Come in today for a "Wet Test" we have robes, towels and slippers! Stop in and try before you buy!
            </p>
            <a 
              href="#hot-tubs" 
              className="btn-primary inline-flex items-center gap-2"
              data-testid="wet-test-cta"
            >
              Shop Now <ChevronRight size={20} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1713270232684-b63930585172?w=800&q=80"
              alt="Wet Test - Try our hot tubs before you buy"
              className="w-full h-[400px] object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#B91C1C] text-white p-6 shadow-xl">
              <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Try Before</p>
              <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">You Buy!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Products Section Component
const ProductsSection = ({ id, title, products, bgColor = 'bg-white' }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 ${bgColor}`}
      aria-labelledby={`${id}-title`}
      data-testid={`${id}-section`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id={`${id}-title`}
            className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
          >
            Shop Our American Made {title}
          </h2>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card group"
              data-testid={`product-card-${product.id}`}
            >
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.persons || ''} Hot Tub`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-1">
                  {product.name}
                </h3>
                {product.persons && (
                  <p className="text-sm text-slate-500 mb-2">{product.persons}</p>
                )}
                <p className="text-[#B91C1C] font-bold text-lg">{product.price}</p>
                <div className="mt-4 flex items-center gap-2 text-[#0A1628] font-semibold text-sm group-hover:text-[#B91C1C] transition-colors">
                  View Details <ChevronRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// What's Included Section
const IncludedSection = () => {
  const items = [
    { name: 'COVER', value: '$850.00 Value', icon: '🛡️' },
    { name: 'COVER LIFTER', value: '$299.00 Value', icon: '🔧' },
    { name: 'STEPS', value: '$195.00 Value', icon: '🪜' },
    { name: 'STARTER CHEMICALS', value: '$150.00 Value', icon: '🧪' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]" data-testid="included-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
            Each Hot Tub Comes With...
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every hot tub needs accessories! We got you covered with our hot tub starter pack!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-2">
                {item.name}
              </h3>
              <p className="text-[#B91C1C] font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-['Barlow_Condensed'] font-bold text-[#0A1628]">
            Also includes delivery, set up, installation, demo and more!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Trust Badges Section
const TrustSection = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">5% Discount</h3>
            <p className="text-sm text-slate-600">First Responders & Law Enforcement</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">Military & Veterans</h3>
            <p className="text-sm text-slate-600">Special Discounts Available</p>
          </div>
          <div className="text-center">
            <Flag className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">American Made</h3>
            <p className="text-sm text-slate-600">All Products Made in USA</p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-[#B91C1C]" />
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628]">Family Owned</h3>
            <p className="text-sm text-slate-600">American and Proud of it!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { name: 'Hot Tubs', href: '#hot-tubs', image: PRODUCT_IMAGES.hotTubs.saginaw },
    { name: 'Swim Spas', href: '#swim-spas', image: PRODUCT_IMAGES.swimSpas.valhalla },
    { name: 'Saunas', href: '#saunas', image: PRODUCT_IMAGES.sauna },
    { name: 'Cold Plunges', href: '#cold-plunges', image: PRODUCT_IMAGES.coldPlunge },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" data-testid="categories-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
            Shop By Categories
          </h2>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.a
              key={cat.name}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-slate-100"
              data-testid={`category-${cat.name.toLowerCase().replace(' ', '-')}`}
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent flex items-end justify-center pb-8">
                <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-white">
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Financing Section
const FinancingSection = () => {
  return (
    <section id="financing" className="py-20 md:py-28 bg-[#F8FAFC]" data-testid="financing-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
            Financing Available
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Make your dream hot tub or swim spa a reality with our flexible financing options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://www.hfsfinancial.net/promo/681a2e80e67418f6142e1b65/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
            data-testid="hfs-financing-link"
          >
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-4">
              HFS Financial
            </h3>
            <p className="text-slate-600 mb-4">Apply for financing through HFS Financial</p>
            <span className="text-[#B91C1C] font-semibold group-hover:underline">Apply Now →</span>
          </motion.a>

          <motion.a
            href="https://www.lightstream.com/hot-tub-financing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
            data-testid="lightstream-financing-link"
          >
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-4">
              LightStream
            </h3>
            <p className="text-slate-600 mb-4">Hot Tub Financing through LightStream</p>
            <span className="text-[#B91C1C] font-semibold group-hover:underline">Learn More →</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A1628] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Logo & Description */}
          <div>
            <img 
              src={ASSETS.logo} 
              alt="Upstate Hot Tubs" 
              className="h-20 mb-6"
              loading="lazy"
            />
            <p className="text-slate-400 leading-relaxed mb-6">
              Buy American and live your healthiest life and have "A Vacation Everyday" Hot Tubs, Swim Spas, Saunas and Cold Plunges. First Responders, Law Enforcement, Military and Veterans discounts. All American Made Products! American and Proud of it!
            </p>
            <div className="flex gap-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
                aria-label="Follow us on Instagram"
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
                aria-label="Follow us on Facebook"
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
                aria-label="Subscribe to our YouTube channel"
                data-testid="social-youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                data-testid="footer-phone"
              >
                <Phone size={20} className="text-[#B91C1C]" />
                <span>{CONTACT.phone}</span>
              </a>
              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                data-testid="footer-email"
              >
                <Mail size={20} className="text-[#B91C1C]" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={20} className="text-[#B91C1C] flex-shrink-0 mt-1" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock size={20} className="text-[#B91C1C]" />
                <span>{CONTACT.hours}</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-6">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {CONTACT.serviceAreas.map((area) => (
                <span key={area} className="text-slate-400 text-sm">{area}</span>
              ))}
            </div>
            <div className="mt-8">
              <a 
                href="#hot-tubs" 
                className="btn-primary inline-block"
                data-testid="footer-cta"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Upstate Hot Tubs. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <Flag size={16} className="text-[#B91C1C]" />
            Proudly Made in America
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WetTestSection />
      <ProductsSection 
        id="hot-tubs" 
        title="Hot Tubs" 
        products={HOT_TUBS}
        bgColor="bg-white"
      />
      <IncludedSection />
      <ProductsSection 
        id="swim-spas" 
        title="Swim Spas" 
        products={SWIM_SPAS}
        bgColor="bg-[#F8FAFC]"
      />
      <CategoriesSection />
      <ProductsSection 
        id="saunas" 
        title="Saunas" 
        products={SAUNAS}
        bgColor="bg-white"
      />
      <ProductsSection 
        id="cold-plunges" 
        title="Cold Plunges" 
        products={COLD_PLUNGES}
        bgColor="bg-[#F8FAFC]"
      />
      <FinancingSection />
    </>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content" role="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <JinglePlayer />
    </div>
  );
}

export default App;
