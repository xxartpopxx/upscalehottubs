import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flag, Filter, X, ChevronDown, Award, Shield, Leaf, HeadphonesIcon } from 'lucide-react';
import { DYNASTY_SPAS_PRODUCTS } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const DynastySpasPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    series: 'all',
    minPrice: '',
    maxPrice: '',
    persons: 'all',
    seatingLayout: 'all'
  });
  const [sortBy, setSortBy] = useState('default');

  // Get unique series from products
  const allSeries = [...new Set(DYNASTY_SPAS_PRODUCTS.map(p => p.series))];

  // Filter logic
  const filteredProducts = useMemo(() => {
    let products = DYNASTY_SPAS_PRODUCTS.filter(product => {
      if (filters.series && filters.series !== 'all' && product.series !== filters.series) return false;
      if (filters.minPrice && product.priceValue < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && product.priceValue > parseInt(filters.maxPrice)) return false;
      if (filters.persons && filters.persons !== 'all') {
        if (filters.persons === '2-3' && (product.persons < 2 || product.persons > 3)) return false;
        if (filters.persons === '4-5' && (product.persons < 4 || product.persons > 5)) return false;
        if (filters.persons === '6-7' && (product.persons < 6 || product.persons > 7)) return false;
      }
      if (filters.seatingLayout && filters.seatingLayout !== 'all' && product.seatingLayout !== filters.seatingLayout) return false;
      return true;
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.priceValue - b.priceValue);
      case 'price-high':
        return products.sort((a, b) => b.priceValue - a.priceValue);
      case 'jets-high':
        return products.sort((a, b) => b.jets - a.jets);
      case 'persons-high':
        return products.sort((a, b) => b.persons - a.persons);
      case 'name':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  }, [filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      series: 'all',
      minPrice: '',
      maxPrice: '',
      persons: 'all',
      seatingLayout: 'all'
    });
    setSortBy('default');
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'all' && v !== '').length;

  return (
    <>
      <Helmet>
        <title>Dynasty Spas | American Made Hot Tubs | Upstate Hot Tubs</title>
        <meta name="description" content="Shop Dynasty Spas - American made hot tubs with 20-year shell warranty. Quality craftsmanship, RMAX insulation, and M.A.E. certified efficiency. Simpsonville SC." />
        <meta name="keywords" content="Dynasty Spas, American made hot tubs, hot tubs Simpsonville SC, Paradise Bay, Palm Island, Coconut Bay, Caribbean Breeze, luxury hot tubs" />
      </Helmet>

      <div className="pt-36 pb-20" data-testid="dynasty-spas-page">
        {/* Hero Banner with Dynasty Logo */}
        <div className="relative bg-gradient-to-r from-[#0A1628] to-slate-800 text-white py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Flag className="text-[#B91C1C]" size={24} />
                  <span className="text-sm font-semibold text-[#B91C1C] uppercase tracking-wider">American Made & Proud of It</span>
                </div>
                <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-4">
                  Dynasty Spas
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl">
                  Premium American-made hot tubs with industry-leading 20-year shell warranty. Quality craftsmanship built right here in the USA.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Why Dynasty Spas - Quick Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Flag, title: 'American Jobs', desc: 'Made in Athens, TN' },
              { icon: Shield, title: '20-Year Warranty', desc: 'Shell structure warranty' },
              { icon: Award, title: 'M.A.E. Certified', desc: 'Energy efficiency tested' },
              { icon: Leaf, title: 'RMAX Insulation', desc: '7x R-Value of competitors' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 p-4 text-center">
                <item.icon className="mx-auto text-[#B91C1C] mb-2" size={28} />
                <h3 className="font-semibold text-[#0A1628] text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
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
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="jets-high">Most Jets</option>
                  <option value="persons-high">Most Seats</option>
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
              {/* Series Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Collection</label>
                <select
                  value={filters.series}
                  onChange={(e) => setFilters({ ...filters, series: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="all">All Collections</option>
                  {allSeries.map(series => (
                    <option key={series} value={series}>{series}</option>
                  ))}
                </select>
              </div>

              {/* Persons Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Capacity</label>
                <select
                  value={filters.persons}
                  onChange={(e) => setFilters({ ...filters, persons: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="all">Any Size</option>
                  <option value="2-3">2-3 Person</option>
                  <option value="4-5">4-5 Person</option>
                  <option value="6-7">6-7 Person</option>
                </select>
              </div>

              {/* Seating Layout */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Seating</label>
                <select
                  value={filters.seatingLayout}
                  onChange={(e) => setFilters({ ...filters, seatingLayout: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="all">Any Layout</option>
                  <option value="Lounger">Lounger</option>
                  <option value="Bench">Bench</option>
                  <option value="Dual Lounger">Dual Lounger</option>
                </select>
              </div>

              {/* Min Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Min Price</label>
                <select
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="">No Min</option>
                  <option value="7000">$7,000</option>
                  <option value="8000">$8,000</option>
                  <option value="9000">$9,000</option>
                  <option value="10000">$10,000</option>
                  <option value="12000">$12,000</option>
                </select>
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price</label>
                <select
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full border border-slate-300 px-3 py-2 bg-white text-sm focus:border-[#B91C1C] focus:outline-none"
                >
                  <option value="">No Max</option>
                  <option value="9000">$9,000</option>
                  <option value="10000">$10,000</option>
                  <option value="11000">$11,000</option>
                  <option value="12000">$12,000</option>
                  <option value="14000">$14,000</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} linkPrefix="/products" />
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500 mb-4">No spas match your filters</p>
              <button onClick={clearFilters} className="bg-[#B91C1C] text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
                Clear Filters
              </button>
            </div>
          )}

          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 mb-12"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-6">See Dynasty Spas in Action</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full shadow-xl"
                src="https://www.youtube.com/embed/aRDW_vz1bUw"
                title="Dynasty Spas Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Standard Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] text-white p-8 md:p-12 mb-12"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-6">Standard Features on All Dynasty Spas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Digital Controls</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> LED Lights</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Air/Water Multi-Jets</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> UV Treated Pillows</li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Ozone Sanitation System</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> VGB Compliant Intake</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Quick Temp Heater</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Lucite® Acrylic Shell</li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Ecological RMAX® Insulation</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Soundproof Fiberglass Cabinet</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Full Wrap-Around ABS Bottom</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Insulated Cover Included</li>
              </ul>
            </div>
          </motion.div>

          {/* Warranty Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 p-8 md:p-12 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-[#B91C1C]" size={32} />
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628]">Industry-Leading Warranty</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white">
                <p className="text-4xl font-bold text-[#B91C1C] mb-2">20</p>
                <p className="text-lg font-semibold text-[#0A1628]">Year Shell Structure</p>
              </div>
              <div className="text-center p-6 bg-white">
                <p className="text-4xl font-bold text-[#B91C1C] mb-2">5</p>
                <p className="text-lg font-semibold text-[#0A1628]">Year Electrical & Plumbing</p>
              </div>
              <div className="text-center p-6 bg-white">
                <p className="text-4xl font-bold text-[#B91C1C] mb-2">3</p>
                <p className="text-lg font-semibold text-[#0A1628]">Year Surface</p>
              </div>
            </div>
          </motion.div>

          {/* Features and Benefits Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-center text-[#0A1628] mb-8 uppercase">
              Features & Benefits
            </h2>
            
            {/* Component List */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">Dynasty Spas Are Equipped With The Following Components</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {['Digital Controls', 'LED Lights', 'UV Treated Pillows', 'Air/Water Multi-Jets', 'Ozone Sanitation System', 'VGB Compliant Intake', 'Quick Temp Heater', 'Ecological RMAX Insulation', 'Lucite Acrylic Shell', 'Insulated & Soundproof Fiberglass Cabinet', 'Full Wrap Around ABS Bottom', '5"-3" Standard Taper Cover'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 border-b border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-[#B91C1C] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Image */}
            <img
              src="https://static.wixstatic.com/media/5c7c78_56061b97847b4bdbaa660b07d63aebb5~mv2.jpg/v1/fill/w_1744,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_56061b97847b4bdbaa660b07d63aebb5~mv2.jpg"
              alt="Dynasty Spas Features"
              className="w-full rounded-lg shadow-lg mb-12"
            />

            {/* RMAX */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">RMAX Insulation</h3>
                <p className="text-slate-600 text-lg">Up to 7 Times The R-Value of other hot tubs on the market.</p>
              </div>
              <div className="flex gap-4">
                <img src="https://static.wixstatic.com/media/5c7c78_d8c6a37528bc4fa2b61a8e5c17e6130e~mv2.png/v1/fill/w_744,h_545,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20manufacturer%2C%20is%20known%20for%20its%20_reverse%20pull%20neck%20jet.png" alt="RMAX Insulation" className="w-1/2 rounded-lg object-cover" />
                <img src="https://static.wixstatic.com/media/5c7c78_e47e3d358f424da783adfec768acb0ba~mv2.png/v1/fill/w_544,h_703,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20manufacturer%2C%20is%20known%20for%20its%20_reverse%20pull%20neck%20jet.png" alt="RMAX Detail" className="w-1/2 rounded-lg object-cover" />
              </div>
            </div>

            {/* Elegant & Strong */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">Elegant And Strong</h3>
                <p className="text-slate-600 mb-4">
                  Dynasty Spas uses the best Lucite timeless acrylic with stunning solids and complex patterns for a luxurious finish.
                  Lucite Spa continuous cast acrylic sheet is the preferred choice of manufacturers worldwide.
                </p>
                <p className="text-slate-600">
                  Dynasty offers a variety of polymer cabinet color options. The maintenance-free cabinetry is extremely durable,
                  moisture and impact resistant &mdash; it doesn't crack, peel or fade. Custom rounded corners and removable panels
                  allow access to all areas inside the spa.
                </p>
              </div>
              <img src="https://static.wixstatic.com/media/5c7c78_d47544bf91ed4bb884494e0734b40eaf~mv2.jpg/v1/fill/w_744,h_942,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20man.jpg" alt="Elegant Cabinet" className="w-full rounded-lg shadow-lg" />
            </div>

            {/* Maintenance Free */}
            <div className="bg-slate-50 rounded-lg p-8 mb-12">
              <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">Maintenance Free</h3>
              <div className="space-y-4 text-slate-600">
                <p><strong>Structure</strong> &mdash; Quality pressure treated wood structure (50-year life expectancy). Removable side panels. Anti-moisture ABS plastic base for increased stability and heat retention.</p>
                <p><strong>Dynacrete Base</strong> &mdash; Made of recycled acrylic and resin. Isolates frame bottom from moisture. The most durable and solid spas in the industry.</p>
                <p><strong>Reinforced Finish</strong> &mdash; Lucite Cast Acrylic and reinforced fiberglass finish to ensure strength and durability. Hand rolled process eliminates air pockets which can cause separation.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <img src="https://static.wixstatic.com/media/5c7c78_b4b5ce84e1564a49bbc0f8cdf56246b0~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_b4b5ce84e1564a49bbc0f8cdf56246b0~mv2.jpg" alt="Structure" className="w-full rounded-lg" />
                <img src="https://static.wixstatic.com/media/5c7c78_59ff939a6bab428983832cf5df9b662d~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_59ff939a6bab428983832cf5df9b662d~mv2.jpg" alt="Base" className="w-full rounded-lg" />
              </div>
            </div>

            {/* Tech Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'In Touch2 Wi-Fi Remote', img: 'https://static.wixstatic.com/media/5c7c78_58009c490b214bc79265f26815f366e9~mv2.png/v1/fill/w_886,h_1171,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Heavy-Duty%20Hot%20Tub%20Cover%20Lifter%2C%20No-Drill%20Spa%20Cover%20Lift%20for%206%27-8%27%20Hot%20Tubs%2C%20Adjustable%20He.png' },
                { title: 'In Stream 2 Bluetooth Audio', img: 'https://static.wixstatic.com/media/5c7c78_838d568c2e9840ad8fbdcdb579746c1f~mv2.png/v1/fill/w_973,h_626,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Heavy-Duty%20Hot%20Tub%20Cover%20Lifter%2C%20No-Drill%20Spa%20Cover%20Lift%20for%206%27-8%27%20Hot%20Tubs%2C%20Adjustable%20He.png' },
                { title: 'In Mix LED Controls', img: 'https://static.wixstatic.com/media/5c7c78_f8d100e8553e4e24a2def91b6f4d3305~mv2.png/v1/fill/w_973,h_575,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Heavy-Duty%20Hot%20Tub%20Cover%20Lifter%2C%20No-Drill%20Spa%20Cover%20Lift%20for%206%27-8%27%20Hot%20Tubs%2C%20Adjustable%20He.png' },
                { title: 'CMP Ozone & Controls', img: 'https://static.wixstatic.com/media/5c7c78_1ce016ef8ca44b58860b12005430ff0a~mv2.png/v1/fill/w_781,h_973,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Heavy-Duty%20Hot%20Tub%20Cover%20Lifter%2C%20No-Drill%20Spa%20Cover%20Lift%20for%206%27-8%27%20Hot%20Tubs%2C%20Adjustable%20He.png' },
              ].map((feat, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={feat.img} alt={feat.title} className="w-full h-48 object-contain p-4" />
                  <div className="p-4">
                    <h4 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] text-center">{feat.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default DynastySpasPage;
