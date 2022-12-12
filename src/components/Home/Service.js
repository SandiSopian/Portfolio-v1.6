import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobileScreen, faPalette } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div className="flex p-6 bg-[#737373] gap-10 bg-opacity-50 dark:text-white leading-loose">
      <div className="w-4/12 rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12">
        <FontAwesomeIcon icon={faPalette} className="border-2 border-black dark:border-white p-2 rounded-full" />
        <h4 className="font-bold text-2xl my-3">Web Design</h4>
        <p>Clean modern design-optimized for performance will create like your design wanted from scratch.</p>
      </div>

      <div className="w-4/12 rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12">
        <FontAwesomeIcon icon={faLaptop} className="border-2 border-black dark:border-white p-2 rounded-full" />
        <h4 className="font-bold text-2xl my-3">Web Development</h4>
        <p>Clean, modern design - optimized for performance, and maintainable.</p>
      </div>

      <div className="w-4/12 rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12">
        <FontAwesomeIcon icon={faMobileScreen} className="border-2 border-black dark:border-white p-2 rounded-full" />
        <h4 className="font-bold text-2xl my-3">Responsive Design</h4>
        <p>A responsive design makes your website accessible to all users, regaldless of their device.</p>
      </div>
    </div>
  );
};

export default Service;
