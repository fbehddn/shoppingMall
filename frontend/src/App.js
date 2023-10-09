import React from "react";
// import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
// import ProductDetail from "./components/Product-detail";

const App = () => {
  return (
    <>
      <Navbar />
      <Product />
      {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
    </>
  );
};

export default App;
