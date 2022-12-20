import React from "react";
import Layout from "./Layout";
import { pricing } from "../database";
import { Zoom, Fade, Rotate } from "react-reveal";
import Carousel from "nuka-carousel/lib/carousel";

const Pricing = () => {
  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-28 md:mt-12">
        <Rotate top left cascade>
          <h1 className="w-[300px] sm:w-full font-bold text-center text-2xl md:text-3xl lg:text-4xl my-3">Pricing and Services</h1>
        </Rotate>

        <Zoom>
          <h2 className="text-center">I will work according to your choice</h2>
        </Zoom>

        <div className="flex gap-10 bg-opacity-50 dark:text-white leading-loose ">
          <PricingCard />
        </div>
      </section>
    </Layout>
  );
};

// Card For Pricing List same cards with HPricing.js
export function PricingCard() {
  const { email } = pricing;
  return (
    <>
      {/* Pricing Without Carousel */}
      {/* Basic */}
      <Fade left>
        <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] hidden lg:block mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 md:my-6 bg-wave1 bg-no-repeat  ">
          <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">basic</h3>
          <h4 className="font-semibold text-xl my-6">Slicing Web Design</h4>

          <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
          <h5 className="font-medium">
            <ul>
              <li>React Js</li>
              <li>Next Js</li>
              <li>TailwindCSS</li>
            </ul>
          </h5>

          <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
          <h5 className="font-medium">Slicing your own web design from figma or psd</h5>

          <div className="sticky flex justify-center">
            <div className="p-4 mt-16 rounded-full">
              {email && (
                <a href={`mailto:${email}`}>
                  <div className="hover-l-button1 dark:hover-d-button1">
                    <div
                      type="button"
                      className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                    >
                      Request quote
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>

      {/* Standard */}
      <Fade bottom>
        <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] hidden lg:block mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 bg-wave2 bg-no-repeat ">
          <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">standard</h3>
          <h4 className="font-semibold text-xl my-6">
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
            </ul>
          </h4>

          <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
          <h5 className="font-medium">
            <ul>
              <li>Figma</li>
              <li>React Js</li>
              <li>Next Js</li>
              <li>TailwindCSS</li>
            </ul>
          </h5>

          <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
          <h5 className="font-medium">Create your own design from scratch and slicing it into real web</h5>

          <div className="sticky flex justify-center">
            <div className="p-4 mt-16 rounded-full">
              {email && (
                <a href={`mailto:${email}`}>
                  <div className="hover-l-button1 dark:hover-d-button1">
                    <div
                      type="button"
                      className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                    >
                      Request quote
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>

      {/* Premium */}
      <Fade right>
        <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] hidden lg:block mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 bg-wave3 bg-no-repeat ">
          <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">premium</h3>
          <h4 className="font-semibold text-xl my-6">
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Hosting</li>
            </ul>
          </h4>

          <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
          <h5 className="font-medium">
            <ul>
              <li>Figma</li>
              <li>React Js</li>
              <li>Next Js</li>
              <li>TailwindCSS</li>
              <li>Hosting Providers</li>
            </ul>
          </h5>

          <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
          <h5 className="font-medium">Create your own design from scratch and slicing it into real web, hosting to your domain</h5>

          <div className="sticky flex justify-center">
            <div className="p-4 mt-16 rounded-full">
              {email && (
                <a href={`mailto:${email}`}>
                  <div className=" hover-l-button1 dark:hover-d-button1">
                    <div
                      type="button"
                      className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                    >
                      Request quote
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>

      {/* ======================== */}

      {/* Pricing With Carousel */}
      <div className="lg:hidden">
        <Carousel>
          {/* Basic */}
          <Fade left>
            <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 md:my-6 bg-wave1 bg-no-repeat  ">
              <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">basic</h3>
              <h4 className="font-semibold text-xl my-6">Slicing Web Design</h4>

              <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium">
                <ul>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                </ul>
              </h5>

              <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium">Slicing your own web design from figma or psd</h5>

              <div className="sticky flex justify-center">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className="hover-l-button1 dark:hover-d-button1">
                        <div
                          type="button"
                          className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                        >
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>

          {/* Standard */}
          <Fade bottom>
            <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 bg-wave2 bg-no-repeat ">
              <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">standard</h3>
              <h4 className="font-semibold text-xl my-6">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                </ul>
              </h4>

              <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium">
                <ul>
                  <li>Figma</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                </ul>
              </h5>

              <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium">Create your own design from scratch and slicing it into real web</h5>

              <div className="sticky flex justify-center">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className="hover-l-button1 dark:hover-d-button1">
                        <div
                          type="button"
                          className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                        >
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>

          {/* Premium */}
          <Fade right>
            <div className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] mx-auto flex flex-col text-center border dark:border-black rounded-b-3xl shadow-md rounded-lg p-12 bg-white dark:bg-itemColor my-12 md:my-6 bg-wave3 bg-no-repeat ">
              <h3 className="font-bold text-2xl mb-3 -mt-4 uppercase">premium</h3>
              <h4 className="font-semibold text-xl my-6">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Hosting</li>
                </ul>
              </h4>

              <h4 className="font-bold text-lg mt-6 mb-4 text-[#E0B20F]">Stack Used:</h4>
              <h5 className="font-medium">
                <ul>
                  <li>Figma</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>TailwindCSS</li>
                  <li>Hosting Providers</li>
                </ul>
              </h5>

              <h4 className="font-bold text-lg mt-12 mb-4 text-[#E0B20F]">Description</h4>
              <h5 className="font-medium">Create your own design from scratch and slicing it into real web, hosting to your domain</h5>

              <div className="sticky flex justify-center">
                <div className="p-4 mt-16 rounded-full">
                  {email && (
                    <a href={`mailto:${email}`}>
                      <div className=" hover-l-button1 dark:hover-d-button1">
                        <div
                          type="button"
                          className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-1 sm:px-6 md:px-10 lg:px-2 xl:px-12 font-bold text-lg text-black dark:text-white hover:text-white dark:md:hover:text-black"
                        >
                          Request quote
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Fade>
        </Carousel>
      </div>
    </>
  );
}

export default Pricing;
