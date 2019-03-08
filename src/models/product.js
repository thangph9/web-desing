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
  saveProduct,
  saveCategory,
  getCategory,
  getCategoryHomeByTri,
  getProductInCategory,
  getProductDetailByTri,
  getListCategory,getOneCategory,
  updateCategory,
  getListProduct,
  updateProduct,
  deleteCategory,
  deleteProduct,
  getProductOrder,
  changeOrderStatus,
  deleteProductOrder,
  getProductByPhone
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
    saveproduct: {},
    savecategory: {},
    getcategory: {},
    getcategoryhomebytri: {},
    getproductincategory: {},
    getproductdetailbytri: {},
    getlistcategory:[],
    getonecategory:{},
    updatecategory:{},
    getlistproduct:[],
    updateproduct:{},
    deleteproduct:{},
    deletecategory:{},
    getproductorder:{},
    changeorderstatus:{},
    deleteproductorder:{},
    getproductbyphone:{}
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
    *homebytri({ payload }, { call, put }) {
      const response = yield call(getCategoryHomeByTri, payload);
      try {
        yield put({
          type: 'homeByTri',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getlistcategory({ payload }, { call, put }) {
      const response = yield call(getListCategory, payload);
      try {
        yield put({
          type: 'getListCategory',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getproductorder({ payload }, { call, put }) {
      const response = yield call(getProductOrder, payload);
      try {
        yield put({
          type: 'getProductOrder',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getproductbyphone({ payload }, { call, put }) {
      const response = yield call(getProductByPhone, payload);
      try {
        yield put({
          type: 'getProductByPhone',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getlistproduct({ payload }, { call, put }) {
      const response = yield call(getListProduct, payload);
      try {
        yield put({
          type: 'getListProduct',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *changeorderstatus({ payload }, { call, put }) {
      const response = yield call(changeOrderStatus, payload);
      try {
        yield put({
          type: 'changeOrderStatus',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *deleteproductorder({ payload }, { call, put }) {
      const response = yield call(deleteProductOrder, payload);
      try {
        yield put({
          type: 'deleteProductOrder',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getonecategory({ payload }, { call, put }) {
      const response = yield call(getOneCategory, payload);
      try {
        yield put({
          type: 'getOneCategory',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *updatecategory({ payload }, { call, put }) {
      const response = yield call(updateCategory, payload);
      try {
        yield put({
          type: 'updateCategory',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *deletecategory({ payload }, { call, put }) {
      const response = yield call(deleteCategory, payload);
      try {
        yield put({
          type: 'deleteCategory',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *deleteproduct({ payload }, { call, put }) {
      const response = yield call(deleteProduct, payload);
      try {
        yield put({
          type: 'deleteProduct',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *updateproduct({ payload }, { call, put }) {
      const response = yield call(updateProduct, payload);
      try {
        yield put({
          type: 'updateProduct',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getproductincategory({ payload }, { call, put }) {
      const response = yield call(getProductInCategory, payload);
      try {
        yield put({
          type: 'getProductInCategory',
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    },
    *getproductdetailbytri({ payload }, { call, put }) {
      const response = yield call(getProductDetailByTri, payload);
      try {
        yield put({
          type: 'getProductDetailByTri',
          payload: response,
        });
      } catch (e) {
        console.log(e);
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
    *saveproduct({ payload }, { call, put }) {
      const response = yield call(saveProduct, payload);
      yield put({
        type: 'saveProduct',
        payload: response,
      });
    },
    *savecategory({ payload }, { call, put }) {
      const response = yield call(saveCategory, payload);
      yield put({
        type: 'saveCategory',
        payload: response,
      });
    },
    *getcategory({ payload }, { call, put }) {
      const response = yield call(getCategory, payload);
      yield put({
        type: 'getCategory',
        payload: response,
      });
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
    homeByTri(state, action) {
      return {
        ...state,
        homebytri: action.payload,
      };
    },
    getProductInCategory(state, action) {
      return {
        ...state,
        getproductincategory: action.payload,
      };
    },
    getProductDetailByTri(state, action) {
      return {
        ...state,
        getproductdetailbytri: action.payload,
      };
    },
    productDetail(state, action) {
      return {
        ...state,
        detail: action.payload,
      };
    },
    getProductOrder(state, action) {
      return {
        ...state,
        getproductorder: action.payload,
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
    saveProduct(state, action) {
      return {
        ...state,
        saveproduct: action.payload,
      };
    },
    saveCategory(state, action) {
      return {
        ...state,
        savecategory: action.payload,
      };
    },
    getCategory(state, action) {
      return {
        ...state,
        getcategory: action.payload,
      };
    },
    getListCategory(state, action) {
      return {
        ...state,
        getlistcategory: action.payload,
      };
    },
    getOneCategory(state, action) {
      return {
        ...state,
        getonecategory: action.payload,
      };
    },
    updateCategory(state, action) {
      return {
        ...state,
        updatecategory: action.payload,
      };
    },
    getListProduct(state, action) {
      return {
        ...state,
        getlistproduct: action.payload,
      };
    },
    updateProduct(state, action) {
      return {
        ...state,
        updateproduct: action.payload,
      };
    },
    changeOrderStatus(state, action) {
      return {
        ...state,
        changeorderstatus: action.payload,
      };
    },
    deleteProductOrder(state, action) {
      return {
        ...state,
        deleteproductorder: action.payload,
      };
    },
    getProductByPhone(state, action) {
      return {
        ...state,
        getproductbyphone: action.payload,
      };
    },
    deleteProduct(state, action) {
      return {
        ...state,
        deleteproduct: action.payload,
      };
    },
    deleteCategory(state, action) {
      return {
        ...state,
        deletecategory: action.payload,
      };
    },
  },
};
