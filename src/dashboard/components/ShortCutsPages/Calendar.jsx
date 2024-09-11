import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../../utils/Calender";
import cn from "../../../utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Calendar = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center max-w-4xl mx-auto m-10">
        {/* Calendar Section */}
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg md:text-xl">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex items-center gap-6">
              <GrFormPrevious
                className="w-6 h-6 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setToday(today.month(today.month() - 1))}
              />
              <h1
                className="cursor-pointer text-sm md:text-base hover:scale-105 transition-all"
                onClick={() => setToday(currentDate)}
              >
                Today
              </h1>
              <GrFormNext
                className="w-6 h-6 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setToday(today.month(today.month() + 1))}
              />
            </div>
          </div>

          {/* Days of the Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map((day, index) => (
              <h1
                key={index}
                className="text-xs md:text-sm text-center text-gray-500 select-none"
              >
                {day}
              </h1>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 gap-1">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div key={index} className="p-2 text-center">
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-violet-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-violet-300 hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => setSelectDate(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="w-full max-w-md">
          <h1 className="font-semibold text-lg md:text-xl flex justify-center items-center mb-2">
            {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400 text-sm md:text-base flex justify-center items-center">
            No meetings for today.
          </p>
          <div className="flex justify-center items-center mt-6">
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
      </div>
    </div>
  );
};

export default Calendar;
