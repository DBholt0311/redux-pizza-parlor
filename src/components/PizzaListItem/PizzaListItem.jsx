import React from 'react';


function PizzaListItem ({ pizza }) {

    return (
      <div>
        <div>
        <img src={pizza.image_path} alt={pizza.name} />
        <br />
          <b>{pizza.name}</b>
        <br />
        {pizza.description}
        <br />
        Price: {typeof pizza.price === 'number' ? `$${pizza.price.toFixed(2)}` : ''} {/* If pizza price is a number, set it to two decimal places after. Else an empty string */}
      </div>
      </div>
    );
}


export default PizzaListItem;
