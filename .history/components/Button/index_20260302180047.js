import React from "react";
import data from "../../data/portfolio-updated.json";

const Button = ({ children, type, onClick, classes }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg bg-slate hover:bg-pine text-cream transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          data.showCursor && "cursor-none"
        } ${classes}`}
      >
        {children}
      </button>
    );
  }
  
  // Secondary/default button - for nav and social links
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base font-medium px-4 py-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 bg-cream-accent hover:bg-slate hover:text-cream border border-slate/20 hover:border-slate hover:scale-105 active:scale-100 tablet:first:ml-0 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;