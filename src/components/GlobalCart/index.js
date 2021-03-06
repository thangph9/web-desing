/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable import/order */
/* eslint-disable no-continue */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-empty-pattern */
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
import styles from './index.less';
import Link from 'umi/link';

var currencyFormatter = require('currency-formatter');

@connect(({ list }) => ({
  list,
}))
class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      sale_price: 0,
    };
  }
  handleChange(event, id, index) {
    var localCart = JSON.parse(localStorage.getItem('cart'));
    localCart[index][1] = Number(event.target.value);
    console.log(localCart);
    localStorage.setItem('cart', JSON.stringify(localCart));
    this.props.dispatch({
      type: 'list/local',
      payload: JSON.parse(localStorage.getItem('cart')),
    });
  }
  handleRemoveItem(item) {
    console.log(item);
    var localCart = JSON.parse(localStorage.getItem('cart'));
    var arr = localCart.filter((v, i) => {
      return v[0].productid != item.productid || v[0].size != item.size || v[0].color != item.color;
    });
    localStorage.setItem('cart', JSON.stringify(arr));
    this.props.dispatch({
      type: 'list/local',
      payload: JSON.parse(localStorage.getItem('cart')),
    });
  }
  render() {
    // eslint-disable-next-line prefer-destructuring
    var { data, index } = this.props;
    var dataCart = {};

    data && Array.isArray(data) ? (dataCart = data[0]) : {};
    return (
      <div className={styles['clearfix'] + ' ' + styles['cart__product___2fY_V']}>
        <div style={{backgroundImage:`url(/images/ft/${dataCart.image.replace(/\-/g, '')})`}} className={styles['cart__image___1z2eh']+' '+styles['background-item']} href="javascript:void(0)">

        </div>
        <div className={styles['cart__info___3nGrF']}>
          <div className={styles['cart__name___5n2d7']}>
            <a href="javascript:void(0)">{dataCart.title}</a>
          </div>
          <div className={styles['row__row___2roCA']}>
            <div
              className={
                styles['subscription-form__col-7___1XUwT'] +
                ' ' +
                styles['cart__form-group___1AIXC']
              }
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
                    value={data[1]}
                    onChange={e => this.handleChange(e, data, index)}
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
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                  </select>
                </span>
              </div>
              <div style={{ marginTop: '10px' }}>
                {dataCart.color ? (
                  <label className={styles['cart__quantity___1ZH6d']}>
                    Màu sắc:
                    {' ' + dataCart.color}
                  </label>
                ) : (
                  ''
                )}
                {dataCart.size ? (
                  <label className={styles['cart__quantity___1ZH6d']}>
                    Kích cỡ:
                    {' ' + dataCart.size}
                  </label>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div
              className={
                styles['text-right'] +
                ' ' +
                styles['subscription-form__col-5___hlhS3'] +
                ' ' +
                styles['cart__price-wrap___2GHWx']
              }
            >
              <div className={styles['cart__price___10cWN']}>
                <span className={styles['cart__retail-price___1SKLf']}>
                  {currencyFormatter.format(dataCart.price, { locale: 'vi-VN' })}
                </span>
                <span className={styles['cart__sale-price___3jWGr']}>
                  {currencyFormatter.format(dataCart.sale_price, { locale: 'vi-VN' })}
                </span>
              </div>
              <a
                onClick={() => this.handleRemoveItem(dataCart)}
                className={styles['cart__btn-remove___3IkR9']}
                href="javascript:void(0)"
              >
                Bỏ sản phẩm
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
@connect(({ list }) => ({
  list,
}))
class GlobalCart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    this.props.dispatch({
      type: 'list/modal',
      payload: false,
    });
  }
  summary(listArr) {
    var obj = {};
    var price = 0;
    var sale_price = 0;
    if (listArr && listArr.length > 0) {
      listArr.forEach((v, i) => {
        price = price + v[0].price * v[1];
        sale_price = sale_price + v[0].sale_price * v[1];
      });
    }
    obj.price = price;
    obj.sale_price = sale_price;
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
    var { listArr } = this.props.list;
    var total = 0;
    for (var i = 0; i < listArr.length; i++) {
      total = total + listArr[i][1];
    }
    var { modal } = this.props.list;
    return (
      <div
        id="cart-form"
        className={
          modal == false
            ? styles['cart__cart___yD7P6']
            : styles['cart__cart___yD7P6'] + ' ' + styles['cart__active___Q2UCI']
        }
      >
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
            <span>({total} Sản phẩm)</span>
          </h4>
        </div>
        <div
          style={{ display: 'none' }}
          className={
            styles['partner-promote-section'] +
            ' ' +
            styles['cart-promo-list__promote-section___VzfTM']
          }
        >
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
                  return <CartItem key={i} index={i} data={v} />;
                })
              ) : (
                <div className={styles['cart__cart-empty___2VwBC']}>
                  <div className={styles['cart__icon___DWUE4']}>
                    <img src="https://www.leflair.vn/_next/static/images/c9c00ac7062ff11dd9aced7375a01771.jpg" />
                  </div>
                  <div>Giỏ hàng của bạn còn trống</div>
                  <div>
                    <button onClick={()=>this.handleClickButtonOut()}
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
                      Thành tiền:{' '}
                      {currencyFormatter.format(this.summary(listArr).sale_price, {
                        locale: 'vi-VN',
                      })}
                    </div>
                    <div className={styles['text-right'] + ' ' + styles['cart__col-6___7l1MC']}>
                      <span />
                    </div>
                  </div>
                  <div className={styles['row__row___2roCA']}>
                    <div className={styles['cart__col-6___7l1MC']}>
                      Bạn đã tiết kiệm:
                      {currencyFormatter.format(
                        this.summary(listArr).price - this.summary(listArr).sale_price,
                        { locale: 'vi-VN' }
                      )}
                    </div>
                    <div className={styles['text-right'] + ' ' + styles['cart__col-6___7l1MC']}>
                      <span />
                    </div>
                  </div>
                  <div className={styles['cart__btn-proceed-checkout-dt___YP2ij']}>
                    <Link to={'/checkout'}>
                      <button
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
                    </Link>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}
export default GlobalCart;
