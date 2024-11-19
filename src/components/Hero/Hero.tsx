import React from 'react';
import Profile from '../../assets/ppic.jpg';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <img src={Profile} alt="Descripción de la imagen" className="w-40 h-40 bg-gray-300 rounded-full mb-6 object-cover" />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Luigi and I'm a Full Stack Developer</h1>
      <p className="text-gray-500 max-w-lg mb-6">
        I’m currently based in the PH. I have 5 years of experience in Tech and Design and I am open for opportunities, collaborations and interesting projects. 100% Digital Native
      </p>
      <div className="space-x-4">
        <button className="px-4 py-2 border rounded">Contact Me</button>
        <button className="px-4 py-2 border rounded">Projects</button>
      </div>
    </section>
  );
};

export default Hero;
