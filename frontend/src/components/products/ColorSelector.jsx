import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SHELL_COLORS, CABINET_COLORS } from '../../data/products';

const ColorSelector = ({ 
  shellColors = ['white', 'silver', 'opal'], 
  cabinetColors = ['coastalGray', 'walnut', 'barnwood', 'black'],
  selectedShell,
  selectedCabinet,
  onShellChange,
  onCabinetChange,
  colorImages = {}
}) => {
  // Check if a specific color combination has a dedicated image
  const hasColorImage = (shell, cabinet) => {
    const key = `${shell}-${cabinet}`;
    return colorImages && colorImages[key];
  };

  return (
    <div className="bg-slate-50 p-6 space-y-6">
      <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-[#0A1628]">
        Customize Your Spa Colors
      </h3>
      
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
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                    : 'border-slate-200 hover:border-slate-400'
                }`}
                data-testid={`shell-color-${colorKey}`}
                aria-label={`Select ${color.name} shell color`}
              >
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
                    className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center"
                  >
                    <Check className="text-[#B91C1C]" size={24} strokeWidth={3} />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Selected: <span className="font-semibold text-[#0A1628]">{SHELL_COLORS[selectedShell]?.name || 'White Satin'}</span>
        </p>
      </div>
      
      {/* Cabinet Colors */}
      <div>
        <p className="text-sm font-semibold text-slate-600 mb-3">Cabinet Color</p>
        <div className="flex gap-3 flex-wrap">
          {cabinetColors.map((colorKey) => {
            const color = CABINET_COLORS[colorKey];
            if (!color) return null;
            const isSelected = selectedCabinet === colorKey;
            const hasImage = hasColorImage(selectedShell, colorKey);
            
            return (
              <motion.button
                key={colorKey}
                onClick={() => onCabinetChange(colorKey)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-[#B91C1C] ring-2 ring-[#B91C1C] ring-offset-2' 
                    : 'border-slate-200 hover:border-slate-400'
                }`}
                data-testid={`cabinet-color-${colorKey}`}
                aria-label={`Select ${color.name} cabinet color`}
              >
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
                    className="absolute inset-0 bg-[#B91C1C]/20 flex items-center justify-center"
                  >
                    <Check className="text-[#B91C1C]" size={24} strokeWidth={3} />
                  </motion.div>
                )}
                {/* Indicator for available color image */}
                {hasImage && !isSelected && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" title="Image available" />
                )}
              </motion.button>
            );
          })}
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Selected: <span className="font-semibold text-[#0A1628]">{CABINET_COLORS[selectedCabinet]?.name || 'Coastal Gray'}</span>
        </p>
      </div>
      
      <p className="text-xs text-slate-400 italic">
        Actual colors and product may differ from on-screen representation. Contact us for samples.
      </p>
    </div>
  );
};

export default ColorSelector;
