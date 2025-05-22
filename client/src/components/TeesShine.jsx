import React from 'react';

const TeesShine = () => {
  return (
    <div className="py-16 bg-[rgba(0,0,0,0.65)]">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-white mb-8">Tees That Shine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3"
              alt="Red Tee"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1523381210434-0ba8f3b8ef7d?ixlib=rb-4.0.3"
              alt="Black Tee"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3"
              alt="White Tee"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3"
              alt="Blue Tee"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3"
              alt="Red Tee"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3"
              alt="Yellow Tee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3"
              alt="Model in White Tee"
              className="w-full h-1/2 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3"
              alt="Hanging White Tee"
              className="w-full h-1/2 object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1624824216070-1e9a7397bc43?ixlib=rb-4.0.3"
              alt="Model in White Tee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeesShine;