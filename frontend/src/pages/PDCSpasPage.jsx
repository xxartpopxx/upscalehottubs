import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Factory, Palette, Phone, ChevronRight } from 'lucide-react';
import { PDC_SPAS_PRODUCTS, PDC_SHELL_COLORS, PDC_CABINET_COLORS } from '../data/products';
import { CONTACT } from '../data/constants';
import ProductGrid from '../components/products/ProductGrid';

const PDCSpasPage = () => {
  const [activeSeries, setActiveSeries] = useState('all');

  const allSeries = useMemo(
    () => ['all', ...new Set(PDC_SPAS_PRODUCTS.map((p) => p.series))],
    []
  );

  const filteredProducts = useMemo(() => {
    if (activeSeries === 'all') return PDC_SPAS_PRODUCTS;
    return PDC_SPAS_PRODUCTS.filter((p) => p.series === activeSeries);
  }, [activeSeries]);

  const phoneHref = `tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <Helmet>
        <title>PDC Spas | American Made Hot Tubs | Upstate Hot Tubs</title>
        <meta
          name="description"
          content="Shop PDC Spas — American-made luxury hot tubs crafted for over six decades. Luxury, Premium and LifeStyle Series with up to a 35-year structural warranty. Ships nationwide."
        />
        <meta name="keywords" content="PDC Spas, American made hot tubs, Bali, Biscayne, Fiji, Reno, luxury hot tubs, 35 year warranty" />
        <link rel="canonical" href="https://www.upstatehottubs.com/pdc-spas" />
      </Helmet>

      <div
        className="pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-20"
        data-testid="pdc-spas-page"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A1628] text-white rounded-2xl overflow-hidden mb-12"
          >
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                    American Made &amp; Proud of It
                  </span>
                </div>
                <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-black uppercase leading-none mb-4">
                  PDC <span className="text-[#B91C1C]">Spas</span>
                </h1>
                <p className="text-lg text-white/85 mb-6 leading-relaxed">
                  Over six decades of American-made luxury. Explore premium hot tubs built to order
                  in your choice of designer shell and cabinet colors — backed by an industry-leading
                  warranty.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={phoneHref} className="bg-[#B91C1C] hover:bg-[#991B1B] text-white inline-flex items-center gap-2 font-bold py-3 px-6 uppercase tracking-wider transition-colors rounded-md">
                    <Phone size={18} /> Call {CONTACT.phone}
                  </a>
                  <Link to="/hot-tubs" className="border-2 border-white/40 hover:border-white text-white inline-flex items-center gap-2 font-bold py-3 px-6 uppercase tracking-wider transition-colors rounded-md">
                    Shop All Hot Tubs <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="bg-slate-100">
                <img
                  src="https://media.cmsmax.cloud/qq67leqlk45sgt0rapx2j/hot-tub-relax.webp"
                  alt="PDC Spas luxury hot tub"
                  className="w-full h-full object-cover min-h-[260px]"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Why PDC - quick benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Factory, title: 'American Made', text: 'Proudly crafted in Pennsylvania, USA for over six decades — built to order, just for you.' },
              { icon: ShieldCheck, title: 'Industry-Leading Warranty', text: 'Up to a 35-year structural warranty across the Luxury Series and swim spa lines.' },
              { icon: Palette, title: 'Built Your Way', text: 'Choose from designer acrylic shell colors and durable, maintenance-free cabinet finishes.' },
            ].map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <b.icon className="w-10 h-10 text-[#B91C1C] mx-auto mb-3" />
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628] mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Series Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {allSeries.map((series) => (
              <button
                key={series}
                onClick={() => setActiveSeries(series)}
                className={`px-5 py-2 font-semibold text-sm uppercase tracking-wider border-2 transition-colors ${
                  activeSeries === series
                    ? 'border-[#B91C1C] bg-[#B91C1C] text-white'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
                data-testid={`pdc-series-${series.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {series === 'all' ? 'All Models' : series}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} linkPrefix="/products" />

          {/* Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 my-16 shadow-md"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-6 text-center">
              Build Your Colors
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">Acrylic Shell Colors</p>
                <div className="flex flex-wrap gap-4">
                  {Object.values(PDC_SHELL_COLORS).map((c) => (
                    <div key={c.name} className="text-center">
                      <div className="w-16 h-16 rounded-lg border border-slate-200 shadow-sm" style={{ backgroundColor: c.hex }} />
                      <p className="text-xs text-slate-600 mt-1 max-w-[64px]">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">Cabinet Finishes</p>
                <div className="flex flex-wrap gap-4">
                  {Object.values(PDC_CABINET_COLORS).map((c) => (
                    <div key={c.name} className="text-center">
                      <div className="w-16 h-16 rounded-lg border border-slate-200 shadow-sm" style={{ backgroundColor: c.hex }} />
                      <p className="text-xs text-slate-600 mt-1 max-w-[64px]">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center">
              Swatches are approximate — actual finishes may vary. Ask us for physical samples.
            </p>
          </motion.div>

          {/* Warranty */}
          <motion.div
            id="warranty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] text-white rounded-xl p-8 md:p-12 text-center scroll-mt-40"
          >
            <Award className="w-14 h-14 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-black uppercase mb-4">
              PDC Spas Warranty
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto mb-6">
              Every PDC Spa is backed by an industry-leading warranty — up to a 35-year structural
              warranty, 15-year finish, 5-year plumbing &amp; electrical components, and 3-year labor.
              All warranties include parts and labor.
            </p>
            <a href={phoneHref} className="bg-[#B91C1C] hover:bg-[#991B1B] text-white inline-flex items-center gap-2 font-bold py-3 px-8 uppercase tracking-wider transition-colors rounded-md">
              <Phone size={18} /> Call {CONTACT.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PDCSpasPage;
