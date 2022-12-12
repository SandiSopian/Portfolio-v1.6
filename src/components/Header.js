import React from "react";
import { header } from "../database";
import Navbar from "./Nav/Navbar";

const Header = () => {
  const { homepage, title, email } = header;
  if (!header.email) return null;

  return (
    <header className="flex items-center pt-12 sticky">
      <h3 className="w-2/12 font-extrabold text-2xl ml-16 text-nameColor">{homepage ? <a href={homepage}>{title}</a> : title}</h3>

      <div className="w-8/12 flex justify-center font-bold uppercase">
        <Navbar />
      </div>

      <a href={`mailto:${header.email}`} className="w-2/12">
        <span type="button" className="py-3 px-12 font-bold uppercase border rounded-lg text-black dark:text-white hover:text-white dark:md:hover:text-white hover:bg-[#E0B20F] dark:md:hover:text-[#E0B20F] border-[#E0B20F]">
          Hire Me
        </span>
      </a>
    </header>
  );
};

export default Header;
