import React from "react";
import { useAuth } from "../../../context/auth";

const Member = ({ agent }) => {
  const [auth] = useAuth()
  const agentInitial = auth?.user?.name ? auth.user.name.split(" ").map((name)=> name[0]).join("").substring(0,2) : "MU"
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={`https://ui-avatars.com/api/?name=${agentInitial}&background=random&color=fff`}
          alt={agent.name}
          className="w-12 h012 rounded-full flex ring-2 ring-violet-300 dark:ring-violet-500"
        />
        <div >
          <h2 className="font-bold">{agent.name}</h2>
          <span className="font-semibold text-gray-400 text-sm">{agent.address}</span>
        </div>
      </div>
      <span className={`bg-violet-400 uppercase p-3 rounded-full text-sm text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}>
        
        {agent.role}
      </span>
    </div>
  );
};

export default Member;
