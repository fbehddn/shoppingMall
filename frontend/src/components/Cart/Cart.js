import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

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
            Total Amount: {cartCtx.totalAmount.toLocaleString()}원
          </h2>
          <div className="flex justify-end">
            <button
              onClick={cartCtx.clearCart}
              className="btn btn-outline btn-warning"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
