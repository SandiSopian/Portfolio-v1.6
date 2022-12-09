import React from "react";
import Switcher from "../Switcher";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="flex gap-8">
      <NavItem />
      <Switcher />
    </div>
  );
};

export default Navbar;
