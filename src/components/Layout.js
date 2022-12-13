import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
