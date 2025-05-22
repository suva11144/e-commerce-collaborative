import React from 'react';

const DiscountSection = () => {
  return (
    <div className="py-16 bg-[rgba(0,0,0,0.63)]">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-white mb-8">Discount Superhero Tees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-900 p-6 rounded-lg">
            <div className="text-white mb-4">
              <span className="text-sm">Limited Edition:</span>
              <h3 className="text-xl font-bold">Galactic Guardian Tee - 50% Off!</h3>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="bg-black px-3 py-2 rounded">
                <div className="text-white text-xl font-bold">12</div>
                <div className="text-xs text-gray-400">Days</div>
              </div>
              <div className="bg-black px-3 py-2 rounded">
                <div className="text-white text-xl font-bold">04</div>
                <div className="text-xs text-gray-400">Hours</div>
              </div>
              <div className="bg-black px-3 py-2 rounded">
                <div className="text-white text-xl font-bold">16</div>
                <div className="text-xs text-gray-400">Mins</div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-4.0.3"
              alt="Guardian Silhouette"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-black p-6 rounded-lg border border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">10%</h3>
                  <p className="text-gray-400">off the first order</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3"
                  alt="Superhero"
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
              <div className="mt-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                  Shop
                </button>
              </div>
            </div>
            
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to the newsletter</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;