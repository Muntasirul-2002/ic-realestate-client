import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
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
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next home in India
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
            nobis iusto quo consequuntur eaque cupiditate cumque cum provident
            fuga?
          </p>
        </section>
      </div>
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter a address"
              className="bg-white p-2 w-full mt-2 border border-b-[1px] border-[#c9c7c1] rounded-md"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Type</h1>
            <select
              name="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 rounded-md text-md"
              id="selectOption"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="Rent">Rent</option>
              <option value="Sell">Sell</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Category
            </h1>
            <select
              name="selectOption"
              className="bg-white rounded-md p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              id="selectOption"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="Rent">Apartment</option>
              <option value="Sell">Banglow</option>
              <option value="Commercial">Duples</option>
              <option value="Land">Condos</option>
            </select>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="bg-violet-600 dark:bg-violet-600 hover:bg-violet-800 dark:hover:bg-violet-700 dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
