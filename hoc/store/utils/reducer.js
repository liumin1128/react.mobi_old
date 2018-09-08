const defaultReducers = {
  save: (state = {}, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  clear: () => {
    return {};
  },
  default: (state = {}) => {
    return state;
  },
};

export function reducerCreator(options) {
  const { namespace = options, props = {}, initState = {} } = options;
  return (state = initState, action) => {
    const reducers = { ...defaultReducers, ...props };
    const key = Object.keys(reducers).find((i) => {
      return `${namespace}/${i}` === action.type;
    }) || 'default';
    return reducers[key](state, action);
  };
}

export function reducerFactory(arr) {
  const temp = {};
  arr.map((i) => {
    if (typeof i === 'string') {
      temp[i] = reducerCreator(i);
    } else if (typeof i === 'object') {
      temp[i.namespace] = reducerCreator(i);
    }
    return i;
  });
  return temp;
}

