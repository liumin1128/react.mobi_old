import 'isomorphic-fetch';
import es6promise from 'es6-promise';
import { API_URL } from '../constants/api';

es6promise.polyfill();

export default (url, params = {}, options) => {
  const option = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ ...params }),
    ...options,
  };
  return fetch(API_URL + url, option)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log('request请求服务器出错');
      console.log(err);
    });
};
