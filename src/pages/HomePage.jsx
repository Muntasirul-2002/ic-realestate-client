import React from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import PopularAreas from "../sections/PopularAreas";
import Properties from "../sections/Properties";
import Services from "../sections/Services";

import Clients from "../sections/Clients";
import Contact from "../sections/Contact";


const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <PopularAreas />
      <Properties />
      <Services />
      <Clients />
      <Contact />
      
    </div>
  );
};

export default HomePage;
