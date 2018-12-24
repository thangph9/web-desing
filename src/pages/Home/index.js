/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable no-useless-escape */
/* eslint-disable one-var */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-multi-comp */
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
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
  state = {};

  render() {
    const { data } = this.props;
    let nodeid = data.nodeid ? data.nodeid.replace(/\-/g, '') : 'null';
    let seoTitle = data.seo_link + '/' + nodeid;
    let thumbnail = data.thumbnail ? data.thumbnail.replace(/\-/g, '') : 'false';
    let timeline = 0;
    var endHour = 0;
    let start;
    if (data.death_clock) {
      start = new Date().getTime() / 1000;
      var endTime = (Date.parse(data.death_clock.end) / 1000 - start) / 86400;

      timeline = Math.floor(endTime);
      endHour = Math.floor((endTime - timeline) * 24);
    }

    return (
      <Link
        className={`${styles['home__col-md-6___2zJjj']} ${styles['home__paddingRemove___3EmRr']}`}
        to={`/category/${seoTitle}`}
        data={data}
      >
        <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
          <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
            <img
              className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
              src={`/images/f/${thumbnail}`}
              alt={`${data.title} `}
            />
          </div>
          <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
            <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
              {`${data.title}`}
            </div>
            {timeline > 0 ? (
              <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                  <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />
                  <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                  <span className={`${styles['end-time__timer___LMsIT']}`}>
                    {timeline + ' Ngày '}
                  </span>
                  {endHour > 0 && (
                    <span className={`${styles['end-time__timer___LMsIT']}`}>
                      {endHour + ' Giờ'}
                    </span>
                  )}
                </span>
              </div>
            ) : (
              timeline == 0 &&
              endHour > 0 && (
                <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                  <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                    <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />
                    <span className={`${styles['end-time__text___1A-sx']}`}> Còn </span>
                    {endHour > 0 && (
                      <span className={`${styles['end-time__timer___LMsIT']}`}>
                        {endHour + ' Giờ'}
                      </span>
                    )}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </Link>
    );
  }
}

@connect(({ loading, product }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  product,
  loading,
}))
@Form.create()
class Home extends PureComponent {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/home',
      payload: {},
    });
  }
  renderNews() {
    const {
      product: {
        list: { news },
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
        list: { days },
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
        list: { bestSeller },
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
        list: { hotnew },
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
    const {
      product: {
        list: { news, days, hotday },
      },
    } = this.props;
    let seoTitle = '';
    let nodeid = '';
    if (news != undefined && news.length > 0) {
      nodeid = news[0].nodeid ? news[0].nodeid.replace(/\-/g, '') : 'null';
      seoTitle = news[0].seo_link + '/' + nodeid;
    }
    return (
      <div>
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
          {this.renderBestSeller()}
          {this.renderHotNew()}
        </div>
        <div className={`${styles['home__subscription-container___17uZO']}`}>
          <div className={`${styles['container__container___1fvX0']}`}>
            <div
              className={`${styles['subscription-form__container___363Gz']} ${
                styles['home__content-wrap___1cpWR']
              }`}
            >
              <div className={`${styles['subscription-form__subscription-box___3q4Dq']}`}>
                <div className={`${styles['subscription-form__title-container___19sMv']}`}>
                  <h3>Đăng ký ngay!</h3>
                  <p className={`${styles['subscription-form__subtext___3gWxq']}`}>
                    Nhận bản tin từ 123order mỗi ngày
                  </p>
                </div>
                <form className={`${styles['subscription-form__form___1HTdc']}`} name="form">
                  <div className={`${styles['row__row___2roCA']}`}>
                    <div
                      className={`${styles['subscription-form__form-group___2Xlci']} ${
                        styles['subscription-form__col-md-8___2XbMH']
                      } ${styles['subscription-form__input-wrap___SQsyI']}`}
                    >
                      <input
                        type="email"
                        style={{ fontSize: '15px' }}
                        className={`${styles['subscription-form__form-control___hdjaw']}`}
                        name="email"
                        placeholder="Your email..."
                        required
                      />
                    </div>
                    <div
                      className={`${styles['subscription-form__form-group___2Xlci']} ${
                        styles['subscription-form__col-md-4___3bt17']
                      } ${styles['subscription-form__button-wrap___2iFz3']}`}
                    >
                      <button
                        type="submit"
                        style={{
                          color: '#fff',
                          backgroundColor: '#16accf',
                          borderColor: '#16accf',
                        }}
                        className={`${styles['subscription-form__btn___2kh7f']} ${
                          styles['subscription-form__btn-primary___34C5C']
                        }`}
                      >
                        Đăng Ký{' '}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
