import React, { useEffect, useRef } from "react";
import Layout from "./Layout";
import emailjs from "@emailjs/browser";
import { Zoom, Fade, Rotate } from "react-reveal";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY).then(
      (result) => {
        alert("Message Sent Successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Message Not Sent, Try Again Later!");
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-28 md:mt-12">
        <Rotate top left cascade>
          <h1 className="w-[300px] sm:w-full font-bold text-center text-2xl md:text-3xl lg:text-4xl my-3">Contact</h1>
        </Rotate>

        <Zoom>
          <h2 className="w-[300px] sm:w-[500px] md:w-full text-center">Have a question? Please enquire below</h2>
        </Zoom>

        <Fade>
          <div className="container mt-12 flex flex-col mx-auto justify-center items-center  ">
            <form ref={form} onSubmit={sendEmail}>
              {/* Input Name */}
              <label htmlFor="user_name" className="font-medium xl:text-xl ">
                Name*
              </label>
              <div>
                <input
                  maxLength={50}
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="bg-slate-100 dark:md:text-black border-2 p-2 mb-8 w-[300px] sm:w-[500px] md:w-[600px] h-[60px] rounded-lg "
                  placeholder="Enter Full Name"
                />
              </div>

              {/* Input Email */}
              <label htmlFor="user_mail" className="font-medium xl:text-xl">
                Email*
              </label>
              <div>
                <input
                  maxLength={70}
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="bg-slate-100 dark:md:text-black border-2 p-2 mb-8 w-[300px] sm:w-[500px] md:w-[600px] h-[60px] rounded-lg"
                  placeholder="Email Address"
                />
              </div>

              {/* Input Phone */}
              <label htmlFor="user_phone" className="font-medium xl:text-xl">
                Phone
              </label>
              <div>
                <input
                  maxLength={14}
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                  className="bg-slate-100 dark:md:text-black border-2 p-2 w-[300px] sm:w-[500px] md:w-[600px] h-[60px] rounded-lg"
                  placeholder="Phone Number (optional)"
                />
                <div className="mb-8">
                  <small>Format: 08xx-xxxx-xxxx</small>
                </div>
              </div>

              {/* Input Website */}
              <label htmlFor="user_website" className="font-medium xl:text-xl">
                Website
              </label>
              <div>
                <input
                  maxLength={70}
                  type="url"
                  id="user_website"
                  name="user_website"
                  className="bg-slate-100  dark:md:text-black border-2 p-2 mb-8 w-[300px] sm:w-[500px] md:w-[600px] h-[60px] rounded-lg"
                  placeholder="Website (optional)"
                />
              </div>

              {/* Input Message */}
              <label htmlFor="message" className="font-medium xl:text-xl">
                Message*
              </label>
              <div>
                <textarea
                  maxLength={500}
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="bg-slate-100 dark:md:text-black  border-2 p-2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] rounded-lg placeholder:justify-start placeholder:top-0"
                  placeholder="Input Message"
                />
              </div>

              {/* Submit */}
              <div className="sticky flex items-center justify-center">
                <div className="p-4 mt-16 rounded-full">
                  <div className="hover-l-button1 dark:hover-d-button1">
                    <div className="sm:px-16 border-2 border-primaryColor dark:border-secondaryColor text-black hover:text-white dark:text-white dark:md:hover:text-black rounded-lg py-4 hover:cursor-pointer xl:text-xl md:font-bold">
                      <input type="submit" value="Enquire" className="hover:cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </section>
    </Layout>
  );
};

export default Contact;
