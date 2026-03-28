import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Check, MapPin, Phone, Clock, Star, Zap, Heart, Shield } from 'lucide-react';
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

  const benefits = [
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
        <title>Red Light Therapy Membership | Fire & Ice Society | Naples FL & Greenville SC</title>
        <meta name="description" content="Experience the benefits of red light therapy at Fire & Ice Society. Boost cellular regeneration, reduce inflammation, and improve skin health. Memberships available in Naples FL and Greenville SC." />
        <meta name="keywords" content="red light therapy, membership, Naples FL, Greenville SC, cellular regeneration, inflammation, skin health, wellness" />
      </Helmet>

      <div className="pt-32 pb-20 min-h-screen" style={{ background: 'linear-gradient(180deg, #0A1628 0%, #1a2d4a 50%, #0A1628 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Hero Section with Fire & Ice Society Logo */}
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
            
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mb-4">
              Red Light Therapy
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Naples FL • Greenville SC
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Enhance recovery and skin health with red light therapy. Boosts cellular regeneration, reduces inflammation, and improves overall wellness.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase text-white text-center mb-8">
              Benefits of Red Light Therapy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => {
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
            className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 p-8 md:p-12 text-center"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold uppercase text-white mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Experience the transformative benefits of red light therapy combined with our saunas and cold plunges. Contact us today to learn more about membership options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all"
              >
                Contact Us
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
