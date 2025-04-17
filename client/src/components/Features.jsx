import React from 'react';

const features = [
  {
    icon: "🎨",
    title: "Unique Design Selection",
    description: "Explore our exclusive superhero designs, standing unique art with iconic characters. Stand out!"
  },
  {
    icon: "🔒",
    title: "Secure Payment Gateway",
    description: "Shop confidently with our encrypted payment system. Your data is always protected. Safe shopping!"
  },
  {
    icon: "👕",
    title: "Premium Quality Fabric",
    description: "Experience ultimate comfort with our soft, durable, and breathable t-shirt fabrics. Feel great!"
  },
  {
    icon: "🚚",
    title: "Easy Online Ordering",
    description: "Browse, select, and purchase your favorite tees with ease. Fast shipping guaranteed!"
  }
];

const Features = () => {
  return (
    <div className="bg-[rgb(0,0,0,0.7)] py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;