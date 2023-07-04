import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ShoeImage from "../../assets/th.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <h1>ReactMeals</h1> */}
        <img src={ShoeImage} alt="shoe logo" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://arktura.com/wp-content/uploads/2020/05/Arktura-Vapor-Trail-Feature-Shoe-Store-Las-VegasNV_Web_2-1-1600x1078.jpg"
          alt="A shoe shop"
        />
      </div>
    </Fragment>
  );
};

export default Header;
