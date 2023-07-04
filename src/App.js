import React, { useState } from "react";
import Header from "./Components/Layouts/Header";
import Form from "./Components/Form/Form";
import AvailabelShoes from "./Components/Products/AvailabelShoes";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

const App = () => {
  const [shoeDetails, setShoeDetails] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const addShoesHandler = (enteredShoeDetails) => {
    setShoeDetails([...shoeDetails, enteredShoeDetails]);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const removeShoeHandler = (id) => {
    // console.log(id);
    setShoeDetails(shoeDetails.filter((shoe) => shoe.id !== id));
  };
  // console.log(shoeDetails);
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Form onAddShoes={addShoesHandler} />
      <AvailabelShoes onRemoveShoe={removeShoeHandler} items={shoeDetails} />
    </CartProvider>
  );
};

export default App;
