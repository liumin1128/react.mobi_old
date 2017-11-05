import List from './list';
import request from '../../utils/request';
import { VERIFY_PHONE } from '../../constants/api';

class Common extends List {
  sentSmsCode = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const data = await request(VERIFY_PHONE, payload);
      console.log('data');
      console.log(data);
      if (cb) await cb();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Common({ name: 'common' });
