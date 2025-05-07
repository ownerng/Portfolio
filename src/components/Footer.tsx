import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              DevPortfolio
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>
              Inicio
            </a>
            <a href="#about" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>
              Sobre Mí
            </a>
            <a href="#projects" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>
              Proyectos
            </a>
            <a href="#skills" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>
              Habilidades
            </a>
            <a href="#contact" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>
              Contacto
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="flex items-center">
              Diseñado con <Heart size={16} className="mx-1 text-red-500" /> en 2025
            </p>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Tu Nombre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;