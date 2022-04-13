import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/CareerManagement/Career.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin";
import VacancyDisplay from "./components/CareerManagement/VacancyDisplay";
import GuidanceDisplay from "./components/CareerManagement/GuidanceDisplay";
import VacancyAdmin from "./components/CareerManagement/VacancyAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/DisplayAd" element={<DisplayAd />} />
        <Route path="/AdverLogin" element={<AdvertiserLogin />} />
        <Route path="/VacancyDisplay" element={<VacancyDisplay/>} />
        <Route path="/GuidanceDisplay" element={<GuidanceDisplay/>}/>
        <Route path="/VacancyAdmin" element={<VacancyAdmin/>}/>
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
