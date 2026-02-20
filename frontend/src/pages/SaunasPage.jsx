import React from 'react';
import { motion } from 'framer-motion';
import { SAUNAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SaunasPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="saunas-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Shop Our Saunas
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          RELAX-RENEW-REPEAT - Start living your healthiest life with a sauna!
        </p>
        <ProductGrid products={SAUNAS} linkPrefix="/products" />
      </div>
    </div>
  );
};

export default SaunasPage;
