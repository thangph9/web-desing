/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-plusplus */
/* eslint-disable operator-assignment */
/* eslint-disable vars-on-top */
/* eslint-disable no-script-url */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable no-useless-escape */
/* eslint-disable one-var */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-styles */
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
import { Link, Redirect } from 'react-router-dom';
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
  Row,
  Col,
  Checkbox,
  Skeleton,
  Cascader,
} from 'antd';
import styles from './index.less';

var currencyFormatter = require('currency-formatter');
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class Checkout extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleClickEditProduct() {
    this.props.dispatch({
      type: 'list/modal',
      payload: true,
    });
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'list/modal',
      payload: false,
    });
    this.props.dispatch({
      type: 'user/info',
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.info !== nextProps.user.info) {
      this.setState({
        info: nextProps.user.info.info,
        status_info: nextProps.user.info.status,
      });
    }
  }
  payCompelete(sale_price, arr, info) {
    var obj = {};
    obj.total_price = sale_price + 25000;
    obj.total = 0;
    obj.list_product = [];
    arr.forEach((v, i) => {
      var productOrder = {};
      productOrder.productid = v[0].productid;
      if (v[0].size) productOrder.size = v[0].size;
      if (v[0].image) productOrder.image = v[0].image;
      if (v[0].color) productOrder.color = v[0].color;
      if (v[0].title) productOrder.title = v[0].title;
      if (v[0].sale_price) {
        productOrder.price = v[0].sale_price + '';
      } else {
        productOrder.price = v[0].price + '';
      }
      productOrder.total = v[1] + '';
      obj.list_product.push(productOrder);
    });
    obj.order_by = info.name;
    obj.phone = info.phone;
    obj.address = info.address;
    console.log(obj)
    this.props.dispatch({
      type: 'user/paycompelete',
      payload: obj,
    });
  }
  render() {
    const Information = JSON.parse(localStorage.getItem('Information'));
    var { info, status_info } = this.state;
    var { listArr } = this.props.list;
    var total = 0;
    for (var i = 0; i < listArr.length; i++) {
      total = total + listArr[i][1];
    }
    var { user } = this.props;

    var { modal } = this.props.list;
    var sale_price = 0;
    if (listArr && listArr.length > 0) {
      listArr.forEach(v => {
        sale_price = sale_price + v[0].sale_price * v[1];
      });
    }

    if (Information || status_info !== 'error') {
      return (
        <div className={styles['container__container___1fvX0']}>
          <div className={styles['process-indicator__indicator-section___Z-6r8']}>
            <div className={styles['process-indicator__indicator-wrap___3PSK7']}>
              <div
                className={
                  styles['process-indicator__step___2m61M'] +
                  ' ' +
                  styles['process-indicator__completed___2UpYW']
                }
              >
                <i
                  className={
                    styles['ic-ic-check-mark'] + ' ' + styles['process-indicator__icon___G4w8B']
                  }
                >
                  {' '}
                </i>
                <span>Địa chỉ / Đăng nhập</span>
              </div>
              <div
                className={
                  styles['process-indicator__step___2m61M'] +
                  ' ' +
                  styles['process-indicator__completed___2UpYW']
                }
              >
                <span>Thanh toán</span>
              </div>
            </div>
          </div>
          <div className={styles['checkout__checkout-container___3rjtq']}>
            <div className={styles['row__row___2roCA']}>
              <div className={styles['checkout__col-lg-4___2Mwer']}>
                <div
                  className={
                    styles['order-summary__order-summary___2WFNx'] +
                    ' ' +
                    styles['order-summary__card___3zliB']
                  }
                >
                  <div className={styles['order-summary__card-block___1hCkc']}>
                    <h4 className={styles['order-summary__card-title___2F2Ay']}>
                      Đơn hàng ({listArr.length} Sản phẩm)
                    </h4>
                    <div>
                      <div
                        className={
                          styles['row__row___2roCA'] +
                          ' ' +
                          styles['order-summary__subtotal___1-kE1']
                        }
                      >
                        <div className={styles['order-summary__col-6___351P1']}>Tạm tính</div>
                        <span
                          className={
                            styles['order-summary__col-6___351P1'] + ' ' + styles['text-right']
                          }
                        >
                          {currencyFormatter.format(sale_price, {
                            locale: 'vi-VN',
                          })}
                        </span>
                      </div>
                      <div
                        className={
                          styles['row__row___2roCA'] +
                          ' ' +
                          styles['order-summary__shipping___14XDr']
                        }
                      >
                        <div className={styles['order-summary__col-6___351P1']}>Phí vận chuyển</div>
                        <div
                          className={
                            styles['order-summary__col-6___351P1'] + ' ' + styles['text-right']
                          }
                        >
                          <span className={styles['']}>25.000 ₫</span>
                        </div>
                      </div>

                      <hr />
                      <div
                        id={styles['order-summary']}
                        className={
                          styles['row__row___2roCA'] + ' ' + styles['order-summary__total___2aqMF']
                        }
                      >
                        <div className={styles['order-summary__col-6___351P1']}>Thành tiền</div>
                        <span
                          className={
                            styles['order-summary__col-6___351P1'] + ' ' + styles['text-right']
                          }
                        >
                          {currencyFormatter.format(sale_price + 25000, {
                            locale: 'vi-VN',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['address__card___2il6c']}>
                  <div className={styles['address__card-block___gCJQ8']}>
                    <div className={styles['an-address__address___yB6sO']}>
                      <h4 className={styles['an-address__card-title___1w0eI']}>
                        <span>Giao hàng đến</span>
                        <div className={styles['an-address__actions___3lZYH']}>
                          <Link
                            style={{ fontWeight: 700, fontSize: '1.125rem' }}
                            to={`/account/accountinformation`}
                          >
                            Sửa
                          </Link>
                        </div>
                      </h4>
                      {Information &&
                        !info && (
                          <div>
                            <div>
                              <span>{Information.lastname + ' ' + Information.firstname}</span>
                              <span className={styles['an-address__dot-seperator___1_vim']}>•</span>
                              <span>+{Information.prefix + '' + Information.phone}</span>
                            </div>
                            <div>{Information.address}</div>
                          </div>
                        )}
                      {!Information &&
                        info && (
                          <div>
                            <div>
                              <span>{info.name && info.name}</span>
                              <span className={styles['an-address__dot-seperator___1_vim']}>•</span>
                              <span>{info.phone && info.phone}</span>
                            </div>
                            <div>{info.address}</div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className={styles['order-details__card___x9UEx']}>
                  <div className={styles['order-details__card-block___3EZL6']}>
                    <h4 className={styles['order-details__card-title___1HHwX']}>
                      <span>Đơn hàng của bạn </span>
                      <div className={styles['order-details__actions___3Vtxn']}>
                        <span
                          style={{ cursor: 'pointer', color: '#16accf' }}
                          onClick={() => this.handleClickEditProduct()}
                        >
                          Sửa
                        </span>
                      </div>
                    </h4>
                    {listArr.map((v, i) => {
                      return (
                        <div key={i}>
                          <div style={{display:'flex'}}
                            className={
                              styles['order-details__product___3Ul2e'] + ' ' + styles['clearfix']
                            }
                          >
                            <div style={{backgroundImage:`url(/images/ft/${v[0].image.replace(/\-/g, '')})`}} className={styles['order-details__image___2nFML']+' '+styles['background-item']}>

                            </div>
                            <div className={styles['order-details__info___3ESiE']}>
                              <div className={styles['order-details__title___rODtC']}>
                                {v[0].title}
                              </div>
                              <div className={styles['order-details__desc___3xcNy']}>
                                Số lượng: {v[1]}
                              </div>
                              {v[0].color && (
                                <div className={styles['order-details__desc___3xcNy']}>
                                  Màu sắc: {v[0].color}
                                </div>
                              )}
                              {v[0].size && (
                                <div className={styles['order-details__desc___3xcNy']}>
                                  Kích cỡ: {v[0].size}
                                </div>
                              )}
                              <div className={styles['order-details__desc___3xcNy']}>
                                Giá:{' '}
                                <span>
                                  {currencyFormatter.format(v[0].sale_price, {
                                    locale: 'vi-VN',
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles['checkout__col-lg-8___QjgUh']}>
                <div
                  className={
                    styles['payment__proceed-checkout___1USNR'] +
                    ' ' +
                    styles['payment__card___zPs9X']
                  }
                >
                  <div className={styles['payment__card-block___3Uvg0']}>
                    <h4 className={styles['payment__card-title___eZOBM']}>
                      Chọn phương thức thanh toán
                    </h4>
                    <div className={styles['payment__payment-options___ZrwiQ']}>
                      <div
                        style={{ width: 'calc(100% + 4px)' }}
                        className={
                          styles['cod__active___2LTuD'] + ' ' + styles['cod__option___p-oIl']
                        }
                      >
                        <div className={styles['cod__heading___uvWgz'] + ' ' + styles['clearfix']}>
                          <label
                            className={
                              styles['cod__custom-control___1CJuh'] +
                              ' ' +
                              styles['cod__custom-radio___1znaR']
                            }
                          >
                            <input
                              checked
                              type="radio"
                              id={styles['input-cod']}
                              name="radio"
                              className={styles['cod__custom-control-input___33oKm']}
                              readOnly
                              defaultValue="on"
                            />

                            <span className={styles['cod__custom-control-description___3U8oe']}>
                              Tiền mặt khi nhận hàng
                            </span>
                          </label>
                          <span className={styles['cod__shipping-fee___LXdRJ']}>
                            <span>25.000₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div>
                      <div
                        className={styles['checkout-btn__checkout___2DoYD']}
                        id={styles['btn-checkout-mobile']}
                      >
                        <div
                          className={
                            styles['checkout-btn__actions___3qxu8'] + ' ' + styles['text-center']
                          }
                        >
                          <button
                            onClick={() => this.payCompelete(sale_price, listArr, info)}
                            className={
                              styles['checkout-btn__btn___1DYTV'] +
                              ' ' +
                              styles['checkout-btn__btn-primary___1RlmT'] +
                              ' ' +
                              styles['checkout-btn__btn-checkout___2E7IJ']
                            }
                          >
                            <i
                              className={
                                styles['checkout-btn__icon___3Vplk'] + ' ' + styles['ic-ic-lock']
                              }
                            />
                            Hoàn tất đặt hàng
                          </button>
                          <div className={styles['checkout-btn__policy___1EXJa']}>
                            <span>Bằng việc tiếp tục, bạn đồng ý với</span>
                            <a
                              href="https://support.leflair.vn/hc/vi/articles/214857097-%C4%90i%E1%BB%81u-kho%E1%BA%A3n-v%C3%A0-quy-%C4%91%E1%BB%8Bnh-chung"
                              target="blank"
                            >
                              {' '}
                              điều khoản sử dụng{' '}
                            </a>
                            của 123order Vietnam
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          styles['checkout-btn__btn-float-checkout___1K6H3'] +
                          ' ' +
                          styles['checkout-btn__hide___20YA0']
                        }
                        id={styles['btn-float-checkout']}
                      >
                        <div className={styles['checkout-btn__checkout___2DoYD']}>
                          <div
                            className={
                              styles['checkout-btn__actions___3qxu8'] + ' ' + styles['text-center']
                            }
                          >
                            <button
                              type="submit"
                              className={
                                styles['checkout-btn__btn___1DYTV'] +
                                ' ' +
                                styles['checkout-btn__btn-primary___1RlmT']
                              }
                            >
                              <i
                                className={
                                  styles['checkout-btn__icon___3Vplk'] + ' ' + styles['ic-ic-lock']
                                }
                              />
                              Hoàn tất đặt hàng
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['payment__secured-label___1cNZZ']} />
                <div className={styles['payment__backdrop___3YE13']}>
                  <div className={styles['loading-spinner__spinner-container___27RgE']}>
                    <div className={styles['loading-spinner__spinner___7t1Eb']}>
                      <div className={styles['loading-spinner__bounce1___211mK']} />
                      <div className={styles['loading-spinner__bounce2___S6Y_a']} />
                      <div className={styles['bounce3']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/checkout" />;
    }
  }
}

export default Checkout;
