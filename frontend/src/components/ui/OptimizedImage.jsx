import React, { useState } from 'react';

/**
 * OptimizedImage component with lazy loading, explicit dimensions, and fallback
 * Addresses Lighthouse issues:
 * - Image elements do not have explicit width and height
 * - Use efficient cache lifetimes
 * - Improve image delivery
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  fallbackSrc,
  onError,
  ...props 
}) => {
  const [error, setError] = useState(false);
  
  const handleError = (e) => {
    if (!error && fallbackSrc) {
      setError(true);
      e.target.src = fallbackSrc;
    }
    if (onError) onError(e);
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
