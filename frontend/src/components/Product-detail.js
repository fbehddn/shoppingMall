import React from "react";
import { useLocation, Link } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const productData = location.state.productData;

  return (
    <div className="flex justify-center items-center h-full font-semibold">
      <div className="container mx-auto p-4 flex items-center">
        <div className="w-1/2 rounded-lg border-2 border-indigo-600">
          <img
            src={productData.image}
            alt="product"
            className="mx-auto rounded-lg my-auto"
          />
        </div>
        <div className="w-1/2 ml-40">
          <h1 className="text-6xl mb-10">{productData.name}</h1>
          <h2 className="text-4xl mt-2 mb-10">{productData.price}</h2>
          <p className="mt-2 text-xl">{productData.description}</p>
          <Link
            to="/cart"
            state={{ productData: productData }}
            className="mt-4 px-6 py-2 btn btn-outline btn-primary"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
