import React from 'react';

const ProductCarousel = () => {
  const collections = [
    {
      title: 'Cosmic Defenders',
      image: '/images/cosmic-defenders.jpg', // Replace with actual image paths
      alt: 'Guardians of the Galaxy',
    },
    {
      title: 'City Guardians',
      image: '/images/city-guardians.jpg',
      alt: 'Superhero with cape',
    },
    {
      title: 'Legendary Warriors',
      image: '/images/legendary-warriors.jpg',
      alt: 'Avengers group',
    },
  ];

  return (
    <div className="bg-transparent text-white py-16 px-4 sm:px-8 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Hero Collections</h2>
        <p className="mt-2 text-gray-300">Explore our themed collections, each with its own unique story.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {collections.map((collection, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={collection.image}
              alt={collection.alt}
              className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{collection.title}</h3>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
