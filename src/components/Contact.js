import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container flex flex-col justify-center items-center mx-auto overflow-hidden mt-12">
        <h1 className="font-bold text-4xl my-3">Contact</h1>
        <h2>Have a question? Please enquire below</h2>

        <div className="container mt-12 flex flex-col mx-auto justify-center items-center">
          <form>
            {/* Input Nama */}
            <label for="name" className="font-medium text-xl">
              Name*
            </label>
            <div>
              <input maxLength={50} type="text" id="name" name="name" required className="bg-slate-100 border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Enter Full Name"></input>
            </div>

            {/* Input Email */}
            <label for="email" className="font-medium text-xl">
              Email*
            </label>
            <div>
              <input maxLength={70} type="email" id="email" name="email" required className="bg-slate-100 border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Email Address"></input>
            </div>

            {/* Input Phone */}
            <label for="phone" className="font-medium text-xl">
              Phone
            </label>
            <div>
              <input maxLength={12} type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" className="bg-slate-100 border-2 p-2 w-[600px] h-[60px] rounded-lg" placeholder="Phone Number (optional)"></input>
              <div className="mb-8">
                <small>Format: 08xx-xxxx-xxxx</small>
              </div>
            </div>

            {/* Input Website */}
            <label for="website" className="font-medium text-xl">
              Website
            </label>
            <div>
              <input maxLength={70} type="url" id="website" name="website" className="bg-slate-100 border-2 p-2 mb-8 w-[600px] h-[60px] rounded-lg" placeholder="Website (optional)"></input>
            </div>

            {/* Input Pesan */}
            <label for="message" className="font-medium text-xl">
              Message*
            </label>
            <div>
              <textarea maxLength={500} type="text" required className="bg-slate-100 border-2 p-2 w-[600px] h-[300px] rounded-lg" placeholder="Input Message"></textarea>
            </div>

            {/* Submit */}
            <div className="sticky flex items-center justify-center ">
              <button type="submit" className="p-4 mt-16 rounded-full ">
                <div className="hover-l-button1 dark:hover-d-button1">
                  <div type="button" className="border dark:border-2 border-primaryColor dark:border-secondaryColor rounded-lg py-6 px-20 font-bold text-2xl text-black dark:text-white hover:text-white dark:md:hover:text-black">
                    Enquire
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
