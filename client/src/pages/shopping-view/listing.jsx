


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

// Collection data (in a real app, this would come from an API)
const collectionsData = {
  marvel: {
    name: 'Marvel Collection',
    products: [
      {
        id: 'm1',
        name: 'Iron Man Arc Reactor Tee',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'm2',
        name: 'Spider-Man Web Shooter Hoodie',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
    ]
  },
  dc: {
    name: 'DC Heroes',
    products: [
      {
        id: 'd1',
        name: 'Batman Dark Knight Tee',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'd2',
        name: 'Superman Shield Hoodie',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
    ]
  },
  anime: {
    name: 'Anime Collection',
    products: [
      {
        id: 'a1',
        name: 'Dragon Ball Z Goku Tee',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'a2',
        name: 'Naruto Sage Mode Hoodie',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800',
        sizes: ['S', 'M', 'L', 'XL']
      },
    ]
  }
};

function Collection() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const collection = id ? collectionsData[id] : null;

  if (!collection) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Collection not found</h1>
        <button
          onClick={() => navigate('/shop/home')}
          className="mt-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft size={20} />
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/shop/home')}
          className="flex items-center gap-2 text-white-600 hover:text-blue-400 cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Shop
        </button>
        <h1 className="text-3xl font-bold text-white-900">{collection.name}</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.products.map((product) => (
          <div key={product.id} className="bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]  rounded-xl border border-white/10  shadow-lg  overflow-hidden">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white-900 mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-black mb-4">${product.price}</p>
              
              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-amber-100 mb-2">
                  Select Size
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border border-gray-300 rounded-md hover:border-black cursor-pointer hover:text-black transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:scale-103 cursor-pointer origin-center transition-transform duration-300 ease-in-out">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;