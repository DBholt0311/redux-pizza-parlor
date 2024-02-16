
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

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

<<<<<<< HEAD
const customerInfo = (state = [], action) => {
  if (action.type === 'CUSTOMER_TO_ADD') {
    return action.payload;
  }
  return state;
};

const totalCostReducer = (state = { totalCost: 0.0 }, action) => {
=======

// Total Cost Reducer
const totalCostReducer = (state = { totalCost: 0.00 }, action) => {
>>>>>>> main
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
<<<<<<< HEAD
        totalCost: (
          parseFloat(state.totalCost) + parseFloat(action.payload.price)
        ).toFixed(2),
=======
        totalCost: (parseFloat(state.totalCost) + parseFloat(action.payload.price)).toFixed(2)
>>>>>>> main
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
<<<<<<< HEAD
        totalCost: (
          parseFloat(state.totalCost) - parseFloat(action.payload.price)
        ).toFixed(2),
=======
        totalCost: (parseFloat(state.totalCost) - parseFloat(action.payload.price)).toFixed(2)
>>>>>>> main
      };
    default:
      return state;
  }
};

<<<<<<< HEAD
// saga stuff

const sagaMiddleware = createSagaMiddleware();

// SAGA Generator Functions
function* getOrder(action) {
  try {
    const elementsResponse = yield axios({
      method: 'GET',
      url: '/api/pizza',
    });
    yield put({ type: 'SET_PIZZA_LIST', payload: elementsResponse.data });
  } catch (error) {
    console.log('ERROR:', error);
  }
}

function* postOrder(action) {
  console.log(action.payload);
  try {
    yield axios({
      method: 'POST',
      url: '/api/order',
      data: action.payload,
    });
    yield put({ type: 'GET_ORDER' });
  } catch (error) {
    console.log('mistake at the post', error);
  }
}

function* watcherSaga() {
  yield takeEvery('GET_ORDER', getOrder);
  yield takeEvery('POST_ORDER', postOrder);
}
=======
>>>>>>> main

const store = createStore(
  combineReducers({
    totalCostReducer,
    pizza, // 👈 Be sure to replace this, too!
    customerInfo,
    cart,
    totalCostReducer,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

export default store;
