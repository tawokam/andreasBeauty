// src/components/sections/WhyUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaGem } from 'react-icons/fa';

// ---- SVG Outils d'esthétique dorés ----

// 1. Ciseaux de coiffure
const GoldenScissors = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none">
      <path d="M60 40 L120 100" />
      <path d="M60 40 L40 30" />
      <path d="M60 160 L120 100" />
      <path d="M60 160 L40 170" />
      <circle cx="60" cy="100" r="8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="30" r="14" stroke="currentColor" />
      <circle cx="40" cy="170" r="14" stroke="currentColor" />
    </g>
  </svg>
);

// 2. Peigne
const GoldenComb = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
      <rect x="40" y="60" width="120" height="30" rx="5" fill="currentColor" stroke="none" />
      {[...Array(8)].map((_, i) => (
        <line key={i} x1={50 + i * 14} y1="90" x2={50 + i * 14} y2="140" stroke="currentColor" />
      ))}
    </g>
  </svg>
);

// 3. Miroir
const GoldenMirror = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse cx="100" cy="90" rx="55" ry="70" stroke="currentColor" strokeWidth="8" fill="none" />
      <ellipse cx="100" cy="90" rx="45" ry="60" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <ellipse cx="80" cy="70" rx="15" ry="20" fill="white" opacity="0.15" />
      <ellipse cx="115" cy="100" rx="10" ry="14" fill="white" opacity="0.10" />
      <rect x="90" y="160" width="20" height="25" rx="3" fill="currentColor" opacity="0.7" />
      <rect x="80" y="180" width="40" height="6" rx="3" fill="currentColor" opacity="0.5" />
    </g>
  </svg>
);

// 4. Brosse à cheveux (optionnelle)
const GoldenBrush = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x="70" y="60" width="60" height="100" rx="10" fill="currentColor" opacity="0.8" />
      <rect x="60" y="50" width="80" height="20" rx="5" fill="currentColor" opacity="0.6" />
      {[...Array(5)].map((_, i) => (
        <circle key={i} cx={70 + i * 14} cy="50" r="4" fill="currentColor" />
      ))}
    </g>
  </svg>
);

// ---- Composant principal ----

const WhyUs = () => {
  const items = [
    { icon: <FaStar />, title: 'Expertise', description: 'Des professionnelles qualifiées avec des années d\'expérience.' },
    { icon: <FaHeart />, title: 'Passion', description: 'Chaque cliente est unique, nous mettons tout notre cœur.' },
    { icon: <FaGem />, title: 'Qualité Premium', description: 'Produits haut de gamme et cadre élégant.' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-dark">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gray-900 to-dark"></div>

      {/* Outils dorés animés en arrière-plan */}
      <motion.div
        className="absolute top-10 left-5 w-32 h-32 text-gold opacity-15"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <GoldenScissors className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-5 w-40 h-40 text-gold-dark opacity-15"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          rotate: [0, -10, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <GoldenComb className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 w-28 h-28 text-gold-light opacity-10"
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 6, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <GoldenMirror className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 text-gold opacity-10"
        animate={{
          x: [0, 18, 0],
          y: [0, -12, 0],
          rotate: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <GoldenBrush className="w-full h-full" />
      </motion.div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          className="font-playfair text-4xl md:text-5xl text-center text-gold mb-4 font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          L'Excellence au service de votre beauté
        </motion.h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Découvrez pourquoi Andreas Beauty est le choix de référence à Bafoussam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-gold/30 hover:border-gold shadow-lg hover:shadow-gold/10 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="text-5xl text-gold mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;