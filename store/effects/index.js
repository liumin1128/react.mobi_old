import request from '../../utils/request';
import { setStorage } from '../../utils/store';
import { USER_TOKEN_KEY } from '../../constants/base';

export default {
  test: () => {
    console.log('test effects');
  },
  'user/login': async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { status, token, userInfo } = await request('user/login', payload);
      if (status === 200) {
        await setStorage(USER_TOKEN_KEY, token);
        await dispatch({ type: 'user/save', payload: { userInfo } });
      }
    } catch (error) {
      console.log(error);
    }
  },
  'common/getQiniuToken': async ({ payload, cb }, { getState, dispatch }) => {
    const { token } = await request('common/getQiniuToken');
    await dispatch({ type: 'common/save', payload: { qiniuToken: token } });
  },
};
