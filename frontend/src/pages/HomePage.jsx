import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ChevronLeft, Shield, Heart, Phone, Mail, X, Star, Truck, Camera, Smartphone, Plus, Sparkles, BookOpen, MapPin, FileText, Users, Droplets, Moon, Activity, ThermometerSun, Award, Gift, Wrench, Tag, PackageCheck, ShoppingBag } from 'lucide-react';
import { ASSETS, CONTACT, ANNOUNCEMENT } from '../data/constants';
import { HOT_TUBS, SWIM_SPAS, COLD_PLUNGES, SAUNAS } from '../data/products';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import WellnessExpertsBanner from '../components/WellnessExpertsBanner';

// Check if mobile for performance optimizations
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

// Disable animations on mobile for better performance
const mobileMotionProps = isMobile ? { initial: false, animate: false, whileInView: false } : {};

// Reusable gradient background style
const gradientBg = {
  background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)'
};

const lightGradientBg = {
  background: 'linear-gradient(180deg, #ffffff 0%, #f0f8fc 30%, #e8f4fc 60%, #dcedf8 100%)'
};

// Sort products by price (least to most expensive)
const sortByPrice = (products) => {
  return [...products].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
};

// Lazy Video Component - Only loads video when in viewport
const LazyVideo = ({ src, poster, className, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video plays on all devices including mobile
  return (
    <div ref={containerRef} className={className}>
      {isInView ? (
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={() => setHasLoaded(true)}
          className="w-full h-full object-contain bg-black"
          {...props}
        >
          <source src={src} type="video/mp4" />
          <track kind="captions" label="English captions" />
        </video>
      ) : (
        <img 
          src={poster} 
          alt="Loading video..." 
          className="w-full h-full object-cover"
          width="400"
          height="300"
        />
      )}
    </div>
  );
};

const ALL_PRODUCTS = [
  ...sortByPrice(HOT_TUBS),
  ...sortByPrice(SWIM_SPAS),
  ...sortByPrice(SAUNAS),
  ...sortByPrice(COLD_PLUNGES),
];

// Full-width Online-Only Announcement Section
const AnnouncementSection = () => (
  <section className="py-10 md:py-14" style={{
    background: 'linear-gradient(135deg, #B91C1C 0%, #7F1D1D 50%, #0A1628 100%)'
  }} data-testid="announcement-section">
    <div className="max-w-5xl mx-auto px-4 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-4">
          <MapPin size={16} className="text-[#D4AF37]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">Announcement</span>
        </div>
        <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4">
          {ANNOUNCEMENT.headline}
        </h2>
        <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 max-w-3xl mx-auto">
          {ANNOUNCEMENT.paragraph}
        </p>
        <p className="text-lg md:text-xl font-semibold text-[#D4AF37] mb-6">
          Questions or ready to order?
        </p>
        <a
          href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
          className="inline-flex items-center gap-2 bg-white text-[#B91C1C] px-8 py-4 font-['Barlow_Condensed'] text-lg md:text-xl font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors rounded-md shadow-lg"
        >
          <Phone size={22} /> Call {CONTACT.phone}
        </a>
      </motion.div>
    </div>
  </section>
);

// How It Works — 3 simple steps
const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingBag,
      title: 'Pick Your Model',
      desc: 'Browse online or call and we\'ll help you choose the right hot tub, swim spa, or sauna for your space and budget.',
    },
    {
      icon: Truck,
      title: 'We Deliver to Your Door',
      desc: 'Your unit ships factory-direct, right to your property — no showroom markup along the way.',
    },
    {
      icon: PackageCheck,
      title: 'We Install &amp; Stand Behind It',
      desc: 'Our own team sets it up, gets it running, walks you through it, and is here for service down the road.',
    },
  ];

  return (
    <section className="py-16 md:py-20" style={lightGradientBg} data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
              <div className="w-6 h-0.5 bg-[#B91C1C]"></div>
              <div className="w-16 h-0.5 bg-[#1E40AF]"></div>
            </div>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-3">
            Buying From Us is <span className="text-[#B91C1C]">Simple</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">Same trusted team, now with online-only savings.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#B91C1C]"
            >
              {/* Step number badge */}
              <div className="absolute -top-5 left-8 bg-[#0A1628] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Barlow_Condensed'] text-xl font-bold shadow-lg">
                {idx + 1}
              </div>
              <div className="mb-4 mt-2">
                <step.icon className="w-12 h-12 text-[#B91C1C]" />
              </div>
              <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-[#0A1628] mb-3">
                {step.title.includes('Install') ? (
                  <>We Install &amp; Stand Behind It</>
                ) : (
                  step.title
                )}
              </h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Short FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      q: 'Do you still have a showroom?',
      a: "Not right now — we're online-only while we set up a new warehouse. That's actually why our prices are lower: no showroom overhead. You can order online or by phone anytime.",
    },
    {
      q: 'Do you really deliver and install, or just ship it?',
      a: 'We deliver and install. Our own crew brings your unit, sets it in place, gets it running, and shows you how everything works.',
    },
    {
      q: 'How is the price lower than before?',
      a: 'No showroom means no retail overhead baked into the price — we pass that straight to you as factory-direct pricing.',
    },
    {
      q: 'What about service and warranty?',
      a: 'Same local team as always. Warranty support, maintenance, and repairs all go through us.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Timing depends on the model you choose. Call us for current lead times on the unit you want.',
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 md:py-20" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 40%, #d0e8f7 100%)'
    }} data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-black uppercase text-[#0A1628] mb-3">
            Common <span className="text-[#B91C1C]">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">Everything you need to know about ordering online.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 md:px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${idx}`}
                >
                  <span className="font-['Barlow_Condensed'] text-lg md:text-xl font-bold text-[#0A1628] uppercase">
                    {faq.q}
                  </span>
                  <ChevronRight
                    size={22}
                    className={`text-[#B91C1C] flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 text-slate-700 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-600 mb-3">Have another question?</p>
          <a
            href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Phone size={20} /> Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A1628] via-[#1a3352] to-[#0A1628]" data-testid="final-cta-section">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
          Ready for <span className="text-[#D4AF37]">Factory-Direct Pricing</span>?
        </h2>
        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl mx-auto">
          Same trusted Upstate Hot Tubs team, now with online-only savings. Get the unit you want — delivered, installed, and serviced by us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/hot-tubs"
            className="bg-[#B91C1C] hover:bg-[#991B1B] text-white inline-flex items-center justify-center gap-2 text-lg font-bold py-4 px-10 uppercase tracking-wider transition-colors rounded-md"
          >
            Shop Now <ChevronRight size={22} />
          </Link>
          <a
            href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
            className="bg-white text-[#0A1628] inline-flex items-center justify-center gap-2 text-lg font-bold py-4 px-10 uppercase tracking-wider hover:bg-slate-100 transition-colors rounded-md"
          >
            <Phone size={20} /> Call {CONTACT.phone}
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Wet test popup removed — showroom closed while transitioning to online-only.
const WetTestPopup = ({ isOpen, onClose }) => null;

// NEW Hero Section - Video without text overlay, text below - Gradient background
const HeroSection = () => (
  <section className="relative pt-28 md:pt-36 lg:pt-44" style={{
    background: 'linear-gradient(180deg, #e8f4fc 0%, #d0e8f7 30%, #b8dcf2 60%, #a0d0ed 100%)',
    backgroundImage: `
      linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,230,250,0.7) 50%, rgba(160,210,240,0.8) 100%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.3' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
  }} data-testid="hero-section">
    {/* Video Section - Uses LazyVideo for performance */}
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        <LazyVideo
          src={ASSETS.heroVideo}
          poster="/images/popup-lady-relaxing-optimized.jpg"
          className="w-full h-full"
          width="896"
          height="504"
        />
      </div>
    </div>
    
    {/* Text Content Below Video - Red White Blue Theme */}
    <div className="py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={isMobile ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} {...mobileMotionProps}>
          {/* American Flags - Static on mobile, animated on desktop */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {isMobile ? (
              <img 
                src="https://flagcdn.com/w80/us.png"
                alt="American Flag"
                width="56"
                height="36"
                loading="eager"
                className="w-14 h-9 object-cover rounded shadow-lg border border-slate-600"
              />
            ) : (
              <motion.div
                animate={{ 
                  rotateY: [0, 10, 0, -10, 0],
                  skewX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                <img 
                  src="https://flagcdn.com/w160/us.png"
                  alt="American Flag"
                  width="80"
                  height="48"
                  loading="eager"
                  className="w-14 h-9 md:w-20 md:h-12 object-cover rounded shadow-lg border border-slate-600"
                />
              </motion.div>
            )}
            <span className="text-lg md:text-2xl font-bold tracking-widest uppercase text-[#0A1628]">American Made & Proud of It</span>
            {isMobile ? (
              <img 
                src="https://flagcdn.com/w80/us.png"
                alt="American Flag"
                width="56"
                height="36"
                loading="eager"
                className="w-14 h-9 object-cover rounded shadow-lg border border-slate-600"
              />
            ) : (
              <motion.div
                animate={{ 
                  rotateY: [0, -10, 0, 10, 0],
                  skewX: [0, -2, 0, 2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                <img 
                  src="https://flagcdn.com/w160/us.png"
                  alt="American Flag"
                  width="80"
                  height="48"
                  loading="eager"
                  className="w-14 h-9 md:w-20 md:h-12 object-cover rounded shadow-lg border border-slate-600"
                />
              </motion.div>
            )}
          </div>
          
          <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            <span className="text-[#0A1628]">Factory-Direct Hot Tubs &amp; Saunas</span>
            <br />
            <span className="whitespace-nowrap">Delivered &amp; Installed by the{' '}
            <span 
              className="text-[#B91C1C]"
              style={{ 
                textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -3px 0 0 #fff, 3px 0 0 #fff, 0 -3px 0 #fff, 0 3px 0 #fff'
              }}
            >
              Team You Trust
            </span></span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-6 max-w-4xl mx-auto text-[#0A1628]/80">
            Now online-only — factory-direct pricing with the same trusted delivery, install &amp; service crew you already know. Serving Simpsonville, Greenville, Mauldin, Five Forks, Greer, Spartanburg and Anderson SC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link to="/hot-tubs" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Shop Hot Tubs &amp; Saunas <ChevronRight size={22} />
            </Link>
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white">
              <Phone size={20} /> Call {CONTACT.phone}
            </a>
          </div>
          
          <p className="text-base md:text-lg font-bold text-[#B91C1C]">
            Locally owned · Online-only savings · Our own delivery &amp; service team
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// Trust Badges Section - White background, compact
const TrustBadgesSection = () => (
  <section className="py-3 border-b border-slate-200" style={lightGradientBg}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center gap-0.5 p-2">
          <Shield className="w-5 h-5 text-[#B91C1C]" />
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">5% Discount</span>
          <span className="text-[10px] text-slate-500">Military & Veterans</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 p-2">
          <span className="text-xl">🇺🇸</span>
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
          <span className="font-['Barlow_Condensed'] text-xs md:text-sm font-bold uppercase text-[#0A1628]">Setup Included</span>
          <span className="text-[10px] text-slate-500">Cover · Steps · Chemicals</span>
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
          We stand behind every hot tub, swim spa, sauna and cold plunge we sell. Our industry-leading warranty gives you peace of mind and confidence.
        </p>
        <p className="text-base md:text-lg text-[#D4AF37] font-semibold mb-8">
          All warranties include parts and labor! We have our own in-house tech!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/dynasty-spas#warranty" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <span className="text-[#D4AF37] font-bold text-lg">Dynasty Spas Warranty →</span>
          </Link>
          <Link to="/grand-river-spas#warranty" className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
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
    <section className="py-12 md:py-16 overflow-hidden" style={gradientBg}>
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
            Installation • Set Up • Cover • Cover Lifter • Steps • Chemicals
          </p>
          <p className="text-sm text-slate-500 mt-2 italic">
            Shipping paid separately by customer · We install at your home once delivered
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
                    width="160"
                    height="160"
                    loading="lazy"
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
            <div className="bg-amber-100 text-[#0A1628] border-2 border-amber-300 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <Truck className="w-6 h-6 text-amber-700" />
              <span className="font-bold">Shipping Paid by Customer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// NEW No Showroom. Lower Prices. Same Service. Section (replaces the old Wet Test section)
const NoShowroomSection = () => (
  <section style={lightGradientBg} data-testid="no-showroom-section">
    <div className="flex flex-col md:flex-row items-stretch">
      {/* Video Side - Full bleed - Uses LazyVideo for performance */}
      <motion.div
        initial={isMobile ? false : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2"
        {...mobileMotionProps}
      >
        <LazyVideo
          src={ASSETS.wetTestVideo}
          poster="/images/popup-lady-relaxing-optimized.jpg"
          className="w-full h-full object-cover"
          width="640"
          height="480"
        />
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={isMobile ? false : { opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2 bg-[#0A1628] text-white p-6 md:p-8 lg:p-10 flex flex-col justify-between"
        {...mobileMotionProps}
      >
        {/* Family Owned + American Made */}
        <div className="flex items-center gap-4 mb-6">
          <img src={ASSETS.oldLogo} alt="Upstate Hot Tubs - Made in USA" width="120" height="120" loading="lazy" className="h-24 md:h-28 lg:h-32 object-contain" />
          <div>
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider">
              <span className="text-white">Family Owned</span>
            </h2>
            <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl lg:text-4xl font-black uppercase">
              <span className="text-[#B91C1C]">American</span>{' '}
              <span className="text-white">Made</span>{' '}
              <span className="text-[#1E40AF]">&amp;</span>{' '}
              <span className="text-[#B91C1C]">Proud</span>{' '}
              <span className="text-white">Of It</span>
            </h3>
          </div>
        </div>

        {/* Main heading */}
        <div className="border-l-4 border-[#B91C1C] pl-5 mb-4">
          <h3 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none mb-1 text-white">
            No Showroom.
          </h3>
          <h3 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none mb-1 text-[#B91C1C]">
            Lower Prices.
          </h3>
          <h3 className="font-['Barlow_Condensed'] text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none text-white">
            Same Service.
          </h3>
        </div>

        <p className="text-lg md:text-xl mb-4 text-white/90 leading-relaxed">
          For years we ran a showroom — and like every showroom, the cost of that building was baked into every price. Now that we&apos;ve gone online-only, that overhead is gone, and we&apos;re handing the savings straight to you.
        </p>

        <p className="text-lg md:text-xl mb-5 text-white/80 leading-relaxed">
          You get true <span className="font-bold text-[#D4AF37]">factory-direct pricing</span> on hot tubs, swim spas, and saunas. But you don&apos;t lose the part that matters most: we still deliver, install, and service everything ourselves.
        </p>

        <ul className="space-y-2 mb-6 text-base md:text-lg lg:text-xl">
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            <span><span className="font-bold text-[#D4AF37]">Factory-direct pricing</span> — no showroom, no retail markup.</span>
          </li>
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            <span><span className="font-bold text-[#D4AF37]">Our own install crew</span> — not a random third-party contractor.</span>
          </li>
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            <span><span className="font-bold text-[#D4AF37]">Real service after the sale</span> — warranty help, maintenance, and repairs from us.</span>
          </li>
          <li className="flex items-start gap-3 text-white/90">
            <div className="w-3 h-3 bg-[#B91C1C] rounded-full flex-shrink-0 mt-2" />
            <span><span className="font-bold text-[#D4AF37]">Talk to a real person</span> — call and get straight answers.</span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3">
          <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="bg-[#B91C1C] hover:bg-[#991B1B] text-white inline-flex items-center gap-2 text-lg md:text-xl font-bold py-3 px-8 uppercase tracking-wider transition-colors">
            <Phone size={20} /> Call {CONTACT.phone}
          </a>
          <Link to="/hot-tubs" className="border-2 border-white/50 hover:border-white text-white inline-flex items-center gap-2 text-lg md:text-xl font-bold py-3 px-8 uppercase tracking-wider transition-colors">
            Shop Now <ChevronRight size={22} />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// WetTestBanner removed — showroom currently unavailable while transitioning to online-only.

// NEW Resource Cards Section (like File 4 - 3 large cards) - Updated with Hot Tub/Sauna Images
const ResourceCardsSection = () => {
  const cards = [
    {
      title: 'Owner Resources',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop',
      link: '/about',
    },
    {
      title: 'Get a Brochure',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      link: '/brochures',
    },
    {
      title: 'Visit Our Showroom',
      image: SAUNAS[0]?.images?.primary || 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2024/06/Valhalla-Overhead-square-1.jpg?lossy=2&strip=1&webp=1',
      link: '/contact',
      hidden: true,
    },
    {
      title: 'Call Our Team',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop',
      link: '/contact',
    },
  ].filter(c => !c.hidden);

  return (
    <section className="py-12" style={lightGradientBg}>
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
                    Learn more about {card.title.toLowerCase()} <ChevronRight size={20} />
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
            Expand Your{' '}
            <span 
              className="text-[#B91C1C]"
              style={{ 
                textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -3px 0 0 #fff, 3px 0 0 #fff, 0 -3px 0 #fff, 0 3px 0 #fff'
              }}
            >
              Wellness Journey
            </span>
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
                    width="400"
                    height="300"
                    loading="lazy"
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
                    Shop {item.name} <ChevronRight size={20} />
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
  <section className="py-16 md:py-20" style={gradientBg}>
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

// NEW Why Hot Tubs Section - Rotating Photo Gallery
// Why a Hot Tub - Side by Side with Rotating Gallery and Text
const WhyHotTubSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Hot tub gallery images - optimized for web
  const galleryImages = [
    { src: '/images/gallery/Caldera-Paradise-Kauai-Hot-Tub-Sterling-Marble-Coastal-Gray-Lifestyle-Couple-007-scaled-opt.jpg', alt: 'Couple enjoying hot tub together' },
    { src: '/images/gallery/Lady-Relaxing_f84cdca3f3fd7df924a9ef2738140c50-opt.jpg', alt: 'Lady relaxing in hot tub' },
    { src: '/images/gallery/Screenshot 2026-02-28 at 1.36.19 PM-opt.jpg', alt: 'Hot tub relaxation' },
    { src: '/images/stress-match.jpg', alt: 'Woman relaxing in hot tub hydrotherapy' },
    { src: '/images/gallery/istockphoto-999140598-612x612-opt.jpg', alt: 'Couple in hot tub' },
    { src: '/images/gallery/pexels-ron-lach-8844607-opt.jpg', alt: 'Hot tub experience' },
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="py-16 md:py-20" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 30%, #d0e8f7 70%, #c0e0f4 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Rotating Gallery Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            {/* Gallery indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Gallery navigation">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  aria-label={`View image ${idx + 1} of ${galleryImages.length}`}
                  aria-selected={idx === currentImageIndex}
                  role="tab"
                  className={`w-3 h-3 rounded-full transition-all min-w-[12px] min-h-[12px] ${
                    idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-start mb-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-[#1E40AF]"></div>
                <div className="w-4 h-0.5 bg-[#B91C1C]"></div>
              </div>
            </div>
            
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-4">
              Why a{' '}
              <span 
                className="text-[#B91C1C]"
                style={{ 
                  textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -3px 0 0 #fff, 3px 0 0 #fff, 0 -3px 0 #fff, 0 3px 0 #fff'
                }}
              >
                Hot Tub
              </span>?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              For centuries, people have celebrated the soothing properties of warm water to ease aches, pains, and stress. A hot tub brings these benefits right to your backyard.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <span className="font-bold text-[#0A1628]">Hydrotherapy</span>
                  <p className="text-sm text-slate-500">Muscle recovery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                  <Moon className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <span className="font-bold text-[#0A1628]">Better Sleep</span>
                  <p className="text-sm text-slate-500">Deeper rest</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <span className="font-bold text-[#0A1628]">Stress Relief</span>
                  <p className="text-sm text-slate-500">Relaxation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <span className="font-bold text-[#0A1628]">Pain Relief</span>
                  <p className="text-sm text-slate-500">Joint flexibility</p>
                </div>
              </div>
            </div>
            
            <Link to="/wellness" className="btn-primary inline-flex items-center gap-2 text-lg">
              Discover All Benefits <ChevronRight size={22} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Keep the old sections for reference but we'll use the combined one
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
  const allProducts = [...HOT_TUBS, ...SWIM_SPAS]
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
          {mixedProducts.slice(0, isMobile ? 6 : 12).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: isMobile ? 0 : Math.min(idx * 0.05, 0.3) }}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
              {...mobileMotionProps}
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
                    width="320"
                    height="320"
                    loading="lazy"
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
                    View {product.name} Details <ChevronRight size={18} />
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
  <section className="py-8" style={lightGradientBg}>
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
  return (
    <>
      <Helmet>
        <title>Factory-Direct Hot Tubs &amp; Saunas in South Carolina | Delivered &amp; Installed | Upstate Hot Tubs</title>
        <meta name="description" content={`Upstate Hot Tubs is now online-only with factory-direct pricing. Hot tubs, swim spas & saunas delivered, installed, and serviced by our own local team. Call ${CONTACT.phone}.`} />
        <meta name="keywords" content="hot tubs, swim spas, saunas, cold plunges, factory direct, online only, American made, Grand River Spas, Dynasty Spas, Greenville SC, Simpsonville SC, Upstate" />
        <meta property="og:title" content="Factory-Direct Hot Tubs &amp; Saunas | Upstate Hot Tubs" />
        <meta property="og:description" content="Now online-only with factory-direct pricing. Same trusted team — we still deliver, install, and service every unit." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.upstatehottubs.com/" />
      </Helmet>
      
      {/* 1. Hero Section - Video */}
      <HeroSection />
      
      {/* 2. Full Online-Only Announcement */}
      <AnnouncementSection />
      
      {/* 3. Trust Badges */}
      <TrustBadgesSection />
      
      {/* 4. Wellness Experts Banner - Health-Focused CTA */}
      <WellnessExpertsBanner variant="full" />
      
      {/* 5. Expand Your Wellness Journey (Hot Tubs, Saunas, Cold Plunges, Swim Spas) */}
      <ProductCollectionSection />
      
      {/* 6. Why a Hot Tub - Side by Side with Image */}
      <WhyHotTubSection />
      
      {/* 7. No Showroom. Lower Prices. Same Service. (replaces old Wet Test section) */}
      <NoShowroomSection />
      
      {/* 8. How It Works - 3 simple steps */}
      <HowItWorksSection />
      
      {/* 9. Shop All Models Carousel */}
      <ShopAllModelsSection />
      
      {/* 10. Best Warranty Section with links */}
      <BestWarrantySection />
      
      {/* 11. Free Items Section */}
      <FreeItemsSection />
      
      {/* 12. The Collection (Grand River & Dynasty) */}
      <LocationCollectionSection />
      
      {/* 13. Product Comparison */}
      <ComparisonSection />
      
      {/* 14. Resource Cards */}
      <ResourceCardsSection />
      
      {/* 15. Google Reviews */}
      <GoogleReviewsSection />
      
      {/* 16. FAQ */}
      <FAQSection />
      
      {/* 17. Final CTA */}
      <FinalCTASection />
      
      {/* 18. AR Visualizer Section */}
      <ARVisualizerSection />
    </>
  );
};

export default HomePage;
