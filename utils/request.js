import 'isomorphic-fetch';
import es6promise from 'es6-promise';
import { API_URL } from '../constants/api';

es6promise.polyfill();

export default (url, params = {}) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ ...params }),
  };
  return fetch(API_URL + url, options)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log('request请求服务器出错');
      console.log(err);
    });
};
