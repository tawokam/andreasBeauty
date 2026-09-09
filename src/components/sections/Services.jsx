// src/components/sections/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSpa,
  FaCut,
  FaPaintBrush,
  FaHandSparkles,
  FaEye,
  FaBrush,
  FaShoppingBag,
  FaGraduationCap,
  FaUsers,
  FaLeaf,
  FaMagic,
  FaCheckCircle,
} from 'react-icons/fa';

// Importez vos images (ou utilisez des URLs externes pour l'instant)
// Si vous n'avez pas d'images, remplacez par des URLs picsum
const placeholderImage = 'https://picsum.photos/seed/beauty/600/400';

// Importez vos images (ou utilisez des URLs externes)
import coiffureImg from '../../assets/images/coiffure.jpg';
import manucureImg from '../../assets/images/image2.jpeg';
import pedicureImg from '../../assets/images/image3.jpeg';
import visageImg from '../../assets/images/image5.jpeg';
import soinCorporel from '../../assets/images/soinCorporel.jpeg';
import cils from '../../assets/images/cils.jpeg';
import microshading from '../../assets/images/microshading.jpeg';
import makeup from '../../assets/images/makeup.jpeg';
import coiffureMarie from '../../assets/images/coiffureMarie.jpeg';
import traitementMeche from '../../assets/images/traitementMeche.jpeg';
import produits from '../../assets/images/produits.jpeg';
import formation from '../../assets/images/formation.jpeg';

// ---- SVG Outils d'esthétique dorés ----
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

const GoldenMirror = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse cx="100" cy="100" rx="55" ry="75" stroke="currentColor" strokeWidth="8" fill="none" />
      <ellipse cx="100" cy="100" rx="45" ry="65" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <ellipse cx="85" cy="80" rx="15" ry="20" fill="white" opacity="0.15" />
      <ellipse cx="115" cy="110" rx="10" ry="14" fill="white" opacity="0.10" />
      <rect x="90" y="175" width="20" height="15" rx="3" fill="currentColor" opacity="0.7" />
      <rect x="80" y="185" width="40" height="5" rx="2" fill="currentColor" opacity="0.5" />
    </g>
  </svg>
);

// ---- Données des services (12 services) ----
const servicesData = [
  {
    id: 1,
    title: 'Soins du Visage',
    description: 'Nettoyage en profondeur, hydratation intense et soins anti-âge personnalisés.',
    image: visageImg,
    icon: <FaSpa />,
    badge: 'Premium',
  },
  {
    id: 2,
    title: 'Coiffure & Brushing',
    description: 'Coupes tendance, coiffages sophistiqués et soins capillaires sur mesure.',
    image: coiffureImg,
    icon: <FaCut />,
    badge: 'Tendance',
  },
  {
    id: 3,
    title: 'Manucure & Nail Art',
    description: 'Soins des ongles, pose de vernis semi-permanent, nail art créatif.',
    image: manucureImg,
    icon: <FaPaintBrush />,
    badge: 'Créatif',
  },
  {
    id: 4,
    title: 'Pédicure & Soins des Pieds',
    description: 'Soins complets, modelage relaxant, vernis pour des pieds parfaits.',
    image: pedicureImg,
    icon: <FaHandSparkles />,
    badge: 'Relaxant',
  },
  {
    id: 5,
    title: 'Soins Corporels',
    description: 'Gommages, enveloppements, modelages et soins hydratants pour tout le corps.',
    image: soinCorporel,
    icon: <FaLeaf />,
    badge: 'Bien-être',
  },
  {
    id: 6,
    title: 'Extension de Cils',
    description: 'Pose d\'extensions de cils 3D, volume russe et soin des cils naturels.',
    image: cils,
    icon: <FaEye />,
    badge: 'Volume',
  },
  {
    id: 7,
    title: 'Microshading',
    description: 'Microblading et microshading pour des sourcils parfaits et naturels.',
    image: microshading,
    icon: <FaBrush />,
    badge: 'Permanent',
  },
  {
    id: 8,
    title: 'Make Up',
    description: 'Maquillage professionnel pour soirée, mariage, shooting photo et plus.',
    image: makeup,
    icon: <FaMagic />,
    badge: 'Artiste',
  },
  {
    id: 9,
    title: 'Coiffure Mariés',
    description: 'Coiffages exclusifs pour mariés, demoiselles d\'honneur et invitées.',
    image: coiffureMarie,
    icon: <FaUsers />,
    badge: 'Événement',
  },
  {
    id: 10,
    title: 'Traitement des Mèches',
    description: 'Mèches, balayage, ombré hair et coloration personnalisée.',
    image: traitementMeche,
    icon: <FaCheckCircle />,
    badge: 'Coloration',
  },
  {
    id: 11,
    title: 'Vente de Produits Cosmétiques',
    description: 'Produits haut de gamme, soins professionnels et cosmétiques bio.',
    image: produits,
    icon: <FaShoppingBag />,
    badge: 'Shop',
  },
  {
    id: 12,
    title: 'Formations',
    description: 'Formations en esthétique, coiffure, maquillage et management de salon.',
    image: formation,
    icon: <FaGraduationCap />,
    badge: 'Enseignement',
  },
];

// ---- Composant principal ----
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -80 : 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-dark">
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
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 text-gold-light opacity-10 hidden lg:block"
        animate={{ x: [0, 15, 0], y: [0, -10, 0], rotate: [0, 6, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <GoldenMirror className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-28 h-28 text-gold opacity-10 hidden xl:block"
        animate={{ x: [0, 18, 0], y: [0, -12, 0], rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <GoldenScissors className="w-full h-full" />
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
          Nos Services
        </motion.h2>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Découvrez une gamme complète de soins haut de gamme pour révéler votre beauté.
        </p>

        {/* Grille : 1 → 2 → 3 colonnes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => {
            const direction = index % 2 === 0 ? 'left' : 'right';
            return (
              <motion.div
                key={service.id}
                variants={cardVariants(direction)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gold/30 hover:border-gold shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-70 md:opacity-80"></div>

                  {/* Icône en superposition */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gold bg-dark/60 p-2 sm:p-3 rounded-full backdrop-blur-sm border border-gold/30 group-hover:border-gold transition-all duration-300">
                    <span className="text-2xl sm:text-3xl">{service.icon}</span>
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gold/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gold/40 hidden xs:block">
                      <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Texte */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-gold mb-1 md:mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                 
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;