/* eslint-disable react/no-access-state-in-setstate */
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
  Popover,
  Progress,
} from 'antd';
import styles from '../index1.less';

let rerenders = 0;
const FormItem = Form.Item;
const passwordStatusMap = {
  ok: <div className={styles.success}>Mức độ：Mạnh</div>,
  pass: <div className={styles.warning}>Mức độ：Vừa</div>,
  poor: <div className={styles.error}>Mức độ：Yếu</div>,
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class AccountInformation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      fireRerender: rerenders,
      callback: 'not fired',
      value: '',
      loadpage: false,
      expired: 'false',
      count: 0,
      confirmDirty: false,
      visible: false,
      help: '',
      prefix: '84',
      rule: 'member',
      form_pass: false,
      validateStt: '',
      help_pass: '',
    };
  }
  validPass = e => {
    const { value } = e.target;
    const { form, dispatch, user } = this.props;

    form.validateFields(['password'], (errors, values) => {
      if (!errors) {
        this.props.dispatch({
          type: 'user/checkpass',
          payload: {
            username: JSON.parse(sessionStorage.getItem('account')).email,
            password: values.password,
          },
        });
      }
    });
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'user/info',
    });
  }
  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!value) {
      setTimeout(() => {
        this.setState({
          help: 'Nhập mật khẩu！',
          visible: !!value,
        });
      }, 1000);
      callback('error');
    } else {
      this.setState({
        help: '',
      });
      if (!visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const { form } = this.props;
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  };
  handleChange = value => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/changepass',
          payload: {
            password: values.password,
            newpassword: values.newpassword,
          },
        });
      }
    });
    setTimeout(() => {
      if (this.props.user.changepass.status == 'ok') {
        this.setState({
          validateStt: '',
          help_pass: this.props.user.changepass.message,
        });
      } else {
        this.setState({
          validateStt: 'error',
          help_pass: this.props.user.changepass.message,
        });
      }
    }, 1000);
  };
  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('newpassword');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };
  handleClickChangePass() {
    this.setState({
      validateStt: '',
      help_pass: '',
      visible: false,
      form_pass: !this.state.form_pass,
    });
  }
  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('newpassword');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };
  render() {
    const info = JSON.parse(sessionStorage.getItem('account'));
    const { count, prefix, help, visible, rule } = this.state;
    const { getFieldDecorator } = this.props.form;
    var { user } = this.props;
    var validateStt = '';
    var help_pass = '';
    if (info) {
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
                        <span className={styles['jsx-3824923981']} style={{ display: 'none' }}>
                          <span className={styles['link-style']}>Sửa</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles['row'] + ' ' + styles['mb-2']}>
                      <div className={styles['col-4']}>Họ tên</div>
                      <div
                        className={
                          styles['col-8'] +
                          ' ' +
                          styles['text-right'] +
                          ' ' +
                          styles['text-truncate']
                        }
                      >
                        {user.info.name && user.info.name}
                      </div>
                    </div>
                    <div className={styles['row']}>
                      <div className={styles['col-4']}>Địa chỉ email</div>
                      <div
                        className={
                          styles['col-8'] +
                          ' ' +
                          styles['text-right'] +
                          ' ' +
                          styles['text-truncate']
                        }
                      >
                        {user.info.username && user.info.username}
                      </div>
                    </div>
                  </div>
                  <div className={styles['jsx-4204020708'] + ' ' + styles['user-settigs-section']}>
                    <div className={styles['jsx-4204020708']}>
                      {user.registerfb && user.registerfb.by == 'facebook' ? (
                        ''
                      ) : (
                        <div className={styles['jsx-3824923981']}>
                          <h4 className={styles['jsx-3824923981']}>Mật khẩu</h4>
                          <span className={styles['jsx-3824923981']}>
                            <span
                              onClick={() => this.handleClickChangePass()}
                              className={styles['link-style']}
                            >
                              Đổi mật khẩu
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                    {this.state.form_pass == true ? (
                      <div className={styles['jsx-2403114882'] + ' ' + styles['form-box']}>
                        <div className={styles['jsx-2403114882'] + ' ' + styles['form-container']}>
                          <Form onSubmit={this.handleSubmit}>
                            <FormItem
                              style={{ width: '50%', color: 'red' }}
                              validateStatus={this.state.validateStt}
                              help={this.state.help_pass}
                            >
                              {getFieldDecorator('password', {
                                rules: [
                                  {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu hiện tại!',
                                  },
                                ],
                              })(
                                <Input
                                  size="large"
                                  placeholder="Mật khẩu hiện tại"
                                  type="password"
                                  onBlur={e => this.validPass(e, user.checkpass)}
                                />
                              )}
                            </FormItem>
                            <FormItem help={help} style={{ width: '50%' }}>
                              <Popover
                                content={
                                  <div style={{ padding: '4px 0' }}>
                                    {passwordStatusMap[this.getPasswordStatus()]}
                                    {this.renderPasswordProgress()}
                                    <div style={{ marginTop: 10 }}>Mât khẩu lớn hơn 6 ký tự</div>
                                  </div>
                                }
                                overlayStyle={{ width: 240 }}
                                placement="right"
                                visible={visible}
                              >
                                {getFieldDecorator('newpassword', {
                                  rules: [
                                    {
                                      validator: this.checkPassword,
                                    },
                                  ],
                                })(
                                  <Input size="large" type="password" placeholder="Mật khẩu mới" />
                                )}
                              </Popover>
                            </FormItem>
                            <FormItem>
                              <Button type="primary" htmlType="submit">
                                Thay đổi mật khẩu
                              </Button>

                              <Button
                                onClick={() => this.handleClickChangePass()}
                                type="default"
                                style={{ marginLeft: '20px', width: '100px' }}
                              >
                                Hủy
                              </Button>
                            </FormItem>
                          </Form>
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
        </div>
      );
    } else {
      return <Redirect to={`/`} />;
    }
  }
}

export default AccountInformation;
