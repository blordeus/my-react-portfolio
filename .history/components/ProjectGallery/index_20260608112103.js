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
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory, projects]);

  return (
    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-cream/40">No projects in this category yet.</p>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="overflow-y-auto"
          style={{ maxHeight: 'calc(3 * (180px + 0.75rem))' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {filteredProjects.map((project) => (
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
        </div>
      )}
    </div>
  );
}
