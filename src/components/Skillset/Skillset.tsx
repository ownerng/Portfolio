import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Redux", level: 80, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Backend" },
    { name: "GraphQL", level: 65, category: "Backend" },
    { name: "RESTful APIs", level: 90, category: "Backend" },
    
    // Otros
    { name: "Git/GitHub", level: 85, category: "Herramientas" },
    { name: "Docker", level: 70, category: "Herramientas" },
    { name: "AWS", level: 65, category: "Herramientas" },
    { name: "Testing", level: 75, category: "Herramientas" },
    { name: "CI/CD", level: 70, category: "Herramientas" },
  ];

  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");
  const toolSkills = skills.filter(skill => skill.category === "Herramientas");

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Mis Habilidades
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Las tecnologías y herramientas con las que trabajo diariamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <SkillCategory title="Frontend" skills={frontendSkills} darkMode={darkMode} />
          
          {/* Backend Skills */}
          <SkillCategory title="Backend" skills={backendSkills} darkMode={darkMode} />
          
          {/* Tools & Others */}
          <SkillCategory title="Herramientas" skills={toolSkills} darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  darkMode: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, darkMode }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${darkMode ? 'border-gray-600 text-blue-400' : 'border-gray-200 text-blue-600'}`}>
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div 
              className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
            >
              <div 
                className={`h-full rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;