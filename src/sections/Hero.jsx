import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import scrubberImg from '../assets/image.png';
import scrubpadsImg from '../assets/image1.png';

const WHATSAPP_NUMBER = '919445880150';

function FloatingShape({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 6, delay, ease: 'easeInOut' }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f1f6e] via-[#1D4ED8] to-[#1e40af]"
      aria-label="Hero section"
    >
      <FloatingShape className="w-96 h-96 bg-[#F4D000] -top-20 -right-20" delay={0} />
      <FloatingShape className="w-64 h-64 bg-white top-1/2 -left-20" delay={1.5} />
      <FloatingShape className="w-40 h-40 bg-[#F4D000] bottom-10 right-1/4" delay={3} />
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")"}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-[#F4D000] text-[#F4D000]" size={14} />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">Trusted by 10,000+ households</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Professional
              <br />
              <span className="text-[#F4D000]">Cleaning Power</span>
              <br />
              for Every Kitchen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Trusted MARSAL cleaning products designed for powerful stain removal, durability, and everyday performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {['Heavy Duty', 'Rust Resistant', 'Long Lasting', '3× More Durable'].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20want%20to%20enquire%20about%20your%20cleaning%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-full font-bold text-base hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <FaWhatsapp size={20} />
                Contact on WhatsApp
              </a>
              <a
                href="#distributors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#distributors')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-[#F4D000] text-gray-900 px-7 py-4 rounded-full font-bold text-base hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5"
              >
                Become a Distributor
                <FiArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — Product images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-[#F4D000] rounded-3xl opacity-10 blur-3xl scale-110" />
              <div className="relative grid grid-cols-2 gap-4">
                {/* Scrubber card */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="col-span-2 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="aspect-video bg-yellow-400/10 rounded-xl flex items-center justify-center mb-3 overflow-hidden">
                    <img
                      src={scrubberImg}
                      alt="MARSAL Stainless Steel Scrubber pack of 12"
                      className="w-full h-full object-contain p-2"
                      loading="eager"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Stainless Steel Scrubber</p>
                      <p className="text-yellow-300 text-xs">Pack of 12 • Heavy Duty</p>
                    </div>
                    <span className="bg-[#F4D000] text-gray-900 text-xs font-black px-2 py-1 rounded-lg">NEW</span>
                  </div>
                </motion.div>

                {/* Scrub pads card */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="col-span-2 bg-gradient-to-br from-green-400/20 to-green-600/10 border border-green-400/30 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="aspect-video bg-green-400/10 rounded-xl flex items-center justify-center mb-3 overflow-hidden">
                    <img
                      src={scrubpadsImg}
                      alt="MARSAL Heavy Duty Scrub Pads green packaging"
                      className="w-full h-full object-contain p-2"
                      loading="eager"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Heavy Duty Scrub Pads</p>
                      <p className="text-green-300 text-xs">Multi-surface • Long Lasting</p>
                    </div>
                    <span className="bg-green-400 text-white text-xs font-black px-2 py-1 rounded-lg">HOT</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
