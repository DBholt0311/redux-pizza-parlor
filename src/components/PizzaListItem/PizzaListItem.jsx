import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./PizzaListItem.css";

function PizzaListItem({ pizza, addToCart, removeFromCart, inCart }) {
  // Removed original functions and imported them into PizzaList Component to add all items versus each item

  // I added this to the code because to make the post call the way they wrote it in the order.router.js,
  // we needed a quantity data to be able to complete that post call correctly.  I dont know if this is the best
  // way to write this, because it makes my post call run correctly and fully, however Luann's add and remove
  // functionality seems to have been take out.  it only seems to add now,  if you guys would like to take a look to see if it can be written
  // a different way to have that add and remove functionality come back that would be awesome

  const makePizza = (pizza) => {
    let newPizza = {
      ...pizza,
      quantity: 1,
    };
    console.log("here", newPizza);
    addToCart(newPizza);
  };

  return (
    <div className="pizzaContainer">
      <Box>
        <img src={pizza.image_path} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        {pizza.description}
        <p className="price">Price: {pizza.price} </p>
        <Button
          className="cartToggle"
          onClick={() => (inCart ? removeFromCart(pizza) : makePizza(pizza))}
        >
          {inCart ? "Remove" : "Add"}
        </Button>
      </Box>
    </div>
  );
}

export default PizzaListItem;
