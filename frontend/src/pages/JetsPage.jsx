import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const JetsPage = () => {
  const jets = [
    { img: 'https://static.wixstatic.com/media/5c7c78_c60c601749bd40778239d9e3005f65db~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JET%207.png', alt: 'Jet Type 7' },
    { img: 'https://static.wixstatic.com/media/5c7c78_c856cb6854194499833406abee9a62ef~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JET%203.png', alt: 'Jet Type 3' },
    { img: 'https://static.wixstatic.com/media/5c7c78_c33fa621ff2942d4bb75d43243452829~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JET%202.png', alt: 'Jet Type 2' },
    { img: 'https://static.wixstatic.com/media/5c7c78_092e4b552f2b4f8195048c63da14050f~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15533.png', alt: 'Multi Jet' },
    { img: 'https://static.wixstatic.com/media/5c7c78_b59d1141a9fa44a381024cbbdf87c4c2~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JET%201.png', alt: 'Jet Type 1' },
    { img: 'https://static.wixstatic.com/media/5c7c78_a7562cd4049f4a14a17a5f5482d3072f~mv2.png/v1/fill/w_269,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JET%205.png', alt: 'Jet Type 5' },
  ];

  return (
    <>
      <Helmet><title>Hot Tub Jets | Upstate Hot Tubs</title></Helmet>
      <div className="pt-36 pb-20" data-testid="jets-page">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Jets
            </h1>
            <p className="text-xl text-slate-600">Jets to suit your needs.</p>
          </motion.div>

          {/* Air/Water Multi-Jets Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-6 text-center">Air/Water Multi-Jets</h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-8">
              The combination of air and water doubles the strength of the jet, for a targeted massage on specific areas of your body.
            </p>
            {/* Main jets diagram */}
            <img
              src="https://static.wixstatic.com/media/5c7c78_cfe3af7134734c429b2080a538c75921~mv2.png/v1/fill/w_980,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c7c78_cfe3af7134734c429b2080a538c75921~mv2.png"
              alt="Air Water Multi-Jets Diagram"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8"
              data-testid="jets-diagram"
            />
          </motion.div>

          {/* Jet Types Grid */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {jets.map((jet, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center" data-testid={`jet-${i}`}>
                  <img src={jet.img} alt={jet.alt} className="w-full max-w-[200px]" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reverse Pull Neck Jets */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0A1628] text-white rounded-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Reverse Pull Neck Jets</h2>
                <p className="text-white/80 text-lg">
                  Dynasty Spas is known for its "reverse pull neck jets" technology. Found in select Dynasty spa models,
                  this technology is designed to provide a deep, relaxing massage to the shoulders and neck, targeting those areas specifically.
                  The jets are engineered to pull water in, creating a powerful and targeted massage effect that can relieve tension and stress.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://static.wixstatic.com/media/5c7c78_d93de7c249164f2fb1e2c6bec5c88cb5~mv2.png/v1/fill/w_656,h_498,al_c,q_85,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20manufacturer%2C%20is%20known%20for%20its%20_reverse%20pull%20neck%20jet.png"
                  alt="Reverse Pull Neck Jets"
                  className="w-full rounded-lg"
                  data-testid="neck-jets-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default JetsPage;
