import React from "react";
import data from "../../data/portfolio.json";

const WorkCard = ({ img, name, description, onClick, demoURL, url}) => {
  //TODO: Create OnClick function that leads to demoURL
  const handleOnClick = () => {
    window.open(demoURL, "_blank");
  };
  
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          onClick={onClick}
        ></img>
      </div>
      <div className="flex justify-between">
        <h1 className="mt-5 text-3xl font-medium" onClick={onClick}>
          {name ? name : "Project Name"} 
        </h1>
        <h1 className="mt-5 text-3xl font-medium" >
          
        </h1>
      </div>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
