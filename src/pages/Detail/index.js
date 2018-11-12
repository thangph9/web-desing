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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class Detail extends PureComponent {
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

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      dots: true,
    };
    return (
      <div id="app__body___3NlTJ">
        <div className={`${styles['container__container___1fvX0']}`}>
          <div className={`${styles['product__product___2plEK']}`}>
            <div
              className={`${styles['clearfix']} ${styles['product__product-header___2yYGL']}
                `}
            >
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
                    Bộ Vòng Tay Mặt Trăng Charm Ngôi Sao &amp; Vòng Tay Thạch Anh Tóc Đen Charm Hoa
                    Mai
                  </h1>
                </li>
              </ol>
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
                  <div className={`${styles['row__row___2roCA']}`}>
                    <div
                      className={`${styles['images-slider__col-lg-2___1yd0l']} ${
                        styles['images-slider__slider-container___2AcvT']
                      }`}
                    >
                      <div
                        className={`${styles['hidden-md-down']} ${
                          styles['images-slider__slider___2EiI8']
                        }`}
                      >
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
                          <li className={`${styles['images-slider__image-border___2hkRy']}`}>
                            <img
                              className={`${styles['images-slider__image___wW9Yw']}`}
                              src="https://images.leflair.vn/w90/q85/5bda7a8502c08e863b71bb2b.jpg"
                              srcSet="https://images.leflair.vn/w90/q85/5bda7a8502c08e863b71bb2b.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a8502c08e863b71bb2b.jpg 144w"
                              sizes="80px"
                            />
                          </li>
                          <li className={`${styles['images-slider__image-border___2hkRy']}`}>
                            <img
                              className={`${styles['images-slider__image___wW9Yw']}`}
                              src="https://images.leflair.vn/w90/q85/5bda7a852b25c2eab5b33bc9.jpg"
                              srcSet="https://images.leflair.vn/w90/q85/5bda7a852b25c2eab5b33bc9.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a852b25c2eab5b33bc9.jpg 144w"
                              sizes="80px"
                            />
                          </li>
                          <li className={`${styles['images-slider__image-border___2hkRy']}`}>
                            <img
                              className={`${styles['images-slider__image___wW9Yw']}`}
                              src="https://images.leflair.vn/w90/q85/5bda7a9793073444b0761dc1.jpg"
                              srcSet="https://images.leflair.vn/w90/q85/5bda7a9793073444b0761dc1.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a9793073444b0761dc1.jpg 144w"
                              sizes="80px"
                            />
                          </li>
                          <li
                            className={`${styles['images-slider__image-border___2hkRy']} ${
                              styles['images-slider__image-selected___3ftth']
                            }`}
                          >
                            <img
                              className={`${styles['images-slider__image___wW9Yw']}`}
                              src="https://images.leflair.vn/w90/q85/5bda7a922b25c20d05b33bca.jpg"
                              srcSet="https://images.leflair.vn/w90/q85/5bda7a922b25c20d05b33bca.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a922b25c20d05b33bca.jpg 144w"
                              sizes="80px"
                            />
                          </li>
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
                        <Slider {...settings}>
                          <img
                            className={`${styles['slick-slide']} ${styles['slick-active']} ${
                              styles['images-slider__image___wW9Yw']
                            }`}
                            src="https://images.leflair.vn/w380/q85/5bda7a8502c08e863b71bb2b.jpg"
                            srcSet="https://images.leflair.vn/w380/q85/5bda7a8502c08e863b71bb2b.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a8502c08e863b71bb2b.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a8502c08e863b71bb2b.jpg 850w"
                            style={{ outline: 'none', width: 447 }}
                          />
                          <img
                            className={`${styles['slick-slide']} ${
                              styles['images-slider__image___wW9Yw']
                            }`}
                            src="https://images.leflair.vn/w380/q85/5bda7a852b25c2eab5b33bc9.jpg"
                            srcSet="https://images.leflair.vn/w380/q85/5bda7a852b25c2eab5b33bc9.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a852b25c2eab5b33bc9.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a852b25c2eab5b33bc9.jpg 850w"
                            style={{ outline: 'none', width: 447 }}
                          />
                          <img
                            className={`${styles['slick-slide']} ${
                              styles['images-slider__image___wW9Yw']
                            }`}
                            src="https://images.leflair.vn/w380/q85/5bda7a9793073444b0761dc1.jpg"
                            srcSet="https://images.leflair.vn/w380/q85/5bda7a9793073444b0761dc1.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a9793073444b0761dc1.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a9793073444b0761dc1.jpg 850w"
                            style={{ outline: 'none', width: 447 }}
                          />
                          <img
                            className={`${styles['slick-slide']} ${
                              styles['images-slider__image___wW9Yw']
                            }`}
                            src="https://images.leflair.vn/w380/q85/5bda7a922b25c20d05b33bca.jpg"
                            srcSet="https://images.leflair.vn/w380/q85/5bda7a922b25c20d05b33bca.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a922b25c20d05b33bca.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a922b25c20d05b33bca.jpg 850w"
                            style={{ outline: 'none', width: 447 }}
                          />
                        </Slider>
                        <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>
                          Hết hàng
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles['hidden-md-down']} ${
                        styles['images-slider__col-lg-10___3uZXv']
                      }`}
                    >
                      <div className={`${styles['images-slider__main-image___1MFAY']}`}>
                        <img
                          className={`${styles['images-slider__image___wW9Yw']}`}
                          src="https://images.leflair.vn/w580/q85/5bda7a922b25c20d05b33bca.jpg"
                          srcSet="https://images.leflair.vn/w580/q85/5bda7a922b25c20d05b33bca.jpg 580w, https://images.leflair.vn/w1030/q85/5bda7a922b25c20d05b33bca.jpg 1030w, https://images.leflair.vn/w1080/q85/5bda7a922b25c20d05b33bca.jpg 1080w"
                        />
                        <div className={`${styles['images-slider__sold-out-overlay___2Avrv']}`}>
                          Hết hàng
                        </div>
                        <img
                          id="zoom-image"
                          className={`${styles['images-slider__zoom-image___3jo-j']}`}
                          src="https://images.leflair.vn/w1350/q85/5bda7a922b25c20d05b33bca.jpg"
                          srcSet="https://images.leflair.vn/w1350/q85/5bda7a922b25c20d05b33bca.jpg 1350w, https://images.leflair.vn/w1440/q85/5bda7a922b25c20d05b33bca.jpg 1440w"
                          style={{ top: '-138.534px', left: '-300.779px' }}
                        />
                        <div className={`${styles['images-slider__overlay___CJo-l']}`} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles['hidden-sm-down']} ${
                      styles['product__brand-info___1s9-O']
                    }`}
                  >
                    <img src="https://leflair-assets.storage.googleapis.com/59ca0a3be1b357001a65d626.jpg" />
                    <h4 className={`${styles['brand-info__heading___EhwGa']}`}>
                      "Đem đến cho bạn nhiều điều bình an"
                    </h4>
                    <div className={`${styles['brand-info__desc___19Dk4']}`}>
                      Trang sức đá tự nhiên không chỉ là nguồn thu hút những năng lượng tốt mà còn
                      để làm"điệu". J Natural Stones® ra đời với giá cả cạnh tranh, chế tác tinh
                      xảo, sản phẩm kiểm định nguồn gốc rõ ràng sẽ là phụ kiện tạo được điểm nhấn
                      làm nổi bật cá tính riêng biệt trong mỗi người.
                    </div>
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
                    <h4 className={`${styles['product-info__brand___3akKm']}`}>
                      J Natural Stones®
                    </h4>
                    <h4 className={`${styles['product-info__title___2J672']}`}>
                      Bộ Vòng Tay Mặt Trăng Charm Ngôi Sao &amp; Vòng Tay Thạch Anh Tóc Đen Charm
                      Hoa Mai
                    </h4>
                    <div id={`${styles['product-prices']}`}>
                      <span className={`${styles['product-info__retail-price___2eFS9']}`}>
                        1.690.000₫
                      </span>
                      <span className={`${styles['product-info__sale-price___1unp2']}`}>
                        1.149.000₫
                      </span>
                    </div>
                  </div>
                  <p className={`${styles['product__few-items-notify___1Q8z3']}`}>
                    Chỉ còn lại 2 sản phẩm
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
                  <div className={`${styles['product__sale-timer___RypVA']}`}>
                    <p>Ưu đãi này sẽ kết thúc trong:</p>
                    <div
                      className={`${styles['row__row___2roCA']} ${
                        styles['sale-timer__timer-row___1JwVa']
                      } ${styles['product__flex-center___1bEVZ']}`}
                    >
                      <div>
                        <div>06</div>
                        <div>Ngày</div>
                      </div>
                      <div>
                        <div>10</div>
                        <div>Giờ</div>
                      </div>
                      <div>
                        <div>01</div>
                        <div>Phút</div>
                      </div>
                      <div>
                        <div>36</div>
                        <div>Giây</div>
                      </div>
                    </div>
                  </div>
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
                          />{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles['product__product-desc___3eim0']}`}>
                    <div>
                      <div className={`${styles['product-description__group___3Z2qF']}`}>
                        <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                          <a
                            onClick={() => this.handleClickDesciption('info-product')}
                            className={`${styles['product-description__accordion-toggle___1kmrM']}`}
                            href="javascript:void(0)"
                          >
                            <div className={`${styles['product-description__title___Xh_fg']}`}>
                              Thông tin sản phẩm
                              <span
                                className={`${styles['product-description__btn-collapse___3Pk93']}`}
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
                          </a>
                        </h4>
                        <div
                          id="info-product"
                          className={`${styles['collapse']} ${
                            styles['product-description__panel-collapse___3G-5Q']
                          } collapselow`}
                        >
                          <div className={`${styles['product-description__product-info___nWbK5']}`}>
                            <ul className={`${styles['product-description__desc-list___3qcUM']}`}>
                              <li>
                                <div>Gia công: Việt Nam</div>
                              </li>
                              <li>
                                <div>
                                  Ý nghĩa:
                                  <ul>
                                    <li>
                                      Đá mặt trăng được coi như hấp thụ tinh hoa của mặt trăng, mang
                                      đến sự êm đềm và khiến tâm trí không bị xao nhãng, xóa bỏ căng
                                      thẳng, nguôi ngoai cơn giận. Ngoài ra, còn có tác động tới với
                                      thận niệu đạo và bàng quang, điều trị phù thũng.
                                    </li>
                                    <li>
                                      Thạch anh tóc đen được coi là viên đá của tình cảm, giúp cân
                                      bằng cảm xúc, xóa bỏ trạng thái căng thẳng, trầm cảm kéo dài.{' '}
                                    </li>
                                    <li>
                                      Xua đuổi hư khí, giúp người đeo tránh được điềm xui rủi, mang
                                      đến vận may, cơ hội.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={`${styles['product-description__group___3Z2qF']}`}>
                        <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                          <a
                            onClick={() => this.handleClickDesciption('material')}
                            className={`${styles['product-description__accordion-toggle___1kmrM']}`}
                            href="javascript:void(0)"
                          >
                            <div className={`${styles['product-description__title___Xh_fg']}`}>
                              Chất liệu &amp; Cách sử dụng
                              <span
                                className={`${styles['product-description__btn-collapse___3Pk93']}`}
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
                          </a>
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
                            <ul className={`${styles['product-description__desc-list___3qcUM']}`}>
                              <li>
                                <div>Chất liệu: Đá mặt trăng, đá thạch anh tóc đen, bạc 925</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={`${styles['product-description__group___3Z2qF']}`}>
                        <h4 className={`${styles['product-description__panel-title___1aoFo']}`}>
                          <a
                            onClick={() => this.handleClickDesciption('size-table')}
                            id="size-table-click"
                            className={`${styles['product-description__accordion-toggle___1kmrM']}`}
                            href="javascript:void(0)"
                          >
                            <div className={`${styles['product-description__title___Xh_fg']}`}>
                              Chi tiết kích cỡ
                              <span
                                className={`${styles['product-description__btn-collapse___3Pk93']}`}
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
                          </a>
                        </h4>
                        <div
                          id="size-table"
                          className={`${styles['collapse']} ${
                            styles['product-description__panel-collapse___3G-5Q']
                          } collapselow`}
                        >
                          <div>
                            <div className={`${styles['product-description__size-fit___1p0wI']}`}>
                              <ul className={`${styles['product-description__desc-list___3qcUM']}`}>
                                <li>
                                  <div>Đường kính: 6cm</div>
                                </li>
                                <li>
                                  <div>Hạt đá mặt trăng: 0.3cm</div>
                                </li>
                                <li>
                                  <div>Hạt đá thạch anh tóc đen: 0.5cm</div>
                                </li>
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
                          <a
                            onClick={() => this.handleClickDesciption('info-brand')}
                            className={`${styles['product-description__accordion-toggle___1kmrM']}`}
                            href="javascript:void(0)"
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
                                className={`${styles['product-description__btn-collapse___3Pk93']}`}
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
                          </a>
                        </h4>
                        <div
                          id="info-brand"
                          className={`${styles['collapse']} ${
                            styles['product-description__panel-collapse___3G-5Q']
                          } collapselow`}
                        >
                          <div
                            className={`${styles['product-description__about-the-brand___3lT4W']}`}
                          >
                            <h4 className={`${styles['product-description__heading___Mrl6O']}`}>
                              "Đem đến cho bạn nhiều điều bình an"
                            </h4>
                            <div className={`${styles['product-description__desc___Pym2G']}`}>
                              Trang sức đá tự nhiên không chỉ là nguồn thu hút những năng lượng tốt
                              mà còn để làm"điệu". J Natural Stones® ra đời với giá cả cạnh tranh,
                              chế tác tinh xảo, sản phẩm kiểm định nguồn gốc rõ ràng sẽ là phụ kiện
                              tạo được điểm nhấn làm nổi bật cá tính riêng biệt trong mỗi người.
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
                        123order kiểm soát chặt chẽ quy trình hàng hóa được hợp pháp giao dịch, nhập
                        khẩu và khai thuế
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
    );
  }
}

export default Detail;
