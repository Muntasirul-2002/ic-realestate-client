import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation} from "react-router-dom";
import SideFunction from "../components/SideFunction";
import { axiosInstance, getConfig } from "../../utils/ApiRequest";
const ViewProperty = ({url}) => {
  const [getAllProperties, setGetAllProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  const getPropertyData = async () => {
    try {
      await getConfig()
      const response = await axiosInstance.get(`/api/v1/property/view-property`, {
        params: { property: currentPage },
      });
      if (response && response.data.success) {
        console.log("All data:", response.data);
        setGetAllProperties(response.data.viewProperty || []);
        setTotalPages(Math.ceil(response.data.totalProperties / 8));
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Error in getting all properties: " + error);
      toast.error("Error fetching property data");
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("property")) || 0;
    getPropertyData(page);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
  };

  return (
   <>
  <SideFunction/>
  <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
      <div className="flex items-center justify-center bg-white w-full">
        <div className="p-6 overflow-scroll px-0 w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Image
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Name
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Price
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Address
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Type
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Area
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Bedrooms
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Bathrooms
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  Action
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {getAllProperties.length > 0 ? (
                getAllProperties.map((property, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.images && property.images.length > 0 ? (
                        <img
                          src={`${url}/image/${property.images[0]}`}
                          alt={`property-${index}`}
                          className="w-40 h-40 object-contain p-1"
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.title}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      ₹{property.price}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.description}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.type}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.size}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.bedrooms}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      {property.bathrooms}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <button
                        className="text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 p-2 rounded"
                        type="button"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-4 text-center">
                    No properties found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div class="flex items-center justify-center gap-8 mt-5">
            <button
              disabled={currentPage === 0}
              onClick={handlePrevPage}
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  ></path>
                </svg>
              </span>
            </button>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {`Page ${currentPage + 1} of
   ${totalPages}`}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div> 
   </>
  );
};

export default ViewProperty;
