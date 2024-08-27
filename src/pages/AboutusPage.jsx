import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import About from "../sections/About";
import business from '../assets/images/business.jpg'
const AboutusPage = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section
        id="hero"
        className="w-[100%] h-[400px] m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: `url(${business})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
        >
          About <span className="text-violet-600">us</span>
        </h1>
        <p data-aos="zoom-in" className="text-white text-xl lg:pr-[500px] pr-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
          nobis iusto quo consequuntur eaque cupiditate cumque cum provident
          fuga?
        </p>
      </section>
      <div>
        <About />
      </div>
    </div>
  );
};

export default AboutusPage;
