/* eslint-disable no-unused-vars */
import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}
export async function getProductByCategory(category) {
  return request('/api/product/list');
}

export async function getProductDetail(params) {
  return request('/api/product/DT', {
    method: 'POST',
    body: params,
  });
}
export async function getCategoryDetail(params) {
  return request('/api/category/CT', {
    method: 'POST',
    body: params,
  });
}
export async function getCategoryProduct(nodeid) {
  return request('/api/product/LC', {
    method: 'POST',
    body: {
      nodeid,
    },
  });
}
export async function getListProductAmazon(params) {
  return request('/api/product/AM');
}
export async function getListProductEbay(params) {
  return request('/api/product/EB');
}
export async function getListProductNike(params) {
  return request('/api/product/NK');
}
export async function getListProductAdidas(params) {
  return request('/api/product/AD');
}
export async function getSearchSortProduct(params) {
  return request(`/api/product/SEARCH?ref=${new Date().getTime()}`, {
    method: 'POST',
    body: params,
  });
}
export async function getRaito() {
  return request('/api/raito');
}
