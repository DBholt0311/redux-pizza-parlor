import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Checkout from '../Checkout/Checkout';
import Pizza from '../Pizza/Pizza';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header> */}
      <Router>
        {/* <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p> */}
        <Route path="/" exact>
          <Pizza />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
