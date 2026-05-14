import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why MARSAL', href: '#why' },
  { label: 'Usage', href: '#usage' },
  { label: 'Distributors', href: '#distributors' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_NUMBER = '919445880150';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 bg-[#F4D000] rounded-lg flex items-center justify-center shadow-md">
              <span className="font-black text-[#111827] text-sm">M</span>
            </div>
            <div>
              <p className={`font-black text-lg leading-none tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                MARSAL
              </p>
              <p className={`text-[10px] leading-none font-medium ${scrolled ? 'text-[#1D4ED8]' : 'text-yellow-300'}`}>
                Sparkle Clean in Seconds
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  scrolled
                    ? 'text-gray-600 hover:text-[#1D4ED8]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20am%20interested%20in%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors shadow-md"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#1D4ED8] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20am%20interested%20in%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
