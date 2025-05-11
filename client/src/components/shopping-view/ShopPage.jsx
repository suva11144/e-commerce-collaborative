import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { products } from '../data/products';
import { SlidersHorizontal, X } from 'lucide-react';


const ShopPage = ({ onAddToCart }) => {
  const allCategories = ['all', 'men', 'women', 'unisex', 'limited'];
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const allColors = ['black', 'white', 'gray', 'blue', 'red', 'green'];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);




  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (selectedSizes.length > 0 && !selectedSizes.some(size => product.sizes.includes(size))) {
      return false;
    }
    if (selectedColors.length > 0 && !selectedColors.some(color => product.colors.includes(color))) {
      return false;
    }
    return true;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <p className="text-[rgba(239,231,215)] max-w-2xl mx-auto">
          <br />
          <br />
          <br />
          Discover our premium t-shirts crafted from the finest materials for exceptional comfort and style.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6 md:hidden">
        <p className="text-sm text-[rgba(239,231,215)]">{filteredProducts.length} products</p>
        <button
          className="flex items-center text-[rgba(239,231,215)] bg-gray-600 rounded-md px-3 py-2 text-sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal size={16} className="mr-1" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-64 flex-shrink-0 mr-8">
          <Filters
            categories={allCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            sizes={allSizes}
            selectedSizes={selectedSizes}
            onSizeChange={handleSizeChange}
            colors={allColors}
            selectedColors={selectedColors}
            onColorChange={handleColorChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                className="p-2 text-gray-500"
                onClick={() => setIsFilterOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <Filters
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={(category) => {
                handleCategoryChange(category);
                setIsFilterOpen(false);
              }}
              sizes={allSizes}
              selectedSizes={selectedSizes}
              onSizeChange={handleSizeChange}
              colors={allColors}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              onClearFilters={handleClearFilters}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <button
                className="w-full bg-gray-900 text-white py-3 rounded-md"
                onClick={() => setIsFilterOpen(false)}
              >
                Show {filteredProducts.length} results
              </button>
            </div>
          </div>
        )}

        <div className="flex-1">
          {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedCategory !== 'all') && (
            <div className="mb-6 flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full  text-sm">
                  Category: {selectedCategory}
                  <button
                    className="ml-2 text-gray-500"
                    onClick={() => setSelectedCategory('all')}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              {selectedSizes.map(size => (
                <div key={size} className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Size: {size}
                  <button
                    className="ml-2 text-gray-700"
                    onClick={() => handleSizeChange(size)}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              {selectedColors.map(color => (
                <div key={color} className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                  Color: {color}
                  <button
                    className="ml-2 text-gray-500"
                    onClick={() => handleColorChange(color)}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              <button
                className="text-sm text-gray-500 hover:text-gray-700 ml-auto"
                onClick={handleClearFilters}
              >
                Clear all
              </button>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-500 mb-4">No products match your filters.</p>
              <button
                className="text-gray-600 underline"
                onClick={handleClearFilters}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
