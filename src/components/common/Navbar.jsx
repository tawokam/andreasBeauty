import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Nos Services', id: 'services' },
    { label: 'Nos Réalisations', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Gestionnaire de clic amélioré pour mobile
  const handleClick = (e, id) => {
    e.preventDefault();
    
    // Fermer le menu si ouvert
    if (isOpen) {
      setIsOpen(false);
      // Attendre que le menu soit fermé (grâce à un délai)
      setTimeout(() => {
        scrollToSection(id);
      }, 350); // correspond à la durée de l'animation du menu (0.3s)
    } else {
      scrollToSection(id);
    }
  };

  // Fonction de scroll réutilisable
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Élément avec l'ID "${id}" non trouvé.`);
    }
  };

  const brandColor = scrolled ? 'text-gray-800' : 'text-white';
  const brandGold = scrolled ? 'text-amber-600' : 'text-amber-400';
  const linkColor = scrolled ? 'text-gray-700' : 'text-gray-200';
  const linkHover = scrolled ? 'hover:text-amber-600' : 'hover:text-amber-400';
  const iconColor = scrolled ? 'text-gray-800' : 'text-white';

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className={`text-2xl font-serif ${brandColor}`}>
          <span className={brandGold}>Andreas</span> Beauty
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`${linkColor} ${linkHover} transition cursor-pointer`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className={iconColor} /> : <FaBars className={iconColor} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="block px-4 py-2 text-gray-800 hover:bg-amber-50 font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;