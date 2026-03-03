// components/ProjectFilter.js
export default function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 laptop:mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 text-sm laptop:text-base font-medium
            ${
              activeCategory === category.id
                ? 'bg-slate text-cream shadow-lg transform scale-105'
                : 'bg-cream-accent text-slate hover:bg-slate hover:text-cream'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}