import React from "react";
import axios from "axios";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </Router>
    </div>
  );
}

export default App;
