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
class Home extends PureComponent {
  render() {
    return (
      <div>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['home__featuredContainer___1YAQy']
          }`}
        >
          <a href="#">
            <img
              className={`${styles['hidden-md-up']}`}
              src="https://images.leflair.vn/w640/q85/5bd7ea622dd83a6bfb16913e.jpg"
              srcSet="https://images.leflair.vn/w640/q85/5bd7ea622dd83a6bfb16913e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7ea622dd83a6bfb16913e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7ea622dd83a6bfb16913e.jpg 1440w"
              sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw"
              alt="Giảm Đến 82% - Nike Giày Thể Thao Nam"
            />
            <img
              className={`${styles['hidden-sm-down']}`}
              src="https://images.leflair.vn/w850/q85/5bd7ea602dd83a3fcc16913d.jpg"
              srcSet="https://images.leflair.vn/w850/q85/5bd7ea602dd83a3fcc16913d.jpg 850w, https://images.leflair.vn/w1440/q85/5bd7ea602dd83a3fcc16913d.jpg 1440w, https://images.leflair.vn/w2560/q85/5bd7ea602dd83a3fcc16913d.jpg 2560w"
              sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw"
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
          </a>
        </div>
        <div
          className={`${styles['container__container___1fvX0']} ${
            styles['home__homeContainer___1VKcQ']
          }`}
        >
          <div className={`${styles['home__topShadow___3wy_J']}`} />
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['home__currentSaleSectionTitle___XcRpN']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Ưu đãi mới Nhất</h2>
          </div>
          <div className={`${styles['row__row___2roCA']}`}>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-81-nike-giay-the-thao-nu-5bc9af39775b1800018986c4"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd801be2dd83a3139169387.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd801be2dd83a3139169387.jpg 640w, https://images.leflair.vn/w1080/q85/5bd801be2dd83a3139169387.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd801be2dd83a3139169387.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 81% - Nike Giày Thể Thao Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 81% - Nike Giày Thể Thao Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-62-jeanswest-thoi-trang-nu-and-nam-5bd692183bc933437599b7a0"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd957262054d4d8d1f3de7e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd957262054d4d8d1f3de7e.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 62% - Jeanswest Thời Trang Nữ & Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 62% - Jeanswest Thời Trang Nữ &amp; Nam
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
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
              <ul>
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
              <a
                className={`${styles['potd-new__col-md-6___13LY0']} ${
                  styles['potd-new__paddingRemove___3DF6t']
                }`}
                href="/products/tinh-chat-vitamin-c-20-30ml-5aaf9b76a4dc0a001936d430"
              >
                <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                  <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                    <img
                      className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                      src="https://images.leflair.vn/w640/q85/5bd9202e2054d433e0f3d3a0.jpg"
                      srcSet="https://images.leflair.vn/w640/q85/5bd9202e2054d433e0f3d3a0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9202e2054d433e0f3d3a0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9202e2054d433e0f3d3a0.jpg 1440w"
                      sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                      alt="Oz Naturals Tinh Chất Vitamin C"
                    />
                  </div>
                  <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                    <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                      Oz Naturals Tinh Chất Vitamin C
                    </div>
                    <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                      <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                        <i
                          className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                        />{' '}
                        <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                        <span className={`${styles['end-time__timer___LMsIT']}`}>16 giờ</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className={`${styles['potd-new__col-md-6___13LY0']} ${
                  styles['potd-new__paddingRemove___3DF6t']
                }`}
                href="/products/bo-4-noi-gom-thuy-tinh-blooming-1l-2l-3l-5l-5ab37eb3452b6900191edbc0"
              >
                <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                  <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                    <img
                      className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                      src="https://images.leflair.vn/w640/q85/5bd82ac4b8cecbea299d9878.jpg"
                      srcSet="https://images.leflair.vn/w640/q85/5bd82ac4b8cecbea299d9878.jpg 640w, https://images.leflair.vn/w1080/q85/5bd82ac4b8cecbea299d9878.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd82ac4b8cecbea299d9878.jpg 1440w"
                      sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                      alt="Giảm Đến 50% - Luminarc Bộ Nồi Gốm Thủy Tinh"
                    />
                  </div>
                  <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                    <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                      Giảm Đến 50% - Luminarc Bộ Nồi Gốm Thủy Tinh
                    </div>
                    <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                      <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                        <i
                          className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                        />{' '}
                        <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                        <span className={`${styles['end-time__timer___LMsIT']}`}>16 giờ</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            id={`${styles['best-sellers']}`}
            className={`${styles['home__best-sellers___3Yh-1']}`}
          >
            <div
              className={`${styles['section-title__title-wrap___9DwpB']} ${
                styles['best-sellers__title-container___3YMp3']
              }`}
            >
              <h2 className={`${styles['section-title__title___2Dw2G']}`}>
                Bán chạy nhất trong Ngày
              </h2>
            </div>
            <img
              className={`${styles['product-card__image___QEKAk']}`}
              src="https://images.leflair.vn/w300/q85/5aec505e1069e2001a19f659.jpg"
              srcSet="https://images.leflair.vn/w300/q85/5aec505e1069e2001a19f659.jpg 300w"
              sizes="140px, (min-width: 768px) 205px"
              alt="Bộ Drap Bọc & Vỏ Chăn Cotton 180x200 (5 Món)"
            />
          </div>
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
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-53-fila-thoi-trang-and-giay-the-thao-nam-nu-5bcdb1c7a9afb70001033f82"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8408e0563016328a86211.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8408e0563016328a86211.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 53% - Fila Thời Trang & Giày Thể Thao Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 53% - Fila Thời Trang &amp; Giày Thể Thao Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>6 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/calvin-klein-dkny-tommy-hilfiger...-5bd67b7273d283d157e0aacc"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84328efbad42946382656.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84328efbad42946382656.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Calvin Klein, Dkny, Tommy Hilfiger..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Calvin Klein, Dkny, Tommy Hilfiger...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>6 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
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
