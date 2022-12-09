import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
