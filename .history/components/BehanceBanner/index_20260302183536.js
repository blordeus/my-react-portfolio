// components/BehanceBanner.js
export default function BehanceBanner({ behanceUrl }) {
  return (
    <div className="mt-16 laptop:mt-20 p-6 laptop:p-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate to-pine p-8 laptop:p-12 text-cream shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cream opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl laptop:text-4xl font-serif mb-4">
            Marketing & Social Media Work
          </h2>
          <p className="text-lg laptop:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            View my marketing campaigns, social media management, and content strategy work on Behance
          </p>
          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-slate px-8 py-3 rounded-lg font-semibold hover:bg-cream-tint transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Marketing Portfolio
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}