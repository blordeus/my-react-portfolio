export default function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="flex flex-col gap-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`text-left text-sm transition-colors duration-200 py-1.5 ${
            activeCategory === category.id
              ? "text-cream font-semibold"
              : "text-cream/40 hover:text-cream/70 font-normal"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
