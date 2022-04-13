import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import AddAppointments from "./components/HealthCare/AddAppointments";
import Allappointments from  "./components/HealthCare/Allappointments";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/Appointments" element= {<AddAppointments/>}/>
        <Route path="/AllAppointment" element= {<Allappointments/>}/>
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
