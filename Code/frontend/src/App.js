import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "./App.css";
import "./components/educationComponents/Educationstyle.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import Courseadmin from "./components/educationComponents/Courseadmin";
import Coursehome from "./components/educationComponents/Coursehome";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/courseadmin" element={<Courseadmin />} />
        <Route path="/coursehome" element={<Coursehome />} />
       

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
