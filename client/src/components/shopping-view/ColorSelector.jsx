import React, { useState } from 'react';

const ColorSelector = () => {
  const colors = [
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Red', value: '#EF4444' },
  ];
  
  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Color</h3>
      <div className="mt-4 flex items-center space-x-3">
        {colors.map((color) => (
          <button
            key={color.name}
            style={{ backgroundColor: color.value }}
            className={`h-8 w-8 rounded-full focus:outline-none ring-2 ring-offset-2 transition-transform hover:scale-110 ${
              selectedColor === color.value
                ? 'ring-indigo-600'
                : 'ring-transparent'
            }`}
            onClick={() => setSelectedColor(color.value)}
            aria-label={`Color: ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;