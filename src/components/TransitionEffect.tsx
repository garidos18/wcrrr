import { motion } from 'framer-motion';

import { ReactNode } from 'react';

interface TransitionEffectProps {
  children: ReactNode;
}

const TransitionEffect = ({ children }: TransitionEffectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionEffect;