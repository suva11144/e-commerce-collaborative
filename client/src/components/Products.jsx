import React from 'react';
import ProductCard from './ProductCard';
import deadpoolts1 from "../assets/deadpoolts1.webp";
import deadpoolts2 from "../assets/deadpoolts2.webp";
import deadpoolts3 from "../assets/deadpoolts3.webp";
import deadpoolts4 from "../assets/deadpoolts4.webp";

const products = [
  {
    name: "Dark Knight Edition",
    price: "$34.99",
    image: deadpoolts1,
    features: ["Premium Cotton", "Glow in Dark Print", "Limited Edition"],
    className: "batman-card"
  },
  {
    name: "Man of Steel",
    price: "$34.99",
    image: deadpoolts2,
    features: ["Premium Cotton", "Metallic Print", "Collector's Edition"],
    className: "superman-card"
  },
  {
    name: "Web Slinger",
    price: "$34.99",
    image: deadpoolts3,
    features: ["Premium Cotton", "3D Web Effect", "Special Edition"],
    className: "spidey-card"
  },
  {
    name: "Web Slinger",
    price: "$34.99",
    image: deadpoolts4,
    features: ["Premium Cotton", "3D Web Effect", "Special Edition"],
    className: "spidey-card"
  }
];

function Products({ className }) {
  return (
    <section id="shop" className={`products ${className || ''}`}>
      <h1 className='text-center mt-5 text-3xl font-bold headline'>Stand Out With Deadpool Prints</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;