import Image from 'next/image';

const WorkCard = ({ img, name, description, results, onClick, sourceURL, showSource }) => {
  const techStack = description ? description.split('|').map((t) => t.trim()) : [];

  return (
    <div className="group overflow-hidden rounded-2xl bg-graphite-mid border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ paddingTop: '62%' }}>
        {img && (
          <Image
            src={img}
            alt={name}
            layout="fill"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-cream mb-2 leading-snug line-clamp-2">
          {name || "Project"}
        </h3>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-0.5 text-2xs font-medium bg-white/8 text-cream/60 rounded-full border border-white/10">
              {tech}
            </span>
          ))}
        </div>

        {results && (
          <p className="text-xs text-olive-tint mb-3 italic line-clamp-2">{results}</p>
        )}

        <div className="flex-grow" />

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={onClick}
            className="flex-1 bg-cream text-graphite-black px-3 py-2 rounded-xl text-xs font-semibold hover:bg-cream-accent transition-colors duration-200 flex items-center justify-center gap-1.5"
          >
            View Live
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>

          {showSource && (
            <button
              onClick={() => window.open(sourceURL)}
              className="px-3 py-2 border border-white/15 text-cream/60 rounded-xl hover:border-white/30 hover:text-cream transition-all duration-200"
              aria-label="View source"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
