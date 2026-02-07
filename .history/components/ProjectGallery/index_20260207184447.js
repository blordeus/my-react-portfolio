// components/ProjectGallery/index.js - Updated to pass results
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import WorkCard from '../WorkCard';

export default function ProjectGallery({ projects, activeCategory }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation
    setIsAnimating(true);
    
    // Filter projects
    const filtered = activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);
    
    // Small delay for smooth transition
    const timer = setTimeout(() => {
      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory, projects]);

  const breakpointColumnsObj = {
    default: 3, // 3 columns on large screens
    1100: 2,   // 2 columns on medium screens
    700: 1,    // 1 column on small screens
  };

  return (
    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 dark:text-gray-400">
            No projects in this category yet.
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
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
        </Masonry>
      )}
    </div>
  );
}