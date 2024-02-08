import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import store from "./redux/store.js";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";

const customerInfo = (state = [], action) => {
  if (action.type === "ADD_CUSTOMER_INFO") {
    return [
      ...state,
      {
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        zip: action.payload.zip,
      },
    ];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    customerInfo,
  }),
  applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
