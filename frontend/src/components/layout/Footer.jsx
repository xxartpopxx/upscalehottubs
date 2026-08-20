import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, Youtube, Truck } from 'lucide-react';
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
            <img src={ASSETS.transparentLogo} alt="Upstate Hot Tubs" width="176" height="176" className="h-40 w-auto object-contain mb-6" loading="lazy" />
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
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', isGoogle: false },
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', isGoogle: false },
                { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube', isGoogle: false },
                { icon: null, href: SOCIAL_LINKS.googleBusiness, label: 'Google Reviews', isGoogle: true }
              ].map(({ icon: Icon, href, label, isGoogle }) => (
                <motion.a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${isGoogle ? 'bg-white border border-slate-200 hover:bg-slate-50' : 'bg-[#1E40AF] text-white hover:bg-[#B91C1C]'}`}
                  whileHover={{ scale: 1.1 }}
                  aria-label={isGoogle ? `See us on ${label}` : `Follow us on ${label}`}
                  title={isGoogle ? 'See us on Google · 4.9★' : undefined}
                >
                  {isGoogle ? (
                    <svg width="20" height="20" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                  ) : (
                    <Icon size={18} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6 text-[#0A1628]">Shop</h3>
            <div className="space-y-2">
              {[
                { name: 'Grand River Spas', href: '/grand-river-spas', external: false },
                { name: 'Dynasty Spas', href: '/dynasty-spas', external: false },
                { name: 'Viking Spas', href: '/viking-spas', external: false },
                { name: 'Natural Rock Spas', href: '/natural-rock-spas', external: false },
                { name: 'Saunas', href: '/saunas', external: false },
                { name: 'Swim Spas', href: '/swim-spas', external: false },
                { name: 'Cold Plunges', href: '/cold-plunges', external: false }
              ].map(link => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-600 hover:text-[#B91C1C] text-sm transition-colors"
                  >
                    {link.name} ↗
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="block text-slate-600 hover:text-[#B91C1C] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                )
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
            </div>

            {/* Online-Only Note */}
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mt-6 mb-4 text-[#0A1628]">
              <span className="flex items-center gap-2"><Truck size={18} className="text-[#B91C1C]" /> Online Only · Ships Nationwide</span>
            </h3>
            <div className="text-sm text-slate-700 leading-relaxed" data-testid="footer-online-only">
              <p className="mb-2">
                Upstate Hot Tubs is <span className="font-bold">100% online with factory-direct pricing</span>. Order online or by phone and we ship straight to your door — <span className="font-semibold text-[#0A1628]">anywhere in the country</span>.
              </p>
              <p className="text-slate-600">
                Questions?{' '}
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#B91C1C] hover:underline">
                  Call {CONTACT.phone}
                </a>.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-6 text-[#0A1628]">Nationwide Shipping</h3>
            <div className="grid grid-cols-1 gap-2">
              {CONTACT.serviceAreas.map(area => (
                <span key={area} className="text-slate-600 text-sm flex items-center gap-2"><Truck size={14} className="text-[#B91C1C] flex-shrink-0" /> {area}</span>
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
