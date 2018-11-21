import { getCategoryProduct, getSearchSortProduct } from '@/services/api';

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
            payload: Array.isArray(response.data.items) ? response.data.items : [],
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
    *sort({ payload }, { call, put }) {
      const response = yield call(getSearchSortProduct, payload);
      try {
        if (response.status === 'ok') {
          console.log(response);
          yield put({
            type: 'querySort',
            payload: Array.isArray(response.data.list) ? response.data.list : [],
          });
        } else {
          yield put({
            type: 'querySort',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'querySort',
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
    querySort(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
