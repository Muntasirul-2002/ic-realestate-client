import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About us</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            molestiae aut? Qui asperiores aliquam placeat consectetur incidunt
            quo deserunt natus?
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-violet-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-violet-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-violet-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaLinkedinIn className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-violet-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright myhome , All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
              reiciendis!
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">6294268784</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">+91-6294268784</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <a
              href="mailto:muntasirul.msd@gmail.com"
              className="text-slate-200"
            >
              muntasirul.msd@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="property-img"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">₹700,000</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="property-img"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">₹700,000</p>
            </div>
          </div>
        </div>
      </footer>
      {/* slide-to-top button */}
      <div
        className="bg-violet-600 p-4 rounded-full hover:bg-violet-800 cursor-pointer fixed lg:bottom-12 bottom-6 right-5"
        id="icon-box"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="text-white" />
        </Link>
      </div>

      {/* dark mode setup */}
      <div>
        <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-violet-500 fixed lg:top-52 right-6 top-6">
          {darkMode?<FaMoon size={25} className="text-black"/>:<FaSun size={25} className="text-black"/>}

        </button>

      </div>
    </>
  );
};

export default Footer;
