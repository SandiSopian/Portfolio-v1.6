import React from "react";
import { header } from "../database";
import Navbar from "./Nav/Navbar";

const Header = () => {
  const { homepage, title, email } = header;
  if (!header.email) return null;

  return (
    <header className="flex items-center pt-12">
      <h3 className="w-2/12 font-extrabold text-2xl">{homepage ? <a href={homepage}>{title}</a> : title}</h3>

      <div className="w-8/12 flex justify-center font-bold uppercase">
        <Navbar />
      </div>

      <a href={`mailto:${header.email}`} className="w-2/12">
        <span type="button" className="py-3 px-12 font-bold uppercase text-white bg-[#E0B20F]">
          Hire Me
        </span>
      </a>
    </header>
  );
};

export default Header;
