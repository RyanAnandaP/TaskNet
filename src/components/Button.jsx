import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="items-center rounded bg-stone-700 px-3 py-2 text-xs text-stone-400 hover:bg-stone-600 hover:text-slate-50 md:text-xl"
      {...props}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
