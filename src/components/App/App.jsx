import React from "react";
import axios from "axios";
import CustomerInfo from "../customerInfoForm/customerInfoForm";
import Header from "../Header/Header";
import Home from "../Home/Home";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Route path="/Home" exact>
      <Home />
      </Route>
        <Route path="/customerInfo" exact>
          <CustomerInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
