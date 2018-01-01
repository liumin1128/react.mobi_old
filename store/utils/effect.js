export default effects => store => next => async (action) => {
  if (typeof effects[action.type] === 'function') {
    return effects[action.type](action, store);
  }
  return next(action);
};
