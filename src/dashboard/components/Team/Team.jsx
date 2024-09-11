import React, { useEffect, useState } from "react";
import Title from "../../ui/Title";

import Member from "./Member";
import axios from "axios";
import { axiosInstance, getConfig } from "../../../utils/ApiRequest";
const Team = () => {
  const [getAgents, setGetAgents] = useState([]);

  const getAllAgents = async () => {
    try {
      await getConfig()
      const response = await axiosInstance.get(`/api/v1/auth/admin-details`);
      if (response.data && response.data.success) {
        setGetAgents(response.data.getAdmin);
        console.log(response.data)
      }
    } catch (error) {
      console.log("Error in getting teams: ", error);
    }
  };

  useEffect(() => {
    getAllAgents();
  }, []);
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Team</Title>
      {getAgents.slice(0,5).map((agent, index) => (
        <Member key={index} agent={agent} />
      ))}
    </div>
  );
};

export default Team;
