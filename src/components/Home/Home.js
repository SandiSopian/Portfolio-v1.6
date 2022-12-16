import React from "react";
import Layout from "../Layout";
import { about } from "../../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Service from "./HService";
import Skills from "./HSkills";
import Portfolio from "./HPortfolio";
import Pricing from "./HPricing";
import ScrollToTop from "../ScrollToTop";
import { Zoom } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import Shake from "react-reveal/Shake";

const Home = () => {
  const { name, role, description } = about;

  return (
    <>
      <Layout>
        {/* Section Home */}
        <section id="home" className="flex flex-col items-center text-center -mt-28 leading-loose bg-bghomew dark:bg-bghomed bg-cover pb-96">
          <div className="container mx-auto mt-10 overflow-hidden">
            {/* Name */}
            {name && (
              <RubberBand>
                <h1 className="text-6xl font-bold mt-40">
                  Hi, I am <span className="text-primaryColor dark:text-secondaryColor">{name}.</span>
                </h1>
              </RubberBand>
            )}

            {/* Role */}
            <Shake>{role && <h2 className="text-4xl font-bold my-6">A {role}.</h2>}</Shake>

            {/* Description */}
            <Zoom>{description && <p className="w-[700px] mx-auto text-xl font-medium">{description}</p>}</Zoom>

            {/* Scroll down */}
            <div className="mt-10">
              <a href="#service">
                <FontAwesomeIcon icon={faArrowDown} className="border-2 border-black dark:border-white p-2 rounded-full animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* Service section on Home */}
        <section id="service" className="container mx-auto flex flex-col items-center text-center -mt-40">
          <Service />
        </section>

        {/* Skills section on Home */}
        <section id="skills" className="container mx-auto mt-24">
          <Skills />
        </section>

        {/* Portfolio section on Home */}
        <section id="portfolio" className="container mx-auto px-10 mt-60">
          <Portfolio />
        </section>

        {/* Pricing section on Home */}
        <section id="pricing" className="container mx-auto px-10 mt-60">
          <Pricing />
        </section>

        {/* Get in touch button on Home */}
        <div className="flex flex-col gap-4 items-center text-center mt-48 mb-38 sticky">
          <a href="">
            <div className="hover-l-button2 dark:hover-d-button2">
              <div type="button" className="py-12 px-20 border dark:border-4 border-primaryColor dark:border-secondaryColor font-bold text-3xl uppercase text-primaryColor hover:text-white dark:text-white dark:md:hover:text-black">
                Get in touch
                <span>
                  <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </span>
              </div>
            </div>
          </a>
          <a href="" className="text-purple-600 underline mt-12">
            If You Have Other Request Or Question
          </a>
        </div>
      </Layout>
      <ScrollToTop />
    </>
  );
};

export default Home;
