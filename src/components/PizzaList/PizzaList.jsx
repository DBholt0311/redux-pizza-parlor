import { useSelector, useDispatch } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function PizzaList() {
  const dispatch = useDispatch();
  const history = useHistory();
  //removed the pizzaRefreshCallback due to not needed. Cart is using useState
  let pizzaList = useSelector((store) => store.pizza);
  let totalCostReducer = useSelector((store) => store.totalCostReducer);

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  const removeFromCart = (pizzaToRemove) => {
    setCart(cart.filter((item) => item !== pizzaToRemove));
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizzaToRemove });
  };

  //Removed due to now using reducer
  // const totalCostCalculation = () => {
  //   let totalCost = 0;
  //   cart.forEach(item => {
  //     totalCost += parseFloat(item.price);
  //   });
  //   return totalCost.toFixed(2);
  // };

  const submitPizza = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: cart,
    });
    history.push('/customerInfo');
  };

  return (
    <div className="pizzaCardContainer">
      {pizzaList.map((pizza, index) => (
        <PizzaListItem
          key={index}
          pizza={pizza}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          inCart={cart.includes(pizza)}
        />
      ))}

      {/* <div className="totalCost">Total Cost: ${totalCostReducer.totalCost}</div>{' '}
      Accessing totalCostReducer.totalCost */}
      <button type="submit" onClick={submitPizza}>
        Next
      </button>
    </div>
  );
}

export default PizzaList;
