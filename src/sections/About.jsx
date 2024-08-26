import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
    <>
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } w-full m-auto lg:px-48 px-10 py-20 grid lg:grid-cols-2 grid:cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            src={aboutimg}
            data-aos="zoom-in"
            alt="about img"
            className="rounded-2xl lg:w-[500px] lg:h-[600px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <h1
            className="text-violet-600 dark:text-violet-700"
            data-aos="zoom-in"
          >
            Who we are
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            veniam!
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-xl text-gray-600 dark:text-white text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste
            ut omnis delectus beatae nesciunt fugit dolore sunt et doloremque.
          </p>
          <button
            type="submit"
            className="bg-violet-700 dark:bg-violet-600 hover:bg-violet-800 dark:hover:bg-violet-700 dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
          >
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
