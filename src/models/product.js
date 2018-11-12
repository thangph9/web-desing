import { getProductByCategory } from '@/services/api';

export default {
  namespace: 'product',

  state: {
    list: [],
  },

  effects: {
    *home({ payload }, { call, put }) {
      const response = yield call(getProductByCategory, payload);
      if(response.status=='ok'){
          
          yield put({
            type: 'queryList',
            payload: (response.data) ? response.data : {},
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
  },
};
