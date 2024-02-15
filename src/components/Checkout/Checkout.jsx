import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  let customerInfo = useSelector((store) => store.customerInfo);
  let cart = useSelector((store) => store.cart);
  let totalCostReducer = useSelector((store) => store.totalCostReducer);
  let [orderCheckout, setOrderCheckout] = useState({
    customer_name: customerInfo.name,
    street_address: customerInfo.address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    total: totalCostReducer.totalCost,
    pizzas: cart,
  });
  console.log(orderCheckout);
  console.log(customerInfo.name);

  const handleCompleteOrder = (event) => {
    event.preventDefault();

    // axios
    //   .post('/api/order', {
    //     customer_name: customerInfo.name,
    //     street_address: customerInfo.address,
    //     city: customerInfo.city,
    //     zip: customerInfo.zip,
    //     type: customerInfo.type,
    //     total: totalCostReducer.totalCost,
    //     pizza: cart.name,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     pizzaListRefreshCall();
    //   })
    //   .catch((error) => {
    //     console.log('issue with order post', error);
    //   });
    dispatch({ type: 'POST_ORDER', payload: orderCheckout });

    // dispatch({
    //   type: '',
    //   payload: '',
    // });
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
      {cart.map((cart) => {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{cart.name}</td>
                  <td>{cart.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <button onClick={handleCompleteOrder}>Checkout</button>
    </div>
  );
}

export default Checkout;
