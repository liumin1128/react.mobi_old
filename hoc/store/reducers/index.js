import { combineReducers } from 'redux';
import { reducerFactory } from '@/utils/reducer';

const reducers = reducerFactory([
  'loading',
  'common',
]);

export default combineReducers({
  ...reducers,
});

