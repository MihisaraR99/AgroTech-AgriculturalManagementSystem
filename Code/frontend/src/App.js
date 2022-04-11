import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

// Store Components
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";
import StoreOrderForm from "./components/Store/StoreOrderForm";
import StoreAddProductForm from "./components/Store/StoreAddProductForm";

// Products Components
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";

// Ads Components
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin"
import AdminViewAds from "./components/Ads/AdminViewAds";
import AdminUpdateAds from "./components/Ads/AdminUpdateAds"

// Lab Components
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
        <Route path="/" element={<AllServices />} />

        {/* Store Routes */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/product/:id"
          element={<StoreProductsDetails />}
        />
        <Route
          path="/store/order/store-order-create"
          element={<StoreOrderForm />}
        />
        <Route
          path="/store/product/add-product"
          element={<StoreAddProductForm />}
        />
          
        <Route path="/add" element= {<AddProduct/>}/>
        <Route path="/productSee" element= {<AllProducts/>}/>
        <Route path="/company" element= {<CompanyRequest/>}/>
          {/* Ads Routes */}
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/DisplayAd" element={<DisplayAd />} />
        <Route path="/AdverLogin" element={<AdvertiserLogin />} />
        <Route path="/AdminView" element={<AdminViewAds />} />
        <Route path="/AdminUpdate" element={<AdminUpdateAds />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
