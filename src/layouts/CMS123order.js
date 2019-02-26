/* eslint-disable prefer-destructuring */
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
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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
import { Link, Redirect } from 'react-router-dom';
import router from 'umi/router';
import logo from '../assets/logo.svg';
import Context from './MenuContext';
import Exception403 from '../pages/Exception/403';
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
const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;
@connect(({ user }) => ({
  user,
}))
class CMS extends React.PureComponent {
  state = {
    collapsed: false,
    title: 'User',
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  componentDidMount() {}
  componentWillMount() {
    this.props.dispatch({
      type: 'user/checkpermission',
    });
  }
  componentWillReceiveProps(nextProp) {
    if (this.props.user.checkpermission !== nextProp.user.checkpermission) {
      this.setState({
        status: nextProp.user.checkpermission.status,
      });
    }
  }
  handleClickBreadcrumb(item) {
    this.setState({
      title: item,
    });
  }
  render() {
    var { items } = this.props;
    console.log(this.props);
    if (!localStorage.account) {
      return <Redirect to={`/login`} />;
    }
    if (this.state.status === 'error') {
      return <Redirect to={`/account/accountinformation`} />;
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>
                <Link
                  onClick={() => this.handleClickBreadcrumb('User')}
                  style={{ color: '#fff', textDecoration: 'none' }}
                  to={`/cms123order/user`}
                >
                  User
                </Link>
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="schedule" />
                  <span>Order List</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link
                  onClick={() => this.handleClickBreadcrumb('List-Category')}
                  to={`/cms123order/cmscategory`}
                >
                  List Category
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link
                  onClick={() => this.handleClickBreadcrumb('List-Product')}
                  to={`/cms123order/cmsproduct`}
                >
                  List Product
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link
                  onClick={() => this.handleClickBreadcrumb('List-Order')}
                  to={`/cms123order/cmsorder`}
                >
                  List Order
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="shopping" />
                  <span>Product Category</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <Link
                  onClick={() => this.handleClickBreadcrumb('Product')}
                  to={`/cms123order/products`}
                >
                  Product
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link
                  onClick={() => this.handleClickBreadcrumb('Category')}
                  to={`/cms123order/categorys`}
                >
                  Category
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content>
            <Breadcrumb style={{ padding: '16px 10px', background: '#fff' }}>
              <Breadcrumb.Item>
                <Link to={`/home`}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/cms123order`}>CMS</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span>{this.state.title}</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div>{items}</div>
          </Content>
        </Layout>
      </Layout>
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
      <div>
        <CMS items={children} {...this.props} />
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
