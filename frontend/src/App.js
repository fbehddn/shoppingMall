import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./page/Product";
import CartPage from "./page/Cart";
import ProductDetailPage from "./page/ProductDetail";
import HomePage from "./page/Home";
import RootLayout from "./page/Root";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product-detail/:productId", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
