// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/herobg.jpeg';

// ---- SVG fleurs dorées (inchangés) ----
const GoldenFlower1 = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(0 100 100)">
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="40"
          rx="16"
          ry="40"
          fill="#D4AF37"
          opacity="0.8"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="25" fill="#D4AF37" opacity="0.9" />
      <circle cx="100" cy="100" r="10" fill="#FFF" opacity="0.3" />
    </g>
  </svg>
);

const GoldenFlower2 = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(22.5 100 100)">
      {[...Array(6)].map((_, i) => (
        <path
          key={i}
          d="M100 30 C120 60, 140 80, 100 120 C60 80, 80 60, 100 30Z"
          fill="#C5962C"
          opacity="0.7"
          transform={`rotate(${i * 60} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="18" fill="#D4AF37" opacity="0.9" />
      <circle cx="100" cy="100" r="8" fill="#FFF" opacity="0.3" />
    </g>
  </svg>
);

const GoldenFlowerLight = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(0 100 100)">
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="40"
          rx="14"
          ry="35"
          fill="#E8C547"
          opacity="0.6"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="20" fill="#E8C547" opacity="0.8" />
      <circle cx="100" cy="100" r="8" fill="#FFF" opacity="0.2" />
    </g>
  </svg>
);

const Hero = () => {
  // Gestionnaire de clic pour le scroll fluide vers une section
  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-dark"></div>

      {/* Image de fond avec overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30"></div>

      {/* Fleurs dorées animées */}
      <motion.div
        className="absolute top-10 left-5 w-48 h-48 opacity-40"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          rotate: [0, 12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <GoldenFlower1 className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-5 w-64 h-64 opacity-30"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          rotate: [0, -18, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
      >
        <GoldenFlower2 className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 w-36 h-36 opacity-20"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <GoldenFlowerLight className="w-full h-full" />
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 border border-gold/40 rounded-full text-gold text-sm tracking-[0.3em] uppercase">
            Institut de Beauté
          </span>
        </motion.div>

        <motion.h1
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Andreas <span className="text-gold">Beauty</span>
        </motion.h1>

        <motion.p
          className="font-montserrat text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Coiffure, Manucure, Pédicure, Maquillage & Soins Premium - Bafoussam
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* BOUTON RÉSERVER → WHATSAPP */}
          <a
            href="https://wa.me/237697765765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-white font-montserrat font-semibold text-sm tracking-widest uppercase rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:scale-105"
          >
            Réserver maintenant
          </a>

          {/* BOUTON NOS SERVICES → SCROLL FLUIDE */}
          <a
            href="#services"
            onClick={handleScrollTo('services')}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-montserrat font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-gold transition-all duration-500"
          >
            Nos Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;