/* eslint-disable jsx-a11y/img-redundant-alt */
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
import styles from './index.less';

@connect(({ loading, user }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  user,
}))
@Form.create()
class AboutDeal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      indexMore: undefined,
    };
  }

  componentDidMount() {}
  handleClickShipping() {
    this.setState({
      shipping: !this.state.shipping,
    });
  }
  handleClickSeeMore(index) {
    this.setState({
      indexMore: index,
    });
  }
  handleClickHide() {
    this.setState({
      indexMore: undefined,
    });
  }
  render() {
    const meta = {
      title: 'Thông tin mua hộ',
      description: null,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '123order,order',
        },
      },
    };
    console.log(this.state.indexMore);
    return (
      <DocumentMeta {...meta}>
        <div id={styles['boxWeshop']} className={styles['boxWeshop'] + ' ' + styles['clearfix']}>
          <div className={styles['container']}>
            <h3 className={styles['text-uppercase'] + ' ' + styles['title-box']}>
              <strong>Title</strong>
            </h3>
            <div
              className={
                styles['divider'] + ' ' + styles['divider-center'] + ' ' + styles['divider-dark']
              }
            />
            <div className={styles['row']}>
              <div
                className={
                  styles['col-sm-6'] +
                  ' ' +
                  styles['box-images'] +
                  ' ' +
                  styles['to-animate'] +
                  ' ' +
                  styles['fadeInUp'] +
                  ' ' +
                  styles['animated']
                }
              >
                <img src="https://weshop.com.vn/images/landing/landing-new/images01.png" />
              </div>
              <div
                className={
                  styles['col-sm-6'] +
                  ' ' +
                  styles['to-animate'] +
                  ' ' +
                  styles['fadeInUp'] +
                  ' ' +
                  styles['animated']
                }
              >
                <div className={styles['row-text']}>
                  <strong>Title-mini</strong>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="boxBenefit" className={styles['boxbenefit']}>
          <div className={styles['container']}>
            <div className={styles['info-boxbenefit']}>
              <h3 className={styles['text-uppercase'] + ' ' + styles['title-box']}>
                <strong>Deal liên quan</strong>
              </h3>
              <div
                className={
                  styles['divider'] + ' ' + styles['divider-center'] + ' ' + styles['divider-dark']
                }
              />
              <div className={styles['row']}>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    style={{ clear: 'both' }}
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div
                      style={{ width: '30%', float: 'left' }}
                      className={styles['box-container']}
                    >
                      <img
                        style={{ width: '100%', height: '100%' }}
                        alt="image"
                        src="/images/f/11ad01d2fcda4afba34c70abcb38efd3"
                      />
                    </div>
                    <div style={{ width: '65%', float: 'right' }}>
                      <h5 className={styles['heading-uppercase']}>
                        NHIỀU DỊCH VỤ GIÁ TRỊ GIA TĂNG
                      </h5>
                      <div
                        className={
                          styles['benefit-content-2'] + ' ' + styles['short-desc-eclipses']
                        }
                      >
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                        the Internet tend to repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words
                        etc.
                      </div>

                      <div className={styles['text-right']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}

export default AboutDeal;
