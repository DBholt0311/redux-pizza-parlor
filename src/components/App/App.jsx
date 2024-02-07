//react states
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import APi
import { fetchPizza } from '../PizzaApi/PizzaApi';

function App() {
  const [pizzaList, setPizzaList] = useState([]);

  const refreshCart = () => {
    const pizzaPromise = fetchPizza();
    pizzaPromise
      //axios call
      .then((response) => {
        //confirm Data
        console.log('Server Data:', response);
        //api call
        setPizzaList(response.data);
      })
      //catch error
      .catch((err) => {
        console.error('ERROR!!!', err);
      });
  }; //initial load of component
  useEffect(() => {
    //body
    console.log('PIZZA!!!');
    //api call
    refreshCart();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
