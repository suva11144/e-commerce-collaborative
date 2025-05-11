import React from 'react';

const StarRating = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((star) => (
          <svg
            key={star}
            className={`h-5 w-5 ${
              star < Math.floor(rating)
                ? 'text-yellow-400'
                : star === Math.floor(rating) && rating % 1 > 0
                ? 'text-yellow-400' // Half star
                : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15.585l-5.379 2.833 1.03-6-4.35-4.237 6.014-.875L10 2.143l2.685 5.163 6.014.875-4.35 4.237 1.03 6-5.379-2.833z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <p className="ml-2 text-sm text-gray-500">{reviewCount} reviews</p>
    </div>
  );
};

export default StarRating;