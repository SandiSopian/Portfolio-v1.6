import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobileScreen, faPalette } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

const Service = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-10 px-10 bg-[#737373] lg:gap-10 bg-opacity-50 dark:text-white leading-loose">
      <div className="card-animation">
        <Fade bottom>
          <div className="w-[300px] sm:w-[450px] lg:w-[260px] xl:w-[350px] rounded-lg p-12 lg:py-6 lg:px-4 xl:p-12 bg-white dark:bg-itemColor mt-10 lg:my-12 hover:card-animation">
            <FontAwesomeIcon icon={faPalette} className="border-2 border-black dark:border-white p-2 rounded-full" />
            <h4 className="font-bold text-xl md:text-2xl lg:text-xl my-3">Web Design</h4>
            <p>Clean modern design-optimized for performance will create like your design wanted from scratch.</p>
          </div>
        </Fade>
      </div>

      <div className="card-animation">
        <Fade bottom>
          <div className="w-[300px] sm:w-[450px] lg:w-[260px] xl:w-[350px] rounded-lg p-12 lg:py-6 lg:px-4 xl:p-12 bg-white dark:bg-itemColor mt-6 lg:my-12 card-animation">
            <FontAwesomeIcon icon={faLaptop} className="border-2 border-black dark:border-white p-2 rounded-full" />
            <h4 className="font-bold text-xl md:text-2xl lg:text-xl my-3">Web Development</h4>
            <p>Clean, modern design - optimized for performance, and maintainable.</p>
          </div>
        </Fade>
      </div>

      <div className="card-animation">
        <Fade bottom>
          <div className="w-[300px] sm:w-[450px] lg:w-[260px] xl:w-[350px] rounded-lg p-12 lg:py-6 lg:px-4 xl:p-12 bg-white dark:bg-itemColor mt-6 mb-10 lg:my-12 card-animation">
            <FontAwesomeIcon icon={faMobileScreen} className="border-2 border-black dark:border-white py-2 px-3 rounded-full" />
            <h4 className="font-bold text-xl md:text-2xl lg:text-xl my-3">Responsive Design</h4>
            <p>A responsive design makes your website accessible to all users, regaldless of their device.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Service;
