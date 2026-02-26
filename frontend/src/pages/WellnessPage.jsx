import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Moon, Heart, Users, Activity, ChevronRight, Phone, Sparkles, Leaf, Star } from 'lucide-react';
import { WELLNESS_BENEFITS, CONTACT } from '../data/constants';

const iconMap = {
  Droplets,
  Moon,
  Heart,
  Users,
  Activity,
};

// Wellness benefit images
const BENEFIT_IMAGES = {
  hydrotherapy: 'https://images.unsplash.com/photo-1544843776-7c98a52e08a4?w=800&q=80',
  sleep: 'https://images.pexels.com/photos/6941126/pexels-photo-6941126.jpeg?auto=compress&w=800',
  stress: 'https://images.unsplash.com/photo-1570039399309-e7ad6f463b65?w=800&q=80',
  family: 'https://images.pexels.com/photos/3851263/pexels-photo-3851263.jpeg?auto=compress&w=800',
  arthritis: 'https://images.pexels.com/photos/7224672/pexels-photo-7224672.jpeg?auto=compress&w=800',
};

// Additional wellness images
const GALLERY_IMAGES = [
  {
    src: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon_2_White_HighAngle_Water.jpg?lossy=2&strip=1&webp=1',
    alt: 'Hot tub with water jets',
    caption: 'Powerful hydrotherapy jets'
  },
  {
    src: 'https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegeon2_Lifestyle_4.jpg?lossy=2&strip=1&webp=1',
    alt: 'Outdoor hot tub lifestyle',
    caption: 'Your backyard oasis'
  },
  {
    src: 'https://images.pexels.com/photos/33405520/pexels-photo-33405520.jpeg?auto=compress&w=800',
    alt: 'Peaceful hot tub setting',
    caption: 'Connect with nature'
  },
];

