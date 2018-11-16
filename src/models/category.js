import { getCategoryProduct } from '@/services/api';

export default {
  namespace: 'category',

  state: {
    list: [],
  },

  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(getCategoryProduct, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryList',
            payload: Array.isArray(response.data) ? response.data : [],
          });
        } else {
          yield put({
            type: 'queryList',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryList',
          payload: [],
        });
      }
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
