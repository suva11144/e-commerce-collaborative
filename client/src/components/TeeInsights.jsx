import React from 'react';

const insights = [
  {
    title: "Style Meets Superpowers",
    description: "Join the league of superhero fashion as we blend style with extraordinary powers. Discover unique designs, insights, and the inspiration behind our cosmic collection.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3"
  },
  {
    title: "Cosmic Artistry Unveiled",
    description: "Explore the artistic process behind our cosmic designs. From initial sketches to the final print, see how creativity and passion flow give life to every Starry Night tee.",
    image: "https://images.unsplash.com/photo-1531907700752-62799b2a3e84?ixlib=rb-4.0.3"
  },
  {
    title: "Heroic Fashion Trends",
    description: "Stay ahead of the curve with our style guides to the future. From classic superhero aesthetics to contemporary interpretations, make your favorite characters into your everyday style and wardrobe staples.",
    image: "https://images.unsplash.com/photo-1599718461096-6b2b4c666f81?ixlib=rb-4.0.3"
  }
];

const TeeInsights = () => {
  return (
    <div className="py-16 bg-[rgba(0,0,0,0.8)]">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-white mb-8">Tee Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{insight.title}</h3>
              <p className="text-gray-400 text-sm">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeeInsights;