import React from "react";
import { useAuth } from "../../../context/auth";
// import userLogo from "../../assets/user01.png";
const User = () => {
  const [auth] = useAuth()

  //extract the first two letters from the admin name
  const adminInitial = auth?.user?.name ? auth.user.name.split(" ").map((name)=> name[0]).join("").substring(0,2) :"MU"
  return (
    <div className="flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300 ">
      <img src={`https://ui-avatars.com/api/?name=${adminInitial}&background=random&color=fff`} alt="user-image" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold text-2xl ">{auth?.user?.name}</h3>
        <p>{auth?.user?.email}</p>
      </div>
    </div>
  );
};

export default User;
