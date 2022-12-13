import React from "react";
import { header } from "../database";
import Navbar from "./Nav/Navbar";

const Header = () => {
  const { homepage, title, email } = header;
  if (!header.email) return null;

  return (
    <header id="header" className="flex items-center pt-12 sticky">
      <h3 className=" font-extrabold text-2xl ml-16 hover-l-animation dark:hover-d-animation w-min-content">{homepage ? <a href={homepage}>{title}</a> : title}</h3>

      <div className="w-8/12 ml-36 flex justify-center font-bold uppercase ">
        <Navbar />
      </div>

      <a href={`mailto:${header.email}`}>
        <div className="hover-l-button1 dark:hover-d-button1">
          <div type="button" className="py-3 px-12 font-bold uppercase border dark:border-2 rounded-lg text-black dark:text-white hover:text-white dark:md:hover:text-black border-primaryColor dark:border-secondaryColor">
            Hire Me
          </div>
        </div>
      </a>
    </header>
  );
};

export default Header;
