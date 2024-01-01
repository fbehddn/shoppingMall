import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { id, name, price, amount, image } = props.item;

  const removeItemHandler = () => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = () => {
    cartCtx.addItem({ ...props.item, amount: 1 });
  };

  return (
    <li className="flex items-center justify-between w-full border-b border-gray-300 py-2">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover mr-4 rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            <p className="text-gray-600 mr-2">{price}</p>
            <p className="text-gray-500">x {amount}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={removeItemHandler}
          className="btn btn-error btn-sm mr-2"
        >
          Remove
        </button>
        <button onClick={addItemHandler} className="btn btn-info btn-sm">
          Add
        </button>
      </div>
    </li>
  );
};

export default CartItem;
