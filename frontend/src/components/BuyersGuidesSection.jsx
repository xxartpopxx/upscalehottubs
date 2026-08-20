import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BookOpen } from 'lucide-react';
import { BUYERS_GUIDES } from '../data/constants';

/**
 * BuyersGuidesSection — prominent block that lets visitors download our
 * Hot Tub and Sauna buying guides.
 *  - variant 'highlight' = card row with bold visuals (use on Brochure / About page)
 *  - variant 'inline' = simpler two-tile row
 */
const BuyersGuidesSection = ({ variant = 'highlight', heading = "Free Buyer's Guides" }) => {
  return (
    <section
      className="py-12 md:py-16 px-4"
      style={{
        background: variant === 'highlight'
          ? 'linear-gradient(135deg, #0A1628 0%, #1a2d4a 60%, #B91C1C 100%)'
          : 'transparent',
      }}
      data-testid="buyers-guides-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 mb-3 ${variant === 'highlight' ? 'text-yellow-300' : 'text-[#B91C1C]'}`}>
            <BookOpen size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">Free Download</span>
          </div>
          <h2 className={`font-['Barlow_Condensed'] text-3xl md:text-5xl font-black uppercase ${variant === 'highlight' ? 'text-white' : 'text-[#0A1628]'} mb-3`}>
            {heading}
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${variant === 'highlight' ? 'text-white/85' : 'text-slate-600'}`}>
            Get our complete, no-pressure buying guides — packed with sizing, features, wellness benefits, energy info,
            and what to expect from delivery to first soak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {BUYERS_GUIDES.map((g, idx) => (
            <motion.a
              key={g.id}
              href={g.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
              data-testid={`buyers-guide-${g.id}`}
            >
              <div
                className="w-full md:w-48 flex-shrink-0 flex items-center justify-center p-6"
                style={{ background: `linear-gradient(135deg, ${g.accent} 0%, #0A1628 100%)` }}
              >
                <FileText className="text-white opacity-90" size={88} />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold uppercase text-[#0A1628] mb-2">
                  {g.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-4 flex-1">{g.description}</p>
                <div
                  className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-5 uppercase tracking-wider group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: g.accent }}
                >
                  <Download size={20} /> Download PDF
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyersGuidesSection;
