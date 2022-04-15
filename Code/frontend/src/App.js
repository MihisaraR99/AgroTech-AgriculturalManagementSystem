import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";
import AllCompanyRequest from "./components/Product/User_Company/AllCompanyRequest";
import UpdateProducts from "./components/Product/Product_Manager/UpdateProducts";
import StockDetails from "./components/Product/Product_Manager/StockDetails";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/add" element= {<AddProduct/>}/>
        <Route path="/productSee" element= {<AllProducts/>}/>
        <Route path="/company" element= {<CompanyRequest/>}/>
        <Route path="/companySee" element= {<AllCompanyRequest/>}/>
        <Route path="/productUpdate/:id" element= {<UpdateProducts/>}/>
        <Route path="/stock" element= {<StockDetails/>}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
