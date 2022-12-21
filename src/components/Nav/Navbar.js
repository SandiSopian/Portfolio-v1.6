import React from "react";
import Switcher from "../Switcher";
import NavItem from "./NavItem";
import { header } from "../../database";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { email } = header;
  let [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  if (!header.email) return null;

  return (
    <div className="flex flex-col md:flex-row">
      <div className={`flex flex-col ml-6 md:ml-0 md:flex-row gap-8 md:gap-1 md:items-center transition-all duration-500 ease-out ${!open ? "-mt-96 md:mt-0" : "mt-0"} `}>
        <div className="xl:mr-56 2xl:mr-96">
          <NavItem />
        </div>

        <div className="ml-6 md:mr-2 xl:mr-28 2xl:mr-64 absolute top-8 md:top-11 right-20 md:right-48 lg:right-80 xl:right-60">
          <Switcher />
        </div>

        <div className={`sticky md:ml-20 lg:ml-28 xl:ml-0 ${open ? "mb-28 md:mb-0" : "mb-28 md:mb-0"}`}>
          <a href={`mailto:${header.email}`} alt="Email Address">
            <div className="hover-l-button1 dark:hover-d-button1 ">
              <div type="button" className="py-3 px-8 font-bold uppercase border dark:border-2 rounded-lg text-black dark:text-white hover:text-white dark:md:hover:text-black border-primaryColor dark:border-secondaryColor">
                Hire Me
              </div>
            </div>
          </a>
        </div>
      </div>

      <div onClick={() => setOpen(!open)} className="md:hidden absolute top-8 right-10 hover:cursor-pointer">
        <FontAwesomeIcon onClick={() => setIsClicked((prev) => !prev)} icon={isClicked ? faXmark : faBars} className="text-2xl hover-l-animation dark:hover-d-animation " />
      </div>
    </div>
  );
};

export default Navbar;
