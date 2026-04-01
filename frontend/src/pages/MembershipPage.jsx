import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Check, MapPin, Phone, Star, Zap, Heart, Shield, Thermometer, Snowflake, Droplets, Sun, Brain, Activity, Moon, Smile } from 'lucide-react';
import { CONTACT } from '../data/constants';

const MembershipPage = () => {
  const redLightPackages = [
    {
      name: 'Drop-in Session',
      price: '$34.95',
      priceValue: 34.95,
      sessions: 1,
      perSession: '$34.95',
      popular: false,
      description: 'Perfect for trying out red light therapy'
    },
    {
      name: '5 Session Package',
      price: '$99.95',
      priceValue: 99.95,
      sessions: 5,
      perSession: '$19.99',
      popular: false,
      savings: 'Save $74.80',
      description: 'Great starter package for consistent therapy'
    },
    {
      name: '10 Session Package',
      price: '$174.95',
      priceValue: 174.95,
      sessions: 10,
      perSession: '$17.50',
      popular: true,
      savings: 'Save $174.55',
      description: 'Most popular choice for regular users'
    },
    {
      name: '20 Session Package',
      price: '$220.95',
      priceValue: 220.95,
      sessions: 20,
      perSession: '$11.05',
      popular: false,
      savings: 'Save $478.05',
      description: 'Best value for committed wellness enthusiasts'
    },
    {
      name: '30 Session Package',
      price: '$299.95',
      priceValue: 299.95,
      sessions: 30,
      perSession: '$10.00',
      popular: false,
      savings: 'Save $748.55',
      description: 'Ultimate savings for dedicated users'
    }
  ];

  const saunaBenefits = [
    { icon: Sparkles, text: 'Detox + Cleanse' },
    { icon: Heart, text: 'Improves Skin' },
    { icon: Activity, text: 'Muscle Recovery' },
    { icon: Zap, text: 'Gain Longevity' },
    { icon: Smile, text: 'Boosts Mood' },
    { icon: Heart, text: 'Improves Heart Health' },
    { icon: Activity, text: 'Boosts Metabolism' },
    { icon: Shield, text: 'Manages Pain' }
  ];

  const coldPlungeBenefits = [
    { icon: Shield, text: 'Reduce Inflammation' },
    { icon: Activity, text: 'Muscle Recovery' },
    { icon: Heart, text: 'Improve Circulation' },
    { icon: Brain, text: 'Sharpen Focus' },
    { icon: Shield, text: 'Strengthen Immune Response' },
    { icon: Moon, text: 'Boost Sleep Quality' },
    { icon: Zap, text: 'Manage Pain' },
    { icon: Smile, text: 'Releases Endorphins' }
  ];

  const redLightBenefits = [
    {
      icon: Zap,
      title: 'Cellular Regeneration',
      description: 'Boosts cellular energy production and promotes healing at the cellular level'
    },
    {
      icon: Heart,
      title: 'Reduces Inflammation',
      description: 'Helps reduce inflammation throughout the body for pain relief and faster recovery'
    },
    {
      icon: Sparkles,
      title: 'Skin Health',
      description: 'Improves skin tone, reduces wrinkles, and promotes collagen production'
    },
    {
      icon: Shield,
      title: 'Overall Wellness',
      description: 'Supports immune function and enhances overall well-being'
    }
  ];

  const experienceSteps = [
    {
      step: 1,
      title: 'Start in the Sauna',
      description: 'Spend 20-30 minutes letting the infrared heat deeply detoxify and prepare your body.'
    },
    {
      step: 2,
      title: 'Take a Vitamin-C Shower',
      description: 'Rinse off with the Vitamin C-infused water to cool down while rejuvenating your skin.'
    },
    {
      step: 3,
      title: 'Dive into the Cold Plunge',
      description: 'Spend 2-5 minutes in the cold plunge to complete the contrast therapy cycle.'
    },
    {
      step: 4,
      title: 'Repeat',
      description: 'For maximum benefits, alternate between the sauna and cold plunge 2-3 times during your session.'
    }
  ];

  const locations = [
    {
      name: 'Naples, FL',
      address: 'Naples, Florida',
      phone: CONTACT.phone
    },
    {
      name: 'Greenville, SC',
      address: 'Greenville, South Carolina',
      phone: CONTACT.phone
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contrast Therapy Membership | Fire & Ice Society | Sauna & Cold Plunge | Naples FL & Greenville SC</title>
        <meta name="description" content="Experience transformative wellness with Contrast Therapy at Fire & Ice Society. Infrared sauna, cold plunge, and red light therapy. Boost recovery, relaxation, and energy. Naples FL and Greenville SC." />
        <meta name="keywords" content="contrast therapy, infrared sauna, cold plunge, red light therapy, membership, Naples FL, Greenville SC, wellness, recovery, detox" />
      </Helmet>

      <div className="pt-32 pb-20 min-h-screen" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1a2d4a 50%, #0A1628 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Hero Section - Contrast Therapy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* Fire & Ice Society Logo */}
            <div className="mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_8226c24b-6311-47f9-9be8-469ca8f02819/artifacts/8g6dmvt0_unnamed.png"
                alt="Fire & Ice Society"
                className="mx-auto h-48 md:h-64 w-auto object-contain"
              />
            </div>
            
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-7xl font-bold uppercase text-white mb-4">
              Contrast Therapy
            </h1>
            <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-light uppercase text-slate-300 mb-6">
              One Perfect Balance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              <span className="text-red-400 font-semibold">one suite.</span> &nbsp;&nbsp; 
              <span className="text-blue-400 font-semibold">two temperatures.</span> &nbsp;&nbsp; 
              <span className="text-purple-400 font-semibold">three experiences.</span>
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We've crafted a unique recovery journey that is a scientifically-backed approach to self-care, 
              combining hot and cold temperatures for optimal mental and physical performance and wellness.
            </p>
          </motion.div>

          {/* Private Suite Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                Each <span className="text-white font-bold">private suite</span> is a luxurious haven where you can personalize your wellness routine in complete privacy. 
                This isn't just about recovery—it's an <span className="text-white font-bold">immersive experience</span> designed for both relaxation and rejuvenation.
              </p>
            </div>
          </motion.div>

          {/* Hot Meets Cold Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-center mb-4">
              <span className="text-red-500">Hot</span> <span className="text-white italic font-light">Meets</span> <span className="text-blue-400">Cold</span>
            </h2>
            <p className="text-xl text-slate-400 text-center mb-12">Infrared Sauna and Cold Plunge</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Infrared Sauna Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/40 to-orange-900/20 backdrop-blur-sm border border-red-500/30 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="text-white" size={28} />
                    <span className="text-white text-sm uppercase tracking-widest font-semibold">Heat for Relaxation</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-4">Infrared Sauna</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Step into our advanced infrared sauna, designed for deep detoxification and muscle recovery. 
                    Unlike traditional saunas that heat the air around you, our infrared saunas heat your body directly 
                    and more effectively at a lower temperature.
                  </p>
                  
                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-red-400">170°F</div>
                      <div className="text-xs text-slate-400 uppercase">Temperature</div>
                    </div>
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-red-400">45 min</div>
                      <div className="text-xs text-slate-400 uppercase">Duration</div>
                    </div>
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-red-400">3-4x</div>
                      <div className="text-xs text-slate-400 uppercase">Per Week</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <h4 className="text-white font-bold uppercase tracking-wider mb-4">Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {saunaBenefits.map((benefit, idx) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <Icon className="text-red-400 flex-shrink-0" size={16} />
                          <span className="text-sm">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Cold Plunge Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4">
                  <div className="flex items-center gap-3">
                    <Snowflake className="text-white" size={28} />
                    <span className="text-white text-sm uppercase tracking-widest font-semibold">Chill for Clarity</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-4">Cold Plunge</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Take the plunge into water chilled to 48-55°F and discover the power of deliberate cold exposure. 
                    Our premium cold plunge invigorates your body, sharpens your focus, and accelerates your recovery.
                  </p>
                  
                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-blue-400">48-55°F</div>
                      <div className="text-xs text-slate-400 uppercase">Temperature</div>
                    </div>
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-blue-400">11 min</div>
                      <div className="text-xs text-slate-400 uppercase">Per Week</div>
                    </div>
                    <div className="bg-black/30 p-4 rounded">
                      <div className="text-2xl font-bold text-blue-400">3x</div>
                      <div className="text-xs text-slate-400 uppercase">Per Week</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <h4 className="text-white font-bold uppercase tracking-wider mb-4">Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {coldPlungeBenefits.map((benefit, idx) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <Icon className="text-blue-400 flex-shrink-0" size={16} />
                          <span className="text-sm">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhance Your Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-white text-center mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-12">
              Our private suites feature customizable lighting, sound, and entertainment options to help you create the perfect ambiance. 
              Stream your favorite shows, listen to relaxing music, or simply enjoy the tranquility.
            </p>

            {/* In Mix Lighting Feature Image */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative max-w-4xl mx-auto overflow-hidden rounded-lg"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_20912cd5-e4d2-47d7-9769-8eb43a585a3f/artifacts/pgmz73bt_3d81fc3ac1b5a1f4e91a179afbba6328-d1c69ebe-640w.jpg.webp"
                  alt="In Mix Lighting - Customizable LED lighting in cold plunge"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <Sun className="text-blue-400" size={24} />
                    <span className="text-white font-bold uppercase tracking-wider">In Mix Lighting</span>
                  </div>
                  <p className="text-slate-300 text-sm mt-2">Customizable LED lighting creates the perfect atmosphere for your wellness journey</p>
                </div>
              </motion.div>
            </div>

            {/* Experience Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experienceSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center relative"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    step.step === 1 ? 'bg-gradient-to-br from-red-500 to-orange-500' :
                    step.step === 2 ? 'bg-gradient-to-br from-yellow-500 to-orange-400' :
                    step.step === 3 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                    'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Red Light Therapy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold uppercase text-white mb-4">
                Red Light Therapy
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Enhance recovery and skin health with red light therapy. Boosts cellular regeneration, reduces inflammation, and improves overall wellness.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {redLightBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/15 transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Membership Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-white text-center mb-4">
              Membership Packages
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Choose the package that fits your wellness goals. All packages are valid at both Naples FL and Greenville SC locations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {redLightPackages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative bg-white border-2 ${pkg.popular ? 'border-red-500 shadow-xl shadow-red-500/20' : 'border-slate-200'} overflow-hidden`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-1 text-xs font-bold uppercase">
                      <Star className="inline-block w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${pkg.popular ? 'pt-10' : ''}`}>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-1">{pkg.name}</h3>
                    <p className="text-sm text-slate-500 mb-4">{pkg.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#B91C1C]">{pkg.price}</span>
                      {pkg.sessions > 1 && (
                        <span className="text-sm text-slate-500 ml-1">/ {pkg.sessions} sessions</span>
                      )}
                    </div>
                    
                    {pkg.sessions > 1 && (
                      <div className="text-sm text-slate-600 mb-2">
                        <span className="font-semibold">{pkg.perSession}</span> per session
                      </div>
                    )}
                    
                    {pkg.savings && (
                      <div className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 inline-block mb-4">
                        {pkg.savings}
                      </div>
                    )}
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        Valid at both locations
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        No expiration date
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        Easy booking
                      </li>
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`block w-full text-center py-3 font-bold uppercase tracking-wider transition-colors ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white'
                          : 'bg-[#0A1628] hover:bg-[#B91C1C] text-white'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Locations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-white text-center mb-8">
              Our Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locations.map((location, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-2">{location.name}</h3>
                  <p className="text-slate-300 mb-4">{location.address}</p>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Phone size={16} />
                    <span>{location.phone}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 p-8 md:p-12 text-center"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase text-white mb-4">
              Experience the Perfect Balance of Hot and Cold
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule your first session now and discover the transformative benefits of contrast therapy combined with red light therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all"
              >
                Book a Session Today
              </a>
              <a
                href="/saunas"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all border border-white/30"
              >
                View Saunas
              </a>
              <a
                href="/cold-plunges"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all border border-white/30"
              >
                View Cold Plunges
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default MembershipPage;
