import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./components/HealthCare/Health.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import AddAppointments from "./components/HealthCare/AddAppointments";
import AllappointmentsVet from  "./components/HealthCare/AllappointmentsVet";
import AllappointmentsManager from "./components/HealthCare/AllappointmentsManager";
import UpdateAppointmentManager from "./components/HealthCare/UpdateAppointmentManager";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/Appointments" element= {<AddAppointments/>}/>
        <Route path="/HVet" element= {<AllappointmentsVet/>}/>
        <Route path="/HManager" element= {<AllappointmentsManager/>}/>
        <Route path="/HMUpdate" element= {<UpdateAppointmentManager/>}/>
       
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
