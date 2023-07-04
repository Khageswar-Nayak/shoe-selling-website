import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  // const cartItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(id);
  // };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      quantity: 1,
      price: item.price / item.quantity,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          price={item.price}
          large={item.large}
          medium={item.medium}
          small={item.small}
          // onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button
            className={classes.button}
            onClick={() => cartCtx.clearCart()}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
