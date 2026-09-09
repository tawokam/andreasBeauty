// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand } from 'react-icons/fa';

import coiffure1 from '../../assets/images/realisation4.jpeg';
import coiffure2 from '../../assets/images/realisation5.jpeg';
import cils from '../../assets/images/realisation6.jpeg';
import manucure from '../../assets/images/realisation7.jpeg';
import Nail from '../../assets/images/realisation8.jpeg';
import formation from '../../assets/images/realisation14.jpeg';
import microshading from '../../assets/images/realisation9.jpeg';
import maquillage from '../../assets/images/realisation10.jpeg';
import maquillage2 from '../../assets/images/realisation11.jpeg';
import coiffure3 from '../../assets/images/realisation1.jpeg';
import pedicure from '../../assets/images/realisation12.jpeg';
import soinvissage from '../../assets/images/realisation13.jpeg';

// ---- SVG outils dorés (pour cohérence) ----
const GoldenScissors = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none">
      <path d="M60 40 L120 100" stroke="currentColor" />
      <path d="M60 40 L40 30" stroke="currentColor" />
      <path d="M60 160 L120 100" stroke="currentColor" />
      <path d="M60 160 L40 170" stroke="currentColor" />
      <circle cx="60" cy="100" r="8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="30" r="14" stroke="currentColor" fill="none" />
      <circle cx="40" cy="170" r="14" stroke="currentColor" fill="none" />
    </g>
  </svg>
);

const GoldenBrush = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x="90" y="60" width="20" height="90" rx="4" fill="currentColor" opacity="0.8" />
      <rect x="85" y="40" width="30" height="25" rx="2" fill="currentColor" opacity="0.6" />
      <path d="M85 40 C85 15, 115 15, 115 40Z" fill="currentColor" opacity="0.9" />
      <path d="M90 40 C90 20, 110 20, 110 40Z" fill="#fff" opacity="0.3" />
    </g>
  </svg>
);

// ---- Données des images avec des hauteurs variées pour l'effet masonry ----
// (Utilisez vos propres images, ici des placeholders)
const images = [
  { src: coiffure1, alt: 'Coiffure élégante', height: 'h-80' },
  { src: manucure, alt: 'Manucure sophistiquée', height: 'h-64' },
  { src: maquillage, alt: 'Maquillage de soirée', height: 'h-72' },
  { src: pedicure, alt: 'Pédicure soignée', height: 'h-96' },
  { src: coiffure2, alt: 'Coiffure moderne', height: 'h-56' },
  { src: Nail, alt: 'Nail art créatif', height: 'h-80' },
  { src: maquillage2, alt: 'Maquillage naturel', height: 'h-64' },
  { src: soinvissage, alt: 'Soin du visage', height: 'h-88' },
  { src: cils, alt: 'Extension de cils', height: 'h-48' },
  { src: microshading, alt: 'Microshading', height: 'h-76' },
  { src: coiffure3, alt: 'Coiffure mariée', height: 'h-68' },
  { src: formation, alt: 'Formation beauté', height: 'h-64' },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id='portfolio' className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-dark">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gray-900 to-dark"></div>

      {/* Outils dorés flottants (masqués sur mobile) */}
      <motion.div
        className="absolute top-10 left-5 w-40 h-40 text-gold opacity-15 hidden sm:block"
        animate={{ x: [0, 25, 0], y: [0, -15, 0], rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <GoldenScissors className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-5 w-48 h-48 text-gold-dark opacity-15 hidden md:block"
        animate={{ x: [0, -20, 0], y: [0, 15, 0], rotate: [0, -10, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <GoldenBrush className="w-full h-full" />
      </motion.div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center text-gold mb-3 md:mb-4 font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos Réalisations
        </motion.h2>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Découvrez notre savoir-faire à travers nos réalisations.
        </p>

        {/* Disposition en brique (masonry) avec colonnes */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`break-inside-avoid relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${img.height}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay doré au survol */}
              <div className="absolute inset-0 bg-gold/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-dark/60 backdrop-blur-sm p-3 rounded-full border-2 border-gold/50">
                  <FaExpand className="text-gold text-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-dark/60 backdrop-blur-sm p-3 rounded-full hover:bg-gold hover:text-dark transition-colors duration-300"
              >
                <FaTimes className="text-2xl" />
              </button>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white text-lg font-playfair bg-dark/60 backdrop-blur-sm py-2 px-4 mx-auto max-w-md rounded-full">
                {selectedImage.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;