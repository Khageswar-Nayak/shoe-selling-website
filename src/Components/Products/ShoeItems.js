import React, { useContext, useState } from "react";
import classes from "./ShoeItems.module.css";
import CartContext from "../Store/Cart-context";

const ShoeItems = (props) => {
  const [large, setLarge] = useState(Number(props.large));
  const [medium, setMedium] = useState(Number(props.medium));
  const [small, setSmall] = useState(Number(props.small));
  const cartCtx = useContext(CartContext);

  const quantity = 1;
  const largeAddToCartHandler = () => {
    setLarge(large - 1);

    cartCtx.addItem({
      ...props,
      quantity: quantity,
      price: props.price * quantity,
      large: 1,
      small: 0,
      medium: 0,
    });
  };

  const mediumAaddToCartHandler = () => {
    setMedium(medium - 1);
    cartCtx.addItem({
      ...props,
      quantity: quantity,
      price: props.price * quantity,
      large: 0,
      small: 0,
      medium: 1,
    });
  };

  const smallAddToCartHandler = () => {
    setSmall(small - 1);
    cartCtx.addItem({
      ...props,
      quantity: quantity,
      price: props.price * quantity,
      large: 0,
      small: 1,
      medium: 0,
    });
  };
  // console.log(cartCtx);

  if (large === 0 && medium === 0 && small === 0) {
    props.onRemoveShoe(props.id);
  }

  return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>

      <div>
        {large !== 0 && (
          <button onClick={largeAddToCartHandler}>Large Size ({large})</button>
        )}

        {medium !== 0 && (
          <button onClick={mediumAaddToCartHandler}>
            Medium Size ({medium})
          </button>
        )}

        {small !== 0 && (
          <button onClick={smallAddToCartHandler}>Small Size ({small})</button>
        )}
      </div>
    </li>
  );
};

export default ShoeItems;
