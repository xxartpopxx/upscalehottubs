import React from 'react';
import { motion } from 'framer-motion';
import { COLD_PLUNGES } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const ColdPlungesPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="cold-plunges-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Cold Plunges
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          RELAX-RENEW-REPEAT - See why adding a Cold Plunge will help your health.
        </p>
        <ProductGrid products={COLD_PLUNGES} linkPrefix="/products" />
      </div>
    </div>
  );
};

export default ColdPlungesPage;
