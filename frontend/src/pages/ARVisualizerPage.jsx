import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera, RotateCcw, ChevronLeft, Smartphone, Info, ZoomIn, ZoomOut, Move, Check, X as CloseIcon, ImageIcon, Upload } from 'lucide-react';
import { HOT_TUBS, SWIM_SPAS, SAUNAS, COLD_PLUNGES } from '../data/products';
import { ASSETS } from '../data/constants';

// Combine all products for selection
const ALL_PRODUCTS = [
  ...HOT_TUBS.map(p => ({ ...p, category: 'Hot Tub' })),
  ...SWIM_SPAS.map(p => ({ ...p, category: 'Swim Spa' })),
  ...SAUNAS.map(p => ({ ...p, category: 'Sauna' })),
  ...COLD_PLUNGES.map(p => ({ ...p, category: 'Cold Plunge' })),
].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));

const ARVisualizerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isARActive, setIsARActive] = useState(false);
  const [arError, setArError] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [productScale, setProductScale] = useState(1);
  const [productPosition, setProductPosition] = useState({ x: 50, y: 50 });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [mode, setMode] = useState('upload'); // 'upload' or 'camera'
  const [isDragging, setIsDragging] = useState(false);
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setArError(null);
      
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setArError('Camera access is not supported in your browser. Please try uploading an image instead.');
        return;
      }

      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Wait for video to be ready
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play()
            .then(() => {
              setIsARActive(true);
              setMode('camera');
              setShowInstructions(false);
            })
            .catch(err => {
              console.error('Video play error:', err);
              setArError('Unable to start video. Please try again.');
            });
        };
      }
    } catch (error) {
      console.error('Camera access error:', error);
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setArError('Camera permission denied. Please allow camera access in your browser settings, or upload an image instead.');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        setArError('No camera found. Please upload an image of your space instead.');
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        setArError('Camera is in use by another application. Please close other apps using the camera.');
      } else {
        setArError('Unable to access camera. Please try uploading an image instead.');
      }
    }
  };

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
      });
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsARActive(false);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setArError('Please upload an image file (JPG, PNG, etc.)');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setIsARActive(true);
        setMode('upload');
        setShowInstructions(false);
        setArError(null);
      };
      reader.onerror = () => {
        setArError('Failed to read the image. Please try another file.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setProductScale(1);
    setProductPosition({ x: 50, y: 50 });
  };

  const handleScaleUp = () => {
    setProductScale(prev => Math.min(prev + 0.15, 3));
  };

  const handleScaleDown = () => {
    setProductScale(prev => Math.max(prev - 0.15, 0.2));
  };

  const handleReset = () => {
    setProductScale(1);
    setProductPosition({ x: 50, y: 50 });
  };

  const handleClear = () => {
    stopCamera();
    setUploadedImage(null);
    setIsARActive(false);
    setArError(null);
  };

  // Mouse/Touch event handlers for dragging product
  const handleMouseDown = (e) => {
    if (!isARActive || !selectedProduct) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    
    setProductPosition({
      x: Math.max(10, Math.min(90, x)),
      y: Math.max(10, Math.min(90, y))
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove);
      document.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <>
      <Helmet>
        <title>AR Visualizer | See Hot Tubs in Your Space | Upstate Hot Tubs</title>
        <meta name="description" content="Use our AR visualizer to see how a hot tub, swim spa, or sauna would look in your backyard. Virtual placement using your phone's camera." />
      </Helmet>

      <div className="min-h-screen bg-[#0A1628] pt-20">
        {/* Header */}
        <div className="bg-[#0A1628] border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors">
              <ChevronLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-['Barlow_Condensed'] text-2xl font-bold text-white uppercase">
              AR Visualizer
            </h1>
            <button 
              onClick={() => setShowInstructions(true)}
              className="text-white/70 hover:text-white"
            >
              <Info size={24} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Product Selection Panel */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="font-['Barlow_Condensed'] text-xl font-bold text-white uppercase mb-4">
                  1. Select a Product
                </h2>
                
                <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {ALL_PRODUCTS.slice(0, 20).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedProduct?.id === product.id
                          ? 'bg-[#B91C1C] text-white'
                          : 'bg-white/5 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.images?.primary} 
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded bg-white/10"
                          onError={(e) => e.target.src = ASSETS.logo}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold truncate">{product.name}</p>
                          <p className="text-sm opacity-70">{product.category} • {product.price}</p>
                        </div>
                        {selectedProduct?.id === product.id && (
                          <Check size={20} className="text-white flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls */}
              {selectedProduct && isARActive && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-lg p-6"
                >
                  <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-white uppercase mb-4">
                    3. Adjust Size
                  </h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <button 
                      onClick={handleScaleDown}
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 text-white active:scale-95 transition-transform"
                    >
                      <ZoomOut size={24} />
                    </button>
                    <span className="text-white font-semibold min-w-[60px] text-center">
                      {Math.round(productScale * 100)}%
                    </span>
                    <button 
                      onClick={handleScaleUp}
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 text-white active:scale-95 transition-transform"
                    >
                      <ZoomIn size={24} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleReset}
                    className="w-full btn-secondary flex items-center justify-center gap-2 mb-3"
                  >
                    <RotateCcw size={18} />
                    Reset Position & Size
                  </button>
                  
                  <button 
                    onClick={handleClear}
                    className="w-full bg-white/10 text-white py-2 px-4 rounded hover:bg-white/20 flex items-center justify-center gap-2"
                  >
                    <CloseIcon size={18} />
                    Clear & Start Over
                  </button>
                </motion.div>
              )}
            </div>

            {/* AR View Panel */}
            <div className="lg:col-span-2">
              <div 
                ref={containerRef}
                className="ar-container relative bg-black rounded-lg overflow-hidden aspect-video select-none"
                style={{ touchAction: 'none' }}
              >
                {/* Camera Video Feed */}
                <video 
                  ref={videoRef}
                  className={`absolute inset-0 w-full h-full object-cover ${isARActive && mode === 'camera' ? 'block' : 'hidden'}`}
                  playsInline
                  muted
                  autoPlay
                />

                {/* Uploaded Image */}
                {isARActive && mode === 'upload' && uploadedImage && (
                  <img 
                    src={uploadedImage}
                    alt="Your space"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Product Overlay */}
                {isARActive && selectedProduct && (
                  <div
                    className={`absolute cursor-move ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{
                      left: `${productPosition.x}%`,
                      top: `${productPosition.y}%`,
                      transform: `translate(-50%, -50%) scale(${productScale})`,
                      transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                      zIndex: 10,
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                  >
                    <img 
                      src={selectedProduct.images?.primary}
                      alt={selectedProduct.name}
                      className="max-w-[250px] max-h-[180px] object-contain pointer-events-none"
                      style={{ 
                        filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.6))',
                      }}
                      draggable={false}
                    />
                    <div className="bg-[#B91C1C] text-white text-center py-1 px-3 rounded mt-2 text-xs font-semibold pointer-events-none">
                      {selectedProduct.name}
                    </div>
                  </div>
                )}

                {/* Placeholder when not active */}
                {!isARActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#1a2d4a]">
                    <div className="text-center p-8 max-w-md">
                      <Camera className="w-20 h-20 text-white/20 mx-auto mb-4" />
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-2">
                        2. Add Your Space
                      </h3>
                      <p className="text-white/60 mb-6">
                        {selectedProduct 
                          ? `Ready to preview: ${selectedProduct.name}` 
                          : 'First select a product, then add an image of your space'}
                      </p>
                      
                      {arError && (
                        <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-red-200 text-sm">
                          {arError}
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        {/* Upload Image Button - Primary */}
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          disabled={!selectedProduct}
                          className={`btn-primary w-full flex items-center justify-center gap-2 ${!selectedProduct ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <Upload size={20} />
                          Upload Photo of Your Space
                        </button>
                        
                        {/* Camera Button - Secondary */}
                        <button 
                          onClick={startCamera}
                          disabled={!selectedProduct}
                          className={`w-full bg-white/10 text-white py-3 px-6 rounded font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors ${!selectedProduct ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <Camera size={20} />
                          Use Camera (if available)
                        </button>
                      </div>
                      
                      <input 
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}

                {/* Stop/Clear button when active */}
                {isARActive && (
                  <button 
                    onClick={handleClear}
                    className="absolute top-4 right-4 bg-[#B91C1C] text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-20"
                  >
                    <CloseIcon size={20} />
                  </button>
                )}

                {/* Drag hint */}
                {isARActive && selectedProduct && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 z-20">
                    <Move size={16} />
                    Drag product to reposition
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 flex items-start gap-3">
                  <ImageIcon className="text-[#D4AF37] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#D4AF37] mb-1 text-sm">Best Results</h4>
                    <p className="text-white/70 text-xs">
                      Upload a photo of your backyard or patio for the most realistic visualization.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
                  <Smartphone className="text-white/50 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white/70 mb-1 text-sm">Camera Option</h4>
                    <p className="text-white/50 text-xs">
                      Camera requires HTTPS and browser permissions. Upload works everywhere!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Modal */}
        {showInstructions && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowInstructions(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#0A1628] max-w-lg w-full rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-2 bg-[#B91C1C]" />
              <div className="p-8">
                <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-6">
                  How to Use AR Visualizer
                </h2>
                
                <ol className="space-y-4 text-white/80 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                    <span>Select a hot tub, swim spa, sauna, or cold plunge from the product list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span><strong>Upload a photo</strong> of your backyard/patio, or use your camera if available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span><strong>Drag the product</strong> to position it where you want in your space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                    <span>Use the <strong>zoom controls</strong> to resize the product to scale</span>
                  </li>
                </ol>
                
                <button 
                  onClick={() => setShowInstructions(false)}
                  className="btn-primary w-full"
                >
                  Got It!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
    </>
  );
};

export default ARVisualizerPage;
