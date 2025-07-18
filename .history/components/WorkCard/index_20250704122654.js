import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, onClick, sourceURL, showSource}) => {
const handleSourceClick = () => {
  window.open(sourceURL);
};

  const handleSpanClick = () => {
    handleSourceClick();
  };

  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto" style={{ height: "600px" }}>
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          onClick={onClick}
        ></img>
      </div>
        <h1 className="mt-5 text-3xl font-medium" onClick={onClick}>
          {name ? name : "Project Name"} {showSource && (<span onClick={handleSpanClick}>| Source</span>)}
        </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
