import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />

        {/* Store Routes */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/:category/:id"
          element={<StoreProductsDetails />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
