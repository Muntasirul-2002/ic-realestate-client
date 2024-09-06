import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const PropertyDetails = () => {
  const url = "http://localhost:8080";
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `${url}/api/v1/property/view-property/${params.slug}`
      );
      setProductDetails(data.viewSingleProperty || []);
      console.log("Total product:", data.viewSingleProperty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductDetails();
  }, [params?.slug]);

  return (
    <div>
      <div>
        <div className="bg-violet-700 h-[200px] flex justify-center items-center">
          <h1 className="ml-2 text-white text-4xl font-bold">
            {productDetails.title} - {productDetails.location}
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
          <h1 className="flex justify-start items-center text-[#0E2E50] font-bold text-3xl m-5">
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
            <span className="ms-4 font-semibold text-black">
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
        <h1 className="flex justify-center items-center font-bold text-4xl text-violet-600">
          Related Properties
        </h1>
      </div>
    </div>
  );
};

export default PropertyDetails;
