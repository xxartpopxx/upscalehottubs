import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Truck, Wrench, Tag } from 'lucide-react';
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
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field" 
      onSubmit={handleSubmit} 
      className="space-y-4" 
      data-testid="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#EA6A1E] focus:ring-1 focus:ring-[#EA6A1E] outline-none transition-colors" 
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
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#EA6A1E] focus:ring-1 focus:ring-[#EA6A1E] outline-none transition-colors" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1628] mb-1">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#EA6A1E] focus:ring-1 focus:ring-[#EA6A1E] outline-none transition-colors" 
            value={formData.phone} 
            onChange={e => setFormData({...formData, phone: e.target.value})} 
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-[#0A1628] mb-1">I'm Interested In</label>
          <select 
            id="interest" 
            name="interest" 
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#EA6A1E] outline-none bg-white transition-colors" 
            value={formData.interest} 
            onChange={e => setFormData({...formData, interest: e.target.value})}
          >
            <option value="">Select an option</option>
            <option value="hot-tub">Hot Tub</option>
            <option value="swim-spa">Swim Spa</option>
            <option value="sauna">Sauna</option>
            <option value="cold-plunge">Cold Plunge</option>
            <option value="wet-test">Wet Test</option>
            <option value="service-call">Service Call</option>
            <option value="chemicals">Chemicals</option>
            <option value="accessories">Accessories</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          required 
          className="w-full px-4 py-3 border border-slate-300 focus:border-[#EA6A1E] outline-none resize-none transition-colors" 
          value={formData.message} 
          onChange={e => setFormData({...formData, message: e.target.value})} 
        />
      </div>
      
      <motion.button 
        type="submit" 
        className="btn-primary w-full flex items-center justify-center gap-2" 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }} 
        data-testid="contact-submit"
      >
        <Send size={18} /> Send Message
      </motion.button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="contact-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-xl text-slate-600 mb-4">We&apos;re here to help! Order online or over the phone — same trusted team.</p>

        {/* Online-only banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border-l-4 border-[#EA6A1E] shadow-md p-6 mb-12"
          data-testid="online-only-banner"
        >
          <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-[#0A1628] mb-2">
            Now <span className="text-[#EA6A1E]">Online</span> — and You Save Because of It.
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Leisure Wellness is now 100% online and shipping nationwide. With no showroom overhead, we&apos;re passing those savings straight to you with <span className="font-semibold">factory-direct pricing</span>. Order online or over the phone and we&apos;ll ship your unit <span className="font-semibold">straight to your door, anywhere in the country</span>.
          </p>
          <p className="text-slate-700 mt-3">
            Questions or ready to order?{' '}
            <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#EA6A1E] hover:underline">
              Call {CONTACT.phone}
            </a>.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          
          <div>
            <div className="bg-[#0A1628] text-white p-8 mb-8">
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                  <Phone size={20} className="text-[#EA6A1E]" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                  <Mail size={20} className="text-[#EA6A1E]" /> {CONTACT.email}
                </a>
                <p className="text-slate-300 text-sm italic pt-2 border-t border-white/10">
                  Call anytime with questions — we&apos;re happy to help you pick the right unit.
                </p>
              </div>
            </div>

            {/* What you still get */}
            <div className="bg-white p-8 mb-8 shadow-md">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-4">Same Service. Better Prices.</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Tag size={20} className="text-[#EA6A1E] flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Factory-direct pricing</span> — no showroom, no retail markup.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck size={20} className="text-[#EA6A1E] flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Ships to your door</span> — fast, factory-direct freight nationwide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench size={20} className="text-[#EA6A1E] flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Real support after the sale</span> — warranty help and questions handled by our team.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">Ships Nationwide</h3>
              <p className="text-sm text-slate-600 mb-4">Order online or by phone — we ship straight to your door, anywhere in the country:</p>
              <div className="flex flex-wrap gap-2">
                {CONTACT.serviceAreas.map(area => (
                  <span key={area} className="bg-white px-3 py-1 text-sm text-slate-600 border">{area}</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4 italic">
                Questions about your order?{' '}
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#EA6A1E] hover:underline">
                  Call {CONTACT.phone}
                </a>{' '}
                — we&apos;re happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
