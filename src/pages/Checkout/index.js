/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
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

import FacebookLogin from 'react-facebook-login';
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

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

let rerenders = 0;
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class LoginItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      load: false,
      fireRerender: rerenders,
      callback: 'not fired',
      value: '',
      loadpage: false,
      expired: 'false',
      click: false,
      help_pass: '',
      validateStt: '',
      loginEmai: false,
    };

  }

  handleChange = value => {
    this.setState({ value });
  };
  handleClickLoginEmail() {
    this.setState({
      loginEmai: true,
    });
  }
  handleSubmitEmail = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/login',
          payload: values,
        });
      }
    });
    this.setState({
      loadpage: !this.state.load,
      click: false,
    });

  };
  handleChangeEmail() {
    this.setState({
      click: true,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    var { user } = this.props;
    var validateStt = '';
    var help_pass = '';
    if (user.login.status == 'error') {
      validateStt = 'error';
      help_pass = user.login.message;
    } else {
      validateStt = '';
      help_pass = '';
    }
    if (this.state.loginEmai == false) {
      return (
        <Button
          onClick={() => this.handleClickLoginEmail()}
          type="primary"
          htmlType="submit"
          size="large"
          block
        >
          Đăng nhập bằng email
        </Button>
      );
    }
    return (
      <Form onSubmit={e => this.handleSubmitEmail(e)}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              {
                type: 'email',
                message: 'Sai định dạng email',
              },
            ],
          })(
            <Input
              size="large"
              placeholder="Tên đăng nhập"
              onChange={() => this.handleChangeEmail()}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ],
          })(<Input type="password" size="large" placeholder="Mật khẩu" />)}
        </FormItem>
        <Link to={`/forgotpassword`} style={{ position: 'absolute', right: '45px' }}>
          Quên mật khẩu?
        </Link>
        <FormItem
          validateStatus={this.state.click == false ? validateStt : this.state.validateStt}
          help={this.state.click == false ? help_pass : this.state.help_pass}
        />
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" block>
            Đăng nhập
          </Button>
        </FormItem>
      </Form>
    );
  }
}
@connect(({ list, user }) => ({
  list,
  user,
}))
@Form.create()
class Checkout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      load: false,
      fireRerender: rerenders,
      callback: 'not fired',
      value: '',
      loadpage: false,
      expired: 'false',
      click: false,
      help_pass: '',
      validateStt: '',
      loginEmai: false,
    };
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('Information', JSON.stringify(values));
      }
    });
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'list/modal',
      payload: false,
    });
  }
  responseFacebook(res) {
    const { dispatch } = this.props;
    if (res) {
      const { id, email, name, accessToken, picture } = res;
      let dataObject = {
        accessToken,
        fullname: name,
        picture: picture.data ? picture.data.url : null,
        bypage: 'facebook',
      };
      dispatch({
        type: 'user/registerfb',
        payload: {
          with3rd: {
            id,
            email,
            dataObject,
          },
        },
      });
    }
    this.setState({
      loadpage: !this.state.load,
    });
  }

  render() {
    const Information = JSON.parse(localStorage.getItem('Information'));
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '84',
    })(
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    );
    if (Information || localStorage.account) {
      return <Redirect to="/checkout/paycomplete" />;
    } else {
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
                <i className={styles['false'] + ' ' + styles['process-indicator__icon___G4w8B']}>
                  {' '}
                </i>
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
            <LoginItem />
            <div className={styles['continue__separator___3gsgK']}>
              <hr />
            </div>
            <h3 className={styles['continue__title___24Yiu']}>Khách hàng mới?</h3>
            <p className={styles['continue__text-desc___ukUpu']}>
              Bạn có thể mua hàng không cần đăng ký, vui lòng nhập thông tin bên dưới để tiếp tục:
            </p>
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="Địa chỉ E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'Địa chỉ E-mail chưa hợp lệ!',
                    },
                    {
                      required: true,
                      message: 'Vui long nhập địa chỉ E-mail!',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Địa chỉ">
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập địa chỉ của bạn!',
                    },
                  ],
                })(<Input type="text" />)}
              </FormItem>
              <FormItem {...formItemLayout} label={<span>Họ và tên đệm&nbsp;</span>}>
                {getFieldDecorator('firstname', {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập họ và tên đệm của bạn!',
                      whitespace: true,
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem {...formItemLayout} label={<span>Tên&nbsp;</span>}>
                {getFieldDecorator('lastname', {
                  rules: [
                    { required: true, message: 'Vui lòng nhập tên của bạn!', whitespace: true },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Số điện thoại">
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Vui lòng nhập số điện thoại!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" size="large" block>
                  Xác nhận thanh toán
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      );
    }
  }
}

export default Checkout;
