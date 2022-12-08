import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";
import MoonIcon from "../../assets/moon-solid.svg";
import SunIcon from "../../assets/sun-solid.svg";
import MenuIcon from "../../assets/bars-solid.svg";
import CloseIcon from "../../assets/xmark-solid.svg";
import NavItem from "./Navbar";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav>
      <ul style={{ display: showNavList ? "flex" : null }} className="hidden md:block fixed md:block flex-col md:flex-row justify-center md:justify-start items-center md:items-start inset-0 md:left-0 md:top-0 z-2 md:z-0">
        {/* Item link from NavItem */}
        <NavItem />
      </ul>

      <button type="button" onClick={toggleTheme} className="" aria-label="toggle theme">
        {themeName === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>

      <button type="button" onClick={toggleNavList} className="" aria-label="toggle navigation">
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
