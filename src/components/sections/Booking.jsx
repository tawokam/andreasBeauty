import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // importer l'icône WhatsApp

const Booking = () => {
  return (
    <section id='contact' className="py-20 bg-gradient-to-r from-dark to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Prêt(e) à <span className="text-gold">révéler votre beauté</span> ?
          </h2>
          <p className="font-montserrat text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Offrez-vous une expérience de soin unique. Réservez dès maintenant votre rendez-vous dans notre institut.
          </p>
          
          {/* Lien WhatsApp avec style de bouton */}
          <a
            href="https://wa.me/237697765765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 text-lg font-montserrat font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:scale-105"
          >
            <FaWhatsapp className="mr-3 text-2xl" />
            Prendre rendez-vous
          </a>

          <div className="mt-6 text-gray-400 text-sm flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-gold text-base" />
                +237 697 765 765
            </span>
            <span className="hidden sm:inline text-gold/30">|</span>
            <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold text-base" />
                Place des Fêtes, après l’hôtel La Belle Époque, Bafoussam
            </span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;