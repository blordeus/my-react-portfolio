export default function BehanceBanner({ behanceUrl }) {
  return (
    <div className="mt-10 lg:mt-14 px-2 lg:px-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-mid p-8 lg:p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pine-deep/30 via-transparent to-slate-dark/30 pointer-events-none" />
        <div className="relative z-10">
          <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-4">
            Creative Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-cream mb-4">
            Marketing & Social Media
          </h2>
          <p className="text-base text-cream/60 mb-8 max-w-xl mx-auto">
            Campaigns, content strategy, and social media management — view the full creative portfolio on Behance.
          </p>
          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-graphite-black px-7 py-3 rounded-xl text-sm font-semibold hover:bg-cream-accent transition-colors duration-200"
          >
            View on Behance
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
