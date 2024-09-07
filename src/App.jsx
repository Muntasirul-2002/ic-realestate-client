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
  return (
    <>
    
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
       
        <Route path="/about" element={<AboutusPage/>} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/property/*" element={<PropertiesPage/>} />
        <Route path="/property/:slug" element={<PropertyDetails/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
