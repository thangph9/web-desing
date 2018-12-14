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
const DELAY = 1500;
let rerenders = 0;
let recaptchaInstance;
@connect(({ loading, user }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  user,
}))
@Form.create()
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      fireRerender: rerenders,
      callback: 'not fired',
      value: '',
      loadpage: false,
      expired: 'false',
      click: false,
      help_pass: '',
      validateStt: '',
    };
    this._reCaptchaRef = React.createRef();
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    if (sessionStorage.email) sessionStorage.removeItem('email');
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && this.state.value.leng > 0) {
        values['captcha'] = this.state.value;
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
    this.resetRecaptcha();
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
      loadpage: !this.state.load,
    });
  }
  handleChangeEmail() {
    this.setState({
      click: true,
    });
  }
  resetRecaptcha = () => {
    recaptchaInstance.reset();
  };
  render() {
    const meta = {
      title: 'Đăng Nhập',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };
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
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    if (sessionStorage.account) {
      var obj = JSON.parse(sessionStorage.account);
    }

    if (sessionStorage.account) {
      return <Redirect to={`/`} />;
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
            <h3 className={styles['auth__title___2xOb7']}>Đăng nhập</h3>
            <div className={styles['container__container___1fvX0']}>
              <div className={styles['register-form__registerContainer___2J6fH']}>
                <Form onSubmit={this.handleSubmit}>
                  <FacebookLogin
                    appId="287241238592791"
                    autoLoad={false}
                    textButton="Đăng nhập với Facebook"
                    language="vi_VN"
                    size="medium"
                    icon="fa-facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                  />
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
                  <FormItem>
                    <ReCAPTCHA
                      ref={e => (recaptchaInstance = e)}
                      sitekey="6Ld1534UAAAAAPy1pvn0YcCH3WUiKqpbM1tHrmRO"
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <Link
                    to={`/forgotpassword`}
                    style={{ position: 'absolute', right: '45px', bottom: '10px' }}
                  >
                    Quên mật khẩu?
                  </Link>
                  <FormItem
                    validateStatus={
                      this.state.click == false ? validateStt : this.state.validateStt
                    }
                    help={this.state.click == false ? help_pass : this.state.help_pass}
                  />
                  <FormItem>
                    <Button type="primary" htmlType="submit" block>
                      Đăng nhập
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

export default Login;
