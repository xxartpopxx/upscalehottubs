import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { SHELL_COLORS, CABINET_COLORS } from '../../data/products';

// Color overlay component that applies tints to specific regions
const ColorOverlay = ({ shellColor, cabinetColor, baseImage, productName }) => {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Shell color values for tinting
  const shellHex = SHELL_COLORS[shellColor]?.hex || '#F5F5F0';
  const cabinetHex = CABINET_COLORS[cabinetColor]?.hex || '#6B7280';
  
  return (
    <div className="relative w-full h-full">
      {/* Base product image */}
      <img 
        src={baseImage} 
        alt={productName}
        className="w-full h-full object-contain"
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Shell color overlay - positioned over the shell area (top portion) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${shellHex}20 0%, ${shellHex}15 40%, transparent 60%)`,
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* Cabinet color overlay - positioned over cabinet area (bottom portion) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 50%, ${cabinetHex}30 70%, ${cabinetHex}40 100%)`,
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* Color indicator badges */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <div 
          className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm text-xs font-medium"
          style={{ borderLeft: `4px solid ${shellHex}` }}
        >
          Shell: {SHELL_COLORS[shellColor]?.name}
        </div>
        <div 
          className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm text-xs font-medium"
          style={{ borderLeft: `4px solid ${cabinetHex}` }}
        >
          Cabinet: {CABINET_COLORS[cabinetColor]?.name}
        </div>
      </div>
    </div>
  );
};

const ColorSelector = ({ 
  shellColors = ['white', 'silver', 'opal'], 
  cabinetColors = ['coastalGray', 'walnut', 'barnwood', 'black'],
  selectedShell,
  selectedCabinet,
  onShellChange,
  onCabinetChange,
  baseImage,
  productName,
  showVisualizer = false
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="space-y-6">
      {/* Color Visualizer Preview */}
      {showVisualizer && baseImage && (
        <div className="bg-slate-100 aspect-video rounded-lg overflow-hidden relative">
          <ColorOverlay 
            shellColor={selectedShell}
            cabinetColor={selectedCabinet}
            baseImage={baseImage}
            productName={productName}
          />
        </div>
      )}
      
      <div className="bg-slate-50 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628]">
            Customize Your Spa Colors
          </h3>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Color information"
          >
            <Info size={20} />
          </button>
        </div>
        
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-blue-50 border border-blue-200 text-blue-800 p-4 text-sm rounded"
          >
            <p className="font-semibold mb-1">Color Visualization</p>
            <p>The color preview shows an approximation of your selected colors. Actual colors may vary slightly. Contact us for physical color samples.</p>
          </motion.div>
        )}
        
        {/* Shell Colors */}
        <div>
          <p className="text-sm font-semibold text-slate-600 mb-3">Shell Color</p>
          <div className="flex gap-3 flex-wrap">
            {shellColors.map((colorKey) => {
              const color = SHELL_COLORS[colorKey];
              if (!color) return null;
              const isSelected = selectedShell === colorKey;
              
              return (
                <motion.button
                  key={colorKey}
                  onClick={() => onShellChange(colorKey)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  data-testid={`shell-color-${colorKey}`}
                  aria-label={`Select ${color.name} shell color`}
                >
                  <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    isSelected
                      ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                      : 'border-slate-200 hover:border-slate-400'
                  }`}>
                    {color.image ? (
                      <img 
                        src={color.image} 
                        alt={color.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = color.hex;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                    )}
                    {isSelected && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg"
                      >
                        <Check className="text-[#B91C1C]" size={24} strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                  <p className={`text-xs mt-1 text-center font-medium ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                    {color.name.split(' ')[0]}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
        
        {/* Cabinet Colors */}
        <div>
          <p className="text-sm font-semibold text-slate-600 mb-3">Cabinet Color</p>
          <div className="flex gap-3 flex-wrap">
            {cabinetColors.map((colorKey) => {
              const color = CABINET_COLORS[colorKey];
              if (!color) return null;
              const isSelected = selectedCabinet === colorKey;
              
              return (
                <motion.button
                  key={colorKey}
                  onClick={() => onCabinetChange(colorKey)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  data-testid={`cabinet-color-${colorKey}`}
                  aria-label={`Select ${color.name} cabinet color`}
                >
                  <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    isSelected
                      ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                      : 'border-slate-200 hover:border-slate-400'
                  }`}>
                    {color.image ? (
                      <img 
                        src={color.image} 
                        alt={color.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = color.hex;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                    )}
                    {isSelected && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center rounded-lg"
                      >
                        <Check className="text-[#B91C1C]" size={24} strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                  <p className={`text-xs mt-1 text-center font-medium ${isSelected ? 'text-[#B91C1C]' : 'text-slate-600'}`}>
                    {color.name.split(' ')[0]}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
        
        {/* Selected color summary */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded border border-slate-300"
              style={{ backgroundColor: SHELL_COLORS[selectedShell]?.hex }}
            />
            <span className="text-sm">
              <span className="text-slate-500">Shell:</span>{' '}
              <span className="font-semibold text-[#0A1628]">{SHELL_COLORS[selectedShell]?.name}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded border border-slate-300"
              style={{ backgroundColor: CABINET_COLORS[selectedCabinet]?.hex }}
            />
            <span className="text-sm">
              <span className="text-slate-500">Cabinet:</span>{' '}
              <span className="font-semibold text-[#0A1628]">{CABINET_COLORS[selectedCabinet]?.name}</span>
            </span>
          </div>
        </div>
        
        <p className="text-xs text-slate-400 italic">
          Color preview is approximate. Actual product colors may vary. Contact us for physical samples.
        </p>
      </div>
    </div>
  );
};

export { ColorOverlay };
export default ColorSelector;
