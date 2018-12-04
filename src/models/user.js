import { query as queryUsers, queryCurrent } from '@/services/user';
import { Register, Login } from '@/services/api';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
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
        yield put({
          type: 'registration',
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
    loginAuthentication(state, action) {
      return {
        ...state,
        login: action.payload,
      };
    },
  },
};
