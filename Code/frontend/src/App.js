import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin"
import AdminViewAds from "./components/Ads/AdminViewAds";

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
        <Route path="/AdminView" element={<AdminViewAds />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
