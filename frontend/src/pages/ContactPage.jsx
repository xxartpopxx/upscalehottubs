import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
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
      
      <div className="grid md:grid-cols-2 gap-4">
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
            className="w-full px-4 py-3 border border-slate-300 focus:border-[#B91C1C] outline-none bg-white transition-colors" 
            value={formData.interest} 
            onChange={e => setFormData({...formData, interest: e.target.value})}
          >
            <option value="">Select an option</option>
            <option value="hot-tub">Hot Tub</option>
            <option value="swim-spa">Swim Spa</option>
            <option value="sauna">Sauna</option>
            <option value="cold-plunge">Cold Plunge</option>
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
        data-testid="contact-submit"
      >
        <Send size={18} /> Send Message
      </motion.button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="contact-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">We're here to help! Fill out the form below.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          
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
            
            <div className="bg-slate-50 p-8 mb-8">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {CONTACT.serviceAreas.map(area => (
                  <span key={area} className="bg-white px-3 py-1 text-sm text-slate-600 border">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mt-12"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-6">Find Us</h2>
          <div className="w-full h-[400px] bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-82.2573!3d34.7370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582b5c0a8b7f31%3A0x1234567890abcdef!2s1004%20W%20Georgia%20Rd%2C%20Simpsonville%2C%20SC%2029680!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Upstate Hot Tubs Location"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=1004+W+Georgia+Rd+Simpsonville+SC+29680" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
