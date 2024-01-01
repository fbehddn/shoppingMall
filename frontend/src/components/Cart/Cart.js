import React, { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const openCheckoutModalHandler = () => {
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModalHandler = () => {
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8 px-28">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      {cartCtx.items.length === 0 && <p>Your cart is empty.</p>}
      {cartCtx.items.length !== 0 && (
        <ul className="w-full">
          {cartCtx.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {cartCtx.items.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            총 결제 금액: {cartCtx.totalAmount.toLocaleString()}원
          </h2>
          <div className="flex justify-end gap-4">
            <button
              onClick={cartCtx.clearCart}
              className="btn btn-outline btn-warning"
            >
              Clear Cart
            </button>
            <button
              className="btn btn-neutral"
              onClick={openCheckoutModalHandler}
            >
              Checkout
            </button>

            {isCheckoutModalOpen && (
              <Modal onClose={closeCheckoutModalHandler}>
                <Checkout />
              </Modal>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
