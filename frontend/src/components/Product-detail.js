import React from "react";
import { useLocation, Link } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const productData = location.state.productData;

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={productData.image}
              alt="product"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl mb-4 font-bold">{productData.name}</h1>
            <h2 className="text-2xl mb-4 font-semibold">{productData.price}</h2>
            <p className="text-lg mb-6">{productData.description}</p>
            <Link
              to="/cart"
              state={{ productData: productData }}
              className="px-6 py-2 bg-blue-500 text-white rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
