import { Link } from "react-router-dom";
import React from "react";

const NavItem = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link to="/">
            <span className="hover-l-animation dark:hover-d-animation w-min-content">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="hover-l-animation dark:hover-d-animation w-min-content">About</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <span className="hover-l-animation dark:hover-d-animation w-min-content">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <span className="hover-l-animation dark:hover-d-animation w-min-content">Pricing</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span className="hover-l-animation dark:hover-d-animation w-min-content">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItem;
