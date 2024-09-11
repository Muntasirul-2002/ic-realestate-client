import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";
import Spinner from "../components/Spinner";
import { axiosInstance, getConfig } from "../utils/ApiRequest";

export default function AdminRoute() {
  const [ok, setOk] = useState(false); // Local state for admin access
  const [auth] = useAuth(); // Destructure auth context
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    const authCheck = async () => {
      try {
        await getConfig()
        const res = await axiosInstance.get(`/api/v1/auth/admin-auth`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`, // Attach token to headers
          },
        });
        if (res.data.ok) {
          setOk(true);
        //   console.log("Auth successful: ", res.data);
        } else {
          setOk(false);
          navigate("/login");
        }
      } catch (error) {
        setOk(false);
        // console.log("You don't have permission to access", error);
        alert("You don't have permission to access");
        navigate("/login");
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> :  <Spinner path="" /> ;
}
 