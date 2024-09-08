import React, { Fragment } from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
