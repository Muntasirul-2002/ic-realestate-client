  import React, { useState } from "react";
  import { Link, NavLink, useNavigate } from "react-router-dom";
  import { FaTimes, FaBars, FaUserCircle } from "react-icons/fa";
  import { SiGnuprivacyguard } from "react-icons/si";
  import logo from "../assets/images/logo.png";
  import { useDarkMode } from "./DarkModeContext";
  import { useAuth } from "../context/auth";

  const Header = () => {
    const { darkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [auth, setAuth] = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    //logout function
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      localStorage.clear();
      alert("User logged out");
    };
    //open menu function
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    //close menu function
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    //dropdown open close menu function
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    // navItems
    const navItems = [
      { link: "Home", path: "/" },
      { link: "About", path: "/about" },
      { link: "Services", path: "/services" },
      { link: "Property", path: "/property" },
      { link: "Contact", path: "/contact" },
    ];
  // function for display user first two name letters as a avatar
  const adminInitial = auth?.user?.name
    ? auth.user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .substring(0, 2)
    : "MU";
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
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-violet-600 hover:text-black w-full text-center"
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>

        {/* User Dropdown */}
        <div className="flex justify-center items-center lg:gap-8 gap-4 relative">
          {auth?.user ? (
            <div className="relative">
              <img src={`https://ui-avatars.com/api/?name=${adminInitial}&background=random&color=fff`} onClick={toggleDropdown} className="w-10 h-10 rounded-full cursor-pointer" alt="user-image" />

              {/* <FaUserCircle
                className="size-6 cursor-pointer text-violet-600"
                onClick={toggleDropdown}
              /> */}
              {dropdownOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-10 right-0 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{auth.user.name}</div>
                    <div className="font-medium truncate">{auth.user.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="/dashboard/admin"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/earnings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <div className="flex justify-center items-center lg:gap-3 gap-1">
                  <SiGnuprivacyguard className="size-5 text-violet-600" />
                  <h1 className="lg:text-md text-sm text-black dark:text-white font-semibold">
                    Member Login
                  </h1>
                </div>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    );
  };

  export default Header;
