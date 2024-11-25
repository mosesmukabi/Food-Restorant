import React from 'react';

const categories = [
  { name: 'Main Dish', count: '86 dishes', image: '🍔' },
  { name: 'Break Fast', count: '12 break fast', image: '🥪' },
  { name: 'Dessert', count: '48 dessert', image: '🍨' },
  { name: 'Browse All', count: '255 items', image: '🍹' },
];

const PopularCategories = () => {
  return (
    <div className="px-6 py-10 bg-gray-50">
      <h2 className="text-center text-sm text-red-400 font-semibold uppercase mb-2">Customer Favorites</h2>
      <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">Popular Categories</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
              <span className="text-3xl">{category.image}</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{category.name}</h4>
            <p className="text-sm text-gray-500">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
