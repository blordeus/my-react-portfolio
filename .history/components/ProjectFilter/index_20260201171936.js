// components/ProjectFilter.js
import { useState } from 'react';

export default function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 laptop:mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 text-sm laptop:text-base
            ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}