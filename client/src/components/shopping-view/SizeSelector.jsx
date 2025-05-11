import React, { useState } from 'react';

const SizeSelector = () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Size Guide
        </a>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium uppercase ${
              selectedSize === size
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
            } transition-colors duration-200`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;