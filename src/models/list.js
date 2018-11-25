/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable vars-on-top */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-var */
/* eslint-disable object-shorthand */
import { queryFakeList, removeFakeList, addFakeList, updateFakeList } from '@/services/api';
var listArr = [];
var authorityString = '';
for (var i = 0, len = localStorage.length; i < len; ++i) {
  authorityString = localStorage.getItem(localStorage.key(i))
    ? localStorage.getItem(localStorage.key(i)).split('|')
    : '';
  var arr = authorityString != '' ? authorityString.map(v => JSON.parse(v)) : [];
  listArr.push(arr);
}
export default {
  namespace: 'list',

  state: {
    list: [],
    value: 0,
    listArr: listArr,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      let callback;
      if (payload.id) {
        callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      } else {
        callback = addFakeList;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
    local(state, action) {
      return {
        ...state,
        listArr: action.payload,
      };
    },
    value(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
};
