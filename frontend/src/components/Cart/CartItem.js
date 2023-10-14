import React from "react";

const CartItem = (props) => {
  const productData = props.productData;

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-8 flex">
        <img
          src={productData.image}
          alt="product"
          className="w-28 h-28 rounded-lg mr-4"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">{productData.name}</h2>
          <p className="text-gray-700 mb-4">{productData.description}</p>
          <p className="text-gray-700 mb-4 hidden">{productData.amount}</p>
          <div className="text-indigo-600 text-xl font-semibold">
            {productData.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
