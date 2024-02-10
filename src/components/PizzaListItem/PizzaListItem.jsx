import React from 'react';
import './PizzaListItem.css';
import { useState } from 'react';


function PizzaListItem ({ pizza }) {
  const [inCart, setInCart] = useState([]);

  const addToCart = (event) => {
    console.log('Adding pizza To Cart:', pizza);
    setInCart([...inCart, pizza.id]);//setting cart to original array plus new pizza
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
        <button onClick={addToCart}>Add</button>
        </center>
      </div>
      </div>
    );
}


export default PizzaListItem;
