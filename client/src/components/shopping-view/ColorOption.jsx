import React from 'react';

const colorMap = {
  black: 'bg-black',
  white: 'bg-white border border-gray-300',
  gray: 'bg-gray-400',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
};

const ColorOption = ({ color, selected, onClick }) => {
  return (
    <button
      className={`h-6 w-6 rounded-full ${colorMap[color]} transition-transform ${
        selected ? 'ring-2 ring-offset-2 ring-gray-800 scale-110' : 'hover:scale-110'
      }`}
      onClick={onClick}
      aria-label={`${color} color`}
    />
  );
};

export default ColorOption;
