// components/ProjectGallery.js
import Masonry from 'react-masonry-css';
import WorkCard from '..WorkCard';

export default function ProjectGallery({ projects }) {
  const breakpointColumnsObj = {
    default: 3, // 3 columns on large screens
    1100: 2,   // 2 columns on medium screens
    700: 1,    // 1 column on small screens
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects.map((project) => (
        <WorkCard
          key={project.id}
          img={project.imageSrc}
          name={project.title}
          description={project.description}
          sourceURL={project.sourceURL}
          showSource={project.showSource}
          onClick={() => window.open(project.url)}
        />
      ))}
    </Masonry>
  );
}