import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { ASSETS, CONTACT, SOCIAL_LINKS } from '../../data/constants';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)'
    }}>
      {/* Slogan Banner */}
      <div className="border-b border-[#1E40AF]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xl md:text-2xl font-['Barlow_Condensed'] uppercase tracking-wider text-[#0A1628] mb-1">
            Live Your Healthiest Life While Enjoying a Vacation Everyday at Home
          </p>
          <p className="text-[#B91C1C] font-semibold flex items-center justify-center gap-2">
            <span className="text-base">🇺🇸</span> American Made & Proud of It
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img src={ASSETS.transparentLogo} alt="Upstate Hot Tubs" width="200" height="96" className="h-24 mb-6" loading="lazy" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Buy American and start living your{' '}
              <span 
                className="text-[#B91C1C] font-bold"
                style={{ 
                  textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
                }}
              >
                best life
              </span>
              {' '}today! Premium hot tubs, swim spas, saunas and cold plunges.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
                { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 min-w-[44px] min-h-[44px] bg-[#1E40AF] text-white flex items-center justify-center rounded-lg hover:bg-[#B91C1C] transition-colors" 
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6 text-[#0A1628]">Shop</h3>
            <div className="space-y-2">
              {[
                { name: 'Grand River Spas', href: '/grand-river-spas' },
                { name: 'Dynasty Spas', href: '/dynasty-spas' },
                { name: 'Saunas', href: '/saunas' },
                { name: 'Swim Spas', href: '/swim-spas' },
                { name: 'Cold Plunges', href: '/cold-plunges' }
              ].map(link => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="block text-slate-600 hover:text-[#B91C1C] text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mt-6 mb-4 text-[#0A1628]">Discover</h3>
            <div className="space-y-2">
              {['Wellness', 'About', 'Events', 'Financing', 'Spa Butler'].map(link => (
                <Link 
                  key={link} 
                  to={`/${link.toLowerCase().replace(' ', '-')}`} 
                  className="block text-slate-600 hover:text-[#B91C1C] text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6 text-[#0A1628]">Contact Us</h3>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-700 hover:text-[#B91C1C] text-sm">
                <Phone size={16} className="text-[#B91C1C]" /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-700 hover:text-[#B91C1C] text-sm">
                <Mail size={16} className="text-[#B91C1C]" /> {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-slate-700 text-sm">
                <MapPin size={16} className="text-[#B91C1C] flex-shrink-0 mt-1" /> {CONTACT.address}
              </div>
            </div>
            
            {/* Store Hours */}
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mt-6 mb-4 text-[#0A1628]">
              <span className="flex items-center gap-2"><Clock size={18} className="text-[#B91C1C]" /> Hours</span>
            </h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-slate-700">
                <span>Mon-Tue, Thu-Sun</span>
                <span className="font-medium">10am-6pm</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Wednesday</span>
                <span className="font-medium text-[#B91C1C]">10am-8pm</span>
              </div>
              <p className="text-xs text-slate-500 mt-2 italic">
                Call us and we will open when you can come. We will set up apt for you.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6 text-[#0A1628]">Service Areas</h3>
            <div className="grid grid-cols-2 gap-1">
              {CONTACT.serviceAreas.map(area => (
                <span key={area} className="text-slate-600 text-xs">{area}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-primary inline-block mt-6 text-sm px-4 py-2">Get a Quote</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1E40AF]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Upstate Hot Tubs. All Rights Reserved.</p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span className="text-base">🇺🇸</span> Proudly Made in America
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
