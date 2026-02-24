import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flag, Filter, X, ChevronDown } from 'lucide-react';
import { GRAND_RIVER_SWIM_SPAS, VIKING_SWIM_SPAS, DYNASTY_SWIM_SPAS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const SwimSpasPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    brand: 'all',
    minPrice: '',
    maxPrice: '',
    length: 'all'
  });
  const [sortBy, setSortBy] = useState('default');

  // Filter logic
  const filterProducts = (products) => {
    return products.filter(product => {
      if (filters.minPrice && product.priceValue < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && product.priceValue > parseInt(filters.maxPrice)) return false;
      if (filters.length && filters.length !== 'all') {
        const lengthNum = parseInt(product.length);
        if (filters.length === 'small' && lengthNum > 14) return false;
        if (filters.length === 'medium' && (lengthNum < 15 || lengthNum > 17)) return false;
        if (filters.length === 'large' && lengthNum < 18) return false;
      }
      return true;
    });
  };

  // Sort logic
  const sortProducts = (products) => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
      case 'price-high':
        return sorted.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
      case 'length-small':
        return sorted.sort((a, b) => parseInt(a.length) - parseInt(b.length));
      case 'length-large':
        return sorted.sort((a, b) => parseInt(b.length) - parseInt(a.length));
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  };

  // Apply filters and sorting
  const filteredGrandRiver = useMemo(() => {
    if (filters.brand === 'viking' || filters.brand === 'dynasty') return [];
    return sortProducts(filterProducts(GRAND_RIVER_SWIM_SPAS));
  }, [filters, sortBy]);

  const filteredViking = useMemo(() => {
    if (filters.brand === 'grandriver' || filters.brand === 'dynasty') return [];
    return sortProducts(filterProducts(VIKING_SWIM_SPAS));
  }, [filters, sortBy]);

  const filteredDynasty = useMemo(() => {
    if (filters.brand === 'grandriver' || filters.brand === 'viking') return [];
    return sortProducts(filterProducts(DYNASTY_SWIM_SPAS));
  }, [filters, sortBy]);

  const totalProducts = filteredGrandRiver.length + filteredViking.length + filteredDynasty.length;

  const clearFilters = () => {
    setFilters({
      brand: 'all',
      minPrice: '',
      maxPrice: '',
      length: 'all'
    });
    setSortBy('default');
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'all' && v !== '').length;

  return (
    <>
      <Helmet>
        <title>Swim Spas | American Made Swim Spas | Grand River & Viking | Upstate Hot Tubs</title>
        <meta name="description" content="Shop American made swim spas from Grand River Spas and Viking Spas. Exercise, swim, and relax at home. Live your healthiest life while enjoying a vacation everyday at home. Free delivery in FL and SC." />
        <meta name="keywords" content="swim spas, American made swim spas, Grand River swim spa, Viking swim spa, exercise pool, lap pool, hot tub swim spa, Naples FL, Greenville SC, Simpsonville SC" />
        <meta property="og:title" content="American Made Swim Spas | Upstate Hot Tubs" />
        <meta property="og:description" content="Live your healthiest life with our premium American made swim spas. Exercise, swim, and relax at home." />
        <link rel="canonical" href="https://upstatehottubs.com/swim-spas" />
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

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 border-2 font-semibold transition-colors ${
                  showFilters || activeFilterCount > 0
                    ? 'border-[#B91C1C] text-[#B91C1C] bg-red-50'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
                data-testid="filter-toggle"
              >
                <Filter size={18} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-[#B91C1C] text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-slate-500 hover:text-[#B91C1C] flex items-center gap-1"
                >
                  <X size={14} /> Clear all
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">{totalProducts} products</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-slate-300 px-4 py-2 pr-10 font-medium text-sm focus:border-[#B91C1C] focus:outline-none cursor-pointer"
                  data-testid="sort-select"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="length-small">Length: Small to Large</option>
                  <option value="length-large">Length: Large to Small</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-slate-50 p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {/* Brand Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-brand"
                >
                  <option value="all">All Brands</option>
                  <option value="grandriver">Grand River Spas</option>
                  <option value="viking">Viking Spas</option>
                  <option value="dynasty">Dynasty Spas</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Min Price</label>
                <select
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-min-price"
                >
                  <option value="">No Min</option>
                  <option value="15000">$15,000</option>
                  <option value="20000">$20,000</option>
                  <option value="25000">$25,000</option>
                  <option value="30000">$30,000</option>
                  <option value="35000">$35,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price</label>
                <select
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-max-price"
                >
                  <option value="">No Max</option>
                  <option value="20000">$20,000</option>
                  <option value="25000">$25,000</option>
                  <option value="30000">$30,000</option>
                  <option value="35000">$35,000</option>
                  <option value="40000">$40,000</option>
                  <option value="45000">$45,000</option>
                </select>
              </div>

              {/* Length Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Length</label>
                <select
                  value={filters.length}
                  onChange={(e) => setFilters({ ...filters, length: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-length"
                >
                  <option value="all">Any Length</option>
                  <option value="small">Small (13-14 ft)</option>
                  <option value="medium">Medium (15-17 ft)</option>
                  <option value="large">Large (18+ ft)</option>
                </select>
              </div>
            </motion.div>
          )}
          
          {/* Grand River Swim Spas Section */}
          {filteredGrandRiver.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-6 pb-2 border-b-2 border-[#B91C1C]">
                Grand River Spas Swim Spas
              </h2>
              <ProductGrid products={filteredGrandRiver} linkPrefix="/products" />
            </motion.div>
          )}
          
          {/* Viking Spas Swim Spas Section */}
          {filteredViking.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-6 pb-2 border-b-2 border-[#B91C1C]">
                Viking Spas Swim Spas
              </h2>
              <ProductGrid products={filteredViking} linkPrefix="/products" />
            </motion.div>
          )}

          {/* No Results */}
          {totalProducts === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500 mb-4">No swim spas match your filters</p>
              <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
            </div>
          )}
          
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
