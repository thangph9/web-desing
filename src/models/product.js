/* eslint-disable no-unused-vars */
import {
  getProductByCategory,
  getProductDetail,
  getListProductAmazon,
  getListProductEbay,
  getListProductNike,
  getListProductAdidas,
  getDEVDETAIL,
  getProductFilter,
  getProductDetailTest,
} from '@/services/api';

export default {
  namespace: 'product',
  state: {
    list: [],
    detail: {},
    detailtest: {},
    amazon: [],
    adidas: {},
    nike: [],
    ebay: [],
  },

  effects: {
    *home({ payload }, { call, put }) {
      const response = yield call(getProductByCategory, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryList',
            payload: response.data ? response.data : [],
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
    *amazon({ payload }, { call, put }) {
      const response = yield call(getListProductAmazon, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryListAmazon',
            payload: typeof response.data === 'object' ? response.data : {},
          });
        } else {
          yield put({
            type: 'queryListAmazon',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryListAmazon',
          payload: [],
        });
      }
    },
    *ebay({ payload }, { call, put }) {
      const response = yield call(getListProductEbay, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryListEbay',
            payload: typeof response.data === 'object' ? response.data : {},
          });
        } else {
          yield put({
            type: 'queryListEbay',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryListEbay',
          payload: [],
        });
      }
    },
    *nike({ payload }, { call, put }) {
      const response = yield call(getListProductNike, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryListNike',
            payload: typeof response.data === 'object' ? response.data : {},
          });
        } else {
          yield put({
            type: 'queryListNike',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryListNike',
          payload: [],
        });
      }
    },
    *adidas({ payload }, { call, put }) {
      const response = yield call(getListProductAdidas, payload);
      try {
        if (response.status === 'ok') {
          yield put({
            type: 'queryListAdidas',
            payload: typeof response.data === 'object' ? response.data : {},
          });
        } else {
          yield put({
            type: 'queryListAdidas',
            payload: [],
          });
        }
      } catch (e) {
        yield put({
          type: 'queryListAdidas',
          payload: [],
        });
      }
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(getProductDetail, payload);

      if (response.status && response.status === 'ok') {
        yield put({
          type: 'productDetail',
          payload: response.data ? response.data : {},
        });
      }
    },
    *detailtest({ payload }, { call, put }) {
      const response = yield call(getProductDetailTest, payload);

      if (response.status && response.status === 'ok') {
        yield put({
          type: 'productDetailTest',
          payload: response.data ? response.data : {},
        });
      }
    },
    *filter({ payload }, { call, put }) {
      const response = yield call(getProductFilter, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'productFilter',
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
    productDetailTest(state, action) {
      return {
        ...state,
        detailtest: action.payload,
      };
    },
    queryListAmazon(state, action) {
      return {
        ...state,
        amazon: action.payload,
      };
    },
    queryListEbay(state, action) {
      return {
        ...state,
        ebay: action.payload,
      };
    },
    queryListNike(state, action) {
      return {
        ...state,
        nike: action.payload,
      };
    },
    queryListAdidas(state, action) {
      return {
        ...state,
        adidas: action.payload,
      };
    },
    productFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
};
