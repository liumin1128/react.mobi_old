import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducerFactory } from '../utils';
import say from './say';
import news from './news';
import loading from './loading';

const reducers = reducerFactory([
  loading,
  news,
  say,
  'user',
  'comment',
]);

export default combineReducers({
  ...reducers,
  form: reduxFormReducer,
});

