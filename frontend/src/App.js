import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Product-detail";
import HomePage from "./page/Home";
import RootLayout from "./page/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/product", element: <Product /> },
      { path: "/product-detail/:productId", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
