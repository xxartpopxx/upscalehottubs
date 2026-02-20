import React from 'react';
import { motion } from 'framer-motion';
import { SWIM_SPAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SwimSpasPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="swim-spas-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          American Made Swim Spas
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          Exercise, swim, and relax in our premium swim spas.
        </p>
        <ProductGrid products={SWIM_SPAS} linkPrefix="/products" />
      </div>
    </div>
  );
};

export default SwimSpasPage;
