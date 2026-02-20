import React from 'react';
import { motion } from 'framer-motion';
import { HOT_TUBS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const HotTubsPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="hot-tubs-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Shop Our American Made Hot Tubs
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          Premium quality hot tubs made in the USA. Click any product to see details and customize colors!
        </p>
        <ProductGrid products={HOT_TUBS} linkPrefix="/products" />
      </div>
    </div>
  );
};

export default HotTubsPage;
