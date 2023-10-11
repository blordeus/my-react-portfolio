import React from "react";
import data from "../../data/portfolio.json";

const WorkCard = ({ img, name, description, onClick, sourceURL}) => {
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
const handleSourceClick = (project) => {
-  window.open(project.sourceURL);
+  const { sourceURL } = project;
+  window.open(sourceURL);
};
<<<<<  bot-ab9e44b5-08e1-425b-a400-517b15026170  >>>>>

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
        ></img>
      </div>
      <div className="flex justify-start">
        <h1 className="mt-5 text-3xl font-medium" onClick={onClick}>
          {name ? name : "Project Name"}
        </h1>
        <h1 className="ml-2 mt-5 text-3xl font-medium" >
          | <span onClick={handleSpanClick}> Source</span>
        </h1>
      </div>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
