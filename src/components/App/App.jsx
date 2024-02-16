
//react states
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
import Header from '../Header/Header';
import Home from '../Home/Home';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfoForm/CustomerInfoForm';
import Admin from '../Admin/Admin';
import Checkout from '../Checkout/Checkout';
import styles from './App.module.css';
import Footer from '../Footer/Footer'
//router
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
    <div className={styles.App}>
      <Router>
        <Header />
        <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/CustomerInfo" exact>
          <CustomerInfo />
        </Route>
        <Route path="/Menu" exact>
          <PizzaList pizzaListRefreshCall={fetchPizza} />
        </Route>
        <Route path="/Checkout">
          <Checkout pizzaListRefreshCall={fetchPizza} />
        </Route>
        <Footer />
        </main>
        <Route path="/Admin" exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
