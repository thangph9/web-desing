import {
  getProductByCategory,
  getProductDetail,
  getListProductAmazon,
  getListProductEbay,
  getListProductNike,
  getListProductAdidas,
} from '@/services/api';

export default {
  namespace: 'product',
  state: {
    list: [],
    detail: {},
    amazon: [],
    adidas: [],
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
            payload: Array.isArray(response.data) ? response.data : [],
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
            payload: Array.isArray(response.data) ? response.data : [],
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
            payload: Array.isArray(response.data) ? response.data : [],
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
            payload: Array.isArray(response.data) ? response.data : [],
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
  },
};
