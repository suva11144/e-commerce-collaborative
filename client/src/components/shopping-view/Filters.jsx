import React from 'react';

const Filters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sizes,
  selectedSizes,
  onSizeChange,
  colors,
  selectedColors,
  onColorChange,
  onClearFilters,
}) => {
  const colorDisplay = {
    black: 'Black',
    white: 'White',
    gray: 'Gray',
    blue: 'Blue',
    red: 'Red',
    green: 'Green',
  };

  const colorClasses = {
    black: 'bg-black',
    white: 'bg-white border border-gray-300',
    gray: 'bg-gray-400',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
  };

  const categoryDisplay = {
    all: 'All Products',
    men: 'Men',
    women: 'Women',
    unisex: 'Children',
    limited: 'Limited Edition',
  };

  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium text-[rgb(239,231,215)] mb-3">Categories</h3>
        <div className="space-y-2 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 text-white rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-black/20 text-white'
                  : 'text-gray-700 hover:bg-white/5'
              }`}
            >
              {categoryDisplay[category]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedSizes.includes(size)
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Colors</h3>
        <div className="space-y-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                selectedColors.includes(color) ? 'bg-gray-100' : ''
              }`}
            >
              <span className={`h-5 w-5 rounded-full ${colorClasses[color]} mr-3`}></span>
              <span>{colorDisplay[color]}</span>
            </button>
          ))}
        </div>
      </div>

      {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedCategory !== 'all') && (
        <button 
          onClick={onClearFilters}
          className="text-sm text-gray-500 underline hover:text-gray-700"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default Filters;
