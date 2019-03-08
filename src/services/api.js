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
export async function getCategoryHomeByTri(category) {
  return request('/api/product/homebytri');
}
export async function verifyEmailRegister(params) {
  return request(`/api/authentication/verifyemail`, {
    method: 'POST',
    body: params,
  });
}
export async function getProductDetail(params) {
  return request('/api/product/DT', {
    method: 'POST',
    body: params,
  });
}
export async function saveProduct(params) {
  return request('/api/product/saveproduct', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function saveCategory(params) {
  return request('/api/product/savecategory', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function getCategory(params) {
  return request('/api/product/getcategory', {
    method: 'POST',
    body: params,
  });
}
export async function getProductDetailTest(params) {
  return request('/api/product/TestDT', {
    method: 'POST',
    body: params,
  });
}
export async function getDealSockDetail(params) {
  return request('/api/authentication/dealsockdetail', {
    method: 'POST',
    body: params,
  });
}
export async function getDealSock(params) {
  return request('/api/authentication/dealsock', {
    method: 'POST',
    body: params,
  });
}
export async function getDEVDETAIL(params) {
  return request('/api/product/DEV_DETAIL', {
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
export async function Register(params) {
  return request('/api/authentication/register', {
    method: 'POST',
    body: params,
  });
}
export async function CheckEmail(params) {
  return request('/api/authentication/checkemail', {
    method: 'POST',
    body: params,
  });
}
export async function changePassword(params) {
  return request('/api/authentication/changepassword', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function RegisterFacebook(params) {
  return request('/api/authentication/registerfb', {
    method: 'POST',
    body: params,
  });
}
export async function Login(params) {
  return request('/api/authentication/login', {
    method: 'POST',
    body: params,
  });
}
export async function ForgotPassword(params) {
  return request('/api/authentication/forgotpassword', {
    method: 'POST',
    body: params,
  });
}
export async function ConfirmOtp(params) {
  return request('/api/authentication/confirmotp', {
    method: 'POST',
    body: params,
  });
}
export async function getOTP(params) {
  return request('/api/authentication/getotp', {
    method: 'POST',
    body: params,
  });
}
export async function getInfoUser(params) {
  return request('/api/authentication/getinfo', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function checkPermission(params) {
  return request('/api/authentication/checkpermission', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function getHelpBuy(params) {
  return request('/api/authentication/gethelpbuy', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function addHelpBuy(params) {
  return request('/api/authentication/addhelpbuy', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
  });
}
export async function setHelpBuy(params) {
  return request('/api/authentication/sethelpbuy', {
    method: 'POST',
    body: params,
  });
}
export async function deleteHelpBuy(params) {
  return request('/api/authentication/deletehelpbuy', {
    method: 'POST',
    body: params,
  });
}
export async function payCompelete(params) {
  return request('/api/authentication/paycompelete', {
    method: 'POST',
    body: params,
  });
}
export async function changePermission(params) {
  return request('/api/authentication/changepermission', {
    method: 'POST',
    body: params,
  });
}
export async function getProductFilter(params) {
  return request('/api/product/filterproduct', {
    method: 'POST',
    body: params,
  });
}
export async function getProductByPhone(params) {
  return request('/api/product/getproductbyphone', {
    method: 'POST',
    body: params,
  });
}
export async function changeOrderStatus(params) {
  return request('/api/product/changeorderstatus', {
    method: 'POST',
    body: params,
  });
}
export async function deleteProductOrder(params) {
  return request('/api/product/deleteproductorder', {
    method: 'POST',
    body: params,
  });
}
export async function changeInfo(params) {
  return request('/api/authentication/changeInfo', {
    method: 'POST',
    body: params,
    headers: { 'X-Access-Token': JSON.parse(localStorage.getItem('account')) },
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
export async function getProductInCategory(categoryid) {
  return request('/api/product/categorybytri', {
    method: 'POST',
    body: categoryid,
  });
}
export async function getProductOrder(categoryid) {
  return request('/api/product/getproductorder', {
    method: 'POST',
    body: categoryid,
  });
}
export async function getListCategory() {
  return request('/api/product/getlistcategory', {
    method: 'POST',
  });
}
export async function getListProduct() {
  return request('/api/product/getlistproduct', {
    method: 'POST',
  });
}
export async function getOneCategory(categoryid) {
  return request('/api/product/getone', {
    method: 'POST',
    body: categoryid,
  });
}
export async function updateCategory(categoryid) {
  return request('/api/product/updatecategory', {
    method: 'POST',
    body: categoryid,
  });
}
export async function updateProduct(categoryid) {
  return request('/api/product/updateproduct', {
    method: 'POST',
    body: categoryid,
  });
}
export async function deleteProduct(categoryid) {
  return request('/api/product/deleteproduct', {
    method: 'POST',
    body: categoryid,
  });
}
export async function deleteCategory(categoryid) {
  return request('/api/product/deletecategory', {
    method: 'POST',
    body: categoryid,
  });
}
export async function getProductDetailByTri(productid) {
  return request('/api/product/detailbytri', {
    method: 'POST',
    body: productid,
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
export async function getSearchSortProductTest(params) {
  return request(`/api/product/SEARCHTest?ref=${new Date().getTime()}`, {
    method: 'POST',
    body: params,
  });
}
export async function getRaito() {
  return request('/api/raito');
}
