import React from "react";
import data from "../../data/portfolio.json";

const WorkCard = ({ img, name, description, onClick, sourceURL}) => {
const handleSourceClick = () => {
  window.open(sourceURL);
};

  const handleSpanClick = () => {
    handleSourceClick();
  };

  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto" style={{ height: "600px" }}>
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+        <picture>
+          <source
+            type="image/webp"
+            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
+            srcSet={`${img}?fm=webp&quality=100&ixlib=php-1.3.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8fHx8fHVyZTl8&auto=format&fit=crop&w=1920&h=1080&q=80 1x, 
+                   ${img}?fm=webp&quality=100&ixlib=php-1.3.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8fHx8fHVyZTl8&auto=format&fit=crop&w=1920&h=1080&q=100 2x`}
+          />
+          <source
+            type="image/jpeg"
+            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
+            srcSet={`${img}?fm=jpeg&quality=100&ixlib=php-1.3.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8fHx8fHVyZTl8&auto=format&fit=crop&w=1920&h=1080&q=80 1x, 
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          onClick={onClick}
        ></img>
<<<<<<<  521f28f3-1eef-4429-b547-054adec8f360  >>>>>>>
      </div>
        <h1 className="mt-5 text-3xl font-medium" onClick={onClick}>
          {name ? name : "Project Name"}  | <span onClick={handleSpanClick}> Source</span>
        </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
