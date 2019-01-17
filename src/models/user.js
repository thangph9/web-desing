/* eslint-disable eqeqeq */
import { query as queryUsers, queryCurrent } from '@/services/user';
import {
  Register,
  Login,
  RegisterFacebook,
  CheckEmail,
  changePassword,
  getInfoUser,
  ForgotPassword,
  ConfirmOtp,
  changeInfo,
  getOTP,
  getHelpBuy,
  addHelpBuy,
  setHelpBuy,
  deleteHelpBuy,
  verifyEmailRegister,
  getDealSock,
  getDealSockDetail,
  checkPermission,
} from '@/services/api';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    register: {},
    check: '',
    changepass: {},
    info: {},
    registerfb: {},
    login: {},
    forgot: {},
    confirm: {},
    gethelpbuy: [],
    addhelpbuy: {},
    sethelpbuy: {},
    deletehelpbuy: {},
    verify: {},
    dealSock: {},
    getdealSockdetail: {},
    checkpermission: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *register({ payload }, { call, put }) {
      const response = yield call(Register, payload);
      yield put({
        type: 'registration',
        payload: response || {},
      });
    },
    *verifyemail({ payload }, { call, put }) {
      const response = yield call(verifyEmailRegister, payload);
      if (response.status === 'ok') {
        localStorage.account = JSON.stringify(response.currentAuthority.token);
        localStorage.removeItem('accountRegister');
      }
      yield put({
        type: 'verifyemailauthentication',
        payload: response,
      });
    },
    *registerfb({ payload }, { call, put }) {
      const response = yield call(RegisterFacebook, payload);

      if (response.status === 'ok') {
        localStorage.account = JSON.stringify(response.currentAuthority.token);
        yield put({
          type: 'registrationfb',
          payload: response || {},
        });
      }
    },
    *login({ payload }, { call, put }) {
      const response = yield call(Login, payload);
      if (response.status === 'ok') {
        localStorage.account = JSON.stringify(response.currentAuthority.token);
        yield put({
          type: 'loginAuthentication',
          payload: response || {},
        });
      } else {
        yield put({
          type: 'loginAuthentication',
          payload: response || {},
        });
      }
    },
    *forgot({ payload }, { call, put }) {
      const response = yield call(ForgotPassword, payload);
      yield put({
        type: 'forgotAuthentication',
        payload: response || {},
      });
    },
    *getdeal({ payload }, { call, put }) {
      const response = yield call(getDealSock, payload);
      yield put({
        type: 'getdealsock',
        payload: response || {},
      });
    },
    *getdealdetail({ payload }, { call, put }) {
      const response = yield call(getDealSockDetail, payload);
      yield put({
        type: 'getdealsockdetail',
        payload: response.data || {},
      });
    },
    *confirm({ payload }, { call, put }) {
      const response = yield call(ConfirmOtp, payload);
      yield put({
        type: 'confirmAuthentication',
        payload: response || {},
      });
    },
    *getotp({ payload }, { call, put }) {
      const response = yield call(getOTP, payload);
      yield put({
        type: 'getotpAuthentication',
        payload: response || {},
      });
    },
    *info({ payload }, { call, put }) {
      const response = yield call(getInfoUser, payload);
      yield put({
        type: 'infoAuthentication',
        payload: response,
      });
    },
    *checkpermission({ payload }, { call, put }) {
      const response = yield call(checkPermission, payload);
      yield put({
        type: 'checkPermissionAuthentication',
        payload: response,
      });
    },
    *gethelpbuy({ payload }, { call, put }) {
      const response = yield call(getHelpBuy, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'gethelpbuyAuthentication',
          payload: response.data || {},
        });
      } else {
        yield put({
          type: 'gethelpbuyAuthentication',
          payload: response.data || {},
        });
      }
    },
    *deletehelpbuy({ payload }, { call, put }) {
      const response = yield call(deleteHelpBuy, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'deletehelpbuyAuthentication',
          payload: response || {},
        });
      } else {
        yield put({
          type: 'deletehelpbuyAuthentication',
          payload: response || {},
        });
      }
    },
    *sethelpbuy({ payload }, { call, put }) {
      const response = yield call(setHelpBuy, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'sethelpbuyAuthentication',
          payload: response || {},
        });
      } else {
        yield put({
          type: 'sethelpbuyAuthentication',
          payload: response || {},
        });
      }
    },
    *addhelpbuy({ payload }, { call, put }) {
      const response = yield call(addHelpBuy, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'addhelpbuyAuthentication',
          payload: response || {},
        });
      } else {
        yield put({
          type: 'addhelpbuyAuthentication',
          payload: response || {},
        });
      }
    },
    *changepass({ payload }, { call, put }) {
      const response = yield call(changePassword, payload);
      if (response) {
        yield put({
          type: 'changepassAuthentication',
          payload: response || '',
        });
      }
    },
    *changeinfo({ payload }, { call, put }) {
      const response = yield call(changeInfo, payload);
      if (response) {
        if (response.status === 'ok')
          localStorage.account = JSON.stringify(response.currentAuthority.token);
        yield put({
          type: 'changeinfoAuthentication',
          payload: response || '',
        });
      }
    },
    *check({ payload }, { call, put }) {
      const response = yield call(CheckEmail, payload);
      if (response.status === 'ok') {
        yield put({
          type: 'checkAuthentication',
          payload: response.message || '',
        });
      } else {
        yield put({
          type: 'checkAuthentication',
          payload: response.message,
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    verifyAfter(state) {
      return {
        ...state,
        verify: {},
      };
    },
    loginAfter(state) {
      return {
        ...state,
        login: {},
      };
    },
    changepassAfter(state) {
      return {
        ...state,
        changepass: {},
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
    getdealsock(state, action) {
      return {
        ...state,
        getdealsock: action.payload,
      };
    },
    getdealsockdetail(state, action) {
      return {
        ...state,
        getdealSockdetail: action.payload,
      };
    },
    registration(state, action) {
      return {
        ...state,
        register: action.payload,
      };
    },
    afterRegister(state) {
      return {
        ...state,
        register: {},
      };
    },
    registrationfb(state, action) {
      return {
        ...state,
        registerfb: action.payload,
      };
    },
    loginAuthentication(state, action) {
      return {
        ...state,
        login: action.payload,
      };
    },
    checkAuthentication(state, action) {
      return {
        ...state,
        check: action.payload,
      };
    },
    changepassAuthentication(state, action) {
      return {
        ...state,
        changepass: action.payload,
      };
    },
    changeinfoAuthentication(state, action) {
      return {
        ...state,
        changeinfo: action.payload,
      };
    },

    infoAuthentication(state, action) {
      return {
        ...state,
        info: action.payload,
      };
    },
    checkPermissionAuthentication(state, action) {
      return {
        ...state,
        checkpermission: action.payload,
      };
    },
    gethelpbuyAuthentication(state, action) {
      return {
        ...state,
        gethelpbuy: action.payload,
      };
    },
    sethelpbuyAuthentication(state, action) {
      return {
        ...state,
        sethelpbuy: action.payload,
      };
    },
    verifyemailauthentication(state, action) {
      return {
        ...state,
        verify: action.payload,
      };
    },
    deletehelpbuyAuthentication(state, action) {
      return {
        ...state,
        deletehelpbuy: action.payload,
      };
    },
    addhelpbuyAuthentication(state, action) {
      return {
        ...state,
        addhelpbuy: action.payload,
      };
    },
    forgotAuthentication(state, action) {
      return {
        ...state,
        forgot: action.payload,
      };
    },
    confirmAuthentication(state, action) {
      return {
        ...state,
        confirm: action.payload,
      };
    },
    getotpAuthentication(state, action) {
      return {
        ...state,
        getotp: action.payload,
      };
    },
  },
};
