import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import notfound from "../assets/images/notfound.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBath,
  FaBed,
  FaUserCircle,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero from "../assets/images/hero1.webp";
import real2 from "../assets/images/real2.jpg";
import real3 from "../assets/images/real3.jpg";
import real4 from "../assets/images/real4.jpg";

const PropertiesPage = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const url = "http://localhost:8080";
  const propertyUrl = "http://localhost:5173";
  const shareUrl = `${propertyUrl}/property`;
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  //fetch all the properties
  const getAllProperties = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/property/view-property`, {
        params: { property: currentPage },
      });
      if (response && response.data.success) {
        console.log("All property:", response.data);
        setAllProperties(response.data.viewProperty || []);
        setTotalPage(Math.ceil(response.data.totalProperties / 8));
      } else {
       
      }
    } catch (error) {
      console.log("Error in fetching properties:", error);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("property")) || 0;
    setCurrentPage(page);
  }, [location.search]);
  //   [location.search]);: Extracts the property query parameter from the URL to set the initial currentPage.
  // [currentPage]);: Fetches properties whenever currentPage changes.
  useEffect(() => {
    console.log("PropertiesPage loaded with current page:", currentPage);
    getAllProperties();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      navigate(`/property?property=${newPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      navigate(`/property?property=${newPage}`);
    }
  };
  return (
    <>
      <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        
        renderIndicator={false}
        emulateTouch
        swipeable
        showArrows={false}
      >
        <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
          <img src={real2} alt="Property 1" className="h-[300px] w-[300px] object-cover" />
        </div>
        <div>
          <img src={real3} alt="Property 2" className="h-[300px] w-[300px] object-cover" />
        </div>
        <div>
          <img src={real4} alt="Property 3" className="h-[300px] w-[300px] object-cover" />
        </div>
        <div>
          <img src={hero} alt="Property 4" className="h-[300px] w-[300px] object-cover" />
        </div>
      </Carousel>
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
    </div>
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
              allProperties.map((property, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="bg-white dark:bg-gray-800 rounded-xl w-full"
                >
                  {property.images && property.images.length > 0 ? (
                    <Link to={`/property/${property.slug}`}>
                    <div
                      id="image-box"
                      className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                      style={{
                        backgroundImage: `url(${url}/image/${property.images[0]})`,
                      }}
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
                            Sale
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

                          <h1 className="text-white font-bold">{property.location}</h1>
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
                            Sale
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

                          <h1 className="text-white">{property.description}</h1>
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
                      {property.title || "Home In Merrick Way"}
                    </h1>
                    <h1 className="text-2xl text-violet-700 font-bold dark:text-white">
                      ₹{property.price || 900000}
                    </h1>
                    <p className="dark:text-white">
                      {property.description ||
                        "Enchanting three bedrooms, three bath home with spacious one bedroom, one bath..."}
                    </p>
                    <div
                      className="flex justify-center items-start gap-4"
                      id="icons"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <FaBath className="size-5 text-violet-700" />
                        <h1 className="font-semibold dark:text-white">
                          {property.bathrooms || 3}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <FaBed className="size-5 text-violet-700" />
                        <h1 className="font-semibold dark:text-white">
                          {property.bedrooms || 3}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <MdSpaceDashboard className="size-5 text-violet-700" />
                        <h1 className="font-semibold dark:text-white">
                          {property.area || 4300}Sqft
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
                        <div className="p-2 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                          <WhatsappShareButton
                            url={shareUrl}
                            title={`Checkout out this property: ${property.title}`}
                            separator="::"
                          >
                            <WhatsappIcon size={40} round={true} />
                          </WhatsappShareButton>
                        </div>
                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                          <FaHeart className="size-4 text-violet-500" />
                        </div>
                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                          <TbListDetails className="size-4 text-violet-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p>No property found</p>
              </>
            )}
          </div>
        </section>
        <div className="flex justify-center items-center mb-5">
          <button
            className="bg-violet-500 hover:bg-violet-900 py-2 px-6 text-white font-semibold rounded-lg"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <span className="font-semibold ms-2 dark:text-white">{`Page ${
            currentPage + 1
          } of ${totalPage}`}</span>
          <button
            className="bg-violet-500 hover:bg-violet-900 py-2 px-6 text-white font-semibold rounded-lg ms-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPage - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
