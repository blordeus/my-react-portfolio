// components/WorkCard.js
import Image from 'next/image';
import React from 'react';

const WorkCard = ({ img, name, description, onClick, sourceURL, showSource }) => {
  const handleSourceClick = () => {
    window.open(sourceURL);
  };

  const handleSpanClick = () => {
    handleSourceClick();
  };

  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48"> {/* Fixed height as fallback */}
        {img && (
          <Image
            src={img}
            alt={name}
            width={800} // Approximate width
            height={600} // Approximate height
            className="w-full h-full object-cover hover:scale-110 transition-all ease-out duration-300"
            onClick={onClick}
          />
        )}
      </div>
      <h1 className="mt-5 text-3xl font-medium text-gray-800 dark:text-gray-200" onClick={onClick}>
        {name ? name : "Project Name"}
        {showSource && (
          <span
            onClick={handleSpanClick}
            className="ml-2 text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
          >
            | Source
          </span>
        )}
      </h1>
      <h2 className="text-xl opacity-50 text-gray-600 dark:text-gray-400">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;