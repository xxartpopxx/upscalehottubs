import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, X, Volume2, VolumeX, 
  Instagram, Facebook, Youtube, ChevronRight, ChevronDown,
  Clock, Users, Award, Shield, Flag, Heart, Send, Calendar,
  Droplets, Thermometer, Sparkles
} from 'lucide-react';
import './App.css';

// New Logo
const NEW_LOGO = 'https://customer-assets.emergentagent.com/job_american-spa-portal/artifacts/agdsrdka_8b31198f-97d1-4e1d-a0ef-9424fb640c06.png';

// Assets URLs
const ASSETS = {
  logo: NEW_LOGO,
  heroVideo: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/14akq3sp_SnapSave_App_1155304596774970_1080p.mp4',
  jingle: 'https://customer-assets.emergentagent.com/job_e23f927f-0a4b-43ea-96db-a0ca9339796e/artifacts/80qfrl8e_SnapSave_App_1155304596774970_1080p.mp3',
};

// Uploaded Photos from zip
const UPLOADED_PHOTOS = {
  photo1: '/images/549423966_122190087680361664_6940928450155468082_n.jpg',
  photo2: '/images/616029302_122208989792361664_1170094744291089665_n.jpg',
  photo3: '/images/627999665_122207451362361664_526416137819124081_n.jpg',
  photo4: '/images/636860647_122208989840361664_652829952830894729_n.jpg',
  photo5: '/images/637118755_122208989906361664_3065198976184159262_n.jpg',
  photo6: '/images/639538295_122208989744361664_7253716961043861419_n.jpg',
  photo7: '/images/5150311025180600675.jpg',
};

