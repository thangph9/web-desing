/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable vars-on-top */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
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

const Search = Input.Search;
const Option = Select.Option;

@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class DealInDay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataDeal: [],
      start: '',
      end: '',
    };
  }
  handleSearch(e) {
    console.log(e);
  }
  handleChangeSort(value) {
    console.log(value);
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/getdeal',
      payload: {},
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.setState({
        dataDeal: nextProps.user.getdealsock.data,
      });
    }
  }
  formatTime(value) {
    var timeCreate = new Date(value);
    var stringTime =
      timeCreate.getDate() +
      '/' +
      Number(timeCreate.getMonth() + 1) +
      '/' +
      timeCreate.getFullYear();
    return stringTime;
  }
  statusTime(value) {
    var dateNow = new Date().getTime();
    var dateEnd = Date.parse(value);
    if (dateNow > dateEnd) {
      return 'Đã hết hạn';
    }
    return 'Vẫn đang diễn ra';
  }
  render() {
    var { dataDeal, start, end } = this.state;
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
                        className={styles['text-no-underline']}
                        to={`/account/accountinformation`}
                      >
                        Thông tin tài khoản
                      </Link>
                    ) : (
                      <Link
                        className={styles['text-no-underline']}
                        to={`/account/accountinformation`}
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
                      to={`/account/dealinday`}
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

                <div className={styles['row']}>
                  <div className={styles['col-8']}>
                    <Search placeholder="Tìm kiếm" onSearch={value => this.handleSearch(value)} />
                  </div>
                  <div className={styles['col-4'] + ' ' + styles['text-right']}>
                    <Select defaultValue="Thấp đến cao" onChange={e => this.handleChangeSort(e)}>
                      <Option value="lowtohigh">Thấp đến cao</Option>
                      <Option value="hightolow">Cao đến thấp</Option>
                      <Option value="coomingend">Sắp kết thúc</Option>
                      <Option value="incipient">Mới bắt đầu</Option>
                    </Select>
                  </div>
                </div>
                <br />
                <br />
                <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                  <List
                    itemLayout="vertical"
                    dataSource={dataDeal}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div style={{ width: '200px' }}>
                              <img
                                style={{ width: '100%', height: '100%' }}
                                src={item.image ? `/images/f/${item.image.replace(/\-/g, '')}` : ''}
                                alt="image"
                              />
                            </div>
                          }
                          title={
                            <Link to={`/deal-about`} className={styles['title-eclipsis']}>
                              {item.title}
                            </Link>
                          }
                          description={
                            <div style={{ position: 'relative' }}>
                              <div className={styles['short-desc-eclipses']}>{item.short_desc}</div>
                              <br />
                              <span>Ngày bắt đầu: {this.formatTime(item.expired.start)} </span>
                              <br />
                              <span>Ngày Kết thúc: {this.formatTime(item.expired.end)} </span>
                              <br />
                              <div className={styles['list-extra']}>
                                <span>{this.statusTime(item.expired.end)}</span>
                              </div>
                            </div>
                          }
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

export default DealInDay;
