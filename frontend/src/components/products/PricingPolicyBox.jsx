import React from 'react';
import { motion } from 'framer-motion';
import { Truck, PackageCheck, Tag, Phone } from 'lucide-react';
import { PRICING_POLICY, CONTACT } from '../../data/constants';

/**
 * PricingPolicyBox
 * Communicates shipping + what's-included + add-on pricing on product pages.
 *
 * variant="spa"  -> hot tubs & swim spas: cover included + priced add-ons (steps, lifter, chemicals)
 * variant="basic" -> saunas / cold plunges / heaters: shipping-not-included note only
 */
const PricingPolicyBox = ({ variant = 'spa' }) => {
  const { shippingNote, included, addOns } = PRICING_POLICY;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-200 rounded-lg overflow-hidden bg-white"
      data-testid="pricing-policy-box"
    >
      {/* Header */}
      <div className="bg-[#0A1628] px-5 py-3 flex items-center gap-2">
        <Tag size={18} className="text-[#D4AF37]" />
        <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-white tracking-wide">
          Pricing, Shipping &amp; Add-Ons
        </h4>
      </div>

      <div className="p-5">
        {/* Shipping note - shown for every product */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-md p-4 mb-5">
          <Truck size={22} className="text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-[#0A1628] uppercase tracking-wide mb-0.5">
              Shipping Not Included
            </p>
            <p className="text-sm text-slate-700">{shippingNote}</p>
          </div>
        </div>

        {variant === 'spa' && (
          <>
            {/* What's included */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Included With Your Hot Tub
              </p>
              {included.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-md p-3"
                >
                  <PackageCheck size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-[#0A1628]">{item.label}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                        Included
                      </span>
                    </div>
                    {item.note && <p className="text-xs text-slate-600 mt-0.5">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Popular Add-Ons
              </p>
              <div className="space-y-2">
                {addOns.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-md p-3"
                  >
                    <div>
                      <span className="text-sm font-semibold text-[#0A1628]">{item.label}</span>
                      {item.note && (
                        <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                      )}
                    </div>
                    <span className="text-sm font-bold text-[#B91C1C] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <a
          href={`tel:${CONTACT.phone}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B91C1C] hover:text-[#0A1628] transition-colors"
        >
          <Phone size={16} />
          Call {CONTACT.phone} for a full delivered quote
        </a>
      </div>
    </motion.div>
  );
};

export default PricingPolicyBox;
