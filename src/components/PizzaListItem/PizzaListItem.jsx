import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './PizzaListitem.css';

function PizzaListItem({ pizza, addToCart, removeFromCart, inCart }) {
  // Removed original functions and imported them into PizzaList Component to add all items versus each item

  return (
    <div className="pizzaContainer">
      <Box>
        <img src={pizza.image_path} alt={pizza.name} />
        <h3 className="pizzaName">{pizza.name}</h3>
        <p className="pizzaInfo">{pizza.description}</p>
        <p className="price">Price: {pizza.price} </p>
        <Button
          className="cartToggle"
          onClick={() => (inCart ? removeFromCart(pizza) : addToCart(pizza))}
        >
          {inCart ? 'Remove' : 'Add'}
        </Button>
      </Box>
    </div>
  );
}

export default PizzaListItem;
