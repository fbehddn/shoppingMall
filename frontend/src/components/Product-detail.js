import React from "react";

const ProductDetail = (props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img
          src={props.productData.image}
          alt="product"
          className="mx-auto rounded-lg w-1/2"
        />
        <h1 className="text-2xl font-semibold mt-4">
          {props.productData.name}
        </h1>
        <h2 className="text-xl font-semibold mt-2">
          {props.productData.price}
        </h2>
        <p className="text-gray-700 mt-2">{props.productData.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
