import React from 'react';

const trendingProducts = [
  {
    name: 'Galactic Warrior Tee',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Nebula Nomad Tee',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Quasar Quest Tee',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Andromeda Ace Tee',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1532673492-529aa3b3b7dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const TrendingTees = () => {
  return (
    <div className="py-12 bg-[rgba(243,232,255,0.15)]">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Trending Heroic Tees</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {trendingProducts.map((product, index) => (
            <div key={index} className="min-w-[250px] bg-black rounded-lg overflow-hidden">
              <div className="h-[280px] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-white text-sm">{product.name}</h4>
                <p className="text-purple-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-purple-500 text-white px-6 py-2 w-[150px] rounded-md hover:bg-purple-600">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTees;