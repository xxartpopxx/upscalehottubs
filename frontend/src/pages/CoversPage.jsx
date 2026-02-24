import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, DollarSign, Zap } from 'lucide-react';

const CoversPage = () => {
  const products = [
    {
      name: 'Pivot Top Mount Cover Lifter',
      description: 'Spa Cover Lifts - Pivot Top Mount Spa & Hot Tub Cover Lift Removal System. Reinforced Brackets with 3 Hook Towel Rack. Easy off and easy on!',
      price: '$249.95',
      images: [
        'https://static.wixstatic.com/media/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_e3da0e551763403bba8eddb76d8df413~mv2.jpg',
        'https://static.wixstatic.com/media/5c7c78_d4fdcd6b4fbb4a3daeb5ad227de043d7~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_d4fdcd6b4fbb4a3daeb5ad227de043d7~mv2.jpg'
      ]
    },
    {
      name: 'Heavy-Duty Cover Lifter',
      description: 'Spa Cover Lifts - Heavy-Duty Hot Tub Cover Lifter, No-Drill Spa Cover Lift for 6\'-8\' Hot Tubs. Adjustable Height Arm for Swim Spa Covers, Extra Large Footplate for Stability.',
      price: '$279.95',
      images: [
        'https://static.wixstatic.com/media/5c7c78_d6fbd76b73154fb19fd8064fb802083a~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_d6fbd76b73154fb19fd8064fb802083a~mv2.jpg',
        'https://static.wixstatic.com/media/5c7c78_f203494deeee4f0d808ee73d60126309~mv2.jpg/v1/fill/w_568,h_293,q_90,enc_avif,quality_auto/5c7c78_f203494deeee4f0d808ee73d60126309~mv2.jpg'
      ]
    },
    {
      name: 'Automatic ConvertALift "VacuSeal"',
      description: 'The Ultimate Conversion System that transforms the VacuSeal Cover into an Automatic Hot Tub Cover Lifter System. Unparalleled convenience, privacy, and safety — making opening your cover the easiest part of enjoying your hot tub or swim spa.',
      price: '$4,999.00 Installed',
      images: [
        'https://static.wixstatic.com/media/5c7c78_481bd0d152d74cca812ac25eb74edb70~mv2.png/v1/fill/w_600,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SWIM%20SPAS%20SIMPSONVILLE%20SC%2C%20SWIM%20SPAS%20GREENVILLE%20SC%2C%20SWIM%20SPAS%2C%20SWIM%20SPAS%20IN%20GREENVILLE%20SC%2C.png'
      ]
    }
  ];

  return (
    <>
      <Helmet><title>Hot Tub Covers & Lifters | Upstate Hot Tubs</title></Helmet>
      <div className="pt-36 pb-20" data-testid="covers-page">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-bold uppercase text-[#0A1628] mb-4">
              Covers & <span className="text-[#B91C1C]">Cover Lifters</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">To protect your spa!</p>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-16">
            <img
              src="https://static.wixstatic.com/media/5c7c78_1299868b6e804ed5bc7775da81d32a83~mv2.jpg/v1/fill/w_851,h_1121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dynasty%20Spas%2C%20a%20hot%20tub%20and%20swim%20spa%20man.jpg"
              alt="Hot Tub Cover"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Products */}
          <div className="space-y-16">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-testid={`cover-product-${idx}`}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">{product.name}</h2>
                      <p className="text-slate-600 mb-4">{product.description}</p>
                      <p className="text-3xl font-bold text-[#B91C1C]">{product.price}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.images.map((img, i) => (
                        <img key={i} src={img} alt={product.name} className="w-full rounded-lg object-cover" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Protection', desc: 'Keep your spa clean and protected from the elements year-round.' },
              { icon: DollarSign, title: 'Energy Savings', desc: 'Insulated covers reduce heating costs and energy consumption.' },
              { icon: Zap, title: 'Easy Access', desc: 'Cover lifters make it effortless to open and close your spa.' }
            ].map((b, i) => (
              <div key={i} className="text-center p-6">
                <b.icon className="mx-auto text-[#B91C1C] mb-3" size={36} />
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CoversPage;
