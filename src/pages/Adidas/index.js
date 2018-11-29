/* eslint-disable prefer-const */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
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
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
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
class ProductItem extends PureComponent {
  render() {
    var { data } = this.props;
    let seoTitle = '';
    let nodeid = '';
    nodeid = data.nodeid ? data.nodeid.replace(/\-/g, '') : 'null';
    seoTitle = data.seo_link + '/' + nodeid;
    let thumbnail = data.thumbnail ? data.thumbnail.replace(/\-/g, '') : 'false';
    return (
      <Link
        to={`/category/${seoTitle}`}
        className={`${styles['default__col-md-6___9I2wX']} ${
          styles['default__padding-remove___2T9LM']
        }`}
        href="/sales/nanas-wonderland-windmill-nutritionworks...-5bd98f1f6ada6d0bdd52fc2f"
      >
        <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
          <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
            {thumbnail && thumbnail != 'false' ? (
              <img
                className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                src={`/images/f/${thumbnail}`}
                alt="Nana's Wonderland, Windmill, NutritionWorks..."
              />
            ) : (
              ''
            )}
          </div>
          <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
            <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>{data.title}</div>
            <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
              <span
                style={{ display: 'none' }}
                className={`${styles['sale-card__endTimeContent___3z5se']}`}
              >
                <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />{' '}
                <span className={`${styles['end-time__text___1A-sx']}`}>Còn</span>{' '}
                <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

@connect(({ loading, product }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  product,
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
      product: { list },
    } = this.props;
    var dataList = list && list.length > 0 ? list : [];
    let seoTitle = '';
    let nodeid = '';
    if (dataList != undefined && dataList.length > 0) {
      nodeid = dataList[0].nodeid ? dataList[0].nodeid.replace(/\-/g, '') : 'null';
      seoTitle = dataList[0].seo_link + '/' + nodeid;
    }
    return (
      <Link
        to={`/category/${seoTitle}`}
        className={`${styles['hidden-md-down']} ${
          styles['first-sale-tile__first-sale-desktop___3DYvl']
        }`}
        href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23"
      >
        <div className={`${styles['row__row___2roCA']}`}>
          <div
            className={`${styles['first-sale-tile__col-lg-9___2uu-j']} ${
              styles['first-sale-tile__image-container___VGe3q']
            }`}
          >
            {dataList.length > 0 && dataList[0].thumbnail ? (
              <img
                className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                src={`/images/f/${dataList != undefined &&
                  dataList.length > 0 &&
                  dataList[0].thumbnail.replace(/\-/g, '')}`}
                alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc"
              />
            ) : (
              ''
            )}
          </div>
          <div
            className={`${styles['first-sale-tile__col-lg-3___2ZXJG']} ${
              styles['first-sale-tile__text-container___3Kt7T']
            }`}
          >
            <h2 className={`${styles['first-sale-tile__title___2Dutp']}`}>
              {dataList != undefined && dataList.length > 0 && dataList[0].title}
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
          </div>
        </div>
      </Link>
    );
  }
  renderBannerMoblie() {
    var {
      product: { list },
    } = this.props;
    var dataList = list && list.length > 0 ? list : [];
    let seoTitle = '';
    let nodeid = '';
    if (dataList != undefined && dataList.length > 0) {
      nodeid = dataList[0].nodeid ? dataList[0].nodeid.replace(/\-/g, '') : 'null';
      seoTitle = dataList[0].seo_link + '/' + nodeid;
    }
    return (
      <Link
        to={`/category/${seoTitle}`}
        className={`${styles['hidden-lg-up']} ${styles['cate-first-sale']} ${
          styles['first-sale-tile__col-md-6___86-SM']
        } ${styles['first-sale-tile__padding-remove___lzvjK']} ${
          styles['first-sale-tile__sale-card-container___3zr_W']
        }`}
        href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23"
      >
        <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
          <div className={`${styles['sale-card__international-tile___3A645']}`}>Hàng nhập khẩu</div>
          <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
            {dataList.length > 0 && dataList[0].thumbnail ? (
              <img
                className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                src={`/images/f/${dataList != undefined &&
                  dataList.length > 0 &&
                  dataList[0].thumbnail.replace(/\-/g, '')}`}
                alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc"
              />
            ) : (
              ''
            )}
          </div>
          <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
            <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
              {dataList != undefined && dataList.length > 0 && dataList[0].title}
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
      </Link>
    );
  }
  render() {
    var {
      product: { list },
    } = this.props;
    var dataList = list && list.length > 0 ? list : [];
    const meta = {
      title: 'Adidas',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };
    return (
      <DocumentMeta {...meta}>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['default__container___1TdpD']
          }`}
        >
          <div className={`${styles['row__row___2roCA']}`}>
            <div className={`${styles['first-sale-tile__first-sale-container___12AH9']}`}>
              {dataList.length > 0 ? this.renderBanner() : ''}
              {this.renderBannerMoblie()}
            </div>

            {dataList.map((v, i) => (
              <ProductItem key={i} data={v} />
            ))}
          </div>
        </div>
      </DocumentMeta>
    );
  }
}

export default Adidas;
