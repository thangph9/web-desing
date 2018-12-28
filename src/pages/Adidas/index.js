/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unneeded-ternary */
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
        className={`${styles['home__col-md-6___2zJjj']} ${styles['home__paddingRemove___3EmRr']}`}
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
  renderNews() {
    const {
      product: {
        adidas: { news },
      },
    } = this.props;
    let data = news ? news : [];
    return data.length > 0 ? (
      <div>
        <div
          className={`${styles['section-title__title-wrap___9DwpB']} ${
            styles['home__currentSaleSectionTitle___XcRpN']
          }`}
        >
          <h2 className={`${styles['section-title__title___2Dw2G']}`}>Ưu đãi mới Nhất</h2>
        </div>
        <div className={`${styles['row__row___2roCA']}`}>
          {data.map((e, i) => {
            return <ProductItem data={e} key={i} />;
          })}
        </div>
      </div>
    ) : (
      ''
    );
  }
  renderDays() {
    const {
      product: {
        adidas: { days },
      },
    } = this.props;
    let data = days ? days : [];
    if (data.length > 0) {
      return (
        <div
          className={`${styles['potd-container']} ${styles['potd-new__potd-container___1mO4T']}`}
        >
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['potd-new__title-container___1o6iD']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>
              Đặc biệt nhất trong Ngày
            </h2>
            <div className={`${styles['section-title__sub-title___333O9']}`}>
              (Kết thúc vào hôm nay)
            </div>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {data.map((e, i) => {
              return <ProductItem data={e} key={i} />;
            })}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
  renderBestSeller() {
    const {
      product: {
        adidas: { bestSeller },
      },
    } = this.props;
    let data = bestSeller ? bestSeller : [];
    if (data.length > 0) {
      return (
        <div>
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['home__stillOnSaleWrap____52sJ']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Vẫn đang diễn Ra</h2>
            <div className={`${styles['section-title__sub-title___333O9']}`}>
              (Nhưng sẽ kết thúc sớm)
            </div>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {data.map((e, i) => {
              return <ProductItem data={e} key={i} />;
            })}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
  renderHotNew() {
    const {
      product: {
        adidas: { hotnew },
      },
    } = this.props;
    let data = hotnew ? hotnew : [];
    if (data.length > 0) {
      return (
        <div id={`${styles['best-sellers']}`} className={`${styles['home__best-sellers___3Yh-1']}`}>
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['best-sellers__title-container___3YMp3']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>
              Bán chạy nhất trong Ngày
            </h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {data.map((e, i) => {
              return <ProductItem data={e} key={i} />;
            })}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
  render() {
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

    var seoTitle = '';
    return (
      <DocumentMeta {...meta}>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['home__featuredContainer___1YAQy']
          }`}
        >
          <Link to={`/category/${seoTitle}`}>
            <img
              className={`${styles['hidden-md-up']}`}
              src={`/images/f/061b4f6603934b6caf40d8571be0be35`}
              alt="Giảm Đến 82% - Nike Giày Thể Thao Nam"
            />
            <img
              className={`${styles['hidden-sm-down']}`}
              src={`/images/f/061b4f6603934b6caf40d8571be0be35`}
              alt="Giảm Đến 82% - Nike Giày Thể Thao Nam"
            />

            <div
              className={`${styles['hidden-md-up']} ${styles['home__badge___2w2Lc']} ${
                styles['home__featured-badge___2hhaD']
              }`}
            >
              Ưu đãi nổi bật
            </div>
            <div className={`${styles['hidden-md-up']} ${styles['home__currentSaleInfo___2Fj0C']}`}>
              <div className={`${styles['home__currentSaleTitle___1jXFQ']}`}>
                Giảm Đến 82% - Nike Giày Thể Thao Nam
              </div>
              <div className={`${styles['home__endTimeWrap___25O4u']}`}>
                <span className={`${styles['home__endTimeContent___2G8rq']}`}>
                  <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />
                  <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>{' '}
                  <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['home__homeContainer___1VKcQ']
          }`}
        >
          <div className={`${styles['home__topShadow___3wy_J']}`} />
          {this.renderNews()}
          <div
            id={`${styles['home-banner']}`}
            className={`${styles['banner__bannerContainer___3Inm6']} ${
              styles['home__bannerWrap___1k6zX']
            }`}
          >
            <div className={`${styles['banner__csslider___3IuXB']}`}>
              <input type="radio" id="slides_0" name="slides" defaultValue="on" />
              <div className={`${styles['banner__arrows___iX3cf']}`}>
                <label htmlFor="slides_0" />
              </div>
              <ul style={{ display: 'none' }}>
                <li>
                  <a
                    href="https://support.leflair.vn/hc/vi/articles/360009061113-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-%C6%AFu-%C4%91%C3%A3i-Cashback-5-C%C3%A0-th%E1%BA%BB-li%E1%BB%81n-tay-S%C4%83n-ngay-%C6%B0u-%C4%91%C3%A3i"
                    className={`${styles['home__bannerWrap___1k6zX']} ${
                      styles['banner__imageContainer___1Q2f8']
                    }`}
                    target="blank"
                  >
                    <img
                      className={`${styles['banner__bannerImg___3rOw2']}`}
                      src="https://images.leflair.vn/w640/q85/5bd9cf9c6ada6d26d252fea1.jpg"
                      srcSet="https://images.leflair.vn/w640/q85/5bd9cf9c6ada6d26d252fea1.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9cf9c6ada6d26d252fea1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9cf9c6ada6d26d252fea1.jpg 1440w"
                      sizes="100vw, (min-width: 992px) 960px, 1140px"
                    />
                  </a>
                </li>
              </ul>
              <div className={`${styles['banner__navigation___1KLgF']}`} />
            </div>
          </div>
          {this.renderDays()}
          {this.renderHotNew()}
          {this.renderBestSeller()}
        </div>
      </DocumentMeta>
    );
  }
}

export default Adidas;
