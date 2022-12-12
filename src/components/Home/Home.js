import React from "react";
import uniqid from "uniqid";
import Layout from "../Layout";
import { homeAbout, services } from "../../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";

const Home = () => {
  const { name, role, description, resume, social } = homeAbout;

  return (
    <Layout>
      {/* Section Home */}
      <section id="#home" className="flex flex-col items-center text-center -mt-24 leading-loose bg-bghomew dark:bg-bghomed bg-cover pb-96">
        <div className="container mx-auto overflow-hidden">
          {/* Name */}
          {name && (
            <h1 className="text-6xl font-bold mt-40">
              Hi, I am <span className="text-nameColor">{name}.</span>
            </h1>
          )}

          {/* Role */}
          {role && <h2 className="text-4xl font-bold my-6">A {role}.</h2>}

          {/* Description */}
          {description && <p className="w-[700px] mx-auto text-xl font-medium">{description}</p>}

          {/* Scroll down */}
          <div className="mt-10">
            <a href="#service">
              <FontAwesomeIcon icon={faArrowDown} className="border-2 border-black dark:border-white p-2 rounded-full" />
            </a>
          </div>
        </div>
      </section>

      {/* Service section on Home */}
      <section id="#service" className="flex flex-col items-center text-center -mt-40">
        <Service />
      </section>

      {/* Skills section on Home */}
      <section id="#skills" className="mt-24">
        <Skills />
      </section>

      {/* Portfolio section on Home */}
      <section id="#portfolio" className="mt-24">
        <Portfolio />
      </section>

      {/* Pricing section on Home */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Get in touch button on Home */}
      <div className="flex flex-col gap-4 items-center text-center mt-32">
        <a href="">
          <span type="button" className="py-6 px-12 border border-black dark:border-white hover:bg-black dark:md:hover:bg-white hover:text-white dark:md:hover:text-black rounded-full font-bold text-3xl uppercase text-black dark:text-white">
            Get in touch
          </span>
        </a>
        <a href="" className="text-purple-600 underline mt-3">
          If You Have Other Request Or Question
        </a>
      </div>
    </Layout>
  );
};

export default Home;
