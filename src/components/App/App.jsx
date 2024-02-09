//react states
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import List
import PizzaList from '../PizzaList/PizzaList';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const dispatch = useDispatch();

  //TODO: changed to use reducer from store
  const fetchPizza = () => {
    console.log('In the FETCH function!');
    //axios call to server
    axios
      .get('/api/pizza')
      .then((response) => {
        // send data to data to redux store
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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <PizzaList pizzaListRefreshCall={fetchPizza} />
      {/* TODO: add call once item.jsx is complete */}
      {/* <PizzaList pizzaListRefreshCall={fetchPizza} /> */}

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
