import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="flex items-center space-x-4">
        <a href="/home" className="text-2xl font-bold text-white">
          Home
        </a>
        <a href="/inquiry" className="text-2xl font-bold text-white">
          Inquiry
        </a>
      </div>
    </Fragment>
  );
};

export default Navbar;
