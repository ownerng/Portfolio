import React from 'react';
import Profile from '../../assets/ppic.jpg';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <img src={Profile} alt="Descripción de la imagen" className="w-40 h-40 bg-gray-300 rounded-full mb-6 object-cover" />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jhonnatan and I'm a Full Stack Developer</h1>
      <p className="text-gray-500 max-w-lg mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas eligendi consequuntur dolorum maiores, libero nesciunt voluptatum rerum, a fugiat, error repudiandae atque quibusdam. Mollitia corporis pariatur vero accusantium perspiciatis!
      </p>
      <div className="space-x-4">
        <button className="px-4 py-2 border rounded">Contact Me</button>
        <button className="px-4 py-2 border rounded">Projects</button>
      </div>
    </section>
  );
};

export default Hero;
