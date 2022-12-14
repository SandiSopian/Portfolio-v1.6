import React from "react";
import Layout from "./Layout";
import uniqid from "uniqid";
import { portfolio } from "../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  if (!portfolio.length) return null;
  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-12">
        <h1 className="font-bold text-4xl my-3">Front-end Development Portfolio</h1>
        <h2>
          Here are a few past design projects I've worked on. Want to see more?
          <span className="hover:font-bold">
            <a href="" className="underline">
              Email me
            </a>
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-16">
          {portfolio.map((project) => {
            return (
              <div key={uniqid()} className="relative group">
                <img src={project.image} className="rounded-3xl" />
                <div className="portfolioCard-animation delay-450">
                  <div className="sticky">
                    <h3 className="font-bold text-2xl mb-10 w-[350px]">{project.title}</h3>
                    <h4 className="font-semibold mb-10 w-[350px]">{project.description}</h4>

                    <div className="flex flex-row gap-6 justify-center items-center text-center sticky">
                      <a href={project.url}>
                        <div className="hover-l-animation dark:hover-d-animation">
                          <div type="button" className=" text-black dark:text-white hover:text-primaryColor dark:md:hover:text-secondaryColor ">
                            <span>
                              <FontAwesomeIcon icon={faGithub} className="p-3 shadow-md" />
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={project.url}>
                        <div className="hover-l-animation dark:hover-d-animation">
                          <div type="button" className=" text-black dark:text-white hover:text-primaryColor  dark:md:hover:text-secondaryColor ">
                            <span>
                              <FontAwesomeIcon icon={faUpRightFromSquare} className="p-3 shadow-md" />
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
