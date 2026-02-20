import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../../data/constants';

const ProductCard = ({ product, linkPrefix = '/products' }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    product.images?.primary || product.images?.side,
    product.images?.overhead || product.images?.secondary
  ].filter(Boolean);
  
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    e.stopPropagation();
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStart(null);
  };

  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} 
      className="product-card group bg-white relative" 
      data-testid={`product-card-${product.id}`}
    >
      <Link to={`${linkPrefix}/${product.id}`}>
        <div 
          className="aspect-square overflow-hidden bg-slate-50 relative" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImage} 
              src={images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-contain p-4" 
              loading="lazy" 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }} 
              transition={{ duration: 0.3 }} 
              onError={(e) => { e.target.src = ASSETS.logo; }} 
            />
          </AnimatePresence>
          
          {/* Swipe arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImage((prev) => (prev - 1 + images.length) % images.length); }} 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" 
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImage((prev) => (prev + 1) % images.length); }} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" 
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImage(idx); }} 
                    className={`w-2 h-2 rounded-full transition-all ${currentImage === idx ? 'bg-[#B91C1C] w-4' : 'bg-slate-300'}`} 
                    aria-label={`View image ${idx + 1}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-4">
          {product.series && (
            <p className="text-xs text-[#B91C1C] font-semibold uppercase tracking-wider mb-1">{product.series}</p>
          )}
          <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#0A1628] mb-1">{product.name}</h3>
          {product.persons && <p className="text-sm text-slate-500 mb-1">{product.persons} Person</p>}
          {product.jets && <p className="text-sm text-slate-400">{product.jets} Jets</p>}
          {product.length && <p className="text-sm text-slate-400">{product.length}</p>}
          <p className="text-[#B91C1C] font-bold text-lg mt-2">{product.price}</p>
          <motion.span 
            whileHover={{ x: 5 }} 
            className="mt-3 text-sm font-semibold text-[#0A1628] group-hover:text-[#B91C1C] flex items-center gap-1 inline-block"
          >
            View Details <ChevronRight size={14} />
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
