import React from 'react';
import { Code, Globe, Server } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Sobre Mí
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded"></div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Quién Soy</h3>
            <p className="mb-6">
              Soy un desarrollador fullstack apasionado por crear aplicaciones web y móviles 
              excepcionales. Con una sólida experiencia en tecnologías frontend y backend, 
              me especializo en construir soluciones completas y escalables.
            </p>

            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"].map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 text-sm rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-300' 
                      : 'bg-gray-200 text-blue-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-4">Lo Que Hago</h3>
            
            <div className="space-y-6">
              <ServiceCard 
                icon={<Code size={24} />} 
                title="Desarrollo Frontend" 
                description="Creo interfaces de usuario modernas, interactivas y responsivas utilizando las últimas tecnologías como React, Next.js y TypeScript."
                darkMode={darkMode}
              />
              
              <ServiceCard 
                icon={<Server size={24} />} 
                title="Desarrollo Backend" 
                description="Diseño y desarrollo APIs robustas, bases de datos eficientes y lógica de servidor con Node.js, Express, MongoDB y SQL."
                darkMode={darkMode}
              />
              
              <ServiceCard 
                icon={<Globe size={24} />} 
                title="Desarrollo Web Completo" 
                description="Implemento soluciones end-to-end, desde la concepción hasta el despliegue, con arquitecturas escalables y seguras."
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  darkMode: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, darkMode }) => {
  return (
    <div className={`flex ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className={`flex-shrink-0 mr-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
};

export default About;