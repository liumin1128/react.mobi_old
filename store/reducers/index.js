import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducerFactory } from '../utils';
import say from './say';
import news from './news';

const reducers = reducerFactory([
  news,
  say,
  'common',
  'loading',
  'user',
  'comment',
]);

export default combineReducers({
  ...reducers,
  form: reduxFormReducer,
});

