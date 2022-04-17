import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

//IT20612696 Senanayake D.B
import AddReport     from "./components/labComponent/AddReport";
import AllReports    from "./components/labComponent/AllReports";
import EditReport    from "./components/labComponent/EditReport";
import ReportDetails from "./components/labComponent/ReportDetails";
import UserAllReports from "./components/labComponent/UserAllReports"
import UserReportDetails from "./components/labComponent/UserReportDetails";
 

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes> 
        <Route path="/rep"      element= {<AllReports/>}    />
        <Route path="/add"      element= {<AddReport/>}     />
        <Route path="/edit/:id" element= {<EditReport/>}    />
        <Route path="/rep/:id"  element= {<ReportDetails/>} />
        <Route path="/"         element= {<AllServices/>}   />
        <Route path="/Ulabs"    element = {<UserAllReports/>}   /> 
        <Route path="/URepDet/:id"    element = {<UserReportDetails/>}   /> 
       
      </Routes>
      <Footer/>
 
    </BrowserRouter>
  );
}

export default App;
