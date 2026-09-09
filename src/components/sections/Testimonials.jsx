import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Marie-Claire', text: 'Un accueil chaleureux et des soins exceptionnels. Je ressors toujours rajeunie !', rating: 5 },
  { name: 'Jean-Paul', text: 'Le meilleur institut de Bafoussam. Service impeccable et produits de qualité.', rating: 5 },
  { name: 'Sophie', text: 'Je recommande vivement Andreas Beauty pour leur professionnalisme et leur savoir-faire.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">Ce qu'ils disent</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-amber-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center text-amber-500 mb-2">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700 italic">"{t.text}"</p>
              <h4 className="font-semibold mt-4 text-gray-800">{t.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;