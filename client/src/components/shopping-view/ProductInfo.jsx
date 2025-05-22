import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import StarRating from './StarRating';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import ProductBenefits from './ProductBenefits';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col space-y-6">
      {/* Product Name and Rating */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <div className="mt-2 flex items-center">
          <StarRating rating={product.rating || 4} reviewCount={product.reviewCount || 128} />
          <span className="ml-4 text-sm text-gray-500">SKU: {product.sku || 'N/A'}</span>
        </div>
      </div>

      {/* Product Price */}
      <div className="mt-2">
        <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
        <p className="text-sm text-gray-500 mt-1">Tax included. Shipping calculated at checkout.</p>
      </div>

      {/* Product Description */}
      <div className="mt-4 prose prose-sm text-gray-700">
        <p>{product.description}</p>
      </div>

      {/* Size Selector */}
      <div className="mt-6">
        <SizeSelector sizes={product.sizes} />
      </div>

      {/* Color Selector */}
      <div className="mt-6">
        <ColorSelector colors={product.colors} />
      </div>

      {/* Quantity Selector */}
      <div className="mt-8">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>

      {/* Add to Cart and Wishlist Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
        >
          <span>Add to Cart</span>
        </button>
        <button 
          className="border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
        >
          <Heart size={20} className="mr-2" />
          <span>Add to Wishlist</span>
        </button>
      </div>

      {/* Product Benefits */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <ProductBenefits />
      </div>
    </div>
  );
};

export default ProductInfo;