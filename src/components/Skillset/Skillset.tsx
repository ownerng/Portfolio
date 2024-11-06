import React from 'react';

const skills = [
  "python", "fastapi", "django", "tailwindcss", "react",  
  "postgresql", "nodejs", "Typescript", "git",
  "flutter"
];

export const Skillset: React.FC = () => {
  return (
    <section id="skillset" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Skillset</h2>
      <p className="text-gray-500 mb-8">
        Here are some of the cutting-edge technologies, programming languages and productivity tools that I use.
      </p>
      <div className="grid grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill} className="grid">
            <img src={`/icons/${skill}.svg`} alt={skill} className="w-12 h-12"/>
            <h1 className='text-center font-medium text-2xl ml-2'>{skill}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

