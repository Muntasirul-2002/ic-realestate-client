import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult("");
  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <input
          className="w-full p-4 text-right text-2xl border-b border-gray-300 bg-gray-100"
          type="text"
          value={result}
          disabled
        />
        <div className="grid grid-cols-4 gap-2 p-4">
          <button
            className="col-span-2 p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            onClick={clear}
          >
            AC
          </button>
          <button
            className="p-4 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400"
            onClick={deleteEl}
          >
            DE
          </button>
          <button
            id="/"
            className="p-4 bg-violet-300 text-black rounded-lg shadow-md hover:bg-orange-600"
            onClick={handleClick}
          >
            /
          </button>
          <button
            id="7"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            7
          </button>
          <button
            id="8"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            8
          </button>
          <button
            id="9"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            9
          </button>
          <button
            id="*"
            className="p-4 bg-violet-300 text-black rounded-lg shadow-md hover:bg-orange-600"
            onClick={handleClick}
          >
            *
          </button>
          <button
            id="4"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            4
          </button>
          <button
            id="5"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            5
          </button>
          <button
            id="6"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            6
          </button>
          <button
            id="-"
            className="p-4 bg-violet-300 text-black rounded-lg shadow-md hover:bg-orange-600"
            onClick={handleClick}
          >
            -
          </button>
          <button
            id="1"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            1
          </button>
          <button
            id="2"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            2
          </button>
          <button
            id="3"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            3
          </button>
          <button
            id="+"
            className="p-4 bg-violet-300 text-black rounded-lg shadow-md hover:bg-orange-600"
            onClick={handleClick}
          >
            +
          </button>
          <button
            id="00"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            00
          </button>
          <button
            id="0"
            className="p-4 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            onClick={handleClick}
          >
            0
          </button>
          <button
            id="="
            className="col-span-2 p-4 bg-violet-500 font-bold text-black rounded-lg shadow-md hover:bg-blue-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
      <div className="mt-4">
            <Link to={"/dashboard/admin"}>
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-violet-200 rounded-lg border border-none hover:bg-violet-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {" "}
                👈🏽 Dashboard
              </button>
            </Link>
          </div>
    </div>
  );
};

export default Calculator;
