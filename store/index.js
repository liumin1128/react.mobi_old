import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import effect from 'redux-effect';
import reducers from './reducers';
import effects from './effects';
import widthRoot from '../components/hoc';

const reducer = combineReducers({
  ...reducers,
  // form: reduxFormReducer,
});

export const store = (initialState = {}) => {
  const temp = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(effect(effects))),
  );
  console.log('xxxxxx创建store');
  return temp;
};

// store.dispatch({ type: 'user/getUserInfo' });

export const reduxPage = comp => withRedux(store)(widthRoot(comp));

