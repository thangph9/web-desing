/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
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
import Slider from 'react-slick';
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

  renderTime(){
    let timeline = 0;
    var endHour = 0;
    let start;
    if (data.end_sale && data.start_sale) {
      start = new Date().getTime() / 1000;
      var endTime = (Date.parse(data.end_sale) / 1000 - start) / 86400;

      timeline = Math.floor(endTime);
      endHour = Math.floor((endTime - timeline) * 24);
    }
    {timeline > 0 ? (
      <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
        <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
          <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />
          <span className={`${styles['end-time__text___1A-sx']}`}> </span>
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
            <span className={`${styles['end-time__text___1A-sx']}`}> </span>
            {endHour > 0 && (
              <span className={`${styles['end-time__timer___LMsIT']}`}>
                {endHour + ' Giờ'}
              </span>
            )}
          </span>
        </div>
      )
    )}
  }

  render() {
    const { data } = this.props;
    let thumbnail = data.thumbnail ? data.thumbnail.replace(/\-/g, '') : 'false';
    return (
      <Link
        className={`${styles['cart-item']} ${styles['home__paddingRemove___3EmRr']}`}
        to={`/categorybytri/${data.categoryid.replace(/\-/g, '')}`}
        data={data}
      >
        <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
          <div style={{backgroundImage:`url(/images/ft/${thumbnail}`}} className={`${styles['sale-card__image-wrapper___EfOla']} ${styles['background-item']} ${styles['border-style']}`}>

          </div>
          <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
            <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
              {`${data.title}`}
            </div>

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
  constructor(props) {
    super(props);
    this.state = {
      slideObj: [
        {
          productid: 1,
          title: 'Sản phẩm từ Acer',
          image: '/images/ft/8f4415beafd24936800a3352f13a7889',
          link: '/category/giam-den-74-zeca-dong-ho-nam-nu/79998a705cad4f538f6f65b4219edd5b',
        },
        {
          productid: 2,
          title: 'Sản phẩm từ Lenovo',
          image: '/images/ft/9165d86c861040e496f4e34ac2f20e77',
          link:
            '/category/giam-den-66-asics-tiger-giay-the-thao-nam-nu/a78b30574e0c4d858d42635d569764e5',
        },
        {
          productid: 3,
          title: 'Sản phẩm từ Hp',
          image: '/images/ft/e30d51bbf1fc49c4a13a65315760047d',
          link:
            '/category/giam-den-66-asics-tiger-giay-the-thao-nam-nu/a78b30574e0c4d858d42635d569764e5',
        },
      ],
      hotnews: [],
      special: [],
      news: [],
      bestseller: [],
      more: [],
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/homebytri',
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.product.homebytri !== nextProps.product.homebytri) {
      if (nextProps.product.homebytri.status === 'ok') {
        this.setState({
          hotnews: nextProps.product.homebytri.data.hotnews,
          special: nextProps.product.homebytri.data.special,
          bestseller: nextProps.product.homebytri.data.bestseller,
          news: nextProps.product.homebytri.data.news,
          more: nextProps.product.homebytri.data.more,
        });
      }
    }
  }
  renderHotNews() {
    const { hotnews } = this.state;
    return hotnews.length > 0 ? (
      <div>
        <div
          className={`${styles['section-title__title-wrap___9DwpB']} ${
            styles['home__currentSaleSectionTitle___XcRpN']
          }`}
        >
          <h2 className={`${styles['section-title__title___2Dw2G']}`}>Máy tính để bàn</h2>
        </div>
        <div className={`${styles['row__row___2roCA']}`}>
          {hotnews.map((e, i) => {
            return <ProductItem data={e} key={i} />;
          })}
        </div>
      </div>
    ) : (
      ''
    );
  }
  renderNews() {
    const { news } = this.state;
    if (news.length > 0) {
      return (
        <div
          className={`${styles['potd-container']} ${styles['potd-new__potd-container___1mO4T']}`}
        >
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['potd-new__title-container___1o6iD']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Phụ kiện máy tính</h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {news.map((e, i) => {
              return <ProductItem data={e} key={i} />;
            })}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
  renderSpecial() {
    const { special } = this.state;

    if (special.length > 0) {
      return (
        <div>
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['home__stillOnSaleWrap____52sJ']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Máy tính xách tay</h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {special.map((e, i) => {
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
    const { bestseller } = this.state;
    if (bestseller.length > 0) {
      return (
        <div id={`${styles['best-sellers']}`} className={`${styles['home__best-sellers___3Yh-1']}`}>
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['best-sellers__title-container___3YMp3']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Thiết bị văn phòng</h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {bestseller.map((e, i) => {
              return <ProductItem data={e} key={i} />;
            })}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
  renderMore() {
    const { more } = this.state;
    if (more.length > 0) {
      return (
        <div id={`${styles['best-sellers']}`} className={`${styles['home__best-sellers___3Yh-1']}`}>
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['best-sellers__title-container___3YMp3']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Bán chạy nhất</h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            {more.map((e, i) => {
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
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      autoplaySpeed: 5000,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: `${styles['hidden-md-up']} min-height md-up`,
    };
    var settings1 = {
      dots: false,
      arrows: true,
      autoplaySpeed: 5000,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: `${styles['hidden-sm-down']} min-height sm-up`,
    };
    return (
      <div>
        <div
          style={{ paddingBottom: '0px' }}
          className={`${styles['container__container___1fvX0']} ${
            styles['home__featuredContainer___1YAQy']
          }`}
        >
          <Slider {...settings}>
            {this.state.slideObj.map((v, i) => {
              return (
                <span>
                  <img key={i} src={v.image} alt={v.title} />
                  <div
                    className={`${styles['hidden-md-up']} ${styles['home__badge___2w2Lc']} ${
                      styles['home__featured-badge___2hhaD']
                    }`}
                  >
                    Ưu đãi nổi bật
                  </div>
                  <div
                    className={`${styles['hidden-md-up']} ${
                      styles['home__currentSaleInfo___2Fj0C']
                    }`}
                  >
                    <div className={`${styles['home__currentSaleTitle___1jXFQ']}`}>{v.title}</div>
                    <div className={`${styles['home__endTimeWrap___25O4u']}`}>
                      <span className={`${styles['home__endTimeContent___2G8rq']}`}>
                        <i
                          className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                        />
                        <span className={`${styles['end-time__text___1A-sx']}`}></span>{' '}
                        <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
                      </span>
                    </div>
                  </div>
                </span>
              );
            })}
          </Slider>
          <Slider {...settings1}>
            {this.state.slideObj.map((v, i) => {
              return (
                <span>
                  <img key={i} src={v.image} alt={v.title} />
                </span>
              );
            })}
          </Slider>
        </div>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['home__homeContainer___1VKcQ']
          }`}
        >
          <div className={`${styles['home__topShadow___3wy_J']}`} />
          {this.renderHotNews()}
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
          {this.renderSpecial()}
          {this.renderBestSeller()}
          {this.renderNews()}
          {this.renderMore()}
        </div>
      </div>
    );
  }
}

export default Home;
