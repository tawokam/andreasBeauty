import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

// Importez vos images de galerie (ou URLs)
const galleryImages = [
  'https://picsum.photos/seed/1/400/600',
  'https://picsum.photos/seed/2/400/400',
  'https://picsum.photos/seed/3/500/700',
  'https://picsum.photos/seed/4/300/500',
  'https://picsum.photos/seed/5/600/400',
  'https://picsum.photos/seed/6/400/600',
  'https://picsum.photos/seed/7/500/500',
  'https://picsum.photos/seed/8/350/600',
  // ajoutez autant que vous voulez
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 bg-black relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-amber-400 mb-4">Notre Galerie</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez nos réalisations et l'ambiance de notre institut.
        </p>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryImages.map((url, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
            >
              <img
                src={url}
                alt={`Galerie ${index+1}`}
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;