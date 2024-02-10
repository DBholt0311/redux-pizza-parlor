import React from 'react';
import './PizzaListItem.css'; 


function PizzaListItem ({ pizza }) {

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
      </div>
      </div>
    );
}


export default PizzaListItem;
