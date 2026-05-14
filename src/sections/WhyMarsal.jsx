import { FiShield, FiZap, FiClock, FiDroplet, FiDollarSign, FiHome } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { whyFeatures } from '../data/products';

const iconMap = {
  shield: FiShield,
  bolt: FiZap,
  clock: FiClock,
  leaf: FiDroplet,
  currency: FiDollarSign,
  home: FiHome,
};

const colorCycle = [
  { bg: 'bg-blue-50', icon: 'text-[#1D4ED8]', border: 'border-blue-100', accent: 'bg-blue-100' },
  { bg: 'bg-yellow-50', icon: 'text-yellow-700', border: 'border-yellow-100', accent: 'bg-yellow-100' },
  { bg: 'bg-green-50', icon: 'text-green-700', border: 'border-green-100', accent: 'bg-green-100' },
  { bg: 'bg-blue-50', icon: 'text-[#1D4ED8]', border: 'border-blue-100', accent: 'bg-blue-100' },
  { bg: 'bg-yellow-50', icon: 'text-yellow-700', border: 'border-yellow-100', accent: 'bg-yellow-100' },
  { bg: 'bg-green-50', icon: 'text-green-700', border: 'border-green-100', accent: 'bg-green-100' },
];

function FeatureCard({ feature, index }) {
  const Icon = iconMap[feature.icon] || FiShield;
  const color = colorCycle[index % colorCycle.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group p-6 rounded-2xl border ${color.border} ${color.bg} hover:shadow-lg transition-all duration-300 cursor-default`}
    >
      <div className={`w-12 h-12 rounded-xl ${color.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className={color.icon} strokeWidth={2} />
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function WhyMarsal() {
  return (
    <section id="why" className="py-20 md:py-28 bg-gray-50" aria-label="Why choose MARSAL">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why MARSAL"
          title="Built for Real Indian Kitchens"
          subtitle="Every feature is designed to tackle the toughest Indian cooking residues — from masala stains to burnt tadka — so you spend less time scrubbing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.3} className="mt-16 bg-gradient-to-r from-[#1D4ED8] to-[#1e3a8a] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '3×', label: 'More Durable' },
              { number: '500+', label: 'Retail Partners' },
              { number: '100%', label: 'Quality Tested' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-black text-[#F4D000] mb-1">{stat.number}</p>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
