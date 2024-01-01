import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/chatbot.jpg";
import image2 from "../../assets/dog.jpg";
import image3 from "../../assets/quoka.png";

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
    <div className="flex justify-center items-center flex-wrap gap-4 m-10">
      {productData.map((product) => (
        <div
          className="w-72 bg-white rounded-lg overflow-hidden shadow-lg mx-auto transition duration-500 transform hover:scale-105"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
              onClick={() => handleDetailClick(product)}
            >
              Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
