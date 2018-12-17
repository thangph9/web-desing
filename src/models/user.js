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
} from '@/services/api';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    register: undefined,
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
      if (response.status === 'ok') {
        sessionStorage.account = JSON.stringify(response.currentAuthority.token);
        yield put({
          type: 'registration',
          payload: response,
        });
      } else {
        yield put({
          type: 'registration',
          payload: response,
        });
      }
    },
    *registerfb({ payload }, { call, put }) {
      const response = yield call(RegisterFacebook, payload);

      if (response.status === 'ok') {
        sessionStorage.account = JSON.stringify(response.currentAuthority.token);
        yield put({
          type: 'registrationfb',
          payload: response || {},
        });
      }
    },
    *login({ payload }, { call, put }) {
      const response = yield call(Login, payload);
      if (response.status === 'ok') {
        sessionStorage.account = JSON.stringify(response.currentAuthority.token);
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
      if (response && response.status === 'ok') {
        yield put({
          type: 'infoAuthentication',
          payload: response.info || {},
        });
      } else {
        yield put({
          type: 'infoAuthentication',
          payload: {},
        });
      }
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
          sessionStorage.account = JSON.stringify(response.currentAuthority.token);
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
    registration(state, action) {
      return {
        ...state,
        register: action.payload,
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
        registerfb: {},
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
