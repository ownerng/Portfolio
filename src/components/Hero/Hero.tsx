// src/components/Hero.tsx
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="hero" 
      className={`pt-20 min-h-screen flex flex-col justify-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Hola, soy</span>
              <br />
              <span>Jhonnatan Mendez</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Desarrollador Fullstack
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Experto en crear aplicaciones web modernas con React, TypeScript, Node.js y más. Transformo ideas en productos digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <SocialButton href="https://github.com/ownerng" icon={<Github />} darkMode={darkMode} />
              <SocialButton href="https://www.linkedin.com/in/jhonnatan-mendez/" icon={<Linkedin />} darkMode={darkMode} />
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className={`
                  inline-block px-6 py-3 rounded-lg shadow-md font-medium
                  ${darkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'}
                  transition duration-300
                `}
              >
                Contáctame
              </a>
              <a 
                href="#projects" 
                className={`
                  inline-block ml-4 px-6 py-3 rounded-lg shadow-md font-medium
                  ${darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
                  transition duration-300
                `}
              >
                Ver Proyectos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
              <img 
                src="https://file.garden/aBr7cUHDNAeZ_VnW/pfp.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  darkMode: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, darkMode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center w-10 h-10 rounded-full
        ${darkMode 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
        transition duration-300
      `}
    >
      {icon}
    </a>
  );
};

export default Hero;