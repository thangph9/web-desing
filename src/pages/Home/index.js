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
import styles from '@/global.less';

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
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-53-police-furla-gong-kinh-nu-and-nam-5bd6bd107cf04752e7488c5b"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd959b02054d42863f3e0bc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd959b02054d42863f3e0bc.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 53% - Police, Furla Gọng Kính Nữ & Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 53% - Police, Furla Gọng Kính Nữ &amp; Nam
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
              href="/sales/giam-den-57-police-furla-kinh-mat-thoi-trang-5bd6bf8a7cf0477c27488c97"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg 640w, https://images.leflair.vn/w1080/q85/5bd965ad3833ca360094e583.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd965ad3833ca360094e583.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang
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
              href="/sales/omron-and-laica-thiet-bi-cham-soc-suc-khoe-5bd9244c4029352174494660"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd94ec4f95af294e918c5a0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd94ec4f95af294e918c5a0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Omron & Laica: Thiết Bị Chăm Sóc Sức Khỏe"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Omron &amp; Laica: Thiết Bị Chăm Sóc Sức Khỏe
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
              href="/sales/dr.-brandt-my-pham-cham-soc-da-5bd2a1b57a96e63685539412"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__international-tile___3A645']}`}>
                  Hàng nhập khẩu
                </div>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd9915bb4993258f12b2dc3.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd9915bb4993258f12b2dc3.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9915bb4993258f12b2dc3.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9915bb4993258f12b2dc3.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Dr. Brandt Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Dr. Brandt Mỹ Phẩm Chăm Sóc Da
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
              href="/sales/giam-den-56-kate-spade-new-york-dong-ho-nu-5bd6b4b13bc9331d3b99bf2c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd92b282054d44423f3d715.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd92b282054d44423f3d715.jpg 640w, https://images.leflair.vn/w1080/q85/5bd92b282054d44423f3d715.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd92b282054d44423f3d715.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 56% - Kate Spade New York Đồng Hồ Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 56% - Kate Spade New York Đồng Hồ Nữ
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
              href="/sales/giam-den-59-elly-preston-trang-suc-nu-5bd695033bc933aa6899b893"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd81fb8d297d16792389ad6.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd81fb8d297d16792389ad6.jpg 640w, https://images.leflair.vn/w1080/q85/5bd81fb8d297d16792389ad6.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd81fb8d297d16792389ad6.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 59% - Elly Preston Trang Sức Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 59% - Elly Preston Trang Sức Nữ
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
              href="/sales/giam-den-56-dermolab-my-pham-cham-soc-da-5bd6bc9c73d283303de0bb6e"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd826e2d297d131fb389b98.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd826e2d297d131fb389b98.jpg 640w, https://images.leflair.vn/w1080/q85/5bd826e2d297d131fb389b98.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd826e2d297d131fb389b98.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 56% - Dermolab Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 56% - Dermolab Mỹ Phẩm Chăm Sóc Da
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
              href="/sales/non-and-binh-nuoc-the-thao-mitchell-and-ness-o2cool-5bd692d47cf04786044887cb"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd828bcb8cecbc9599d9835.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd828bcb8cecbc9599d9835.jpg 640w, https://images.leflair.vn/w1080/q85/5bd828bcb8cecbc9599d9835.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd828bcb8cecbc9599d9835.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Nón & Bình Nước Thể Thao: Mitchell & Ness, O2cool"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Nón &amp; Bình Nước Thể Thao: Mitchell &amp; Ness, O2cool
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
              href="/sales/giam-den-50-gaya-my-pham-and-dung-cu-trang-diem-5bd2b62d7a96e6f7c553949e"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__international-tile___3A645']}`}>
                  Hàng nhập khẩu
                </div>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd9824802c08e0efa71b527.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd9824802c08e0efa71b527.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9824802c08e0efa71b527.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9824802c08e0efa71b527.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 50% - Gaya Mỹ Phẩm & Dụng Cụ Trang Điểm"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 50% - Gaya Mỹ Phẩm &amp; Dụng Cụ Trang Điểm
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/snp-my-pham-cham-soc-da-5bd6d479aea2cb63436b161a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd9894002c08e07a371b705.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd9894002c08e07a371b705.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9894002c08e07a371b705.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9894002c08e07a371b705.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="SNP Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    SNP Mỹ Phẩm Chăm Sóc Da
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
              href="/sales/giam-den-55-jun-store-drap-boc-and-vo-chan-5bd2c48a3461fc5ac52e75e3"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd925922054d424b5f3d4f0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd925922054d424b5f3d4f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd925922054d424b5f3d4f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd925922054d424b5f3d4f0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 55% - Jun Store Drap Bọc & Vỏ Chăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 55% - Jun Store Drap Bọc &amp; Vỏ Chăn
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
              href="/sales/cuckoo-thiet-bi-gia-dung-nha-bep-5bd2a128f9989f6965e79910"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd93412f95af258f218c15d.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd93412f95af258f218c15d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd93412f95af258f218c15d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd93412f95af258f218c15d.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Cuckoo Thiết Bị Gia Dụng Nhà Bếp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Cuckoo Thiết Bị Gia Dụng Nhà Bếp
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
            className={`${styles['banner__bannerContainer___3Inm6 home__bannerWrap___1k6zX']}`}
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
                  styles['potd-new__paddingRemove___3DF6t ']
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
                  styles['potd-new__paddingRemove___3DF6t ']
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
              className={`${'section-title__title-wrap___9DwpB'} ${
                styles['best-sellers__title-container___3YMp3']
              }`}
            >
              <h2 className={`${styles['section-title__title___2Dw2G']}`}>
                Bán chạy nhất trong Ngày
              </h2>
            </div>
            <div
              id={`${styles['products-carousel']}`}
              className={`${styles['undefined']} ${
                styles['products-carousel__products-carousel___Wk8_0']
              }`}
            >
              <div className={`${styles['products-carousel__outerbox___2Ng9R']}`}>
                <div className={`${styles['products-carousel__innerbox___1Jnq1']}`}>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-boc-and-vo-chan-cotton-180x200-5-mon-5ae195bbfb11c8000f040962?color=STERMIL"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_ ']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5aec505e1069e2001a19f659.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5aec505e1069e2001a19f659.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Bọc & Vỏ Chăn Cotton 180x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Jun Store</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Bọc &amp; Vỏ Chăn Cotton 180x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              4.100.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.829.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-4-noi-gom-thuy-tinh-blooming-1l-2l-3l-5l-5ab37eb3452b6900191edbc0"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5ab9ef25c2d5810019f95c02.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5ab9ef25c2d5810019f95c02.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ 4 Nồi Gốm Thủy Tinh Blooming 1L, 2L, 3L, 5L"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Luminarc</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ 4 Nồi Gốm Thủy Tinh Blooming 1L, 2L, 3L, 5L
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              5.499.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              2.699.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-boc-and-vo-chan-cotton-160x200-5-mon-5ae195bbfb11c8000f040957?color=MERINDA"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5aec4e63fb11c8000f04569b.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5aec4e63fb11c8000f04569b.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Bọc & Vỏ Chăn Cotton 160x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Jun Store</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Bọc &amp; Vỏ Chăn Cotton 160x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              3.900.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.799.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-boc-cotton-120x200-3-mon-5ae195bbfb11c8000f04092b?color=STERMIL"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5aec46b5e613f0000fdc0558.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5aec46b5e613f0000fdc0558.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Bọc Cotton 120x200 (3 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Jun Store</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Bọc Cotton 120x200 (3 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              1.500.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              799.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-boc-cotton-160x200-4-mon-5ae195bbfb11c8000f040941?color=JACINDA"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5aec4de9e613f0000fdc06d2.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5aec4de9e613f0000fdc06d2.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Bọc Cotton 160x200 (4 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Jun Store</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Bọc Cotton 160x200 (4 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              2.050.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              999.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/kinh-mat-nam-rectangular-noi-doi-57edde92d60199100079417c?color=579"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/57f37fc0afc4171000a31dd3.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/57f37fc0afc4171000a31dd3.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Kính Mát Nam Rectangular Nối Đôi"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Police</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Kính Mát Nam Rectangular Nối Đôi
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              3.400.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.639.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-boc-cotton-180x200-4-mon-5ae195bbfb11c8000f04094c?color=STERMIL"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5aec4945fb11c8000f045686.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5aec4945fb11c8000f045686.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Bọc Cotton 180x200 (4 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Jun Store</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Bọc Cotton 180x200 (4 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              2.250.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.099.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/mat-na-bun-dieu-tri-mun-cam-and-mun-dau-den-on-off-80g-5a4f21d0367b4d00113b6066"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5a55d4db9cd9500016ec2085.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5a55d4db9cd9500016ec2085.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Mặt Nạ Bùn Điều Trị Mụn Cám & Mụn Đầu Đen On-Off 80g"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>SNP</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Mặt Nạ Bùn Điều Trị Mụn Cám &amp; Mụn Đầu Đen On-Off 80g
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              350.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              239.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/sua-rua-mat-se-khit-lo-chan-long-80g-5a4f21d0367b4d00113b6068"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5a55d4e73586480017649717.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5a55d4e73586480017649717.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Sữa Rửa Mặt Se Khít Lỗ Chân Lông 80g"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>SNP</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Sữa Rửa Mặt Se Khít Lỗ Chân Lông 80g
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              350.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              239.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/kinh-mat-nam-rectangular-noi-doi-metal-5982d5610e63ac1100eae915?color=568P"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/599aa9c55065420010031062.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/599aa9c55065420010031062.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Kính Mát Nam Rectangular Nối Đôi Metal"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Police</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Kính Mát Nam Rectangular Nối Đôi Metal
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              3.700.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.759.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/essence-chong-nang-tinh-chat-to-yen-w-50g-5a4b146758d9ca00139d569c"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5a78385e1c7187001adf4299.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5a78385e1c7187001adf4299.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Essence Chống Nắng Tinh Chất Tổ Yến W+ 50g"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>SNP</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Essence Chống Nắng Tinh Chất Tổ Yến W+ 50g
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              640.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              499.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/3-bo-mieng-dan-mo-bung-586dc35ef52937100068d9e8"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/586f841119a5ec10008372c7.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/586f841119a5ec10008372c7.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="3 Bộ Miếng Dán Mỡ Bụng"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Mymi</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            3 Bộ Miếng Dán Mỡ Bụng
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              495.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              329.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-microfiber-delight-160x200-5-mon-58f04c5190947d1000be4d6e?color=DL0296"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5964561cb725c71000caf922.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5964561cb725c71000caf922.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Microfiber Delight 160x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Tulip</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Microfiber Delight 160x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              1.240.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              779.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-microfiber-delight-180x200-5-mon-58f04c5190947d1000be4d78?color=DL0078"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/59283f8743399c100037cb5d.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/59283f8743399c100037cb5d.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap Microfiber Delight 180x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Tulip</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap Microfiber Delight 180x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              1.530.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              799.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-and-chan-chan-180x200-5-mon-58f04c5190947d1000be4d64?color=TT5348/TT53480"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/5b054c77e6e9aa00017f7432.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/5b054c77e6e9aa00017f7432.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap & Chăn Chần 180x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Toto</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap &amp; Chăn Chần 180x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              2.145.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.439.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles['products-carousel__product-card-container___7-x0W']}`}>
                    <a
                      className={`${styles['products-carousel__product-card___2cXOo']} ${
                        styles['product-card__productCard___2lSYu']
                      }`}
                      href="/products/bo-drap-and-chan-chan-160x200-5-mon-58f04c5190947d1000be4d54?color=BROWN6/BROWN80"
                    >
                      <div>
                        <div
                          className={`${styles['product-card__imageContainer___1apY_']} ${
                            styles['product-card__home-sale___3YRZP']
                          }`}
                        >
                          <img
                            className={`${styles['product-card__image___QEKAk']}`}
                            src="https://images.leflair.vn/w300/q85/59b655dfecc006001a7b776d.jpg"
                            srcSet="https://images.leflair.vn/w300/q85/59b655dfecc006001a7b776d.jpg 300w"
                            sizes="140px, (min-width: 768px) 205px"
                            alt="Bộ Drap & Chăn Chần 160x200 (5 Món)"
                          />
                        </div>
                        <div className={`${styles['product-card__titleContainer___1HE6o']}`}>
                          <h4 className={`${styles['product-card__brand___3np4R']}`}>Toto</h4>
                          <h4 className={`${styles['product-card__title___3l79X']}`}>
                            Bộ Drap &amp; Chăn Chần 160x200 (5 Món)
                          </h4>
                          <div>
                            <span className={`${styles['product-card__retailPrice___2urqH']}`}>
                              2.090.000₫
                            </span>
                            <span className={`${styles['product-card__salePrice___3PSWy']}`}>
                              1.389.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles['products-carousel__arrow___34SUB']} ${
                  styles['products-carousel__left___14dZg']
                }`}
              >
                <a className={`${styles['products-carousel__arrow-btn___1MhQ5']}`}>
                  <i
                    className={`${styles['ic-ic-arrow-left']} ${
                      styles['products-carousel__icon___OV1Rh']
                    }`}
                  />
                </a>
              </div>
              <div
                className={`${styles['products-carousel__arrow___34SUB']} ${
                  styles['products-carousel__right___2ZsRA']
                }`}
              >
                <a className={`${styles['products-carousel__arrow-btn___1MhQ5']}`}>
                  <i
                    className={`${styles['ic-ic-arrow-right']} ${
                      styles['products-carousel__icon___OV1Rh']
                    }`}
                  />
                </a>
              </div>
            </div>
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
              href="/sales/giam-den-69-james-mccabe-and-thomas-earnshaw-dong-ho-nam-5bceac53d56ec80001043e8e"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd697803bc9330bae99b97c.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd697803bc9330bae99b97c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd697803bc9330bae99b97c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd697803bc9330bae99b97c.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 69% - James McCabe & Thomas Earnshaw: Đồng Hồ Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 69% - James McCabe &amp; Thomas Earnshaw: Đồng Hồ Nam
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
              href="/sales/giam-den-40-lotus-nem-cao-cap-5bd0377598ea5c000109f592"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd83d01efbad4926038241f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd83d01efbad4926038241f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd83d01efbad4926038241f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd83d01efbad4926038241f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 40% - Lotus Nệm Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 40% - Lotus Nệm Cao Cấp
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
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giorgio-armani-and-giorgio-ferri-kinh-mat-nam-nu-5bd033d5b5107200018695cf"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8199977f225fd44d8de5f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8199977f225fd44d8de5f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giorgio Armani & Giorgio Ferri: Kính Mát Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giorgio Armani &amp; Giorgio Ferri: Kính Mát Nam, Nữ
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
              href="/sales/mip-bookki-cosmetea-5bce9a177176290001132360"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd68e407cf0473662488796.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd68e407cf0473662488796.jpg 640w, https://images.leflair.vn/w1080/q85/5bd68e407cf0473662488796.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd68e407cf0473662488796.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="MIP, BOOKKI, COSMETEA"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    MIP, BOOKKI, COSMETEA
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
              href="/sales/giam-den-50-windsirr-bo-drap-and-chan-5bd037db22064a0001fa3338"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd81f7177f2253c0cd8e034.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd81f7177f2253c0cd8e034.jpg 640w, https://images.leflair.vn/w1080/q85/5bd81f7177f2253c0cd8e034.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd81f7177f2253c0cd8e034.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 50% - Windsir® Bộ Drap & Chăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 50% - Windsir® Bộ Drap &amp; Chăn
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
              href="/sales/giam-den-58-les-georgettes-paris-phu-kien-trang-suc-nu-5bd2f01b5ab4dd1ec71ebdb0"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd84540ec2d442e7801a9d4.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd84540ec2d442e7801a9d4.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84540ec2d442e7801a9d4.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84540ec2d442e7801a9d4.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 58% - Les Georgettes Paris Phụ Kiện Trang Sức Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 58% - Les Georgettes Paris Phụ Kiện Trang Sức Nữ
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
              href="/sales/fresh-and-feel-my-pham-cham-soc-toc-and-co-the-5bd2b8c7e6de67527108b9aa"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6cbdd3d41613a1ac1ad90.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6cbdd3d41613a1ac1ad90.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6cbdd3d41613a1ac1ad90.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6cbdd3d41613a1ac1ad90.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Fresh & Feel Mỹ Phẩm Chăm Sóc Tóc & Cơ Thể"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Fresh &amp; Feel Mỹ Phẩm Chăm Sóc Tóc &amp; Cơ Thể
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
              href="/sales/tiniboo-thoi-trang-tre-em-5bd29008b57df3b8c83c56bf"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd7d5b777f22509ead8c3be.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd7d5b777f22509ead8c3be.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7d5b777f22509ead8c3be.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7d5b777f22509ead8c3be.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Tiniboo Thời Trang Trẻ Em"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Tiniboo Thời Trang Trẻ Em
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
              href="/sales/philips-panasonic-elmich...-5bd679f173d283bf29e0a9d0"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6b6457cf0470f5e488c09.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6b6457cf0470f5e488c09.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Philips, Panasonic, Elmich..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Philips, Panasonic, Elmich...
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
              href="/sales/pretty-my-pham-cao-cap-5bd679867cf047911c4880a6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd84219ec2d4454f201a9c9.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd84219ec2d4454f201a9c9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84219ec2d4454f201a9c9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84219ec2d4454f201a9c9.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Pretty Mỹ Phẩm Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Pretty Mỹ Phẩm Cao Cấp
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
              href="/sales/parakito-vien-chong-muoi-5bd2b9f7d7751c62fb8f8c81"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84348056301de7ea86236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84348056301de7ea86236.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Para'kito Viên Chống Muỗi"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Para'kito Viên Chống Muỗi
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
              href="/sales/tiross-do-gia-dung-5bd28f9a7a96e6461d539257"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd7eac177f22500bed8d130.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd7eac177f22500bed8d130.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7eac177f22500bed8d130.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7eac177f22500bed8d130.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Tiross Đồ Gia Dụng"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Tiross Đồ Gia Dụng
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
              href="/sales/giam-den-47-kyocera-do-dung-nha-bep-tu-nhat-ban-5bd0371f98ea5c000109f591"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd839570563016512a8619b.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd839570563016512a8619b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd839570563016512a8619b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd839570563016512a8619b.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 47% - Kyocera Đồ Dùng Nhà Bếp Từ Nhật Bản"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 47% - Kyocera Đồ Dùng Nhà Bếp Từ Nhật Bản
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
              href="/sales/pensonic-cuchen-aqua...-5bd0358622064a0001fa2822"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd83f630563017b45a86206.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd83f630563017b45a86206.jpg 640w, https://images.leflair.vn/w1080/q85/5bd83f630563017b45a86206.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd83f630563017b45a86206.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Pensonic, Cuchen, Aqua,..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Pensonic, Cuchen, Aqua,...
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
              href="/sales/giam-den-59-olv-boutique-thoi-trang-nu-5bcea8219eaacb000149986c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6c2473bc93302b999c259.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6c2473bc93302b999c259.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c2473bc93302b999c259.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c2473bc93302b999c259.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 59% - Olv Boutique Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 59% - Olv Boutique Thời Trang Nữ
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
              href="/sales/idigo-balo-and-tui-thoi-trang-nu-5bcea72671762900011325b8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd696377cf0477eba488891.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd696377cf0477eba488891.jpg 640w, https://images.leflair.vn/w1080/q85/5bd696377cf0477eba488891.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd696377cf0477eba488891.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Idigo Balo & Túi Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Idigo Balo &amp; Túi Thời Trang Nữ
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
              href="/sales/cest-la-v-thoi-trang-nu-5bcea2569eaacb000149979b"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd90ebc3a7bff63c1c00d79.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd90ebc3a7bff63c1c00d79.jpg 640w, https://images.leflair.vn/w1080/q85/5bd90ebc3a7bff63c1c00d79.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd90ebc3a7bff63c1c00d79.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="C'est La V Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    C'est La V Thời Trang Nữ
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
              href="/sales/uriage-my-pham-cham-soc-da-5bd0385822064a0001fa3395"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd80d4f77f2255c05d8d883.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd80d4f77f2255c05d8d883.jpg 640w, https://images.leflair.vn/w1080/q85/5bd80d4f77f2255c05d8d883.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd80d4f77f2255c05d8d883.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Uriage Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Uriage Mỹ Phẩm Chăm Sóc Da
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
              href="/sales/giam-den-69-burgi-dong-ho-nu-thoi-trang-5bc6a75b0ea5fe0001d7db3c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6ec562cd7970ba564b1e5.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6ec562cd7970ba564b1e5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ec562cd7970ba564b1e5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ec562cd7970ba564b1e5.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 69% - Burgi Đồng Hồ Nữ Thời Trang"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 69% - Burgi Đồng Hồ Nữ Thời Trang
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-gia-doc-quyen-tai-leflair-versace-and-salvatore-ferragamo-nuoc-hoa-nu-5bbce4f13138ba0001a1d23c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd681ec3bc933d99599b346.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd681ec3bc933d99599b346.jpg 640w, https://images.leflair.vn/w1080/q85/5bd681ec3bc933d99599b346.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd681ec3bc933d99599b346.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Giá Độc Quyền Tại 123order - Versace & Salvatore Ferragamo: Nước Hoa Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Giá Độc Quyền Tại 123order - Versace &amp; Salvatore Ferragamo: Nước Hoa Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-69-fitflop-giay-dep-thoi-trang-nam-and-nu-5bce9d399eaacb00014996f9"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6dc3faea2cb6a396b19f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6dc3faea2cb6a396b19f0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam & Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam &amp; Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-53-kinh-mat-nu-fendi-mcm-5bd0246522064a0001fa1f04"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c4e57cf047c6d8488d4a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c4e57cf047c6d8488d4a.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/cellini-giay-and-tui-xach-nam-nu-5bd2f749fe928beeb764ee10"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6ea232dd83a5ece168271.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6ea232dd83a5ece168271.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ea232dd83a5ece168271.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ea232dd83a5ece168271.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Cellini Giày & Túi Xách Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Cellini Giày &amp; Túi Xách Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/nots-my-pham-duong-da-toan-dien-5bd029a398ea5c000109ebd3"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd43f47c2d2e53d0817f943.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd43f47c2d2e53d0817f943.jpg 640w, https://images.leflair.vn/w1080/q85/5bd43f47c2d2e53d0817f943.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd43f47c2d2e53d0817f943.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="NoTS Mỹ Phẩm Dưỡng Da Toàn Diện"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    NoTS Mỹ Phẩm Dưỡng Da Toàn Diện
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-70-flonal-and-tramontina-noi-chao-dao-5bce8d397176290001132235"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd690da3bc933e02d99b6ba.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd690da3bc933e02d99b6ba.jpg 640w, https://images.leflair.vn/w1080/q85/5bd690da3bc933e02d99b6ba.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd690da3bc933e02d99b6ba.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 70% - Flonal & Tramontina: Nồi, Chảo, Dao"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 70% - Flonal &amp; Tramontina: Nồi, Chảo, Dao
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-54-gong-kinh-nam-and-nu-fendi-mcm-5bd0210122064a0001fa1eae"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7b8f8b16f63800440052b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7b8f8b16f63800440052b.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 54% - Gọng Kính Nam & Nữ: Fendi, Mcm"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 54% - Gọng Kính Nam &amp; Nữ: Fendi, Mcm
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-40-sharp-thiet-bi-gia-dung-nha-bep-5bd026ed22064a0001fa1f2a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <div className={`${styles['sale-card__current-sale-placeholder___293Z4']}`} />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 40% - Sharp Thiết Bị Gia Dụng Nhà Bếp
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/dung-cu-trang-diem-and-cham-soc-suc-khoe-rio-waterpulse-5bd019cf22064a0001fa1ddb"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <div className={`${styles['sale-card__current-sale-placeholder___293Z4']}`} />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Dụng Cụ Trang Điểm &amp; Chăm Sóc Sức Khỏe: Rio, Waterpulse
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/guess-trang-suc-nu-5bd028e522064a0001fa1fce"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <div className={`${styles['sale-card__current-sale-placeholder___293Z4']}`} />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Guess Trang Sức Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-ivv-do-dung-ban-an-tu-nuoc-y-5bd027a8b510720001868ea7"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6cf333d41615dffc1b2d1.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6cf333d41615dffc1b2d1.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6cf333d41615dffc1b2d1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6cf333d41615dffc1b2d1.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - IVV Đồ Dùng Bàn Ăn Từ Nước Ý"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - IVV Đồ Dùng Bàn Ăn Từ Nước Ý
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/speedo-do-boi-gia-dinh-5bcea6b1d56ec80001043c7c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png 640w, https://images.leflair.vn/w1080/q85/5bd6e3ff0d0a02e9d62600e7.png 1080w, https://images.leflair.vn/w1440/q85/5bd6e3ff0d0a02e9d62600e7.png 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Speedo Đồ Bơi Gia Đình"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Speedo Đồ Bơi Gia Đình
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/calvin-klein-tommy-hilfiger...-5bcea3fc9eaacb0001499843"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6aa9a7cf047c5b54889ab.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6aa9a7cf047c5b54889ab.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6aa9a7cf047c5b54889ab.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6aa9a7cf047c5b54889ab.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Calvin Klein, Tommy Hilfiger,..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Calvin Klein, Tommy Hilfiger,...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-skin-nation-my-pham-duong-da-5bd2ba98d7751c03fc8f8c87"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6dcfde50f80ef3fb11505.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6dcfde50f80ef3fb11505.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6dcfde50f80ef3fb11505.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6dcfde50f80ef3fb11505.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - Skin Nation Mỹ Phẩm Dưỡng Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - Skin Nation Mỹ Phẩm Dưỡng Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-54-vii-house-bo-drap-and-chan-5bd0285298ea5c000109eb21"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd6bd043bc933bfd499c1bf.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd6bd043bc933bfd499c1bf.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6bd043bc933bfd499c1bf.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6bd043bc933bfd499c1bf.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 54% - Vii House Bộ Drap & Chăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 54% - Vii House Bộ Drap &amp; Chăn
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-78-libbey-do-dung-ban-an-5bce910f9eaacb000149948a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4182950cfa99baee02495.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4182950cfa99baee02495.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4182950cfa99baee02495.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4182950cfa99baee02495.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 78% - Libbey Đồ Dùng Bàn Ăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 78% - Libbey Đồ Dùng Bàn Ăn
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/novelle-bo-drap-and-chan-phong-ngu-5bcff07bb510720001867df8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd307bbc07c398ce0f636db.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd307bbc07c398ce0f636db.jpg 640w, https://images.leflair.vn/w1080/q85/5bd307bbc07c398ce0f636db.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd307bbc07c398ce0f636db.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Novelle Bộ Drap & Chăn Phòng Ngủ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Novelle Bộ Drap &amp; Chăn Phòng Ngủ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/domani-giay-thoi-trang-nu-5bc6a6d49e3b150001afbc33"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3fa6c045f2c8115a6cd78.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3fa6c045f2c8115a6cd78.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3fa6c045f2c8115a6cd78.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3fa6c045f2c8115a6cd78.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Domani Giày Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Domani Giày Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/graziella-tui-bop-and-vi-thoi-trang-nu-5bcea1b2717629000113244a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3e455045f2cf707a6cd2c.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3e455045f2cf707a6cd2c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3e455045f2cf707a6cd2c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3e455045f2cf707a6cd2c.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Graziella Túi, Bóp & Ví Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Graziella Túi, Bóp &amp; Ví Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/celin-vat-pham-trang-tri-ma-vang-24k-5bcfe99f98ea5c000109da7a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd08cc622064a0001fa488c.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd08cc622064a0001fa488c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd08cc622064a0001fa488c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd08cc622064a0001fa488c.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Celin Vật Phẩm Trang Trí Mạ Vàng 24K"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Celin Vật Phẩm Trang Trí Mạ Vàng 24K
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/yves-rocher-my-pham-and-cham-soc-da-5bcff677b510720001868037"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd42766c2d2e5d77d17f914.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd42766c2d2e5d77d17f914.jpg 640w, https://images.leflair.vn/w1080/q85/5bd42766c2d2e5d77d17f914.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd42766c2d2e5d77d17f914.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Yves Rocher Mỹ Phẩm & Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Yves Rocher Mỹ Phẩm &amp; Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-graceful-trang-suc-phong-thuy-5bce904e9eaacb0001499482"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd428ebc2d2e5466617f919.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd428ebc2d2e5466617f919.jpg 640w, https://images.leflair.vn/w1080/q85/5bd428ebc2d2e5466617f919.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd428ebc2d2e5466617f919.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - Graceful Trang Sức Phong Thủy"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - Graceful Trang Sức Phong Thủy
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/hector-andlab-angellook...-5bcfec1eb510720001867b69"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg 640w, https://images.leflair.vn/w1080/q85/5bd40f2f0f102237deb9ecc8.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd40f2f0f102237deb9ecc8.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Hector, andLAB, Angellook..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Hector, andLAB, Angellook...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/sukin-cham-soc-toan-than-cho-ca-gia-dinh-5bcff5b898ea5c000109de23"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd406e8045f2c1312a6cdc5.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd406e8045f2c1312a6cdc5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd406e8045f2c1312a6cdc5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd406e8045f2c1312a6cdc5.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Sukin Chăm Sóc Toàn Thân Cho Cả Gia Đình"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Sukin Chăm Sóc Toàn Thân Cho Cả Gia Đình
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/thoi-trang-cho-ca-gia-dinh-mimi-nature-colored-5bc439c8eb54ae000183864b"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd435a9bfaa18df05e62d16.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd435a9bfaa18df05e62d16.jpg 640w, https://images.leflair.vn/w1080/q85/5bd435a9bfaa18df05e62d16.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd435a9bfaa18df05e62d16.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Thời Trang Cho Cả Gia Đình: Mimi, Nature Colored"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Thời Trang Cho Cả Gia Đình: Mimi, Nature Colored
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>5 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-60-stormtech-thoi-trang-and-tui-xach-nam-nu-5bc959454f3acf000198344c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4126c045f2cec96a6cdfa.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4126c045f2cec96a6cdfa.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4126c045f2cec96a6cdfa.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4126c045f2cec96a6cdfa.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 60% - Stormtech Thời Trang & Túi Xách Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 60% - Stormtech Thời Trang &amp; Túi Xách Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-giam-den-44-cole-and-mason-do-dung-nha-bep-5bcffbeb98ea5c000109de6f"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4293d50cfa90e3ae024a2.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4293d50cfa90e3ae024a2.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4293d50cfa90e3ae024a2.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4293d50cfa90e3ae024a2.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - Giảm Đến 44% - Cole & Mason Đồ Dùng Nhà Bếp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - Giảm Đến 44% - Cole &amp; Mason Đồ Dùng Nhà Bếp
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/elo-fivestar-ilo-5bcfea2198ea5c000109dad1"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3db63045f2cf9b2a6cd19.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3db63045f2cf9b2a6cd19.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3db63045f2cf9b2a6cd19.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3db63045f2cf9b2a6cd19.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Elo, Fivestar, Ilo"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Elo, Fivestar, Ilo
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/the-dancing-jewels-thoi-trang-nu-5bcda2e3a9afb70001033dfa"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__international-tile___3A645']}`}>
                  Hàng nhập khẩu
                </div>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd427e350cfa9f5a3e024a0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd427e350cfa9f5a3e024a0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd427e350cfa9f5a3e024a0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd427e350cfa9f5a3e024a0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="The Dancing Jewels Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    The Dancing Jewels Thời Trang Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-60-aldo-vi-and-phu-kien-thoi-trang-tu-canada-5bd0207298ea5c000109e9cd"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__international-tile___3A645']}`}>
                  Hàng nhập khẩu
                </div>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd437c4bfaa18b98be62d1f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd437c4bfaa18b98be62d1f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd437c4bfaa18b98be62d1f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd437c4bfaa18b98be62d1f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 60% - Aldo Ví & Phụ Kiện Thời Trang Từ Canada"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 60% - Aldo Ví &amp; Phụ Kiện Thời Trang Từ Canada
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/ferroli-cuchen-tiger-queen...-5bcfebea22064a0001fa0c21"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd310ce3ff63137171caf2f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd310ce3ff63137171caf2f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd310ce3ff63137171caf2f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd310ce3ff63137171caf2f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Ferroli, Cuchen, Tiger Queen..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Ferroli, Cuchen, Tiger Queen...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/graziella-trang-suc-nu-5bcfeabe98ea5c000109db06"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3ef4050cfa93d84e02443.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3ef4050cfa93d84e02443.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3ef4050cfa93d84e02443.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3ef4050cfa93d84e02443.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Graziella Trang Sức Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Graziella Trang Sức Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-55-calvin-klein-kinh-mat-nam-nu-5bcfe87fb510720001867ad6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4186f50cfa99a91e02497.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4186f50cfa99a91e02497.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-54-calvin-klein-gong-kinh-thoi-trang-5bcfe7a40d477e00014fb06a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4230ac2d2e54ba617f90d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4230ac2d2e54ba617f90d.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/glamful-my-pham-trang-diem-5bc9be4d3857b7000180ddac"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd402250f10228237b9ec7c.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd402250f10228237b9ec7c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd402250f10228237b9ec7c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd402250f10228237b9ec7c.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Glamful Mỹ Phẩm Trang Điểm"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Glamful Mỹ Phẩm Trang Điểm
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-70-august-society-do-boi-nu-5bc9afd62696560001240f26"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__international-tile___3A645']}`}>
                  Hàng nhập khẩu
                </div>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd4371fc2d2e5285617f932.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd4371fc2d2e5285617f932.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4371fc2d2e5285617f932.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4371fc2d2e5285617f932.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 70% - August Society Đồ Bơi Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 70% - August Society Đồ Bơi Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/venice-dong-ho-nam-and-nu-5bc5a7fdfa074e00010edce8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3ed0250cfa9c23ee02431.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3ed0250cfa9c23ee02431.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Venice Đồng Hồ Nam & Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Venice Đồng Hồ Nam &amp; Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/dieuanh-thoi-trang-nu-5bc5a7a40ea5fe0001d7d193"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3f0de045f2cf622a6cd6f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3f0de045f2cf622a6cd6f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3f0de045f2cf622a6cd6f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3f0de045f2cf622a6cd6f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="dieuAnh Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    dieuAnh Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>4 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-71-lily-jewelry-trang-suc-nu-5bcfee8f98ea5c000109dd82"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2cef3c3be2733afd5bfe9.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2cef3c3be2733afd5bfe9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2cef3c3be2733afd5bfe9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2cef3c3be2733afd5bfe9.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 71% - Lily Jewelry Trang Sức Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 71% - Lily Jewelry Trang Sức Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-giam-den-49-wusthof-bo-dao-keo-5bcef72e418eb80001ec2154"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd42873bfaa18854fe62cfc.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd42873bfaa18854fe62cfc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd42873bfaa18854fe62cfc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd42873bfaa18854fe62cfc.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - Giảm Đến 49% Wüsthof Bộ Dao, Kéo"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - Giảm Đến 49% Wüsthof Bộ Dao, Kéo
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/sum37degree-my-pham-and-cham-soc-da-5bcef6e8f3b4e50001b91083"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd30ec5c07c397452f636f5.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd30ec5c07c397452f636f5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30ec5c07c397452f636f5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30ec5c07c397452f636f5.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Su:m37° Mỹ Phẩm & Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Su:m37° Mỹ Phẩm &amp; Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/quay-australia-kinh-mat-nam-and-nu-tu-uc-5bcef68022064a0001fa0407"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3e34a045f2c76c0a6cd27.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3e34a045f2c76c0a6cd27.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Quay Australia Kính Mát Nam & Nữ Từ Úc"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Quay Australia Kính Mát Nam &amp; Nữ Từ Úc
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/nike-el-camino-dsquared...-5bcef386418eb80001ec211d"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30809c07c397d4cf636de.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30809c07c397d4cf636de.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Nike, El Camino, Dsquared²..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Nike, El Camino, Dsquared²...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-53-lily-jewelry-cai-ao-5bcef2cd22064a0001fa0397"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2f5fffe928b61fb64ee03.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2f5fffe928b61fb64ee03.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f5fffe928b61fb64ee03.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f5fffe928b61fb64ee03.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 53% - Lily Jewelry Cài Áo"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 53% - Lily Jewelry Cài Áo
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/levisr-reebok-kinh-mat-nam-and-nu-5bceef9f22064a0001fa02ba"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e6aca46c6d1f05596048.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e6aca46c6d1f05596048.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Levi's®, Reebok: Kính Mát Nam & Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Levi's®, Reebok: Kính Mát Nam &amp; Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/korihomer-sakura-kiwa-5bcee9f422064a0001fa0239"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd304103ff63162be1caf2c.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd304103ff63162be1caf2c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd304103ff63162be1caf2c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd304103ff63162be1caf2c.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Korihome®, Sakura, Kiwa"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Korihome®, Sakura, Kiwa
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-48-king-koil-nem-and-khung-giuong-cao-cap-5bcee84122064a0001fa0227"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2f4a9090b0440af3f7c85.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2f4a9090b0440af3f7c85.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f4a9090b0440af3f7c85.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f4a9090b0440af3f7c85.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 48% - King Koil Nệm & Khung Giường Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 48% - King Koil Nệm &amp; Khung Giường Cao Cấp
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/kelly-son-moi-and-nuoc-hoa-cao-cap-5bcee73c22064a0001fa0224"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2c141dc461759a5dccc16.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2c141dc461759a5dccc16.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c141dc461759a5dccc16.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c141dc461759a5dccc16.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Kelly Son Môi & Nước Hoa Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Kelly Son Môi &amp; Nước Hoa Cao Cấp
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-56-haewon-style-bo-drap-and-chan-5bcee6d6f3b4e50001b90e04"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2db2ac3be2762efd5c403.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2db2ac3be2762efd5c403.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2db2ac3be2762efd5c403.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2db2ac3be2762efd5c403.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 56% - Haewon Style Bộ Drap & Chăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 56% - Haewon Style Bộ Drap &amp; Chăn
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/alivy-thoi-trang-nu-5bcea10b9eaacb0001499736"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd30535c07c394646f636d7.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd30535c07c394646f636d7.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30535c07c394646f636d7.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30535c07c394646f636d7.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Alivy Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Alivy Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/else.instyle-thoi-trang-nu-5bce9ba39eaacb00014996cc"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd18b38021e58000172c458.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd18b38021e58000172c458.jpg 640w, https://images.leflair.vn/w1080/q85/5bd18b38021e58000172c458.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd18b38021e58000172c458.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Else.Instyle Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Else.Instyle Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-57-pauls-boutique-tui-thoi-trang-nu-5bc8390b7904c2000167f2ca"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2feec99034006b2f181f4.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2feec99034006b2f181f4.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2feec99034006b2f181f4.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2feec99034006b2f181f4.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 57% - Paul's Boutique Túi Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 57% - Paul's Boutique Túi Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/doma-vali-du-lich-5bc5a746fa074e00010edcb7"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c930cc9f046106233236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c930cc9f046106233236.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Doma Vali Du Lịch"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Doma Vali Du Lịch
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-60-atlantic-dong-ho-nam-nu-5bc5a6e4fa074e00010edcb6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e369c3be27602ed5c816.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e369c3be27602ed5c816.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/holster-australiar-giay-thoi-trang-nu-5bc45b645aa76b000168877f"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd04020b51072000186990b.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd04020b51072000186990b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd04020b51072000186990b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd04020b51072000186990b.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Holster Australia® Giày Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Holster Australia® Giày Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/seesee-and-huxley-cham-soc-da-cao-cap-5bbed967607a400001c6e080"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2f576fe928bc05664ed99.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2f576fe928bc05664ed99.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f576fe928bc05664ed99.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f576fe928bc05664ed99.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Seesee & Huxley: Chăm Sóc Da Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Seesee &amp; Huxley: Chăm Sóc Da Cao Cấp
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/cham-soc-da-and-toc-jacklon-broo-5bbcdfde2efe400001ca1c29"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1813657a8ba0001f7f618.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1813657a8ba0001f7f618.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1813657a8ba0001f7f618.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1813657a8ba0001f7f618.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Chăm Sóc Da & Tóc: Jacklon, Broo"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Chăm Sóc Da &amp; Tóc: Jacklon, Broo
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/organique-my-pham-cham-soc-da-5bb1c3bf568eb70001328dde"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bc976c98bfb3000019ee916.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bc976c98bfb3000019ee916.jpg 640w, https://images.leflair.vn/w1080/q85/5bc976c98bfb3000019ee916.jpg 1080w, https://images.leflair.vn/w1440/q85/5bc976c98bfb3000019ee916.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Organique Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Organique Mỹ Phẩm Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>3 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-64-mande-thoi-trang-nu-5bc71f86af243f00013020e6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2c3e6dc46179e78dccdf3.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2c3e6dc46179e78dccdf3.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c3e6dc46179e78dccdf3.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c3e6dc46179e78dccdf3.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 64% - Mande Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 64% - Mande Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/o-hui-my-pham-and-cham-soc-da-5bcf001ff3b545000135b778"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2becfdc461733cadccbed.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2becfdc461733cadccbed.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2becfdc461733cadccbed.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2becfdc461733cadccbed.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="O Hui Mỹ Phẩm & Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    O Hui Mỹ Phẩm &amp; Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-53-venuco-madrid-balo-tui-mini-5bc5a148fa074e00010edbf9"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2b0feb57df39b943c591d.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2b0feb57df39b943c591d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2b0feb57df39b943c591d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2b0feb57df39b943c591d.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 53% - Venuco Madrid Balo, Túi Mini"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 53% - Venuco Madrid Balo, Túi Mini
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-74-venuco-madrid-vi-and-phu-kien-nu-5bc598ecfc45c60001d597ea"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2989fb57df38d933c57c9.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2989fb57df38d933c57c9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2989fb57df38d933c57c9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2989fb57df38d933c57c9.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 74% - Venuco Madrid Ví & Phụ Kiện Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 74% - Venuco Madrid Ví &amp; Phụ Kiện Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/meditime-neo-my-pham-cham-soc-da-5bce97cb7176290001132352"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1a381810fe400019a913e.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1a381810fe400019a913e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1a381810fe400019a913e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1a381810fe400019a913e.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Meditime - Neo Mỹ Phẩm Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Meditime - Neo Mỹ Phẩm Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/toto-tulip-fountain-5bcea90271762900011325fd"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2b8ffba14fa35dbf2d223.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2b8ffba14fa35dbf2d223.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2b8ffba14fa35dbf2d223.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2b8ffba14fa35dbf2d223.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Toto, Tulip, Fountain"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Toto, Tulip, Fountain
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/scentuals-cham-soc-da-and-co-the-5bcea8a671762900011325c3"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd0b78b22064a0001fa488f.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd0b78b22064a0001fa488f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd0b78b22064a0001fa488f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd0b78b22064a0001fa488f.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Scentuals Chăm Sóc Da & Cơ Thể"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Scentuals Chăm Sóc Da &amp; Cơ Thể
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/borgonovi-airlite-gip...-5bce9d049eaacb00014996f5"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2ebc4df505cfd0f55797a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2ebc4df505cfd0f55797a.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Borgonovi, Airlite, Gip..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Borgonovi, Airlite, Gip...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/polaroid-sunday-woodzee...-5bce9ac1717629000113237a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1b36b021e58000172d138.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1b36b021e58000172d138.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Polaroid, Sunday, Woodzee..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Polaroid, Sunday, Woodzee...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-60-geparlys-paris-elysees-nuoc-hoa-nu-and-nam-5bce970fd56ec80001043a56"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2a1b07a96e6a26d539411.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2a1b07a96e6a26d539411.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ & Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ &amp; Nam
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/vichy-cham-soc-da-5bce96127176290001132345"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2cd51fe1916ebaad4d8ad.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2cd51fe1916ebaad4d8ad.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2cd51fe1916ebaad4d8ad.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2cd51fe1916ebaad4d8ad.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Vichy Chăm Sóc Da"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Vichy Chăm Sóc Da
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/likini-do-boi-nu-5bcdb21e9eaacb000149921a"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2e82bf8a1c6dba5ee6454.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2e82bf8a1c6dba5ee6454.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e82bf8a1c6dba5ee6454.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e82bf8a1c6dba5ee6454.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Likini Đồ Bơi Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Likini Đồ Bơi Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-87-venuco-madrid-tui-thoi-trang-5bc46645290cb30001e985ff"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 87% - Venuco Madrid Túi Thời Trang"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 87% - Venuco Madrid Túi Thời Trang
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-54-fastrack-dong-ho-nam-nu-5bc465dc290cb30001e985e0"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg 640w, https://images.leflair.vn/w1080/q85/5bd191ce021e58000172c8be.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd191ce021e58000172c8be.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/storm-dong-ho-nam-and-nu-5bc4659d290cb30001e985bf"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd183c7021e58000172c3d0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd183c7021e58000172c3d0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Storm Đồng Hồ Nam & Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Storm Đồng Hồ Nam &amp; Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-54-royal-walk-and-scala-giay-dep-thoi-trang-nu-5bc465384de7540001268a91"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd19a8857a8ba0001f80116.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd19a8857a8ba0001f80116.jpg 640w, https://images.leflair.vn/w1080/q85/5bd19a8857a8ba0001f80116.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd19a8857a8ba0001f80116.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 54% - Royal Walk & Scala: Giày, Dép Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 54% - Royal Walk &amp; Scala: Giày, Dép Thời Trang Nữ
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/goldsun-prosun-disney-eyewear...-5bce9a6c7176290001132379"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd168b6b24be90001159b1b.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd168b6b24be90001159b1b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd168b6b24be90001159b1b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd168b6b24be90001159b1b.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Goldsun, Prosun, Disney Eyewear..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Goldsun, Prosun, Disney Eyewear...
                  </div>
                  <div className={`${styles['sale-card__endTimeWrap___3q0l3']}`}>
                    <span className={`${styles['sale-card__endTimeContent___3z5se']}`}>
                      <i
                        className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`}
                      />{' '}
                      <span className={`${styles['end-time__text___1A-sx']}`}>Còn </span>
                      <span className={`${styles['end-time__timer___LMsIT']}`}>2 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-50-lock-and-lock-dien-gia-dung-and-nha-bep-5bcf0a3af3b545000135b7c6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd17e4057a8ba0001f7f5db.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd17e4057a8ba0001f7f5db.jpg 640w, https://images.leflair.vn/w1080/q85/5bd17e4057a8ba0001f7f5db.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd17e4057a8ba0001f7f5db.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 50% - Lock & Lock Điện Gia Dụng & Nhà Bếp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 50% - Lock &amp; Lock Điện Gia Dụng &amp; Nhà Bếp
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-49-azp-noi-that-nha-o-and-van-phong-5bce915471762900011322d7"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1a724810fe400019a9306.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1a724810fe400019a9306.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1a724810fe400019a9306.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1a724810fe400019a9306.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 49% - AZP Nội Thất Nhà Ở & Văn Phòng"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 49% - AZP Nội Thất Nhà Ở &amp; Văn Phòng
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-72-adidas-thoi-trang-nu-5bcd88209eaacb0001498847"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd15fe257a8ba0001f7f451.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd15fe257a8ba0001f7f451.jpg 640w, https://images.leflair.vn/w1080/q85/5bd15fe257a8ba0001f7f451.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd15fe257a8ba0001f7f451.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 72% - Adidas Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 72% - Adidas Thời Trang Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/adidas-giay-the-thao-nu-5bcd88e9d56ec80001042fc6"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd0430622064a0001fa3aed.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd0430622064a0001fa3aed.jpg 640w, https://images.leflair.vn/w1080/q85/5bd0430622064a0001fa3aed.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd0430622064a0001fa3aed.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Adidas Giày Thể Thao Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Adidas Giày Thể Thao Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/adidas-and-adidas-original-giay-the-thao-nam-5bcd822cd56ec80001042d85"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd04c9fb510720001869c93.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd04c9fb510720001869c93.jpg 640w, https://images.leflair.vn/w1080/q85/5bd04c9fb510720001869c93.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd04c9fb510720001869c93.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Adidas & Adidas Original: Giày Thể Thao Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Adidas &amp; Adidas Original: Giày Thể Thao Nam
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/whoo-cham-soc-da-cao-cap-5bce924ed56ec800010439f3"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1847cb24be90001159c99.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1847cb24be90001159c99.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1847cb24be90001159c99.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1847cb24be90001159c99.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Whoo Chăm Sóc Da Cao Cấp"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Whoo Chăm Sóc Da Cao Cấp
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/adidas-thoi-trang-nam-5bcd7db99eaacb0001498563"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd14798021e58000172b9de.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd14798021e58000172b9de.jpg 640w, https://images.leflair.vn/w1080/q85/5bd14798021e58000172b9de.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd14798021e58000172b9de.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Adidas Thời Trang Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Adidas Thời Trang Nam
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lan-dau-tai-leflair-giam-den-63-uber-do-dung-quay-bar-5bce91ead56ec800010439ee"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd17a72b24be90001159c32.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd17a72b24be90001159c32.jpg 640w, https://images.leflair.vn/w1080/q85/5bd17a72b24be90001159c32.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd17a72b24be90001159c32.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lần Đầu Tại 123order - Giảm Đến 63% Über Đồ Dùng Quầy Bar"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lần Đầu Tại 123order - Giảm Đến 63% Über Đồ Dùng Quầy Bar
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/tigo-dr.oz-happy-smile...-5bce8e08d56ec800010438f8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd143f1021e58000172b901.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd143f1021e58000172b901.jpg 640w, https://images.leflair.vn/w1080/q85/5bd143f1021e58000172b901.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd143f1021e58000172b901.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Tigo, Dr.Oz, Happy Smile..."
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Tigo, Dr.Oz, Happy Smile...
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-50-desigual-thoi-trang-nu-5bc95a378baa5d0001a327f5"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bcdb56aa9afb70001033fe4.png"
                    srcSet="https://images.leflair.vn/w640/q85/5bcdb56aa9afb70001033fe4.png 640w, https://images.leflair.vn/w1080/q85/5bcdb56aa9afb70001033fe4.png 1080w, https://images.leflair.vn/w1440/q85/5bcdb56aa9afb70001033fe4.png 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 50% - Desigual Thời Trang Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 50% - Desigual Thời Trang Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-58-florent-bo-drap-and-chan-5bc71c6a2638e90001bc2053"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1643d021e58000172bdbd.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1643d021e58000172bdbd.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1643d021e58000172bdbd.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1643d021e58000172bdbd.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 58% - Florent Bộ Drap & Chăn"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 58% - Florent Bộ Drap &amp; Chăn
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/solo-agva-tui-and-balo-5bc45baeeb54ae0001838a3e"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1b52d021e58000172d13a.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1b52d021e58000172d13a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1b52d021e58000172d13a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1b52d021e58000172d13a.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Solo, AGVA: Túi & Balo"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Solo, AGVA: Túi &amp; Balo
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-55-diesel-and-adidas-dong-ho-nam-nu-5bd1462d57a8ba0001f7f250"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1637357a8ba0001f7f45e.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1637357a8ba0001f7f45e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1637357a8ba0001f7f45e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1637357a8ba0001f7f45e.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 55% - Diesel & Adidas: Đồng Hồ Nam, Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 55% - Diesel &amp; Adidas: Đồng Hồ Nam, Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/lynns-trang-suc-ngoc-trai-5bcef9c9f3b545000135b6e9"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1aa78b24be9000115a0d1.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1aa78b24be9000115a0d1.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1aa78b24be9000115a0d1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1aa78b24be9000115a0d1.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Lynn's Trang Sức Ngọc Trai"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Lynn's Trang Sức Ngọc Trai
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/bolon-gong-kinh-mat-nam-and-nu-5bce8cdf717629000113222c"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd14804021e58000172b9ec.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd14804021e58000172b9ec.jpg 640w, https://images.leflair.vn/w1080/q85/5bd14804021e58000172b9ec.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd14804021e58000172b9ec.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Bolon Gọng, Kính Mát Nam & Nữ"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Bolon Gọng, Kính Mát Nam &amp; Nữ
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/annayake-my-pham-trang-diem-5bc71bfcaf243f00013020c8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd16283b24be90001159ad6.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd16283b24be90001159ad6.jpg 640w, https://images.leflair.vn/w1080/q85/5bd16283b24be90001159ad6.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd16283b24be90001159ad6.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Annayake Mỹ Phẩm Trang Điểm"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Annayake Mỹ Phẩm Trang Điểm
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/dugena-dong-ho-nu-and-nam-5bc45cb74b7efb00010d70d8"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bcdbe679eaacb0001499296.png"
                    srcSet="https://images.leflair.vn/w640/q85/5bcdbe679eaacb0001499296.png 640w, https://images.leflair.vn/w1080/q85/5bcdbe679eaacb0001499296.png 1080w, https://images.leflair.vn/w1440/q85/5bcdbe679eaacb0001499296.png 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Dugena Đồng Hồ Nữ & Nam"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Dugena Đồng Hồ Nữ &amp; Nam
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
              className={`${styles['home__col-md-6___2zJjj']} ${
                styles['home__paddingRemove___3EmRr']
              }`}
              href="/sales/giam-den-30-hitachi-noi-com-may-hut-bui-may-loc-khong-khi-5bce90c6d56ec8000104394d"
            >
              <div className={`${styles['sale-card__currentSale___cC1H3']}`}>
                <div className={`${styles['sale-card__image-wrapper___EfOla']}`}>
                  <img
                    className={`${styles['sale-card__currentSaleImg___3wFRM']}`}
                    src="https://images.leflair.vn/w640/q85/5bd1487f021e58000172b9f0.jpg"
                    srcSet="https://images.leflair.vn/w640/q85/5bd1487f021e58000172b9f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1487f021e58000172b9f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1487f021e58000172b9f0.jpg 1440w"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw"
                    alt="Giảm Đến 30% - Hitachi: Nồi Cơm, Máy Hút Bụi, Máy Lọc Không Khí"
                  />
                </div>
                <div className={`${styles['sale-card__currentSaleInfo___2LkMa']}`}>
                  <div className={`${styles['sale-card__currentSaleTitle___1eVtM']}`}>
                    Giảm Đến 30% - Hitachi: Nồi Cơm, Máy Hút Bụi, Máy Lọc Không Khí
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
          <div
            className={`${styles['section-title__title-wrap___9DwpB']} ${
              styles['home__upSaleSectionTitle___1p5ig']
            }`}
          >
            <h2 className={`${styles['section-title__title___2Dw2G']}`}>Sắp diễn ra</h2>
          </div>
          <div>
            <div className={`${styles['upcoming-sales__date-selector-container___1xELh']}`}>
              <a href="#" className={`${styles['upcoming-sales__active-selector___2PHnW']}`}>
                02/11
              </a>
              <a href="#" className={`${styles['upcoming-sales__date-selector___3km0s']}`}>
                03/11
              </a>
              <a href="#" className={`${styles['upcoming-sales__date-selector___3km0s']}`}>
                04/11
              </a>
              <div className={`${styles['upcoming-sales__section-separator___2aN2h']}`}> </div>
            </div>
            <div className={`${styles['upcoming-sales__up-sales-section-container___2WPXQ']}`}>
              <div className={`${styles['upcoming-sales__active-panel___2-QmD']}`}>
                <div className={`${styles['row__row___2roCA']}`}>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-37-panasonic-dien-gia-dung-nha-bep-5bce9d967176290001132427"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bdaad5f02c08ed4f971bd2f.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bdaad5f02c08ed4f971bd2f.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bdaad5f02c08ed4f971bd2f.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bdaad5f02c08ed4f971bd2f.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/panasonic-ban-ui-and-may-hut-bui-5bce9dde717629000113242a"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd93ad7f95af2440818c249.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd93ad7f95af2440818c249.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd93ad7f95af2440818c249.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd93ad7f95af2440818c249.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Panasonic Bàn Ủi & Máy Hút Bụi"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Panasonic Bàn Ủi &amp; Máy Hút Bụi
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/efora-gino-rossi-pons...-5bcea2bad56ec80001043c3c"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bda70cd02c08e80bf71bad6.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bda70cd02c08e80bf71bad6.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bda70cd02c08e80bf71bad6.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bda70cd02c08e80bf71bad6.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Efora, Gino Rossi, Pons,..."
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Efora, Gino Rossi, Pons,...
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-61-viviane-do-boi-the-thao-5bd290557a96e6f85f53926e"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bda7a6ca72e8d1184cec0bc.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bda7a6ca72e8d1184cec0bc.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bda7a6ca72e8d1184cec0bc.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bda7a6ca72e8d1184cec0bc.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 61% - Viviane Đồ Bơi Thể Thao"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 61% - Viviane Đồ Bơi Thể Thao
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/my-pham-duong-da-botani-essentiq-konjac...-5bd2c3ec3461fc22ee2e75d6"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bdab096b4993295ea2b35d6.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bdab096b4993295ea2b35d6.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bdab096b4993295ea2b35d6.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bdab096b4993295ea2b35d6.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Mỹ Phẩm Dưỡng Da: Botáni, Essentiq, Konjac,..."
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Mỹ Phẩm Dưỡng Da: Botáni, Essentiq, Konjac,...
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/blinc-my-pham-trang-diem-5bd2c6cacc9f043f7223320c"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd8329eefbad42283382131.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd8329eefbad42283382131.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd8329eefbad42283382131.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd8329eefbad42283382131.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Blinc Mỹ Phẩm Trang Điểm"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Blinc Mỹ Phẩm Trang Điểm
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-66-viviane-trang-phuc-lot-nu-5bd6983a73d2835a4fe0b681"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bda6843a72e8d35b2cebf2a.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bda6843a72e8d35b2cebf2a.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bda6843a72e8d35b2cebf2a.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bda6843a72e8d35b2cebf2a.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 66% - Viviane Trang Phục Lót Nữ"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 66% - Viviane Trang Phục Lót Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-51-people-giay-tre-em-5bd6b68f73d283b302e0baa9"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd920ec2054d40136f3d3e1.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd920ec2054d40136f3d3e1.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd920ec2054d40136f3d3e1.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd920ec2054d40136f3d3e1.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 51% - People Giày Trẻ Em"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 51% - People Giày Trẻ Em
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-65-people-giay-sneaker-nam-and-nu-5bd6b70473d28376e4e0baf3"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd92397f95af2b30a18be18.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd92397f95af2b30a18be18.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd92397f95af2b30a18be18.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd92397f95af2b30a18be18.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 65% - People Giày Sneaker Nam & Nữ"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 65% - People Giày Sneaker Nam &amp; Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/venica-tui-xach-thoi-trang-nu-5bd6b77c73d2832f7fe0baf6"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bda6cbe930734a753761d2a.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bda6cbe930734a753761d2a.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bda6cbe930734a753761d2a.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bda6cbe930734a753761d2a.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Venica Túi Xách Thời Trang Nữ"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Venica Túi Xách Thời Trang Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-59-titan-dong-ho-nam-and-nu-5bd6b7d673d283403ee0baf7"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd849d8ec2d44c04201a9e3.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd849d8ec2d44c04201a9e3.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd849d8ec2d44c04201a9e3.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd849d8ec2d44c04201a9e3.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 59% - Titan Đồng Hồ Nam & Nữ"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 59% - Titan Đồng Hồ Nam &amp; Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/j-natural-stonesr-trang-suc-phong-thuy-5bd6c4d93bc9335db599c3b6"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bda9a0c02c08e6ba971bbbc.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bda9a0c02c08e6ba971bbbc.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bda9a0c02c08e6ba971bbbc.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bda9a0c02c08e6ba971bbbc.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="J Natural Stones® Trang Sức Phong Thủy"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          J Natural Stones® Trang Sức Phong Thủy
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/kinh-mat-thoi-trang-nam-and-nu-celine-dion-mercedes-benz-5bd6ca9d68c1b82f43be4dec"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bdabe30a72e8dbd0fcec511.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bdabe30a72e8dbd0fcec511.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bdabe30a72e8dbd0fcec511.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bdabe30a72e8dbd0fcec511.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Kính Mát Thời Trang Nam & Nữ: Celine Dion, Mercedes Benz"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Kính Mát Thời Trang Nam &amp; Nữ: Celine Dion, Mercedes Benz
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-68-adia-skincare-tinh-chat-tre-hoa-da-ngoc-trai-den-5bd6cb4a91ec7c7c7a4a0543"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd80e6ab8cecbe5df9d9124.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd80e6ab8cecbe5df9d9124.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd80e6ab8cecbe5df9d9124.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd80e6ab8cecbe5df9d9124.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Giảm Đến 68% - Adia Skincare Tinh Chất Trẻ Hóa Da Ngọc Trai Đen"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 68% - Adia Skincare Tinh Chất Trẻ Hóa Da Ngọc Trai Đen
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/philips-noi-chien-khong-dau-5bd6cc1eaea2cba3f36b139a"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd81741d297d1c3d3389758.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd81741d297d1c3d3389758.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd81741d297d1c3d3389758.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd81741d297d1c3d3389758.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Philips Nồi Chiên Không Dầu"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Philips Nồi Chiên Không Dầu
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/sexy-look-mat-na-cham-soc-da-5bd6d85caea2cb65c76b19c7"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd91a43aea6e1081a94b2c1.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd91a43aea6e1081a94b2c1.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd91a43aea6e1081a94b2c1.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd91a43aea6e1081a94b2c1.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Sexy Look Mặt Nạ Chăm Sóc Da"
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Sexy Look Mặt Nạ Chăm Sóc Da
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/thuc-pham-chuc-nang-nanas-wonderland-windmill-nutritionworks...-5bd98f1f6ada6d0bdd52fc2f"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <img
                          src="https://images.leflair.vn/w300/q85/sq/5bd9e16860622454d01c19b6.jpg"
                          srcSet="https://images.leflair.vn/w300/q85/sq/5bd9e16860622454d01c19b6.jpg 300w, https://images.leflair.vn/w580/q85/sq/5bd9e16860622454d01c19b6.jpg 580w, https://images.leflair.vn/w850/q85/sq/5bd9e16860622454d01c19b6.jpg 850w"
                          sizes="(max-width: 575px) calc(50vw - 18px), (max-width: 767px) 166px, (max-width: 991px) 156px, (max-width: 1200px) 216px, 261px"
                          alt="Thực Phẩm Chức Năng: Nana's Wonderland, Windmill, NutritionWorks..."
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Thực Phẩm Chức Năng: Nana's Wonderland, Windmill, NutritionWorks...
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`${styles['upcoming-sales__panel___1LhPj']}`}>
                <div className={`${styles['row__row___2roCA']}`}>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-55-flossy-giay-luoi-cho-ca-gia-dinh-5bd6b8a573d2833d08e0bb30"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 55% - Flossy Giày Lười Cho Cả Gia Đình
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-58-suofeia-and-stance-gong-kinh-nam-nu-5bd6cf4c3d4161c800c1b2d6"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 58% - Suofeia &amp; Stance: Gọng Kính Nam, Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/kinh-mat-nam-and-nu-suofeia-stance-pk-5bd6d1629c8e722192526f78"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Kính Mát Nam &amp; Nữ: Suofeia, Stance, PK
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/tiger-noi-u-and-noi-com-dien-5bd6d2a29c8e72fae5526fbe"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Tiger Nồi Ủ &amp; Nồi Cơm Điện
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/tiger-binh-thuy-and-binh-luong-tinh-5bd6d2e99c8e723c6f527022"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Tiger Bình Thủy &amp; Bình Lưỡng Tính
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/vietmat-drap-and-tam-lot-chong-tham-5bd6dc7fe50f80252cb11503"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Vietmat Drap &amp; Tấm Lót Chống Thấm
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-60-lotus-bo-chan-and-drap-boc-5bd7cf7f77f2254353d8c2ff"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 60% - Lotus Bộ Chăn &amp; Drap Bọc
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/raywell-my-pham-cham-soc-toc-5bd95669f95af2539c18c6d8"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Raywell Mỹ Phẩm Chăm Sóc Tóc
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`${styles['upcoming-sales__panel___1LhPj']}`}>
                <div className={`${styles['row__row___2roCA']}`}>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-72-clae-giay-thoi-trang-nam-5bd6c4e63bc933add399c3b8"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 72% - Clae Giày Thời Trang Nam
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/giam-den-57-kinh-mat-nam-and-nu-nys-bandolini-5bd7cbc0d297d18ec7388720"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Giảm Đến 57% - Kính Mát Nam &amp; Nữ: Nys, Bandolini
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/parker-phillip-gong-kinh-nam-and-nu-5bd7d4f077f2250a9ad8c34a"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Parker Phillip Gọng Kính Nam &amp; Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/yeno-trang-suc-nu-5bd7d58c77f22543ead8c3bd"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Yeno Trang Sức Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`${styles['grid__col-md-3___2fJjt']} ${
                      styles['grid__col-sm-4___oKyg5 grid__col-6___211BX']
                    } ${styles['upcoming-sales__up-sale-wrap___2OW5o']}`}
                  >
                    <a
                      className={`${styles['upcoming-sales__up-sale-tile-container___3V_T1']}`}
                      href="/sales/upcoming/keds-giay-thoi-trang-nam-and-nu-5bd925daf95af2560918be44"
                    >
                      <div className={`${styles['upcoming-sales__image-container___ztyCI']}`}>
                        <div
                          className={`${
                            styles['upcoming-sales__upcoming-sale-placeholder___2hD3t']
                          }`}
                        />
                      </div>
                      <div className={`${styles['upcoming-sales__title-container___1NGK9']}`}>
                        <h4 className={`${styles['upcoming-sales__title___gN0ZO']}`}>
                          Keds Giày Thời Trang Nam &amp; Nữ
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['footer-seo-text__footer-seo-container___XXk1b']}`}>
            <div
              className={`${styles['footer-seo-text__footer-seo-wrap___2WjKX']} ${
                styles['footer-seo-text__show-less___1vCp4']
              }`}
            >
              <div className={`${styles['row__row___2roCA']}`}>
                <div
                  className={`${styles['footer-seo-text__col-md-6___C70zu']} ${
                    styles['footer-seo-text__col-left___Jsigi']
                  }`}
                >
                  <h1 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    Xu hướng mua sắm hàng hiệu tại Việt Nam
                  </h1>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Dân số Việt Nam đang tăng trưởng với tốc độ nhanh chóng trong khu vực, cùng khả
                    năng chi tiêu ngày càng tăng cao &amp; sự phát triển nhu cầu hoàn thiện phong
                    cách sống hiện đại của đại đa số người tiêu dùng. Ngày càng có nhiều khách hàng
                    mong muốn tìm kiếm một điểm đến <strong>mua sắm hàng hiệu</strong> như "bách
                    khoa toàn thư" - sở hữu tất cả các <strong>thương hiệu cao cấp</strong> mà họ
                    cần - với giá cả cực kỳ ưu đãi &amp; tiện lợi trong quá trình mua sắm. Đồng
                    thời, sự ưu ái lựa chọn các sản phẩm gắn liền với thương hiệu, giá trị &amp;
                    trải nghiệm của chính khách hàng ngày là vô cùng to lớn, với 3 nhánh nhu cầu mua
                    sắm chính bao gồm: <strong>thời trang</strong>, <strong>làm đẹp</strong> &amp;{' '}
                    <strong>phong cách sống</strong>
                  </p>
                  <h2 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    Sứ mệnh mua sắm hàng hiệu giá hấp dẫn đến từ 123order.vn
                  </h2>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Với sự phát triển nhanh chóng từ chính người tiêu dùng tại Việt Nam cùng nhu cầu
                    hết sức chính đáng ấy, khách hàng - đặc biệt là các tín đồ đam mê hàng hiệu -
                    luôn trong trạng thái sẵn sàng đặt công sức của mình cho việc sở hữu được những
                    sản phẩm hàng hiệu mà bản thân yêu thích. Từ việc đặt mua ở nước ngoài, mua hàng
                    xách tay trong nước, hay sẵn sàng "cất cánh" sang nước ngoài săn lùng hàng
                    hiệu,... nhưng hàng triệu người tiêu dùng Việt Nam vẫn không thể hài lòng về
                    nguồn cung hàng chất lượng chưa đáp ứng như kỳ vọng, kèm theo cảm giác khó chịu
                    - vì phải chờ đợi, vì phải lo sợ, vì phải e ngại, vì phải mệt mỏi - khi mua sắm
                    hàng hiệu ở những địa điểm khác. Thấu hiểu những mối lo âu &amp; chính nhu cầu{' '}
                    <strong>mua sắm hàng hiệu</strong> của các tín đồ, 123order.vn tự hào đem đến
                    cho khách hàng trải nghiệm mua sắm
                    <strong>hàng hiệu giá tốt</strong> vô cùng hiện đại &amp; tiện lợi, đáp ứng mong
                    muốn tiếp cập với các dòng sản phẩm từ những{' '}
                    <strong>thương hiệu danh tiếng</strong> từ các <strong>tín đồ mua sắm</strong>{' '}
                    tại Việt Nam.
                  </p>
                  <h2 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    123order.vn - điểm đến mua sắm dẫn đầu phong cách sống hiện đại
                  </h2>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    123order.vn tin rằng mua sắm phải là niềm vui thuần khiết. Các thương hiệu phải
                    tự tìm đến khách hàng theo cách tiện lợi nhất &amp; với mức giá hấp dẫn nhất.
                    123order.vn tự hào là trang web <strong>mua sắm trực tuyến</strong> đầu tiên tại
                    Việt Nam giới thiệu đến người mua những thương hiệu hàng đầu thế giới với mức
                    giá hấp dẫn. Mỗi ngày, “cửa hàng” 123order.vn sẽ “mở cửa” vào lúc 8 giờ sáng với
                    những chương trình ưu đãi mới cho các sản phẩm hàng hiệu thời trang, làm đẹp,
                    nội thất &amp; hơn thế nữa. 123order.vn chỉ làm việc trực tiếp với các thương
                    hiệu &amp; nhà phân phối chính thức, với sự an tâm về nguồn gốc sản phẩm, chất
                    lượng sản phẩm &amp; mức giá tốt nhất được đặt lên hàng đầu. Không những thế,
                    123order.vn mong muốn trở thành điểm đến <strong>mua sắm online</strong> số 1
                    cho nhu cầu mua sắm hàng hiệu trực tuyến tại Việt Nam, cùng hoài bão mang sản
                    phẩm hàng hiệu với mức giá tốt nhất đến tay người tiêu dùng trên toàn khu vực
                    Đông Nam Á trong tương lai.
                  </p>
                </div>
                <div
                  className={`${styles['footer-seo-text__col-md-6___C70zu']} ${
                    styles['footer-seo-text__col-right___1TmuY']
                  }`}
                >
                  <h2 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    123order.vn - mua sắm tích hợp các thương hiệu đẳng cấp quốc tế
                  </h2>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Sở hữu ngay phong cách sống thời thượng &amp; đậm chất cá nhân khi trải nghiệm
                    mua sắm tại 123order.vn. Thật đơn giản, chỉ cần tham gia{' '}
                    <strong>mua sắm online</strong> tại website 123order.vn, bạn hoàn toàn có thể
                    tìm được các sản phẩm cao cấp ưng ý với chất lượng đảm bảo 100% đến từ thương
                    hiệu quốc tế, giá ưu đãi lớn &amp; trải nghiệm sau mua hoàn hảo, giúp bạn{' '}
                    <strong>mua sắm hàng hiệu</strong> một cách thoải mái, nhẹ nhàng &amp; mọi thứ
                    đều hợp với túi tiền của bạn.
                  </p>
                  <h2 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    Không thể bỏ lỡ cơ hội mua sắm hàng hiệu chính hãng giá tốt tại 123order.vn
                  </h2>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Với vô số thương hiệu đẳng cấp quốc tế dành riêng cho các tín đồ thời trang, bạn
                    không cần phải bỏ hàng giờ dành cho việc lặn lội ra các cửa hàng, thay vào đó,
                    chỉ cần thư giãn tại nhà, truy cập trang web 123order.vn, các thương hiệu danh
                    tiếng đã sẵn sàng có mặt dành riêng cho bạn lựa chọn: Nine West, Michael Kors,
                    Gucci, Bonia,... Các cô nàng đam mê làm đẹp khi đến với 123order.vn cũng dễ dàng
                    tìm kiếm các dòng mỹ phẩm cao cấp giá hợp lý, đảm bảo chính hãng &amp; thương
                    hiệu được giới làm đẹp ưa chuộng như: Dior, SK-II, Yves Rocher, Guerlain,... Và
                    cả những cô nàng, anh chàng nội trợ với nhu cầu trang hoàng nhà cửa, chăm sóc
                    cuộc sống &amp; gia đình cũng hoàn toàn có thể tìm thấy các sản phẩm ưng ý về
                    nhà cửa, trẻ em,... chỉ với một cú click chuột.
                  </p>
                  <h2 className={`${styles['footer-seo-text__h1___3zWgO']}`}>
                    Lý do bạn nên mua sắm hàng hiệu giá ưu đãi tại 123order.vn?
                  </h2>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Chỉ với một số lý do dưới đây, bạn hoàn toàn có thể khẳng định rằng, quyết định
                    lựa chọn trải nghiệm mua sắm của bạn tại 123order.vn là hoàn toàn sáng suốt:
                  </p>
                  <ol>
                    <li className={`${styles['footer-seo-text__body___UPRs4']}`}>
                      Vô số hàng hiệu chính hãng từ nhiều thương hiệu lớn
                    </li>
                    <li className={`${styles['footer-seo-text__body___UPRs4']}`}>
                      Giá ưu đãi vô cùng hợp lý
                    </li>
                    <li className={`${styles['footer-seo-text__body___UPRs4']}`}>
                      Trải nghiệm mua sắm tối giản
                    </li>
                    <li className={`${styles['footer-seo-text__body___UPRs4']}`}>
                      Dịch vụ khách hàng chất lượng
                    </li>
                    <li className={`${styles['footer-seo-text__body___UPRs4']}`}>
                      Sở hữu blog online 123order Style Guide về thời trang, làm đẹp &amp; lối sống
                    </li>
                  </ol>
                  <p className={`${styles['footer-seo-text__body___UPRs4']}`}>
                    Với các tiêu chí nâng tầm trải nghiệm mua sắm tuyệt vời dành riêng cho các tín
                    đồ yêu thích hàng hiệu tại Việt Nam, 123order.vn mong muốn đây chính là điểm đến
                    mua sắm hàng hiệu lý tưởng nhất cùng vô số ưu đãi hấp dẫn hàng ngày. Bạn hoàn
                    toàn có thể trải nghiệm <strong>shopping online</strong> thỏa thích, vừa cập
                    nhật nhiều thông tin hữu ích cho bản thân, chắc chắn bạn sẽ không thể nào bỏ lỡ
                    trải nghiệm mua sắm tuyệt vời khi lựa chọn 123order.vn. Mua ngay.
                  </p>
                </div>
              </div>
              <div className={`${styles['footer-seo-text__btn-wrap___337pF']}`}>
                <span
                  className={`${styles['footer-seo-text__icon___3SvXs']} ${
                    styles['ic-ic-double-down']
                  }`}
                />
                <span>Xem Thêm</span>
              </div>
            </div>
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
