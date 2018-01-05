export default {
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
};
