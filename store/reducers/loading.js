export default {
  namespace: 'loading',
  props: {
    save(state = {}, action) {
      return {
        ...state,
        [action.key]: action.status,
      };
    },
  },
};
