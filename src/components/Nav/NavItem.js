import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const NavItem = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      <ul className="flex gap-4 lg:gap-8 flex flex-col md:flex-row justify-center ">
        {Links.map((link) => (
          <li key={uniqid()}>
            <Link to={link.link}>
              <span className="hover-l-animation dark:hover-d-animation w-min-content">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
