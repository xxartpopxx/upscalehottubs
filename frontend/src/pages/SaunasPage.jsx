import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Flame, Sun, Home, Thermometer } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ALL_SAUNAS, ALL_HEATERS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SaunasPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const isHeaterFilter = activeCategory === 'heaters';

  // Filter saunas by category
  const getFilteredSaunas = () => {
    if (activeCategory === 'all') return ALL_SAUNAS;
    if (activeCategory === 'outdoor') return ALL_SAUNAS.filter(s => s.category === 'outdoor' || s.series === 'Barrel Saunas' || s.series === 'Outdoor Saunas' || s.series === 'Premium Outdoor Saunas');
    if (activeCategory === 'indoor') return ALL_SAUNAS.filter(s => s.category === 'indoor' || s.series === 'Cabin Saunas' || s.series === 'Indoor Saunas');
    if (activeCategory === 'infrared') return ALL_SAUNAS.filter(s => s.category === 'infrared' || s.series === 'Full Spectrum Infrared Saunas' || s.series === '3-IN-ONE Combination Saunas' || s.series === 'Infrared Saunas');
    if (activeCategory === 'heaters') return [];
    return ALL_SAUNAS;
  };

  const filteredSaunas = getFilteredSaunas();

  const categories = [
    { id: 'all', label: 'All Saunas', icon: Filter, count: ALL_SAUNAS.length },
    { id: 'outdoor', label: 'Outdoor', icon: Sun, count: ALL_SAUNAS.filter(s => s.category === 'outdoor' || s.series === 'Barrel Saunas' || s.series === 'Outdoor Saunas' || s.series === 'Premium Outdoor Saunas').length },
    { id: 'indoor', label: 'Indoor', icon: Home, count: ALL_SAUNAS.filter(s => s.category === 'indoor' || s.series === 'Cabin Saunas' || s.series === 'Indoor Saunas').length },
    { id: 'infrared', label: 'Infrared', icon: Thermometer, count: ALL_SAUNAS.filter(s => s.category === 'infrared' || s.series === 'Full Spectrum Infrared Saunas' || s.series === '3-IN-ONE Combination Saunas' || s.series === 'Infrared Saunas').length },
    { id: 'heaters', label: 'Heaters', icon: Flame, count: ALL_HEATERS.length },
  ];

  return (
    <>
      <Helmet>
        <title>Saunas & Heaters | Barrel Saunas, Infrared & Indoor Saunas | Upstate Hot Tubs</title>
        <meta name="description" content="Shop premium saunas including outdoor barrel saunas, indoor saunas, infrared saunas, and sauna heaters at Upstate Hot Tubs. Nordic craftsmanship, American made and proud of it. Free delivery in South Carolina." />
        <meta name="keywords" content="saunas, barrel saunas, infrared sauna, traditional sauna, outdoor sauna, indoor sauna, sauna heaters, HUUM, Finsauna, wellness, Upstate Hot Tubs, Greenville SC" />
        <meta property="og:title" content="Premium Saunas & Heaters | Upstate Hot Tubs" />
        <meta property="og:description" content="RELAX-RENEW-REPEAT. Premium saunas for your backyard oasis or indoor sanctuary." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://upstatehottubs.com/saunas" />
      </Helmet>
      
      <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="saunas-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-sm font-semibold text-[#B91C1C] uppercase tracking-wider">Nordic Craftsmanship • American Service</span>
            </div>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Shop Our Saunas
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              RELAX-RENEW-REPEAT - Premium outdoor, indoor, and infrared saunas for your wellness journey. Featuring world-class brands from Finland, Estonia, and beyond.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    data-testid={`filter-${cat.id}`}
                    className={`flex items-center gap-2 px-4 py-2.5 font-semibold text-sm uppercase tracking-wider transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#B91C1C] text-white shadow-lg'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{cat.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.id ? 'bg-white/20' : 'bg-slate-200'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
          
          {/* Saunas Grid - hidden when heater filter is active */}
          {!isHeaterFilter && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProductGrid products={filteredSaunas} linkPrefix="/products" />
            </motion.div>
          )}
          
          {/* Heaters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <Flame className="text-white" size={24} />
              </div>
              <div>
                <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase text-[#0A1628]">
                  Sauna Heaters
                </h2>
                <p className="text-slate-600">The heart of your sauna - world-class electric and wood-burning heaters</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_HEATERS.map((heater) => (
                <motion.div
                  key={heater.id}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="aspect-square overflow-hidden bg-slate-50">
                    <img 
                      src={heater.images.primary} 
                      alt={heater.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[#B91C1C] font-semibold uppercase tracking-wider mb-1">{heater.brand}</p>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{heater.name}</h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{heater.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#B91C1C]">{heater.price}</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 font-semibold uppercase">{heater.heaterType}</span>
                    </div>
                    <ul className="mt-4 space-y-1">
                      {heater.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-500 flex items-start gap-1">
                          <span className="text-[#B91C1C] mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="/contact" 
                      className="mt-4 block text-center bg-[#0A1628] hover:bg-[#B91C1C] text-white py-2.5 font-semibold text-sm uppercase tracking-wider transition-colors"
                    >
                      Request Quote
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] p-8 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-white mb-2">
                  Need Help Choosing the Right Sauna?
                </h3>
                <p className="text-slate-300 max-w-xl">
                  Our wellness experts can help you find the perfect sauna for your space, budget, and wellness goals. From traditional Finnish saunas to modern infrared technology, we have options for every lifestyle.
                </p>
              </div>
              <a 
                href="/contact"
                className="bg-[#B91C1C] hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </>
  );
};

export default SaunasPage;
