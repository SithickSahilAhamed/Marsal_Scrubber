import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';
import scrubberImg from '../assets/image.png';
import scrubpadsImg from '../assets/image1.png';

const WHATSAPP_NUMBER = '919445880150';

const productImages = {
  scrubber: scrubberImg,
  pads: scrubpadsImg,
};

function ProductCard({ product, index }) {
  const isOdd = index % 2 !== 0;
  const isYellow = product.id === 'scrubber';

  return (
    <AnimatedSection
      direction={isOdd ? 'right' : 'left'}
      delay={0.1}
      className={`rounded-3xl overflow-hidden bg-gradient-to-br ${
        isYellow ? 'from-yellow-50 via-amber-50 to-white' : 'from-green-50 via-emerald-50 to-white'
      } border ${isYellow ? 'border-yellow-100' : 'border-green-100'}`}
    >
      <div className={`grid md:grid-cols-2 gap-0`}>
        {/* Image side */}
        <div className={`relative flex items-center justify-center p-8 lg:p-12 ${
          isYellow
            ? 'bg-gradient-to-br from-yellow-400/15 to-amber-400/5'
            : 'bg-gradient-to-br from-green-400/15 to-emerald-400/5'
        } ${isOdd ? 'md:order-2' : ''}`}>
          <div className={`absolute w-64 h-64 rounded-full ${
            isYellow ? 'bg-yellow-200/40' : 'bg-green-200/40'
          } blur-2xl`} />
          <motion.div
            whileHover={{ scale: 1.05, rotate: isOdd ? 2 : -2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative z-10 w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              src={productImages[product.id]}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
            isYellow ? 'bg-[#F4D000] text-gray-900' : 'bg-green-500 text-white'
          }`}>
            {isYellow ? 'Best Seller' : 'Heavy Duty'}
          </span>
        </div>

        {/* Content side */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${isOdd ? 'md:order-1' : ''}`}>
          <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 ${
            isYellow ? 'text-yellow-600' : 'text-green-600'
          }`}>
            MARSAL Product
          </span>

          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
            {product.name}
          </h3>

          <p className={`text-sm font-semibold mb-4 ${isYellow ? 'text-yellow-700' : 'text-green-700'}`}>
            {product.tagline}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <ul className="space-y-2.5 mb-8">
            {product.features.map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-gray-700">
                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                  isYellow ? 'bg-yellow-400' : 'bg-green-500'
                }`}>
                  <FiCheck size={12} className={isYellow ? 'text-gray-900' : 'text-white'} strokeWidth={3} />
                </span>
                <span className="font-medium">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-md hover:-translate-y-0.5"
            >
              <FaWhatsapp size={16} />
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white" aria-label="Products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Products"
          title="Two Products. One Mission."
          subtitle="MARSAL brings professional-grade cleaning to every Indian kitchen — engineered for performance, built to last."
        />

        <div className="space-y-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
