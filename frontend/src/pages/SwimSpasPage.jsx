import React from 'react';
import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { GRAND_RIVER_SWIM_SPAS, VIKING_SWIM_SPAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SwimSpasPage = () => {
  return (
    <>
      <Helmet>
        <title>Swim Spas | American Made | Upstate Hot Tubs</title>
        <meta name="description" content="Shop American made swim spas from Grand River Spas and Viking Spas. Exercise, swim, and relax. Live your healthiest life while enjoying a vacation everyday at home." />
        <meta name="keywords" content="swim spas, American made swim spas, Grand River swim spa, Viking swim spa, exercise pool" />
      </Helmet>
      
      <div className="pt-28 pb-20" data-testid="swim-spas-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <Flag className="text-[#B91C1C]" size={20} />
              <span className="text-sm font-semibold text-[#B91C1C] uppercase tracking-wider">American Made & Proud of It</span>
            </div>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              American Made Swim Spas
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Live your healthiest life while enjoying a vacation everyday at home. Exercise, swim, and relax in our premium swim spas.
            </p>
          </motion.div>
          
          {/* Grand River Swim Spas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-6 pb-2 border-b-2 border-[#B91C1C]">
              Grand River Spas Swim Spas
            </h2>
            <ProductGrid products={GRAND_RIVER_SWIM_SPAS} linkPrefix="/products" />
          </motion.div>
          
          {/* Viking Spas Swim Spas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-6 pb-2 border-b-2 border-[#B91C1C]">
              Viking Spas Swim Spas
            </h2>
            <ProductGrid products={VIKING_SWIM_SPAS} linkPrefix="/products" />
          </motion.div>
          
          {/* Slogan Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] p-8 text-center"
          >
            <p className="text-white text-xl md:text-2xl font-['Barlow_Condensed'] uppercase tracking-wider mb-2">
              Live Your Healthiest Life While Enjoying a Vacation Everyday at Home
            </p>
            <p className="text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
              <Flag size={16} /> American Made & Proud of It
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SwimSpasPage;
