/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/sort-comp */
/* eslint-disable operator-assignment */
/* eslint-disable no-continue */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
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
import { connect } from 'dva';
import Slider from 'react-slick';
import DocumentTitle from 'react-document-title';
import DocumentMeta from 'react-document-meta';
import CountDown from '@/components/CountDown';
import Link from 'umi/link';
import Exception from '@/components/Exception';
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
  Carousel,
  Tooltip,
  Tabs,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
import styles from './index.less';

import styles1 from './test.less';

var currencyFormatter = require('currency-formatter');

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
@connect(({ loading, product, list }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  product,
  list,
}))
@Form.create()
class DetailTest extends PureComponent {
  state = {
    index: 0,
    indexSize: 0,
    indexColor: 0,
    toggle: false,
    size: undefined,
    color: undefined,
    size_by_color: [],
    ['info-product']: true,
    min_value: 1000,
    optid: '',
    activeButton: 0,
    image_by_option: [],
  };

  // eslint-disable-next-line react/sort-comp
  handleClickDesciption(idDetail) {
    var body = document.getElementById('app__body___3NlTJ');
    var width = body.offsetWidth;
    if (width <= 767) {
      var element = document.getElementById(idDetail);
      if (element.style.display == 'block') {
        element.style.display = 'none';
        this.setState({
          [idDetail]: !this.state[idDetail],
        });
      } else {
        var collapselow = document.getElementsByClassName('collapselow');
        for (var i = 0; i < collapselow.length; i++) {
          collapselow[i].style.display = 'none';
        }
        this.setState(
          {
            ['info-product']: false,
            ['material']: false,
            ['size-table']: false,
            ['info-brand']: false,
          },
          () => {
            this.setState({
              [idDetail]: true,
            });
          }
        );
        element.style.display = 'block';
      }
    } else {
      var element = document.getElementById(idDetail);
      if (element.style.display == 'block') {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
      this.setState({
        [idDetail]: !this.state[idDetail],
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.product.detailtest !== this.props.product.detailtest) {
      this.setState(
        {
          detailtest: nextProps.product.detailtest,
        },
        () => {
          if (this.state.detailtest.options) {
            this.state.detailtest.options.forEach((v, i) => {
              if (v.optid === this.props.match.params.optid) {
                this.setState({
                  image_by_option: v.images,
                });
              }
            });
          }
        }
      );
      const product_by_option = nextProps.product.detailtest.options.filter((v, i) => {
        return v.optid === this.props.match.params.optid;
      });
      if (product_by_option.length > 0 && product_by_option[0].attrs) {
        this.setState(
          {
            size: product_by_option[0].attrs['1001'],
            color: product_by_option[0].attrs['1000'],
          },
          () => {
            const arrColor = nextProps.product.detailtest.options.filter((v, i) => {
              return v.attrs['1000'] === this.state.color;
            });
            var arrSizeByColor = [];
            arrColor.forEach(element => {
              arrSizeByColor.push(element.attrs['1001']);
            });
            this.setState({
              size_by_color: arrSizeByColor,
            });
          }
        );
      }
    }
    if (nextProps.match.params.optid !== this.props.match.params.optid) {
      const product_by_option = nextProps.product.detailtest.options.filter((v, i) => {
        return v.optid === nextProps.match.params.optid;
      });
      if (product_by_option.length > 0) {
        this.setState(
          {
            size: product_by_option[0].attrs['1001'],
            color: product_by_option[0].attrs['1000'],
          },
          () => {
            const arrColor = nextProps.product.detailtest.options.filter((v, i) => {
              return v.attrs['1000'] === this.state.color;
            });
            var arrSizeByColor = [];
            arrColor.forEach(element => {
              arrSizeByColor.push(element.attrs['1001']);
            });
            this.setState({
              size_by_color: arrSizeByColor,
            });
          }
        );
      }
      if (this.state.detailtest.options) {
        this.state.detailtest.options.forEach((v, i) => {
          if (v.optid === nextProps.match.params.optid) {
            this.setState({
              image_by_option: v.images,
            });
          }
        });
      }
    }
  }
  setCookieDetail(product) {
    this.props.dispatch({
      type: 'list/modal',
      payload: true,
    });
    var productDetail = product;
    var cart = localStorage.getItem('cart');

    if (cart) {
      var localCart = JSON.parse(localStorage.getItem('cart'));
      var arr = [];
      var check = false;
      for (var i = 0; i < localCart.length; i++) {
        if (
          localCart[i][0].productid == product.productid &&
          localCart[i][0].size == product.size
        ) {
          check = true;
          var length = localCart[i][1];
          arr.push([product, length + 1]);
        } else {
          arr.push(localCart[i]);
        }
      }
      if (check == false) {
        arr.push([product, 1]);
      }
      localStorage.setItem('cart', JSON.stringify(arr));
    } else {
      localStorage.setItem('cart', JSON.stringify([[product, 1]]));
    }
    this.setState({
      total: !this.state.total,
    });
    this.props.dispatch({
      type: 'list/local',
      payload: JSON.parse(localStorage.getItem('cart')),
    });
    this.props.dispatch({
      type: 'list/value',
      payload: this.props.list.value + 1,
    });
  }
  getAuthority() {
    const authorityString = localStorage.getItem('detail-product');
  }

  handleChangeImage = (e, i) => {
    this.setState({
      index: i,
      imageChoose: e.replace(/\-/g, ''),
    });
  };
  onHover = e => {};
  onMouseMove = e => {
    var root = document.getElementById('screen');
    if (root && root.clientWidth > 991) {
      var pos_x = e.nativeEvent.offsetX;
      var pos_y = e.nativeEvent.offsetY;
      document.getElementById('zoom-image').style.position = 'absolute';
      document.getElementById('zoom-image').style.left = `${-pos_x}px`;
      document.getElementById('zoom-image').style.top = `${-pos_y}px`;
      document.getElementById('zoom-image').style.display = 'block';
    }
  };
  handleMoveOut() {
    document.getElementById('zoom-image').style.left = `0px`;
    document.getElementById('zoom-image').style.top = `0px`;
    document.getElementById('zoom-image').style.display = 'none';
  }
  handleClickImage(i) {
    this.setState({
      index: i,
    });
  }
  formatCountDown = time => {
    const hours = 60 * 60 * 1000;
    const minutes = 60 * 1000;
    const days = hours * 24;
    const d = Math.floor(time / days);

    const h = Math.floor((time - d * days) / hours);
    const m = Math.floor((time - d * days - h * hours) / minutes);
    const s = Math.floor((time - d * days - h * hours - m * minutes) / 1000);
    return (
      <div
        className={`${styles['row__row___2roCA']} ${styles['sale-timer__timer-row___1JwVa']} ${
          styles['product__flex-center___1bEVZ']
        }`}
      >
        <div>
          <div>{fixedZero(d)}</div>
          <div>Ngày</div>
        </div>
        <div>
          <div>{fixedZero(h)}</div>
          <div>Giờ</div>
        </div>
        <div>
          <div>{fixedZero(m)}</div>
          <div>Phút</div>
        </div>
        <div>
          <div>{fixedZero(s)}</div>
          <div>Giây</div>
        </div>
      </div>
    );
  };

  renderBreadcrumb() {
    const {
      product: { detail },
    } = this.props;
    let nodeid = '';
    let seoTitle = '';
    var dataBreadcrumb = [];
    if (detail.breadcrumb) {
      dataBreadcrumb = Array.isArray(detail.breadcrumb) ? detail.breadcrumb : [];
      nodeid = dataBreadcrumb[2].nodeid ? dataBreadcrumb[2].nodeid.replace(/\-/g, '') : 'null';
      seoTitle = dataBreadcrumb[2].seo_link + '/' + nodeid;
    }

    return (
      <ol
        style={{ padding: '0px', position: 'relative', top: '6px' }}
        className={`${styles['undefined']} ${styles['breadcrumb__breadcrumb___3F6K8']}`}
      >
        {dataBreadcrumb.length > 0 && (
          <li
            className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
          >
            <Link to={`/`}>{dataBreadcrumb.length > 0 ? dataBreadcrumb[0].title : ''}</Link>
          </li>
        )}
        {dataBreadcrumb.length > 0 && (
          <li
            className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
          >
            <Link to={`/category/${seoTitle}`}>
              {dataBreadcrumb.length > 0 ? dataBreadcrumb[2].title : ''}
            </Link>
          </li>
        )}
        <li
          className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
        >
          <h1 style={{ color: 'rgba(78, 89, 93, 0.3' }}>{detail.title}</h1>
        </li>
      </ol>
    );
  }
  checkChilrd(value) {
    var arrResult = this.state.size_by_color.filter((v, i) => {
      return v === value;
    });
    if (arrResult.length > 0) return true;
    return false;
  }

  renderSlider() {
    const { imageChoose, detailtest, image_by_option } = this.state;
    const data = detailtest || {};

    const image_huge = image_by_option;
    const SmallImageUI = [];
    const HugeImageUI = [];
    const LargeImageUI = [];
    let huge_image = '';
    let zoom_image = '';
    if (image_huge && image_huge.length > 0) {
      image_huge.map((e, i) => {
        var image = e.replace(/\-/g, '');
        SmallImageUI.push(
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events

          <TabPane
            key={i}
            tab={
              <li
                style={{ marginBottom: 0 }}
                onClick={() => {
                  this.handleChangeImage(e, i);
                }}
                className={
                  this.state.index != i
                    ? styles['images-slider__image-border___2hkRy']
                    : styles['images-slider__image-border___2hkRy'] +
                      ' ' +
                      styles['images-slider__image-selected___3ftth']
                }
              >
                <img
                  className={styles['images-slider__image___wW9Yw']}
                  src={`/images/w90/${image}`}
                  sizes="80px"
                />
              </li>
            }
          />
        );
        HugeImageUI.push(
          <img
            key={i}
            className={`${styles['slick-slide']} ${styles['images-slider__image___wW9Yw']}`}
            src={`/images/f/${image}`}
            style={{ outline: 'none', width: 447 }}
          />
        );
      });
      // eslint-disable-next-line camelcase
      huge_image = (
        <img
          key={imageChoose ? `huge${imageChoose}` : `huge${image_huge[0].replace(/\-/g, '')}`}
          className={`${styles['images-slider__image___wW9Yw']}`}
          src={`/images/f/${imageChoose || image_huge[0].replace(/\-/g, '')}`}
        />
      );
      // eslint-disable-next-line camelcase
      zoom_image = (
        <img
          key={imageChoose ? `zoom${imageChoose}` : `zoom${image_huge[0].replace(/\-/g, '')}`}
          id="zoom-image"
          className={`${styles['images-slider__zoom-image___3jo-j']}`}
          src={`/images/f/${imageChoose || image_huge[0].replace(/\-/g, '')}`}
          srcSet={`/images/f/${imageChoose ||
            image_huge[0].replace(/\-/g, '')} 1100w, /images/f/${imageChoose ||
            image_huge[0].replace(/\-/g, '')} 1280w`}
        />
      );
    }
    return (
      <div className={styles['row__row___2roCA']}>
        <div
          className={`${styles['images-slider__col-lg-2___1yd0l']} ${
            styles['images-slider__slider-container___2AcvT']
          }`}
        >
          <div className={`${styles['hidden-md-down']} ${styles['images-slider__slider___2EiI8']}`}>
            <div
              className={`${styles['ic-ic-arrow-up']} ${
                styles['images-slider__images-navigation___KCIEC']
              } ${styles['images-slider__navigation-up___yqRaw']}`}
            />
            <ul
              className={`${styles['list-unstyled']} ${
                styles['images-slider__list-thumbnail-inner___2vzS2']
              }`}
              id="images-container"
            >
              {SmallImageUI.length > 0 && (
                <Tabs forceRender={false} tabPosition="left" style={{ height: 650 }}>
                  {SmallImageUI}
                </Tabs>
              )}
            </ul>
            <div
              className={`${styles['ic-ic-arrow-down']} ${
                styles['images-slider__images-navigation___KCIEC']
              } ${styles['images-slider__navigation-down___2GHVX']}`}
            />
          </div>
          <div
            className={`${styles['hidden-lg-up']} ${
              styles['images-slider__slider-wrapper___1hmGf']
            }`}
          >
            <Slider>{HugeImageUI}</Slider>
            <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>Hết hàng</div>
          </div>
        </div>
        <div
          className={`${styles['hidden-md-down']} ${styles['images-slider__col-lg-10___3uZXv']}`}
        >
          <div
            onMouseMove={this.onMouseMove.bind(this)}
            className={`${styles['images-slider__main-image___1MFAY']}`}
          >
            {huge_image}
            <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>Hết hàng</div>
            {zoom_image}
            <div
              id="pointer_div"
              className={`${styles['images-slider__overlay___CJo-l']}`}
              onMouseOut={() => this.handleMoveOut()}
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { dispatch, match } = this.props;
    let productid = '';
    try {
      productid = match.params.productid;
    } catch (e) {}
    dispatch({
      type: 'product/detailtest',
      payload: { productid },
    });
  }

  handleClickToggle() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  handleClickSize(value) {
    this.setState({
      size: value,
      toggle: !this.state.toggle,
    });
    const pathname = this.props.location.pathname;
    if (this.checkChilrd(value) === false) {
      var arrSizeByValue = this.state.detailtest.options.filter((v, i) => {
        return v.attrs['1001'] === value;
      });
      this.props.history.push({
        pathname: `/producttest/${arrSizeByValue[0].optid}/${this.props.match.params.productid}`,
      });
    } else {
      var optProduct = this.state.detailtest.options.filter((v, i) => {
        return v.attrs['1000'] === this.state.color && v.attrs['1001'] === value;
      });
      this.props.history.push({
        pathname: `/producttest/${optProduct[0].optid}/${this.props.match.params.productid}`,
      });
    }
  }
  checkSizeInColor(value, color, index) {
    if (value) {
      var result = this.state.detailtest.options
        .filter((v, i) => {
          return v.attrs['1000'] === color;
        })
        .filter((v, i) => {
          return v.attrs['1001'] === value;
        });
      if (result.length > 0) {
        if (this.state.min_value > index) {
          this.setState({
            min_value: index,
          });
        }
        return true;
      }
      return false;
    }
    return true;
  }
  handleClickButton(value, color) {
    this.setState({
      activeButton: value,
      color,
      min_value: 1000,
    });
    const arrColor = this.state.detailtest.options.filter((v, i) => {
      return v.attrs['1000'] === color;
    });
    var arrSizeByColor = [];
    arrColor.forEach(element => {
      arrSizeByColor.push(element.attrs['1001']);
    });
    this.setState({
      size_by_color: arrSizeByColor,
      size: undefined,
    });
    this.props.history.push({
      pathname: `/producttest/${this.props.match.params.productid}/${
        this.props.match.params.productid
      }`,
    });
  }
  handleClickButtonTrue(value, color) {
    this.setState({
      activeButton: value,
      color,
      min_value: 1000,
    });
    const arrColor = this.state.detailtest.options.filter((v, i) => {
      return v.attrs['1000'] === color;
    });
    var arrSizeByColor = [];
    arrColor.forEach(element => {
      arrSizeByColor.push(element.attrs['1001']);
    });
    this.setState({
      size_by_color: arrSizeByColor,
    });
    var optProduct = this.state.detailtest.options.filter((v, i) => {
      return v.attrs['1000'] === color && v.attrs['1001'] === this.state.size;
    });
    this.props.history.push({
      pathname: `/producttest/${optProduct[0].optid}/${this.props.match.params.productid}`,
    });
  }
  render() {
    var { detailtest, image_by_option } = this.state;
    console.log(detailtest);
    const data = detailtest ? detailtest.product : undefined;
    const title = 'Chi tiết sản phẩm';
    const meta_description = '123order ';
    const meta_data = '123order,order';
    const endTime = data ? new Date(data.sale.saleDate).getTime() : 0;
    const price = data ? data.price : '';
    const meta = {
      title,
      description: meta_description,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: meta_data,
        },
      },
    };
    const delivery = '';
    var detailCookie = {};
    if (detailtest) {
      detailCookie.productid = data.productid;
      detailCookie.price = price;
      detailCookie.sale_price = price;
    }
    return (
      <DocumentMeta {...meta}>
        <div id="app__body___3NlTJ">
          <div className={styles['container__container___1fvX0']}>
            <div style={{ paddingTop: '5px' }} className={styles['product__product___2plEK']}>
              <div className={styles['product__product-header___2yYGL']}>
                <div
                  className={`${styles['product__data-layer-category___1lWBV']}
                  `}
                >
                  Women
                </div>
              </div>
              <div>
                <div
                  className={`${styles['row__row___2roCA']}
                  `}
                >
                  <div
                    className={`${styles['product__col-md-7___kn-eV']} ${
                      styles['product__slider-section___2raV3']
                    }`}
                  >
                    {this.renderSlider()}
                    <div
                      className={`${styles['hidden-sm-down']} ${
                        styles['product__brand-info___1s9-O']
                      }`}
                    >
                      {data && ReactHtmlParser(data.desc_detail)}
                    </div>
                  </div>
                  <div
                    className={`${styles['product__right-pane___rYPsq']} ${
                      styles['product__col-md-5___21J8E']
                    }`}
                  >
                    <div
                      className={`${styles['product-info__product-info___10ne-']} ${
                        styles['product__product-info___3onGQ']
                      }`}
                    >
                      <h4
                        style={{ fontSize: '18px' }}
                        className={`${styles['product-info__brand___3akKm']}`}
                      >
                        {data && data.seller}
                      </h4>
                      <h4 className={`${styles['product-info__title___2J672']}`}>
                        {data ? data.title : ''}
                      </h4>
                      <div id={`${styles['product-prices']}`}>
                        <span className={`${styles['product-info__retail-price___2eFS9']}`}>
                          {price}
                        </span>
                        <span className={`${styles['product-info__sale-price___1unp2']}`}>
                          {price}
                        </span>
                      </div>
                    </div>
                    {detailtest && detailtest.variant && detailtest.variant.length > 0
                      ? detailtest.variant
                          .sort((c, d) => {
                            return c.orderby - d.orderby;
                          })
                          .map((value, index) => {
                            if (value.variantid === '1000') {
                              return (
                                <span key={index} className={styles['product__colors___3jFbL']}>
                                  <h5 className={styles['color-variations__heading___3tZSD']}>
                                    {detailtest.variant[index].name} :{' '}
                                    {this.state.color
                                      ? this.state.color
                                      : 'Vui lòng lựa chọn màu sắc'}
                                  </h5>
                                  {detailtest.options &&
                                    detailtest.options.map((v, i) => {
                                      return (
                                        <span
                                          title={
                                            this.checkSizeInColor(
                                              this.state.size,
                                              v.attrs['1000'],
                                              i
                                            ) === false
                                              ? `Không có size ${this.state.size} cho màu này`
                                              : ''
                                          }
                                          key={i}
                                          style={{ marginBottom: '10px', marginRight: '10px' }}
                                        >
                                          {this.checkSizeInColor(
                                            this.state.size,
                                            v.attrs['1000'],
                                            i
                                          ) === false ? (
                                            <Button
                                              style={
                                                image_by_option.length > 0
                                                  ? {
                                                      background: `url(/images/w90/${v.images[0].replace(
                                                        /\-/g,
                                                        ''
                                                      )}) no-repeat`,
                                                      width: '80px',
                                                      height: '90px',
                                                    }
                                                  : {}
                                              }
                                              onClick={() =>
                                                this.handleClickButton(i, v.attrs['1000'])
                                              }
                                            />
                                          ) : (
                                            <span>
                                              {v.attrs['1000'] === this.state.color ? (
                                                <Button
                                                  style={
                                                    image_by_option.length > 0
                                                      ? {
                                                          background: `url(/images/w90/${v.images[0].replace(
                                                            /\-/g,
                                                            ''
                                                          )}) no-repeat`,
                                                          width: '80px',
                                                          height: '90px',
                                                        }
                                                      : {}
                                                  }
                                                  onClick={() =>
                                                    this.handleClickButtonTrue(i, v.attrs['1000'])
                                                  }
                                                  className={styles1['activeButton']}
                                                />
                                              ) : (
                                                <Button
                                                  style={
                                                    image_by_option.length > 0
                                                      ? {
                                                          background: `url(/images/w90/${v.images[0].replace(
                                                            /\-/g,
                                                            ''
                                                          )}) no-repeat`,
                                                          width: '80px',
                                                          height: '90px',
                                                        }
                                                      : {}
                                                  }
                                                  onClick={() =>
                                                    this.handleClickButtonTrue(i, v.attrs['1000'])
                                                  }
                                                  className={styles1['no-activeButton']}
                                                />
                                              )}
                                            </span>
                                          )}
                                        </span>
                                      );
                                    })}
                                </span>
                              );
                            }
                            if (value.variantid === '1001') {
                              return (
                                <div key={index} className={styles['product__sizes___27zL9']}>
                                  <div
                                    className={
                                      styles['size-variations__heading-wrap___1xcPJ'] +
                                      ' ' +
                                      styles['size-variations__clearfix___1lHkH']
                                    }
                                  >
                                    {' '}
                                    <h5 className={styles['size-variations__heading___1xG0s']}>
                                      {detailtest.variant[index].name}{' '}
                                    </h5>
                                    <div
                                      data-auto-id="size-selector"
                                      className={
                                        styles1['col-s-9'] +
                                        ' ' +
                                        styles1['col-product-size___3NjQd']
                                      }
                                    >
                                      <div
                                        className={
                                          styles1['gl-form-item'] +
                                          ' ' +
                                          styles1['glass-product-size-dropdown___2jEjW'] +
                                          ' ' +
                                          styles1['gl-vspacing-s']
                                        }
                                        data-auto-id="product-size-dropdown"
                                      >
                                        <div
                                          className={
                                            styles1['gl-dropdown'] +
                                            ' ' +
                                            styles1['gl-dropdown--no-max-height']
                                          }
                                          data-auto-id="product-size-dropdown"
                                        >
                                          <div
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => this.handleClickToggle()}
                                            className={
                                              styles1['gl-dropdown__select'] +
                                              ' ' +
                                              styles1['label'] +
                                              ' ' +
                                              styles1['dropdown-select']
                                            }
                                            title="Select size"
                                            data-auto-id="label"
                                          >
                                            <span className={styles1['gl-dropdown__select-label']}>
                                              {detailtest.variant[index].value.length > 0 &&
                                              !this.state.size
                                                ? 'Lựa chọn kích cỡ'
                                                : this.state.size}
                                            </span>
                                            {!this.state.toggle ? (
                                              <Icon style={{ fontSize: '18px' }} type="caret-up" />
                                            ) : (
                                              <Icon
                                                style={{ fontSize: '18px' }}
                                                type="caret-down"
                                              />
                                            )}
                                          </div>
                                          <div
                                            className={
                                              !this.state.toggle
                                                ? styles1['gl-dropdown__options'] +
                                                  ' ' +
                                                  styles1['gl-dropdown__options--squared'] +
                                                  ' ' +
                                                  styles1['gl-dropdown__options--with-after']
                                                : styles1['gl-dropdown__options-open'] +
                                                  ' ' +
                                                  styles1['gl-dropdown__options--squared'] +
                                                  ' ' +
                                                  styles1['gl-dropdown__options--with-after']
                                            }
                                            data-auto-id="item-wrapper"
                                          >
                                            <div className={styles1['square-list']}>
                                              <ol
                                                style={{ listStyleType: 'none' }}
                                                className={
                                                  styles1['gl-square-list'] +
                                                  ' ' +
                                                  styles1['gl-square-list--condensed']
                                                }
                                              >
                                                {detailtest &&
                                                  detailtest.variant[index].value
                                                    .sort((a, b) => {
                                                      return a - b;
                                                    })
                                                    .map((v, i) => {
                                                      return (
                                                        <li
                                                          onClick={() => this.handleClickSize(v)}
                                                          key={i}
                                                          className={
                                                            styles1['gl-square-list__item']
                                                          }
                                                          title={v}
                                                        >
                                                          <div
                                                            className={
                                                              this.checkChilrd(v) === false
                                                                ? styles1['gl-square-list__cta'] +
                                                                  ' ' +
                                                                  styles1['colorbbb']
                                                                : styles1['gl-square-list__cta']
                                                            }
                                                          >
                                                            {v}
                                                          </div>
                                                        </li>
                                                      );
                                                    })}
                                              </ol>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>{' '}
                                  </div>
                                </div>
                              );
                            }
                            return '';
                          })
                      : ''}

                    <p
                      style={{ marginTop: '10px' }}
                      className={`${styles['product__few-items-notify___1Q8z3']}`}
                    >
                      {detailtest ? `Chỉ còn lại ${data.amount} sản phẩm` : 'Hết hàng'}
                    </p>
                    <div className={`${styles['product__few-items-notify___1Q8z3']}`}>
                      <button
                        onClick={() => this.setCookieDetail(detailCookie)}
                        type="button"
                        className={`${styles['add-to-bag__btn___2i-kl']} ${
                          styles['add-to-bag__btn-primary___HSF2G']
                        } ${styles['add-to-bag__btn-block___3NXJe']}`}
                        style={{ color: '#fff' }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                    {endTime > 0 && (
                      <div className={`${styles['product__sale-timer___RypVA']}`}>
                        <p>Ưu đãi này sẽ kết thúc trong:</p>

                        <CountDown
                          style={{ fontSize: 20 }}
                          target={endTime}
                          format={this.formatCountDown}
                        />
                      </div>
                    )}
                    <div className={`${styles['product__additional-info___34ReF']}`}>
                      <div>
                        <div className={`${styles['additional-info__item___38NHG']}`}>
                          <i
                            className={`${styles['additional-info__icon___2Ujcw']} ${
                              styles['ic-ic-guarantee']
                            }`}
                          />{' '}
                          Cam kết 100% chính hãng
                        </div>
                        <div className={`${styles['additional-info__item___38NHG']}`}>
                          <i
                            className={`${styles['additional-info__icon___2Ujcw']} ${
                              styles['ic-ic-ship']
                            }`}
                          />
                          Giao hàng dự kiến:{' '}
                          <span className={`${styles['additional-info__date-delivery___rKzWW']}`}>
                            Thứ 3 6/11 - Thứ 2 12/11
                          </span>
                        </div>
                        <div className={`${styles['additional-info__item___38NHG']}`}>
                          <i
                            className={`${styles['additional-info__icon___2Ujcw']} ${
                              styles['additional-info__rotate___3gDnQ']
                            } ${styles['ic-ic-return']}`}
                          />{' '}
                          Đổi trả trong 7 ngày
                          <a
                            className={`${styles['additional-info__link-secondary___1l25I']}`}
                            href="https://support.leflair.vn/hc/vi/articles/214167448-Ch%C3%ADnh-s%C3%A1ch-tr%E1%BA%A3-h%C3%A0ng-v%C3%A0-ho%C3%A0n-ti%E1%BB%81n"
                            target="blank"
                          >
                            Xem chi tiết{' '}
                            <span
                              className={`${styles['additional-info__open-tab-icon___1aJYK']} ${
                                styles['ic-ic-open-new-tab']
                              }`}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles['product__product-desc___3eim0']}`}>
                      <div>
                        <div className={`${styles['product-description__group___3Z2qF']}`}>
                          <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                            <Link
                              onClick={() => this.handleClickDesciption('info-product')}
                              className={`${
                                styles['product-description__accordion-toggle___1kmrM']
                              }`}
                              to={`#info-product`}
                            >
                              <div className={`${styles['product-description__title___Xh_fg']}`}>
                                Thông tin sản phẩm
                                <span
                                  className={`${
                                    styles['product-description__btn-collapse___3Pk93']
                                  }`}
                                >
                                  {!this.state['info-product'] ? (
                                    <i
                                      className={`${styles['ic-ic-plus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  ) : (
                                    <i
                                      className={`${styles['ic-ic-minus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  )}
                                </span>
                              </div>
                            </Link>
                          </h4>
                          <div
                            id="info-product"
                            style={{ display: 'block' }}
                            className={`${styles['collapse']} ${
                              styles['product-description__panel-collapse___3G-5Q']
                            } collapselow`}
                          >
                            <div
                              className={`${styles['product-description__product-info___nWbK5']}`}
                            >
                              {data && ReactHtmlParser(data.description)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`${styles['product-description__group___3Z2qF']}`}>
                          <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                            <Link
                              onClick={() => this.handleClickDesciption('material')}
                              className={`${
                                styles['product-description__accordion-toggle___1kmrM']
                              }`}
                              to={`#material`}
                            >
                              <div className={`${styles['product-description__title___Xh_fg']}`}>
                                Chất liệu &amp; Cách sử dụng
                                <span
                                  className={`${
                                    styles['product-description__btn-collapse___3Pk93']
                                  }`}
                                >
                                  {!this.state['material'] ? (
                                    <i
                                      className={`${styles['ic-ic-plus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  ) : (
                                    <i
                                      className={`${styles['ic-ic-minus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  )}
                                </span>
                              </div>
                            </Link>
                          </h4>
                          <div
                            id="material"
                            className={`${styles['collapse']} ${
                              styles['product-description__panel-collapse___3G-5Q']
                            } collapselow`}
                          >
                            <div
                              className={`${styles['product-description__material-care___1szER']}`}
                            >
                              <ul
                                className={`${styles['product-description__desc-list___3qcUM']}`}
                              />
                              {data && ReactHtmlParser(data.materials_use)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`${styles['product-description__group___3Z2qF']}`}>
                          <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                            <Link
                              onClick={() => this.handleClickDesciption('size-table')}
                              id="size-table-click"
                              className={`${
                                styles['product-description__accordion-toggle___1kmrM']
                              }`}
                              to={`#size-table`}
                            >
                              <div className={`${styles['product-description__title___Xh_fg']}`}>
                                Chi tiết kích cỡ
                                <span
                                  className={`${
                                    styles['product-description__btn-collapse___3Pk93']
                                  }`}
                                >
                                  {!this.state['size-table'] ? (
                                    <i
                                      className={`${styles['ic-ic-plus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  ) : (
                                    <i
                                      className={`${styles['ic-ic-minus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  )}
                                </span>
                              </div>
                            </Link>
                          </h4>
                          <div
                            id="size-table"
                            className={`${styles['collapse']} ${
                              styles['product-description__panel-collapse___3G-5Q']
                            } collapselow`}
                          >
                            <div>
                              <div className={`${styles['product-description__size-fit___1p0wI']}`}>
                                <ul
                                  className={`${styles['product-description__desc-list___3qcUM']}`}
                                >
                                  {data && ReactHtmlParser(data.size_desc)}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`${styles['product-description__group___3Z2qF']} ${
                            styles['hidden-md-up']
                          }`}
                        >
                          <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                            <Link
                              onClick={() => this.handleClickDesciption('info-brand')}
                              className={`${
                                styles['product-description__accordion-toggle___1kmrM']
                              }`}
                              to={`#info-brand`}
                            >
                              <div className={`${styles['product-description__title___Xh_fg']}`}>
                                <span>
                                  <img
                                    className={`${
                                      styles['product-description__about-the-brand-logo___h7FTg']
                                    }`}
                                    src="https://leflair-assets.storage.googleapis.com/59ca0a3be1b357001a65d626.jpg"
                                  />
                                  <span
                                    className={`${
                                      styles['product-description__about-the-brand-heading___20E5W']
                                    }`}
                                  >
                                    Thông tin thương hiệu
                                  </span>
                                </span>
                                <span
                                  className={`${
                                    styles['product-description__btn-collapse___3Pk93']
                                  }`}
                                >
                                  {!this.state['info-brand'] ? (
                                    <i
                                      className={`${styles['ic-ic-plus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  ) : (
                                    <i
                                      className={`${styles['ic-ic-minus']} ${
                                        styles['product-description__collapsed___ahwQq']
                                      }`}
                                    />
                                  )}
                                </span>
                              </div>
                            </Link>
                          </h4>
                          <div
                            id="info-brand"
                            className={`${styles['collapse']} ${
                              styles['product-description__panel-collapse___3G-5Q']
                            } collapselow`}
                          >
                            <div
                              className={`${
                                styles['product-description__about-the-brand___3lT4W']
                              }`}
                            >
                              {data && ReactHtmlParser(data.desc_detail)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="product-info"
                  className={`${styles['row__row___2roCA']} ${
                    styles['product__extra-info___1r8vd']
                  } ${styles['extra-info__extra-info-section___378qZ']}`}
                >
                  <div
                    className={`${styles['extra-info__extra-info___HmKpD']} ${
                      styles['extra-info__col-md-6___3ZC3K']
                    } ${styles['extra-info__col-sm-12___2y7dc']}`}
                  >
                    <div className={`${styles['extra-info__info-image___1Kd9E']}`}>
                      <img src="/image/product-extra-guarantee.jpg" alt="Product extra guarantee" />
                    </div>
                    <div className={`${styles['extra-info__info-text___CTc2n']}`}>
                      <div className={`${styles['extra-info__title___1Itso']}`}>
                        Bảo đảm 100% chính hãng
                      </div>
                      <ul className={`${styles['extra-info__text-list-ul___6CagB']}`}>
                        <li className={`${styles['extra-info__text-list___21vcj']}`}>
                          123order chỉ làm việc trực tiếp với các thương hiệu và nhà phân phối chính
                          thức
                        </li>
                        <li className={`${styles['extra-info__text-list___21vcj']}`}>
                          123order kiểm soát chặt chẽ quy trình hàng hóa được hợp pháp giao dịch,
                          nhập khẩu và khai thuế
                        </li>
                        <li className={`${styles['extra-info__text-list___21vcj']}`}>
                          123order vận hành nghiêm ngặt quy trình kiểm soát chất lượng của từng sản
                          phẩm trước mỗi chương trình ưu đãi
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles['extra-info__extra-info___HmKpD']} ${
                      styles['extra-info__col-md-6___3ZC3K']
                    } ${styles['extra-info__col-sm-12___2y7dc']}`}
                  >
                    <div className={`${styles['extra-info__info-image___1Kd9E']}`}>
                      <img src="/image/product-extra-return.jpg" alt="Product extra guarantee" />
                    </div>
                    <div className={`${styles['extra-info__info-text___CTc2n']}`}>
                      <div className={`${styles['extra-info__title___1Itso']}`}>
                        Trả hàng đơn giản theo 4 bước
                      </div>
                      <ul className={`${styles['extra-info__table-group___1xJ6Q']}`}>
                        <li>
                          <div className={`${styles['extra-info__order-number___2VvsH']}`}>1</div>
                          <div className={`${styles['extra-info__item-text___28eEv']}`}>
                            Liên hệ bộ phận CSKH 123order
                          </div>
                        </li>
                        <li>
                          <div className={`${styles['extra-info__order-number___2VvsH']}`}>2</div>
                          <div className={`${styles['extra-info__item-text___28eEv']}`}>
                            Nhân viên đến nhận sản phẩm hoàn trả
                          </div>
                        </li>
                        <li>
                          <div className={`${styles['extra-info__order-number___2VvsH']}`}>3</div>
                          <div className={`${styles['extra-info__item-text___28eEv']}`}>
                            123order xác nhận sản phẩm và hóa đơn
                          </div>
                        </li>
                        <li>
                          <div className={`${styles['extra-info__order-number___2VvsH']}`}>4</div>
                          <div className={`${styles['extra-info__item-text___28eEv']}`}>
                            Hoàn tiền trong vòng 7 ngày làm việc
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
export default DetailTest;
