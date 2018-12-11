/* eslint-disable no-unused-expressions */
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
import styles from '../index1.less';

@connect(({ list }) => ({
  list,
}))
@Form.create()
class AccountInformation extends PureComponent {
  render() {
    return (
      <div className={styles['jsx-157584619'] + ' ' + styles['content']}>
        <div className={styles['jsx-3523037850'] + ' ' + styles['container']}>
          <div className={styles['jsx-3523037850'] + ' ' + styles['row']}>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-3']}>
              <div>
                <div className={styles['jsx-2268964773']}>
                  <div
                    className={
                      styles['jsx-3706293093'] + ' ' + styles['tabs'] + ' ' + styles['vertical']
                    }
                  >
                    <div
                      data-tab-idx={0}
                      className={styles['tab-item-wrap'] + ' ' + styles['active']}
                    >
                      <Link className={styles['text-no-underline']} to={`/accountinformation`}>
                        Thông tin tài khoản
                      </Link>
                    </div>
                    <div data-tab-idx={1} className={styles['tab-item-wrap']}>
                      <Link className={styles['text-no-underline']} to={`/order`}>
                        Quản lý đơn hàng
                      </Link>
                    </div>
                    <div data-tab-idx={2} className={styles['tab-item-wrap']}>
                      <Link className={styles['text-no-underline']} to={`accountaddress`}>
                        Địa chỉ của tôi
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-9']}>
              <div className={styles['jsx-1038892047'] + ' ' + styles['user-account-settings']}>
                <h1 className={styles['jsx-1038892047'] + ' ' + styles['title-account']}>
                  Tài khoản
                </h1>
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <div className={styles['jsx-4204020708']}>
                    <div className={styles['jsx-3824923981']}>
                      <h4 className={styles['jsx-3824923981']}>Số dư</h4>
                      <span className={styles['jsx-3824923981']}>
                        <span style={{ fontSize: '20px' }}>
                          <span>0₫</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Bạn có thể dùng số dư này để thanh toán cho những đơn hàng sau</p>
                </div>
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <div className={styles['jsx-4204020708']}>
                    <div className={styles['jsx-3824923981']}>
                      <h4 className={styles['jsx-3824923981']}>Thông tin cá nhân</h4>
                      <span className={styles['jsx-3824923981']}>
                        <span className={styles['link-style']}>Sửa</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles['row'] + ' ' + styles['mb-2']}>
                    <div className={styles['col-4']}>Họ tên</div>
                    <div
                      className={
                        styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                      }
                    >
                      Trí Nguyễn
                    </div>
                  </div>
                  <div className={styles['row']}>
                    <div className={styles['col-4']}>Địa chỉ email</div>
                    <div
                      className={
                        styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                      }
                    >
                      trjvjp97@gmail.com
                    </div>
                  </div>
                </div>
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <div className={styles['jsx-4204020708']}>
                    <div className={styles['jsx-3824923981']}>
                      <h4 className={styles['jsx-3824923981']}>Mật khẩu</h4>
                      <span className={styles['jsx-3824923981']}>
                        <span className={styles['link-style']}>Đổi mật khẩu</span>
                      </span>
                    </div>
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

export default AccountInformation;
