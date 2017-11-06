import 'isomorphic-fetch';
import es6promise from 'es6-promise';
import { APIURL } from '../constants/api';
import { getStorage } from '../utils';

es6promise.polyfill();

export default (url, params = {}) => {
  const token = getStorage('token');
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
      // const { status } = response;
      // if (status === 404) {
      //   throw new Error('请求找不到');
      // } else if (status === 403) {
      //   throw status;
      // } else if (status === 401) {
      //   alert('尚未登录');
      //   throw new Error('Token 过期');
      // } else if (status >= 400) {
      //   throw new Error('Bad response from server');
      // }
      return response.json();
    })
    .catch((err) => {
      console.log('request请求服务器出错');
      console.log(err);
    });
};
