export default function About({ aboutContent = [] }) {
  if (!aboutContent || aboutContent.length === 0) return null;

  return (
    <section className="py-14 lg:pb-16 pt-12 border-t border-white/10">
      <div className="mx-auto px-2 lg:px-0">
        <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-3">
          About
        </span>
        <h2 className="text-3xl lg:text-4xl font-serif text-cream mb-6 leading-tight">
          The man behind the work.
        </h2>
        <div className="space-y-3">
          {aboutContent.map((paragraph, index) => (
            <p key={index} className="text-base lg:text-lg text-cream/70 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
