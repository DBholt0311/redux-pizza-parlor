//react states
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CustomerInfo from '../customerInfoForm/customerInfoForm';
import Header from '../Header/Header';
import Home from '../Home/Home';
//import List
import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin';

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
      <Router>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/customerInfo" exact>
          <CustomerInfo />
        </Route>
        <img src="images/pizza_photo.png" />
        <Route path="/" exact>
          <PizzaList pizzaListRefreshCall={fetchPizza} />
        </Route>
        <Route path="/Menu" exact>
          <PizzaList pizzaListRefreshCall={fetchPizza} />
        </Route>
        {/* TODO: add call once item.jsx is complete */}
        {/* <PizzaList pizzaListRefreshCall={fetchPizza} /> */}

        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
