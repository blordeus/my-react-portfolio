import { useState, useEffect, useRef } from 'react';
import WorkCard from '../WorkCard';

export default function ProjectGallery({ projects, activeCategory }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsAnimating(true);
    const filtered = activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

    const timer = setTimeout(() => {
      setFilteredProjects(filtered);
      setIsAnimating(false);
      if (scrollRef.current) scrollRef.current.scrollLeft = 0;
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

  const visible = filteredProjects.slice(0, 6);
  const extra = filteredProjects.slice(6);

  return (
    <div className={`transition-opacity duration-300 w-100 min-w-0 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {visible.map((project) => (
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

      {extra.length > 0 && (
        <div
          ref={scrollRef}
          className="mt-6 overflow-x-auto pb-2 w-full"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {extra.map((project) => (
              <div
                key={project.id}
                className="w-64 shrink-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <WorkCard
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  results={project.results}
                  sourceURL={project.sourceURL || project.sourceUrl}
                  showSource={project.showSource}
                  onClick={() => window.open(project.url)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}