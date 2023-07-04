import CartContext from "./Cart-context";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);
  const addItemToCartHandler = (item) => {
    const existingItem = items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = items.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
            price: cartItem.price + item.price,
            large: cartItem.large + item.large,
            medium: cartItem.medium + item.medium,
            small: cartItem.small + item.small,
          };
        }
        return cartItem;
      });

      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }

    setTotalAmount(totalAmount + item.price);
  };
  // console.log(items);
  // const removeItemFromCartHandler = (id) => {
  //   const existingItemIndex = items.findIndex((item) => item.id === id);
  //   const existingItem = items[existingItemIndex];
  //   console.log(existingItem);
  //   let updatedItems;
  //   if (existingItem.quantity === 1) {
  //     // If the quantity is 1, remove the item from the cart
  //     updatedItems = items.filter((item) => item.id !== id);
  //   } else {
  //     // If the quantity is greater than 1, decrease the quantity by one
  //     const updatedItem = {
  //       ...existingItem,
  //       quantity: existingItem.quantity - 1,
  //       price: existingItem.price - existingItem.price / existingItem.quantity,
  //     };
  //     updatedItems = [...items];
  //     updatedItems[existingItemIndex] = updatedItem;
  //   }
  //   const updatedTotalAmount = Math.abs(
  //     totalAmount - existingItem.price / existingItem.quantity
  //   );
  //   setItems(updatedItems);
  //   setTotalAmount(updatedTotalAmount);
  // };

  const clearCartHandler = () => {
    setItems([]);
    setTotalAmount(0);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
