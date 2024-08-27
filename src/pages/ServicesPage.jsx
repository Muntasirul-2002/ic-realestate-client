import React from 'react'
import services from '../assets/images/services.jpg'

import { useDarkMode } from '../components/DarkModeContext';
import {service} from '../data/export'
const ServicesPage = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section
        id="hero"
        className="w-[100%] h-[400px] m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: `url(${services})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
        >
          Our <span className="text-violet-600">Services</span>
        </h1>
        <p data-aos="zoom-in" className="text-white text-xl lg:pr-[500px] pr-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
          nobis iusto quo consequuntur eaque cupiditate cumque cum provident
          fuga?
        </p>
      </section>
      <div>
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-white"
        } lg:w-[100%] w-full h-full m-auto flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-violet-500 dark:text-white">
            Our Services
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            We provide best real estate services
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-5 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-violet-700 hover:bg-violet-400 cursor-pointer"
              data-aos-delay="200"
            >
              <div className="p-6 rounded-full bg-violet-200">
                <item.icon className="text-violet-500 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
              <h1 className="text-black text-[22px] font-semibold dark:text-white">
                {item.title}
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                {item.desc}
              </p>
              <button className="border-b-2 border-violet-600 text-violet-600 font-semibold dark:text-white ">Read more..</button>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
    </div>
  )
}

export default ServicesPage