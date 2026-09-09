import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-block';
  const variants = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700',
    secondary: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
  };
  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;