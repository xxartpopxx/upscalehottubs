import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, Phone, MapPin, Calendar } from 'lucide-react';
import { CONTACT } from '../data/constants';

const HoursPage = () => {
  const hours = [
    { day: 'Monday', time: 'Closed - By Appt only', isSpecial: true },
    { day: 'Tuesday', time: '12pm - 7pm', isSpecial: false },
    { day: 'Wednesday', time: '12pm - 7pm', isSpecial: false },
    { day: 'Thursday', time: '12pm - 7pm', isSpecial: false },
    { day: 'Friday', time: '12pm - 7pm', isSpecial: false },
    { day: 'Saturday', time: '10am - 6pm', isSpecial: false },
    { day: 'Sunday', time: '12pm - 4pm', isSpecial: false },
  ];

  return (
    <>
      <Helmet>
        <title>Store Hours | Upstate Hot Tubs | Simpsonville, SC</title>
        <meta name="description" content="Visit Upstate Hot Tubs in Simpsonville, SC. Open Tuesday-Friday 12pm-7pm, Saturday 10am-6pm, Sunday 12pm-4pm. Call us for appointments!" />
      </Helmet>
      
      <div className="pt-40 pb-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fc 20%, #d0e8f7 50%, #b8dcf2 80%, #a0d0ed 100%)' }} data-testid="hours-page">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B91C1C] rounded-full mb-6">
              <Clock className="text-white" size={40} />
            </div>
            <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Store <span className="text-[#B91C1C]">Hours</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're here to help you find the perfect wellness solution. Visit our showroom or schedule an appointment!
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
          >
            <div className="bg-[#0A1628] text-white p-6 text-center">
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">Weekly Schedule</h2>
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {hours.map((item, idx) => (
                  <motion.div 
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className={`flex justify-between items-center py-3 border-b border-slate-100 last:border-0 ${item.isSpecial ? 'bg-slate-50 -mx-6 md:-mx-8 px-6 md:px-8' : ''}`}
                  >
                    <span className={`font-semibold text-lg ${item.isSpecial ? 'text-[#B91C1C]' : 'text-[#0A1628]'}`}>
                      {item.day}
                    </span>
                    <span className={`text-lg ${item.isSpecial ? 'text-[#B91C1C] font-medium' : 'text-slate-600'}`}>
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special Note */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="bg-[#B91C1C] text-white p-8 rounded-xl text-center mb-12"
          >
            <Calendar className="mx-auto mb-4" size={36} />
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase mb-3">
              Need a Different Time?
            </h3>
            <p className="text-xl mb-4">
              Call us and we will open when you can come. We will set up an appointment for you.
            </p>
            <a 
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-[#B91C1C] px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors rounded-lg"
            >
              <Phone size={20} /> Call Now: {CONTACT.phone}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <MapPin className="mx-auto text-[#B91C1C] mb-4" size={36} />
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Visit Our Showroom</h3>
            <p className="text-lg text-slate-600 mb-6">{CONTACT.address}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MapPin size={18} /> Get Directions
              </a>
              <Link 
                to="/contact"
                className="bg-[#0A1628] text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HoursPage;
