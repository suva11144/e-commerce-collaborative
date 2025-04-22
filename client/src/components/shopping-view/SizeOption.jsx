import React from 'react';

const SizeOption = ({ size, selected, onClick }) => {
  return (
    <button
      className={`h-8 min-w-8 px-2 rounded-md text-sm font-medium transition-all
        ${
          selected
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      onClick={onClick}
      aria-label={`Size ${size}`}
    >
      {size}
    </button>
  );
};

export default SizeOption;
