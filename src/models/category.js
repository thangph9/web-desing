import { getCategoryProduct } from '@/services/api';

export default {
  namespace: 'category',

  state: {
    list: [],
    breadcrumb: {},
  },

  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(getCategoryProduct, payload);
      try {
        if (response.status === 'ok') {
          console.log(response);
          yield put({
            type: 'queryList',
            payload: Array.isArray(response.data.items) ? response.data.items : [],
            breadcrumb:
              typeof response.data.breadcrumb === 'object' && response.data.breadcrumb != null
                ? response.data.breadcrumb
                : {},
          });
        } else {
          yield put({
            type: 'queryList',
            payload: [],
            breadcrumb: {},
          });
        }
      } catch (e) {
        yield put({
          type: 'queryList',
          payload: [],
          breadcrumb: {},
        });
      }
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
        breadcrumb: action.breadcrumb,
      };
    },
  },
};
