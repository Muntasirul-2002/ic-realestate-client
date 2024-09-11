import React, { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

const SideFunction = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div className="font-outfit">
      <ToastContainer />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebar={isSidebar} />
    </div>
  );
};

export default SideFunction;
