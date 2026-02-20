import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Moon, Heart, Users, Activity, ChevronRight, Phone } from 'lucide-react';
import { WELLNESS_BENEFITS, CONTACT, ASSETS } from '../data/constants';

const iconMap = {
  Droplets,
  Moon,
  Heart,
  Users,
  Activity,
};

const WellnessPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="wellness-page">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon_2_White_HighAngle_Water.jpg?lossy=2&strip=1&webp=1"
            alt="Hot tub wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Barlow_Condensed'] text-5xl md:text-7xl font-bold uppercase mb-6"
          >
            Live Your <span className="text-[#B91C1C]">Best Life</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto"
          >
            Life throws all sorts of hurdles at us—muscle aches, stiff joints, and the general chaos of everyday life. 
            Discover how a hot tub can help you feel better, ease your aches, and relax.
          </motion.p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-6">
            The Healing Power of Warm Water
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For centuries, people have turned to the soothing comfort of warm water to calm their aches and stress. 
            From the lavish baths of ancient Rome to the cozy hot tubs we love today, a warm soak has the power to relax both body and mind.
          </p>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="space-y-24 mb-20">
          {WELLNESS_BENEFITS.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] || Heart;
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#B91C1C] rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-[#0A1628]">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className={`bg-gradient-to-br from-slate-100 to-slate-200 aspect-video rounded-lg overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-[#B91C1C]/30" size={120} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#0A1628] text-white py-16 px-8 mb-20 -mx-4 md:-mx-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-center mb-12">
              The Science Behind <span className="text-[#B91C1C]">Hydrotherapy</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '37°C', label: 'Optimal Water Temp' },
                { value: '15-20', label: 'Minutes for Relief' },
                { value: '40%', label: 'Stress Reduction' },
                { value: '100%', label: 'Made in America' },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 text-center mb-20"
        >
          <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6 max-w-3xl mx-auto">
            "Since getting our hot tub, my chronic back pain has improved significantly. 
            The nightly soaks have become our family's favorite way to unwind together."
          </blockquote>
          <p className="font-semibold text-[#0A1628]">— Happy Customer, Greenville SC</p>
        </motion.div>
        
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom and experience the benefits of hydrotherapy firsthand with a complimentary "Wet Test." 
            We have robes, towels, and slippers ready for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hot-tubs" 
              className="btn-primary inline-flex items-center justify-center gap-2"
              data-testid="shop-hot-tubs-btn"
            >
              Shop Hot Tubs <ChevronRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary inline-flex items-center justify-center gap-2"
              data-testid="schedule-visit-btn"
            >
              Schedule a Visit
            </Link>
            <a 
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
              className="border-2 border-[#0A1628] text-[#0A1628] font-semibold px-6 py-3 inline-flex items-center justify-center gap-2 hover:bg-[#0A1628] hover:text-white transition-colors"
            >
              <Phone size={18} /> {CONTACT.phone}
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WellnessPage;
