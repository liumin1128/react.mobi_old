import Router from 'next/router';
import store from 'store';

export default {
  ...Router,
  push: (...other) => {
    console.log('otherxxxxxxxxx');
    console.log(other);
    const token = store.get('token');
    console.log('token');
    console.log(token);
    if (other[0] === '/me') {
      alert('sssss');
    }

    return Router.push(...other);
  },
};
