import List from './list';
import request from '../../utils/request';
import { VERIFY_PHONE } from '../../constants/api';
import Snackbar from '../../components/snackbar';

class Common extends List {
  sentSmsCode = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { status } = await request(VERIFY_PHONE, payload);
      // const status = 200;
      if (status === 200) {
        Snackbar.success('验证码已发送，请注意查收');
      }
      if (cb) await cb();
    } catch (error) {
      console.log(error);
    }
  }
  getQiniuToken = async ({ payload, cb }, { getState, dispatch }) => {
    const { token } = await request('common/getQiniuToken');
    await dispatch({ type: 'common/save', payload: { qiniuToken: token } });
  }
}

export default new Common({ name: 'common' });
