import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera, RotateCcw, ChevronLeft, Smartphone, Info, ZoomIn, ZoomOut, Move, Check, X as CloseIcon } from 'lucide-react';
import { HOT_TUBS, SWIM_SPAS, SAUNAS, COLD_PLUNGES } from '../data/products';

// Combine all products for selection
const ALL_PRODUCTS = [
  ...HOT_TUBS.map(p => ({ ...p, category: 'Hot Tub' })),
  ...SWIM_SPAS.map(p => ({ ...p, category: 'Swim Spa' })),
  ...SAUNAS.map(p => ({ ...p, category: 'Sauna' })),
  ...COLD_PLUNGES.map(p => ({ ...p, category: 'Cold Plunge' })),
].sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));

const ARVisualizerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [arError, setArError] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [productScale, setProductScale] = useState(1);
  const [productPosition, setProductPosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Check WebXR support on mount
  useEffect(() => {
    checkARSupport();
    return () => {
      stopCamera();
    };
  }, []);

  const checkARSupport = async () => {
    // Check for WebXR AR support
    if ('xr' in navigator) {
      try {
        const supported = await navigator.xr.isSessionSupported('immersive-ar');
        setIsARSupported(supported);
      } catch (e) {
        console.log('WebXR AR not supported:', e);
        setIsARSupported(false);
      }
    }
    // Also check for basic camera access as fallback
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setIsARSupported(true);
    }
  };

  const startCamera = async () => {
    try {
      setArError(null);
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      setIsARActive(true);
      setShowInstructions(false);
    } catch (error) {
      console.error('Camera access error:', error);
      setArError('Unable to access camera. Please ensure you have granted camera permissions and are using HTTPS.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsARActive(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setProductScale(1);
    setProductPosition({ x: 0, y: 0 });
  };

  const handleScaleUp = () => {
    setProductScale(prev => Math.min(prev + 0.1, 2));
  };

  const handleScaleDown = () => {
    setProductScale(prev => Math.max(prev - 0.1, 0.3));
  };

  const handleReset = () => {
    setProductScale(1);
    setProductPosition({ x: 0, y: 0 });
  };

  // Handle drag on touch devices
  const handleTouchMove = (e) => {
    if (!isARActive || !selectedProduct) return;
    const touch = e.touches[0];
    const container = e.target.closest('.ar-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      setProductPosition({
        x: ((touch.clientX - rect.left) / rect.width) * 100 - 50,
        y: ((touch.clientY - rect.top) / rect.height) * 100 - 50
      });
    }
  };

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
                  Select a Product
                </h2>
                
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
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
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/48'}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold truncate">{product.name}</p>
                          <p className="text-sm opacity-70">{product.category} • {product.price}</p>
                        </div>
                        {selectedProduct?.id === product.id && (
                          <Check size={20} className="text-white" />
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
                    Adjust Placement
                  </h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <button 
                      onClick={handleScaleDown}
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 text-white"
                    >
                      <ZoomOut size={24} />
                    </button>
                    <span className="text-white font-semibold">
                      {Math.round(productScale * 100)}%
                    </span>
                    <button 
                      onClick={handleScaleUp}
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 text-white"
                    >
                      <ZoomIn size={24} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleReset}
                    className="w-full btn-secondary flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={18} />
                    Reset Position
                  </button>
                </motion.div>
              )}
            </div>

            {/* AR View Panel */}
            <div className="lg:col-span-2">
              <div 
                className="ar-container relative bg-black rounded-lg overflow-hidden aspect-video"
                onTouchMove={handleTouchMove}
              >
                {/* Video Feed */}
                <video 
                  ref={videoRef}
                  className={`absolute inset-0 w-full h-full object-cover ${isARActive ? 'block' : 'hidden'}`}
                  playsInline
                  muted
                />

                {/* Product Overlay */}
                {isARActive && selectedProduct && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      left: `${50 + productPosition.x}%`,
                      top: `${50 + productPosition.y}%`,
                      transform: `translate(-50%, -50%) scale(${productScale})`,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: productScale }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={selectedProduct.images?.primary}
                      alt={selectedProduct.name}
                      className="max-w-[300px] max-h-[200px] object-contain drop-shadow-2xl"
                      style={{ 
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'
                      }}
                    />
                    <div className="bg-[#B91C1C] text-white text-center py-1 px-3 rounded mt-2 text-sm font-semibold">
                      {selectedProduct.name}
                    </div>
                  </motion.div>
                )}

                {/* Placeholder when camera is off */}
                {!isARActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#1a2d4a]">
                    <div className="text-center p-8">
                      <Camera className="w-24 h-24 text-white/20 mx-auto mb-6" />
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-4">
                        AR Preview
                      </h3>
                      <p className="text-white/60 mb-6 max-w-md">
                        {selectedProduct 
                          ? `Ready to preview: ${selectedProduct.name}` 
                          : 'Select a product and start the camera to see it in your space'}
                      </p>
                      
                      {arError && (
                        <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-red-200">
                          {arError}
                        </div>
                      )}
                      
                      <button 
                        onClick={startCamera}
                        disabled={!selectedProduct}
                        className={`btn-primary flex items-center gap-2 mx-auto ${!selectedProduct ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <Camera size={20} />
                        Start Camera
                      </button>
                    </div>
                  </div>
                )}

                {/* Stop button when active */}
                {isARActive && (
                  <button 
                    onClick={stopCamera}
                    className="absolute top-4 right-4 bg-[#B91C1C] text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                  >
                    <CloseIcon size={24} />
                  </button>
                )}

                {/* Touch hint */}
                {isARActive && selectedProduct && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Move size={16} />
                    Touch and drag to move
                  </div>
                )}
              </div>

              {/* Mobile tip */}
              <div className="mt-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 flex items-start gap-3">
                <Smartphone className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#D4AF37] mb-1">Best on Mobile</h4>
                  <p className="text-white/70 text-sm">
                    For the best AR experience, use this feature on your smartphone with the rear camera facing your backyard or patio.
                  </p>
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
                    <span>Select a hot tub, swim spa, sauna, or cold plunge from the list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span>Click "Start Camera" and grant camera permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span>Point your camera at where you want to place the product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#B91C1C] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                    <span>Touch and drag to reposition, use zoom controls to resize</span>
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
