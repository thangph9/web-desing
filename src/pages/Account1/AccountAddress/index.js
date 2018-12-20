/* eslint-disable vars-on-top */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-nested-ternary */
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
  message,
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

const { TextArea } = Input;

const FormItem = Form.Item;
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class ChangeHelpBuy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addItems: false,
      editProduct: false,
    };
  }
  handleSubmitChange = (e, link, i) => {
    e.preventDefault();
    this.setState({
      [link]: !this.state[link],
    });
    var { user } = this.props;
    if (this.props.form.getFieldValue('count') && this.props.form.getFieldValue('count') < 1) {
      message.error('Số lượng không hợp lệ!');
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var valueChange = {};
        valueChange.link = user.gethelpbuy[i].link;
        valueChange.name = values.name ? values.name : user.gethelpbuy[i].nameproduct;
        valueChange.total = values.count ? values.count : user.gethelpbuy[i].total;
        valueChange.note = values.note ? values.note : user.gethelpbuy[i].note;
        this.props.dispatch({
          type: 'user/sethelpbuy',
          payload: valueChange,
        });
      }
    });
    setTimeout(() => {
      this.props.dispatch({
        type: 'user/gethelpbuy',
      });
    }, 500);
  };
  handleClickEditProduct(link) {
    this.setState({
      [link]: !this.state[link],
    });
  }
  handleClickCancel(link) {
    this.setState({
      [link]: !this.state[link],
    });
  }
  handleCliCkRemoveProduct(link) {
    this.props.dispatch({
      type: 'user/deletehelpbuy',
      payload: {
        link,
      },
    });
    setTimeout(() => {
      this.props.dispatch({
        type: 'user/gethelpbuy',
      });
    }, 500);
  }
  render() {
    var { v, i } = this.props;
    const { getFieldDecorator } = this.props.form;
    var root = document.getElementById('root');
    var { user } = this.props;
    if (!this.state[v.link]) {
      return (
        <div className={styles['jsx-3824923981']}>
          <h4 className={styles['jsx-3824923981']}>{v.nameproduct}</h4>
          <span className={styles['jsx-3824923981']}>
            <span
              onClick={() => this.handleClickEditProduct(v.link)}
              className={styles['link-style']}
            >
              Chi tiết - Chỉnh sửa
            </span>
            <span
              style={{ marginLeft: '5px', marginRight: '5px' }}
              className={styles['link-style']}
            >
              |
            </span>
            <span
              onClick={() => this.handleCliCkRemoveProduct(v.link)}
              className={styles['link-style']}
            >
              Xoá
            </span>
          </span>
        </div>
      );
    } else {
      return (
        <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
          <Form
            onSubmit={e => this.handleSubmitChange(e, v.link, i)}
            style={{
              fontSize: '16px',
              fontWeight: 400,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif',
            }}
          >
            <div className={styles['jsx-4204020708']}>
              <div className={styles['jsx-3824923981']}>
                <h4 className={styles['jsx-3824923981']}>Thông tin sản phẩm</h4>
                <span className={styles['jsx-3824923981']}>
                  <span className={styles['link-style']}>
                    <Button
                      style={{
                        border: 'none',
                        backgroundColor: '#fff',
                        boxShadow: 'none',
                        padding: '0px',
                      }}
                      htmlType="submit"
                      className={styles['link-style']}
                    >
                      Hoàn tất
                    </Button>
                  </span>
                  <span
                    style={{ marginLeft: '5px', marginRight: '5px' }}
                    className={styles['link-style']}
                  >
                    |
                  </span>
                  <span
                    onClick={() => this.handleClickCancel(v.link)}
                    className={styles['link-style']}
                  >
                    <Button
                      style={{
                        border: 'none',
                        backgroundColor: '#fff',
                        boxShadow: 'none',
                        padding: '0px',
                      }}
                      className={styles['link-style']}
                    >
                      Hủy
                    </Button>
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['row'] + ' ' + styles['mb-2']}>
              <div style={{ lineHeight: '39px' }} className={styles['col-4']}>
                Tên sản phẩm
              </div>
              <div
                className={
                  styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                }
              >
                <FormItem style={{ padding: 0, margin: 0 }}>
                  {getFieldDecorator('name', {})(
                    <Input style={{ width: '50%' }} size="small" placeholder={v.nameproduct} />
                  )}
                </FormItem>
              </div>
            </div>
            <div className={styles['row'] + ' ' + styles['mb-2']}>
              <div className={styles['col-4']}>Link sản phẩm</div>
              <div
                className={
                  styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                }
              >
                {v.link}
              </div>
            </div>
            <div className={styles['row'] + ' ' + styles['mb-2']}>
              <div style={{ lineHeight: '39px' }} className={styles['col-4']}>
                Số lượng
              </div>
              <div
                className={
                  styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                }
              >
                <FormItem style={{ padding: 0, margin: 0 }}>
                  {getFieldDecorator('count', {})(
                    <Input
                      style={{ width: '50%' }}
                      size="small"
                      type="number"
                      placeholder={v.total}
                    />
                  )}
                </FormItem>
              </div>
            </div>
            <div className={styles['row'] + ' ' + styles['mb-2']}>
              <div style={{ lineHeight: '73px' }} className={styles['col-4']}>
                Ghi chú
              </div>
              <div
                className={
                  styles['col-8'] + ' ' + styles['text-right'] + ' ' + styles['text-truncate']
                }
              >
                <FormItem style={{ padding: 0, margin: 0 }}>
                  {getFieldDecorator('note', {})(
                    <TextArea style={{ width: '50%' }} placeholder={v.note} rows={3} />
                  )}
                </FormItem>
              </div>
            </div>
          </Form>
        </div>
      );
    }
  }
}
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class AccountAddress extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addItems: false,
      editProduct: false,
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/gethelpbuy',
    });
  }

  handleClickAddItem() {
    this.setState({
      addItems: !this.state.addItems,
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.form.getFieldValue('count') && this.props.form.getFieldValue('count') < 1) {
      message.error('Số lượng không hợp lệ!');
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/addhelpbuy',
          payload: values,
        });
      }
    });
    setTimeout(() => {
      this.props.dispatch({
        type: 'user/gethelpbuy',
      });
    }, 500);
    setTimeout(() => {
      this.setState({
        addItems: false,
      });
    }, 1000);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    var { user } = this.props;
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
                  <div data-tab-idx={1} className={styles['tab-item-wrap']}>
                    <Link className={styles['text-no-underline']} to={`/order`}>
                      Deal sốc
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

                {this.state.addItems ? (
                  <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                      {getFieldDecorator('name', {
                        rules: [
                          {
                            required: true,
                            message: 'Vui lòng nhập tên sản phẩm!',
                          },
                        ],
                      })(<Input size="large" placeholder="Tên sản phẩm" />)}
                    </FormItem>
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
                      {getFieldDecorator('count', {
                        rules: [
                          {
                            required: true,
                            message: 'Vui lòng nhập số lượng sản phẩm!',
                          },
                        ],
                      })(<Input size="large" type="number" placeholder="Số lượng" />)}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('note', {
                        rules: [{}],
                      })(<TextArea placeholder="Ghi chú" rows={4} />)}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" block htmlType="submit" size="large">
                        Yêu cầu
                      </Button>
                    </FormItem>
                    <FormItem>
                      <Button onClick={() => this.handleClickAddItem()} block size="large">
                        Hủy
                      </Button>
                    </FormItem>
                  </Form>
                ) : (
                  <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                    <div className={styles['jsx-4204020708']}>
                      {user.gethelpbuy.length > 0 ? (
                        user.gethelpbuy.map((v, i) => {
                          return <ChangeHelpBuy key={i} v={v} i={i} />;
                        })
                      ) : (
                        <div className={styles['jsx-3824923981']}>
                          <h2 className={styles['jsx-3824923981']}>Bạn có sản phẩm nào</h2>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {!this.state.addItems && this.state.editProduct == false ? (
                  <div className={styles['jsx-4204020708']}>
                    <div className={styles['jsx-3824923981']}>
                      <span className={styles['jsx-3824923981']}>
                        <span
                          onClick={() => this.handleClickAddItem()}
                          className={styles['link-style']}
                        >
                          Thêm sản phẩm
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountAddress;
