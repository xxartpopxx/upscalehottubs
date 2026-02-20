import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, linkPrefix = '/products' }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <motion.div 
          key={product.id} 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: idx * 0.05 }}
        >
          <ProductCard product={product} linkPrefix={linkPrefix} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
