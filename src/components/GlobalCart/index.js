/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-escape */
/* eslint-disable no-var */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable dot-notation */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import Debounce from 'lodash-decorators/debounce';
import { connect } from 'dva';
import Slider from 'react-slick';
import styles from './index.less';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      sale_price: 0,
    };
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    var { data } = this.props;
    var dataCart = {};
    data && Array.isArray(data) ? (dataCart = data[0]) : {};
    return (
      <div className={styles['clearfix'] + ' ' + styles['cart__product___2fY_V']}>
        <a className={styles['cart__image___1z2eh']} href="javascript:void(0)">
          <img src={`/images/f/${dataCart.image.replace(/\-/g, '')}`} />
        </a>
        <div className={styles['cart__info___3nGrF']}>
          <div className={styles['cart__name___5n2d7']}>
            <a href="javascript:void(0)">{dataCart.title}</a>
          </div>
          <div className={styles['row__row___2roCA']}>
            <div
              className={styles['cart__col-6___7l1MC'] + ' ' + styles['cart__form-group___1AIXC']}
            >
              <div>
                <label className={styles['cart__quantity___1ZH6d']}>Số lượng:</label>
                <span
                  className={
                    styles['cart__select-style___nbJ2_'] +
                    ' ' +
                    styles['cart__form-control___3g0tc']
                  }
                >
                  <select
                    defaultValue={data.length}
                    className={
                      styles['cart__form-control___3g0tc'] +
                      ' ' +
                      styles['cart__select-quantity___xw-pi']
                    }
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                  </select>
                </span>
              </div>
            </div>
            <div
              className={
                styles['text-right'] +
                ' ' +
                styles['cart__col-6___7l1MC'] +
                ' ' +
                styles['cart__price-wrap___2GHWx']
              }
            >
              <div className={styles['cart__price___10cWN']}>
                <span className={styles['cart__retail-price___1SKLf']}>
                  {dataCart.price}
                  &nbsp;đ
                </span>
                <span className={styles['cart__sale-price___3jWGr']}>
                  {dataCart.sale_price}
                  &nbsp;đ
                </span>
              </div>
              <a className={styles['cart__btn-remove___3IkR9']} href="javascript:void(0)">
                Bỏ sản phẩm
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default class GlobalCart extends PureComponent {
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
  handleClickButtonOut() {
    var cart = document.getElementById('cart-form');
    cart.classList.remove('order-components-global-cart-index-cart__active___Q2UCI');
    var bodyModal = document.getElementById('body-modals');
    bodyModal.classList.remove('order-layouts-home-layout-backdrop__active___3kejv');
  }
  summary(listArr) {
    var obj = {};
    listArr &&
      listArr.length > 0 &&
      listArr.forEach((v, i) => {
        obj.price = v[i].price * v.length;
        obj.sale_price = v[i].sale_price * v.length;
      });
    return obj;
  }
  render() {
    const { collapsed, isMobile, logo } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
    };
    var authorityString = '';

    var listArr = [];
    console.log(arr);
    console.log(localStorage);
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      authorityString = localStorage.getItem(localStorage.key(i))
        ? localStorage.getItem(localStorage.key(i)).split('|')
        : '';
      var arr =
        authorityString != ''
          ? authorityString.map((v, i) => {
              return JSON.parse(v);
            })
          : [];
      listArr.push(arr);
    }
    console.log(listArr);
    return (
      <div id="cart-form" className={styles['cart__cart___yD7P6']}>
        <div className={styles['clearfix'] + ' ' + styles['cart__heading___1Yc0F']}>
          <div
            onClick={() => this.handleClickButtonOut()}
            className={styles['cart__btn-close___1BLZG']}
            title="Tiếp tục mua sắm!"
          >
            <span className={styles['ic-ic-close'] + ' ' + styles['cart__icon___DWUE4']} />
          </div>
          <h4 className={styles['cart__title___XIF0i']}>
            Giỏ hàng
            <span>(0 Sản phẩm)</span>
          </h4>
        </div>
        <div
          className={
            styles['partner-promote-section'] +
            ' ' +
            styles['cart-promo-list__promote-section___VzfTM']
          }
        >
          <Slider {...settings}>
            <p
              className={
                styles['cart-promo-list__content___1N3l1'] +
                ' ' +
                styles['cart-promo-list__multi-item____Q_7w']
              }
            >
              <span>Giảm giá </span>
              <span className={styles['cart-promo-list__bold-text___1wUCM']}>200.000₫</span>
              <span> cho thẻ </span>
              <span className={styles['cart-promo-list__bold-text___1wUCM']}>VP Bank</span>
              <span> khi mua hàng trên </span>
              <span className={styles['cart-promo-list__bold-text___1wUCM']}>
                <span>1.000.000₫</span>.
              </span>
              <a href="https://pages.leflair.vn/promotions" target="blank">
                {' '}
                Chi tiết→
              </a>
            </p>
          </Slider>
        </div>
        <div
          style={{ height: 'calc(100% - 115px)' }}
          className={
            listArr && listArr.length > 0
              ? styles['cart__body___XUP_6']
              : styles['cart__body___XUP_6'] + ' ' + styles['cart__empty___1VFD2']
          }
        >
          <div className={styles['cart__cart-filled___1eDTA']}>
            <div>
              {listArr && listArr.length > 0 ? (
                listArr.map((v, i) => {
                  return <CartItem key={i} data={v} />;
                })
              ) : (
                <div className={styles['cart__cart-empty___2VwBC']}>
                  <div className={styles['cart__icon___DWUE4']}>
                    <img src="https://www.leflair.vn/images/empty-bag.jpg" />
                  </div>
                  <div>Giỏ hàng của bạn còn trống</div>
                  <div>
                    <button
                      className={
                        styles['cart__btn___1bOR1'] +
                        ' ' +
                        styles['cart__btn-primary___2una7'] +
                        ' ' +
                        styles['cart__button-shopping___qfkgg']
                      }
                      type="button"
                    >
                      Tiếp tục mua sắm!
                    </button>
                  </div>
                </div>
              )}
            </div>

            {listArr &&
              listArr.length > 0 && (
                <div>
                  <hr />
                  <div
                    className={styles['row__row___2roCA'] + ' ' + styles['cart__subtotal___b7ocn']}
                  >
                    <div className={styles['cart__col-6___7l1MC']}>
                      Thành tiền: {this.summary(listArr).price}
                      &nbsp;đ
                    </div>
                    <div className={styles['text-right'] + ' ' + styles['cart__col-6___7l1MC']}>
                      <span />
                    </div>
                  </div>
                  <div className={styles['row__row___2roCA']}>
                    <div className={styles['cart__col-6___7l1MC']}>
                      Bạn đã tiết kiệm:
                      {this.summary(listArr).sale_price}
                      &nbsp;đ
                    </div>
                    <div className={styles['text-right'] + ' ' + styles['cart__col-6___7l1MC']}>
                      <span />
                    </div>
                  </div>
                  <div className={styles['cart__btn-proceed-checkout-dt___YP2ij']}>
                    <button
                      href="javascript:void(0)"
                      className={
                        styles['cart__btn___1bOR1'] +
                        ' ' +
                        styles['cart__btn-proceed-checkout___1xAEz'] +
                        ' ' +
                        styles['cart__btn-primary___2una7']
                      }
                      id="btn-proceed-checkout"
                    >
                      Tiến Hành Đặt Hàng
                    </button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}
