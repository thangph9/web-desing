import { getCategoryProduct, getSearchSortProduct, getCategoryDetail } from '@/services/api';

export default {
  namespace: 'category',
  state: {
    list: [],
    breadcrumb: {},
    sort: {},
  },

  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(getCategoryProduct, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryList',
            payload: Array.isArray(response.data.items) ? response.data.items : [],
            breadcrumb:
              typeof response.data.breadcrumb === 'object' ? response.data.breadcrumb : {},
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
    *sort({ payload }, { call, put }) {
      const response = yield call(getSearchSortProduct, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'querySort',
            payload: typeof response.data.filterMap === 'object' ? response.data.filterMap : {},
            breadcrumb:
              typeof response.data.breadcrumb === 'object' ? response.data.breadcrumb : {},
          });
        } else {
          yield put({
            type: 'querySort',
            payload: [],
            breadcrumb: {},
          });
        }
      } catch (e) {
        yield put({
          type: 'querySort',
          payload: [],
          breadcrumb: {},
        });
      }
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(getCategoryDetail, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryDetail',
            payload: Array.isArray(response.data.breadcrumb) ? response.data.breadcrumb : [],
          });
        } else {
          yield put({
            type: 'queryDetail',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryDetail',
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
        breadcrumb: action.breadcrumb,
      };
    },
    querySort(state, action) {
      return {
        ...state,
        sort: action.payload,
        breadcrumb: action.breadcrumb,
      };
    },
    queryDetail(state, action) {
      return {
        ...state,
        detail: action.payload,
      };
    },
  },
};
