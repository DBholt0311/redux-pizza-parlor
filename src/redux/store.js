import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizza = (state = [], action) => {
  //dispatch call
  if (action.type === 'SET_PIZZA_LIST') {
    //return payload
    return action.payload;
  }

  return state;
};
const cart = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    return action.payload;
  }
  return state;
};

const customerInfo = (state = [], action) => {
  if (action.type === 'CUSTOMER_TO_ADD') {
    return action.payload;
  }
  return state;
};

const totalCostReducer = (state = { totalCost: 0.0 }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        totalCost: (
          parseFloat(state.totalCost) + parseFloat(action.payload.price)
        ).toFixed(2),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        totalCost: (
          parseFloat(state.totalCost) - parseFloat(action.payload.price)
        ).toFixed(2),
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    pizza, // 👈 Be sure to replace this, too!
    customerInfo,
    cart,
    totalCostReducer,
  }),
  applyMiddleware(logger)
);

export default store;
