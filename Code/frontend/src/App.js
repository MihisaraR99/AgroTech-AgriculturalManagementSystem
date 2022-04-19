import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "./App.css";
import "./components/educationComponents/Educationstyle.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import Courseadmin from "./components/educationComponents/Courseadmin";
import Coursehome from "./components/educationComponents/Coursehome";
import Courseinsert from "./components/educationComponents/Courseinsert";
import Test from "./components/educationComponents/Test";
import Updatecourse from "./components/educationComponents/Updatecourse";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/courseadmin" element={<Courseadmin />} />
        <Route path="/coursehome" element={<Coursehome />} />
        <Route path="/courseinsert" element={<Courseinsert />} />
        <Route path="/test" element={<Test />} />
        <Route path="/updatecourse/:id" element={<Updatecourse/>} />

   

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
