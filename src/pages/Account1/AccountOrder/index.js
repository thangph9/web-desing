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
class AccountOrder extends PureComponent {
  render() {
    var root = document.getElementById('root');
    return (
      <div className={styles['jsx-157584619'] + ' ' + styles['content']}>
        <div className={styles['jsx-3523037850'] + ' ' + styles['container']}>
          <div className={styles['jsx-3523037850'] + ' ' + styles['row']}>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-3']}>
              <div>
                <div className={styles['jsx-2268964773'] + ' ' + styles['horizontal']}>
                  <div data-tab-idx={0} className={styles['tab-item-wrap']}>
                    {root.clientWidth && root.clientWidth > 768 ? (
                      <Link
                        style={{ color: 'rgb(22, 172, 207)' }}
                        className={styles['text-no-underline']}
                        to={`/accountinformation`}
                      >
                        Thông tin tài khoản
                      </Link>
                    ) : (
                      <Link
                        style={{ color: 'rgb(22, 172, 207)' }}
                        className={styles['text-no-underline']}
                        to={`/accountinformation`}
                      >
                        Tài khoản
                      </Link>
                    )}
                  </div>
                  <div
                    data-tab-idx={1}
                    className={styles['tab-item-wrap'] + ' ' + styles['active']}
                  >
                    <Link
                      style={{ color: 'rgb(22, 172, 207)' }}
                      className={styles['text-no-underline']}
                      to={`/order`}
                    >
                      Deal sốc
                    </Link>
                  </div>
                  <div data-tab-idx={2} className={styles['tab-item-wrap']}>
                    <Link className={styles['text-no-underline']} to={`accountaddress`}>
                      Mua Hộ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-9']}>
              <div className={styles['jsx-1497762630'] + ' ' + styles['orders']}>
                <h1 className={styles['jsx-1497762630'] + ' ' + styles['title-account']}>
                  Deal sốc hôm nay
                </h1>
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <div className={styles['row'] + ' ' + styles['mb-2']}>
                    <div className={styles['col-4']}>
                      <a href="http://cafef.vn/bo-chinh-tri-sap-ban-hanh-nghi-quyet-moi-cho-da-nang-20181218094314354.chn">
                        <img
                          style={{ width: '100%' }}
                          src="https://123order.vn/images/f/b855a9f2c2d34bf4a8e8466d910dd9a7"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className={styles['col-8']}>
                      <h4 className={styles['h4-title']} style={{ marginBottom: '2px' }}>
                        <a
                          className={styles['title-deal']}
                          href="http://cafef.vn/bo-chinh-tri-sap-ban-hanh-nghi-quyet-moi-cho-da-nang-20181218094314354.chn"
                        >
                          Bộ Chính trị sắp ban hành Nghị quyết mới cho Đà Nẵng
                        </a>
                      </h4>
                      <p style={{ marginBottom: '8px' }}>
                        <span style={{ color: 'gray' }} href="thoi-su.chn" title="Thời sự">
                          Thời gian còn lại:
                        </span>
                        <span className={styles['ml-1']}>27 phút trước</span>
                      </p>
                      <p style={{ marginBottom: '8px' }} className={styles['text-content-deal']}>
                        Theo Bí thư Thành ủy Đà Nẵng Trương Quang Nghĩa, Bộ Chính trị thống nhất ban
                        Theo Bí thư Thành ủy Đà Nẵng Trương Quang Nghĩa, Bộ Chính trị thống nhất ban
                        hTheo Bí thư Thành ủy Đà Nẵng Trương Quang Nghĩa, Bộ Chính trị thống nhất
                        ban hTheo Bí thư Thành ủy Đà Nẵng Trương Quang Nghĩa, Bộ Chính trị thống
                        nhất ban hhành một nghị quyết mới về xây dựng và phát triển Đà Nẵng thay thế
                        Nghị quyết số 33.
                      </p>
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

export default AccountOrder;
