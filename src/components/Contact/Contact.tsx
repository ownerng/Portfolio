import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Contáctame
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            ¿Tienes algún proyecto en mente? ¡Hablemos!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Información de contacto */}
          <div className="lg:w-1/3">
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail />} 
                  title="Email" 
                  value="tu-email@ejemplo.com" 
                  href="mailto:tu-email@ejemplo.com"
                  darkMode={darkMode}
                />
                
                <ContactInfo 
                  icon={<Phone />} 
                  title="Teléfono" 
                  value="+34 123 456 789" 
                  href="tel:+34123456789"
                  darkMode={darkMode}
                />
                
                <ContactInfo 
                  icon={<MapPin />} 
                  title="Ubicación" 
                  value="Madrid, España" 
                  darkMode={darkMode}
                />
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Sígueme</h4>
                <div className="flex space-x-4">
                  <SocialLink darkMode={darkMode} href="https://github.com/" name="GitHub" />
                  <SocialLink darkMode={darkMode} href="https://linkedin.com/" name="LinkedIn" />
                  <SocialLink darkMode={darkMode} href="https://twitter.com/" name="Twitter" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="lg:w-2/3">
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Envíame un Mensaje</h3>
              
              {formSubmitted ? (
                <div className={`p-4 rounded-md ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                  ¡Gracias por tu mensaje! Te responderé lo antes posible.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Nombre
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-800'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className={`w-full px-4 py-2 rounded-md border ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-800'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Asunto
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mensaje
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`
                      flex items-center justify-center px-6 py-3 rounded-lg font-medium
                      ${darkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'}
                      transition duration-300
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  darkMode: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value, href, darkMode }) => {
  const content = (
    <div className="flex items-start">
      <div className={`flex-shrink-0 p-3 rounded-md mr-4 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{title}</h4>
        <p className="text-base font-medium">{value}</p>
      </div>
    </div>
  );
  
  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  
  return content;
};

interface SocialLinkProps {
  href: string;
  name: string;
  darkMode: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, name, darkMode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        px-3 py-2 rounded-md text-sm font-medium
        ${darkMode 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
        transition duration-300
      `}
    >
      {name}
    </a>
  );
};

export default Contact;