import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { usageSegments } from '../data/products';

function UsageCard({ segment, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-center"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {segment.icon}
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{segment.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{segment.desc}</p>
    </motion.div>
  );
}

export default function Usage() {
  return (
    <section id="usage" className="py-20 md:py-28 bg-gradient-to-br from-[#0f1f6e] via-[#1D4ED8] to-[#1e3a8a]" aria-label="Usage segments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Who Uses MARSAL"
          title="Trusted Across Every Kitchen"
          subtitle="From family homes to five-star hotels, MARSAL products deliver the same powerful clean — every single time."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {usageSegments.map((segment, i) => (
            <UsageCard key={segment.title} segment={segment} index={i} />
          ))}
        </div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 bg-[#F4D000] rounded-3xl p-8 md:p-10 text-center"
        >
          <p className="text-gray-900 font-black text-2xl md:text-3xl mb-3">
            Over 10,000 kitchens trust MARSAL daily.
          </p>
          <p className="text-gray-800 text-base max-w-xl mx-auto">
            Join the growing MARSAL family — from individual households to large commercial kitchens across India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
