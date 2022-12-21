import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { portfolio, about } from "../../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-reveal";

const Portfolio = () => {
  const { email } = about;
  if (!portfolio.length) return null;

  return (
    <div className="flex items-center justify-center flex-col dark:text-white">
      {/* Portfolio Title */}
      <Zoom left cascade>
        <h2 className="font-bold text-3xl xl:text-4xl my-3">PORTFOLIO</h2>
      </Zoom>

      <Zoom>
        <h6 className="text-center">
          Here are a few past design projects I've worked on. Want to see more?
          <span className="hover:font-bold">{email && <a href={`mailto:${email}`}>Email me.</a>}</span>
        </h6>
      </Zoom>

      {/* Portfolio Card */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-10">
        {portfolio.map((project, index) => {
          if (index < 3) {
            return (
              <Fade>
                <div key={uniqid()} className="relative group">
                  <img src={project.image} alt="Project Image" className="rounded-3xl" />
                  <div className="portfolioCard-animation delay-450">
                    <div className="sticky">
                      <div className="mb-10 w-[200px] sm:w-[350px] lg:w-[200px] xl:w-[350px]">{project.description}</div>
                      <a href={project.livePreview} alt="Live Preview">
                        <div className="hover-l-button1 dark:hover-d-button1">
                          <div className="border-2 border-primaryColor dark:border-secondaryColor text-black hover:text-white dark:text-white dark:md:hover:text-black rounded-lg py-4 hover:cursor-pointer">
                            Visit Website
                            <span>
                              <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          }
        })}
      </div>

      <div className="sticky">
        <Link to="/portfolio">
          <div className="hover-l-button2 dark:hover-d-button2">
            <div type="button" className="border dark:border-4 border-primaryColor border-secondaryColor p-4 mt-16 py-3 px-12 font-bold text-xl text-primaryColor dark:text-white hover:text-white dark:md:hover:text-black ">
              See More
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
