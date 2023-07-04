import React from "react";
import classes from "./AvailabelShoes.module.css";
import Card from "../UI/Card";
import ShoeItems from "./ShoeItems";

const AvailabelShoes = (props) => {
  // console.log(props.items);
  const shoesList = props.items.map((shoe) => (
    <ShoeItems
      key={shoe.id}
      id={shoe.id}
      name={shoe.name}
      description={shoe.description}
      price={shoe.price}
      large={shoe.large}
      medium={shoe.medium}
      small={shoe.small}
      onRemoveShoe={props.onRemoveShoe}
    />
  ));

  return (
    <section className={classes.shoes}>
      <Card>
        <h2>Availabel Shoes</h2>
        <ul>{shoesList}</ul>
      </Card>
    </section>
  );
};

export default AvailabelShoes;
