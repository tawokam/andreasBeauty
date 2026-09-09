import React from 'react';
import Button from '../ui/Button';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Placeholder d'image – remplacez par votre propre image */}
          <div className="bg-gray-200 h-64 rounded-lg shadow-2xl flex items-center justify-center text-gray-500">
            Image de l'institut
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">À propos d'Andreas Beauty</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Andreas Beauty est un institut de beauté situé à Bafoussam, Cameroun. Notre passion est de mettre en valeur la beauté naturelle de chaque client à l'aide de produits de qualité et de techniques innovantes.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Fondé par une équipe d'esthéticiennes expérimentées, nous offrons un service personnalisé dans une atmosphère élégante et apaisante.
          </p>
          <Button variant="secondary">En savoir plus</Button>
        </div>
      </div>
    </section>
  );
};

export default About;