import React from 'react';
import { useInView } from 'react-intersection-observer';

function ProductCard({ name, price, image, features, className }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <article ref={ref} className={`product-card ${inView ? 'reveal' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className={`product-image ${className} top-5`}>
            <img src={image} alt={`${name} Design`} />
          </div>
          <h3><br />{name}</h3>
          <p className="price">{price}</p>
        </div>
        <div className="card-back">
          <h4>Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;