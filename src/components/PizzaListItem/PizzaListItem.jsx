import React from 'react';
import './PizzaListItem.css';
import { useState } from 'react';


function PizzaListItem ({ pizza }) {
  const [inCart, setInCart] = useState([]);

  const addToCart = (event) => {
    console.log('Adding pizza To Cart:', pizza);
    setInCart([...inCart, pizza.id]);
};

const removeFromCart = () => {
  console.log('Removing pizza from cart:', pizza);
  setInCart(prevCart => prevCart.filter(itemId => itemId !== pizza.id));
};

const toggleCart = () => {
  if (inCart.includes(pizza.id)) {
    removeFromCart();
  } else {
    addToCart();
  }
};



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
        <span className="cartToggle" onClick={toggleCart}>
            {inCart.includes(pizza.id) ? 'Remove' : 'Add'}
        </span>
        </center>
      </div>
      </div>
    );
}


export default PizzaListItem;
