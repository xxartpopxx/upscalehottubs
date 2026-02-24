import React from 'react';
import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SAUNAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SaunasPage = () => {
  return (
    <>
      <Helmet>
        <title>Saunas | American Made | Upstate Hot Tubs</title>
        <meta name="description" content="Shop premium saunas at Upstate Hot Tubs. Live your healthiest life while enjoying a vacation everyday at home. American made and proud of it." />
        <meta name="keywords" content="saunas, infrared sauna, traditional sauna, wellness, American made, Upstate Hot Tubs" />
      </Helmet>
      
      <div className="pt-28 pb-20" data-testid="saunas-page">
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
              Shop Our Saunas
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              RELAX-RENEW-REPEAT - Live your healthiest life while enjoying a vacation everyday at home with a premium sauna!
            </p>
          </motion.div>
          
          <ProductGrid products={SAUNAS} linkPrefix="/products" />
          
          {/* Slogan Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0A1628] p-8 text-center"
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

export default SaunasPage;
