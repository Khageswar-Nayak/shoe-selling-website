import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredShoeName, setEnteredShoeName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredLargeSize, setEnteredLargeSize] = useState("");
  const [enteredMediumSize, setEnteredMediumSize] = useState("");
  const [enteredSmallSize, setEnteredSmallSize] = useState("");

  const shoeNameChangeHandler = (event) => {
    setEnteredShoeName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const largeSizeChangeHandler = (event) => {
    setEnteredLargeSize(event.target.value);
  };

  const mediumSizeChangeHandler = (event) => {
    setEnteredMediumSize(event.target.value);
  };

  const smallSizeChangeHandler = (event) => {
    setEnteredSmallSize(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const shoeDetails = {
      name: enteredShoeName,
      description: enteredDescription,
      price: enteredPrice,
      large: enteredLargeSize,
      medium: enteredMediumSize,
      small: enteredSmallSize,
      id: Math.random().toString(),
    };
    props.onAddShoes(shoeDetails);

    setEnteredShoeName("");
    setEnteredDescription("");
    setEnteredPrice("");
    setEnteredLargeSize("");
    setEnteredMediumSize("");
    setEnteredSmallSize("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>
        <i>Add Shoes</i>
      </h2>

      <input
        type="text"
        value={enteredShoeName}
        onChange={shoeNameChangeHandler}
        placeholder="Enter Shoe Name"
      />

      <input
        type="text"
        value={enteredDescription}
        onChange={descriptionChangeHandler}
        placeholder="Enter Description"
      />

      <input
        type="number"
        value={enteredPrice}
        onChange={priceChangeHandler}
        placeholder="Enter Price"
      />
      <br />
      <h3>Enter Quantity Of Availabel Shoes</h3>

      <input
        type="number"
        value={enteredLargeSize}
        onChange={largeSizeChangeHandler}
        placeholder="Large Size"
      />

      <input
        type="number"
        value={enteredMediumSize}
        onChange={mediumSizeChangeHandler}
        placeholder="Medium Size"
      />

      <input
        type="number"
        value={enteredSmallSize}
        onChange={smallSizeChangeHandler}
        placeholder="Small Size"
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
