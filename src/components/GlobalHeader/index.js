import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Debounce from 'lodash-decorators/debounce';
import styles from './styles.less';
import {Icon} from 'antd';
// eslint-disable-next-line no-undef

class GlobalHeader extends PureComponent {
  state = {};

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
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
    localStorage.account
      ? this.props.history.push('/accountinformation')
      : this.props.history.push('/login');
  }
  handleClickOut() {
    localStorage.removeItem('account');
    this.setState({
      open: false,
      openHelp: false,
    });
    this.props.history.push('/login');
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
                    to={`/Amazon`}
                    className={`${styles['header__nav-link___3W4sc']}`}
                  >

                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/ebay`}
                    className={`${styles['header__nav-link___3W4sc']}`}
                  >

                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/adidas`}
                    className={`${styles['header__nav-link___3W4sc']}`}
                  >

                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/nike`}
                    className={`${styles['header__nav-link___3W4sc']}`}
                  >

                  </Link>
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
                          href="/auth/register"
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
                        <Link
                          to={`/account/helpbuy`}
                          onClick={() => this.handleOpenAccount('open')}
                          className={
                            styles['jsx-2989784357'] +
                            ' ' +
                            styles['dropdown-item'] +
                            ' ' +
                            styles['item-login']
                          }
                          href="/vn/account/addresses"
                        >
                          Mua hộ
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
            <Link style={{color:'#4e595d'}} to="/list-order">
              <Icon style={{fontSize:'25px',top:'7px',marginLeft:'10px',position:'relative'}} type="schedule" />
            </Link>
          </div>
        </nav>
        <nav style={{display:'none'}}
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

          </div>
        </nav>
        <div />
      </div>
    );
  }
}
export default GlobalHeader;
