import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const HeroSection = ({ onClick }) => {
  // Array of images for the hero section
  const heroImages = [
    assets.crops1,
    assets.crops4,
    assets.crops3,
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-800 opacity-60 z-0"></div>
      <div className="relative w-full h-full z-10">
        {/* Only display the current image */}
        <img
          src={heroImages[currentImageIndex]}
          alt="Hero Crop"
          className="object-cover w-full h-full shadow-lg transform hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-5xl font-bold text-center mb-4">Explore Our Products for a Greener Tomorrow</h1>
        <p className="text-xl text-center mb-6 max-w-3xl">Find high-quality seeds, fertilizers, tools, and more to help you grow your crops and improve your harvest. Sustainable solutions at your fingertips!</p>
        <button onClick={onClick} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-xl transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
