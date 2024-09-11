import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosPerson, IoIosPersonAdd } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { axiosInstance, getConfig } from "../../../utils/ApiRequest";
const Card = ({url}) => {
  const [totalAgents, setTotalAgents] = useState(0);
  const [propertyCount, setPropertyCount] = useState(0);
  
  // get agents count
  const getAgentCount = async () => {
    try {
      await getConfig()
      const response = await axiosInstance.get(`/api/v1/auth/admin-details`);
      if (response.data && response.data.success) {
        setTotalAgents(response.data.getAdminCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //get properties count
  const getPropertiesCount = async () => {
    try {
      await getConfig()
      const response = await axiosInstance.get(`/api/v1/property/view-property`);
      if (response.data && response.data.success) {
        setPropertyCount(response.data.totalProperties);
        console.log(response.data);
      }
    } catch (error) {
      console.log("error in getting total properties: ", error);
    }
  };

  useEffect(() => {
    getAgentCount();
    getPropertiesCount();
  }, []);
  return (
    <>
      <div className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-400">
        <span className="bg-gray-200 px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500">
          <IoIosPerson />
        </span>
        <div>
          <h2 className="text-xl">
            <span className="text-2xl font-bold">{totalAgents}</span>/
            {totalAgents}
          </h2>
          <p className="font-bold">Total Agents</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-400">
        <span className=" bg-violet-300 px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500">
          <MdOutlineMapsHomeWork />
        </span>
        <div>
          <h2 className="text-xl">
            <span className="text-2xl font-bold">{propertyCount}</span>/
            {propertyCount}
          </h2>
          <p className="font-bold">Total Properties</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-400">
        <span
          className={`bg-violet-400 px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500`}
        >
          <IoIosPersonAdd />
        </span>
        <div>
          <h2 className="text-xl">
            <span className="text-2xl font-bold">{totalAgents}</span>/
            {totalAgents}
          </h2>
          <p className="font-bold">Total Admins</p>
        </div>
      </div>
    </>
  );
};

export default Card;
