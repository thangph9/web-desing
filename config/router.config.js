export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  {
    path: '/account',
    component: '../layouts/AccountLayout',
    routes: [
      { path: '/account/accountinformation', component: './Account1/AccountInformation/' },
      { path: '/account/helpbuy', component: './HelpBuy/' },
      { path: '/account/helpbuylist', component: './ListHelpBuy/' },
      { path: '/account/dealinday', component: './Account1/DealInDay/' },
      { path: '/account/about-deal/:dealtitle/:artid', component: './AboutDeal' },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/checkout',
    component: '../layouts/CheckoutLayout',
    routes: [
      { path: '/checkout', component: './Checkout/' },
      { path: '/checkout/paycomplete', component: './PayCompleted/' },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/cms123order',
    component: '../layouts/CMS123order',
    routes: [
      { path: '/cms123order', redirect: '/cms123order/user' },
      { path: '/cms123order/products', component: '/CMS/Products' },
      { path: '/cms123order/categorys', component: '/CMS/Categorys' },
      { path: '/cms123order/cmscategory', component: '/CMS/ListCategory' },
      {path: '/cms123order/cmsproduct', component: '/CMS/ListProduct' },
      {path: '/cms123order/cmsorder', component: '/CMS/ListOrder' },
      { path: '/cms123order/user', component: '/CMS/User' },
      { path: '/cms123order/options', component: '/CMS/Options' },
      { path: '/cms123order/updatecategory/:categoryid', component: '/CMS/UpdateCategory' },
      { path: '/cms123order/updateproduct/:productid', component: '/CMS/UpdateProduct' },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/verifyemail',
    component: '../layouts/CheckoutLayout',
    routes: [{ path: '/verifyemail', component: './Verify/' }],
  },
  {
    path: '/',
    component: '../layouts/HomeLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: './HomeByTri/',
      },
      {
        path: '/homebytri',
        name: 'homebytri',
        component: './Home/',
      },
      {
        path: '/exception',
        name: 'exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/product/:seo_link/:productid',
        name: 'detail',
        component: './Detail/',
      },
      {
        path: '/producttest/:optid/:productid',
        name: 'detailtest',
        component: './DetailTest/',
      },
      {
        path: '/productbytri/:productid',
        name: 'productbytri',
        component: './DetailByTri/',
      },
      {
        path: '/ebay',
        name: 'ebay',
        component: './Ebay/',
      },
      {
        path: '/adidas',
        name: 'adidas',
        component: './Adidas/',
      },
      {
        path: '/nike',
        name: 'nike',
        component: './Nike/',
      },
      {
        path: '/amazon',
        name: 'amazon',
        component: './Amazon/',
      },
      {
        path: '/landing-page',
        name: 'landingpage',
        component: './LandingPage/',
      },
      {
        path: '/category/:title/:nodeid',
        name: 'listcategory',
        component: './ListCategory/',
      },
      {
        path: '/categorytest/:catid',
        name: 'listcategorytest',
        component: './ListCategoryTest/',
      },
      {
        path: '/categorybytri/:categoryid',
        name: 'categorybytri',
        component: './CategoryByTri/',
      },
      {
        path: '/register',
        name: 'register',
        component: './Register/',
      },
      {
        path: '/help-about',
        name: 'helpabout',
        component: './HelpAbout/',
      },
      {
        path: '/forgotpassword',
        name: 'forgotpass',
        component: './ForgotPassword/',
      },
      {
        path: '/confirmotp',
        name: 'confirmotp',
        component: './ConfirmOtp/',
      },
      {
        path: '/changepass',
        name: 'changepass',
        component: './ChangePassword/',
      },
      {
        path: '/login',
        name: 'login',
        component: './Login/',
      },

      {
        component: '404',
      },
    ],
  },
  {
    component: '404',
  },
];
