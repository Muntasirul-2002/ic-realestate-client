import React, { useEffect, useState } from "react";
import axios from "axios";
import SideFunction from "../components/SideFunction";
import { axiosInstance, getConfig } from "../../utils/ApiRequest";

const Agents = () => {
  const [getAgents, setGetAgents] = useState([]);

  const getAllAgents = async () => {
    try {
      await getConfig()
      const response = await axiosInstance.get(`/api/v1/auth/admin-details`);
      if (response.data && response.data.success) {
        setGetAgents(response.data.getAdmin);
        console.log("All Agents: ", response.data);
      }
    } catch (error) {
      console.log("Error in getting agents: ", error);
    }
  };

  useEffect(() => {
    getAllAgents();
  }, []);

  return (
   <>
   <SideFunction/>
   <div className="text-gray-500 bg-white p-4 sm:ml-64 flex justify-center items-center gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Agent Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Join
              </th>
            </tr>
          </thead>
          <tbody>
            {getAgents.length > 0 ? (
              getAgents.map((agent, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {agent.name}
                  </th>
                  <td className="px-6 py-4">{agent.mobile}</td>
                  <td className="px-6 py-4">{agent.email}</td>
                  <td className="px-6 py-4">{agent.address}</td>
                  <td className="px-6 py-4">{agent.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                  Agents details not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
   </>
  );
};

export default Agents;
