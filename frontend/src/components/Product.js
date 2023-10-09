import React, { useState } from "react";
import image from "../assets/chatbot.jpg";
import ProductDetail from "../components/Product-detail";

const Product = () => {
  const [showDetail, setShowDetail] = useState(false);

  const productData = {
    name: "토끼 키링",
    price: "12,900원",
    description: "가볍고 귀여운 키링입니다.",
    image: image,
  };

  const handleDetailClick = () => {
    setShowDetail(true);
  };

  return (
    <div className="flex justify-evenly font-semibold">
      <div className="w-1/5 mx-auto mt-4 p-4 rounded-lg shadow-lg">
        <article className="bg-gray-100 p-4 rounded-lg">
          <header className="bg-blue-500 text-white text-2xl py-2 px-4 rounded-t-lg">
            <h1 className="font-semibold">{productData.name}</h1>
          </header>
          <div className="py-4">
            <img
              src={productData.image}
              alt="product"
              className="mx-auto rounded-lg w-max"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{productData.price}</h2>
            <p className="text-gray-700">{productData.description}</p>
          </div>
          <div className="text-center mt-4">
            <button
              className="px-6 py-2 btn btn-outline btn-primary"
              onClick={handleDetailClick}
            >
              Detail
            </button>
          </div>
        </article>
      </div>

      {showDetail && <ProductDetail productData={productData} />}
    </div>
  );
};

export default Product;
