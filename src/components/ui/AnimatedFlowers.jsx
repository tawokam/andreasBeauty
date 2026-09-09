import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedFlowers = () => {
  const { scrollYProgress } = useScroll();

  // Déplacements pour différentes fleurs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Fleur 1 - en haut à gauche */}
      <motion.svg
        className="absolute top-10 left-10 w-24 h-24 text-amber-400 opacity-30"
        viewBox="0 0 100 100"
        style={{ y: y1 }}
        fill="currentColor"
      >
        <path d="M50 0 C50 20, 20 30, 0 50 C20 70, 50 80, 50 100 C50 80, 80 70, 100 50 C80 30, 50 20, 50 0Z" />
      </motion.svg>

      {/* Fleur 2 - en bas à droite */}
      <motion.svg
        className="absolute bottom-10 right-10 w-32 h-32 text-amber-400 opacity-20"
        viewBox="0 0 100 100"
        style={{ x: x2 }}
        fill="currentColor"
      >
        <path d="M50 0 C60 30, 90 40, 100 70 C80 80, 70 100, 50 100 C30 100, 20 80, 0 70 C10 40, 40 30, 50 0Z" />
      </motion.svg>

      {/* Fleur 3 - en rotation */}
      <motion.svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-amber-400 opacity-10"
        viewBox="0 0 100 100"
        style={{ rotate: rotate3 }}
        fill="currentColor"
      >
        <path d="M50 0 C50 20, 20 30, 0 50 C20 70, 50 80, 50 100 C50 80, 80 70, 100 50 C80 30, 50 20, 50 0Z" />
      </motion.svg>

      {/* Fleur 4 - en bas à gauche, opacité variable */}
      <motion.svg
        className="absolute bottom-20 left-20 w-20 h-20 text-amber-400"
        viewBox="0 0 100 100"
        style={{ opacity: opacity4 }}
        fill="currentColor"
      >
        <path d="M50 0 C60 30, 90 40, 100 70 C80 80, 70 100, 50 100 C30 100, 20 80, 0 70 C10 40, 40 30, 50 0Z" />
      </motion.svg>
    </div>
  );
};

export default AnimatedFlowers;