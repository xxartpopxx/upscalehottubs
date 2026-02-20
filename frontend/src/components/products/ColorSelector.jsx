import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SHELL_COLORS, CABINET_COLORS } from '../../data/products';

const ColorSelector = ({ 
  shellColors = ['white', 'silver', 'opal'], 
  cabinetColors = ['coastalGray', 'walnut', 'barnwood', 'black'],
  selectedShell,
  selectedCabinet,
  onShellChange,
  onCabinetChange 
}) => {
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
            return (
              <motion.button
                key={colorKey}
                onClick={() => onShellChange(colorKey)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedShell === colorKey 
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
            return (
              <motion.button
                key={colorKey}
                onClick={() => onCabinetChange(colorKey)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedCabinet === colorKey 
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
