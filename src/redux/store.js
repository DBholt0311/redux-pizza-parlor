
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


// Total Cost Reducer
const totalCostReducer = (state = { totalCost: 0.00 }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        totalCost: (parseFloat(state.totalCost) + parseFloat(action.payload.price)).toFixed(2)
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        totalCost: (parseFloat(state.totalCost) - parseFloat(action.payload.price)).toFixed(2)
      };
    default:
      return state;
  }
};


const store = createStore(
  combineReducers({
    totalCostReducer,
    pizza, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
