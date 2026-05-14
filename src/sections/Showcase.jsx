import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import scrubberImg from '../assets/image.png';
import scrubpadsImg from '../assets/image1.png';
import beforeImg from '../assets/before.png';
import afterImg from '../assets/after.png';

const galleryItems = [
  {
    src: scrubberImg,
    alt: 'MARSAL Stainless Steel Scrubber pack of 12 yellow packaging',
    label: 'Stainless Steel Scrubber',
    tag: 'Pack of 12',
    accent: 'yellow',
  },
  {
    src: scrubpadsImg,
    alt: 'MARSAL Heavy Duty Scrub Pads green packaging',
    label: 'Heavy Duty Scrub Pads',
    tag: 'Pack of 6',
    accent: 'green',
  },
  {
    src: scrubberImg,
    alt: 'MARSAL Stainless Steel Scrubbers premium build quality',
    label: 'Premium Build Quality',
    tag: 'Rust-Free Steel',
    accent: 'blue',
  },
  {
    src: scrubpadsImg,
    alt: 'MARSAL Scrub Pads non-scratch kitchen safe surface',
    label: 'Non-Scratch Surface',
    tag: 'Kitchen Safe',
    accent: 'green',
  },
];

const accentMap = {
  yellow: {
    ring: 'ring-yellow-300',
    tag: 'bg-yellow-400 text-gray-900',
    overlay: 'from-yellow-900/60',
  },
  green: {
    ring: 'ring-green-400',
    tag: 'bg-green-500 text-white',
    overlay: 'from-green-900/60',
  },
  blue: {
    ring: 'ring-blue-500',
    tag: 'bg-blue-600 text-white',
    overlay: 'from-blue-900/60',
  },
};

function GalleryCard({ item, index }) {
  const accent = accentMap[item.accent];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-default shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${accent.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-1 ${accent.tag}`}>
          {item.tag}
        </span>
        <p className="text-white font-bold text-sm">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-white" aria-label="Product showcase gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Product Gallery"
          title="Engineered to Impress"
          subtitle="Every MARSAL product is crafted with attention to quality — from the packaging to the cleaning surface."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Before & After Section */}
        <div className="mt-20">
          <SectionHeader
            badge="Cleaning Power"
            title="See the MARSAL Difference"
            subtitle="One product. Seconds of effort. A lifetime of clean."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-red-50 border border-red-100 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-black text-sm">✕</span>
                <span className="font-bold text-red-700 text-sm uppercase tracking-wide">Before MARSAL</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-red-100 shadow-md">
                <img
                  src={beforeImg}
                  alt="Dirty utensil with burnt grease and stubborn stains before using MARSAL scrubber"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="mt-4 space-y-2">
                {['Stubborn burnt stains', 'Grease build-up', 'Rust & discoloration', 'Hours of soaking needed'].map((text) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-red-600">
                    <span className="text-red-400 font-bold">—</span>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden bg-green-50 border border-green-100 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-black text-sm">✓</span>
                <span className="font-bold text-green-700 text-sm uppercase tracking-wide">After MARSAL</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-green-100 shadow-md">
                <img
                  src={afterImg}
                  alt="Sparkling clean utensil after using MARSAL stainless steel scrubber"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="mt-4 space-y-2">
                {['Mirror-bright surface', 'Zero grease residue', 'Rust-free finish', 'Cleaned in under 60 seconds'].map((text) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-green-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-2xl">
              <span className="text-[#F4D000] font-black text-2xl">3×</span>
              <p className="text-sm font-semibold">Faster cleaning compared to regular scrubbers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
