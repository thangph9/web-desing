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

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
}))
@Form.create()
class ListCategory extends PureComponent {
  renderBreadcrumb() {
    return (
      <div className={styles['sale__col-md-8___34B6S']}>
        <ol
          className={
            styles['sale__breadcrumb___2DFJ9'] + ' ' + styles['breadcrumb__breadcrumb___3F6K8']
          }
        >
          <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
            <a href="/">Ưu đãi</a>
          </li>
          <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
            <h1>Giảm Đến 68% - JacQ Giày Thời Trang Nam</h1>
          </li>
        </ol>
      </div>
    );
  }
  renderEndTime() {
    return (
      <div
        className={
          styles['hidden-sm-down'] +
          ' ' +
          styles['sale__col-md-4___UhAyk'] +
          ' ' +
          styles['sale__end-time___MKUlz']
        }
      >
        <span>
          <i className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']} />{' '}
          <span className={styles['end-time__text___1A-sx']}>Còn</span>{' '}
          <span className={styles['end-time__timer___LMsIT']}>7 ngày</span>
        </span>
      </div>
    );
  }
  renderTotalProduct() {
    return (
      <div
        className={
          styles['hidden-sm-down'] +
          ' ' +
          styles['sale__col-md-6___3wB0o'] +
          ' ' +
          styles['sale__left-pane___1c5Jj']
        }
      >
        <div
          className={
            styles['sale__total-items___u7EoB'] + ' ' + styles['total-items__text___1TBmn']
          }
        >
          21 Sản phẩm
        </div>
      </div>
    );
  }
  renderProductItem() {
    return (
      <div
        className={
          styles['sale__col-6___1aN_i'] +
          ' ' +
          styles['sale__col-md-4___UhAyk'] +
          ' ' +
          styles['sale__col-lg-4___37sBv']
        }
      >
        <a
          className={styles['product-card__productCard___2lSYu']}
          href="/products/giay-oxford-daiki-den-598ab753e1bb47100032a19c?color=BL"
        >
          <div>
            <div
              className={
                styles['product-card__imageContainer___1apY_'] +
                ' ' +
                styles['product-card__sale-product-card____fjbZ']
              }
            >
              <img
                id
                className={styles['product-card__image___QEKAk']}
                src="https://images.leflair.vn/w380/q85/599674320ecd82000f1c1044.jpg"
                srcSet="https://images.leflair.vn/w380/q85/599674320ecd82000f1c1044.jpg 380w, https://images.leflair.vn/w510/q85/599674320ecd82000f1c1044.jpg 510w"
                sizes="50vw, (min-width: 768px) 33.3vw"
                alt="Giày Oxford Daiki Đen"
              />
              <div className={styles['product-card__discount___2R4sK']}>68% Off</div>
            </div>
            <div className={styles['product-card__titleContainer___1HE6o']}>
              <h4 className={styles['product-card__brand___3np4R']}>JacQ</h4>
              <h4 className={styles['product-card__title___3l79X']}>Giày Oxford Daiki Đen</h4>
              <div>
                <span className={styles['product-card__retailPrice___2urqH']}>4.990.000₫</span>
                <span className={styles['product-card__salePrice___3PSWy']}>1.579.000₫</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  render() {
    return (
      <div className={styles['container__container___1fvX0']}>
        <div className={styles['sale__sale___1auiY']}>
          <div className={styles['sale__sale-header___1lQxA']}>
            <div
              className={
                styles['row__row___2roCA'] +
                ' ' +
                styles['clearfix'] +
                ' ' +
                styles['sale__header-top___3nxZf']
              }
            >
              {this.renderBreadcrumb()}
              {this.renderEndTime()}
            </div>
            <div
              className={
                styles['row__row___2roCA'] +
                ' ' +
                styles['clearfix'] +
                ' ' +
                styles['sale__header-lower___20QGi'] +
                ' ' +
                styles['sale__d-t___1Trp4']
              }
            >
              <div
                className={
                  styles['sale__left-pane___1c5Jj'] +
                  ' ' +
                  styles['sale__col-6___1aN_i'] +
                  ' ' +
                  styles['sale__col-md-4___UhAyk'] +
                  ' ' +
                  styles['sale__btn-filter-wrap___1hpsO'] +
                  ' ' +
                  styles['sale__col-lg-3___2xbHl']
                }
              >
                <button
                  type="button"
                  className={
                    styles['sale__btn___3OqFl'] +
                    ' ' +
                    styles['sale__btn-secondary___3ka36'] +
                    ' ' +
                    styles['active']
                  }
                >
                  <span>
                    Hiện bộ lọc
                    <i
                      className={
                        styles['ic-ic-arrow-right'] + ' ' + styles['sale__icon-show___3nTgw']
                      }
                    />
                  </span>
                </button>
              </div>
              <div
                className={
                  styles['sale__right-pane___2P_gS'] +
                  ' ' +
                  styles['sale__col-6___1aN_i'] +
                  ' ' +
                  styles[' sale__col-md-8___34B6S'] +
                  ' ' +
                  styles['sale__col-lg-9___2qXAs']
                }
              >
                <div className={styles['row__row___2roCA']}>
                  {this.renderTotalProduct()}
                  <div
                    className={
                      styles['clearfix'] +
                      ' ' +
                      styles['sale__col-md-6___3wB0o'] +
                      ' ' +
                      styles['sale__right-pane___2P_gS'] +
                      ' ' +
                      styles['sale__btn-sort-wrap___nd_gy']
                    }
                  >
                    <div className={styles['float-right'] + ' ' + styles['sort__dropdown___2bcri']}>
                      <button
                        type="button"
                        className={
                          styles['sort__btn___1Cu7A'] +
                          ' ' +
                          styles['sort__btn-secondary___2iOCb'] +
                          ' ' +
                          styles['sort__dropdown-toggle___1pM4w']
                        }
                      >
                        <span className={styles['sort__btn-text___1mPct']}> Sắp xếp: Gợi ý</span>
                        <i
                          className={
                            styles['ic-ic-arrow-down'] + ' ' + styles['sort__icon___3yfiZ']
                          }
                        />
                      </button>
                      <ul
                        className={
                          styles['sort__dropdown-menu-right___1zFcq'] +
                          ' ' +
                          styles['sort__dropdown-menu___3NLmO']
                        }
                        role="menu"
                        aria-labelledby="single-button"
                      >
                        <li role="menuitem">
                          <a
                            href="javascript:void(0)"
                            className={
                              styles['sort__dropdown-item___XkHiS'] +
                              ' ' +
                              styles['sort__active___3DNgx']
                            }
                          >
                            Gợi ý
                          </a>
                        </li>
                        <li role="menuitem">
                          <a
                            href="javascript:void(0)"
                            className={styles['sort__dropdown-item___XkHiS']}
                          >
                            Giảm giá nhiều nhất
                          </a>
                        </li>
                        <li role="menuitem">
                          <a
                            href="javascript:void(0)"
                            className={styles['sort__dropdown-item___XkHiS']}
                          >
                            Giá, thấp đến cao
                          </a>
                        </li>
                        <li role="menuitem">
                          <a
                            href="javascript:void(0)"
                            className={styles['sort__dropdown-item___XkHiS']}
                          >
                            Giá, cao đến thấp
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['hidden-md-up'] + ' ' + styles['sale__mobile-data___evUIw']}>
                <div
                  className={
                    styles['sale__total-items___u7EoB'] +
                    ' ' +
                    styles['sale__col-6___1aN_i'] +
                    ' ' +
                    styles['total-items__text___1TBmn']
                  }
                >
                  21 Sản phẩm
                </div>
                <span
                  className={styles['sale__end-time___MKUlz'] + ' ' + styles['sale__col-6___1aN_i']}
                >
                  <i className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']} />{' '}
                  <span className={styles['end-time__text___1A-sx']}>Còn</span>{' '}
                  <span className={styles['end-time__timer___LMsIT']}>7 ngày</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['sale__sale-content___1M-Lr']}>
            <div className={styles['row__row___2roCA']}>
              <div
                className={
                  styles['sale__products-list___2pc3u'] + ' ' + styles['sale__col-12___82vEz']
                }
              >
                <div className={styles['row__row___2roCA']}>
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                  {this.renderProductItem()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCategory;
