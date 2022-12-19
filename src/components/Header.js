import React from "react";
import { header } from "../database";
import Navbar from "./Nav/Navbar";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header id="header" className="flex flex-col md:flex-row md:justify-evenly lg:justify-between xl:justify-arround items-start md:items-center pt-8 gap-6 md:gap-0 container mx-auto relative sm:sticky -mb-24 md:mb-0">
      <h3 className="font-extrabold text-2xl ml-6 sm:ml-16 md:ml-0 lg:ml-16 hover-l-animation dark:hover-d-animation w-min-content">{homepage ? <a href={homepage}>{title}</a> : title}</h3>

      <div className="sm:ml-10 md:ml-0 lg:mr-16  font-bold uppercase ">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
