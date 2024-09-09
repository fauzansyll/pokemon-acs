import React, { Fragment } from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="px-10 py-7 md:px-28 flex flex-col gap-5">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
