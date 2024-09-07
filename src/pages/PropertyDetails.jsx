import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  FaRulerCombined,
  FaBed,
  FaBath,
  FaMapLocationDot,
} from "react-icons/fa6";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { useDarkMode } from "../components/DarkModeContext";

const PropertyDetails = () => {
  const url = "http://localhost:8080";
  const params = useParams();
  const {darkMode} = useDarkMode()
  const [productDetails, setProductDetails] = useState({});
  const [relatedProperties, setRelatedProperties] = useState([]);

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `${url}/api/v1/property/view-property/${params.slug}`
      );
      setProductDetails(data.viewSingleProperty || []);
      getRelatedProperties(
        data?.viewSingleProperty._id,
        data?.viewSingleProperty.type
      );
      // console.log("Total product:", data.viewSingleProperty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductDetails();
  }, [params?.slug]);

  //function for getting related properties
  const getRelatedProperties = async (pid, type) => {
    try {
      const { data } = await axios.get(
        `${url}/api/v1/property/related/${pid}/${type}`
      );
      setRelatedProperties(data.properties);
      console.log("related properties: ", data.properties);
    } catch (error) {
      console.log("Error in getting related properties: ", error);
    }
  };
  return (
    <div className={`${darkMode ? "dark: bg-black" : "light bg-white"}`}>
      <div>
        <div className="bg-violet-700 h-[200px] flex justify-center items-center">
          <h1 className="ml-2 text-white dark:text-white text-4xl font-bold">
            {productDetails.title} -{" "}
            <span>
              {productDetails.location}
              {productDetails?.featured?.map((featured, index) => (
                <span
                  key={index}
                  class="bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 m-3"
                >
                  {featured.trim()}
                </span>
              ))}
            </span>
          </h1>
        </div>
        <div>
          {productDetails.images && productDetails.images.length > 0 ? (
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              autoplay={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {productDetails.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${url}/image/${image}`}
                    alt={`property-${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="">
          <h1 className="flex justify-start items-center text-[#0E2E50] dark:text-white font-bold text-3xl m-5">
            {productDetails.title} , for {productDetails.purpose}
          </h1>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ml-4"
          >
            +916294268784
          </button>
          <h1 className="text-violet-700 font-bold text-xl ml-4">
            Price : ₹{productDetails.price}
          </h1>
          <h1 className="text-violet-600 font-semibold text-xl ml-4">
            Property Type : {productDetails.type} - for {productDetails.purpose}
          </h1>

          <span className="flex justify-start m-4">
            <FaMapLocationDot className="size-6 text-violet-900" />{" "}
            <span className="ms-4 font-semibold text-black dark:text-white">
              {productDetails.location}
            </span>
          </span>
          <span className="flex justify-start m-4">
            <PiMapPinSimpleAreaBold className="size-6 text-violet-900" />{" "}
            <span className="font-semibold ms-2 text-violet-900">
              Landmark :
            </span>
            <span className="font-semibold text-black">
              {productDetails.landmark}
            </span>
          </span>

          <ol className="flex m-5 items-center  text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <div className="bg-violet-200 rounded-full">
                  <FaRulerCombined className=" size-7" />
                </div>
                <span className="flex sm:inline-flex ms-2 sm:ms-2">
                  {productDetails.size}
                </span>
              </span>
            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span className="me-2 bg-violet-200 rounded-full">
                  <FaBed className="size-7" />
                </span>
                <span className="flex sm:inline-flex sm:ms-2">
                  {productDetails.bedrooms}
                </span>
              </span>
            </li>
            <li className="flex items-center">
              <span className="me-2 bg-violet-200 rounded-full">
                <FaBath className="size-7" />
              </span>
              <span className="flex sm:inline-flex sm:ms-2">
                {productDetails.bedrooms}
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center items-center font-bold text-4xl text-violet-600 mb-5">
          Related Properties
        </h1>
        <div className="flex flex-row">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
            integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
            crossOrigin="anonymous"
          />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProperties.length > 0 ? (
              relatedProperties.map((relatedproperty, index) => (
                <div className="relative mx-auto w-full" key={index}>
                  <div
                  
                    className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  >
                    <div className="rounded-lg bg-white p-4 shadow">
                      <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                          {relatedproperty.images &&
                          relatedproperty.images.length > 0 ? (
                            <Link to={`/property/${relatedproperty.slug}`}>
                              <div className="absolute inset-0 bg-black bg-opacity-80">
                                <img
                                  src={`${url}/image/${relatedproperty.images[0]}`}
                                  alt={relatedproperty.title}
                                />
                              </div>
                            </Link>
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-black bg-opacity-80">
                                <img
                                  src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9"
                                  alt
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-5 mb-3 flex">
                          <p className="flex items-center font-medium text-white shadow-sm">
                            <i className="fa fa-camera mr-2 text-xl text-white" />
                            5
                          </p>
                        </div>

                        <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white">
                          {relatedproperty.featured[0]}
                        </span>
                        <span className="absolute top-0 left-1 z-10 mt-3 ml-3 inline-flex select-none rounded-full w-10 h-10  bg-violet-300 px-2 py-2 text-md font-bold text-violet-950">
                          <span>{relatedproperty.purpose}</span>
                        </span>
                      </div>
                      <div className="mt-4">
                        <h2
                          className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg"
                          title="New York"
                        >
                          {relatedproperty.title}
                        </h2>
                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                          <span className="text-2xl">
                            ₹ {relatedproperty.price}
                          </span>
                          /-
                        </p>
                      </div>
                      <span className="text-sm uppercase">
                        {" "}
                        {relatedproperty.purpose}{" "}
                      </span>
                      <div className="mt-4">
                        <p className="line-clamp-1 mt-2 text-lg text-gray-800">
                          {relatedproperty.description}
                        </p>
                      </div>
                      <div className="justify-center">
                        <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                          <p className="flex items-center font-medium text-gray-800">
                            <i className="fa fa-bed mr-2 text-blue-900" />
                            {relatedproperty.bedrooms}
                          </p>
                          <p className="flex items-center font-medium text-gray-800">
                            <i className="fa fa-bath mr-2 text-blue-900" />
                            {relatedproperty.bathrooms}
                          </p>
                          <p className="flex items-center font-medium text-gray-800">
                            <i className="fa fa-home mr-2 text-blue-900" />
                            {relatedproperty.size}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 grid grid-cols-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8" />
                            <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full" />
                          </div>
                          <p className="line-clamp-1 ml-2 text-gray-800">
                            Muntasirul Islam
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <button>
                            <i className="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" />
                          </button>
                          <button>
                            <i className="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p>No related properties found</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
