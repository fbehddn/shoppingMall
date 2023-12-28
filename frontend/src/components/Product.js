import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/chatbot.jpg";
import image2 from "../assets/dog.jpg";
import image3 from "../assets/quoka.png";

const productData = [
  {
    id: 1,
    name: "토끼 키링",
    price: "12,900원",
    description: "가볍고 귀여운 키링입니다.",
    image: image,
    amount: 1,
  },
  {
    id: 2,
    name: "강아지 인형",
    price: "14,900원",
    description: "사랑스러운 강아지 인형입니다.",
    image: image2,
    amount: 1,
  },
  {
    id: 3,
    name: "쿼카 인형",
    price: "25,000원",
    description: "나는 쿼카임둥",
    image: image3,
    amount: 1,
  },
];

const Product = () => {
  const navigate = useNavigate();

  const handleDetailClick = (product) => {
    navigate(`/product-detail/${product.id}`, {
      state: { productData: product },
    });
  };

  return (
    <div className="flex justify-center font-semibold">
      {productData.map((product) => (
        <div
          className="w-1/5 mx-auto mt-4 p-4 rounded-lg shadow-lg"
          key={product.id}
        >
          <article className="bg-gray-100 p-4 rounded-lg">
            <header className="bg-blue-500 text-white text-2xl py-2 px-4 rounded-t-lg">
              <h1 className="font-semibold">{product.name}</h1>
            </header>
            <div className="py-4">
              <img
                src={product.image}
                alt="product"
                className="mx-auto rounded-lg w-max"
              />
            </div>
            <div className="text-center mt-4">
              <button
                className="px-6 py-2 btn btn-outline btn-primary"
                onClick={() => handleDetailClick(product)}
              >
                Detail
              </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Product;
