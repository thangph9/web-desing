/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Slider from 'react-slick';
import styles from './index.less';

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
          style={{ height: '1500px' }}
          className={styles['cart__body___XUP_6'] + ' ' + styles['cart__empty___1VFD2']}
        >
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
        </div>
      </div>
    );
  }
}
