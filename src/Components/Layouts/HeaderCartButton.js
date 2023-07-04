import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../Store/Cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + Number(item.quantity);
  // }, 0);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  // console.log(cartCtx.items);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
