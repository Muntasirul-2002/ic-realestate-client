import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaMoon,
  FaSun,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Services",
      path: "/services",
    },
    {
      link: "Property",
      path: "/properties",
    },
    {
      link: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      <div id="logo">
        <img
          src={logo}
          alt="logo"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-violet-600 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      {/* mobile view */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0 lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-violet-600 hover:text-black w-full text-center"
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center lg:gap-8 gap-4">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-violet-600" />
          <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">
            6294268784
          </h1>
        </div>
        <FaUserCircle className="size-6 cursor-pointer text-violet-600" />
      </div>
      {/* <button
        onClick={toggleDarkMode}
        className="ml-4 text-white dark:text-white rounded-full bg-violet-500"
      >
        {darkMode ?<FaMoon size={25} className="text-black"/>:<FaSun size={25} className="text-black"/>}
      </button> */}
    </nav>
  );
};

export default Header;
