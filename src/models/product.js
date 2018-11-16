import { getProductByCategory, getProductDetail } from '@/services/api';

export default {
  namespace: 'product',

  state: {
    list: [],
    detail: {},
  },

  effects: {
    *home({ payload }, { call, put }) {
      const response = yield call(getProductByCategory, payload);
      if (response.status === 'ok') {
        yield put({
          type: 'queryList',
          payload: response.data ? response.data : {},
        });
      }
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(getProductDetail, payload);

      if (response.status === 'ok') {
        yield put({
          type: 'productDetail',
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
    productDetail(state, action) {
      return {
        ...state,
        detail: action.payload,
      };
    },
  },
};
