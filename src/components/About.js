import React, { useEffect } from "react";
import Layout from "./Layout";
import { about } from "../database";
import { Slide, Fade } from "react-reveal";

const About = () => {
  const { name, role, country, phone, email, longDescription, profile } = about;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="container flex flex-col lg:flex-row mx-auto 2xl:mx-auto overflow-hidden mt-28 md:mt-12">
        <Fade left>
          <div className="lg:w-6/12 flex flex-col items-center lg:items-start order-2 lg:order-1 lg:ml-16">
            {name && <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-8 xl:my-16">{name}</h2>}

            {role && (
              <h4 className="font-semibold text-xl lg:text-2xl my-2">
                {role}
                <span className="m-2">|</span>
                <span className="font-extrabold text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#ff0000] to-white ">{country && <strong>{country}</strong>}</span>
              </h4>
            )}

            {phone && <h4 className="text-2x lg:my-2">{phone}</h4>}

            {email && <h4 className="text-[#E0B20F]">{email}</h4>}

            <div className="w-[260px] sm:w-[450px] md:w-[600px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] opacity-50 border border-itemColor my-5"></div>

            {longDescription && <article className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] text-justify break-word">{longDescription}</article>}
          </div>
        </Fade>

        <Slide right>
          <div className="lg:w-6/12 order-1 lg:order-2 ">{profile && <img src={profile} alt="Profile Image" className="sm:w-[80%] lg:w-[90%] p-6 lg:p-0 lg:rounded-bl-3xl lg:rounded-tl-3xl mx-auto lg:mx-0" />}</div>
        </Slide>
      </section>
    </Layout>
  );
};

export default About;
