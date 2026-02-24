import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Activity, Moon, Droplets, Brain } from 'lucide-react';

const BalneotherapyPage = () => {
  const benefits = [
    { icon: Brain, title: 'Relaxation & Stress Management', color: '#B91C1C' },
    { icon: Activity, title: 'Relieves Backaches & Lumbar Pain', color: '#0A1628' },
    { icon: Droplets, title: 'Soothes Joint & Muscle Pain', color: '#B91C1C' },
    { icon: Moon, title: 'Promotes Sleep', color: '#0A1628' },
    { icon: Heart, title: 'Improves Cardiovascular Health', color: '#B91C1C' },
  ];

  return (
    <>
      <Helmet><title>Balneotherapy | Upstate Hot Tubs</title></Helmet>
      <div className="pt-36 pb-20" data-testid="balneotherapy-page">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Balneotherapy
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start Living Your Healthiest Life! Taking a spa is enjoyable all year round, but it's even more so in the winter.
              There is nothing better than enjoying warm and relaxing water to forget the inconveniences of the cold season and appreciate its beauty.
            </p>
          </motion.div>

          {/* Benefits Icons */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="text-center" data-testid={`benefit-${i}`}>
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: b.color + '15' }}>
                  <b.icon size={28} style={{ color: b.color }} />
                </div>
                <p className="text-sm font-semibold text-[#0A1628]">{b.title}</p>
              </div>
            ))}
          </motion.div>

          {/* 20-3 Protocol */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0A1628] text-white rounded-lg p-8 mb-16 text-center">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold mb-4">20 Minutes, 3x a Week</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              That's all! To quickly feel the benefits of Balneotherapy on your health, soak in your spa for 20-30 minutes a day, 3 times a week.
              By combining your sessions with a healthy diet and physical activity, you will quickly see noticeable positive effects on your daily well-being.
            </p>
          </motion.div>

          {/* Banner Image */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <img
              src="https://static.wixstatic.com/media/5c7c78_a725475954ab44bda216d0712987486c~mv2.jpg/v1/fill/w_1744,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_a725475954ab44bda216d0712987486c~mv2.jpg"
              alt="Balneotherapy"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Detailed Sections */}
          <div className="space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">Relaxation And Stress Management</h2>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
                <p>
                  Did you know that to manage stress, medical students from many universities are required to take meditation classes?
                  Moments of relaxation in the comfort of a spa produce physiological effects comparable to these meditative sessions:
                  the mere act of soaking in hot water can help reduce stress, and even improve cognitive performance.
                </p>
                <p>
                  Spending time in a spa influences brain functions, generating physiological effects comparable to those brought on by meditation.
                  A study published in the International Journal of Aquatic Research and Education reports that a 20-minute immersion
                  in hot water causes the autonomic nervous system to adjust, just as meditation does. This reaction promotes short-term memory,
                  increases attention span, and improves brain functions that allow for the proper processing of information.
                </p>
                <p>
                  The mere fact of being immersed in a spa could influence the sympathovagal balance of the body.
                  In short, this activity leads to a decrease in anxiety and stress, and generates positive ideas while lowering blood pressure and cardiac stress.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">Backaches And Lumbar Pain</h2>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
                <p>
                  The lower back and pelvis perform a colossal task: they alone support two-thirds of our body weight.
                  According to US statistics, 75% to 80% of people will experience at least one serious back pain episode during their lifetime.
                </p>
                <p>
                  As part of a study published in the Journal of Rheumatology, patients with chronic back pain combined sessions in hot water
                  with their medication. After 3 weeks, their pain had decreased significantly and their backs had become more flexible.
                  After 6 months, these patients were able to reduce their medication intake.
                </p>
                <p>
                  With its heat and massage jets, a spa can become a very effective everyday back pain management method.
                  American doctors from the Spine-Health.com organization claim that spending time in a spa is recommended for controlling back pain.
                  It promotes blood circulation to the muscles and increases overall body flexibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalneotherapyPage;
