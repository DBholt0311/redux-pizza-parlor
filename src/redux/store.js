import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizza = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    pizza, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
