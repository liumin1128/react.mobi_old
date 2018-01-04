import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducerFactory } from '../utils';

const easyReducers = reducerFactory([
  {
    namespace: 'loading',
    props: {
      save(state = {}, action) {
        return {
          ...state,
          [action.key]: action.status,
        };
      },
    },
  },
  {
    namespace: 'news',
    initState: { list: [], isEnd: false },
    props: {
      put({ list, ...other }, { payload }) {
        return {
          ...other,
          list: list.concat(payload.list),
          isEnd: payload.isEnd,
        };
      },
    },
  },
  {
    namespace: 'say',
    initState: { list: [], isEnd: false, current: {} },
    props: {
      put({ list, ...other }, { payload }) {
        return {
          ...other,
          list: list.concat(payload.list),
          isEnd: payload.isEnd,
        };
      },
    },
  },
  'user',
]);

export default combineReducers({
  ...easyReducers,
  form: reduxFormReducer,
});

