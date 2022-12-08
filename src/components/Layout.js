import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import NavItem from "./Navbar/NavItem";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
