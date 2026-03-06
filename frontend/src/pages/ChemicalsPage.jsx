import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Droplets, Shield, Sparkles, Send, Phone, CheckCircle } from 'lucide-react';
import { CONTACT } from '../data/constants';

const ChemicalsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    chemicalType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const chemicalCategories = [
    {
      name: 'Sanitizers',
      description: 'Chlorine, Bromine & Salt Systems',
      icon: Shield,
      products: ['Chlorine Tablets', 'Bromine Tablets', 'Chlorine Granules', 'Salt System Chemicals']
    },
    {
      name: 'Balancers',
      description: 'pH, Alkalinity & Calcium',
      icon: Droplets,
      products: ['pH Increaser', 'pH Decreaser', 'Alkalinity Increaser', 'Calcium Hardness']
    },
    {
      name: 'Shock Treatments',
      description: 'Oxidizers & Clarifiers',
      icon: Sparkles,
      products: ['Non-Chlorine Shock', 'Chlorine Shock', 'Spa Clarifier', 'Enzyme Treatment']
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', chemicalType: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Hot Tub & Spa Chemicals | Upstate Hot Tubs</title>
        <meta name="description" content="Shop premium hot tub and spa chemicals including sanitizers, pH balancers, shock treatments, and more at Upstate Hot Tubs in Simpsonville, SC." />
      </Helmet>
      
      <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="chemicals-page">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Hot Tub <span className="text-[#B91C1C]">Chemicals</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Keep your spa water crystal clear and perfectly balanced with our premium chemical products.
            </p>
          </motion.div>

          {/* Chemical Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {chemicalCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#0A1628] p-6 text-center">
                  <category.icon className="text-white mx-auto mb-3" size={40} />
                  <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-white uppercase">
                    {category.name}
                  </h2>
                  <p className="text-slate-300 text-sm">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.products.map((product, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-[#B91C1C] rounded-full"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#B91C1C] text-white p-8 rounded-xl mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-2">
                  Need Help Choosing the Right Chemicals?
                </h3>
                <p className="text-white/90">
                  Our team can help you select the perfect chemical balance for your spa. Bring in a water sample for free testing!
                </p>
              </div>
              <a 
                href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
                className="bg-white text-[#B91C1C] px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap rounded-lg"
              >
                <Phone size={20} /> Call Us
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-[#0A1628] p-6">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-white uppercase text-center">
                Order Chemicals or Get a Quote
              </h2>
              <p className="text-slate-300 text-center mt-2">
                Fill out the form below and we'll get back to you promptly
              </p>
            </div>
            
            <div className="p-6 md:p-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={60} />
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600">
                    We've received your inquiry and will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                        placeholder="(864) 555-1234"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Chemical Type *
                      </label>
                      <select
                        name="chemicalType"
                        value={formData.chemicalType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a category...</option>
                        <option value="sanitizers">Sanitizers (Chlorine/Bromine)</option>
                        <option value="balancers">pH & Balancers</option>
                        <option value="shock">Shock Treatments</option>
                        <option value="starter-kit">Starter Chemical Kit</option>
                        <option value="not-sure">Not Sure - Need Advice</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      Message / Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your spa and what chemicals you need..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#B91C1C] text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-[#991b1b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 rounded-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} /> Submit Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ChemicalsPage;
