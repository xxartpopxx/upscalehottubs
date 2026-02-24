import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flag, Award, Leaf, Shield, HeadphonesIcon } from 'lucide-react';
import { ASSETS } from '../data/constants';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Why Dynasty Spas | American Made Hot Tubs | Upstate Hot Tubs</title>
        <meta name="description" content="Discover why Dynasty Spas are the best American made hot tubs. Quality manufacturing, environmental responsibility, and exceptional factory service. Simpsonville SC." />
        <meta name="keywords" content="Dynasty Spas, American made hot tubs, Made in USA spas, hot tub quality, Upstate Hot Tubs, Simpsonville SC" />
      </Helmet>
      
      <div className="pt-36 pb-20" data-testid="about-page">
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
            Why Dynasty Spas?
          </motion.h1>
          <p className="text-xl text-slate-600 mb-12">Our 4 Best Reasons to Buy "MADE IN AMERICA" Spas</p>
          
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
        </div>
      </div>
    </>
  );
};

export default AboutPage;
