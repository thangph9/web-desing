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
  List,
  Avatar,
} from 'antd';
import styles from '../index1.less';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
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
                      <Link className={styles['text-no-underline']} to={`/accountinformation`}>
                        Thông tin tài khoản
                      </Link>
                    ) : (
                      <Link className={styles['text-no-underline']} to={`/accountinformation`}>
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
                </div>
              </div>
            </div>
            <div className={styles['jsx-3523037850'] + ' ' + styles['col-md-9']}>
              <div className={styles['jsx-1497762630'] + ' ' + styles['orders']}>
                <h1
                  style={{ textAlign: 'center' }}
                  className={styles['jsx-1497762630'] + ' ' + styles['title-account']}
                >
                  Deal sốc hôm nay
                </h1>
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <a style={{ color: 'rgb(22, 172, 207)' }}>edit</a>,
                          <a style={{ color: 'rgb(22, 172, 207)' }}>more</a>,
                        ]}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              style={{ width: '48px', height: '48px' }}
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
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
