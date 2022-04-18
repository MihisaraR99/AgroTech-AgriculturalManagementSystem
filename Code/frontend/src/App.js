import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin";

/*CareerManagement*/
import "./components/CareerManagement/Display.css";
import "./components/CareerManagement/Apply.css";
import "./components/CareerManagement/Add.css";
import "./components/CareerManagement/Admin.css";
import VacancyDisplay from "./components/CareerManagement/VacancyDisplay";
import GuidanceDisplay from "./components/CareerManagement/GuidanceDisplay";
import VacancyAdmin from "./components/CareerManagement/VacancyAdmin";
import GuidanceAdmin from "./components/CareerManagement/GuidanceAdmin";
import ApplyVacancy from "./components/CareerManagement/ApplyVacancy";
import ApplyGuidance from "./components/CareerManagement/ApplyGuidance";
import CandidateRegister from "./components/CareerManagement/CandidateRegister";
import AddNewVacancies from "./components/CareerManagement/AddNewVacancies";
import AddNewGuidance from "./components/CareerManagement/AddNewGuidance";
import CandidateAdmin from "./components/CareerManagement/CandidateAdmin";
import UpdateGuidance from "./components/CareerManagement/UpdateGuidance";
import UpdateVacancy from "./components/CareerManagement/UpdateVacancy";

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

        /*CareerManagement*/
        <Route path="/VacancyDisplay" element={<VacancyDisplay/>} />
        <Route path="/GuidanceDisplay" element={<GuidanceDisplay/>}/>
        <Route path="/VacancyAdmin" element={<VacancyAdmin/>}/>
        <Route path="/GuidanceAdmin" element={<GuidanceAdmin/>}/>
        <Route path="/ApplyVacancy" element={<ApplyVacancy/>}/>
        <Route path="/ApplyGuidance" element={<ApplyGuidance/>}/>
        <Route path="/CandidateRegister" element={<CandidateRegister/>}/>
        <Route path="/AddNewVacancies" element={<AddNewVacancies/>}/>
        <Route path="/AddNewGuidance" element={<AddNewGuidance/>}/>
        <Route path="/CandidateAdmin" element={<CandidateAdmin/>}/>
        <Route path="/UpdateGuidance/:id" element={<UpdateGuidance/>}/>
        <Route path="/UpdateVacancy/:id" element={<UpdateVacancy/>}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
