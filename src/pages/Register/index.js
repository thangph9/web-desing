/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-empty */
/* eslint-disable prefer-destructuring */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-var */
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
import { Link, Redirect } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import { connect } from 'dva';
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
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import FacebookLogin from 'react-facebook-login';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './index.less';

const InputGroup = Input.Group;
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const DELAY = 1500;
let rerenders = 0;
let recaptchaInstance;
const MESSAGE = {
  USER_NOT_MATCH: 'Tài khoản hoặc mật khẩu không đúng',
  USER_NOT_FOUND: 'Tài khoản này không tồn tại!',
  USER_HAD_BANNED: 'Tài khoản đang bị khoá',
  SYSTEM_BUSY: 'Hệ thống bận!',
  PAYMENT_NOT_SEND_OTP: 'Bạn chưa nhắn tin xác thực! Hãy nhắn tin tới tổng đài.',
  PAYMENT_OTP_OK: 'Xác thực thành công!',
  PAYMENT_OTP_WRONG: 'OTP không chính xác.',
  USER_EXISTS: 'Tài khoản đã được sử dụng',
  CONFIRM_TOKEN: 'Vui lòng kiểm tra Email của bạn để xác thực tài khoản',
};
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

@connect(({ loading, user }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  user,
}))
@Form.create()
class Register extends PureComponent {
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
      revisible: false,
      help: '',
      rehelp: '',
      prefix: '+84',
      rule: 'member',
      validateStt: '',
      help_pass: '',
      help_otp: '',
      click: false,
      stt_otp: '',
    };
    this._reCaptchaRef = React.createRef();
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentDidMount() {}
  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, user } = this.props;
    var email = this.props.form.getFieldValue('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return;
    }
    this.props.form.validateFields((err, values) => {
      // if (this.state.value.length > 0) {
      if (values.password == values.repassword) {
        if (!err && user.check.length == 0) {
          values['captcha'] = this.state.value;
          this.props.dispatch({
            type: 'user/register',
            payload: values,
          });
          localStorage.setItem('accountRegister', JSON.stringify(values));
        } else if (user.check.length > 0) {
          this.props.form.setFields({
            email: {
              value: values.email,
              errors: [new Error(user.check)],
            },
          });
        }
      }

      // }
    });
    this.setState({
      load: !this.state.load,
      click: false,
    });
    this.resetRecaptcha();
  };

  resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!value) {
      this.setState({
        help: 'Nhập mật khẩu！',
        visible: !!value,
      });
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

  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
  };
  handleExpired = () => {
    this.setState({ expired: 'true' });
  };
  handleExpired2 = () => {
    this.setState({ expired2: 'true' });
  };
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
      loadPage: !this.state.loadPage,
    });
  }
  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
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

  validEmailSync = e => {
    const { form, dispatch, user } = this.props;
    var email = e.target.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      this.props.form.setFields({
        email: {
          value: email,
          errors: [new Error('Sai định dạng Email! Vui lòng kiểm tra lại')],
        },
      });
    } else {
      form.validateFields(['email'], (errors, values) => {
        if (!errors) {
          this.props.dispatch({
            type: 'user/check',
            payload: values,
          });
        }
      });
    }
  };
  handleChangeOTP() {
    this.setState({
      help_otp: '',
      stt_otp: '',
    });
  }
  validRepassword() {
    var { form } = this.props;
    const password = form.getFieldValue('password');
    const repassword = form.getFieldValue('repassword');
    if (password != repassword) {
      this.props.form.setFields({
        repassword: {
          value: repassword,
          errors: [new Error('Nhập lại mật khẩu sai vui lòng kiểm tra lại!')],
        },
      });
    }
  }
  render() {
    const { count, prefix, help, visible, rule, revisible, rehelp } = this.state;
    var { user } = this.props;
    var validateStt = '';
    var help_pass = '';
    if (user.register) {
      if (user.register.status == 'error') {
        validateStt = 'error';
        help_pass = user.register.message;
      } else {
        help_pass = user.register.message;
      }
    }
    const meta = {
      title: 'Đăng ký',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };

    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    if (user.register.status == 'ok') {
      return <Redirect to={`/login`} />;
    }
    return (
      <DocumentMeta {...meta}>
        <div className={styles['container__container___1fvX0']}>
          <div
            className={
              styles['auth__col-lg-6___29O3w'] +
              ' ' +
              styles['auth__col-md-8___1asFn'] +
              ' ' +
              styles['register__register___BuPHZ']
            }
          >
            <h3 className={styles['auth__title___2xOb7']}>Tạo tài khoản</h3>
            <div className={styles['container__container___1fvX0']}>
              <div className={styles['register-form__registerContainer___2J6fH']}>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem>
                    {getFieldDecorator('fullname', {
                      rules: [
                        {
                          required: true,
                          message: 'Nhập họ tên',
                        },
                      ],
                    })(<Input size="large" placeholder="Họ tên" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          required: true,

                          message: 'Sai định dạng email',
                        },
                      ],
                    })(
                      <Input
                        type="text"
                        size="large"
                        placeholder="Email"
                        onBlur={e => this.validEmailSync(e)}
                      />
                    )}
                  </FormItem>
                  <FormItem help={help}>
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
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            validator: this.checkPassword,
                          },
                        ],
                      })(<Input size="large" type="password" placeholder="Mật khẩu" />)}
                    </Popover>
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('repassword', {
                      rules: [
                        {
                          required: true,
                          message: 'Nhập lại mật khẩu!',
                        },
                      ],
                    })(
                      <Input
                        onBlur={e => this.validRepassword(e)}
                        size="large"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('phone', {
                      rules: [
                        {
                          required: true,
                          message: 'Yêu cầu nhập số điện thoại',
                        },
                        {
                          pattern: /\d{9}$/,
                          message: 'Nhập sai định dạng hoặc chưa đủ chữ số！',
                        },
                      ],
                    })(<Input size="large" placeholder="Số điện thoại" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('address', {
                      rules: [
                        {
                          required: true,
                          message: 'Yêu cầu nhập địa chỉ',
                        },
                      ],
                    })(<Input size="large" placeholder="Địa chỉ" />)}
                  </FormItem>

                  <FormItem>
                    <ReCAPTCHA
                      ref={e => (recaptchaInstance = e)}
                      sitekey="6Ld1534UAAAAAPy1pvn0YcCH3WUiKqpbM1tHrmRO"
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem
                    validateStatus={
                      this.state.click == false ? validateStt : this.state.validateStt
                    }
                    help={this.state.click == false ? help_pass : this.state.help_pass}
                  />
                  <FormItem>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Đăng ký
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}

export default Register;
