import React from 'react';

const products = [
  {
    name: 'Cosmic Captain Tee',
    price: '$25',
    image: '/cosmic-captain.jpg'
  },
  {
    name: 'Galaxy Guardian Tee',
    price: '$25',
    image: '/galaxy-guardian.jpg'
  },
  {
    name: 'Regular Planet Tee',
    price: '$25',
    image: '/regular-planet.jpg'
  },
  {
    name: 'Nature Knight Tee',
    price: '$25',
    image: '/nature-knight.jpg'
  }
];

const ProductCarousel = () => {
  return (
    <div className="py-12 bg-transparent left-0">
      <div className="container-custom">
        <h3 className="text-white mb-6">Explore Our Heroic Collection</h3>
        <br />
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {products.map((product, index) => (
            <div key={index} className="min-w-[250px] bg-black rounded-lg overflow-hidden h-30 flex flex-row items-between justify-between p-5">      
                <img  className="  h-20 w-20 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3od1itZ4Av_g2-f5lNUOLkVfxpOlzT1BbDcWZiv0CpE1dHxwbHBGf0xf_daes2x1hUU&usqp=CAU" alt={product.name} />
              <div className="m-3">
                <h4 className="text-white ">{product.name}</h4>
                <p className="text-purple-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;