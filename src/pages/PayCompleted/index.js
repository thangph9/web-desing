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
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
    return <Redirect to={'/checkout/paycomplete'} />;
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

  render() {
    const Information = JSON.parse(localStorage.getItem('Information'));

    var { listArr } = this.props.list;
    var total = 0;
    for (var i = 0; i < listArr.length; i++) {
      total = total + listArr[i][1];
    }
    var { user } = this.props;
    console.log(user.info);
    var { modal } = this.props.list;
    var sale_price = 0;
    if (listArr && listArr.length > 0) {
      listArr.forEach(v => {
        sale_price = sale_price + v[0].sale_price * v[1];
      });
    }

    if (Information || sessionStorage.account) {
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
                      <div>
                        <a href="/auth/signin?redirect=/checkout">
                          Đăng nhập để sử dụng mã giảm giá
                        </a>
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
                          <a href="/checkout/addresses/shipping">Sửa</a>
                        </div>
                      </h4>
                      {Information &&
                        !sessionStorage.account && (
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
                        sessionStorage.account && (
                          <div>
                            <div>
                              <span>{user.info.name && user.info.name}</span>
                              <span className={styles['an-address__dot-seperator___1_vim']}>•</span>
                              <span>{user.info.phone && user.info.phone}</span>
                            </div>
                            <div>{user.info.address}</div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className={styles['order-details__card___x9UEx']}>
                  {listArr.map((v, i) => {
                    return (
                      <div key={i} className={styles['order-details__card-block___3EZL6']}>
                        <h4 className={styles['order-details__card-title___1HHwX']}>
                          <span>Đơn hàng của bạn ({v[1]} Sản phẩm)</span>
                          <div className={styles['order-details__actions___3Vtxn']}>
                            <a onClick={() => this.handleClickEditProduct()}>Sửa</a>
                          </div>
                        </h4>
                        <div>
                          <div
                            className={
                              styles['order-details__product___3Ul2e'] + ' ' + styles['clearfix']
                            }
                          >
                            <div className={styles['order-details__image___2nFML']}>
                              <img src={`/images/f/${v[0].image.replace(/\-/g, '')}`} />
                            </div>
                            <div className={styles['order-details__info___3ESiE']}>
                              <div className={styles['order-details__title___rODtC']}>
                                {v[0].title}
                              </div>
                              <div className={styles['order-details__desc___3xcNy']}>
                                Số lượng: {v[1]}
                              </div>
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
                        </div>
                      </div>
                    );
                  })}
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
                      <div
                        style={{ display: 'none' }}
                        className={
                          styles['cc__option___2-tQJ'] + ' ' + styles['cc__credit-card___23cnt']
                        }
                      >
                        <div className={styles['cc__heading___3PENY']}>
                          <label
                            className={
                              styles['cc__custom-control___2TOMa'] +
                              ' ' +
                              styles['cc__custom-radio___22jyc']
                            }
                          >
                            <input
                              type="radio"
                              id={styles['input-credit-card']}
                              name="radio"
                              className={styles['cc__custom-control-input___3wz-W']}
                              readOnly
                              defaultValue="on"
                            />

                            <span className={styles['cc__custom-control-description___2W0MV']}>
                              Thẻ quốc tế Visa/MasterCard
                            </span>
                          </label>
                          <div
                            className={
                              styles['cc__shipping-fee___xDPmW'] +
                              ' ' +
                              styles['cc__free-shipping___WuDQM']
                            }
                          >
                            miễn phí giao hàng
                          </div>
                        </div>
                        <div className={styles['cc__credit-card-form___1tILw']}>
                          <div
                            className={
                              styles['row__row___2roCA'] +
                              ' ' +
                              styles['credit-card-form__cc-form-container___3IwSf']
                            }
                          >
                            <div
                              className={
                                styles['credit-card-form__col-lg-6___3YEEz'] +
                                ' ' +
                                styles['credit-card-form__cc-form-wrap___2lS5X']
                              }
                            >
                              <div>
                                <form noValidate autoComplete="on">
                                  <div className={styles['credit-card-form__form-group___BZuCA']}>
                                    <label
                                      className={
                                        styles['credit-card-form__form-control-label___3G261']
                                      }
                                    >
                                      Tên chủ thẻ
                                    </label>
                                    <input
                                      type="text"
                                      className={'credit-card-form__form-control___2zxui'}
                                      placeholder="Tên chủ thẻ"
                                      name="cc-name"
                                      required
                                      autoComplete="cc-name"
                                    />
                                    <div
                                      className={
                                        styles['credit-card-form__error-text___Wia_D'] +
                                        ' ' +
                                        styles['text-danger']
                                      }
                                    >
                                      Tên chủ thẻ là bắt buộc
                                    </div>
                                  </div>
                                  <div className={styles['credit-card-form__form-group___BZuCA']}>
                                    <label
                                      className={
                                        styles['credit-card-form__form-control-label___3G261']
                                      }
                                    >
                                      Số thẻ
                                    </label>
                                    <span className={styles['credit-card-form__card-list___39avV']}>
                                      <img src="/images/credit-card-list.jpg" />
                                    </span>
                                    <input
                                      type="tel"
                                      className={styles['credit-card-form__form-control___2zxui']}
                                      name="cc-number"
                                      placeholder="•••• •••• •••• ••••"
                                      required
                                      pattern="d*"
                                    />
                                    <div
                                      className={
                                        styles['credit-card-form__error-text___Wia_D'] +
                                        ' ' +
                                        styles['text-danger']
                                      }
                                    >
                                      Số thẻ không hợp lệ
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      styles['row__row___2roCA'] +
                                      ' ' +
                                      styles['credit-card-form__form-group___BZuCA']
                                    }
                                  >
                                    <div className={styles['credit-card-form__col-6___3m3FL']}>
                                      <label
                                        className={
                                          styles['credit-card-form__form-control-label___3G261']
                                        }
                                      >
                                        Ngày hết hạn
                                      </label>
                                      <input
                                        type="tel"
                                        className={styles['credit-card-form__form-control___2zxui']}
                                        name="cc-exp"
                                        autoComplete="cc-exp"
                                        placeholder="MM / YY"
                                        maxLength={7}
                                        required
                                      />
                                      <div
                                        className={
                                          styles['credit-card-form__error-text___Wia_D'] +
                                          ' ' +
                                          styles['text-danger']
                                        }
                                      >
                                        Ngày hết hạn không hợp lệ
                                      </div>
                                    </div>
                                    <div className={styles['credit-card-form__col-6___3m3FL']}>
                                      <label
                                        className={
                                          styles['credit-card-form__form-control-label___3G261']
                                        }
                                      >
                                        CVV
                                      </label>
                                      <input
                                        type="tel"
                                        className={styles['credit-card-form__form-control___2zxui']}
                                        placeholder="•••"
                                        name="cc-cvc"
                                        required
                                        autoComplete="off"
                                      />
                                      <div
                                        className={
                                          styles['credit-card-form__error-text___Wia_D'] +
                                          ' ' +
                                          styles['text-danger']
                                        }
                                      >
                                        Sô CVV không đúng
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              id={styles['card-container']}
                              className={
                                styles['credit-card-form__col-lg-6___3YEEz'] +
                                ' ' +
                                styles['credit-card-form__real-card-wrap___2oQR6']
                              }
                            >
                              <div className={styles['jp-card-container']}>
                                <div className={styles['jp-card']}>
                                  <div className={styles['jp-card-front']}>
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-visa']
                                      }
                                    >
                                      visa
                                    </div>
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-mastercard']
                                      }
                                    >
                                      MasterCard
                                    </div>
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-maestro']
                                      }
                                    >
                                      Maestro
                                    </div>
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-amex']
                                      }
                                    />
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-discover']
                                      }
                                    >
                                      discover
                                    </div>
                                    <div
                                      className={
                                        styles['jp-card-logo'] + ' ' + styles['jp-card-dankort']
                                      }
                                    >
                                      <div className={styles['dk']}>
                                        <div className={styles['d']} />
                                        <div className={styles['k']} />
                                      </div>
                                    </div>
                                    <div className={styles['jp-card-lower']}>
                                      <div className={styles['jp-card-shiny']} />
                                      <div
                                        className={
                                          styles['jp-card-cvc'] + ' ' + styles['jp-card-display']
                                        }
                                      >
                                        •••
                                      </div>
                                      <div
                                        className={
                                          styles['jp-card-number'] + ' ' + styles['jp-card-display']
                                        }
                                      >
                                        •••• •••• •••• ••••
                                      </div>
                                      <div
                                        className={
                                          styles['jp-card-name'] + ' ' + styles['jp-card-display']
                                        }
                                      >
                                        Full Name
                                      </div>
                                      <div
                                        className={
                                          styles['jp-card-expiry'] + ' ' + styles['jp-card-display']
                                        }
                                        data-before="month/year"
                                        data-after="validthru"
                                      >
                                        ••/••
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles['jp-card-back']}>
                                    <div className={styles['jp-card-bar']} />
                                    <div
                                      className={
                                        styles['jp-card-cvc'] + ' ' + styles['jp-card-display']
                                      }
                                    >
                                      •••
                                    </div>
                                    <div className={styles['jp-card-shiny']} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <form noValidate>
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
                              type="submit"
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
                              của Leflair Vietnam
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
                                styles['checkout-btn__actions___3qxu8'] +
                                ' ' +
                                styles['text-center']
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
                                    styles['checkout-btn__icon___3Vplk'] +
                                    ' ' +
                                    styles['ic-ic-lock']
                                  }
                                />
                                Hoàn tất đặt hàng
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
