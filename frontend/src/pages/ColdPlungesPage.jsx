import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Snowflake, Heart, Zap, Moon, Timer, Droplets, Thermometer, ChevronDown, ChevronUp, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import { COLD_PLUNGES } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const ExpandableSection = ({ title, children, testId }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div data-testid={testId}>
      <div className={`${expanded ? '' : 'max-h-[400px] overflow-hidden relative'}`}>
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-2 text-cyan-700 font-semibold hover:text-cyan-900 transition-colors mx-auto"
        data-testid={`${testId}-toggle`}
      >
        {expanded ? 'Show Less' : `Read Full ${title}`}
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
    </div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center gap-4 my-16">
    <div className="flex-1 h-px bg-slate-200" />
    <Snowflake className="text-cyan-400" size={20} />
    <div className="flex-1 h-px bg-slate-200" />
  </div>
);

const ColdPlungesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cold Plunges | Recovery & Wellness | Upstate Hot Tubs</title>
        <meta name="description" content="Shop professional-grade cold plunges for recovery and wellness at Upstate Hot Tubs. Guides on recovery timing, chillers, water maintenance, and skin benefits. Simpsonville SC." />
        <meta name="keywords" content="cold plunge, ice bath, cold therapy, recovery, wellness, chiller, water maintenance, skin benefits, Upstate Hot Tubs, Simpsonville SC" />
      </Helmet>
      
      <div className="pt-36 pb-20" data-testid="cold-plunges-page">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#0A1628] to-slate-800 text-white py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Snowflake className="text-cyan-400" size={24} />
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Recovery & Wellness</span>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase mb-4">
                Shop Our Cold Plunges
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                RELAX-RENEW-REPEAT - Transform your recovery routine with professional-grade cold therapy.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Zap, title: 'Boost Circulation', desc: 'Enhance blood flow and cardiovascular health' },
              { icon: Heart, title: 'Muscle Recovery', desc: 'Reduce inflammation and speed up recovery' },
              { icon: Moon, title: 'Better Sleep', desc: 'Improve sleep quality and relaxation' },
              { icon: Snowflake, title: 'Mental Clarity', desc: 'Sharpen focus and reduce stress' },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 p-6 text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s/g, '-')}`}>
                <benefit.icon className="mx-auto text-cyan-600 mb-3" size={32} />
                <h3 className="font-semibold text-[#0A1628] mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Products */}
          <ProductGrid products={COLD_PLUNGES} linkPrefix="/products" />

          <SectionDivider />

          {/* ============================================ */}
          {/* SECTION 1: Recovery - Ice Bath Timing Guide  */}
          {/* ============================================ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            data-testid="recovery-section"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <img
                  src="https://static.wixstatic.com/media/5c7c78_491defcf9c8142daa743f371289b1dee~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/recovery.jpg"
                  alt="Cold plunge recovery"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <Timer className="text-cyan-600" size={20} />
                  <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Recovery Guide</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                  Should You Ice Bath Before or After Your Workout?
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Everyone's talking about ice baths these days. But dive in at the wrong moment, and you could stall your gains instead of supercharging them. Here's how to time your cold plunge for the results you actually want.
                </p>
              </div>
            </div>

            <ExpandableSection title="Recovery Guide" testId="recovery-expandable">
              <div className="mt-8 space-y-8">
                {/* What's a Cold Plunge */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">What's a Cold Plunge, Really?</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    At its simplest, a cold plunge means settling into water between about 37-60 degrees F for a few minutes. It gives your body a jolt that kicks every system into gear:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1.5 flex-shrink-0">&#9679;</span><span><strong>Blood-vessel squeeze:</strong> Vessels tighten to protect your core, sending warm blood to vital organs.</span></li>
                    <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1.5 flex-shrink-0">&#9679;</span><span><strong>Heart-and-lungs workout:</strong> Your heart rate and breathing spike as your body fights the chill.</span></li>
                    <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1.5 flex-shrink-0">&#9679;</span><span><strong>Metabolic roar:</strong> Everything revs up to keep you warm.</span></li>
                    <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1.5 flex-shrink-0">&#9679;</span><span><strong>Hormonal flood:</strong> Adrenaline and norepinephrine surge, sharpening your mind and dulling pain.</span></li>
                  </ul>
                </div>

                {/* Why Ice Baths Feel Good */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Why Ice Baths Feel So Good</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Less Inflammation', desc: 'By cooling inflamed tissue, ice baths dial back soreness after a hard session.' },
                      { title: 'Circulation Boost', desc: 'Squeezed-then-released vessels act like a pump that flushes toxins out of your muscles.' },
                      { title: 'Instant Pain Relief', desc: 'Cold numbs nerve endings, useful for stiffness, aches, or a quick pick-me-up.' },
                      { title: 'Quicker Bounce-Back', desc: 'With inflammation controlled and fresh blood flowing, you\'re ready for the next workout sooner.' },
                    ].map((item, i) => (
                      <div key={i} className="bg-cyan-50 border border-cyan-100 rounded-lg p-4">
                        <h4 className="font-semibold text-[#0A1628] mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timing Comparison */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Before vs. After: Timing Your Plunge</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-blue-900 mb-3">Ice First, Workout Second</h4>
                      <p className="text-sm font-semibold text-green-700 mb-2">Pros:</p>
                      <ul className="text-sm text-slate-600 space-y-1 mb-3">
                        <li>- Great for training in hot weather</li>
                        <li>- Cold shock sharpens focus, energy, and mood</li>
                      </ul>
                      <p className="text-sm font-semibold text-red-700 mb-2">Cons:</p>
                      <ul className="text-sm text-slate-600 space-y-1 mb-3">
                        <li>- Cold muscles fire less explosively</li>
                        <li>- Weaker lifts, slower sprints</li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">Best for: battling heat or needing a wake-up jolt.</p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                      <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-indigo-900 mb-3">Workout First, Ice Next</h4>
                      <p className="text-sm font-semibold text-green-700 mb-2">Pros:</p>
                      <ul className="text-sm text-slate-600 space-y-1 mb-3">
                        <li>- Immediate relief from post-session ache</li>
                        <li>- Recover fast for back-to-back training</li>
                      </ul>
                      <p className="text-sm font-semibold text-red-700 mb-2">Cons:</p>
                      <ul className="text-sm text-slate-600 space-y-1 mb-3">
                        <li>- Can blunt muscle-building inflammation signals</li>
                        <li>- Regular cold dips after lifting may reduce gains</li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">Best for: competition mode and rapid recovery needs.</p>
                    </div>
                  </div>
                </div>

                {/* Match Your Goal */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Match Your Goal to Your Timing</h3>
                  <div className="space-y-3">
                    {[
                      { goal: 'Build strength or size?', advice: 'Skip the post-lift ice bath. Wait a few hours or pick a non-training day.' },
                      { goal: 'Multi-session athlete?', advice: 'A post-event dip can sharply reduce soreness so you feel fresher for the next round.' },
                      { goal: 'Stress relief & general health?', advice: 'Take it whenever it fits your schedule, just be aware of the slight hit to training adaptations.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                        <Activity className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                          <span className="font-semibold text-[#0A1628]">{item.goal}</span>
                          <span className="text-slate-600"> {item.advice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Tips */}
                <div className="bg-[#0A1628] text-white rounded-lg p-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">Practical Tips</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2"><Thermometer className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} /><span>Aim for 48-60 degrees F</span></div>
                    <div className="flex items-start gap-2"><Timer className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} /><span>Start with 1-3 minutes, work up to 10-15</span></div>
                    <div className="flex items-start gap-2"><Zap className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} /><span>2-3 times per week is plenty</span></div>
                    <div className="flex items-start gap-2"><Heart className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} /><span>Listen to your body - exit if dizzy</span></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">If you have heart issues or blood-pressure concerns, consult a healthcare pro before plunging.</p>
                </div>
              </div>
            </ExpandableSection>
          </motion.section>

          <SectionDivider />

          {/* ============================================ */}
          {/* SECTION 2: Cold Therapy - Skin Benefits      */}
          {/* ============================================ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            data-testid="skin-benefits-section"
          >
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
              <div className="lg:w-1/3">
                <img
                  src="https://static.wixstatic.com/media/5c7c78_4b7aef0234b8403daa5f22c86b762c3e~mv2.png/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cold-therapy.png"
                  alt="Cold therapy skin benefits"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-cyan-600" size={20} />
                  <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Beauty & Wellness</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                  Can Ice Baths Improve Your Skin?
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  From taming redness to reviving dull complexions, that shock of cold might be exactly what your skincare routine is missing. When your body hits cold water, it kicks into survival mode - and the results can supercharge your skin's repair and renewal.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">The Science Behind Cold Water and Skin</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When your body hits cold water, blood vessels tighten then rebound open as you warm up, flushing skin with nutrient-rich blood. Norepinephrine and dopamine reduce inflammation while your body burns extra energy maintaining core temperature - an indirect perk for healthier cell turnover.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {[
                  { title: 'Reduces Inflammation', desc: 'Cold limits blood flow to inflamed areas. Ideal for acne flare-ups, rosacea, or irritated skin.', icon: Heart },
                  { title: 'Boosts Circulation', desc: 'Better blood flow delivers more oxygen and nutrients to cells for an instant glow and even skin tone.', icon: Activity },
                  { title: 'Tightens Pores', desc: 'A quick squeeze on pores keeps dirt and oil from settling. Regular sessions shrink pore appearance.', icon: Sparkles },
                  { title: 'Collagen Production', desc: 'Cold stress triggers repair pathways including collagen synthesis for firmer, plumper skin.', icon: Zap },
                ].map((item) => (
                  <div key={item.title} className="bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 rounded-lg p-5 text-center" data-testid={`skin-benefit-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <item.icon className="mx-auto text-cyan-600 mb-3" size={28} />
                    <h4 className="font-semibold text-[#0A1628] mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mt-6">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>The takeaway:</strong> Ice baths deliver a powerful combo of reduced inflammation, turbocharged circulation, and collagen support. Start slow, stay consistent, and watch your complexion come alive.
                </p>
              </div>
            </div>
          </motion.section>

          <SectionDivider />

          {/* ============================================ */}
          {/* SECTION 3: Chiller Guide                     */}
          {/* ============================================ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            data-testid="chiller-section"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <img
                  src="https://static.wixstatic.com/media/5c7c78_419cce5753db433fa2fcbf36109a051b~mv2.png/v1/fill/w_600,h_337,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/chillers.png"
                  alt="Cold plunge chillers"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="text-cyan-600" size={20} />
                  <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Equipment Guide</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                  What Size Chiller Do You Need?
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Choosing the wrong size chiller can leave you waiting hours to hit your ideal temperature. Understanding horsepower vs. cooling capacity is the key to making a smart buying decision.
                </p>
              </div>
            </div>

            <ExpandableSection title="Chiller Guide" testId="chiller-expandable">
              <div className="mt-8 space-y-8">
                {/* HP vs Cooling Capacity */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Horsepower vs. Cooling Capacity</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    When you see a chiller labeled as 0.3HP, 0.5HP, or 1HP, that refers to the compressor motor's power - not how much cooling it delivers. Think of horsepower like engine size in a car: more HP means it can potentially do more work, but doesn't tell you how efficiently it turns power into performance.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    <strong>Cooling capacity</strong>, measured in BTU/hr, is the number that really matters. It tells you how much heat the chiller can pull out of your plunge tub per hour. More BTUs = faster cooling = colder water.
                  </p>
                </div>

                {/* Comparison Table */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Chiller Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" data-testid="chiller-comparison-table">
                      <thead>
                        <tr className="bg-[#0A1628] text-white">
                          <th className="p-3 text-left font-['Barlow_Condensed'] text-lg">Chiller Model</th>
                          <th className="p-3 text-center font-['Barlow_Condensed'] text-lg">Horsepower</th>
                          <th className="p-3 text-center font-['Barlow_Condensed'] text-lg">Cooling (BTU/hr)</th>
                          <th className="p-3 text-center font-['Barlow_Condensed'] text-lg">Time to 50 degrees F*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="p-3 font-medium">Rocita</td>
                          <td className="p-3 text-center">0.3 HP</td>
                          <td className="p-3 text-center">2,400</td>
                          <td className="p-3 text-center">6-8 hours</td>
                        </tr>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <td className="p-3 font-medium">Active Aqua</td>
                          <td className="p-3 text-center">0.5 HP</td>
                          <td className="p-3 text-center">4,020</td>
                          <td className="p-3 text-center">4-6 hours</td>
                        </tr>
                        <tr className="bg-cyan-50 border-b border-cyan-200">
                          <td className="p-3 font-bold text-cyan-800">Icebound Pro</td>
                          <td className="p-3 text-center font-bold text-cyan-800">1 HP</td>
                          <td className="p-3 text-center font-bold text-cyan-800">9,309</td>
                          <td className="p-3 text-center font-bold text-cyan-800">2-3 hours</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 mt-2">*Based on ~80 gallon tub, ambient temp of 80 degrees F</p>
                  </div>
                </div>

                {/* Comparison Chart Image */}
                <div>
                  <img
                    src="https://static.wixstatic.com/media/5c7c78_ddff13ebdf35466a84f9f47d0a6958d9~mv2.png/v1/fill/w_881,h_427,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/chiller-comparison.png"
                    alt="Cold plunge chiller comparison chart"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                  />
                </div>

                {/* What Else Affects Performance */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">What Else Affects Chiller Performance?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Filtration & Sanitation', desc: 'Dirty water cools slower and can damage internal components. Ensure good integration with your filtration system.' },
                      { title: 'Circulation', desc: 'Poor circulation leads to uneven temperatures. A built-in or external water pump can solve this.' },
                      { title: 'Ambient Conditions', desc: 'Outdoor tubs in direct sunlight need more cooling capacity. Always factor in your environment.' },
                      { title: 'Tub Size & Usage', desc: 'How large is your tub? How often do you use it? Both impact what chiller you need.' },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h4 className="font-semibold text-[#0A1628] mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buying Decision */}
                <div className="bg-[#0A1628] text-white rounded-lg p-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-3">Make a Smarter Buying Decision</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Don't fall for the horsepower trap. The real measure of a chiller's performance is cooling capacity. By understanding these specs, you'll compare chillers based on what really matters, choose a model that fits your tub and lifestyle, and get better, faster cold plunges without wasting time or money.
                  </p>
                </div>
              </div>
            </ExpandableSection>
          </motion.section>

          <SectionDivider />

          {/* ============================================ */}
          {/* SECTION 4: Water Maintenance Guide            */}
          {/* ============================================ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            data-testid="water-maintenance-section"
          >
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
              <div className="lg:w-1/3">
                <img
                  src="https://static.wixstatic.com/media/5c7c78_c5729a6cd51f49e8ab9413c88c2a76bb~mv2.png/v1/fill/w_600,h_337,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/water-maintenance.png"
                  alt="Cold plunge water maintenance"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="text-cyan-600" size={20} />
                  <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Maintenance Guide</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
                  Cold Plunge Water Maintenance
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Whether you've got an all-in-one cold plunge with a built-in chiller or a simple inflatable ice bath, keeping that water clean is crucial for both your health and your equipment's longevity.
                </p>
              </div>
            </div>

            <ExpandableSection title="Maintenance Guide" testId="water-expandable">
              <div className="mt-8 space-y-8">
                {/* Key Takeaways */}
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">Key Takeaways</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Test water every 1-2 weeks: pH (7.2-7.8), alkalinity (80-120 ppm), sanitizer, calcium hardness</span></li>
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Run circulation and filtration for at least 4 hours daily</span></li>
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Clean filter every 2-3 weeks</span></li>
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Change water every 3-4 weeks depending on usage</span></li>
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Cover your cold plunge when not in use</span></li>
                    <li className="flex items-start gap-2"><ShieldCheck className="text-cyan-600 flex-shrink-0 mt-0.5" size={16} /><span>Colder water requires fewer chemicals but still needs regular maintenance</span></li>
                  </ul>
                </div>

                {/* Understanding Your Water */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Understanding Your Cold Plunge Water</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Your cold plunge isn't a pool, and it isn't a hot tub either. At roughly 100 gallons, it's much smaller than a pool (contaminants concentrate faster), but the cold temperature slows bacterial growth. However, cold water also slows chemical reactions, meaning sanitizers don't work as efficiently as in warmer water.
                  </p>
                </div>

                {/* Water Testing */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Water Testing Fundamentals</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { label: 'pH', range: '7.2 - 7.8', note: 'Too low = equipment corrosion. Too high = sanitizer becomes less effective.' },
                      { label: 'Total Alkalinity', range: '80 - 120 ppm', note: 'Acts as a buffer to prevent pH from bouncing around.' },
                      { label: 'Chlorine', range: '1 - 3 ppm', note: 'Classic sanitizer. Less stable in cold water.' },
                      { label: 'Bromine', range: '3 - 5 ppm', note: 'Works better in cold water than chlorine. Less smell.' },
                      { label: 'Calcium Hardness', range: '100 - 250 ppm', note: 'Too little eats away at metal parts. Too much causes scaling.' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-[#0A1628]">{item.label}</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-2 py-1 rounded">{item.range}</span>
                        </div>
                        <p className="text-xs text-slate-500">{item.note}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mt-3">Test every 1-2 weeks, or whenever you change your water. If something seems off (cloudy water, funky smell), test immediately.</p>
                </div>

                {/* Sanitizers */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Primary Sanitizer Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: 'Bromine', desc: 'Works better in cold water than chlorine and doesn\'t have that strong pool smell. Aim for 3-5 ppm.', tag: 'Recommended' },
                      { name: 'Chlorine', desc: 'The classic sanitizer many people know. Effective but less stable in cold water. Maintain 1-3 ppm.', tag: 'Traditional' },
                      { name: 'Hydrogen Peroxide', desc: 'Food-grade (30-35%) sanitizes effectively, breaks down into water and oxygen. Won\'t irritate skin or eyes.', tag: 'Popular' },
                    ].map((item, i) => (
                      <div key={i} className="border border-slate-200 rounded-lg p-5">
                        <span className="text-xs font-bold uppercase text-cyan-600">{item.tag}</span>
                        <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mt-1 mb-2">{item.name}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filtration */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">Filtration & Circulation</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Your filter is the unsung hero of clean water. A good filtration system should run for at least 4 hours daily, remove particles as small as 5-20 microns, and be easy to access for cleaning.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <h4 className="font-semibold text-[#0A1628] mb-3">Filter Cleaning Steps (every 2-3 weeks):</h4>
                    <ol className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">1</span>Remove the filter</li>
                      <li className="flex items-start gap-2"><span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">2</span>Rinse thoroughly with a garden hose</li>
                      <li className="flex items-start gap-2"><span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">3</span>Soak in filter cleaner (or a capful of bleach in water)</li>
                      <li className="flex items-start gap-2"><span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">4</span>Rinse again until water runs clear</li>
                      <li className="flex items-start gap-2"><span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">5</span>Let dry and reinstall</li>
                    </ol>
                  </div>
                </div>

                {/* Maintenance Schedule */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Maintenance Schedule</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { freq: 'Daily', tasks: ['Run filtration 4+ hours', 'Skim surface if needed', 'Cover when not in use'] },
                      { freq: 'Weekly', tasks: ['Visual check of water clarity', 'Brief filter inspection'] },
                      { freq: 'Every 2-3 Weeks', tasks: ['Test water chemistry', 'Adjust chemicals as needed', 'Clean/rotate filters'] },
                      { freq: 'Every 3-4 Weeks', tasks: ['Drain and refill', 'Clean inner walls', 'Rebalance chemicals'] },
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-['Barlow_Condensed'] text-lg font-bold text-cyan-700 mb-2">{item.freq}</h4>
                        <ul className="space-y-1">
                          {item.tasks.map((task, j) => (
                            <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <span className="text-cyan-500 mt-0.5">&#9679;</span>{task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Troubleshooting */}
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">Troubleshooting Common Issues</h3>
                  <div className="space-y-3">
                    {[
                      { issue: 'Cloudy Water', cause: 'Poor filtration, chemical imbalance, or organic contaminants', fix: 'Check filter, shock the water, ensure proper circulation' },
                      { issue: 'Foamy Surface', cause: 'Buildup of body oils, lotions, or soaps', fix: 'Use a defoamer, clean filter, remind users to shower before plunging' },
                      { issue: 'Unusual Odors', cause: 'Bacterial growth or chemical imbalance', fix: 'Check sanitizer levels, shock the water, ensure proper filtration' },
                      { issue: 'Skin/Eye Irritation', cause: 'Improper pH or high sanitizer levels', fix: 'Test and adjust pH, check if sanitizer is within proper range' },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0A1628]">{item.issue}</span>
                          <span className="text-xs text-slate-500">Cause: {item.cause}</span>
                        </div>
                        <p className="text-sm text-cyan-700 font-medium">Fix: {item.fix}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Image */}
                <div>
                  <img
                    src="https://static.wixstatic.com/media/5c7c78_31b92f33ec6a497e8ad8993a9ee4417f~mv2.png/v1/fill/w_881,h_495,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/water-maintenance.png"
                    alt="Cold plunge water maintenance guide"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Final Takeaway */}
                <div className="bg-[#0A1628] text-white rounded-lg p-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-3">Cold Plunge, Clean Water, Better Recovery</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Maintaining your cold plunge doesn't have to be complicated. A few minutes of attention regularly will keep your water clean, clear, and ready whenever you need those cold therapy benefits. The reward for your diligence is a safe, hygienic recovery tool that will serve you for years to come.
                  </p>
                </div>
              </div>
            </ExpandableSection>
          </motion.section>

          <SectionDivider />

          {/* Info Cards (original) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
            data-testid="info-cards"
          >
            <a href="https://iceboundessentials.com/blogs/icebound-insights/can-ice-baths-improve-your-skin-cold-plunge-benefits-for-beauty" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors rounded-lg">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Can Ice Baths Improve Your Skin?</h3>
              <p className="text-slate-600 text-sm">Learn about cold plunge benefits for beauty</p>
            </a>
            <a href="https://iceboundessentials.com/blogs/icebound-insights/should-you-ice-bath-before-or-after-a-workout-timing-for-recovery" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors rounded-lg">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Ice Bath Timing for Recovery</h3>
              <p className="text-slate-600 text-sm">Should you ice bath before or after a workout?</p>
            </a>
            <a href="https://iceboundessentials.com/blogs/icebound-insights/what-size-chiller-for-cold-plunge" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 hover:bg-slate-200 transition-colors rounded-lg">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">Choosing the Right Chiller</h3>
              <p className="text-slate-600 text-sm">Complete guide for recovery enthusiasts</p>
            </a>
          </motion.div>
          
        </div>
      </div>
    </>
  );
};

export default ColdPlungesPage;
