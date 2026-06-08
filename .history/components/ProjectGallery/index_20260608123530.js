import { useState, useEffect } from 'react';
import WorkCard from '../WorkCard';

const PAGE_SIZE = 6;

export default function ProjectGallery({ projects, activeCategory }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setIsAnimating(true);
    const filtered = activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

    const timer = setTimeout(() => {
      setFilteredProjects(filtered);
      setPage(0);
      setIsAnimating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory, projects]);

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-cream/40">No projects in this category yet.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const pageProjects = filteredProjects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className={`transition-opacity duration-300 w-full ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {pageProjects.map((project) => (
          <WorkCard
            key={project.id}
            img={project.imageSrc}
            name={project.title}
            description={project.description}
            results={project.results}
            sourceURL={project.sourceURL || project.sourceUrl}
            showSource={project.showSource}
            onClick={() => window.open(project.url)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-2 text-sm font-medium text-cream/60 border border-white/10 rounded-xl hover:border-white/25 hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            ← Prev
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === page ? 'bg-cream w-4' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 text-sm font-medium text-cream/60 border border-white/10 rounded-xl hover:border-white/25 hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}