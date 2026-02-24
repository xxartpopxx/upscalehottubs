import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="pt-36 pb-20" data-testid="financing-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Financing Your New Hot Tub
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          YES, WE OFFER EXCELLENT FINANCING THROUGH TWO COMPANIES.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {financingOptions.map((fin) => (
            <motion.a 
              key={fin.name} 
              href={fin.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ y: -5 }} 
              className="bg-white border-2 border-slate-200 p-8 hover:border-[#B91C1C] transition-colors text-center block"
            >
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">{fin.name}</h3>
              <p className="text-slate-600 mb-4">{fin.desc}</p>
              <span className="text-[#B91C1C] font-semibold">Apply Now →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
