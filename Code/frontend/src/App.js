import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import Addevent from "./components/Events/Addevent";
import Eventshome from "./components/Events/Eventshome";
import EventAdmin from "./components/Events/EventAdmin";
import Eventdetail from "./components/Events/Eventdetail";
import UpdateEvent from "./components/Events/UpdateEvent";
import RegisterEvent from "./components/Events/RegisterEvent";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      
        <Route path="/" element={<AllServices />} />
        <Route path="/events/add" element={<Addevent />}  /> 
        <Route path="/events/home" element={<Eventshome />} />
        <Route path="/events/admin" element={<EventAdmin/>} />
        <Route path="/events/detail"element={<Eventdetail/>}/>
        <Route path="/events/update/:id"element={<UpdateEvent/>}/>
        <Route path="/events/register" element={<RegisterEvent/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
