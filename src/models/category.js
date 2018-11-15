import { getCategoryProduct } from '@/services/api';

export default {
  namespace: 'category',

  state: {
    list: [],
  },

  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(getCategoryProduct, payload);
      if (response.status === 'ok') {
        yield put({
          type: 'queryList',
          payload: response.data ? response.data : {},
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
