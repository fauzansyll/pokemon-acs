import React, { Fragment } from "react";
import Navbar from "../atoms/Navbar";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <Fragment>
      <div className="flex justify-between w-full md:px-10">
        <Logo />
        <Navbar />
      </div>
    </Fragment>
  );
};

export default Header;
