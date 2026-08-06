import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Heart, Activity, Stethoscope } from 'lucide-react';
import { CONTACT } from '../data/constants';

/**
 * WellnessExpertsBanner — reusable banner section emphasizing the
 * "We are your Wellness Experts — call us for your wellness appointment" message.
 * Variants: 'full' (homepage hero-style), 'compact' (slim banner above page content).
 */
const WellnessExpertsBanner = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <section
        className="relative py-6 md:py-8 px-4 text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #EA6A1E 0%, #A8481A 40%, #0A1628 100%)',
        }}
        data-testid="wellness-experts-banner-compact"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-['Barlow_Condensed'] text-2xl md:text-4xl font-black uppercase tracking-wider">
              We Are Your <span className="text-yellow-300">Wellness Experts</span>
            </h3>
            <p className="text-base md:text-lg text-white/90 mt-1">
              Call us to schedule your <span className="font-bold">wellness appointment</span> today.
            </p>
          </div>
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center gap-3 bg-white text-[#EA6A1E] hover:bg-yellow-300 hover:text-[#0A1628] font-bold text-lg md:text-xl py-3 px-6 uppercase tracking-wider transition-colors"
          >
            <Phone size={22} /> {CONTACT.phone}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-14 md:py-20 px-4 text-white overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top left, rgba(234, 106, 30,0.85), transparent 60%), radial-gradient(ellipse at bottom right, rgba(30,64,175,0.6), transparent 60%), linear-gradient(135deg, #0A1628 0%, #1a2d4a 100%)',
      }}
      data-testid="wellness-experts-banner"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
            <Stethoscope size={18} className="text-yellow-300" />
            <span className="text-sm md:text-base font-bold uppercase tracking-wider text-yellow-300">
              Your Health · Your Wellness · Your Hot Tub
            </span>
          </div>

          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none mb-3">
            We Are Your <br className="md:hidden" />
            <span className="text-yellow-300">Wellness Experts</span>
          </h2>

          <p className="text-xl md:text-3xl lg:text-4xl text-white/95 font-bold mb-2 uppercase">
            Call Us For Your <span className="text-[#FCA5A5]">Wellness Appointment</span>
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-8">
            {`Bad lab results? Poor sleep? Aches and pains? Discover what hydrotherapy can do for your blood pressure, inflammation, recovery, and stress. We'll match you to the right hot tub, swim spa, sauna, or cold plunge for your unique wellness goals.`}
          </p>

          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center gap-3 bg-[#EA6A1E] hover:bg-white hover:text-[#EA6A1E] text-white font-black text-2xl md:text-4xl py-4 md:py-5 px-8 md:px-12 uppercase tracking-wider transition-colors shadow-2xl"
          >
            <Phone size={32} className="animate-pulse" /> {CONTACT.phone}
          </a>

          {/* Wellness pillars */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mt-10">
            {[
              { icon: Heart, label: 'Heart Health' },
              { icon: Activity, label: 'Pain & Inflammation' },
              { icon: Stethoscope, label: 'Better Sleep & Stress' },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 p-3 md:p-5 text-center"
              >
                <p.icon className="mx-auto text-yellow-300" size={28} />
                <p className="font-bold text-sm md:text-base mt-2 text-white">{p.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WellnessExpertsBanner;
