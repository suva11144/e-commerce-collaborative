import React from 'react';
import { X } from 'lucide-react';

const CartItem = ({
  product,
  quantity,
  size,
  color,
  onRemove,
  onUpdateQuantity,
}) => {
  const colorDisplay = {
    black: 'Black',
    white: 'White',
    gray: 'Gray',
    blue: 'Blue',
    red: 'Red',
    green: 'Green',
  };

  return (
    <div className="flex py-4 border-b border-gray-200 last:border-0">
      <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3 className="line-clamp-1">{product.name}</h3>
          <p className="ml-4">${product.price.toFixed(2)}</p>
        </div>

        <div className="mt-1 text-sm text-gray-500">
          <p>Size: {size}</p>
          <p>Color: {colorDisplay[color]}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded">
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-2 py-1">{quantity}</span>
            <button
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              onClick={() => onUpdateQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="font-medium text-gray-500 hover:text-gray-800"
            onClick={onRemove}
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
