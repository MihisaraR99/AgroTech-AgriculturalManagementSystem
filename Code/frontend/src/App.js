import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllServices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
