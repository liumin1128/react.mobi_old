import 'isomorphic-fetch';
import es6promise from 'es6-promise';
import store from 'store';
import { APIURL } from '../config';

es6promise.polyfill();

export default (url, params = {}) => {
  const token = store.get('token');
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ ...params }),
  };
  return fetch(APIURL + url, options)
    .then((response) => {
      console.log('response');
      console.log(response);
      if (response.status === 404) {
        throw new Error('请求找不到');
      } else if (response.status === 403) {
        throw new Error('参数格式不正确');
      } else if (response.status === 401) {
        alert('尚未登录');
        throw new Error('Token 过期');
      } else if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .catch((err) => {
      console.log('request请求服务器出错');
      console.log(err);
    });
};
