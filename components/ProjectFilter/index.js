export default function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? "bg-cream text-graphite-black"
              : "bg-white/8 text-cream/60 border border-white/10 hover:border-white/25 hover:text-cream"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
