import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faBehance, faMedium } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col items-center pt-12 sticky">
      <div className="opacity-50 border border-itemColor w-[1217px] mx-auto mb-24 mt-32"></div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl">SS.</h2>
        <h3 className="font-semibold text-2xl mt-12">Living, learning, & leveling up one day at a time.</h3>

        <ul className="flex gap-20 my-16">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
            </a>
          </li>

          <li>
            <a href="">
              <FontAwesomeIcon icon={faBehance} className="text-3xl p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation  " />
            </a>
          </li>

          <li>
            <a href="">
              <FontAwesomeIcon icon={faGithub} className="text-3xl p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
            </a>
          </li>

          <li>
            <a href="">
              <FontAwesomeIcon icon={faMedium} className="text-3xl p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
            </a>
          </li>

          <li>
            <a href="">
              <FontAwesomeIcon icon={faGlobe} className="text-3xl p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
            </a>
          </li>
        </ul>

        <h6 className="mb-8">
          <span>&copy;</span> 2023 Sandi Sopian
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
