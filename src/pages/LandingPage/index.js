/* eslint-disable prefer-template */
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
import styles1 from './index1.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
}))
@Form.create()
class LandingPage extends PureComponent {
  componentDidMount() {
    var anhBanner = document.getElementsByClassName('anh-banner')[0];
    if (anhBanner != null) {
      anhBanner.style.height = '400px';
      anhBanner.style['background'] = "url('/image/Reload-1s-100px.gif') no-repeat center";
    }
    var anhAo = document.getElementsByClassName('anh-ao');
    for (var i = 0; i < anhAo.length; i++) {
      if (anhAo != null) {
        anhAo[i].style.height = '220px';
        anhAo[i].style['background'] = "url('/image/Reload-1s-100px.gif') no-repeat center";
      }
    }
  }
  render() {
    var {
      loading: { global },
    } = this.props;
    return (
      <div>
        <div
          className={
            styles['container__container___1fvX0'] + ' ' + styles['home__featuredContainer___1YAQy']
          }
        >
          <a href="/sales/giam-den-60-lotus-bo-chan-and-drap-boc-5bd7cf7f77f2254353d8c2ff">
            <Skeleton
              className="anh-banner"
              active
              loading={!global}
              paragraph={false}
              title={false}
            >
              <img
                className={`${styles['hidden-md-up']}`}
                src="https://images.leflair.vn/w640/q85/5bdc00a4c6b3c5a18f0a3296.jpg"
                srcSet="https://images.leflair.vn/w640/q85/5bdc00a4c6b3c5a18f0a3296.jpg 640w, https://images.leflair.vn/w1080/q85/5bdc00a4c6b3c5a18f0a3296.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdc00a4c6b3c5a18f0a3296.jpg 1440w"
                sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw"
                alt="Giảm Đến 60% - Lotus Bộ Chăn & Drap Bọc"
              />
              <img
                className={styles['hidden-sm-down']}
                src="https://images.leflair.vn/w850/q85/5bdc21d10946306c20111702.jpg"
                srcSet="https://images.leflair.vn/w850/q85/5bdc21d10946306c20111702.jpg 850w, https://images.leflair.vn/w1440/q85/5bdc21d10946306c20111702.jpg 1440w, https://images.leflair.vn/w2560/q85/5bdc21d10946306c20111702.jpg 2560w"
                sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw"
                alt="Giảm Đến 60% - Lotus Bộ Chăn & Drap Bọc"
              />
            </Skeleton>
            <div
              className={
                styles['hidden-md-up'] +
                ' ' +
                styles['home__badge___2w2Lc'] +
                ' ' +
                styles['home__featured-badge___2hhaD']
              }
            >
              Ưu đãi nổi bật
            </div>
            <div className={`${styles['hidden-md-up']} ${styles['home__currentSaleInfo___2Fj0C']}`}>
              <div className={`${styles['home__currentSaleTitle___1jXFQ']}`}>
                Giảm Đến 60% - Lotus Bộ Chăn &amp; Drap Bọc
              </div>
              <div className={`${styles['home__endTimeWrap___25O4u']}`}>
                <span className={`${styles['home__endTimeContent___2G8rq']}`}>
                  <i className={`${styles['ic-ic-time']} ${styles['end-time__icon___REEKA']}`} />{' '}
                  <span className={`${styles['end-time__text___1A-sx']}`}>Còn</span>{' '}
                  <span className={`${styles['end-time__timer___LMsIT']}`}>7 ngày</span>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles1['main-tabs']} ${styles1['text-right']}`}>
          <div className={`${styles1['container']}`}>
            <ul className={`${styles1['list-inline']}`}>
              <li>
                <a href="https://weshop.com.vn/search/bulova%20women%20watch.html?portal=ebay">
                  Bulova
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/citizen%20women%20watch.html?portal=ebay">
                  Citizen
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/seiko%20women%20watch.html?portal=ebay">
                  Seiko
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/burgi%20women%20watch.html?portal=ebay">
                  Burgi
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/akribos%20women%20watch.html?portal=ebay">
                  Akribos
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/skagen%20women%20watch.html?portal=ebay">
                  Skagen
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/anne%20klein%20women%20watch.html?portal=ebay">
                  Anne Klein
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/guess%20women%20watch.html?portal=ebay">
                  Guess
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/casio%20women%20watch.html?portal=ebay">
                  Casio
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/invicta%20women%20watch.html?portal=ebay">
                  Invicta
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/michael%20kors%20women%20watch.html?portal=ebay">
                  Michael Kors
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/%20Daniel%20Wellington%20women%20watch.html?portal=ebay">
                  Daniel Wellington
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/fossil%20women%20watch.html?portal=ebay">
                  Fossil
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/Kenneth%20Cole%20women%20watch.html?portal=ebay">
                  Kenneth Cole
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/Timex%20women%20watch.html?portal=ebay">
                  Timex
                </a>
              </li>
              <li>
                <a href="https://weshop.com.vn/search/Kate%20Spade%20women%20watch.html?portal=ebay">
                  Kate Spade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles1['container']}`}>
          <div className={`${styles1['lmkt-list-prod']}`}>
            <div className={`${styles1['lmkt-title']}`}>
              <h1>
                Đồng hồ nữ - Giảm giá tới 80%
                <a href="https://weshop.com.vn/search/women%20watch.html?portal=ebay&type=2&param=Condition:1000&priceFrom=500000&priceTo=0">
                  Xem tất cả
                </a>
              </h1>
            </div>
            <div className={`${styles1['lmkt-prod-top']}`}>
              <ul>
                <li className={`${styles1['lmkt-prod-full']}`}>
                  <ul className={`${styles1['lmkt-prod-other']}`}>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles1['lmkt-prod-detail']}`}>
                        <div className={`${styles1['lmkt-prod-img']}`}>
                          <a
                            href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html"
                            className={`${styles1['lmkt-link-img']}`}
                          >
                            <Skeleton
                              className="anh-ao"
                              active
                              loading={!global}
                              paragraph={false}
                              title={false}
                            >
                              <img
                                className={`${styles1['lazy']}`}
                                data-original="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                alt="Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816"
                                src="https://static-v3.weshop.com.vn/upload/z/d/k/p/h/o/4/r/s/z/tommy-hilfiger-women-s-claud-28360.jpg"
                                style={{ display: 'inline' }}
                              />
                            </Skeleton>
                          </a>
                          <span className={`${styles1['lmkt-sale']}`}>-32 %</span>
                          <div className={`${styles1['lmkt-cart']}`}>
                            <a href="#">detail</a>
                          </div>
                        </div>
                        <Skeleton
                          className="detail-product"
                          active
                          loading={!global}
                          paragraph={{ rows: 4 }}
                          title={false}
                        >
                          <div className={`${styles1['lmkt-prod-tit']}`}>
                            <a href="/ebay/item/tommy-hilfiger-women-s-claudia-30m-leather-watch-1781816-202351543337.html">
                              Tommy Hilfiger Women's Claudia 30m Leather Watch 1781816
                            </a>
                          </div>
                          <div className={`${styles1['lmkt-prod-pri']}`}>
                            <p>
                              2.913.000 VNĐ
                              <span>4.055.000 VNĐ</span>
                            </p>
                          </div>
                        </Skeleton>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`${styles['lmkt-prod-bottom']}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
