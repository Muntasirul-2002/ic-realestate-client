import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import PopularAreas from "../sections/PopularAreas";
import Properties from "../sections/Properties";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import Contact from "../sections/Contact";


const HomePage = () => {
  const url = "http://localhost:8080"
  return (
    <div>
      <Hero url={url}/>
      <About url={url} />
      <PopularAreas  url={url}/>
      <Properties url={url} />
      <Services url={url} />
      <Clients url={url} />
      <Contact url={url} />
      
    </div>
  );
};

export default HomePage;
