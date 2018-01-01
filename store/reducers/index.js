import { combineReducers } from 'redux';
import { reducerFactory } from '../utils';

export default combineReducers(reducerFactory([
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
]));

