import React, { useEffect } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        {/* Section Home */}
        <section id="home" className="flex flex-col items-center text-center md:-mt-28 leading-relaxed md:leading-loose bg-bghomew dark:bg-bghomed bg-cover pb-96">
          <div className="container mx-auto mt-10 overflow-hidden">
            {/* Name */}
            {name && (
              <RubberBand>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-32 md:mt-40 ">
                  Hi, I am <span className="text-primaryColor dark:text-secondaryColor">{name}.</span>
                </h1>
              </RubberBand>
            )}

            {/* Role */}
            <Shake>{role && <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 md:my-6">A {role}.</h2>}</Shake>

            {/* Description */}
            <Zoom>{description && <p className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] mt-6 md:mt-0 mx-auto md:text-xl font-medium break-words">{description}</p>}</Zoom>

            {/* Scroll down */}
            <div className="mt-10">
              <a href="#service" alt="Scroll Down Icon">
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
          <Link to="/contact">
            <div className="hover-l-button2 dark:hover-d-button2">
              <div type="button" className="py-8 px-16 border dark:border-4 border-primaryColor dark:border-secondaryColor font-bold text-xl uppercase text-primaryColor hover:text-white dark:text-white dark:md:hover:text-black">
                Get in touch
                <span>
                  <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
          <Link to="/contact" className="text-purple-600 underline mt-2">
            If You Have Other Request Or Question
          </Link>
        </div>
      </Layout>
      <ScrollToTop />
    </>
  );
};

export default Home;
