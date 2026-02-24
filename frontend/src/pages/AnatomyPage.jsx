import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AnatomyPage = () => {
  const features = [
    { num: '1', title: 'Top Side Control', desc: 'Digital controls for easy temperature and jet management.' },
    { num: '2', title: 'Built-In Filtration Cartridge', desc: 'Integrated filtration system for crystal clear water.' },
    { num: '3', title: 'Safe Entrance Steps and Child Seat', desc: 'Designed for safe entry and family-friendly seating.' },
    { num: '4', title: 'Waterfall Features on Select Models', desc: 'Cascading waterfalls for enhanced ambiance.' },
    { num: '5', title: 'Trapezius and Cervical Station', desc: 'Targeted therapy for neck and upper back muscles.' },
    { num: '6', title: 'Sciatic Nerve', desc: 'Jets positioned to relieve sciatic nerve pain.' },
    { num: '7', title: 'Zero Gravity Lounge Chair', desc: 'Full-body reclined seating for weightless relaxation.' },
    { num: '8', title: 'Reflexology Diffuser', desc: 'Foot zone therapy through specialized jets.' },
  ];

  return (
    <>
      <Helmet><title>Anatomy of a Spa | Upstate Hot Tubs</title></Helmet>
      <div className="pt-36 pb-20" data-testid="anatomy-page">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Anatomy of a <span className="text-[#B91C1C]">Dynasty Spa</span>
            </h1>
          </motion.div>

          {/* Diagram Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-16">
            <img
              src="https://static.wixstatic.com/media/5c7c78_f1a379c6e46b491889daadb7eee3f16e~mv2.gif"
              alt="Anatomy of a Dynasty Spa"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
              data-testid="anatomy-diagram"
            />
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#B91C1C]"
                data-testid={`anatomy-feature-${i}`}
              >
                <div className="text-3xl font-bold text-[#B91C1C] mb-2">{f.num}</div>
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnatomyPage;
