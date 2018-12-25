/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/sort-comp */
/* eslint-disable dot-notation */
/* eslint-disable prefer-template */
/* eslint-disable import/newline-after-import */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { formatMessage } from 'umi/locale';
// eslint-disable-next-line no-unused-vars
import SiderMenu from '@/components/SiderMenu';
import Authorized from '@/utils/Authorized';
import SettingDrawer from '@/components/SettingDrawer';
import { Link } from 'react-router-dom';
import router from 'umi/router';
import logo from '../assets/logo.svg';
import Context from './MenuContext';
import Exception403 from '../pages/Exception/403';
import styles from './AccountLayout.less';
import Footer from './Footer';
import GlobalCart from '@/components/GlobalCart';
const { Content } = Layout;

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null;
      }

      let locale = 'menu';
      if (parentName) {
        locale = `${parentName}.${item.name}`;
      } else {
        locale = `menu.${item.name}`;
      }

      const result = {
        ...item,
        name: formatMessage({ id: locale, defaultMessage: item.name }),
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

@connect(({ user, global, setting, loading, list }) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
  setting,
  list,
}))
class Header extends React.Component {
  state = {};

  handleClickButtonCart() {
    this.props.dispatch({
      type: 'list/modal',
      payload: true,
    });
  }
  handleOpenAccount(open) {
    this.setState(
      {
        [open]: !this.state[open],
      },
      () => {}
    );
  }
  hanldeInfomation() {
    localStorage.account ? router.push('/account/accountinformation') : router.push('/login');
  }
  handleClickOut() {
    localStorage.removeItem('account');
    this.setState({
      open: false,
      openHelp: false,
    });
    router.push('/login');
  }
  handleClickOpenHelp() {
    this.setState({
      openHelp: !this.state.openHelp,
    });
  }
  render() {
    const { collapsed, isMobile, logo } = this.props;
    var { listArr } = this.props.list;
    var total = 0;
    for (var i = 0; i < listArr.length; i++) {
      total = total + listArr[i][1];
    }
    console.log(this.props);
    return (
      <div className={`${styles.header__header___1t3MH}`}>
        <nav
          className={`${styles['header__my-navbar___2Cghd']} ${
            styles['header__navbar-toggleable-sm___pR4tF']
          } ${styles['header__nav-header___3lWCb']}`}
        >
          <div
            className={`${styles['container__container___1fvX0']} ${
              styles['header__container___2d-Oi']
            }`}
          >
            <div
              className={`${styles['hidden-md-up']} ${styles['header__my-navbar-toggler___2PiaS']}`}
            >
              <button className={`${styles['header__btn-icon___17D-i']}`} type="button">
                <i onClick={() => this.hanldeInfomation()} className={`${styles['ic-ic-user']}`} />
              </button>
            </div>
            <Link to={`/home`} className={`${styles['header__navbar-brand___SzzgD']}`}>
              <img style={{ position: 'relative', top: '6px' }} src="/image/logo123order.png" />
            </Link>
            <div
              className={`${styles['clearfix']} ${styles['collapse']} ${
                styles['header__navbar-collapse___2AK1h']
              }`}
            >
              <Link
                to={`/home`}
                className={`${styles['hidden-md-up']} ${styles['header__navbar-brand___SzzgD']}`}
              >
                <img src="/image/logo123order.png" />
              </Link>
              <ul
                className={`${styles['hidden-md-down']} ${styles['header__navbar-nav___9cfBy']} ${
                  styles['header__navbar-left___25OFe']
                }`}
              >
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/account/dealinday`}
                    className={`${styles['header__nav-link___3W4sc']}`}
                  >
                    Deal Sốc
                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <a
                    onClick={() => this.handleClickOpenHelp()}
                    style={{ textDecoration: 'none' }}
                    className={`${styles['header__nav-link___3W4sc'] +
                      ' ' +
                      styles['language-dropdown__dropdown-toggle___3DM4H']}`}
                  >
                    Mua hộ
                  </a>
                  {this.state.openHelp ? (
                    <div
                      style={{
                        position: 'absolute',
                        top: '29px',
                        left: '0px',
                        boxShadow: 'rgba(78, 89, 93, 0.15) 0px 8px 11px 0px',
                        zIndex: 10,
                        background: 'rgb(255, 255, 255)',
                        padding: '9px 0px',
                      }}
                    >
                      <div style={{ minWidth: '159px' }}>
                        <Link
                          to={`/account/helpbuy`}
                          onClick={() => this.handleClickOpenHelp()}
                          className={
                            styles['jsx-2989784357'] +
                            ' ' +
                            styles['dropdown-item'] +
                            ' ' +
                            styles['item-login']
                          }
                        >
                          Đăng ký mua sản phẩm
                        </Link>
                        <Link
                          to={`/account/helpbuylist`}
                          onClick={() => this.handleClickOpenHelp()}
                          className={
                            styles['jsx-2989784357'] +
                            ' ' +
                            styles['dropdown-item'] +
                            ' ' +
                            styles['item-login']
                          }
                        >
                          Danh sách sản phẩm đã đăng ký
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link to={`/adidas`} className={`${styles['header__nav-link___3W4sc']}`} />
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link to={`/nike`} className={`${styles['header__nav-link___3W4sc']}`} />
                </li>
              </ul>
              <ul
                className={`${styles['header__navbar-nav___9cfBy']} ${
                  styles['header__navbar-right___2_zf5']
                }`}
              >
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <div
                    className={`${styles['language-dropdown__dropdown____KQAB']} ${
                      styles['language-dropdown__dropdown-section___2Exp9']
                    } undefined`}
                  >
                    <a
                      style={{ color: 'inherit' }}
                      className={`${styles['text-uppercase']} ${
                        styles['language-dropdown__nav-link___2sOBe']
                      } ${styles['language-dropdown__dropdown-toggle___3DM4H']}`}
                      href="#"
                    >
                      vn
                    </a>
                    <ul className={`${styles['language-dropdown__dropdown-menu___2iFhf']}`}>
                      <li className={`${styles['language-dropdown__active___23oVE']}`}>
                        <a
                          className={`${styles['language-dropdown__dropdown-item___3bDVi']}`}
                          href="#"
                        >
                          Tiếng Việt (vn)
                        </a>
                      </li>
                      <li>
                        <a
                          className={`${styles['language-dropdown__dropdown-item___3bDVi']}`}
                          href="#"
                        >
                          English (en)
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {this.state.open ? (
                  <li className={`${styles['header__nav-item___MQLXP']}`}>
                    <div className={`${styles['auth-buttons__auth___33bfZ']}`}>
                      {localStorage.account ? (
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => this.handleOpenAccount('open')}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${styles[
                            'auth-buttons__btn-sign-in___1nV-O'
                          ] +
                            ' ' +
                            styles['language-dropdown__dropdown-toggle___3DM4H']}`}
                        >
                          Tài khoản
                        </span>
                      ) : (
                        <Link
                          to={'/login'}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                            styles['auth-buttons__btn-sign-in___1nV-O']
                          }`}
                        >
                          Đăng nhập
                        </Link>
                      )}
                      {!localStorage.account && (
                        <Link
                          to={'/register'}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                            styles['auth-buttons__btn-register___3sIO1']
                          }`}
                        >
                          Tạo tài khoản
                        </Link>
                      )}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '30px',
                        left: '0px',
                        boxShadow: 'rgba(78, 89, 93, 0.15) 0px 8px 11px 0px',
                        zIndex: 10,
                        background: 'rgb(255, 255, 255)',
                        padding: '9px 0px',
                      }}
                      className="jsx-1151532622 jsx-1655770887 content"
                    >
                      <div style={{ minWidth: '159px' }}>
                        <Link
                          to={`/account/accountinformation`}
                          onClick={() => this.handleOpenAccount('open')}
                          className={
                            styles['jsx-2989784357'] +
                            ' ' +
                            styles['dropdown-item'] +
                            ' ' +
                            styles['item-login']
                          }
                        >
                          Thông tin tài khoản
                        </Link>
                        <Link
                          to={`/account/dealinday`}
                          onClick={() => this.handleOpenAccount('open')}
                          className={
                            styles['jsx-2989784357'] +
                            ' ' +
                            styles['dropdown-item'] +
                            ' ' +
                            styles['item-login']
                          }
                        >
                          Deal sốc trong ngày
                        </Link>
                        <hr />
                        <div>
                          <div
                            onClick={() => this.handleClickOut()}
                            className={
                              styles['jsx-2989784357'] +
                              ' ' +
                              styles['dropdown-item'] +
                              ' ' +
                              styles['item-login']
                            }
                          >
                            Thoát
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className={`${styles['header__nav-item___MQLXP']}`}>
                    <div className={`${styles['auth-buttons__auth___33bfZ']}`}>
                      {localStorage.account ? (
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => this.handleOpenAccount('open')}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${styles[
                            'auth-buttons__btn-sign-in___1nV-O'
                          ] +
                            ' ' +
                            styles['language-dropdown__dropdown-toggle___3DM4H']}`}
                          href="/auth/signin?redirect=/"
                        >
                          Tài khoản
                        </span>
                      ) : (
                        <Link
                          to={'/login'}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                            styles['auth-buttons__btn-sign-in___1nV-O']
                          }`}
                          href="/auth/signin?redirect=/"
                        >
                          Đăng nhập
                        </Link>
                      )}
                      {!localStorage.account && (
                        <Link
                          to={'/register'}
                          className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                            styles['auth-buttons__btn-register___3sIO1']
                          }`}
                          href="/auth/register"
                        >
                          Tạo tài khoản
                        </Link>
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <button
              onClick={() => this.handleClickButtonCart()}
              className={`${styles['header__cart-icon___38YSW']} ${
                styles['cart-button__btn-cart___2KPCq']
              }`}
              type="button"
            >
              <i className={`${styles['ic-ic-bag']} ${styles['cart-button__icon___3QHeM']}`}>
                {total > 0 && <span className={styles['cart-button__badge___1tnYa']}>{total}</span>}
              </i>
            </button>
          </div>
        </nav>
        <nav
          className={`${styles['hidden-lg-up']} ${
            styles['header__mobile-nav-cat-container___2JTtk']
          } ${styles['cate-show']}`}
          id={`${styles['cate-mobile-root']}`}
        >
          <div
            className={`${styles['container__container___1fvX0']} ${
              styles['header__padding-remove___uM9bo']
            }`}
          >
            <ul className={`${styles['header__mobile-nav-cat___1wJ9O']}`}>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link to={`/account/dealinday`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Deal Sốc
                </Link>
              </li>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link to={`/acoount/helpbuy`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Mua hộ
                </Link>
              </li>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link
                  to={`/account/helpbuylist`}
                  className={`${styles['header__nav-link___3W4sc']}`}
                >
                  Danh sách đặt mua
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div />
      </div>
    );
  }
}

@connect(({ list }) => ({
  list,
}))
class HomeLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getPageTitle = memoizeOne(this.getPageTitle);
    this.getBreadcrumbNameMap = memoizeOne(this.getBreadcrumbNameMap, isEqual);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    this.matchParamsPath = memoizeOne(this.matchParamsPath, isEqual);
  }

  state = {
    rendering: true,
    isMobile: false,
    menuData: this.getMenuData(),
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
    });
    dispatch({
      type: 'setting/getSetting',
    });
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
    this.enquireHandler = enquireScreen(mobile => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
    window.onpopstate = e => {
      this.props.dispatch({
        type: 'list/modal',
        payload: false,
      });
    };
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    const { isMobile } = this.state;
    const { collapsed } = this.props;
    if (isMobile && !preProps.isMobile && !collapsed) {
      this.handleMenuCollapse(false);
    }
    if (this.props.location.pathname !== preProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
    unenquireScreen(this.enquireHandler);
  }

  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }

  getMenuData() {
    const {
      route: { routes },
    } = this.props;
    return memoizeOneFormatter(routes);
  }

  /**
   * Get breadcrumb mapping
   * @param {Object} menuData Menu configuration
   */
  getBreadcrumbNameMap() {
    const routerMap = {};
    const mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        }
        // Reduce memory usage
        routerMap[menuItem.path] = menuItem;
      });
    };
    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  matchParamsPath = pathname => {
    const pathKey = Object.keys(this.breadcrumbNameMap).find(key =>
      pathToRegexp(key).test(pathname)
    );
    return this.breadcrumbNameMap[pathKey];
  };

  getPageTitle = pathname => {
    const currRouterData = this.matchParamsPath(pathname);

    if (!currRouterData) {
      return '123order ';
    }
    const message = formatMessage({
      id: currRouterData.locale || currRouterData.name,
      defaultMessage: currRouterData.name,
    });
    return `${message} - 123Order`;
  };

  getLayoutStyle = () => {
    const { isMobile } = this.state;
    const { fixSiderbar, collapsed, layout } = this.props;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
      };
    }
    return null;
  };

  getContentStyle = () => {
    const { fixedHeader } = this.props;
    return {
      margin: '24px 24px 0',
      paddingTop: fixedHeader ? 64 : 0,
    };
  };

  handleMenuCollapse = collapsed => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  renderSettingDrawer() {
    // Do not render SettingDrawer in production
    // unless it is deployed in preview.pro.ant.design as demo
    const { rendering } = this.state;
    if ((rendering || process.env.NODE_ENV === 'production') && APP_TYPE !== 'site') {
      return null;
    }
    return <SettingDrawer />;
  }
  handleClick() {
    this.props.dispatch({
      type: 'list/modal',
      payload: false,
    });
  }
  render() {
    var { modal } = this.props.list;

    const {
      // eslint-disable-next-line no-unused-vars
      navTheme,
      layout: PropsLayout,
      children,
      location: { pathname },
    } = this.props;
    const { isMobile, menuData } = this.state;
    // eslint-disable-next-line no-unused-vars
    const isTop = PropsLayout === 'topmenu';
    const routerConfig = this.matchParamsPath(pathname);
    const layout = (
      <div
        className={`${styles['default-layout__container___13v1V']} ${
          styles.home__defaultLayout___Q6Udu
        }`}
      >
        <div
          id="body-modals"
          onClick={() => this.handleClick()}
          className={
            modal === false
              ? styles['backdrop__body-backdrop___1rvky']
              : styles['backdrop__body-backdrop___1rvky'] + ' ' + styles['backdrop__active___3kejv']
          }
        />
        <Header />
        {children}
        <Footer />
        <GlobalCart />
      </div>
    );
    return (
      <React.Fragment>
        <DocumentTitle title={this.getPageTitle(pathname)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div id="screen" className={classNames(params)}>
                  {layout}
                </div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}

export default connect(({ global, setting }) => ({
  collapsed: global.collapsed,
  layout: setting.layout,
  ...setting,
}))(HomeLayout);
