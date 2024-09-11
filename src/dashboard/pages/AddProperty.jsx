import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SideFunction from "../components/SideFunction";
import { axiosInstance, getConfig } from "../../utils/ApiRequest";

const AddProperty = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("Sell");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [bedrooms, setBedrooms] = useState("1");
  const [bathrooms, setBathrooms] = useState("1");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [landmark, setLandmark] = useState("");
  const [images, setImages] = useState([]);
  const [featured, setFeatured] = useState([]);

  // Handle creating a new property
  const handleProperty = async (e) => {
    e.preventDefault();
    try {
      const propertyData = new FormData();
      propertyData.append("title", title);
      propertyData.append("type", type);
      propertyData.append("purpose", purpose);
      propertyData.append("description", description);
      propertyData.append("size", size);
      propertyData.append("bedrooms", bedrooms);
      propertyData.append("bathrooms", bathrooms);
      propertyData.append("price", price);
      propertyData.append("location", location);
      propertyData.append("landmark", landmark);
      propertyData.append("featured", featured.join(","));
      images.forEach((image) => propertyData.append("images", image));
      await getConfig();
      const { data } = await axiosInstance.post(
        `/api/v1/property/add-property`,
        propertyData
      );
      if (data?.success) {
        toast.success("Property added successfully!");
        navigate("/view-property");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("Error in adding property: ", error);
      toast.error("Something went wrong");
    }
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };
  const handleFeaturedChange = (e) => {
    const { value } = e.target;
    setFeatured((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <SideFunction />
      <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
        <section className="max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white text-center">
            Add Property
          </h1>
          <form onSubmit={handleProperty}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white dark:text-gray-200">
                  Property Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Property Type
                </label>
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Purpose</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                >
                  <option value="Sell">Sell</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Area</label>
                <input
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Bathrooms
                </label>
                <select
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Featured
                </label>
                <div className="flex flex-row gap-4 mt-2">
                  <label>
                    <input
                      type="radio"
                      value="New"
                      checked={featured.includes("New")}
                      onChange={handleFeaturedChange}
                    />{" "}
                    New
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      value="Hot"
                      checked={featured.includes("Hot")}
                      onChange={handleFeaturedChange}
                    />
                    Hot
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      value="Limited"
                      checked={featured.includes("Limited")}
                      onChange={handleFeaturedChange}
                    />
                    Limited
                  </label>
                </div>
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Location
                </label>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">
                  Landmark
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload images</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          onChange={handleImageChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-600"
              >
                Add Property
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProperty;
