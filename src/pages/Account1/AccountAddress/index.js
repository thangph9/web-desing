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

const FormItem = Form.Item;
@connect(({ list }) => ({
  list,
}))
@Form.create()
class AccountAddress extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles['jsx-157584619'] + ' ' + styles['content']}>
        <div className={styles['jsx-3523037850'] + ' ' + styles['container']}>
          <div className={styles['jsx-3523037850'] + ' ' + styles['row']}>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-3']}>
              <div>
                <div className={styles['jsx-2268964773'] + ' ' + styles['horizontal']}>
                  <div data-tab-idx={0} className={styles['tab-item-wrap']}>
                    <Link className={styles['text-no-underline']} to={`/accountinformation`}>
                      Thông tin tài khoản
                    </Link>
                  </div>
                  <div data-tab-idx={1} className={styles['tab-item-wrap']}>
                    <Link className={styles['text-no-underline']} to={`/order`}>
                      Deal sốc
                    </Link>
                  </div>
                  <div
                    data-tab-idx={2}
                    className={styles['tab-item-wrap'] + ' ' + styles['active']}
                  >
                    <Link
                      style={{ color: 'rgb(22, 172, 207)' }}
                      className={styles['text-no-underline']}
                      to={`accountaddress`}
                    >
                      Mua hộ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-9']}>
              <div className={styles['jsx-910575928'] + ' ' + styles['user-account-settings']}>
                <h1 className={styles['jsx-910575928'] + ' ' + styles['title-account']}>
                  YÊU CẦU BÁO GIÁ SẢN PHẨM
                </h1>
                <Form>
                  <FormItem>
                    {getFieldDecorator('link', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập link sản phẩm!',
                        },
                      ],
                    })(<Input size="large" placeholder="Link sản phẩm" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('number', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập số lượng sản phẩm!',
                        },
                      ],
                    })(<Input size="large" placeholder="Số lượng" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('note', {
                      rules: [{}],
                    })(<Input size="large" placeholder="Ghi chú" />)}
                  </FormItem>
                  <FormItem>
                    <Button block type="primary" htmlType="submit" size="large">
                      Yêu cầu
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountAddress;
