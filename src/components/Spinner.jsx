import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({path = "login"}) => {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div>
      <div className="relative flex justify-center items-center m-10">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        />
      </div>
      <div className="flex justify-center mt-3">
        <h1 className="font-semibold text-xl">Oops! You Don't Have Access to admin panel</h1>
      </div>
      <div className="flex justify-center items-center">
          <p className="font-semi text-lg"> Redirecting to you in <span className="text-4xl font-bold text-violet-800 ms-3 mr-3">{count}</span> second </p>
      </div>
    </div>
  );
};

export default Spinner;