// Product Images from Grand River Spas and Viking Spas (NO external links)
const PRODUCT_IMAGES = {
  hotTubs: {
    saginaw: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_OH.png?lossy=2&strip=1&webp=1',
    saginawSide: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Saginaw_2_White_Coastal_Side-768x576.png?lossy=2&strip=1&webp=1',
    thornapple: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple2_White_OH.png?lossy=2&strip=1&webp=1',
    thornappleSide: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Thornapple_1_Opal_Barnwood_Black_Side-768x544.png?lossy=2&strip=1&webp=1',
    muskegon: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon_2_White_OH.png?lossy=2&strip=1&webp=1',
    muskegonSide: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon2_White_CoastalGray_Side-768x499.png?lossy=2&strip=1&webp=1',
    sturgeon: 'https://grandriverspas.com/wp-content/uploads/2025/06/GR_Sturgeon%201-2_Silver_OH.png',
    sturgeonSide: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Sturgeon_1-2_Opal_Walnut_Side-768x538.png?lossy=2&strip=1&webp=1',
    manistee: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Manistee_1_Opal_Walnut_web-768x576.png?lossy=2&strip=1&webp=1',
    chariton: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chariton-2_White-OH_web.png?lossy=2&strip=1&webp=1',
    chesapeake: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Chesapeake-2_White-OH_web.png?lossy=2&strip=1&webp=1',
    heritage: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Elite_Heritage1_Opal_OH-_dropshadow.png',
    heritageSide: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Heritage1_Opal_Stone_side_dropshadow-768x512.png',
    tradition: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Elite_Tradition1_White_OH_dropshadow.png',
    apex: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex2_White_OH_121324.png',
    apexSide: 'https://vikingspas.com/wp-content/uploads/2024/06/VS_2025_Apex1_Opal_Stone_Side-768x512.png',
    ascent: 'https://vikingspas.com/wp-content/uploads/2025/01/VS_2025_Ascent_II_White_OH_Dropshadow_1440px.png',
    royaleX: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RoyalX_White_Overhead-scaled.png',
    regalX: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_RegalX_Opal_Overhead.png',
    elevateX: 'https://vikingspas.com/wp-content/uploads/2025/12/VS_Elite_ElevateX_White_OH-scaled.png',
    regal: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_2025_Regal_White-OH_dropshadow.png',
    royale: 'https://vikingspas.com/wp-content/uploads/2024/07/VS_2025_Royale_Silver-OH_dropshadow-2.png',
    viking: 'https://vikingspas.com/wp-content/uploads/2024/07/Viking-3_White-OH_dropshadow.png',
  },
  swimSpas: {
    valhalla: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Valhalla_overhead.png',
    valhallaSide: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI2-768x512.png',
    asgard: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Asgard_Overhead.png',
    asgardSide: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-2-768x579.png',
    odin: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Odin_overhead.png',
    odinSide: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SWI1-3-768x512.png',
    thor: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor-Overhead.png',
    thorSide: 'https://vikingspas.com/wp-content/uploads/2024/12/VS_SwimSpa_Thor_Corner-View_dropshadow-768x678.png',
  },
  coldPlunge: 'https://vikingspas.com/wp-content/uploads/2024/06/Chill-Therapy_Overhead-600x433-1.jpg',
  coldPlungeSide: 'https://vikingspas.com/wp-content/uploads/2024/07/Chill-Therapy_Corner-View1-600x450-1.jpg',
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

// Complete Hot Tub Products Data (NO external links)
const HOT_TUBS = [
  { id: 1, name: 'SAGINAW 2', persons: '6 PERSON', price: '$9,995.00', image: PRODUCT_IMAGES.hotTubs.saginaw, description: 'Premium 6-person hot tub with advanced jet system and LED lighting.' },
  { id: 2, name: 'SAGINAW 1', persons: '6 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.saginaw, description: 'Comfortable 6-person spa with therapeutic jets.' },
  { id: 3, name: 'THORNAPPLE 2', persons: '7 PERSON', price: '$9,995.00', image: PRODUCT_IMAGES.hotTubs.thornapple, description: 'Spacious 7-person hot tub with lounger seating.' },
  { id: 4, name: 'THORNAPPLE 1', persons: '7 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.thornapple, description: 'Family-size 7-person spa with premium features.' },
  { id: 5, name: 'MUSKEGON 2', persons: '6 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.muskegon, description: 'Versatile 6-person hot tub perfect for relaxation.' },
  { id: 6, name: 'STURGEON 1', persons: '6 PERSON', price: '$7,995.00', image: PRODUCT_IMAGES.hotTubs.sturgeon, description: 'Value-packed 6-person spa with quality construction.' },
  { id: 7, name: 'MANISTEE ECO', persons: '5 PERSON', price: '$6,599.00', image: PRODUCT_IMAGES.hotTubs.manistee, description: 'Energy-efficient 5-person hot tub.' },
  { id: 8, name: 'ECO STURGEON', persons: '6 PERSON', price: '$6,599.00', image: PRODUCT_IMAGES.hotTubs.sturgeon, description: 'Eco-friendly 6-person spa with efficient operation.' },
  { id: 9, name: 'MANISTEE', persons: '5 ADULTS', price: '$6,999.00', image: PRODUCT_IMAGES.hotTubs.manistee, description: 'Comfortable 5-person hot tub for family enjoyment.' },
  { id: 10, name: 'PARADISE BAY III Lounger', persons: '5 PERSON', price: '$13,956.00', image: PRODUCT_IMAGES.hotTubs.heritage, description: 'Luxury lounger spa with premium features.' },
  { id: 11, name: 'PARADISE BAYII-Lounger', persons: '5 PERSON', price: '$12,500.00', image: PRODUCT_IMAGES.hotTubs.heritage, description: 'Premium lounger hot tub for ultimate relaxation.' },
  { id: 12, name: 'TWIN PALMS- Dual Lounger', persons: '3 PERSON', price: '$9,100.00', image: PRODUCT_IMAGES.hotTubs.tradition, description: 'Intimate dual lounger spa perfect for couples.' },
  { id: 13, name: 'CABANA BAY- Lounger', persons: '5 PERSON', price: '$9,600.00', image: PRODUCT_IMAGES.hotTubs.apex, description: 'Resort-style lounger hot tub.' },
  { id: 14, name: 'OCEAN BREEZE- Bench', persons: '7 PERSON', price: '$9,600.00', image: PRODUCT_IMAGES.hotTubs.ascent, description: 'Spacious bench-style spa for gatherings.' },
  { id: 15, name: 'BIMINI Lounger', persons: '2 PERSON', price: '$8,450.00', image: PRODUCT_IMAGES.hotTubs.regal, description: 'Compact 2-person lounger for intimate relaxation.' },
  { id: 16, name: 'TREASURE CAY- Lounger', persons: '5 PERSON', price: '$8,550.00', image: PRODUCT_IMAGES.hotTubs.royale, description: 'Premium 5-person lounger spa.' },
  { id: 17, name: 'SUNSET COVE- Lounger', persons: '3 PERSON', price: '$8,750.00', image: PRODUCT_IMAGES.hotTubs.viking, description: 'Beautiful 3-person lounger hot tub.' },
  { id: 18, name: 'TRANQUILITY HARBOR-Bench', persons: '7 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.royaleX, description: 'Large bench-style spa for family fun.' },
  { id: 19, name: 'SERENITY COVE- Lounger', persons: '5 PERSON', price: '$8,995.00', image: PRODUCT_IMAGES.hotTubs.regalX, description: 'Peaceful lounger spa with therapeutic jets.' },
  { id: 20, name: 'NASSAU ROYAL- LOUNGER', persons: '5 PERSON', price: '$10,500.00', image: PRODUCT_IMAGES.hotTubs.elevateX, description: 'Royal-class lounger with premium amenities.' },
];

const SWIM_SPAS = [
  { id: 1, name: "Family Island Oasis Single Lounger", price: '$16,500.00', image: PRODUCT_IMAGES.swimSpas.valhalla, description: 'Perfect family swim spa with lounger seating.' },
  { id: 2, name: "13' AQUEX PARTY- BENCH", price: '$24,995.00', image: PRODUCT_IMAGES.swimSpas.asgard, description: '13-foot party swim spa with bench seating for entertaining.' },
  { id: 3, name: "11\" Family Island Oasis Dual Lounger", price: '$16,500.00', image: PRODUCT_IMAGES.swimSpas.odin, description: 'Dual lounger swim spa for family exercise and relaxation.' },
  { id: 4, name: "13' AQUEX PRO PLUS", price: '$29,595.00', image: PRODUCT_IMAGES.swimSpas.thor, description: 'Professional-grade 13-foot swim spa.' },
  { id: 5, name: "16' AQUEX TRAINER-Lounger", price: '$33,595.00', image: PRODUCT_IMAGES.swimSpas.valhalla, description: 'Full-size 16-foot trainer swim spa with lounger.' },
  { id: 6, name: "19' AQUEX DUAL PRO- BENCH", price: '$37,995.00', image: PRODUCT_IMAGES.swimSpas.asgard, description: 'Ultimate 19-foot dual swim spa.' },
  { id: 7, name: "17' AQUEX PRO PLUS - LOUNGER", price: '$34,995.00', image: PRODUCT_IMAGES.swimSpas.thor, description: '17-foot pro swim spa with lounger configuration.' },
];

const SAUNAS = [
  { id: 1, name: 'SaunaLife Model EE8G Sauna Barrel', price: '$10,995.95', image: PRODUCT_IMAGES.sauna, description: 'Premium barrel sauna for outdoor use.' },
  { id: 2, name: 'SaunaLife Model EE6G Sauna Barrel', price: '$8,995.95', image: PRODUCT_IMAGES.sauna, description: 'Compact barrel sauna with quality construction.' },
  { id: 3, name: 'SaunaLife GL4 Outdoor Sauna Kit', price: '$13,995.95', image: PRODUCT_IMAGES.sauna, description: 'Complete outdoor sauna kit for DIY installation.' },
  { id: 4, name: 'SaunaLife Model CL3G', price: '$5,995.95', image: PRODUCT_IMAGES.sauna, description: 'Entry-level cabin sauna for home use.' },
  { id: 5, name: 'SaunaLife Model G6 Pre-Assembled', price: '$34,995.95', image: PRODUCT_IMAGES.sauna, description: 'Premium pre-assembled outdoor home sauna.' },
  { id: 6, name: 'SaunaLife Model CL7G', price: '$11,995.95', image: PRODUCT_IMAGES.sauna, description: 'Spacious cabin sauna for multiple users.' },
];

const COLD_PLUNGES = [
  { id: 1, name: 'Endurance Cold Plunge Bundle', price: 'Call for Price', image: PRODUCT_IMAGES.coldPlunge, description: 'Complete cold plunge system with chiller.' },
  { id: 2, name: 'The Resolute Pro', price: 'Call for Price', image: PRODUCT_IMAGES.coldPlungeSide, description: 'Professional-grade cold plunge tub.' },
  { id: 3, name: 'Chill Therapy Cold Plunge', price: 'Call for Price', image: PRODUCT_IMAGES.coldPlunge, description: 'Therapeutic cold immersion system.' },
];

const CHEMICALS = [
  { id: 1, name: 'Defoamer', price: '$14.95', description: 'Eliminates foam quickly' },
  { id: 2, name: 'Water Clarifier', price: '$12.95', description: 'Crystal clear water' },
  { id: 3, name: 'Stain and Scale Control', price: '$24.95', description: 'Prevents buildup' },
  { id: 4, name: 'Spa Shock', price: '$29.95', description: 'Deep water treatment' },
  { id: 5, name: 'Ph Decreaser', price: '$10.95', description: 'Lowers pH levels' },
  { id: 6, name: 'Ph Increaser', price: '$9.95', description: 'Raises pH levels' },
  { id: 7, name: 'Chlorine Concentrate', price: '$29.95', description: 'Sanitizer' },
  { id: 8, name: 'Brominating Concentrate', price: '$29.95', description: 'Alternative sanitizer' },
  { id: 9, name: 'Aqua Chec 7 Test Strips', price: '$29.95', description: '7-way testing' },
  { id: 10, name: 'Alkalinity Increaser', price: '$12.95', description: 'Balance water chemistry' },
  { id: 11, name: 'Calcium Hardness Increaser', price: '$7.95', description: 'Prevents corrosion' },
];

const COVERS = [
  { id: 1, name: 'Cover Lifter - Pivot Top Mount', price: '$249.95', description: 'Easy off and easy on cover lifter with reinforced brackets and towel rack.' },
  { id: 2, name: 'Heavy-Duty Cover Lifter', price: '$279.95', description: 'No-drill spa cover lift for 6\'-8\' hot tubs with adjustable height arm.' },
  { id: 3, name: 'Automatic ConvertALift VacuSeal', price: '$4,999.00', description: 'Ultimate automatic hot tub cover lifter system with VacuSeal technology. Installed.' },
];

// Jingle Player Component
const JinglePlayer = () => {
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
      }
    }
  };

  useEffect(() => {
    const savedPlaying = localStorage.getItem('jinglePlaying');
    if (savedPlaying === 'true' && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jinglePlaying', isPlaying.toString());
  }, [isPlaying]);

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
    { name: 'Chemicals', href: '/chemicals' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Events', href: '/events' },
    { name: 'Financing', href: '/financing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <img src={ASSETS.logo} alt="Upstate Hot Tubs - Made in the USA" className="h-16 w-auto object-contain" loading="eager" />
          </Link>

          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${location.pathname === link.href ? 'text-[#B91C1C]' : 'text-[#0A1628]'}`}
                data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold hover:text-[#B91C1C] text-sm" data-testid="header-phone">
              <Phone size={16} /> {CONTACT.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm px-4 py-2" data-testid="header-cta">Get a Quote</Link>
          </div>

          <button className="xl:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} data-testid="mobile-menu-btn">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="xl:hidden overflow-hidden bg-white">
              <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C] hover:bg-slate-50" onClick={() => setIsOpen(false)} data-testid={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}>
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t">
                  <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold mb-4">
                    <Phone size={18} /> {CONTACT.phone}
                  </a>
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

// Hero Section
const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" data-testid="hero-section">
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src={ASSETS.heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 video-overlay" />
    <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flag className="text-[#B91C1C]" size={28} />
          <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">American Made</span>
          <Flag className="text-[#B91C1C]" size={28} />
        </div>
        <h1 className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6">
          Start Living Your<br /><span className="text-[#B91C1C]">Healthiest Life</span> Today
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-90">
          The Best Hot Tubs & Swim Spas Store in Naples Florida, Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2" data-testid="hero-browse-btn">
            Browse Hot Tubs <ChevronRight size={20} />
          </Link>
          <Link to="/swim-spas" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-[#0A1628] inline-flex items-center justify-center gap-2" data-testid="hero-swim-spas-btn">
            Browse Swim Spas <ChevronRight size={20} />
          </Link>
        </div>
        <p className="mt-8 text-lg font-semibold text-[#D4AF37]">Ask about Free Hot Tub & Swim Spa Delivery in Florida and SC</p>
      </motion.div>
    </div>
  </section>
);

// Product Modal for Quick View
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;
  
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain bg-slate-100 p-4" />
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/90 p-2 rounded-full" aria-label="Close"><X size={20} /></button>
          </div>
          <div className="p-6">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-2">{product.name}</h3>
            {product.persons && <p className="text-slate-500 mb-2">{product.persons}</p>}
            <p className="text-[#B91C1C] font-bold text-2xl mb-4">{product.price}</p>
            <p className="text-slate-600 mb-6">{product.description}</p>
            <Link to="/contact" className="btn-primary block text-center" onClick={onClose}>Request Quote</Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Products Grid Component
const ProductsGrid = ({ products, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="product-card group cursor-pointer" onClick={() => setSelectedProduct(product)} data-testid={`product-card-${product.id}`}>
            <div className="aspect-square overflow-hidden bg-slate-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-1">{product.name}</h3>
              {product.persons && <p className="text-sm text-slate-500 mb-1">{product.persons}</p>}
              <p className="text-[#B91C1C] font-bold">{product.price}</p>
              <button className="mt-3 text-sm font-semibold text-[#0A1628] group-hover:text-[#B91C1C] flex items-center gap-1">Quick View <ChevronRight size={14} /></button>
            </div>
          </motion.div>
        ))}
      </div>
      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Netlify Forms compatible submission
    const form = e.target;
    const data = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We've received your message and will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0A1628] mb-1">Email *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1628] mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-[#0A1628] mb-1">I'm Interested In</label>
          <select id="interest" name="interest" className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none bg-white" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
            <option value="">Select an option</option>
            <option value="hot-tub">Hot Tub</option>
            <option value="swim-spa">Swim Spa</option>
            <option value="sauna">Sauna</option>
            <option value="cold-plunge">Cold Plunge</option>
            <option value="chemicals">Chemicals</option>
            <option value="service">Service/Repair</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1">Message *</label>
        <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
      </div>
      
      <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" data-testid="contact-submit">
        <Send size={18} /> Send Message
      </button>
    </form>
  );
};

// Testimonials Data
const TESTIMONIALS = [
  { name: 'Dr. Lois Bolin', text: 'Great service with quality products - made in the USA. We love the support they show for Veterans and 1st responders. Always ready to answer any questions. Recommend them highly!' },
  { name: 'John Albright', text: 'Mike was awesome to work with!! Best prices and customer service around!!' },
  { name: 'Maria', text: 'We recently purchased this hot tub, and it has completely exceeded our expectations. The build quality is excellent, with durable materials that looks fantastic.' },
  { name: 'Dan', text: 'I was so glad to hear that a Hot Tub store opened in Simpsonville, SC. They made the purchasing process so easy for my wife and me. I like that the Hot Tubs are made in the U.S.A.' },
  { name: 'Kathi Meo', text: 'We live in Naples, FL and are a military family and had the best experience with Upstate Hot Tubs. They gave us a discount due to our son being in the US Army.' },
  { name: 'Bridget Medeiros', text: 'Mike and his team are wonderful to work with and made the purchase of my hot tub not only easy but enjoyable! I highly recommend Mike and Upstate Hot Tubs - I\'m a customer for life!' },
];

// Gallery Section with uploaded photos
const GallerySection = () => (
  <section className="py-16 bg-[#F8FAFC]" data-testid="gallery-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase text-center text-[#0A1628] mb-12">Our Store & Community</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.values(UPLOADED_PHOTOS).map((photo, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="aspect-square overflow-hidden">
            <img src={photo} alt={`Upstate Hot Tubs Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Trust Section
const TrustSection = () => (
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

// Wet Test Section
const WetTestSection = () => (
  <section className="py-20 bg-[#0A1628] text-white" data-testid="wet-test-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-6">WET TEST</h2>
          <p className="text-xl leading-relaxed mb-8 text-slate-300">Come in today for a "Wet Test" we have robes, towels and slippers! Stop in and try before you buy!</p>
          <Link to="/hot-tubs" className="btn-primary inline-flex items-center gap-2">Shop Now <ChevronRight size={20} /></Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <img src={UPLOADED_PHOTOS.photo1} alt="Wet Test Experience" className="w-full h-[400px] object-cover shadow-2xl" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 bg-[#B91C1C] text-white p-6 shadow-xl">
            <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Try Before</p>
            <p className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">You Buy!</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Included Section
const IncludedSection = () => (
  <section className="py-20 bg-[#F8FAFC]" data-testid="included-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-4">Each Hot Tub Comes With...</h2>
      <p className="text-xl text-slate-600 text-center mb-12">Every hot tub needs accessories! We got you covered with our hot tub starter pack!</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[{ name: 'COVER', value: '$850.00 Value' }, { name: 'COVER LIFTER', value: '$299.00 Value' }, { name: 'STEPS', value: '$195.00 Value' }, { name: 'STARTER CHEMICALS', value: '$150.00 Value' }].map((item, idx) => (
          <div key={item.name} className="bg-white p-6 text-center shadow-lg">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-2">{item.name}</h3>
            <p className="text-[#B91C1C] font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
      <p className="text-2xl font-['Barlow_Condensed'] font-bold text-center text-[#0A1628]">Also includes delivery, set up, installation, demo and more!</p>
    </div>
  </section>
);

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { name: 'Hot Tubs', href: '/hot-tubs', image: PRODUCT_IMAGES.hotTubs.saginaw },
    { name: 'Swim Spas', href: '/swim-spas', image: PRODUCT_IMAGES.swimSpas.valhalla },
    { name: 'Saunas', href: '/saunas', image: PRODUCT_IMAGES.sauna },
    { name: 'Cold Plunges', href: '/cold-plunges', image: PRODUCT_IMAGES.coldPlunge },
    { name: 'Chemicals', href: '/chemicals', image: UPLOADED_PHOTOS.photo5 },
  ];

  return (
    <section className="py-20 bg-white" data-testid="categories-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-12">Shop By Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.href} className="group relative aspect-square overflow-hidden bg-slate-100">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent flex items-end justify-center pb-6">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-20 bg-white" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase text-center text-[#0A1628] mb-12">What Our Customers Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.slice(0, 6).map((t, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-slate-50 p-6">
            <p className="text-slate-600 mb-4 italic">"{t.text}"</p>
            <p className="font-bold text-[#0A1628]">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[#0A1628] text-white" data-testid="footer">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-20 mb-6" loading="lazy" />
          <p className="text-slate-400 text-sm leading-relaxed mb-6">Buy American and live your healthiest life and have "A Vacation Everyday" Hot Tubs, Swim Spas, Saunas and Cold Plunges.</p>
          <div className="flex gap-3">
            {[{ icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' }, { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' }, { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' }].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors" aria-label={label} data-testid={`social-${label.toLowerCase()}`}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Quick Links</h3>
          <div className="space-y-2">
            {['Hot Tubs', 'Swim Spas', 'Saunas', 'Cold Plunges', 'Chemicals', 'Events', 'Financing'].map(link => (
              <Link key={link} to={`/${link.toLowerCase().replace(' ', '-')}`} className="block text-slate-400 hover:text-white text-sm">{link}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Contact Us</h3>
          <div className="space-y-3">
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm" data-testid="footer-phone">
              <Phone size={16} className="text-[#B91C1C]" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm" data-testid="footer-email">
              <Mail size={16} className="text-[#B91C1C]" /> {CONTACT.email}
            </a>
            <div className="flex items-start gap-3 text-slate-300 text-sm">
              <MapPin size={16} className="text-[#B91C1C] flex-shrink-0 mt-1" /> {CONTACT.address}
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <Clock size={16} className="text-[#B91C1C]" /> {CONTACT.hours}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 gap-1">
            {CONTACT.serviceAreas.map(area => <span key={area} className="text-slate-400 text-xs">{area}</span>)}
          </div>
          <Link to="/contact" className="btn-primary inline-block mt-6 text-sm px-4 py-2" data-testid="footer-cta">Get a Quote</Link>
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
const HomePage = () => (
  <>
    <HeroSection />
    <TrustSection />
    <WetTestSection />
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-4">Shop Our American Made Hot Tubs</h2>
        <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-12" />
        <ProductsGrid products={HOT_TUBS.slice(0, 8)} title="Hot Tubs" />
        <div className="text-center mt-8">
          <Link to="/hot-tubs" className="btn-secondary inline-flex items-center gap-2">View All Hot Tubs <ChevronRight size={18} /></Link>
        </div>
      </div>
    </div>
    <IncludedSection />
    <div className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center text-[#0A1628] mb-4">American Made Swim Spas</h2>
        <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-12" />
        <ProductsGrid products={SWIM_SPAS.slice(0, 4)} title="Swim Spas" />
        <div className="text-center mt-8">
          <Link to="/swim-spas" className="btn-secondary inline-flex items-center gap-2">View All Swim Spas <ChevronRight size={18} /></Link>
        </div>
      </div>
    </div>
    <CategoriesSection />
    <GallerySection />
    <TestimonialsSection />
  </>
);

const HotTubsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Shop Our American Made Hot Tubs</h1>
      <p className="text-xl text-slate-600 mb-12">Premium quality hot tubs made in the USA. Find your perfect spa today!</p>
      <ProductsGrid products={HOT_TUBS} title="Hot Tubs" />
    </div>
  </div>
);

const SwimSpasPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">American Made Swim Spas</h1>
      <p className="text-xl text-slate-600 mb-12">Exercise, swim, and relax in our premium swim spas.</p>
      <ProductsGrid products={SWIM_SPAS} title="Swim Spas" />
    </div>
  </div>
);

const SaunasPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Shop Our Saunas</h1>
      <p className="text-xl text-slate-600 mb-4">RELAX-RENEW-REPEAT</p>
      <p className="text-lg text-slate-600 mb-12">Start living your healthiest life today with your new indoor or outdoor sauna. See why it's Sauna Time!</p>
      <ProductsGrid products={SAUNAS} title="Saunas" />
    </div>
  </div>
);

const ColdPlungesPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Shop Our Cold Plunges</h1>
      <p className="text-xl text-slate-600 mb-4">RELAX-RENEW-REPEAT</p>
      <p className="text-lg text-slate-600 mb-12">Start living your healthiest life today with your Cold Plunge. See why adding a Cold Plunge will help your health.</p>
      <ProductsGrid products={COLD_PLUNGES} title="Cold Plunges" />
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">Can Ice Baths Improve Your Skin?</h3>
          <p className="text-slate-600">Discover the beauty benefits of cold water immersion therapy.</p>
        </div>
        <div className="bg-slate-50 p-8">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">Should You Ice Bath Before or After a Workout?</h3>
          <p className="text-slate-600">Learn the optimal timing for recovery with cold plunge therapy.</p>
        </div>
      </div>
    </div>
  </div>
);

const ChemicalsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Hot Tub Chemicals</h1>
      <p className="text-xl text-slate-600 mb-12">Keep your spa water crystal clear with our quality chemicals.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CHEMICALS.map((chem) => (
          <div key={chem.id} className="bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] mb-2">{chem.name}</h3>
            <p className="text-sm text-slate-500 mb-2">{chem.description}</p>
            <p className="text-[#B91C1C] font-bold">{chem.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AccessoriesPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Spa Accessories</h1>
      <p className="text-xl text-slate-600 mb-12">Covers and accessories to protect and enhance your spa experience.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {COVERS.map((cover) => (
          <div key={cover.id} className="bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{cover.name}</h3>
            <p className="text-slate-600 mb-4">{cover.description}</p>
            <p className="text-[#B91C1C] font-bold text-xl">{cover.price}</p>
            <Link to="/contact" className="btn-primary block text-center mt-4 text-sm">Request Quote</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Upstate Hot Tubs Events</h1>
      <p className="text-xl text-slate-600 mb-12">Here at Upstate Hot Tubs we believe in our community and giving back. We offer a 10% discount to First Responders, Law Enforcement, Military and Veterans.</p>
      
      <div className="bg-slate-50 p-8 mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">9-11 Reading Of The Names</h2>
        <p className="text-lg font-semibold text-[#B91C1C] mb-4">September 11, 2025 - 8:15am</p>
        <p className="text-slate-600 mb-4">24th Anniversary Of 9-11 "Reading Of The Names" at Gracely Park, 406 E. Curtis St, Simpsonville</p>
        <p className="text-slate-600">Join us for a memorial to honor those lost. Free coffee, donuts, and American flags provided.</p>
      </div>
      
      <div className="bg-slate-50 p-8 mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">Christmas In July</h2>
        <p className="text-lg font-semibold text-[#B91C1C] mb-4">July 26, 2025 10am-5pm</p>
        <p className="text-slate-600">Enjoy 20% off on that day only! Complimentary drinks and cookies. Visit us at 1004 West Georgia Rd., Simpsonville</p>
      </div>
      
      <div className="bg-slate-50 p-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">National Night Out</h2>
        <p className="text-lg font-semibold text-[#B91C1C] mb-4">August 5, 2025 6pm-8pm - Heritage Park</p>
        <p className="text-slate-600">Join Simpsonville Police & Firefighters at our Annual National Night Out!</p>
      </div>
    </div>
  </div>
);

const FinancingPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Financing Your New Hot Tub</h1>
      <p className="text-xl text-slate-600 mb-12">YES, WE OFFER EXCELLENT FINANCING THROUGH TWO COMPANIES.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <a href="https://www.lightstream.com/hot-tub-financing" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 p-8 hover:border-[#B91C1C] transition-colors text-center">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">LightStream</h3>
          <p className="text-slate-600 mb-4">Hot Tub Financing made simple</p>
          <span className="text-[#B91C1C] font-semibold">Apply Now →</span>
        </a>
        <a href="https://www.hfsfinancial.net/promo/681a2e80e67418f6142e1b65/" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 p-8 hover:border-[#B91C1C] transition-colors text-center">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">HFS Financial</h3>
          <p className="text-slate-600 mb-4">Swimming Pool & Hot Tub Financing</p>
          <span className="text-[#B91C1C] font-semibold">Apply Now →</span>
        </a>
      </div>
      
      <TestimonialsSection />
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">Contact Us</h1>
      <p className="text-xl text-slate-600 mb-12">We're here to help! Fill out the form below and we'll get back to you shortly.</p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>
        <div>
          <div className="bg-[#0A1628] text-white p-8 mb-8">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                <Phone size={20} className="text-[#B91C1C]" /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                <Mail size={20} className="text-[#B91C1C]" /> {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={20} className="text-[#B91C1C] flex-shrink-0 mt-1" /> {CONTACT.address}
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock size={20} className="text-[#B91C1C]" /> {CONTACT.hours}
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {CONTACT.serviceAreas.map(area => <span key={area} className="bg-white px-3 py-1 text-sm text-slate-600 border">{area}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Main App
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
            <Route path="/chemicals" element={<ChemicalsPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
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
