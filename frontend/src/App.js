import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/Product-detail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
