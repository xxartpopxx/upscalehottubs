import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flag, Snowflake, Heart, Zap, Moon } from 'lucide-react';
import { COLD_PLUNGES } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const ColdPlungesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cold Plunges | Recovery & Wellness | Upstate Hot Tubs</title>
        <meta name="description" content="Shop professional-grade cold plunges for recovery and wellness at Upstate Hot Tubs. Enhance muscle recovery, boost circulation, and improve sleep. Simpsonville SC." />
        <meta name="keywords" content="cold plunge, ice bath, cold therapy, recovery, wellness, Icebound, Endurance, Resolute Pro, Upstate Hot Tubs, Simpsonville SC" />
      </Helmet>
      
      <div className="pt-28 pb-20" data-testid="cold-plunges-page">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#0A1628] to-slate-800 text-white py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Snowflake className="text-cyan-400" size={24} />
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Recovery & Wellness</span>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-4">
                Shop Our Cold Plunges
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                RELAX-RENEW-REPEAT - Transform your recovery routine with professional-grade cold therapy.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Zap, title: 'Boost Circulation', desc: 'Enhance blood flow and cardiovascular health' },
              { icon: Heart, title: 'Muscle Recovery', desc: 'Reduce inflammation and speed up recovery' },
              { icon: Moon, title: 'Better Sleep', desc: 'Improve sleep quality and relaxation' },
              { icon: Snowflake, title: 'Mental Clarity', desc: 'Sharpen focus and reduce stress' },
            ].map((benefit, idx) => (
              <div key={benefit.title} className="bg-slate-50 p-6 text-center">
                <benefit.icon className="mx-auto text-cyan-600 mb-3" size={32} />
                <h3 className="font-semibold text-[#0A1628] mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Products */}
          <ProductGrid products={COLD_PLUNGES} linkPrefix="/products" />
          
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-16 mb-12"
          >
            <a href="https://iceboundessentials.com/blogs/icebound-insights/can-ice-baths-improve-your-skin-cold-plunge-benefits-for-beauty" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Can Ice Baths Improve Your Skin?</h3>
              <p className="text-slate-600 text-sm">Learn about cold plunge benefits for beauty →</p>
            </a>
            <a href="https://iceboundessentials.com/blogs/icebound-insights/should-you-ice-bath-before-or-after-a-workout-timing-for-recovery" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Ice Bath Timing for Recovery</h3>
              <p className="text-slate-600 text-sm">Should you ice bath before or after a workout? →</p>
            </a>
            <a href="https://iceboundessentials.com/blogs/icebound-insights/what-size-chiller-for-cold-plunge" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Choosing the Right Chiller</h3>
              <p className="text-slate-600 text-sm">Complete guide for recovery enthusiasts →</p>
            </a>
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

export default ColdPlungesPage;
