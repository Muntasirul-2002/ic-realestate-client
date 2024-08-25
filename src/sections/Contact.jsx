import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-violet-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
          data-aos="zoom-in"
        >
          <h1 className="text-2xl text-black  font-semibold dark:text-white">
            Send us a message
          </h1>
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            name=""
            id=""
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="Leave a message"
          ></textarea>
          <button className="bg-violet-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-violet-700 cursor-pointer">
            Send
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-violet-500 dark:text-white"
          >
            Reach us
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            doloremque dolores molestiae beatae asperiores optio nemo
            blanditiis! Enim, rem quam.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Contact;
