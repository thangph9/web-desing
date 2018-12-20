/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
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
import ReCAPTCHA from 'react-google-recaptcha';
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
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const DELAY = 1500;
let rerenders = 0;
let recaptchaInstance;
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
class ChangePassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirectOtp: '',
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
      click: false,
    };
  }

  componentDidMount() {}
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      click: false,
    });
    this.props.form.validateFields((err, values) => {
      if (values.newpassword == values.repassword) {
        if (!err) {
          this.props.dispatch({
            type: 'user/changepass',
            payload: {
              password: values.password,
              newpassword: values.newpassword,
            },
          });
        }
      } else {
        this.props.form.setFields({
          repassword: {
            value: values.repassword,
            errors: [new Error('Nhập lại mật khẩu sai vui lòng kiểm tra lại!')],
          },
        });
      }
    });
  };
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
  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    this.setState({
      click: true,
    });
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
  resetRecaptcha = () => {
    recaptchaInstance.reset();
  };
  handleChangeCaptcha = value => {
    this.setState({ value });
  };
  CheckRepass() {
    var { form } = this.props;
    const password = form.getFieldValue('newpassword');
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
  handleChangePassword() {
    this.setState({
      click: true,
    });
  }
  render() {
    const { count, prefix, help, visible, rule } = this.state;
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    console.log(user);
    var validateStt = '';
    var help_pass = '';
    if (user.changepass.status == 'error') {
      validateStt = 'error';
      help_pass = user.changepass.message;
    } else {
      validateStt = '';
      help_pass = user.changepass.message;
    }
    const meta = {
      title: 'Quên mật khẩu',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };
    if (!localStorage.account) {
      return <Redirect to={`/login`} />;
    }
    if (user.changepass.status == 'ok') {
      return <Redirect to={`/accountinformation`} />;
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
            <h3 className={styles['auth__title___2xOb7']}>Thay đổi mật khẩu</h3>
            <div className={styles['container__container___1fvX0']}>
              <div className={styles['register-form__registerContainer___2J6fH']}>
                <Form onSubmit={this.handleSubmit}>
                  <FormItem>
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
                        onChange={() => this.handleChangePassword()}
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
                      {getFieldDecorator('newpassword', {
                        rules: [
                          {
                            validator: this.checkPassword,
                          },
                        ],
                      })(<Input size="large" type="password" placeholder="Mật khẩu mới" />)}
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
                        size="large"
                        type="password"
                        placeholder="Nhập lại mật khẩu mới"
                        onBlur={() => this.CheckRepass()}
                      />
                    )}
                  </FormItem>
                  <FormItem
                    validateStatus={
                      this.state.click == false ? validateStt : this.state.validateStt
                    }
                    help={this.state.click == false ? help_pass : this.state.help_pass}
                  />
                  <FormItem>
                    <Button block type="primary" htmlType="submit">
                      Thay đổi mật khẩu
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

export default ChangePassword;
