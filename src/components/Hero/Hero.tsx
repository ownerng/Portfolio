import React from 'react';
import Profile from '../../assets/ppic.jpg';
import { Button } from '../Button/Button';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <img src={Profile} alt="Descripción de la imagen" className="w-40 h-40 bg-gray-300 rounded-full mb-6 object-cover" />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jhonnatan - Developer based in Colombia</h1>
      <p className="text-gray-500 max-w-lg mb-6">
        docker
      </p>
      <div className="flex flex-row space-x-4">
       <Button text={"Contact me"} /> 
       <Button text={"Projects"} /> 
      </div>
    </section>
  );
};

export default Hero;
