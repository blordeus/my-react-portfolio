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
      className={`text-xs font-medium px-3.5 py-2 rounded-full flex items-center transition-all ease-out duration-200 bg-white/8 hover:bg-white/15 text-cream/70 hover:text-cream border border-white/10 hover:border-white/25 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;