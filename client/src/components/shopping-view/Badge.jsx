import React from 'react';

const Badge = ({ text, variant = 'new', className = '' }) => {
  const variantStyles = {
    new: 'bg-blue-500 text-white',
    featured: 'bg-amber-500 text-white',
    sale: 'bg-red-500 text-white',
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-md uppercase tracking-wider 
      ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
