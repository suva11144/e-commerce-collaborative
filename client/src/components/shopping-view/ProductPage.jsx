import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products'; // Import your products array
import Header from './Header';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import Footer from './Footer';

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === id); // Find the product by ID

  if (!product) {
    return (
      <div className="bg-transparent min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-transparent">
      <Header />
      <br />
      <br />
      <div className="container mx-auto px-4 pt-20 pb-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
          <div className="md:w-1/2">
            {/* Pass product images to ProductGallery */}
            <ProductGallery images={[product.image]} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Pass product details to ProductInfo */}
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;