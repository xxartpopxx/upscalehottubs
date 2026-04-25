import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, DollarSign, Zap, Send, Phone, CheckCircle } from 'lucide-react';
import { CONTACT } from '../data/constants';

const CoversPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    coverLength: '',
    coverWidth: '',
    manufacturer: '',
    coverColor: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const products = [
    {
      name: 'Pivot Top Mount Cover Lifter',
      description: 'Spa Cover Lifts - Pivot Top Mount Spa & Hot Tub Cover Lift Removal System. Reinforced Brackets with 3 Hook Towel Rack. Easy off and easy on!',
      price: '$249.95',
      images: [
        'https://static.wixstatic.com/media/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg',
        'https://static.wixstatic.com/media/5c7c78_d4fdcd6b4fbb4a3daeb5ad227de043d7~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_d4fdcd6b4fbb4a3daeb5ad227de043d7~mv2.jpg'
      ]
    },
    {
      name: 'Heavy-Duty Cover Lifter',
      description: 'Spa Cover Lifts - Heavy-Duty Hot Tub Cover Lifter, No-Drill Spa Cover Lift for 6\'-8\' Hot Tubs. Adjustable Height Arm for Swim Spa Covers, Extra Large Footplate for Stability.',
      price: '$279.95',
      images: [
        'https://static.wixstatic.com/media/5c7c78_d6fbd76b73154fb19fd8064fb802083a~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_d6fbd76b73154fb19fd8064fb802083a~mv2.jpg',
        'https://static.wixstatic.com/media/5c7c78_f203494deeee4f0d808ee73d60126309~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_f203494deeee4f0d808ee73d60126309~mv2.jpg'
      ]
    },
    {
      name: 'General Cover Lifter Mount',
      description: 'General mount cover lifter option for hot tubs and spas. Reliable, easy-to-use cover lift mount that works with most standard spa configurations. Professional installation available.',
      price: '$299.95 + $100 Install Fee',
      images: [
        'https://static.wixstatic.com/media/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg'
      ]
    },
    {
      name: 'Automatic ConvertALift "VacuSeal"',
      description: 'The Ultimate Conversion System that transforms the VacuSeal Cover into an Automatic Hot Tub Cover Lifter System. Unparalleled convenience, privacy, and safety — making opening your cover the easiest part of enjoying your hot tub or swim spa.',
      price: '$4,999.00 Installed',
      images: [
        'https://static.wixstatic.com/media/5c7c78_481bd0d152d74cca812ac25eb74edb70~mv2.png/v1/fill/w_600,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GREENVILLE%20SC%2C%20SWIM%20SPAS%2C%20SWIM%20SPAS%20IN%20GREENVILLE%20SC%2C.png'
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', productInterest: '', coverLength: '', coverWidth: '', manufacturer: '', coverColor: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet><title>Hot Tub Covers & Lifters | Upstate Hot Tubs</title></Helmet>
      <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="covers-page">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Covers & <span className="text-[#B91C1C]">Cover Lifters</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">To protect your spa!</p>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-16">
            <img
              src="https://static.wixstatic.com/media/5c7c78_1299868b6e804ed5bc7775da81d32a83~mv2.jpg/v1/fill/w_851,h_1121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20man.jpg"
              alt="Hot Tub Cover"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Products */}
          <div className="space-y-16">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-testid={`cover-product-${idx}`}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">{product.name}</h2>
                      <p className="text-slate-600 mb-4">{product.description}</p>
                      <p className="text-3xl font-bold text-[#B91C1C]">{product.price}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.images.map((img, i) => (
                        <img key={i} src={img} alt={product.name} className="w-full rounded-lg object-cover" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Protection', desc: 'Keep your spa clean and protected from the elements year-round.' },
              { icon: DollarSign, title: 'Energy Savings', desc: 'Insulated covers reduce heating costs and energy consumption.' },
              { icon: Zap, title: 'Easy Access', desc: 'Cover lifters make it effortless to open and close your spa.' }
            ].map((b, i) => (
              <div key={i} className="text-center p-6">
                <b.icon className="mx-auto text-[#B91C1C] mb-3" size={36} />
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-[#0A1628] p-6">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-white uppercase text-center">
                Interested in a Cover or Cover Lifter?
              </h2>
              <p className="text-slate-300 text-center mt-2">
                Fill out the form below and we'll help you find the perfect solution
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
                        Product Interest *
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a product...</option>
                        <option value="spa-cover">Spa Cover</option>
                        <option value="pivot-cover-lifter">Pivot Top Mount Cover Lifter - $249.95</option>
                        <option value="heavy-duty-lifter">Heavy-Duty Cover Lifter - $279.95</option>
                        <option value="general-mount-lifter">General Cover Lifter Mount - $299.95 + $100 Install</option>
                        <option value="vacuseal">Automatic ConvertALift VacuSeal - $4,999</option>
                        <option value="not-sure">Not Sure - Need Advice</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Spa Cover Specific Fields - Show when spa-cover is selected */}
                  {formData.productInterest === 'spa-cover' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-slate-50 p-6 rounded-lg border border-slate-200"
                    >
                      <h4 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] mb-4">
                        Spa Cover Specifications
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Cover Length (inches) *
                          </label>
                          <input
                            type="text"
                            name="coverLength"
                            value={formData.coverLength}
                            onChange={handleChange}
                            required={formData.productInterest === 'spa-cover'}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                            placeholder="e.g., 84"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Cover Width (inches) *
                          </label>
                          <input
                            type="text"
                            name="coverWidth"
                            value={formData.coverWidth}
                            onChange={handleChange}
                            required={formData.productInterest === 'spa-cover'}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                            placeholder="e.g., 84"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Hot Tub Manufacturer *
                          </label>
                          <input
                            type="text"
                            name="manufacturer"
                            value={formData.manufacturer}
                            onChange={handleChange}
                            required={formData.productInterest === 'spa-cover'}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                            placeholder="e.g., Dynasty Spas, Grand River, etc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Preferred Cover Color *
                          </label>
                          <select
                            name="coverColor"
                            value={formData.coverColor}
                            onChange={handleChange}
                            required={formData.productInterest === 'spa-cover'}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent outline-none transition-all"
                          >
                            <option value="">Select a color...</option>
                            <option value="charcoal">Charcoal Gray</option>
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                            <option value="taupe">Taupe</option>
                            <option value="navy">Navy Blue</option>
                            <option value="forest-green">Forest Green</option>
                            <option value="burgundy">Burgundy</option>
                            <option value="other">Other (specify in message)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
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
                      placeholder="Tell us about your spa and what you're looking for..."
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

          {/* Call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-4">Prefer to talk? Give us a call!</p>
            <a 
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors rounded-lg"
            >
              <Phone size={20} /> Call: {CONTACT.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CoversPage;
