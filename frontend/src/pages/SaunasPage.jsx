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
        <title>Saunas | Barrel Saunas & Infrared Saunas | Upstate Hot Tubs</title>
        <meta name="description" content="Shop premium barrel saunas and infrared saunas at Upstate Hot Tubs. RELAX-RENEW-REPEAT. Live your healthiest life while enjoying a vacation everyday at home. American made and proud of it. Free delivery in Naples FL and South Carolina." />
        <meta name="keywords" content="saunas, barrel saunas, infrared sauna, traditional sauna, outdoor sauna, wellness, SaunaLife, Upstate Hot Tubs, Naples FL, Greenville SC" />
        <meta property="og:title" content="Premium Saunas | Upstate Hot Tubs" />
        <meta property="og:description" content="RELAX-RENEW-REPEAT. Premium barrel saunas for your backyard oasis." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://upstatehottubs.com/saunas" />
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
              RELAX-RENEW-REPEAT - Premium barrel and infrared saunas for your wellness journey.
            </p>
          </motion.div>
          
          <ProductGrid products={SAUNAS} linkPrefix="/products" />
          
        </div>
      </div>
    </>
  );
};

export default SaunasPage;
