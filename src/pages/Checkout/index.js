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
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
class Checkout extends PureComponent {
  state = {};
  componentDidMount() {}
  render() {
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
              <i className={styles['false'] + ' ' + styles['process-indicator__icon___G4w8B']}> </i>
              <span>Địa chỉ / Đăng nhập</span>
            </div>
            <div className={styles['process-indicator__step___2m61M'] + ' ' + styles['false']}>
              <span>Thanh toán</span>
            </div>
          </div>
        </div>
        <div
          className={
            styles['continue__col-lg-6___1PrwO'] +
            ' ' +
            styles['continue__col-md-8___1o6n8'] +
            ' ' +
            styles['continue__offset-lg-3___1DXQF'] +
            ' ' +
            styles['continue__offset-md-2___2e4Qq'] +
            ' ' +
            styles['continue__continueContainer___29VZv']
          }
        >
          <h3 className={styles['continue__title___24Yiu']}>Đã là thành viên?</h3>
          <p className={styles['continue__text-desc___ukUpu']}>
            Đăng nhập để thanh toán nhanh và theo dõi đơn hàng.
          </p>
          <p>
            <a
              href="/api/v2/account/facebook?redirect=https://www.leflair.vn/checkout "
              id="btn-facebook-signin-checkout"
              className={
                styles['facebook-sign-in-button__btn___8j_B7'] +
                ' ' +
                styles['facebook-sign-in-button__btn-primary___mzij6'] +
                ' ' +
                styles['facebook-sign-in-button__btn-block___2iNzn'] +
                ' ' +
                styles['facebook-sign-in-button__btnFacebookSignIn___Pymre']
              }
            >
              <i className={styles['ic-facebook']} />
              Đăng nhập bằng Facebook
            </a>
          </p>
          <p className={styles['continue__btn-email___1nv9z']}>
            <button
              id="btn-email-signin-checkout"
              className={
                styles['continue__btn___1ZlRu'] +
                ' ' +
                styles['continue__btn-primary___2Rtms'] +
                ' ' +
                styles['continue__btn-block___3jiI1']
              }
            >
              Đăng nhập bằng email
            </button>
          </p>
          <div className={styles['continue__separator___3gsgK']}>
            <hr />
          </div>
          <h3 className={styles['continue__title___24Yiu']}>Khách hàng mới?</h3>
          <p className={styles['continue__text-desc___ukUpu']}>
            Bạn có thể mua hàng không cần đăng ký, vui lòng nhập thông tin bên dưới để tiếp tục:
          </p>
          <form>
            <div className={styles['shipping-address__form-group___1dFdf']}>
              <label htmlFor="email">Địa chỉ email</label>
              <input
                type="email"
                className={styles['shipping-address__form-control___pWwJC']}
                placeholder="example@example.com"
                required
              />
              <small className={styles['shipping-address__small___2rluX']}>
                Để nhận thông tin &amp; theo dõi đơn hàng
              </small>
            </div>
            <div>
              <h4 className={styles['shipping-address__title___3fcR4']}>Địa chỉ giao hàng</h4>
              <fieldset>
                <div
                  className={
                    styles['row__row___2roCA'] +
                    ' ' +
                    styles['shipping-address__form-group___1dFdf']
                  }
                >
                  <div className={styles['shipping-address__col-6___2fe7q']}>
                    <label htmlFor="last-name">Họ</label>
                    <input
                      type="text"
                      className={styles['shipping-address__form-control___pWwJC']}
                      name="lastName"
                      id="last-name"
                      placeholder="Họ"
                      required
                    />
                  </div>
                  <div className={styles['shipping-address__col-6___2fe7q']}>
                    <label htmlFor="first-name">Tên</label>
                    <input
                      type="text"
                      className={styles['shipping-address__form-control___pWwJC']}
                      name="firstName"
                      id="first-name"
                      placeholder="Tên"
                      required
                    />
                  </div>
                </div>
                <div
                  className={styles['clearfix'] + ' ' + styles['text-input__form-group___2DnhG']}
                >
                  <label htmlFor="address">Địa chỉ</label>
                  <span
                    className={
                      styles['float-right'] + ' ' + styles['text-input__text-muted___2iML-']
                    }
                  >
                    0/70
                  </span>
                  <input
                    id="address"
                    name="address"
                    placeholder="Ví dụ: 12 Tôn Đản, P. 13"
                    className={styles['text-input__form-control___3hVs1']}
                    required
                    maxLength={70}
                  />
                </div>
                <div className={styles['shipping-address__form-group___1dFdf']}>
                  <label htmlFor="city">Tỉnh / Thành phố</label>
                  <div
                    style={{ padding: '0px' }}
                    className={
                      styles['shipping-address__select-style___2czfE'] +
                      ' ' +
                      styles['shipping-address__form-control___pWwJC']
                    }
                  >
                    <select
                      style={{ height: 'calc(2.688rem + 2px)' }}
                      className={styles['shipping-address__form-control___pWwJC']}
                      name="city"
                      required
                    >
                      <option value>Chọn thành phố</option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b4&quot;,&quot;name&quot;:&quot;Thành phố Hà Nội&quot;}">
                        Thành phố Hà Nội
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b9&quot;,&quot;name&quot;:&quot;Hồ Chí Minh&quot;}">
                        Hồ Chí Minh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d6&quot;,&quot;name&quot;:&quot;Tiền Giang&quot;}">
                        Tiền Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a4&quot;,&quot;name&quot;:&quot;Bình Định&quot;}">
                        Bình Định
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b2&quot;,&quot;name&quot;:&quot;Hà Giang&quot;}">
                        Hà Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1be&quot;,&quot;name&quot;:&quot;Kon Tum&quot;}">
                        Kon Tum
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c8&quot;,&quot;name&quot;:&quot;Phú Thọ&quot;}">
                        Phú Thọ
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ca&quot;,&quot;name&quot;:&quot;Quảng Bình&quot;}">
                        Quảng Bình
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1db&quot;,&quot;name&quot;:&quot;Yên Bái&quot;}">
                        Yên Bái
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a1&quot;,&quot;name&quot;:&quot;Bạc Liêu&quot;}">
                        Bạc Liêu
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a7&quot;,&quot;name&quot;:&quot;Bình Thuận&quot;}">
                        Bình Thuận
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ab&quot;,&quot;name&quot;:&quot;Đà Nẵng&quot;}">
                        Đà Nẵng
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a3&quot;,&quot;name&quot;:&quot;Bến Tre&quot;}">
                        Bến Tre
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a0&quot;,&quot;name&quot;:&quot;Bắc Kạn&quot;}">
                        Bắc Kạn
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b0&quot;,&quot;name&quot;:&quot;Đồng Tháp&quot;}">
                        Đồng Tháp
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a6&quot;,&quot;name&quot;:&quot;Bình Phước&quot;}">
                        Bình Phước
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c4&quot;,&quot;name&quot;:&quot;Nam Định&quot;}">
                        Nam Định
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ae&quot;,&quot;name&quot;:&quot;Điện Biên&quot;}">
                        Điện Biên
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b5&quot;,&quot;name&quot;:&quot;Hà Tĩnh&quot;}">
                        Hà Tĩnh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a5&quot;,&quot;name&quot;:&quot;Bình Dương&quot;}">
                        Bình Dương
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b3&quot;,&quot;name&quot;:&quot;Hà Nam&quot;}">
                        Hà Nam
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d4&quot;,&quot;name&quot;:&quot;Thanh Hóa&quot;}">
                        Thanh Hóa
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f19f&quot;,&quot;name&quot;:&quot;Bắc Giang&quot;}">
                        Bắc Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f19e&quot;,&quot;name&quot;:&quot;Bà Rịa Vũng Tàu&quot;}">
                        Bà Rịa Vũng Tàu
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b8&quot;,&quot;name&quot;:&quot;Hậu Giang&quot;}">
                        Hậu Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1cc&quot;,&quot;name&quot;:&quot;Quảng Ngãi&quot;}">
                        Quảng Ngãi
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c9&quot;,&quot;name&quot;:&quot;Phú Yên&quot;}">
                        Phú Yên
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1bd&quot;,&quot;name&quot;:&quot;Kiên Giang&quot;}">
                        Kiên Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1cb&quot;,&quot;name&quot;:&quot;Quảng Nam&quot;}">
                        Quảng Nam
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ce&quot;,&quot;name&quot;:&quot;Quảng Trị&quot;}">
                        Quảng Trị
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c2&quot;,&quot;name&quot;:&quot;Lào Cai&quot;}">
                        Lào Cai
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d7&quot;,&quot;name&quot;:&quot;Trà Vinh&quot;}">
                        Trà Vinh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1cf&quot;,&quot;name&quot;:&quot;Sóc Trăng&quot;}">
                        Sóc Trăng
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c6&quot;,&quot;name&quot;:&quot;Ninh Bình&quot;}">
                        Ninh Bình
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d1&quot;,&quot;name&quot;:&quot;Tây Ninh&quot;}">
                        Tây Ninh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1cd&quot;,&quot;name&quot;:&quot;Quảng Ninh&quot;}">
                        Quảng Ninh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a2&quot;,&quot;name&quot;:&quot;Bắc Ninh&quot;}">
                        Bắc Ninh
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d0&quot;,&quot;name&quot;:&quot;Sơn La&quot;}">
                        Sơn La
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ad&quot;,&quot;name&quot;:&quot;Đắk Nông&quot;}">
                        Đắk Nông
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b7&quot;,&quot;name&quot;:&quot;Hải Phòng&quot;}">
                        Hải Phòng
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a9&quot;,&quot;name&quot;:&quot;Cần Thơ&quot;}">
                        Cần Thơ
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f19d&quot;,&quot;name&quot;:&quot;An Giang&quot;}">
                        An Giang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b6&quot;,&quot;name&quot;:&quot;Hải Dương&quot;}">
                        Hải Dương
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c0&quot;,&quot;name&quot;:&quot;Lâm Đồng&quot;}">
                        Lâm Đồng
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ac&quot;,&quot;name&quot;:&quot;Đắk Lắk&quot;}">
                        Đắk Lắk
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1da&quot;,&quot;name&quot;:&quot;Vĩnh Phúc&quot;}">
                        Vĩnh Phúc
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d3&quot;,&quot;name&quot;:&quot;Thái Nguyên&quot;}">
                        Thái Nguyên
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1aa&quot;,&quot;name&quot;:&quot;Cao Bằng&quot;}">
                        Cao Bằng
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1af&quot;,&quot;name&quot;:&quot;Đồng Nai&quot;}">
                        Đồng Nai
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d5&quot;,&quot;name&quot;:&quot;Thừa Thiên – Huế&quot;}">
                        Thừa Thiên – Huế
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c7&quot;,&quot;name&quot;:&quot;Ninh Thuận&quot;}">
                        Ninh Thuận
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1b1&quot;,&quot;name&quot;:&quot;Gia Lai&quot;}">
                        Gia Lai
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d8&quot;,&quot;name&quot;:&quot;Tuyên Quang&quot;}">
                        Tuyên Quang
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1bf&quot;,&quot;name&quot;:&quot;Lai Châu&quot;}">
                        Lai Châu
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c1&quot;,&quot;name&quot;:&quot;Lạng Sơn&quot;}">
                        Lạng Sơn
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d9&quot;,&quot;name&quot;:&quot;Vĩnh Long&quot;}">
                        Vĩnh Long
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1ba&quot;,&quot;name&quot;:&quot;Hòa Bình&quot;}">
                        Hòa Bình
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1bc&quot;,&quot;name&quot;:&quot;Khánh Hòa&quot;}">
                        Khánh Hòa
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c5&quot;,&quot;name&quot;:&quot;Nghệ An&quot;}">
                        Nghệ An
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1d2&quot;,&quot;name&quot;:&quot;Thái Bình&quot;}">
                        Thái Bình
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1a8&quot;,&quot;name&quot;:&quot;Cà Mau&quot;}">
                        Cà Mau
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1bb&quot;,&quot;name&quot;:&quot;Hưng Yên&quot;}">
                        Hưng Yên
                      </option>
                      <option value="{&quot;id&quot;:&quot;578c1c2c4bda02a85e93f1c3&quot;,&quot;name&quot;:&quot;Long An&quot;}">
                        Long An
                      </option>
                    </select>
                  </div>
                </div>
                <div className={styles['shipping-address__form-group___1dFdf']}>
                  <label htmlFor="district">Quận / Huyện</label>
                  <div
                    style={{ padding: '0px' }}
                    className={
                      styles['shipping-address__select-style___2czfE'] +
                      ' ' +
                      styles['shipping-address__form-control___pWwJC']
                    }
                  >
                    <select
                      style={{ height: 'calc(2.688rem + 2px)' }}
                      className={styles['shipping-address__form-control___pWwJC']}
                      name="district"
                      required
                    >
                      <option value>Chọn quận</option>
                    </select>
                  </div>
                </div>
                <div
                  className={styles['clearfix'] + ' ' + styles['text-input__form-group___2DnhG']}
                >
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="0978111000"
                    className={styles['text-input__form-control___3hVs1']}
                    defaultValue
                    required
                    maxLength={13}
                    pattern="^0[0-9]{9,12}$"
                  />
                  <small
                    className={
                      styles['text-input__form-text___1bYda'] +
                      ' ' +
                      styles['text-input__text-muted___2iML-']
                    }
                  >
                    Để xác nhận đơn hàng
                  </small>
                </div>
                <div className={styles['shipping-address__form-group___1dFdf']}>
                  <label
                    className={
                      styles['shipping-address__custom-control___3h9xG'] +
                      ' ' +
                      styles['shipping-address__custom-checkbox___1xHa2']
                    }
                  >
                    <input
                      style={{ marginRight: '5px', position: 'relative', top: '2px' }}
                      type="checkbox"
                      className={styles['shipping-address__custom-control-input___2CNFH']}
                      name="duplicateBilling"
                      defaultValue="on"
                    />
                    <span
                      className={styles['shipping-address__custom-control-description___3LfCP']}
                    >
                      Sử dụng địa chỉ này trên hóa đơn
                    </span>
                  </label>
                </div>
              </fieldset>
              <button
                className={
                  styles['shipping-address__btn___23gq5'] +
                  ' ' +
                  styles['shipping-address__btn-primary___1t_Pj'] +
                  ' ' +
                  styles['shipping-address__btn-save___3RZIn']
                }
                type="submit"
                value="submit"
              >
                Lưu &amp; Tiếp tục
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
