import { useSelector } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaList() {
  //removed the pizzaRefreshCallback due to not needed. Cart is using useState
  let pizzaList = useSelector((store) => store.pizza);
  let totalCostReducer = useSelector((store) => store.totalCostReducer);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  const removeFromCart = (pizzaToRemove) => {
<<<<<<< HEAD
    setCart(cart.filter((item) => item !== pizzaToRemove));
  };

  const totalCostCalculation = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += parseFloat(item.price);
    });
    return totalCost.toFixed(2);
  };
=======
    setCart(cart.filter(item => item !== pizzaToRemove));
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
>>>>>>> af571496fd579a6b7a07b5a0b0421ec899e815e7

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
<<<<<<< HEAD

      <div className="totalCost">Total Cost: ${totalCostCalculation()}</div>
=======
>>>>>>> af571496fd579a6b7a07b5a0b0421ec899e815e7
    </div>
  );
}

export default PizzaList;
