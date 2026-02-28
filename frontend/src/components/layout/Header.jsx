import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, Search } from 'lucide-react';
import { ASSETS, CONTACT, SOCIAL_LINKS } from '../../data/constants';

// Social Media Icons
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [discoverDropdown, setDiscoverDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setShopDropdown(false);
    setDiscoverDropdown(false);
    setIsOpen(false);
  }, [location.pathname]);

  const shopLinks = [
    { name: 'Grand River Spas', href: '/grand-river-spas' },
    { name: 'Viking Spas', href: '/viking-spas' },
    { name: 'Dynasty Spas', href: '/dynasty-spas' },
    { name: 'Saunas', href: '/saunas' },
    { name: 'Swim Spas', href: '/swim-spas' },
    { name: 'Cold Plunges', href: '/cold-plunges' },
  ];

  const discoverLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Covers', href: '/covers' },
    { name: 'Anatomy of a Spa', href: '/anatomy-of-a-spa' },
    { name: 'Balneotherapy', href: '/balneotherapy' },
    { name: 'Jets', href: '/jets' },
    { name: 'Events', href: '/events' },
    { name: 'Financing', href: '/financing' },
    { name: 'Spa Butler Service', href: '/spa-butler' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-3'}`}>
      {/* Top Bar - Contact Info (Viking Style) */}
      <div className="hidden lg:block bg-[#0A1628] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
            <Phone size={14} /> {CONTACT.phone}
          </a>
          <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo only - no text */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <motion.img 
              src={ASSETS.logo} 
              alt="Upstate Hot Tubs" 
              className={`object-contain transition-all duration-300 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`} 
              loading="eager" 
              whileHover={{ scale: 1.02 }} 
            />
          </Link>
          
          {/* Desktop Navigation - Viking Clean Style */}
          <div className="hidden xl:flex items-center gap-1">
            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <button 
                className={`px-4 py-3 font-semibold uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors flex items-center gap-1 ${
                  shopLinks.some(l => location.pathname === l.href) ? 'text-[#B91C1C]' : 'text-[#0A1628]'
                }`}
                data-testid="nav-shop-btn"
              >
                Shop
                <ChevronDown size={16} className={`transition-transform ${shopDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {shopDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-0 bg-white shadow-xl border border-slate-100 min-w-[220px] py-2"
                  >
                    {shopLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={`block px-5 py-3 text-base font-medium hover:bg-slate-50 hover:text-[#B91C1C] transition-colors ${
                          location.pathname === subLink.href ? 'text-[#B91C1C] bg-slate-50' : 'text-[#0A1628]'
                        }`}
                        data-testid={`nav-${subLink.name.toLowerCase().replace(/\s+/g, '-')}-link`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Discover Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDiscoverDropdown(true)}
              onMouseLeave={() => setDiscoverDropdown(false)}
            >
              <button 
                className={`px-4 py-3 font-semibold uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors flex items-center gap-1 ${
                  discoverLinks.some(l => location.pathname === l.href) ? 'text-[#B91C1C]' : 'text-[#0A1628]'
                }`}
                data-testid="nav-discover-btn"
              >
                Discover
                <ChevronDown size={16} className={`transition-transform ${discoverDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {discoverDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-0 bg-white shadow-xl border border-slate-100 min-w-[220px] py-2"
                  >
                    {discoverLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={`block px-5 py-3 text-base font-medium hover:bg-slate-50 hover:text-[#B91C1C] transition-colors ${
                          location.pathname === subLink.href ? 'text-[#B91C1C] bg-slate-50' : 'text-[#0A1628]'
                        }`}
                        data-testid={`nav-${subLink.name.toLowerCase().replace(/\s+/g, '-')}-link`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Resources Link */}
            <Link 
              to="/wellness" 
              className={`px-4 py-3 font-semibold uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/wellness' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-wellness-link"
            >
              Wellness
            </Link>

            {/* Get a Brochure Link */}
            <Link 
              to="/contact" 
              className={`px-4 py-3 font-semibold uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/contact' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-brochure-link"
            >
              Get a Brochure
            </Link>

            {/* Find a Dealer / Contact Link */}
            <Link 
              to="/contact" 
              className={`px-4 py-3 font-semibold uppercase tracking-wider text-sm hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/contact' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-contact-link"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Right Side - CTA Button */}
          <div className="hidden xl:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-base px-6 py-3" 
              data-testid="nav-get-quote-btn"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-[#0A1628]" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Menu" 
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              className="xl:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-1">
                <Link to="/" className="block px-4 py-3 font-semibold text-[#0A1628] text-lg uppercase tracking-wider hover:text-[#B91C1C]" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                {/* Shop Section */}
                <div className="border-t border-slate-100 pt-2">
                  <p className="px-4 py-2 text-sm font-bold uppercase text-slate-400">Shop</p>
                  {shopLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href} 
                      className="block px-6 py-3 font-medium text-lg text-[#0A1628] hover:text-[#B91C1C] hover:bg-slate-50" 
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Wellness */}
                <Link to="/wellness" className="block px-4 py-3 font-semibold text-[#0A1628] text-lg uppercase tracking-wider hover:text-[#B91C1C] border-t border-slate-100" onClick={() => setIsOpen(false)}>
                  Wellness
                </Link>
                
                {/* Discover Section */}
                <div className="border-t border-slate-100 pt-2">
                  <p className="px-4 py-2 text-sm font-bold uppercase text-slate-400">Discover</p>
                  {discoverLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href} 
                      className="block px-6 py-3 font-medium text-lg text-[#0A1628] hover:text-[#B91C1C] hover:bg-slate-50" 
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Contact */}
                <Link to="/contact" className="block px-4 py-3 font-semibold text-[#0A1628] text-lg uppercase tracking-wider hover:text-[#B91C1C] border-t border-slate-100" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
                
                <div className="px-4 pt-4 border-t">
                  <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold text-lg mb-4">
                    <Phone size={20} /> {CONTACT.phone}
                  </a>
                  <Link to="/contact" className="btn-primary block text-center text-lg" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
