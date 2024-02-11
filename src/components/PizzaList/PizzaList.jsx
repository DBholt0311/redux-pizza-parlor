import { useSelector } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import React from 'react';
import { useState } from 'react';

function PizzaList() {
  //removed the pizzaRefreshCallback due to not needed. Cart is using useState
  let pizzaList = useSelector((store) => store.pizza);
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizzaToRemove) => {
    setCart(cart.filter((item) => item !== pizzaToRemove));
  };

  const totalCostCalculation = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += parseFloat(item.price);
    });
    return totalCost.toFixed(2);
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
      <div className="totalCost">Total Cost: ${totalCostCalculation()}</div>
    </div>
  );
}

export default PizzaList;
import { useSelector } from 'react-redux';
import  PizzaListItem from '../PizzaListItem/PizzaListItem';
import React from 'react';
import { useState } from 'react';

function PizzaList() { //removed the pizzaRefreshCallback due to not needed. Cart is using useState
  let pizzaList = useSelector((store) => store.pizza);
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizzaToRemove) => {
    setCart(cart.filter(item => item !== pizzaToRemove));
  };

  const totalCostCalculation = () => {
    let totalCost = 0;
    cart.forEach(item => {
      totalCost += parseFloat(item.price);
    });
    return totalCost.toFixed(2);
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
      <div className="totalCost">Total Cost: ${totalCostCalculation()}</div>
    </div>
  );
}

export default PizzaList;