import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown, Flag } from 'lucide-react';
import { VIKING_SPAS_PRODUCTS, filterProducts, sortProducts, getUniqueSeries } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import { Helmet } from 'react-helmet-async';

const VikingSpasPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    persons: 'all',
    series: 'all',
    seatingLayout: 'all'
  });
  const [sortBy, setSortBy] = useState('default');

  // Get available series
  const availableSeries = useMemo(() => {
    return getUniqueSeries(VIKING_SPAS_PRODUCTS);
  }, []);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(VIKING_SPAS_PRODUCTS, {
      ...filters,
      brand: 'Viking Spas',
      minPrice: filters.minPrice ? parseInt(filters.minPrice) : null,
      maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : null
    });
    return sortProducts(filtered, sortBy);
  }, [filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      persons: 'all',
      series: 'all',
      seatingLayout: 'all'
    });
    setSortBy('default');
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'all' && v !== '').length;

  return (
    <>
      <Helmet>
        <title>Viking Spas Hot Tubs | American Made Quality Spas | Upstate Hot Tubs</title>
        <meta name="description" content="Shop Viking Spas hot tubs at Upstate Hot Tubs. American made quality hot tubs featuring Elite, Heirloom, and Element series. Live your healthiest life while enjoying a vacation everyday at home. Free delivery in Naples FL and South Carolina." />
        <meta name="keywords" content="Viking Spas, hot tubs, American made hot tubs, spa, wellness, Upstate Hot Tubs, Elite Series, Heirloom Series, Element Series, Naples FL, Greenville SC, plug and play hot tubs" />
        <meta property="og:title" content="Viking Spas Hot Tubs | American Made | Upstate Hot Tubs" />
        <meta property="og:description" content="Quality American made hot tubs from Viking Spas. Elite, Heirloom, and Element series available." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://upstatehottubs.com/viking-spas" />
      </Helmet>
      
      <div className="pt-28 pb-20" data-testid="viking-spas-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
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
              Viking Spas Hot Tubs
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Quality crafted hot tubs for the ultimate relaxation experience. American made and proud of it.
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
              <span className="text-sm text-slate-500">{filteredProducts.length} products</span>
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
              className="bg-slate-50 p-6 mb-8 grid grid-cols-2 md:grid-cols-5 gap-4"
            >
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
                  <option value="5000">$5,000</option>
                  <option value="7000">$7,000</option>
                  <option value="9000">$9,000</option>
                  <option value="10000">$10,000</option>
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
                  <option value="7000">$7,000</option>
                  <option value="9000">$9,000</option>
                  <option value="10000">$10,000</option>
                  <option value="12000">$12,000</option>
                  <option value="15000">$15,000</option>
                </select>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Capacity</label>
                <select
                  value={filters.persons}
                  onChange={(e) => setFilters({ ...filters, persons: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-persons"
                >
                  <option value="all">Any Size</option>
                  <option value="1-3">1-3 Person</option>
                  <option value="4-6">4-6 Person</option>
                  <option value="7+">7+ Person</option>
                </select>
              </div>

              {/* Series */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Series</label>
                <select
                  value={filters.series}
                  onChange={(e) => setFilters({ ...filters, series: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-series"
                >
                  <option value="all">All Series</option>
                  {availableSeries.map(series => (
                    <option key={series} value={series}>{series}</option>
                  ))}
                </select>
              </div>

              {/* Seating Layout */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Seating</label>
                <select
                  value={filters.seatingLayout}
                  onChange={(e) => setFilters({ ...filters, seatingLayout: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                  data-testid="filter-seating"
                >
                  <option value="all">Any Layout</option>
                  <option value="Open">Open Seating</option>
                  <option value="Lounge">Lounger</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500 mb-4">No products match your filters</p>
              <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} linkPrefix="/products" />
          )}
          
        </div>
      </div>
    </>
  );
};

export default VikingSpasPage;
