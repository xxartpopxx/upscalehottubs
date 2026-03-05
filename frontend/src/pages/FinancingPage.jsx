import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FinancingPage = () => {
  const financingOptions = [
    { 
      name: 'LightStream', 
      href: 'https://www.lightstream.com/hot-tub-financing', 
      desc: 'Hot Tub Financing made simple' 
    },
    { 
      name: 'HFS Financial', 
      href: 'https://www.hfsfinancial.net/promo/681a2e80e67418f6142e1b65/', 
      desc: 'Swimming Pool & Hot Tub Financing' 
    },
  ];

  return (
    <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="financing-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 rounded-2xl overflow-hidden shadow-xl"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_aqua-american/artifacts/8s7knl5c_unnamed.jpg" 
            alt="Soak Now. Pay Later. Find Financing Now!" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Main Heading with Relax styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="font-['Barlow_Condensed'] text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A1628] mb-4">
            <span className="text-[#D4AF37]">Relax…</span> We Have Flexible Payment Options
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-6">
            Low monthly payment options on approved credit for our hot tubs, swim spas, cold plunges, and saunas!
          </p>
          <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-[#0A1628] mb-8">
            Choose Our Financial Lending Provider Below
          </h2>
        </motion.div>
        
        {/* Financing Company Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {financingOptions.map((fin, index) => (
            <motion.a 
              key={fin.name} 
              href={fin.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }} 
              className="bg-white border-2 border-slate-200 p-8 hover:border-[#B91C1C] hover:shadow-xl transition-all text-center block rounded-xl"
            >
              <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">{fin.name}</h3>
              <p className="text-slate-600 mb-6 text-lg">{fin.desc}</p>
              <span className="inline-flex items-center gap-2 bg-[#B91C1C] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#991B1B] transition-colors">
                Apply Now <ChevronRight size={22} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Second Image - Lifestyle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_aqua-american/artifacts/k9xx8z28_unnamed-1.jpg" 
            alt="Enjoy your hot tub with flexible financing" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FinancingPage;
