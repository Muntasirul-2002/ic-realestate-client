import React from "react";

import Card from "./Card";
import Balance from "./Balance";
const Stats = ({ darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-4 h-full">
        <Card />
      </div>
      <Balance darkMode={darkMode} />
    </div>
  );
};

export default Stats;
