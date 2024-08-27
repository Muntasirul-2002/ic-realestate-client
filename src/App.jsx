import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer'
import AboutusPage from "./pages/AboutusPage";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import PropertyDetails from "./pages/PropertyDetails";
const App = () => {
  return (
    <>
    <ToastContainer/>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
