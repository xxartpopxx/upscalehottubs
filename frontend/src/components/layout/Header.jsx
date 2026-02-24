import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { ASSETS, CONTACT } from '../../data/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [discoverDropdown, setDiscoverDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
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
    { name: 'Events', href: '/events' },
    { name: 'Financing', href: '/financing' },
    { name: 'Spa Butler Service', href: '/spa-butler' },
  ];

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Discover', href: '#', dropdown: true, links: discoverLinks },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <motion.img 
              src={ASSETS.logo} 
              alt="Upstate Hot Tubs - Made in the USA" 
              className={`object-contain transition-all duration-300 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`} 
              loading="eager" 
              whileHover={{ scale: 1.05 }} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5">
            {/* Home Link */}
            <Link 
              to="/" 
              className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-home-link"
            >
              Home
            </Link>
            
            {/* Shop Links - Direct Navigation */}
            {shopLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${
                  location.pathname === link.href ? 'text-[#B91C1C]' : 'text-[#0A1628]'
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}-link`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Wellness Link */}
            <Link 
              to="/wellness" 
              className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/wellness' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-wellness-link"
            >
              Wellness
            </Link>
            
            {/* Discover Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDiscoverDropdown(true)}
              onMouseLeave={() => setDiscoverDropdown(false)}
            >
              <button 
                className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors flex items-center gap-1 ${
                  discoverLinks.some(l => location.pathname === l.href)
                    ? 'text-[#B91C1C]' 
                    : 'text-[#0A1628]'
                }`}
                data-testid="nav-discover-btn"
              >
                Discover
                <ChevronDown size={14} className={`transition-transform ${discoverDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {discoverDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-slate-100 min-w-[200px] py-2"
                  >
                    {discoverLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={`block px-4 py-2 text-sm font-medium hover:bg-slate-50 hover:text-[#B91C1C] transition-colors ${
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
            
            {/* Contact Link */}
            <Link 
              to="/contact" 
              className={`font-semibold uppercase tracking-wider text-xs hover:text-[#B91C1C] transition-colors ${
                location.pathname === '/contact' ? 'text-[#B91C1C]' : 'text-[#0A1628]'
              }`}
              data-testid="nav-contact-link"
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center gap-3">
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-[#0A1628] font-semibold hover:text-[#B91C1C] text-sm">
              <Phone size={16} /> {CONTACT.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm px-4 py-2" data-testid="nav-get-quote-btn">Get a Quote</Link>
          </div>
          
          <button 
            className="xl:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Menu" 
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
              className="xl:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-1">
                <Link to="/" className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C]" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                {/* Shop Section */}
                <div className="border-t border-slate-100 pt-2">
                  <p className="px-4 py-2 text-xs font-bold uppercase text-slate-400">Shop</p>
                  {shopLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href} 
                      className="block px-6 py-2 font-medium text-[#0A1628] hover:text-[#B91C1C] hover:bg-slate-50" 
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Wellness */}
                <Link to="/wellness" className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C] border-t border-slate-100" onClick={() => setIsOpen(false)}>
                  Wellness
                </Link>
                
                {/* Discover Section */}
                <div className="border-t border-slate-100 pt-2">
                  <p className="px-4 py-2 text-xs font-bold uppercase text-slate-400">Discover</p>
                  {discoverLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href} 
                      className="block px-6 py-2 font-medium text-[#0A1628] hover:text-[#B91C1C] hover:bg-slate-50" 
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Contact */}
                <Link to="/contact" className="block px-4 py-3 font-semibold text-[#0A1628] uppercase tracking-wider hover:text-[#B91C1C] border-t border-slate-100" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                
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

export default Header;
