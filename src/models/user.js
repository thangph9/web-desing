import { query as queryUsers, queryCurrent } from '@/services/user';
import { Register, Login, RegisterFacebook } from '@/services/api';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    register: {},
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

      if (response.status === true) {
        sessionStorage.account = JSON.stringify(response);
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

      if (response.status === true) {
        sessionStorage.account = JSON.stringify(response);
        yield put({
          type: 'registrationfb',
          payload: response || {},
        });
      }
    },
    *login({ payload }, { call, put }) {
      const response = yield call(Login, payload);
      if (response.status === true) {
        sessionStorage.account = JSON.stringify(response);
        yield put({
          type: 'loginAuthentication',
          payload: response || {},
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
      };
    },
  },
};
