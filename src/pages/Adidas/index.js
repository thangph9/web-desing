/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-empty */
/* eslint-disable prefer-destructuring */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-var */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Skeleton,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
}))
@Form.create()
class Adidas extends PureComponent {
  componentDidMount() {
    var { dispatch } = this.props;
    var anhBanner = document.getElementsByClassName('anh-banner')[0];
    if (anhBanner != null) {
      anhBanner.style.height = '400px';
      anhBanner.style['background'] = "url('/image/Reload-1s-100px.gif') no-repeat center";
    }
    var anhAo = document.getElementsByClassName('anh-ao');
    for (var i = 0; i < anhAo.length; i++) {
      if (anhAo != null) {
        anhAo[i].style.height = '242px';
        anhAo[i].style['background'] = "url('/image/Reload-1s-100px.gif') no-repeat center";
      }
    }
    dispatch({
      type: 'product/adidas',
      payload: {},
    });
  }
  renderBanner() {
    var {
      loading: { global },
    } = this.props;
    return (
      <div className={`${styles['row__row___2roCA']}`}>
        <div
          className={`${styles['first-sale-tile__col-lg-9___2uu-j']} ${
            styles['first-sale-tile__image-container___VGe3q']
          }`}
        >
          <Skeleton className="anh-banner" active loading={!global} paragraph={false} title={false}>
            <img
              src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg"
              srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w"
              sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw"
              alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc"
            />
          </Skeleton>
        </div>
        <div
          className={`${styles['first-sale-tile__col-lg-3___2ZXJG']} ${
            styles['first-sale-tile__text-container___3Kt7T']
          }`}
        >
          <Skeleton active loading={!global} paragraph={{ rows: 5, width: '100%' }}>
            <h2 className={`${styles['first-sale-tile__title___2Dutp']}`}>
              Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc
            </h2>
            <span className={`${styles['first-sale-tile__time-wrap___3v0IL']}`}>
              <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />{' '}
              <span className={`${styles['end-time__text___1A-sx']}`}>Còn</span>{' '}
              <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
            </span>
            <button
              className={`${styles['first-sale-tile__btn___2kqdj']} ${
                styles['first-sale-tile__btn-primary___2YFp4']
              } ${styles['first-sale-tile__btnSeeMore___2a8MB']}`}
            >
              Xem chi tiết
            </button>
          </Skeleton>
        </div>
      </div>
    );
  }
  renderBannerMoblie() {
    var {
      loading: { global },
    } = this.props;
    return (
      <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
        <div className={`${styles['sale-card__international-tile___3A645']}`}>Hàng nhập khẩu</div>
        <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
          <Skeleton className="anh-ao" active loading={!global} paragraph={false} title={false}>
            <img
              className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
              src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg"
              srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w"
              sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
              alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc"
            />
          </Skeleton>
        </div>
        <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
          <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
            Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc
          </div>
          <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
            <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
              <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />{' '}
              <span className={`${styles['end-time__text___1A-sx']}`}>Còn</span>{' '}
              <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  renderItems() {
    var {
      loading: { global },
    } = this.props;
    return (
      <a
        className={`${styles['default__col-md-6___9I2wX']} ${
          styles['default__padding-remove___2T9LM']
        }`}
        href="/sales/nanas-wonderland-windmill-nutritionworks...-5bd98f1f6ada6d0bdd52fc2f"
      >
        <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
          <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
            <Skeleton className="anh-ao" active loading={!global} paragraph={false} title={false}>
              <img
                className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                src="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg"
                srcSet="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg 640w, https://images.leflair.vn/w1080/q85/5bdadd62c6b3c5db940a2338.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdadd62c6b3c5db940a2338.jpg 1440w"
                sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                alt="Nana's Wonderland, Windmill, NutritionWorks..."
              />
            </Skeleton>
          </div>
          <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
            <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
              Nana's Wonderland, Windmill, NutritionWorks...
            </div>
            <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
              <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />{' '}
                <span className={`${styles['end-time__text___1A-sx']}`}>Còn</span>{' '}
                <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  }
  render() {
    var {
      loading: { global },
    } = this.props;
    return (
      <div
        className={`${styles['container__container___1fvX0']} ${
          styles['default__container___1TdpD']
        }`}
      >
        <div className={`${styles['row__row___2roCA']}`}>
          <div className={`${styles['first-sale-tile__first-sale-container___12AH9']}`}>
            <a
              className={`${styles['hidden-md-down']} ${
                styles['first-sale-tile__first-sale-desktop___3DYvl']
              }`}
              href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23"
            >
              {this.renderBanner()}
            </a>
            <a
              className={`${styles['hidden-lg-up']} ${styles['cate-first-sale']} ${
                styles['first-sale-tile__col-md-6___86-SM']
              } ${styles['first-sale-tile__padding-remove___lzvjK']} ${
                styles['first-sale-tile__sale-card-container___3zr_W']
              }`}
              href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23"
            >
              {this.renderBannerMoblie()}
            </a>
          </div>

          {this.renderItems()}
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default Adidas;
