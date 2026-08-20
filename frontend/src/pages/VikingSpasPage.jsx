import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown, Shield, Clock, Wrench, Layers, Download } from 'lucide-react';
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
  const [sortBy, setSortBy] = useState('price-low');

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
        <meta name="description" content="Shop Viking Spas hot tubs at Upstate Hot Tubs. American made quality hot tubs featuring Elite, Heirloom, and Element series. Live your healthiest life while enjoying a vacation everyday at home. Free setup &amp; installation in South Carolina (shipping paid by customer)." />
        <meta name="keywords" content="Viking Spas, hot tubs, American made hot tubs, spa, wellness, Upstate Hot Tubs, Elite Series, Heirloom Series, Element Series, ships nationwide, plug and play hot tubs" />
        <meta property="og:title" content="Viking Spas Hot Tubs | American Made | Upstate Hot Tubs" />
        <meta property="og:description" content="Quality American made hot tubs from Viking Spas. Elite, Heirloom, and Element series available." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.upstatehottubs.com/viking-spas" />
      </Helmet>
      
      <div className="pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-20" data-testid="viking-spas-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-sm font-semibold text-[#EA6A1E] uppercase tracking-wider">American Made & Proud of It</span>
            </div>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Viking Spas Hot Tubs
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Quality crafted hot tubs for the ultimate relaxation experience. American made and proud of it.
            </p>
          </motion.div>

          {/* Industry-Leading Warranty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0A1628] rounded-2xl p-8 md:p-12 text-white"
            data-testid="viking-warranty-section"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase mb-3">
              Industry-Leading <span className="text-[#EA6A1E]">Warranty</span>
            </h2>
            <p className="text-white/80 max-w-4xl mb-8 leading-relaxed">
              Viking Spas stands behind their products with industry-leading warranty coverage. Your
              investment is protected with comprehensive coverage including a Lifetime Shell Warranty,
              5 Years Shell Structure, 3 Years Plumbing &amp; Electric, and a 3 Year Cover Warranty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, title: 'Lifetime Shell', desc: 'Your shell is covered for life - our commitment to lasting quality.' },
                { icon: Layers, title: '5 Year Structure', desc: 'Shell structure warranty ensures long-lasting durability.' },
                { icon: Wrench, title: '3 Year Plumbing & Electric', desc: 'Complete coverage for all plumbing and electrical components.' },
                { icon: Clock, title: '3 Year Cover', desc: 'Your spa cover is protected for 3 full years.' },
              ].map((w) => (
                <div key={w.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-[#EA6A1E]/15 flex items-center justify-center mb-3">
                    <w.icon className="text-[#EA6A1E]" size={24} />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase mb-1">{w.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Viking Spas Brochure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-8"
            data-testid="viking-brochure-section"
          >
            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-[#0A1628] mb-1">
                Viking Spas Brochure
              </h3>
              <p className="text-slate-600">Download the complete 2025 Viking Spas catalog</p>
            </div>
            <a
              href="https://customer-assets.emergentagent.com/job_family-spa-luxury/artifacts/vmpqiwb2_Viking-Spas-Brochure_Rev-C_web.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              data-testid="viking-brochure-download"
            >
              <Download size={18} /> Download Brochure (PDF)
            </a>
          </motion.div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 border-2 font-semibold transition-colors ${
                  showFilters || activeFilterCount > 0
                    ? 'border-[#EA6A1E] text-[#EA6A1E] bg-red-50'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
                data-testid="filter-toggle"
              >
                <Filter size={18} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-[#EA6A1E] text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-slate-500 hover:text-[#EA6A1E] flex items-center gap-1"
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
                  className="appearance-none bg-white border border-slate-300 px-4 py-2 pr-10 font-medium text-sm focus:border-[#EA6A1E] focus:outline-none cursor-pointer"
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
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#EA6A1E] focus:outline-none"
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
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#EA6A1E] focus:outline-none"
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
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#EA6A1E] focus:outline-none"
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
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#EA6A1E] focus:outline-none"
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
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#EA6A1E] focus:outline-none"
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
