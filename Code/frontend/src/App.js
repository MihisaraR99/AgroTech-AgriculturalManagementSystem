import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

//IT20612696 Senanayake D.B
import AddReport     from "./components/AddReport";
import AllReports    from "./components/AllReports";
import DeleteReport  from "./components/DeleteReport";
import EditReport    from "./components/EditReport";
import ReportDetails from "./components/ReportDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/rep"      element= {<AllReports/>}    />
        <Route path="/add"      element= {<AddReport/>}     />
        <Route path="/del"      element= {<DeleteReport/>}  />
        <Route path="/edit/:id" element= {<EditReport/>}    />
        <Route path="/rep/:id"  element= {<ReportDetails/>} />
        <Route path="/"         element= {<AllServices/>}   />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
