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
import { Link } from 'react-router-dom';
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
@connect(({ loading, user }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  user,
}))
@Form.create()
class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentDidMount() {}
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/register',
          payload: values,
        });
      }
    });
  };
  responseFacebook(res) {
    console.log(res);
  }
  render() {
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
                  <FacebookLogin
                    appId="275785029894237"
                    autoLoad={false}
                    textButton="Đăng nhập với Facebook"
                    language="vi_VN"
                    size="medium"
                    icon="fa-facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                  />
                  <FormItem label="Địa chỉ Email" className={styles['register-form__form___2s9YQ']}>
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập địa chỉ E-mail!',
                        },
                      ],
                    })(<Input type="email" />)}
                  </FormItem>
                  <FormItem label="Mật khẩu">
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập mật khẩu!',
                        },
                      ],
                    })(<Input type="password" />)}
                  </FormItem>
                  <FormItem label="Họ và tên">
                    {getFieldDecorator('fullname', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập họ tên của bạn!',
                        },
                      ],
                    })(<Input type="text" />)}
                  </FormItem>
                  <FormItem label="Tên đăng nhập">
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập tên đăng nhập!',
                        },
                      ],
                    })(<Input type="text" />)}
                  </FormItem>
                  <FormItem label="Địa chỉ">
                    {getFieldDecorator('address', {
                      rules: [
                        {
                          required: true,
                          message: 'Vui lòng nhập địa chỉ của bạn!',
                        },
                      ],
                    })(<Input type="text" />)}
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" block>
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
