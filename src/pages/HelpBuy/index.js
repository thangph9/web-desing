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
import styles from './index1.less';

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
class HelpBuy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
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
      title: 'Mua hộ',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };
    return (
      <DocumentMeta {...meta}>
        <div className={styles['paste-link-head']}>
          <div className={styles['container'] + ' ' + styles['button-benefit']}>
            <a
              href="https://weshop.com.vn/about-us.html"
              className={styles['btn'] + ' ' + styles['btn-default']}
            >
              <span>12 lợi ích khi mua hàng tại 123order</span>
            </a>
          </div>
        </div>
        <div className={styles['price-request-box']} id="guide">
          <div className={styles['price-request'] + ' ' + styles['container']}>
            <div className={styles['title']}>Yêu cầu báo giá sản phẩm</div>
            <div className={styles['content']}>
              <div className={styles['step-box'] + ' ' + styles['row']}>
                <div className={styles['col-md-3'] + ' ' + styles['col-sm-6']}>
                  <div className={styles['step']}>
                    <div className={styles['img']}>
                      <img src="https://weshop.com.vn/images/pl-step1.png" />
                    </div>
                    <div className={styles['text']}>
                      <strong>Vào website của hãng</strong>
                      <span>Ví dụ: http://www.hm.com/</span>
                    </div>
                    <span className={styles['pl-link1']} />
                  </div>
                </div>
                <div className={styles['col-md-3'] + ' ' + styles['col-sm-6']}>
                  <div className={styles['step']}>
                    <div className={styles['img']}>
                      <img src="https://weshop.com.vn/images/pl-step2.png" />
                    </div>
                    <div className={styles['text']}>
                      <strong>Chọn sản phẩm cần mua</strong>
                      <span>và vào trang chi tiết sản phẩm cần mua</span>
                    </div>
                    <span className={styles['pl-link2']} />
                  </div>
                </div>
                <div className={styles['col-md-3'] + ' ' + styles['col-sm-6']}>
                  <div className={styles['step']}>
                    <div className={styles['img']}>
                      <img src="https://weshop.com.vn/images/pl-step3.png" />
                    </div>
                    <div className={styles['text']}>
                      <strong>Copy đường link của sản phẩm</strong>
                      <span>Ví dụ: http://www.hm.com/us/product/4...</span>
                    </div>
                    <span className={styles['pl-link1']} />
                  </div>
                </div>
                <div className={styles['col-md-3'] + ' ' + styles['col-sm-6']}>
                  <div className={styles['step']}>
                    <div className={styles['img']}>
                      <img src="https://weshop.com.vn/images/pl-step4.png" />
                    </div>
                    <div className={styles['text']}>
                      <strong> Dán link này vào thanh công cụ bên trên</strong>
                      <span>
                        Nhân viên chăm sóc khách hàng của chúng tôi sẽ gọi lại cho bạn sau 5 phút!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p>Paste product link you want to buy to get quote</p>
              <section id={styles['pastelink']}>
                <div style={{ width: '60%', margin: '0 auto' }} className={styles['container']}>
                  <div className={styles['row']}>
                    <div className={styles['col-xs-12']}>
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
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}

export default HelpBuy;
