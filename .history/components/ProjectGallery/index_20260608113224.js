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

  return (
    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-cream/40">No projects in this category yet.</p>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="overflow-x-auto"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(3, auto)',
              gridAutoFlow: 'column',
              gridAutoColumns: '200px',
              gap: '16px',
              width: 'max-content',
              minWidth: '100%',
            }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} style={{ scrollSnapAlign: 'start' }}>
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