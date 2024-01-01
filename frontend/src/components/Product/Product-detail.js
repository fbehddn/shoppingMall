import React, { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

const ProductDetail = () => {
  const location = useLocation();
  const productData = location.state.productData;
  const cartCtx = useContext(CartContext);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const addToCartHandler = () => {
    cartCtx.addItem({ ...productData, amount: 1 });
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 1000);
  };

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
            <button
              onClick={addToCartHandler}
              className="px-6 py-2 bg-blue-500 text-white rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="ml-4 px-6 py-2 bg-gray-500 text-white rounded-md inline-block hover:bg-gray-600 transition duration-300"
            >
              Go to Cart
            </Link>
            {isProductAdded && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>상품이 장바구니에 추가되었습니다.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
