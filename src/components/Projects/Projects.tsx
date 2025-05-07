import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  GithubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Wrapped AI",
      description: "Aplicacion movil de IA que analizaba las conversaciones de WhatsApp y generaba un analisis de las mismas.",
      image: "https://file.garden/aBr7cUHDNAeZ_VnW/wrappedia.jpeg",
      tags: ["Flutter", "Fastapi"],
      GithubUrl: "https://github.com/Camel-Project/whatsapp-wrapped-app",
      liveUrl: "https://example.com",
      category: "Fullstack"
    },
  ];

  const categories = ["Todos"];
  
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Mis Proyectos
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Una selección de mis proyectos más recientes y destacados.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-md transition-all duration-300
                ${activeFilter === category 
                  ? (darkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white')
                  : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')}
              `}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  return (
    <div 
      className={`
        rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2
        ${darkMode ? 'bg-gray-800 shadow-gray-700' : 'bg-white shadow-gray-200'}
      `}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-blue-900/80' : 'bg-blue-600/80'}`}>
          <div className="flex space-x-4">
            <a 
              href={project.GithubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition"
            >
              <Github size={20} />
            </a>

          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span 
            className={`px-2 py-1 text-xs rounded-full ${
              darkMode 
                ? 'bg-blue-900 text-blue-300' 
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            {project.category}
          </span>
        </div>
        
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`px-2 py-1 text-xs rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;