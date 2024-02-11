import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout() {
  const history = useHistory();
  // const customerInfo = useSelector((state) => state.customerInfo);
  const pizza = useSelector((state) => state.pizza);

  const handleCompleteOrder = (event) => {
    event.preventDefault();

    axios
      .post('/api/pizza', { pizza })
      .then((response) => {
        console.log({ pizza });
      })
      .catch((error) => {
        console.log('issue with post', error);
      });

    // axios
    //   .post('/api/order', {
    //     customer_name,
    //     street_address,
    //     city,
    //     zip,
    //     type,
    //     total,
    //     pizzas,
    //   })
    //   .then((response) => {
    //     console.log({ total });
    //   })
    //   .catch((error) => {
    //     console.log('issue with pizza post', error);
    //   })

    history.push('/');
  };

  return (
    <div className="Checkout">
      <header className="Checkout-header">
        <h1 className="Checkout-title">Prime Pizza</h1>
      </header>
      <h2>Step 3: Checkout</h2>
      {/* {customerInfo.map(
        (customer) => (
          customer.name, customer.address, customer.city, customer.zip
        )
      )} */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {pizza.map((pizza) => (
            <tr key={pizza.id}>
              <th>{pizza.name}</th>
              <th>{pizza.price}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total: {pizza.price}</p>
      <button onClick={handleCompleteOrder}>Checkout</button>
    </div>
  );
}

export default Checkout;
