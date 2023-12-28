import React, { useContext, useState } from "react";

import CartItem from "./CartItem";
import Modal from "../Modal/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [cartItem, setCartItems] = useState([]);

  const totalAmount = `${cartCtx.totalAmount}원`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    setCartItems(cartCtx.items);
  };

  const cartItemAddHandler = (product) => {
    cartCtx.addItem(product);
    setCartItems(cartCtx.items);
  };

  const cartItems = (
    <ul>
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          image={item.iamge}
          name={item.name}
          amount={item.amount}
          content={item.content}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
    </>
  );

  return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
};

export default Cart;
