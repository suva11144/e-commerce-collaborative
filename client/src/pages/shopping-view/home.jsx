

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, ShoppingBag } from 'lucide-react';

// Categories data
const categories = [
  {
    id: 'marvel',
    name: 'Marvel Collection',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800',
    subcategories: ['Avengers', 'Spider-Man', 'X-Men']
  },
  {
    id: 'dc',
    name: 'DC Heroes',
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800',
    subcategories: ['Batman', 'Superman', 'Wonder Woman']
  },
  {
    id: 'anime',
    name: 'Anime Collection',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800',
    subcategories: ['Dragon Ball', 'Naruto', 'One Piece']
  }
];

function ShopingHome() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-amber-50">Hero's Armory Shop</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-lg hover:scale-105 cursor-pointer origin-center transition-transform duration-300 ease-in-out"
        >
          <Filter size={20} />
          Filters
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]  rounded-xl p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white-700 mb-2">
                Price Range
              </label>
              <select className="w-full border rounded-md p-2">
                <option>All Prices</option>
                <option>Under $25</option>
                <option>$25 - $50</option>
                <option>Over $50</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white-700 mb-2">
                Size
              </label>
              <select className="w-full border rounded-md p-2">
                <option>All Sizes</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white-700 mb-2">
                Sort By
              </label>
              <select className="w-full border rounded-md p-2">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]  rounded-xl border border-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub}
                    className="block w-full text-left px-4 py-2 text-white hover:scale-102 origin-center transition-transform duration-300 ease-in-out"
                  >
                    {sub}
                  </button>
                ))}
              </div>
              <button
                onClick={() => navigate(`/collection/${category.id}`)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:scale-103 cursor-pointer origin-center transition-transform duration-300 ease-in-out"
              >
                <ShoppingBag size={20} />
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ShopingHome;