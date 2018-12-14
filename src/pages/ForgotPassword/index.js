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
let recaptchaInstance;
const DELAY = 1500;
let rerenders = 0;
@connect(({ loading, user }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  user,
}))
@Form.create()
class ForgotPassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirectOtp: '',
      click: false,
      validateStt: '',
      help_pass: '',
      value: '',
    };
  }
  componentWillMount() {
    this.setState({
      click: true,
    });
  }
  resetRecaptcha = () => {
    recaptchaInstance.reset();
  };
  handleChangeCaptcha = value => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && this.state.value) {
        values['captcha'] = this.state.value;
        this.props.dispatch({
          type: 'user/forgot',
          payload: values,
        });
      }
      sessionStorage.email = JSON.stringify(values.username);
    });
    this.setState({
      redirectOtp: '/confirmotp',
      loadpage: !this.state.load,
    });
    setTimeout(() => {
      this.setState({
        click: false,
      });
    }, 5000);
    this.resetRecaptcha();
  };
  handleChangeEmail() {
    this.setState({
      click: true,
    });
  }
  render() {
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    var { user } = this.props;
    var validateStt = '';
    var help_pass = '';
    if (user.forgot.status == 'error') {
      validateStt = 'error';
      help_pass = user.forgot.message;
    } else {
      validateStt = '';
      help_pass = '';
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
    if (sessionStorage.account) {
      return <Redirect to={`/`} />;
    }
    if (sessionStorage.email && user.forgot.status == 'ok' && this.state.click == false) {
      return <Redirect to={`/confirmotp`} />;
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
            <h3 className={styles['auth__title___2xOb7']}>Quên mật khẩu</h3>
            <div className={styles['container__container___1fvX0']}>
              <div className={styles['register-form__registerContainer___2J6fH']}>
                <Form onSubmit={this.handleSubmit}>
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

                  <ReCAPTCHA
                    style={{ marginBottom: '15px' }}
                    ref={e => (recaptchaInstance = e)}
                    sitekey="6Ld1534UAAAAAPy1pvn0YcCH3WUiKqpbM1tHrmRO"
                    onChange={this.handleChangeCaptcha}
                  />

                  <FormItem
                    validateStatus={
                      this.state.click == false ? validateStt : this.state.validateStt
                    }
                    help={this.state.click == false ? help_pass : this.state.help_pass}
                  />
                  <FormItem>
                    <Button type="primary" htmlType="submit" block>
                      Lấy lại mật khẩu
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

export default ForgotPassword;
