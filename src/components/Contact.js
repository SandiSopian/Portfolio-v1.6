import React, { useRef } from "react";
import Layout from "./Layout";
import emailjs from "@emailjs/browser";
import { Zoom, Fade, Rotate } from "react-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_t3czx0o", "template_yv9yiyb", form.current, "Up2txJmP1LMtjde8D").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    alert("Message Sent Successfully!");
  };

  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-12">
        <Rotate top left cascade>
          <h1 className="font-bold text-4xl my-3">Contact</h1>
        </Rotate>

        <Zoom>
          <h2>Have a question? Please enquire below</h2>
        </Zoom>

        <div className="container mt-12 flex flex-col mx-auto justify-center items-center">
          <Fade>
            <form ref={form} onSubmit={sendEmail}>
              {/* Input Name */}
              <label htmlFor="user_name" className="font-medium text-xl">
                Name*
              </label>
              <div>
                <input maxLength={50} type="text" id="user_name" name="user_name" required className="bg-slate-100 dark:md:text-black  dark:md:text-black border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Enter Full Name" />
              </div>

              {/* Input Email */}
              <label htmlFor="user_mail" className="font-medium text-xl">
                Email*
              </label>
              <div>
                <input maxLength={70} type="email" id="user_email" name="user_email" required className="bg-slate-100 dark:md:text-black  border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Email Address" />
              </div>

              {/* Input Phone */}
              <label htmlFor="user_phone" className="font-medium text-xl">
                Phone
              </label>
              <div>
                <input
                  maxLength={14}
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                  className="bg-slate-100 dark:md:text-black  border-2 p-2 w-[600px] h-[60px] rounded-lg"
                  placeholder="Phone Number (optional)"
                />
                <div className="mb-8">
                  <small>Format: 08xx-xxxx-xxxx</small>
                </div>
              </div>

              {/* Input Website */}
              <label htmlFor="user_website" className="font-medium text-xl">
                Website
              </label>
              <div>
                <input maxLength={70} type="url" id="user_website" name="user_website" className="bg-slate-100 dark:md:text-black  border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Website (optional)" />
              </div>

              {/* Input Message */}
              <label htmlFor="message" className="font-medium text-xl">
                Message*
              </label>
              <div>
                <textarea
                  maxLength={500}
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="bg-slate-100 dark:md:text-black  border-2 p-2 w-[600px] h-[300px] rounded-lg placeholder:justify-start placeholder:top-0"
                  placeholder="Input Message"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="sticky flex items-center justify-center ">
                <div className="p-4 mt-16 rounded-full ">
                  <div className="hover-l-button1 dark:hover-d-button1">
                    <input
                      type="submit"
                      id="button"
                      value="Enquire"
                      className="border dark:border-2 inset-0 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-20 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </Fade>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
