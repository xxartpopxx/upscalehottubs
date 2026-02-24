import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { HOT_TUBS, GRAND_RIVER_PRODUCTS, VIKING_SPAS_PRODUCTS, filterProducts, sortProducts, getUniqueSeries } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const HotTubsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    brand: 'all',
    minPrice: '',
    maxPrice: '',
    persons: 'all',
    series: 'all',
    seatingLayout: 'all'
  });
  const [sortBy, setSortBy] = useState('default');

  // Get available series based on brand filter
  const availableSeries = useMemo(() => {
    const products = filters.brand === 'Grand River Spas' 
      ? GRAND_RIVER_PRODUCTS 
      : filters.brand === 'Viking Spas' 
        ? VIKING_SPAS_PRODUCTS 
        : HOT_TUBS;
    return getUniqueSeries(products);
  }, [filters.brand]);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(HOT_TUBS, {
      ...filters,
      minPrice: filters.minPrice ? parseInt(filters.minPrice) : null,
      maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : null
    });
    return sortProducts(filtered, sortBy);
  }, [filters, sortBy]);

  // Separate by brand for display
  const grandRiverProducts = filteredProducts.filter(p => p.brand === 'Grand River Spas');
  const vikingProducts = filteredProducts.filter(p => p.brand === 'Viking Spas');

  const clearFilters = () => {
    setFilters({
      brand: 'all',
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
    <div className="pt-36 pb-20" data-testid="hot-tubs-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
            Shop Our American Made Hot Tubs
          </h1>
          <p className="text-lg text-slate-600">
            Premium quality hot tubs from Grand River Spas and Viking Spas. Click any product to see details and customize colors!
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
            className="bg-slate-50 p-6 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Brand</label>
              <select
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value, series: 'all' })}
                className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                data-testid="filter-brand"
              >
                <option value="all">All Brands</option>
                <option value="Grand River Spas">Grand River Spas</option>
                <option value="Viking Spas">Viking Spas</option>
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
        ) : filters.brand === 'all' ? (
          // Show separated by brand when no brand filter
          <>
            {/* Grand River Spas Section */}
            {grandRiverProducts.length > 0 && (
              <section className="mb-16">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px bg-slate-200 flex-1" />
                  <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase text-[#0A1628]">
                    Grand River Spas
                  </h2>
                  <div className="h-px bg-slate-200 flex-1" />
                </motion.div>
                <ProductGrid products={grandRiverProducts} linkPrefix="/products" />
              </section>
            )}

            {/* Viking Spas Section */}
            {vikingProducts.length > 0 && (
              <section>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px bg-slate-200 flex-1" />
                  <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase text-[#0A1628]">
                    Viking Spas
                  </h2>
                  <div className="h-px bg-slate-200 flex-1" />
                </motion.div>
                <ProductGrid products={vikingProducts} linkPrefix="/products" />
              </section>
            )}
          </>
        ) : (
          // Show flat list when brand is filtered
          <ProductGrid products={filteredProducts} linkPrefix="/products" />
        )}
      </div>
    </div>
  );
};

export default HotTubsPage;
