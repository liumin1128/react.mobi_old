const defaultReducers = {
  save: (state = {}, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  default: (state = {}) => {
    return state;
  },
};

function reducerCreator(options) {
  let namespace;
  let props = {};
  let initState = {};
  if (typeof options === 'string') {
    namespace = options;
  } else if (typeof options === 'object') {
    namespace = options.namespace;
    props = options.props;
    initState = options.initState;
  }
  return (state = initState, action) => {
    const reducers = { ...defaultReducers, ...props };
    const key = Object.keys(reducers).find((i) => {
      return `${namespace}/${i}` === action.type;
    }) || 'default';
    return reducers[key](state, action);
  };
}

function reducerFactory(arr) {
  const temp = {};
  arr.map((i) => {
    if (typeof i === 'string') {
      temp[i] = reducerCreator(i);
    } else if (typeof i === 'object') {
      temp[i.namespace] = reducerCreator(i);
    }
  });
  return temp;
}

export default reducerFactory([
  'common',
  'say',
  'user',
  'article',
  'comment',
  'loading',
  'navigation',
]);
