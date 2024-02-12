import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Checkout() {
  const history = useHistory();
  const customerInfo = useSelector((state) => state.customerInfo);
  const pizza = useSelector((state) => state.pizza);

  const handleCompleteOrder = (event) => {
    // event.preventDefault();

    history.push('/');
  };

  return (
    <div className="Checkout">
      <header className="Checkout-header">
        <h1 className="Checkout-title">Prime Pizza</h1>
      </header>
      <h2>Step 3: Checkout</h2>

      <p>
        {customerInfo.name}, {customerInfo.address},{customerInfo.city},
        {customerInfo.zip},{customerInfo.type}
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pizza.name}</td>
            <td>{pizza.price}</td>
          </tr>
        </tbody>
      </table>

      <p>Total: {pizza.price}</p>

      <button onClick={handleCompleteOrder}>Checkout</button>
    </div>
  );
}

export default Checkout;
