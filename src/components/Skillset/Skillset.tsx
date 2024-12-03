import React from 'react';

const skills = [
  "python", "fastapi", "django", "tailwindcss", "react",  
  "postgresql", "nodejs", "typescript", "git",
];

export const Skillset: React.FC = () => {
  return (
    <section id="skillset" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Skillset</h2>
      <p className="text-gray-500 mb-8">
        Here are some of the cutting-edge technologies, programming languages and productivity tools that I use.
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-16">
        {skills.map(skill => (
          <div key={skill} className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-center items-center">
          <img className='w-12 h-12' src={`/icons/${skill}.svg`} />
          <p className="text-gray-600">{skill}</p>
        </div>
        ))}
      </div>
    </section>
  );
};