const WellnessPage = () => {
  return (
    <div className="pt-36 pb-20" data-testid="wellness-page">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://b4087952.smushcdn.com/4087952/wp-content/uploads/2025/06/GR_Muskegon_2_White_HighAngle_Water.jpg?lossy=2&strip=1&webp=1"
            alt="Hot tub wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="text-[#D4AF37]" size={24} />
            <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">Wellness & Relaxation</span>
            <Sparkles className="text-[#D4AF37]" size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Barlow_Condensed'] text-5xl md:text-7xl font-bold uppercase mb-6"
          >
            Live Your <span className="text-[#B91C1C]">Best Life</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8"
          >
            Life throws all sorts of hurdles at us—muscle aches, stiff joints, and the general chaos of everyday life. 
            Discover how a hot tub can help you feel better, ease your aches, and truly relax.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/hot-tubs" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Explore Hot Tubs <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
        
{/* Scroll indicator removed as per user request */}
      </section>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-5xl font-bold text-[#0A1628] mb-6">
            The Healing Power of Warm Water
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For centuries, people have turned to the soothing comfort of warm water to calm their aches and stress. 
            From the lavish baths of ancient Rome to the cozy hot tubs we love today, a warm soak has the power to relax both body and mind.
          </p>
        </motion.div>
        
        {/* Health Benefits Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
          data-testid="health-benefits-video"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-center text-[#0A1628] mb-8">
            Health Benefits of Hot Tubs
          </h2>
          <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls
              className="w-full h-full object-cover"
            >
              <source src="https://customer-assets.emergentagent.com/job_wet-test-preview/artifacts/7cncod5z_Hot%20Tub%20Benefits%20Upstate%20Hot%20Tubs%20Simpsonville%20SC.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
        
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-24"
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden aspect-[4/3]"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="space-y-32 mb-24">
          {WELLNESS_BENEFITS.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] || Heart;
            const isEven = idx % 2 === 0;
            const benefitImage = BENEFIT_IMAGES[benefit.id];
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center`}
              >
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-16 h-16 bg-[#B91C1C] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <h3 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628]">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {getBenefitPoints(benefit.id).map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Leaf className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative overflow-hidden rounded-lg shadow-2xl ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  {benefitImage ? (
                    <img 
                      src={benefitImage}
                      alt={benefit.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <Icon className="text-[#B91C1C]/30" size={120} />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
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
          className="bg-[#0A1628] text-white py-20 px-8 mb-24 -mx-4 md:-mx-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#B91C1C] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-center mb-4">
              The Science Behind <span className="text-[#D4AF37]">Hydrotherapy</span>
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Research shows that regular hot tub use can provide significant health benefits
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '37°C', label: 'Optimal Water Temp', sublabel: 'For therapeutic benefits' },
                { value: '15-20', label: 'Minutes for Relief', sublabel: 'Per session recommended' },
                { value: '40%', label: 'Stress Reduction', sublabel: 'Reported by users' },
                { value: '100%', label: 'Made in America', sublabel: 'Quality you can trust' },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white font-semibold mb-1">{stat.label}</p>
                  <p className="text-slate-500 text-sm">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-center text-[#0A1628] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Since getting our hot tub, my chronic back pain has improved significantly. The nightly soaks have become our family's favorite way to unwind together.",
                author: "Sarah M.",
                location: "Greenville, SC",
                rating: 5
              },
              {
                quote: "I was skeptical at first, but the hydrotherapy jets have done wonders for my arthritis. I can't imagine life without our hot tub now!",
                author: "Robert T.",
                location: "Spartanburg, SC",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 relative"
              >
                <div className="absolute top-6 left-6 text-6xl text-[#B91C1C]/10 font-serif">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 italic mb-6 relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <p className="font-semibold text-[#0A1628]">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Feature Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-center text-[#0A1628] mb-12">
            Why Choose Hydrotherapy?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: 'Joint Relief', desc: 'Buoyancy reduces pressure on joints by up to 90%' },
              { icon: Heart, title: 'Better Circulation', desc: 'Warm water dilates blood vessels for improved flow' },
              { icon: Moon, title: 'Quality Sleep', desc: 'Evening soaks prepare your body for deeper rest' },
              { icon: Activity, title: 'Muscle Recovery', desc: 'Heat and massage accelerate healing after exercise' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-6 text-center hover:border-[#B91C1C] hover:shadow-lg transition-all"
              >
                <feature.icon className="text-[#B91C1C] mx-auto mb-4" size={40} />
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#B91C1C] to-[#7F1D1D] text-white p-12 -mx-4 md:-mx-8"
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our showroom and experience the benefits of hydrotherapy firsthand with a complimentary "Wet Test." 
            We have robes, towels, and slippers ready for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hot-tubs" 
              className="bg-white text-[#B91C1C] font-['Barlow_Condensed'] font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-lg"
              data-testid="shop-hot-tubs-btn"
            >
              Shop Hot Tubs <ChevronRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white font-['Barlow_Condensed'] font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              data-testid="schedule-visit-btn"
            >
              Schedule a Visit
            </Link>
            <a 
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
              className="border-2 border-white/50 text-white font-semibold px-8 py-4 inline-flex items-center justify-center gap-2 hover:border-white hover:bg-white/10 transition-colors"
            >
              <Phone size={18} /> {CONTACT.phone}
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Helper function to get benefit points
const getBenefitPoints = (id) => {
  const points = {
    hydrotherapy: [
      'Improves blood circulation throughout the body',
      'Relieves muscle tension and soreness',
      'Reduces inflammation and swelling',
    ],
    sleep: [
      'Body temperature drop after soaking promotes drowsiness',
      'Reduces anxiety that can interfere with sleep',
      'Creates a relaxing bedtime routine',
    ],
    stress: [
      'Triggers release of endorphins (natural mood boosters)',
      'Lowers cortisol levels in the body',
      'Provides dedicated time for mindfulness and relaxation',
    ],
    family: [
      'Screen-free environment for meaningful conversations',
      'Creates lasting memories together',
      'Teaches children the value of relaxation',
    ],
    arthritis: [
      'Warm water soothes stiff, painful joints',
      'Buoyancy takes pressure off joints',
      'Regular use can improve flexibility and range of motion',
    ],
  };
  return points[id] || [];
};

export default WellnessPage;
