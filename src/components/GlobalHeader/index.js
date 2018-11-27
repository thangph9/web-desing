import React, { PureComponent } from 'react';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import styles from './styles.less';

// eslint-disable-next-line no-undef

class GlobalHeader extends PureComponent {
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
  render() {
    const { collapsed, isMobile, logo } = this.props;
    var { listArr } = this.props.list;
    var total = 0;
    for (var i = 0; i < listArr.length; i++) {
      total = total + listArr[i].length;
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
                <i className={`${styles['ic-ic-user']}`} />
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
                  <Link to={`/amazon`} className={`${styles['header__nav-link___3W4sc']}`}>
                    Amazon
                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link to={`/ebay`} className={`${styles['header__nav-link___3W4sc']}`}>
                    Ebay
                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link to={`/adidas`} className={`${styles['header__nav-link___3W4sc']}`}>
                    Adidas
                  </Link>
                </li>
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <Link to={`/nike`} className={`${styles['header__nav-link___3W4sc']}`}>
                    Nike
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
                <li className={`${styles['header__nav-item___MQLXP']}`}>
                  <div className={`${styles['auth-buttons__auth___33bfZ']}`}>
                    <a
                      className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                        styles['auth-buttons__btn-sign-in___1nV-O']
                      }`}
                      href="/auth/signin?redirect=/"
                    >
                      Đăng nhập
                    </a>
                    <a
                      className={`${styles['auth-buttons__nav-link___1DCMU']} ${
                        styles['auth-buttons__btn-register___3sIO1']
                      }`}
                      href="/auth/register"
                    >
                      Tạo tài khoản
                    </a>
                  </div>
                </li>
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
                <Link to={`/amazon`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Amazon
                </Link>
              </li>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link to={`/ebay`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Ebay
                </Link>
              </li>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link to={`/adidas`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Adidas
                </Link>
              </li>
              <li className={`${styles['header__nav-item___MQLXP']}`}>
                <Link to={`/nike`} className={`${styles['header__nav-link___3W4sc']}`}>
                  Nike
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
export default GlobalHeader;
