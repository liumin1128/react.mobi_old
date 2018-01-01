import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import effect from './utils/effect';
import reducers from './reducers';
import effects from './effects';

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(effect(effects))),
  );
  return store;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(BaseComponent);
}
