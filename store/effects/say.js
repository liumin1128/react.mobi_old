import List from './list';
import request from '../../utils/request';

class Say extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      await request('say/create', payload);
      await dispatch({ type: 'say/init' });
      if (cb) await cb();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Say({ name: 'say' });

