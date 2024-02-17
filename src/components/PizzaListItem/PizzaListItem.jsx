import React from 'react';
import './PizzaListItem.css';

function PizzaListItem({ pizza, addToCart, removeFromCart, inCart }) {
  // Removed original functions and imported them into PizzaList Component to add all items versus each item

  return (
    <div className="pizzaContainer">
      <div>
        <img src={pizza.image_path} alt={pizza.name} />
        <br />
        <b>{pizza.name}</b>
        <div className="pizzaInfo">
          {pizza.description}
          <p className="price">Price: {pizza.price} </p>
        </div>
        <center>
          <span
            className="cartToggle"
            onClick={() => (inCart ? removeFromCart(pizza) : addToCart(pizza))}
          >
            {inCart ? 'Remove' : 'Add'}
          </span>
        </center>
      </div>
    </div>
  );
}

export default PizzaListItem;
