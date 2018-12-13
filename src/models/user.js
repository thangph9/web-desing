import { query as queryUsers, queryCurrent } from '@/services/user';
import {
  Register,
  Login,
  RegisterFacebook,
  CheckEmail,
  changePassword,
  getInfoUser,
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
          payload: {},
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
    *changepass({ payload }, { call, put }) {
      const response = yield call(changePassword, payload);
      if (response) {
        yield put({
          type: 'changepassAuthentication',
          payload: response || '',
        });
      }
    },
    *check({ payload }, { call, put }) {
      const response = yield call(CheckEmail, payload);
      if (response.status === 'ok') {
        yield put({
          type: 'checkAuthentication',
          payload: response.message || {},
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
    infoAuthentication(state, action) {
      return {
        ...state,
        info: action.payload,
      };
    },
  },
};
