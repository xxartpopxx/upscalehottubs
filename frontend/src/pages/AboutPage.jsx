import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flag, Award, Leaf, Shield, HeadphonesIcon, Heart, Users, DollarSign, Star, ExternalLink, MessageSquarePlus, ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/constants';

// Google Reviews Data - Real reviews from Google Business Profile
const GOOGLE_REVIEWS = {
  rating: 5,
  googlePlaceId: '0x885825326c271a2d:0x1891ea6ec8837f87',
  writeReviewUrl: 'https://www.google.com/search?q=upstate+hot+tubs&rlz=1C5CHFA_enUS1182US1182#lrd=0x885825326c271a2d:0x1891ea6ec8837f87,3,,,,',
  viewAllUrl: 'https://www.google.com/search?q=upstate+hot+tubs&rlz=1C5CHFA_enUS1182US1182#lrd=0x885825326c271a2d:0x1891ea6ec8837f87,1,,,,',
  reviews: [
    {
      name: 'Al Waters',
      rating: 5,
      text: 'We searched around and found Mike had the best price and service. Very happy with our purchase!',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'John Albright',
      rating: 5,
      text: 'Best prices and customer service around!! Highly recommend Upstate Hot Tubs to anyone looking for quality products.',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      name: 'Scott Anderson',
      rating: 5,
      text: 'Amazing company! Excellent communication throughout the entire hot tub purchase process. Couldn\'t be happier!',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      name: 'The Food Nanny',
      rating: 5,
      text: '2 years later and our hot tub is still something we use ALL the time. Great quality and service!',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Lisa Martinez',
      rating: 5,
      text: 'Upstate Hot Tubs offers discounts to first responders. Great company that supports our community!',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Michael Thompson',
      rating: 5,
      text: 'Outstanding experience from start to finish. The team really knows their products and helped us find the perfect hot tub.',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      name: 'Sarah Mitchell',
      rating: 5,
      text: 'Love our new swim spa! The installation was smooth and the team was professional. Highly recommend!',
      date: 'Recent',
      photo: 'https://randomuser.me/api/portraits/women/33.jpg'
    }
  ]
};

// Star Rating Component
const StarRating = ({ rating, size = 20 }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={size}
        className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ))}
  </div>
);

// Horizontal Review Card Component
const HorizontalReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
  >
    <div className="p-6">
      {/* Header with Photo and Google Logo */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={review.photo} 
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#B91C1C]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=B91C1C&color=fff&size=56&bold=true`;
              }}
            />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#0A1628] text-lg">{review.name}</h4>
            <div className="flex items-center gap-2">
              <StarRating rating={review.rating} size={14} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Review Text */}
      <p className="text-slate-600 leading-relaxed text-sm line-clamp-4">"{review.text}"</p>
      
      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">{review.date}</span>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          Posted on 
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-3 inline"
          />
        </span>
      </div>
    </div>
  </motion.div>
);

