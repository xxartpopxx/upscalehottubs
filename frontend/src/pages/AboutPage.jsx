import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/constants';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Grand Opening Hero Image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <img src={ASSETS.aboutImage} alt="Upstate Hot Tubs Grand Opening" className="w-full h-[400px] object-cover shadow-xl" />
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-8">
          Why Dynasty Spas?
        </motion.h1>
        <p className="text-xl text-slate-600 mb-8">Our 4 Best Reasons to Buy "MADE IN AMERICA" Spas</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: 'American Jobs', text: 'The loss of American family owned manufacturing jobs over the past 15 years has had a staggering effect. Our American made spas ensure Dynasty Spas keeps manufacturing in the United States.' },
            { title: 'Environmental Concerns', text: 'American-Made Spas carry a much smaller carbon footprint than products overseas. Shipping products around the globe comes at a high environmental cost.' },
            { title: 'Quality', text: 'When you see "Made In The USA" sticker on your spa, you know you have good quality. Dynasty Spas has full control of the manufacturing process.' },
            { title: 'Factory Service', text: 'Dynasty spas factory service starts by treating others like they would like to be treated. Returning calls same day, following up, and getting orders out quickly.' },
          ].map((item, idx) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }} 
              className="bg-slate-50 p-8"
            >
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-[#0A1628] text-white p-8 md:p-12">
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-6">Dynasty Spas 4 Seasons Of Benefits</h2>
          <p className="text-slate-300 mb-6">
            Taking a spa is enjoyable all year round, but it's even more so in the winter. There is nothing better than enjoying warm and relaxing water to forget the inconveniences of the cold season.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
            <li>Heat-Shield RMAX insulation system</li>
            <li>Multi-Layered fiberglass spa shell</li>
            <li>Foil faced RMAX Foam Panels</li>
            <li>Maintenance Free Confer Skirting</li>
            <li>ABS Permanent Bottom</li>
            <li>Up to 7 times the R-Value of competing models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
