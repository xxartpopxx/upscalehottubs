import React from 'react';
import { motion } from 'framer-motion';

const EventsPage = () => {
  const events = [
    { 
      title: '9-11 Reading Of The Names', 
      date: 'September 11, 2025 - 8:15am', 
      desc: '24th Anniversary of 9-11 at Gracely Park, Simpsonville' 
    },
    { 
      title: 'Christmas In July', 
      date: 'July 26, 2025 10am-5pm', 
      desc: '20% off on that day only! Complimentary drinks and cookies.' 
    },
    { 
      title: 'National Night Out', 
      date: 'August 5, 2025 6pm-8pm', 
      desc: 'Join Simpsonville Police & Firefighters at Heritage Park!' 
    },
  ];

  return (
    <div className="pt-36 pb-20" data-testid="events-page">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4"
        >
          Upstate Hot Tubs Events
        </motion.h1>
        <p className="text-xl text-slate-600 mb-12">
          We believe in our community and giving back. 10% discount to First Responders, Law Enforcement, Military and Veterans.
        </p>
        
        {events.map((event, idx) => (
          <motion.div 
            key={event.title} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1 }} 
            className="bg-slate-50 p-8 mb-6"
          >
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-2">{event.title}</h2>
            <p className="text-lg font-semibold text-[#B91C1C] mb-4">{event.date}</p>
            <p className="text-slate-600">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
