import axios from 'axios';
import es6promise from 'es6-promise';
import { API_URL } from '../constants/api';
import { getStorage } from '../utils';

es6promise.polyfill();

const instance = axios.create({
  baseURL: API_URL,
  method: 'POST',
  timeout: 6000,
});

export default (url, data, options) => {
  const token = getStorage('reactmobitoken');
  return instance({
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    url,
    data,
    ...options,
  })
    .then((response) => {
      return response.data;
    });
};
