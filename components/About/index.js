export default function About({ aboutContent = [] }) {
  if (!aboutContent || aboutContent.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-2 lg:px-0">
        <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-4">
          About
        </span>
        <h2 className="text-4xl lg:text-5xl font-serif text-cream mb-10 leading-tight">
          The person behind the work.
        </h2>
        <div className="space-y-5">
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
