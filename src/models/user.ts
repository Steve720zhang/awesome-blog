import { doLogin, getAllUser } from '@/services/services';
import Cookies from 'js-cookie';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  [name: string]: any;
}

export interface IndexModelType {
  namespace?: 'index';
  state?: IndexModelState;
  effects?: {
    doLogin: Effect;
  };
  reducers?: {
    clearUser: Reducer<IndexModelState>;
    setUser: Reducer<IndexModelState>;
  };
  subscriptions?: { setup: Subscription };
}
const user: IndexModelType = {
  state: {},
  effects: {
    *doLogin(action: any, { call, put, select }: any) {
      const allUser = yield call(doLogin, action.payload);
      Cookies.set('token', allUser.data.accessToken);
      yield put({
        type: 'setUser',
        payload: { username: action.payload.username },
      });
    },
  },
  reducers: {
    clearUser() {
      return {};
    },
    setUser(state: any, { payload }: any) {
      return { ...payload };
    },
  },
};

export default user;
