// components/About.js
export default function About({ aboutContent = [] }) {
  // Don't render if no content
  if (!aboutContent || aboutContent.length === 0) {
    return null;
  }

  return (
    <div className="mt-24 laptop:mt-32 p-2 laptop:p-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl laptop:text-5xl font-bold text-center mb-8">
          About
        </h2>
        <div className="space-y-4 text-lg laptop:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {aboutContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}