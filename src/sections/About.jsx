import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import scrubberImg from '../assets/image.png';

const pillars = [
  {
    icon: FiAward,
    title: 'Uncompromising Quality',
    desc: 'Every batch of MARSAL products undergoes rigorous quality testing. We use premium-grade stainless steel and food-safe materials to ensure consistent, reliable performance.',
  },
  {
    icon: FiHeart,
    title: 'Made for Indian Homes',
    desc: 'MARSAL understands the unique demands of Indian cooking — from masala residue to burnt ghee. Our products are engineered specifically for these challenges.',
  },
  {
    icon: FiUsers,
    title: 'Building Community Trust',
    desc: 'From small towns to metro cities, MARSAL is a name families trust. Our growing distributor network ensures availability across India.',
  },
  {
    icon: FiTrendingUp,
    title: 'A Brand on the Rise',
    desc: 'MARSAL is one of India\'s fastest-growing cleaning product brands, driven by genuine customer love and word-of-mouth success.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50" aria-label="About MARSAL">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#1D4ED8] to-[#0f1f6e] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F4D000]/20 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#F4D000] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="font-black text-gray-900 text-xl">M</span>
                    </div>
                    <div>
                      <p className="font-black text-2xl leading-none">MARSAL</p>
                      <p className="text-yellow-300 text-xs font-medium">Sparkle Clean in Seconds</p>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                    Our Mission:<br />
                    <span className="text-[#F4D000]">Cleaner Kitchens,</span><br />
                    Happier Homes.
                  </h3>

                  <p className="text-white/75 text-sm leading-relaxed mb-8">
                    Founded with the belief that every family deserves access to professional-grade cleaning tools, MARSAL was built to bridge the gap between quality and affordability. We make kitchen cleaning faster, easier, and more effective.
                  </p>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {[
                      { val: '2019', label: 'Est.' },
                      { val: '500+', label: 'Partners' },
                      { val: '15+', label: 'States' },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-[#F4D000] font-black text-xl">{s.val}</p>
                        <p className="text-white/60 text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating product image card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 w-36"
              >
                <img
                  src={scrubberImg}
                  alt="MARSAL scrubber product"
                  className="w-full aspect-square object-contain"
                  loading="lazy"
                />
                <p className="text-center text-xs font-bold text-gray-700 mt-2 leading-tight">Best Seller 🏆</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right — Pillars */}
          <AnimatedSection direction="right">
            <div>
              <SectionHeader
                badge="About the Brand"
                title="Trusted. Durable. Affordable."
                subtitle="MARSAL is not just a cleaning product — it's a commitment to better living for every Indian household."
                center={false}
              />

              <div className="space-y-5 mt-8">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 group-hover:bg-[#1D4ED8] rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Icon size={18} className="text-[#1D4ED8] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{pillar.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
