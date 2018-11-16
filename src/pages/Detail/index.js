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
import Slider from 'react-slick';
import { connect } from 'dva';
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
  Tooltip,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
import styles from './index.less';

var currencyFormatter = require('currency-formatter');

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
@connect(({ loading, product }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  product,
}))
@Form.create()
class Detail extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  // eslint-disable-next-line react/sort-comp
  handleClickDesciption(idDetail) {
    var body = document.getElementById('app__body___3NlTJ');
    var width = body.offsetWidth;
    if (width < 767) {
      var element = document.getElementById(idDetail);
      var collapselow = document.getElementsByClassName('collapselow');
      for (var i = 0; i < collapselow.length; i++) {
        collapselow[i].style.display = 'none';
      }
      if (element.style.display == 'block') {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    } else {
      var element = document.getElementById(idDetail);
      if (element.style.display == 'block') {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    }
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    let productid = '';
    try {
      productid = match.params.productid;
    } catch (e) {}
    dispatch({
      type: 'product/detail',
      payload: { productid },
    });
  }
  handleChangeImage = e => {
    this.setState({
      imageChoose: e.replace(/\-/g, ''),
    });
  };
  onHover = e => {};
  onMouseMove = e => {
    this.setState({ x: (e.screenX - 1000) / 2, y: (e.screenY - 1378) / 2 });
  };
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
    return (
      <ol
        className={`${styles['undefined']} ${styles['breadcrumb__breadcrumb___3F6K8']}

                  `}
      >
        <li
          className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
        >
          <a href="/">Ưu đãi</a>
        </li>
        <li
          className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
        >
          <a href="/sales/j-natural-stonesr-trang-suc-phong-thuy-5bd6c4d93bc9335db599c3b6">
            J Natural Stones® Trang Sức Phong Thủy
          </a>
        </li>
        <li
          className={`${styles['breadcrumb__breadcrumb-item___3ytpk']}
                    `}
        >
          <h1 style={{ color: 'rgba(78, 89, 93, 0.7)' }}>
            Bộ Vòng Tay Mặt Trăng Charm Ngôi Sao &amp; Vòng Tay Thạch Anh Tóc Đen Charm Hoa Mai
          </h1>
        </li>
      </ol>
    );
  }
  renderSlider() {
    const {
      product: { detail },
    } = this.props;
    const { imageChoose } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      dots: true,
    };
    const data = detail || {};
    const image_huge = data.image_huge;
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
          <li
            key={i}
            onClick={() => {
              this.handleChangeImage(e);
            }}
            onMouseOver={this.onHover(e)}
            className={styles['images-slider__image-border___2hkRy']}
          >
            <img
              className={styles['images-slider__image___wW9Yw']}
              src={`/images/w90/${image}`}
              sizes="80px"
            />
          </li>
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
          // eslint-disable-next-line react/destructuring-assignment
          style={{ top: this.state.x, left: this.state.y }}
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
              {SmallImageUI}
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
            <Slider {...settings}>{HugeImageUI}</Slider>
            <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>Hết hàng</div>
          </div>
        </div>
        <div
          className={`${styles['hidden-md-down']} ${styles['images-slider__col-lg-10___3uZXv']}`}
        >
          <div className={`${styles['images-slider__main-image___1MFAY']}`}>
            {huge_image}
            <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>Hết hàng</div>
            {zoom_image}
            <div
              className={`${styles['images-slider__overlay___CJo-l']}`}
              onMouseMove={this.onMouseMove.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      product: { detail },
      loading,
    } = this.props;

    const data = detail || {};
    const title = detail.title ? detail.title : 'Chi tiết sản phẩm';
    const meta_description = detail.meta_description ? detail.meta_description : '123order ';
    const meta_data = detail.meta ? detail.meta : '123order,order';
    const endTime = detail.death_clock ? new Date(detail.death_clock.end).getTime() : 0;
    const price = currencyFormatter.format(data['_price'], { locale: 'vi-VN' });
    const sale_price = currencyFormatter.format(data['_sale_price'], { locale: 'vi-VN' });
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
    const infomation = [];
    const info = detail.infomation ? detail.infomation : {};
    if (info instanceof Object) {
      if (info.dimensions) {
        const dimensions = (
          <li key={`${new Date().getTime()}dimensions`}>
            <div>Kích cỡ: {info.dimensions}</div>
          </li>
        );
        infomation.push(dimensions);
      }
      if (info.item_weight) {
        const item_weight = (
          <li key={`${new Date().getTime()}item_weight`}>
            <div>Cân nặng: {info.item_weight}</div>
          </li>
        );
        infomation.push(item_weight);
      }
    }

    const delivery = '';
    return (
      <DocumentMeta {...meta}>
        <div id="app__body___3NlTJ">
          <div className={styles['container__container___1fvX0']}>
            <div className={styles['product__product___2plEK']}>
              <div className={styles['product__product-header___2yYGL']}>
                {this.renderBreadcrumb()}
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
                      {ReactHtmlParser(data.desc_detail)}
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
                        {data.seller}
                      </h4>
                      <h4 className={`${styles['product-info__title___2J672']}`}>{data.title}</h4>
                      <div id={`${styles['product-prices']}`}>
                        <span className={`${styles['product-info__retail-price___2eFS9']}`}>
                          {price}
                        </span>
                        <span className={`${styles['product-info__sale-price___1unp2']}`}>
                          {sale_price}
                        </span>
                      </div>
                    </div>

                    <p className={`${styles['product__few-items-notify___1Q8z3']}`}>
                      {detail.amount ? `Chỉ còn lại ${detail.amount} sản phẩm` : 'Hết hàng'}
                    </p>
                    <div className={`${styles['product__few-items-notify___1Q8z3']}`}>
                      <button
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
                                  <i
                                    className={`${styles['ic-ic-minus']} ${
                                      styles['product-description__expanded___wm98V']
                                    }`}
                                  />
                                  <i
                                    className={`${styles['ic-ic-plus']} ${
                                      styles['product-description__collapsed___ahwQq']
                                    }`}
                                  />
                                </span>
                              </div>
                            </Link>
                          </h4>
                          <div
                            id="info-product"
                            className={`${styles['collapse']} ${
                              styles['product-description__panel-collapse___3G-5Q']
                            } collapselow`}
                          >
                            <div
                              className={`${styles['product-description__product-info___nWbK5']}`}
                            >
                              {ReactHtmlParser(data.description)}
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
                                  <i
                                    className={`${styles['ic-ic-minus']} ${
                                      styles['product-description__expanded___wm98V']
                                    }`}
                                  />
                                  <i
                                    className={`${styles['ic-ic-plus']} ${
                                      styles['product-description__collapsed___ahwQq']
                                    }`}
                                  />
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
                              {ReactHtmlParser(data.materials_use)}
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
                                  <i
                                    className={`${styles['ic-ic-minus']} ${
                                      styles['product-description__expanded___wm98V']
                                    }`}
                                  />
                                  <i
                                    className={`${styles['ic-ic-plus']} ${
                                      styles['product-description__collapsed___ahwQq']
                                    }`}
                                  />
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
                                  {infomation}
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
                                  <i
                                    className={`${styles['ic-ic-minus']} ${
                                      styles['product-description__expanded___wm98V']
                                    }`}
                                  />
                                  <i
                                    className={`${styles['ic-ic-plus']} ${
                                      styles['product-description__collapsed___ahwQq']
                                    }`}
                                  />
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
                              <h4 className={`${styles['product-description__heading___Mrl6O']}`}>
                                "Đem đến cho bạn nhiều điều bình an"
                              </h4>
                              <div className={`${styles['product-description__desc___Pym2G']}`}>
                                Trang sức đá tự nhiên không chỉ là nguồn thu hút những năng lượng
                                tốt mà còn để làm"điệu". J Natural Stones® ra đời với giá cả cạnh
                                tranh, chế tác tinh xảo, sản phẩm kiểm định nguồn gốc rõ ràng sẽ là
                                phụ kiện tạo được điểm nhấn làm nổi bật cá tính riêng biệt trong mỗi
                                người.
                              </div>
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

export default Detail;
