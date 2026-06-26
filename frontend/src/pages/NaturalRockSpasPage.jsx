import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { X, Phone, ChevronLeft, ChevronRight, Mountain, Check } from 'lucide-react';
import {
  NATURAL_ROCK_ALL,
  NATURAL_ROCK_CATEGORIES,
  NATURAL_ROCK_COLOR_OPTIONS,
} from '../data/naturalRockSpas';
import { CONTACT } from '../data/constants';
import WellnessExpertsBanner from '../components/WellnessExpertsBanner';

const formatCategoryLabel = (cat) => {
  switch (cat) {
    case 'above-ground': return 'Above-Ground';
    case 'in-ground': return 'In-Ground';
    case 'semi-in-ground': return 'Semi In-Ground';
    case 'cocktail-pool': return 'Cocktail Pool';
    default: return cat;
  }
};

// Product detail modal
const ProductModal = ({ product, onClose }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!product) return null;

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const handlePrev = () => setGalleryIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
  const handleNext = () => setGalleryIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
        data-testid="natural-rock-modal"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-[#0A1628] text-white p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">Natural Rock Spas · {formatCategoryLabel(product.category)}</p>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase mt-1">{product.name}</h2>
            <p className="text-2xl text-amber-300 font-bold mt-2">{product.price}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Gallery */}
            <div>
              <div className="relative bg-slate-100 aspect-square overflow-hidden">
                <img
                  src={gallery[galleryIndex]}
                  alt={`${product.name} - view ${galleryIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-[#0A1628] rounded-full flex items-center justify-center shadow"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-[#0A1628] rounded-full flex items-center justify-center shadow"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {galleryIndex + 1} / {gallery.length}
                    </div>
                  </>
                )}
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-5 gap-2 mt-3">
                  {gallery.slice(0, 10).map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`aspect-square overflow-hidden border-2 ${i === galleryIndex ? 'border-[#B91C1C]' : 'border-transparent'}`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-slate-700 leading-relaxed mb-4">{product.description}</p>

              {product.capacity && (
                <div className="mb-2 text-sm">
                  <span className="font-bold text-[#0A1628]">Capacity:</span> <span className="text-slate-700">{product.capacity}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="mb-2 text-sm">
                  <span className="font-bold text-[#0A1628]">Dimensions:</span> <span className="text-slate-700">{product.dimensions}</span>
                </div>
              )}
              {product.electrical && (
                <div className="mb-4 text-sm">
                  <span className="font-bold text-[#0A1628]">Electrical:</span> <span className="text-slate-700">{product.electrical}</span>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-2">Features</h4>
                  <ul className="space-y-1">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-[#B91C1C] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Color Options */}
              {product.colorOptions && product.colorOptions.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-2">Color Options</h4>
                  <div className="flex gap-3">
                    {product.colorOptions.map((colorName) => {
                      const swatch = NATURAL_ROCK_COLOR_OPTIONS.find((c) => c.name === colorName);
                      return (
                        <div key={colorName} className="text-center">
                          {swatch && (
                            <div className="w-14 h-14 overflow-hidden border border-slate-200">
                              <img src={swatch.image} alt={colorName} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <p className="text-xs mt-1 text-slate-600">{colorName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                <p className="text-xs text-slate-500 italic">
                  Price does not include shipping, utilities, or installation.
                </p>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold py-3 px-6 uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Call {CONTACT.phone}
                </a>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full bg-[#0A1628] hover:bg-slate-800 text-white font-bold py-3 px-6 uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProductCard = ({ product, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="bg-white shadow-md overflow-hidden cursor-pointer group"
    onClick={onClick}
    data-testid={`nrs-product-${product.id}`}
  >
    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
        {formatCategoryLabel(product.category)}
      </p>
      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-[#0A1628] mb-1">
        {product.name}
      </h3>
      <p className="text-xl font-bold text-[#B91C1C] mb-3">{product.price}</p>
      <p className="text-sm text-slate-600 line-clamp-2 mb-4">{product.description}</p>
      <button
        className="w-full bg-[#0A1628] text-white py-2 font-bold uppercase tracking-wider text-sm hover:bg-[#B91C1C] transition-colors"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

const NaturalRockSpasPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return NATURAL_ROCK_ALL;
    return NATURAL_ROCK_ALL.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Natural Rock Spas | American-Made Faux Rock Hot Tubs | Upstate Hot Tubs</title>
        <meta
          name="description"
          content="Authorized dealer for Natural Rock Spas — American-made, lightweight, stunningly realistic faux-rock hot tubs and cocktail pools. Above-ground, in-ground, semi in-ground, and cocktail pool options."
        />
      </Helmet>

      <div
        className="pt-40 pb-20"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, #f5efe6 20%, #ede0cc 50%, #d6c4a5 80%, #c4ad84 100%)',
        }}
        data-testid="natural-rock-spas-page"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <Mountain className="text-amber-700" size={20} />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                Authorized Dealer · American Made
              </span>
            </div>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Natural Rock Spas
            </h1>
            <p className="text-lg text-slate-700 max-w-3xl">
              Stunningly realistic. Remarkably lightweight. American made. Natural Rock Spas blend the comfort of a
              premium hot tub with the timeless beauty of natural stone — handcrafted to look like real rocks straight
              from nature.
            </p>
          </motion.div>

          {/* Wellness banner */}
          <div className="-mx-4 md:-mx-8 mb-8">
            <WellnessExpertsBanner variant="compact" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {NATURAL_ROCK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-testid={`nrs-filter-${cat.id}`}
                className={`px-4 py-2.5 font-semibold text-sm uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelected(product)}
              />
            ))}
          </div>

          {/* About the line - product-focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 shadow-md"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-[#0A1628] mb-4">
              About Natural Rock Spas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-[#0A1628] mb-2">Lightweight</h3>
                <p className="text-sm text-slate-600">
                  Indistinguishable from real rocks — but much easier to ship, install, and move if needed.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#0A1628] mb-2">American Made</h3>
                <p className="text-sm text-slate-600">
                  Each rock spa is handcrafted in the USA and meticulously textured to look like rock found in nature.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#0A1628] mb-2">Customizable</h3>
                <p className="text-sm text-slate-600">
                  Choose from above-ground, in-ground, semi in-ground, and cocktail pool configurations with multiple
                  color options.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic mt-6">
              Prices shown are starting prices from Natural Spas and do not include shipping, utilities, or installation.
              Contact us for a complete quote tailored to your installation requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default NaturalRockSpasPage;
