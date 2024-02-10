
//react states
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";


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


    </div>
  );
}

export default App;
