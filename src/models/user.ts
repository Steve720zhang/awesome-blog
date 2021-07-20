import { getAllUser } from '@/services/services';
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
const orders: IndexModelType = {
  state: {
    user: {},
  },
  effects: {
    *doLogin(action: { type: string }, { call, put, select }: any) {
      const allUser = yield call(getAllUser);
      console.log('allUser:', allUser);
    },
  },
  reducers: {
    clearUser() {
      return { user: {} };
    },
    setUser({ payload }: any) {
      return { user: payload };
    },
  },
};

export default orders;
