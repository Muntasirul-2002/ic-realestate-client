import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import notfound from "../assets/images/notfound.png";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { WhatsappShareButton } from "react-share";
const Properties = () => {
  const [allProperties, setAllProperties] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:8080";
  const propertyUrl = "http://localhost:5173";
  const shareUrl = `${propertyUrl}`;
  const getProperties = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/property/view-property`);
      if (response && response.data.success) {
        console.log("Property fetched:", response.data);
        setAllProperties(response.data.viewProperty || []);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-violet-500 dark:text-white">
            Properties
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>

        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {allProperties.length > 0 ? (
            allProperties.map((p, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white dark:bg-gray-800 rounded-xl w-full"
              >
                {p.images && p.images.length > 0 ? (
                  <Link to={`/property/${p.slug}`}>
                    <div
                      id="image-box"
                      className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                      style={{
                        backgroundImage: `url(${url}/image/${p.images[0]})`,
                      }}
                    >
                      <div
                        id="top"
                        className="flex justify-between items-end w-full"
                      >
                        <div>
                          <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                            {p.featured[1] || "Hot"}
                          </button>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                          <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                            {p.purpose}
                          </button>
                          <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                            {p.featured[0]}
                          </button>
                        </div>
                      </div>
                      <div
                        id="bottom"
                        className="flex justify-between items-end w-full"
                      >
                        <div className="flex justify-start items-center gap-2">
                          <FaMapMarkerAlt className="size-4 text-white" />

                          <h1 className="text-white">{p.location}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                          <FaVideo className="size-4 text-white" />
                          <FaCamera className="size-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    id="image-box"
                    className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                    style={{ backgroundImage: `url(${notfound})` }}
                  >
                    <div
                      id="top"
                      className="flex justify-between items-end w-full"
                    >
                      <div>
                        <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                          Featured
                        </button>
                      </div>
                      <div className="flex justify-between items-center gap-3">
                        <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                          {p.purpose}
                        </button>
                        <button className="px-3 py-1 bg-violet-400 hover:bg-white hover:text-black text-white rounded-lg text-[13px] font-semibold">
                          New
                        </button>
                      </div>
                    </div>
                    <div
                      id="bottom"
                      className="flex justify-between items-end w-full"
                    >
                      <div className="flex justify-start items-center gap-2">
                        <FaMapMarkerAlt className="size-4 text-white" />

                        <h1 className="text-white">{p.description}</h1>
                      </div>
                      <div className="flex justify-center items-center gap-4">
                        <FaVideo className="size-4 text-white" />
                        <FaCamera className="size-4 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="px-6 flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {p.title}
                  </h1>
                  <h1 className="text-2xl text-violet-700 font-bold dark:text-white">
                    ₹{p.price}
                  </h1>
                  <p className="dark:text-white">{p.description}</p>
                  <div
                    className="flex justify-center items-start gap-4"
                    id="icons"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaBath className="size-5 text-violet-700" />
                      <h1 className="font-semibold dark:text-white">
                        {p.bathrooms}
                      </h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <FaBed className="size-5 text-violet-700" />
                      <h1 className="font-semibold dark:text-white">
                        {p.bedrooms}
                      </h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <MdSpaceDashboard className="size-5 text-violet-700" />
                      <h1 className="font-semibold dark:text-white">
                        {p.area || 3200} Sqft
                      </h1>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200 mt-8"></div>
                  <div
                    id="owner-info"
                    className="flex justify-between items-center w-full mr-2"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaUserCircle className="size-5 text-violet-500" />{" "}
                      <h1 className="dark:text-white">Muntasirul</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <WhatsappShareButton
                          url={shareUrl}
                          title={`Checkout out this property: ${p.title}`}
                          separator="::"
                        >
                          <FaShareAlt className="size-4 text-violet-500" />
                        </WhatsappShareButton>
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaHeart className="size-4 text-violet-500" />
                      </div>
                      <Link to={`/property/${p.slug}`}>
                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                          <TbListDetails className="size-4 text-violet-500" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>No Data found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
