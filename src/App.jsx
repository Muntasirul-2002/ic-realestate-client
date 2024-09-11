import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//client side components
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutusPage from "./pages/AboutusPage";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./components/auth/Login";

//dashboard components
import AdminRoute from "./Routes/AdminRoute";
import AddProperty from "./dashboard/pages/AddProperty";
import ViewProperty from "./dashboard/pages/ViewProperty";
import EditProfile from "./dashboard/pages/EditProfile";
import AddAgents from "./dashboard/pages/AddAgents";
import Agents from "./dashboard/pages/Agents";
import Home from "./dashboard/pages/Home";
import Spinner from "./components/Spinner";
import TodoList from "./dashboard/components/ShortCutsPages/TodoList";
import Calendar from "./dashboard/components/ShortCutsPages/Calendar";
import AdminLoggedInProfile from "./dashboard/components/ShortCutsPages/AdminLoggedInProfile";
import Calculator from "./dashboard/components/ShortCutsPages/Calculator";

const App = () => {
  const url = "https://ic-realestate-server.onrender.com";
  const location = useLocation();
  //check if the current path includes '/dashboard'
  const isDashboard = location.pathname.includes("/dashboard");
  return (
    <>
    {/* Render Header only if it's not an admin dashboard route */}
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<HomePage url={url} />} />
        <Route path="/login" element={<Login url={url} />} />
        <Route path="/about" element={<AboutusPage url={url} />} />
        <Route path="/services" element={<ServicesPage url={url} />} />
        <Route path="/property/*" element={<PropertiesPage url={url} />} />
        <Route path="/property/:slug" element={<PropertyDetails url={url} />} />
        <Route path="/contact" element={<ContactPage url={url} />} />
        <Route path="/spinner" element={<Spinner />} />
      

        <Route path="/dashboard" element={<AdminRoute url={url} />}>
          <Route path="admin" element={<Home url={url} />} />
          <Route path="admin/add-property" element={<AddProperty url={url} />} />
          <Route path="admin/view-property" element={<ViewProperty url={url} />} />
          <Route path="admin/edit-profile" element={<EditProfile url={url} />} />
          <Route path="admin/add-agent" element={<AddAgents url={url} />} />
          <Route path="admin/agents" element={<Agents url={url} />} />
          <Route path="admin/todo" element={<TodoList url={url}/>}  /> 
          <Route path="admin/calender" element={<Calendar url={url}/>}  /> 
          <Route path="admin/profile" element={<AdminLoggedInProfile url={url}/>}  /> 
          <Route path="admin/calculator" element={<Calculator url={url}/>}  /> 
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

export default App;
