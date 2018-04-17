import axios from 'axios';
import es6promise from 'es6-promise';
// import { API_URL } from '../constants/api';
import { getStorage } from './store';

es6promise.polyfill();

const instance = axios.create({
  baseURL: 'https://api.react.mobi',
  method: 'POST',
  timeout: 6000,
});

instance.defaults.retry = 4;
instance.defaults.retryDelay = 6000;
instance.interceptors.response.use(undefined, (err) => {
  const { config } = err;
  if (!config || !config.retry) return Promise.reject(err);
  config.__retryCount = config.__retryCount || 0;
  if (config.__retryCount >= config.retry) {
    return Promise.reject(err);
  }
  config.__retryCount += 1;
  const backoff = new Promise(((resolve) => {
    setTimeout(() => { resolve(); }, config.retryDelay || 1);
  }));
  return backoff.then(() => { return axios(config); });
});

export default (url, data, options) => {
  const token = getStorage('react.mobi.token');
  return instance({
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `bearer ${token}`,
    },
    url,
    data: { token, ...data },
    ...options,
  })
    .then((response) => {
      return response.data;
    });
  // .catch((err) => {
  //   console.log('request请求服务器出错');
  //   console.log(err);
  // });
};
