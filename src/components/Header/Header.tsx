import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">LS</div>
      <nav className="space-x-4">
        <a href="#intro" className="hover:underline">Intro</a>
        <a href="#skillset" className="hover:underline">Skillset</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <div className="space-x-2">
        <button>ENG | ESP</button>
        <button>🌙</button>
      </div>
    </header>
  );
};

