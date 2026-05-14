import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const { ref, isInView } = useScrollAnimation();

  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  const chosen = variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={chosen}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
