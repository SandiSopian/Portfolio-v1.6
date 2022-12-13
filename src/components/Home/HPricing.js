import React from "react";
import { portfolio } from "../../database";

const Pricing = () => {
  if (!portfolio.length) return null;

  return (
    <div className="flex justify-center p-6 mt-40 gap-10 bg-opacity-50 dark:text-white leading-loose ">
      {/* Pricing Basic */}
      <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave1 bg-no-repeat  ">
        <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">basic</h3>
        <h4 className="font-bold text-2xl my-6">Slicing Web Design</h4>

        <h5 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h5>
        <ul className="font-semibold text-2xl">
          <li>React Js</li>
          <li>Next Js</li>
          <li>TailwindCSS</li>
        </ul>

        <h5 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h5>
        <p className="font-semibold text-2xl">Slicing your own web design from figma or psd</p>

        <div className="sticky">
          <div className="p-4 mt-16 rounded-full">
            <a href="">
              <div className="hover-l-button1 dark:hover-d-button1">
                <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                  Request quote
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Standard */}
      <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave2 bg-no-repeat ">
        <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">standard</h3>
        <h4 className="font-bold text-2xl my-6">Web Design</h4>
        <h4 className="font-bold text-2xl my-6">Web Development</h4>

        <h5 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h5>
        <ul className="font-semibold text-2xl">
          <li>Figma</li>
          <li>React Js</li>
          <li>Next Js</li>
          <li>TailwindCSS</li>
        </ul>

        <h5 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h5>
        <p className="font-semibold text-2xl">Create your own design from scratch and slicing it into real web</p>

        <div className="sticky">
          <div className="p-4 mt-16 rounded-full">
            <a href="">
              <div className="hover-l-button1 dark:hover-d-button1">
                <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor  rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                  Request quote
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Premium */}
      <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave3 bg-no-repeat ">
        <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">premium</h3>
        <h4 className="font-bold text-2xl my-6">Web Design</h4>
        <h4 className="font-bold text-2xl my-6">Web Development</h4>
        <h4 className="font-bold text-2xl my-6">Hosting</h4>

        <h5 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h5>
        <ul className="font-semibold text-2xl">
          <li>Figma</li>
          <li>React Js</li>
          <li>Next Js</li>
          <li>TailwindCSS</li>
          <li>Hosting Providers</li>
        </ul>

        <h5 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h5>
        <p className="font-semibold text-2xl">Create your own design from scratch and slicing it into real web, hosting to your domain</p>

        <div className="sticky">
          <div className="p-4 mt-16 rounded-full">
            <a href="">
              <div className="hover-l-button1 dark:hover-d-button1">
                <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor  rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                  Request quote
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
