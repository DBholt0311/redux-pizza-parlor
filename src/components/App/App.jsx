//react states
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import List
// import PizzaList from '../PizzaList/PizzaList';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';

//import APi
import { fetchPizza } from '../PizzaApi/PizzaApi';

function App() {
  const dispatch = useDispatch();

  const fetchPizza = () => {
    console.log('In the FETCH function!');
    //axios call
    axios
      .get('/api/pizza')
      .then((response) => {
        // send data to data to redux
        dispatch({ type: 'SET_PIZZA_LIST', payload: response.data });
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  //useEffect for initial load
  useEffect(() => {
    fetchPizza();
  }, []);

  //TODO: changed to use reducer
  // const [pizzaList, setPizzaList] = useState([]);

  // const refreshCart = () => {
  //   const pizzaPromise = fetchPizza();
  //   pizzaPromise
  //     //axios call
  //     .then((response) => {
  //       //confirm Data
  //       console.log('Server Data:', response);
  //       //api call
  //       setPizzaList(response.data);
  //     })
  //     //catch error
  //     .catch((err) => {
  //       console.error('ERROR!!!', err);
  //     });
  // }; //initial load of component
  // useEffect(() => {
  //   //body
  //   console.log('PIZZA!!!');
  //   //api call
  //   refreshCart();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      {/* <PizzaList /> */}
      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
