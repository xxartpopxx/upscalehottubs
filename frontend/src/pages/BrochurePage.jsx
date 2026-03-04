import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileText, Download, Phone, Send, Flag } from 'lucide-react';
import { CONTACT } from '../data/constants';

const brochures = [
  { name: '2025 Dynasty Full Brochure', file: '/brochures/2025_DYNASTY_FULL_BROCHURE.pdf', category: 'Full Catalog' },
  { name: 'Family Collection', file: '/brochures/FAMILY_COLLECTION_PRODUCT_SHEET.pdf', category: 'Collection' },
  { name: 'Swim Spa Collection', file: '/brochures/SWIM_SPA_COLLECTION_PRODUCT_SHEET.pdf', category: 'Collection' },
  { name: 'Paradise Bay', file: '/brochures/PARADISE_BAY_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Palm Island', file: '/brochures/PALM_ISLAND_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Pleasure Cove', file: '/brochures/PLEASURE_COVE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Coconut Bay', file: '/brochures/COCONUT_BAY_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Caribbean Breeze', file: '/brochures/CARIBBEAN_BREEZE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Nassau Royale', file: '/brochures/NASSAU_ROYALE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Cabana Bay', file: '/brochures/CABANA_BAY_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Ocean Breeze', file: '/brochures/OCEAN_BREEZE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Twin Palms', file: '/brochures/TWIN_PALMS_PRODUCT_SHEET-5ab8b7c0.pdf', category: 'Dynasty Spas' },
  { name: 'Bimini', file: '/brochures/BIMINI_2_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Sunset Cove', file: '/brochures/SUNSET_COVE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Tranquility Harbor', file: '/brochures/TRANQUILITY_HARBOR_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Serenity Cove', file: '/brochures/SERENITY_COVE_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Seaside', file: '/brochures/SEASIDE+PRODUCT+SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Bay Bliss', file: '/brochures/BAY+BLISS+PRODUCT+SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'High Tide', file: '/brochures/HIGH+TIDE+PRODUCT+SHEET.pdf', category: 'Dynasty Spas' },
  { name: 'Treasure Cay', file: '/brochures/TREASURE_CAY_PRODUCT_SHEET.pdf', category: 'Dynasty Spas' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      await fetch('/', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
        body: new URLSearchParams(data).toString() 
      });
      setSubmitted(true);
    } catch (error) { 
      console.error('Form error:', error); 
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-green-50 border border-green-200 p-8 text-center"
      >
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We've received your request and will be in touch soon!</p>
      </motion.div>
    );
  }

  return (
    <form 
      name="brochure-request" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field" 
      onSubmit={handleSubmit} 
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="brochure-request" />
      <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0A1628] mb-1">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1628] mb-1">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors" 
          value={formData.phone} 
          onChange={e => setFormData({...formData, phone: e.target.value})} 
        />
      </div>
      
      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-[#0A1628] mb-1">I'm Interested In</label>
        <select 
          id="interest" 
          name="interest" 
          className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors"
          value={formData.interest}
          onChange={e => setFormData({...formData, interest: e.target.value})}
        >
          <option value="">Select an option</option>
          <option value="hot-tub">Hot Tub</option>
          <option value="swim-spa">Swim Spa</option>
          <option value="sauna">Sauna</option>
          <option value="cold-plunge">Cold Plunge</option>
          <option value="full-catalog">Full Product Catalog</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="3" 
          className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] outline-none transition-colors resize-none" 
          placeholder="Tell us about what you're looking for..."
          value={formData.message} 
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full btn-primary inline-flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Request More Information
      </button>
    </form>
  );
};

const BrochurePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'Full Catalog', 'Collection', 'Dynasty Spas'];
  
  const filteredBrochures = selectedCategory === 'all' 
    ? brochures 
    : brochures.filter(b => b.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Product Brochures | Upstate Hot Tubs</title>
        <meta name="description" content="Download free product brochures for Dynasty Spas hot tubs, swim spas, and more. Get detailed specifications and features." />
      </Helmet>

      <div className="pt-40 pb-20" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)'
      }}>
        {/* Hero */}
        <div className="relative bg-gradient-to-r from-[#0A1628] to-slate-800 text-white py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Flag className="text-[#B91C1C]" size={24} />
                <span className="text-sm font-semibold text-[#B91C1C] uppercase tracking-wider">American Made & Proud of It</span>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-4">
                Product Brochures
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Download detailed product brochures to explore our full lineup of hot tubs, swim spas, and more.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brochures Section */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-[#B91C1C] text-white' 
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'all' ? 'All Brochures' : cat}
                  </button>
                ))}
              </div>

              {/* Brochure Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredBrochures.map((brochure, idx) => (
                  <motion.a
                    key={brochure.name}
                    href={brochure.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white p-4 flex items-center gap-4 hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-[#B91C1C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B91C1C] transition-colors">
                      <FileText className="text-[#B91C1C] group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#0A1628] truncate">{brochure.name}</h3>
                      <p className="text-sm text-slate-500">{brochure.category}</p>
                    </div>
                    <Download className="text-slate-400 group-hover:text-[#B91C1C] transition-colors flex-shrink-0" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-lg sticky top-32">
                <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-2">
                  Request More Information
                </h2>
                <p className="text-slate-600 mb-6 text-sm">
                  Want a printed brochure mailed to you or have questions? Fill out the form below!
                </p>
                
                <ContactForm />

                {/* Phone Contact */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">Or call us directly:</p>
                  <a 
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center gap-2 text-[#B91C1C] font-bold text-lg hover:underline"
                  >
                    <Phone size={20} />
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrochurePage;
