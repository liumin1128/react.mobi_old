import { combineReducers } from 'redux';
import { reducerFactory } from '../utils/reducer';

const reducers = reducerFactory([
  'loading',
]);

export default combineReducers({
  ...reducers,
});

