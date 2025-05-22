import React from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
      <div className="mt-2 flex items-center border border-gray-300 rounded-md w-32">
        <button
          type="button"
          className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <div className="flex-1 text-center">
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-full text-center focus:outline-none text-gray-900"
          />
        </div>
        <button
          type="button"
          className="p-2 text-gray-600 hover:text-gray-900"
          onClick={increaseQuantity}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;