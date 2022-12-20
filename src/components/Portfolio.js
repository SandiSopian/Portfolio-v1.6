import React from "react";
import Layout from "./Layout";
import uniqid from "uniqid";
import { portfolio, about } from "../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Fade, Rotate } from "react-reveal";

const Portfolio = () => {
  const { email } = about;
  if (!portfolio.length) return null;
  if (!portfolio.length) return null;
  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-28 md:mt-12">
        <Rotate top left cascade>
          <h1 className="w-[300px] sm:w-full font-bold text-center text-2xl md:text-3xl lg:text-4xl my-3">Front-end Development Portfolio</h1>
        </Rotate>

        <Zoom>
          <h6 className="w-[300px] sm:w-[500px] md:w-full text-center">
            Here are a few past design projects I've worked on. Want to see more?
            <span className="hover:font-bold">{email && <a href={`mailto:${email}`}>Email me.</a>}</span>
          </h6>
        </Zoom>

        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-8 md:p-2 lg:p-8 xl:p-0 2xl:p-8 gap-8 md:mt-6 xl:mt-16 2xl:mx-12">
          <Fade bottom>
            {portfolio.map((project) => {
              return (
                <li key={uniqid()} className="relative group">
                  <img src={project.image} className="rounded-3xl" />
                  <div className="portfolioCard-animation delay-450">
                    <div className="sticky">
                      <h3 className="font-bold text-2xl mb-10 w-[350px]">{project.title}</h3>
                      <h4 className="font-semibold mb-10 mx-auto w-[200px] sm:w-[350px]">{project.description}</h4>

                      <div className="flex flex-row gap-6 justify-center items-center text-center sticky">
                        <a href={project.github}>
                          <div className="hover-l-animation dark:hover-d-animation">
                            <div type="button" className=" text-black dark:text-white hover:text-primaryColor dark:md:hover:text-secondaryColor ">
                              <span>
                                <FontAwesomeIcon icon={faGithub} className="p-3 shadow-md cursor-pointer" />
                              </span>
                            </div>
                          </div>
                        </a>
                        <a href={project.web}>
                          <div className="hover-l-animation dark:hover-d-animation">
                            <div type="button" className=" text-black dark:text-white hover:text-primaryColor  dark:md:hover:text-secondaryColor ">
                              <span>
                                <FontAwesomeIcon icon={faUpRightFromSquare} className="p-3 shadow-md cursor-pointer" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </Fade>
        </ul>
      </section>
    </Layout>
  );
};

export default Portfolio;
