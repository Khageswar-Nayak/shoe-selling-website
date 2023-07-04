import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  //console.log(props);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <i>{props.description}</i>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {props.large !== 0 && <button>L({props.large})</button>}
        {props.medium !== 0 && <button>M({props.medium})</button>}
        {props.small !== 0 && <button>S({props.small})</button>}
      </div>
    </li>
  );
};

export default CartItem;
