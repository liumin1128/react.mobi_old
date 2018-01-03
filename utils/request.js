import axios from 'axios';
import es6promise from 'es6-promise';
import { API_URL } from '../constants/api';

es6promise.polyfill();

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  timeout: 6000,
});

export default (url, data, options) => {
  return instance({
    method: 'POST',
    url,
    data,
    ...options,
  })
    .then((response) => {
      console.log('response');
      console.log(response);
      return response.data;
    });
  // .catch((error) => { console.log(error); });
};
