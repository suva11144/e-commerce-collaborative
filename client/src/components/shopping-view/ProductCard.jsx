import React, { useState } from 'react';
import ColorOption from './ColorOption';
import SizeOption from './SizeOption';
import Badge from './Badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const Navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-black/15 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.new && <Badge text="New" variant="new" />}
          {product.featured && <Badge text="Featured" variant="featured" />}
        </div>

        {/* Quick actions */}
        <div className={`absolute w-full bottom-0 flex items-center justify-center gap-2 p-3 bg-white/40 backdrop-blur-sm transform transition-transform duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            className="flex items-center justify-center bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors flex-1"
            onClick={() => onAddToCart(product.id, selectedSize, selectedColor)}
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to cart
          </button>
          <button 
            className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => Navigate(`/product/${product.id}`)} // Navigate to ProductPage with product ID
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
        </div>

        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Color</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <ColorOption
                key={color}
                color={color}
                selected={color === selectedColor}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <SizeOption
                key={size}
                size={size}
                selected={size === selectedSize}
                onClick={() => setSelectedSize(size)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;