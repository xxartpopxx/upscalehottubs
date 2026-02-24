import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Flag } from 'lucide-react';
import { ASSETS, CONTACT, SOCIAL_LINKS } from '../../data/constants';

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Slogan Banner */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xl md:text-2xl font-['Barlow_Condensed'] uppercase tracking-wider text-white mb-1">
            Live Your Healthiest Life While Enjoying a Vacation Everyday at Home
          </p>
          <p className="text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
            <Flag size={14} className="text-[#B91C1C]" /> American Made & Proud of It
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img src={ASSETS.logo} alt="Upstate Hot Tubs" className="h-24 mb-6" loading="lazy" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Buy American and start living your best life today! Premium hot tubs, swim spas, saunas and cold plunges.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: SOCIAL_LINKS.instagram },
                { icon: Facebook, href: SOCIAL_LINKS.facebook },
                { icon: Youtube, href: SOCIAL_LINKS.youtube }
              ].map(({ icon: Icon, href }) => (
                <motion.a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B91C1C] transition-colors" 
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Shop</h3>
            <div className="space-y-2">
              {[
                { name: 'Grand River Spas', href: '/grand-river-spas' },
                { name: 'Viking Spas', href: '/viking-spas' },
                { name: 'Saunas', href: '/saunas' },
                { name: 'Swim Spas', href: '/swim-spas' },
                { name: 'Cold Plunges', href: '/cold-plunges' }
              ].map(link => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mt-6 mb-4">Discover</h3>
            <div className="space-y-2">
              {['Wellness', 'About', 'Events', 'Financing', 'Spa Butler'].map(link => (
                <Link 
                  key={link} 
                  to={`/${link.toLowerCase().replace(' ', '-')}`} 
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6">Contact Us</h3>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm">
                <Phone size={16} className="text-[#B91C1C]" /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white text-sm">
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
              {CONTACT.serviceAreas.map(area => (
                <span key={area} className="text-slate-400 text-xs">{area}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-primary inline-block mt-6 text-sm px-4 py-2">Get a Quote</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Upstate Hot Tubs. All Rights Reserved.</p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <Flag size={14} className="text-[#B91C1C]" /> Proudly Made in America
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
