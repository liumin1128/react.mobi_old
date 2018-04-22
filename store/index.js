import { createStore, applyMiddleware } from 'redux';
import reduxWrapper from 'next-redux-wrapper';
import effect from './utils/effect';
import reducers from './reducers';
import effects from './effects';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    bindMiddleware([effect(effects)]),
  );
  return store;
}

export function withRedux(BaseComponent) {
  return reduxWrapper(configureStore)(BaseComponent);
}
