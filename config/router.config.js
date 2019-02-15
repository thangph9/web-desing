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
    ],
  },
  {
    path: '/checkout',
    component: '../layouts/CheckoutLayout',
    routes: [
      { path: '/checkout', component: './Checkout/' },
      { path: '/checkout/paycomplete', component: './PayCompleted/' },
    ],
  },
  {
    path: '/cms123order',
    component: '../layouts/CMS123order',
    routes: [
      { path: '/cms123order', redirect: '/cms123order/user' },
      { path: '/cms123order/products', component: '/CMS/Products' },
      { path: '/cms123order/categorys', component: '/CMS/Categorys' },
      { path: '/cms123order/orderlist', component: '/CMS/OrderList' },
      { path: '/cms123order/user', component: '/CMS/User' },
      { path: '/cms123order/options', component: '/CMS/Options' },
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
        component: './Home/',
      },
      {
        path: '/homebytri',
        name: 'homebytri',
        component: './HomeByTri/',
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
  // app
  /*
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },

      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
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
        ],
      },

      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
*/
];
