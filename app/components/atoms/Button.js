import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-200 w-full hover:bg-blue-300 rounded-md px-6 py-2 "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
