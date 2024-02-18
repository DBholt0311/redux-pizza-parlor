import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import PizzaListItem from '../PizzaListItem/PizzaListItem';

function PizzaList() {
  const dispatch = useDispatch();
  const history = useHistory();
  //removed the pizzaRefreshCallback due to not needed. Cart is using useState
  let pizzaList = useSelector((store) => store.pizza);

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    let newPizza = {
      ...pizza,
      quantity: 1,
    };

    setCart([...cart, newPizza]);

    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  const removeFromCart = (pizzaToRemove) => {
    let newPizza = {
      ...pizzaToRemove,
      quantity: 1,
    };
    setCart(cart.filter((item) => item.id !== newPizza.id));
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizzaToRemove });
  };

  console.log('this is a cart', cart);

  const submitPizza = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: cart,
    });
  };

  return (
    <div className="pizzaCardContainer">
      <Grid container spacing={2}>
        {pizzaList.map((pizza, index) => (
          <Grid item xs={8} md={6} lg={3} key={index}>
            <PizzaListItem
              key={index}
              pizza={pizza}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              inCart={cart.some((item) => item.id === pizza.id)}
            />
          </Grid>
        ))}
      </Grid>

      {/* <div className="totalCost">Total Cost: ${totalCostReducer.totalCost}</div>{' '}
      Accessing totalCostReducer.totalCost */}
      <button type="submit" onClick={submitPizza}>
        <Link to="/CustomerInfo">Next</Link>
      </button>
    </div>
  );
}

export default PizzaList;
