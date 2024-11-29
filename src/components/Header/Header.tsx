import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">Owner()</div>
      <nav className="space-x-4">
        <a href="#intro" className="hover:underline">Intro</a>
        <a href="#skillset" className="hover:underline">Skillset</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <div className="flex">
        <a href="https://github.com/ownerng" target="_blank"
          rel="noopener noreferrer"><img src={`/icons/github.svg`} alt='Github' className="w-8 h-8" /></a>
      </div>
    </header>
  );
};

