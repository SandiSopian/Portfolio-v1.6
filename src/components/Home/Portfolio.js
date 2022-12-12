import React from "react";
import uniqid from "uniqid";
import { portfolio } from "../../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  if (!portfolio.length) return null;

  return (
    <div className=" flex items-center justify-center gap-4 flex-col dark:text-white">
      <h4 className="font-bold text-4xl my-3">Portfolio</h4>
      <p>
        Here are a few past design projects I've worked on. Want to see more?
        <span>
          <a href="" className="underline">
            Email me
          </a>
        </span>
      </p>

      <div className="flex gap-4">
        {portfolio.map((project, index) => {
          if (index < 3) {
            return (
              <div key={uniqid()} className="relative group">
                <img src={project.image} className="rounded-3xl" />
                <div className="flex flex-col justify-center text-center items-center opacity-0 group-hover:opacity-100 absolute inset-0 text-xl bg-white dark:bg-itemColor text-black dark:text-white font-semibold transition delay-450 duration-1000 ease-in-out rounded-3xl">
                  <div className="mb-10 w-[350px]">{project.description}</div>
                  <a href={project.url}>
                    <span className="border-2 border-black dark:border-white rounded-3xl p-4 hover:bg-[#E0B20F]">
                      Visit Website
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="border border-black dark:border-white hover:bg-black dark:md:hover:bg-white p-4 mt-16 rounded-full">
        <a href="">
          <span type="button" className="py-3 px-12 font-bold text-3xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
            See More
          </span>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
