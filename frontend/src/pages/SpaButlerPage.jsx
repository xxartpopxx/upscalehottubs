import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import { CONTACT } from '../data/constants';

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
        <p className="text-green-700">We've received your message and will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form 
      name="spa-butler" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field" 
      onSubmit={handleSubmit} 
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="spa-butler" />
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
        <label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          required 
          className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] outline-none resize-none transition-colors" 
          value={formData.message} 
          onChange={e => setFormData({...formData, message: e.target.value})} 
        />
      </div>
      
      <motion.button 
        type="submit" 
        className="btn-primary w-full flex items-center justify-center gap-2" 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
      >
        <Send size={18} /> Send Message
      </motion.button>
    </form>
  );
};

const SpaButlerPage = () => {
  const packages = [
    { 
      name: 'Basic', 
      price: '$75/visit', 
      features: ['Water testing', 'Chemical balancing', 'Filter cleaning', 'Surface wipe down'] 
    },
    { 
      name: 'Standard', 
      price: '$125/visit', 
      features: ['Everything in Basic', 'Jet inspection', 'Cover conditioning', 'Equipment check'] 
    },
    { 
      name: 'Premium', 
      price: '$175/visit', 
      features: ['Everything in Standard', 'Deep cleaning', 'Full diagnostic', 'Priority scheduling'] 
    },
  ];

  return (
    <div className="pt-36 pb-20" data-testid="spa-butler-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Spa Butler
        </motion.h1>
        
        <div className="bg-[#B91C1C] text-white p-6 mb-8">
          <p className="text-xl font-semibold">
            Did you know that 85% of all hot tub service calls and repair bills are related to improper water chemistry?
          </p>
        </div>

        {/* Spa Butler Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
            See Our Spa Butler Service in Action
          </h2>
          <div className="max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls
              className="w-full h-full object-cover"
            >
              <source src="https://customer-assets.emergentagent.com/job_wet-test-preview/artifacts/v0qvpa8s_SPA%20BUTLER.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg text-slate-600 mb-6">
              Our service fee is <strong className="text-[#0A1628]">$175.00 per hour</strong> plus parts. We do charge $175 for service call which is an hour diagnostic fee.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              We understand busy lifestyles and schedules, so let us help take your hot tub water chemistry and preserve the life of your hot tub with regular hot tub maintenance. We are pleased to offer our New Maintenance Packages to save you both time and money and ensure that your investment is protected, whether you already have a hot tub or have purchased a new hot tub from us.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Please check out our packages below and let us know if you need help to determine which hot tub maintenance schedule is right for you.
            </p>
            
            <div className="bg-[#0A1628] text-white p-8">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase mb-4">Always Have Clear And Safe Water</h2>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#D4AF37] mb-6">Call The Spa Butler Today!</h3>
              <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="btn-primary inline-flex items-center gap-2">
                <Phone size={20} /> {CONTACT.phone}
              </a>
            </div>
          </div>
          
          <div>
            <img 
              src="https://static.wixstatic.com/media/5c7c78_5360bbabef8844e784f7ffff55a4cb12~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cleaning%20services%20brochure%20design.jpg" 
              alt="Spa Butler Cleaning Services" 
              className="w-full h-auto shadow-xl mb-6"
              loading="lazy"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://static.wixstatic.com/media/5c7c78_7e5fc46ea2664d66a83b881674b8ade2~mv2.jpg/v1/fill/w_447,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_7e5fc46ea2664d66a83b881674b8ade2~mv2.jpg" 
                alt="Hot Tub Service" 
                className="w-full h-auto shadow-lg"
                loading="lazy"
              />
              <img 
                src="https://static.wixstatic.com/media/5c7c78_9685abf36e9a47debc0a79fc8151d6f1~mv2.jpg/v1/fill/w_447,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20manufacturer%2C%20is%20known%20for%20its%20_reverse%20pull%20neck%20jet.jpg" 
                alt="Dynasty Spas Service" 
                className="w-full h-auto shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Maintenance Packages */}
        <div className="mb-12">
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-8 text-center">Our Maintenance Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div 
                key={pkg.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }} 
                className="bg-white border-2 border-slate-200 p-6 hover:border-[#B91C1C] transition-colors"
              >
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-2">{pkg.name}</h3>
                <p className="text-[#B91C1C] font-bold text-xl mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map(f => (
                    <li key={f} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="text-[#B91C1C]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-slate-50 p-8">
          <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6 text-center">Get a Quote for Spa Butler Service</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaButlerPage;
