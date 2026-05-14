import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919445880150';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20want%20to%20enquire%20about%20your%20cleaning%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <FaWhatsapp size={28} className="text-white relative z-10" />
    </motion.a>
  );
}
