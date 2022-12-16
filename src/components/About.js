import React from "react";
import Layout from "./Layout";
import { about } from "../database";
import { Slide, Fade } from "react-reveal";

const About = () => {
  const { name, role, country, phone, email, longDescription, profile } = about;
  return (
    <Layout>
      <section className="container flex mx-24 overflow-hidden mt-12">
        <Fade left>
          <div className="w-6/12">
            {name && <h2 className="font-bold text-5xl my-16">{name}</h2>}

            {role && (
              <h4 className="font-semibold text-2xl my-2">
                {role}
                <span className="m-2">|</span>
                <span className="font-semibold text-2xl text-[#ff0000]">{country && <strong>{country}</strong>}</span>
              </h4>
            )}

            {phone && <h4 className="text-2x my-2">{phone}</h4>}

            {email && <h4 className="text-[#E0B20F]">{email}</h4>}

            <div className="w-[600px] opacity-50 border border-itemColor my-5"></div>

            {longDescription && <p className="w-[600px] break-word">{longDescription}</p>}
          </div>
        </Fade>

        <Slide right>
          <div className="w-6/12">{profile && <img src={profile} alt="" className="w-[90%] rounded-bl-3xl rounded-tl-3xl" />}</div>
        </Slide>
      </section>
    </Layout>
  );
};

export default About;
