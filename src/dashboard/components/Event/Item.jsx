import React from "react";

const Item = ({ e }) => {
  return (
    <div className="flex gap-5 items-center">
      <span className="bg-gray-500 text-gray-800 p-2 rounded-lg h-16 w-16 font-bold text-center">
        {e.date}
      </span>
      <div>
        <h1 className="text-xl font-bold">{e.title}</h1>
        <p className="text-gray-400">{e.description}</p>
      </div>
    </div>
  );
};

export default Item;
