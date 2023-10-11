import React from "react";
import data from "../../data/portfolio.json";

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-const WorkCard = ({ img, name, description, onClick, sourceURL, url, handleDemoClick}) => {
-  //TODO: Create OnClick function that leads to sourceURL
+const WorkCard = ({ img, name, description, onClick, sourceURL, url, handleDemoClick }) => {
+  const handleSourceClick = () => {
+    window.location.href = sourceURL;
+  };

  return (
-    <div
-      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
-    >
-      <div
-        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
-        style={{ height: "600px" }}
-      >
-        <img
-          alt={name}
-          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
-          src={img}
-          onClick={onClick}
-        ></img>
+    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
+      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto" style={{ height: "600px" }}>
+        <img alt={name} className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300" src={img} onClick={onClick}></img>
      </div>
      <div className="flex justify-start">
        <h1 className="mt-5 text-3xl font-medium" onClick={handleDemoClick}>
-          {name ? name : "Project Name"} 
-        </h1>
-        <h1 className="ml-2 mt-5 text-3xl font-medium" onClick={handleDemoClick}>
+          {name ? name : "Project Name"}
+        </h1>
+        <h1 className="ml-2 mt-5 text-3xl font-medium" onClick={handleSourceClick}>
          | Source
        </h1>
      </div>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};
<<<<<  bot-48e1c3ca-22aa-4193-a5f5-db0a56ec859b  >>>>>

export default WorkCard;
