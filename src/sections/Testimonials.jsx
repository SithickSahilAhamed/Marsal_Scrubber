import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/products';

const avatarColors = {
  yellow: 'bg-yellow-400 text-gray-900',
  blue: 'bg-[#1D4ED8] text-white',
  green: 'bg-green-500 text-white',
};

const cardAccent = {
  yellow: 'border-yellow-200 hover:border-yellow-300',
  blue: 'border-blue-100 hover:border-blue-200',
  green: 'border-green-100 hover:border-green-200',
};

const productBadge = {
  yellow: 'bg-yellow-50 text-yellow-700',
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
};

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          size={14}
          className={i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-2xl p-6 border ${cardAccent[t.color]} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${avatarColors[t.color]}`}>
            {t.avatar}
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role}</p>
          </div>
        </div>
        <StarRating count={t.rating} />
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        "{t.review}"
      </p>

      {/* Product badge */}
      <div className="mt-4 pt-4 border-t border-gray-50">
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${productBadge[t.color]}`}>
          {t.product}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Real reviews from homes, hotels, and restaurants that trust MARSAL every day."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={20} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-2xl font-black text-gray-900 mb-1">4.9 / 5 Average Rating</p>
          <p className="text-gray-500 text-sm">Based on 200+ verified customer reviews across India</p>
        </motion.div>
      </div>
    </section>
  );
}
