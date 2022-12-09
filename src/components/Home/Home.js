import React from "react";
import uniqid from "uniqid";
import Layout from "../Layout";
import { homeAbout, services } from "../../database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";

const Home = () => {
  const { name, role, description, resume, social } = homeAbout;
  if (!services.length) return null;

  return (
    <Layout className="flex flex-col items-center text-center mt-24 leading-loose ">
      <section id="#home" className="flex flex-col items-center text-center mt-24 leading-loose ">
        {/* Name */}
        {name && (
          <h1 className="text-6xl font-bold my-2">
            Hi, I am <span className="text-indigo-400">{name}.</span>
          </h1>
        )}

        {/* Role */}
        {role && <h2 className="text-4xl font-bold my-6">A {role}.</h2>}

        {/* Description */}
        <p className="w-[700px] text-center text-xl font-medium">{description && description}</p>

        {/* Scroll down */}
        <div className="mt-10">
          <a href="#service">
            <FontAwesomeIcon icon={faArrowDown} className="border-2 border-black dark:border-white p-2 rounded-full" />
          </a>
        </div>

        {/* Service section on Home */}
        <div id="#service">
          <div className="grid grid-cols-3 justify-items-center gap-24">
            {services.map((service) => (
              <Service key={uniqid()} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
