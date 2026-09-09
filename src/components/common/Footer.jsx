import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="https://www.facebook.com/profile.php?id=61589604261994" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition"><FaFacebook /></a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Andreas Beauty – Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;