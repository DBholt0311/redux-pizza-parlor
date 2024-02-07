import axios from 'axios';

//axios call
export const fetchPizza = () => {
  return axios.get('/api/pizza');
};
