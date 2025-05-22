import React, { useState } from 'react';

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
          <img
            src="https://via.placeholder.com/600x600?text=No+Image+Available"
            alt="No product image"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
          <img
            src={images[selectedImage]}
            alt="Product image"
            className="h-full w-full object-cover object-center transition-opacity duration-500"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative rounded-md overflow-hidden aspect-w-1 aspect-h-1 transition-transform duration-300 hover:scale-105 ${
              selectedImage === index ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;