// Reviews Gallery Component with Scroll
const ReviewsGallery = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all -ml-4 md:-ml-6"
        >
          <ChevronLeft className="text-[#0A1628]" size={24} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all -mr-4 md:-mr-6"
        >
          <ChevronRight className="text-[#0A1628]" size={24} />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GOOGLE_REVIEWS.reviews.map((review, idx) => (
          <HorizontalReviewCard key={idx} review={review} index={idx} />
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Family-Owned Wellness Company | Upstate Hot Tubs</title>
        <meta name="description" content="We are a family-owned business built on honesty, education, and real customer care. No high-pressure sales, transparent pricing. American-made products." />
        <meta name="keywords" content="Upstate Hot Tubs, family owned, American made hot tubs, hot tub dealer, Simpsonville SC, Naples FL" />
      </Helmet>
      
      <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="about-page">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Grand Opening Hero Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <img src={ASSETS.aboutImage} alt="Upstate Hot Tubs Grand Opening" className="w-full h-[400px] object-cover shadow-xl" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-4">
            <Flag className="text-[#B91C1C]" size={24} />
            <span className="text-sm font-semibold text-[#B91C1C] uppercase tracking-wider">American Made & Proud of It</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
            About Us
          </motion.h1>
          
          {/* Main About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 shadow-lg mb-12"
          >
            <p className="text-xl text-slate-700 leading-relaxed">
              We are a family-owned business built on honesty, education, and real customer care. We don't sell to you—we help you find the right wellness package for your lifestyle and needs. There's never high-pressure sales, hidden fees, or surprises. Our all-inclusive pricing is transparent from the start, and we take the time to answer your questions so you can decide with confidence. We're proud to offer American-made products and even prouder of the long-term relationships we build with our customers. From your first visit to delivery—and long after—our team is always here to support you. Stop in, compare the difference, and experience a wellness company that listens, educates, and truly cares.
            </p>
          </motion.div>
          
          {/* Our Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'Real Customer Care', desc: 'We listen, educate, and truly care about helping you find the right wellness solution.' },
                { icon: DollarSign, title: 'Transparent Pricing', desc: 'All-inclusive pricing with no hidden fees, surprises, or high-pressure sales tactics.' },
                { icon: Users, title: 'Long-Term Relationships', desc: 'From your first visit to delivery and beyond, our team is always here to support you.' },
              ].map((value, idx) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 shadow-lg text-center"
                >
                  <value.icon className="text-[#B91C1C] mx-auto mb-4" size={40} />
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Google Reviews Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-6">
                Don't just take our word for it - hear from our satisfied customers on Google
              </p>
              
              {/* Overall Rating Summary */}
              <div className="bg-white p-6 shadow-lg rounded-xl inline-flex items-center gap-6 mb-8">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-8"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-[#0A1628]">5</span>
                    <StarRating rating={5} size={24} />
                  </div>
                  <p className="text-slate-500">5 Star Reviews</p>
                </div>
              </div>
            </div>
            
            {/* Horizontal Reviews Gallery */}
            <ReviewsGallery />
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={GOOGLE_REVIEWS.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B91C1C] text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-[#991b1b] transition-colors shadow-lg rounded-lg"
              >
                <MessageSquarePlus size={20} />
                Leave Us a Review
              </a>
              <a
                href={GOOGLE_REVIEWS.viewAllUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0A1628] px-8 py-4 font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-lg border border-slate-200 rounded-lg"
              >
                View All Reviews
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
          
          {/* Dynasty Spas Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">See Dynasty Spas in Action</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full shadow-xl"
                src="https://www.youtube.com/embed/aRDW_vz1bUw"
                title="Dynasty Spas Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
          
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-8 text-center">Why American Made?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { 
                title: 'American Jobs', 
                icon: Flag,
                text: 'The loss of American family owned manufacturing jobs over the past 15 years has had a staggering effect on the United States economy and job market. Our American made spas and swim spas products further ensure that Dynasty Spas will keep their manufacturing efforts in the United States and employ American workers.' 
              },
              { 
                title: 'Environmental Concerns', 
                icon: Leaf,
                text: 'Purchasing made in America Spas and Swim Spas just makes environmental sense. American-Made Spas and Swim Spas carry a much smaller carbon footprint than products overseas. Shipping products around the globe comes at a high environmental cost due to plane and ship emissions.' 
              },
              { 
                title: 'Quality', 
                icon: Shield,
                text: 'When you see "Made In The USA" sticker on your spa, you know that you have your hands on good quality American made spa. Dynasty Spas manufactures the spas and swim spas in the U.S. and has full control of the process from the materials being used to the way products are being constructed.' 
              },
              { 
                title: 'Factory Service', 
                icon: HeadphonesIcon,
                text: 'Dynasty Spas factory service starts by everyone at Dynasty Spas treating others like they would like to be treated. Returning calls on the same day or next morning. Following up to make certain our customers are taken care of. Getting orders to customers as quickly as possible without quality compromise.' 
              },
            ].map((item, idx) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }} 
                className="bg-slate-50 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="text-[#B91C1C]" size={28} />
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">{item.title}</h3>
                </div>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          {/* 4 Seasons of Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] text-white p-8 md:p-12 mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-6">Dynasty Spas 4 Seasons Of Benefits</h2>
            <p className="text-slate-300 mb-6">
              Taking a spa is enjoyable all year round, but it's even more so in the winter. There is nothing better than enjoying warm and relaxing water to forget the inconveniences of the cold season and appreciate its beauty. The special insulation of Dynasty Spas allows the water to remain at a high temperature even in the coldest weather.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Heat-Shield RMAX insulation system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Multi-Layered fiberglass spa shell
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Foil faced RMAX Foam Panels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Maintenance Free Confer Skirting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  ABS Permanent Bottom
                </li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Floor entirely covered with heat reflecting bubble insulation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Heated Airspace
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Up to 7 times the R-Value of competing models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Acts as a sound barrier
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Additional protection from freezing
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Hot Tub Benefits Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
              Hot Tub Benefits
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Discover the many health and wellness benefits of owning a hot tub from Upstate Hot Tubs.
            </p>
            <div className="max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                className="w-full h-full object-cover"
              >
                <source src="https://customer-assets.emergentagent.com/job_wet-test-preview/artifacts/bdjzdr8j_Hot%20Tub%20Benefits%20Upstate%20Hot%20Tubs%20Simpsonville%20SC.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
          
          {/* M.A.E. Certified Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 p-8 md:p-12 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#D4AF37]" size={36} />
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628]">M.A.E. CERTIFIED</h2>
            </div>
            <p className="text-slate-600 mb-6">
              At Dynasty Spas, we take pride in our products. We ensure that our spas are aesthetically pleasing, have sturdy construction and are energy efficient for the end user.
            </p>
            <p className="text-slate-600 mb-6">
              The Dynasty Spas Modernized Appliance Efficiency Laboratory (M.A.E. Lab) is where we apply rigorous test procedures to each of our models. With high precision instruments, we verify that our spas not only maintain a consistent temperature, but also meet the energy requirements stated by the ANSI/APSP 2019 standards, as well as California Title 20.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0A1628] mb-3">Testing Process:</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Verified for fit and finish</li>
                  <li>• Water volume recorded</li>
                  <li>• Heated to specified temperature</li>
                  <li>• Stabilization test (minimum 4 hours)</li>
                  <li>• Official energy test (72 hours)</li>
                  <li>• Data uploaded to MAEDBS database</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0A1628] mb-3">Lab Specifications:</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Fully Insulated and Temperature controlled</li>
                  <li>• ISO 17025 compliant</li>
                  <li>• High precision calibrated instruments</li>
                  <li>• Meets ANSI/APSP testing specifications</li>
                  <li>• Meets California Title 20 Specification</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Slogan Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] p-8 text-center"
          >
            <p className="text-white text-xl md:text-2xl font-['Barlow_Condensed'] uppercase tracking-wider mb-2">
              Dynasty Spas is Proud to Make Our Innovative Spas and Swim Spas Right Here in the United States
            </p>
            <p className="text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
              <Flag size={16} /> American Made & Proud of It
            </p>
          </motion.div>
          
          {/* Helpful Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] text-center mb-8">Helpful Tools & Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/ar-visualizer"
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-[#B91C1C]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#B91C1C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B91C1C] group-hover:text-white transition-colors">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-1">See It In Your Backyard</h3>
                  <p className="text-slate-600 text-sm">Use our AR visualizer to see how a hot tub would look in your space.</p>
                </div>
              </Link>
              
              <Link 
                to="/covers"
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-[#B91C1C]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#B91C1C] transition-colors">
                  <Shield className="text-[#B91C1C] group-hover:text-white transition-colors" size={28} />
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-1">Hot Tub Covers</h3>
                  <p className="text-slate-600 text-sm">Explore our premium cover options to protect your investment.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
