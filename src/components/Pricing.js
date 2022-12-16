import React from "react";
import Layout from "./Layout";
import { pricing } from "../database";
import { Zoom, Fade, Rotate } from "react-reveal";

const Pricing = () => {
  const { email } = pricing;
  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-12">
        <Rotate top left cascade>
          <h1 className="font-bold text-4xl my-3">Pricing and Services</h1>
        </Rotate>

        <Zoom>
          <h2>I will work according to your choice</h2>
        </Zoom>

        <div className="flex justify-center gap-10 bg-opacity-50 dark:text-white leading-loose ">
          {/* Pricing Basic */}
          <Fade left>
            <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave1 bg-no-repeat  ">
              <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">basic</h3>
              <h4 className="font-semibold text-2xl my-6">Slicing Web Design</h4>

              <h4 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium text-2xl">
                <ul>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                </ul>
              </h5>

              <h4 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium text-2xl">Slicing your own web design from figma or psd</h5>

              <div className="sticky">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className="hover-l-button1 dark:hover-d-button1">
                        <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>

          {/* Pricing Standard */}
          <Fade bottom>
            <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave2 bg-no-repeat ">
              <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">standard</h3>
              <h4 className="font-semibold text-2xl my-6">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                </ul>
              </h4>

              <h4 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium text-2xl">
                <ul>
                  <li>Figma</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                </ul>
              </h5>

              <h4 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium text-2xl">Create your own design from scratch and slicing it into real web</h5>

              <div className="sticky">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className="hover-l-button1 dark:hover-d-button1">
                        <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>

          {/* Pricing Premium */}
          <Fade right>
            <div className="w-4/12 flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg w-[400px] p-12 bg-white dark:bg-itemColor my-12 bg-wave3 bg-no-repeat ">
              <h3 className="font-bold text-3xl mb-3 -mt-4 uppercase">premium</h3>
              <h4 className="font-semibold text-2xl my-6">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Hosting</li>
                </ul>
              </h4>

              <h4 className="font-bold text-2xl mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium text-2xl">
                <ul>
                  <li>Figma</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                  <li>Hosting Providers</li>
                </ul>
              </h5>

              <h4 className="font-bold text-2xl mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium text-2xl">Create your own design from scratch and slicing it into real web, hosting to your domain</h5>

              <div className="sticky">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className="hover-l-button1 dark:hover-d-button1">
                        <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
