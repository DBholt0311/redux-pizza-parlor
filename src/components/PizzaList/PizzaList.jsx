import { useSelector, useDispatch } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function PizzaList() {
  const dispatch = useDispatch();
  const history = useHistory();
  let pizzaList = useSelector((store) => store.pizza);
  let totalCostReducer = useSelector((store) => store.totalCostReducer);

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    let addPizza = {
      ...pizza,
      quantity: 1,
    };
    setCart([...cart, addPizza]);
    dispatch({ type: 'ADD_TO_CART', payload: addPizza });
  };

  const removeFromCart = (pizzaToRemove) => {
    let subPizza = {
      ...pizzaToRemove,
      quantity: 1,
    };
    setCart(cart.filter((item) => item !== subPizza));

    dispatch({ type: 'REMOVE_FROM_CART', payload: subPizza });
  };

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
          // inCart={cart.some((item) => item.id === pizza.id)}
          inCart={cart.includes(pizza)}
        />
      ))}

      <button type="submit" onClick={submitPizza}>
        Next
      </button>
    </div>
  );
}

export default PizzaList;
