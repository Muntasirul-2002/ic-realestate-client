import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer'
import AboutusPage from "./pages/AboutusPage";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

import PropertyDetails from "./pages/PropertyDetails";
import Login from "./components/auth/Login";

const App = () => {
  const url = "http://localhost:8080"
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage url={url} />} />
        <Route path="/login" element={<Login url={url} />} />
       
        <Route path="/about" element={<AboutusPage url={url} />} />
        <Route path="/services" element={<ServicesPage url={url} />}/>
        <Route path="/property/*" element={<PropertiesPage url={url} />} />
        <Route path="/property/:slug" element={<PropertyDetails url={url} />} />
        <Route path="/contact" element={<ContactPage url={url} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
