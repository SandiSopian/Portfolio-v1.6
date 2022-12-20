import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faBehance, faMedium } from "@fortawesome/free-brands-svg-icons";
import { about, header } from "../database";

const Footer = () => {
  const { title } = header;
  const { social } = about;
  return (
    <footer id="footer" className="flex flex-col items-center pt-12 sticky">
      <div className="opacity-50 border border-itemColor w-[280px] sm:w-[500px] lg:w-[800px] xl:w-[1217px] mx-auto mb-12 md:mb-24 mt-32"></div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl">
        {title && (
          <Link to="/">
            <span>{title}</span>
          </Link>
        )}
        <h3 className="w-[300px] sm:w-full mx-auto text-center font-semibold md:text-xl mt-12 break-words">Living, learning, & leveling up one day at a time.</h3>

        {social && (
          <>
            <ul className="flex gap-4 sm:p-6 lg:gap-10 xl:gap-20 my-8 md:my-16">
              <li>
                {social.linkedin && (
                  <a href={social.linkedin}>
                    <FontAwesomeIcon icon={faLinkedinIn} className="sm:text-xl p-4 sm:p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
                  </a>
                )}
              </li>
              <li>
                {social.behance && (
                  <a href={social.behance}>
                    <FontAwesomeIcon icon={faBehance} className="sm:text-xl p-4 sm:p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
                  </a>
                )}
              </li>
              <li>
                {social.github && (
                  <a href={social.github}>
                    <FontAwesomeIcon icon={faGithub} className="sm:text-xl p-4 sm:p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
                  </a>
                )}
              </li>
              <li>
                {social.medium && (
                  <a href={social.medium}>
                    <FontAwesomeIcon icon={faMedium} className="sm:text-xl p-4 sm:p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
                  </a>
                )}
              </li>
              <li>
                {social.website && (
                  <a href={social.website}>
                    <FontAwesomeIcon icon={faGlobe} className="sm:text-xl p-4 sm:p-6 border border-black dark:border-black dark:bg-itemColor rounded-full hover-l-animation dark:hover-d-animation " />
                  </a>
                )}
              </li>
            </ul>
          </>
        )}

        <h6 className="mb-8 mt-10 md:mt-0">
          <span>&copy;</span> 2023 Sandi Sopian
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
