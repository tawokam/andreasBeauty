import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, className = '' }) => {
  return (
    <motion.div
      className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${className}`}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif text-amber-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;