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
class HelpAbout extends PureComponent {
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
            <h3
              className={
                styles['text-center'] + ' ' + styles['text-uppercase'] + ' ' + styles['title-box']
              }
            >
              <strong>Weshop</strong> là gì?
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
                  <strong>Thành lập từ 2014 </strong>
                  <p>
                    Weshop là website hàng đầu và đầu tiên cung cấp dịch vụ mua sắm xuyên biên giới
                    từ Mỹ, Trung Quốc, Hàn quốc về Đông Nam Á, trong đó có Việt Nam.
                  </p>
                </div>
                <div className={styles['row-text']}>
                  <strong>Nhiệm vụ của chúng tôi </strong>
                  <p>
                    Giúp mọi người tiêu dùng dù là cá nhân hay thương nhân mua hàng toàn cầu với chi
                    phí thấp, an toàn, dễ dàng nhất với dịch vụ đảm bảo, tin cậy, nhanh chóng.
                  </p>
                </div>
                <div className={styles['row-text']}>
                  <strong>Sứ mệnh của Weshop </strong>
                  <p>Giúp mọi cá nhân đều có thể nhập lẻ hàng hoá từ thế giới về Đông Nam Á.</p>
                </div>
                <div className={styles['row-text']}>
                  <strong>Weshop đã có mặt tại 7 quốc gia </strong>
                  <p>
                    Việt Nam, Malaysia, Indonesia, Philippines, Thailand và Singapore và 01 trung
                    tâm kho vận lớn từ Mỹ.
                  </p>
                </div>
                <div className={styles['row-text']}>
                  <strong>Weshop tự hào</strong>
                  <p>Vì đã nhận được sự tin cậy của 200.000 khách hàng trên toàn bộ khu vực.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={styles['service']} className={styles['boxservice'] + ' ' + styles['clearfix']}>
          <span className={styles['before']} />
          <div className={styles['container']}>
            <h3
              className={
                styles['text-center'] + ' ' + styles['text-uppercase'] + ' ' + styles['title-box']
              }
            >
              <strong>Dịch vụ</strong> mua hàng toàn cầu
            </h3>
            <div
              className={
                styles['divider'] + ' ' + styles['divider-center'] + ' ' + styles['divider-dark']
              }
            />
            <div className={styles['tab-service']}>
              <div className={styles['info-tab-service'] + ' ' + styles['text-center']}>
                <ul className={styles['nav'] + ' ' + styles['nav-tabs']} role="tablist">
                  <li
                    onClick={() => this.handleClickShipping()}
                    className={!this.state.shipping ? styles['active'] : ''}
                  >
                    <a href="#buynow" className={styles['buynow']} data-toggle="tab">
                      Giúp bạn mua hàng
                    </a>
                  </li>
                  <li
                    onClick={() => this.handleClickShipping()}
                    className={this.state.shipping ? styles['active'] : ''}
                  >
                    <a href="#shipping" className={styles['shipping']} data-toggle="tab">
                      Giúp bạn chuyển hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles['tab-content'] + ' ' + styles['boxWeshop-tab-content']}>
                <div
                  className={
                    !this.state.shipping
                      ? styles['tab-pane'] + ' ' + styles['active']
                      : styles['tab-pane']
                  }
                  id={styles['buynow']}
                >
                  <div className={styles['box-weshop']}>
                    <div className={styles['step'] + ' ' + styles['clearfix']}>
                      <ul>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['shop-icon'] + ' ' + styles['step-1']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 1</h3>
                              <p>
                                Bạn mua tại Weshop hoặc gửi link
                                <br />
                                cho Weshop &amp; thanh toán đơn hàng
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['shop-icon'] + ' ' + styles['step-2']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 2</h3>
                              <p>
                                Weshop mua hàng <br />
                                theo đơn hàng của bạn
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['shop-icon'] + ' ' + styles['step-3']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 3</h3>
                              <p>
                                Hàng về kho quốc tế, Weshop kiểm đếm,
                                <br />
                                gói lại ship về &amp; khai quan giúp bạn
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['shop-icon'] + ' ' + styles['step-4']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 4</h3>
                              <p>Giao hàng tới bạn</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.shipping
                      ? styles['tab-pane'] + ' ' + styles['active']
                      : styles['tab-pane']
                  }
                  id={styles['shipping']}
                >
                  <div className={styles['box-service']}>
                    <div className={styles['step']}>
                      <ul>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['ship-icon'] + ' ' + styles['step-1']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 1</h3>
                              <p>
                                Đăng ký tài khoản Weshop.
                                <br />
                                Có ngay địa chỉ riêng tại Mỹ
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['ship-icon'] + ' ' + styles['step-2']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 2</h3>
                              <p>
                                Tự mua hàng &amp;
                                <br />
                                ship tới địa chỉ Mỹ của bạn
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['ship-icon'] + ' ' + styles['step-3']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 3</h3>
                              <p>
                                Hàng về kho Mỹ.
                                <br />
                                Bạn vào tài khoản, duyệt chuyển hàng về
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className={styles['next']}>
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i className={styles['fa'] + ' ' + styles['fa-circle']} />
                          <i
                            className={
                              styles['fa'] + ' ' + styles['fa-circle'] + ' ' + styles['text-active']
                            }
                          />
                        </li>
                        <li className={styles['icon']}>
                          <div className={styles['img']}>
                            <span className={styles['ship-icon'] + ' ' + styles['step-4']} />
                          </div>
                          <div className={styles['text']}>
                            <div className={styles['text-step']}>
                              <h3>Bước 4</h3>
                              <p>
                                Weshop chuyển về
                                <br />
                                khai quan giao hàng tận tay
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={styles['after']} />
        </div>
        <div id="boxBenefit" className={styles['boxbenefit']}>
          <div className={styles['container']}>
            <div className={styles['info-boxbenefit']}>
              <h3
                className={
                  styles['text-center'] + ' ' + styles['text-uppercase'] + ' ' + styles['title-box']
                }
              >
                <strong>12 Lợi ích</strong> của Weshop
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
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>NHIỀU LỰA CHỌN TỪ TOÀN CẦU</h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>10 triệu sản phẩm Amazon hot nhất</li>
                            <li>
                              200 triệu sản phẩm eBay cập nhật realtime, hàng độc, hàng cũ (đến
                              Amazon cũng không thể có)
                            </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 1 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>
                                Mua sắm từ tất cả các website thương hiệu Mỹ được ưa thích (Victoria
                                Secret, Ralph Lauren, 6pm, Zappos ...)
                              </li>
                              <li>
                                Mua lẻ, buôn từ Trung quốc, Hàn quốc (Taobao, 1688, Dhgate,
                                Interpark, Gmarket...)
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 1 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(1)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon1']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>MUA HỜI, MUA RẺ</h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>Tham gia đấu giá eBay ngay tại WeShop. Cơ hội cực hời!</li>
                            <li>
                              Tận hưởng chương trình giá shock như: Black Friday, Cyber Monday,
                              Daily deals, Clear stock từ Amazon, eBay, các website chính hãng.
                            </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 2 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>Cắt mọi khâu trung gian nhập khẩu</li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 2 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(2)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon2']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          GIÚP BẠN MUA HÀNG BẰNG MỌI CÁCH
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>Lựa chọn 1: Bạn mua sản phẩm eBay, Amazon ngay tại Weshop</li>
                            <li>Lựa chọn 2: Bạn tự đi mua hàng, Weshop chuyển về hộ</li>
                          </ul>
                        </div>
                        {this.state.indexMore == 3 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>
                                Lựa chọn 3: Website bạn muốn mua không hỗ trợ thanh toán thẻ tín
                                dụng quốc tế, hãy gửi link để Weshop mua giúp bạn
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 3 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(3)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon3']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          MUA TOÀN CẦU, THANH TOÁN ĐỊA PHƯƠNG
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>
                              Weshop hỗ trợ phần lớn ngân hàng bản địa, thanh toán thẻ tín dụng, ví
                              Ngân Lượng
                            </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 4 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>
                                Weshop cũng hỗ trợ thanh toán đặt cọc một phần, giao hàng thu tiền
                                tận nơi
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 4 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(4)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon4']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          KHÔNG LO THỦ TỤC HẢI QUAN WESHOP GIÚP BẠN TỪ A-Z
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          Weshop kiểm hàng, khai quan, chuyển hàng tới tận tay bạn. Bạn chỉ việc
                          ngồi nhà chọn mua và thanh toán online tại nhà.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon5']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>AN TOÀN - ĐẢM BẢO</h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>
                              Hàng tới kho Weshop, chúng tôi sẽ tiến hành kiểm tra cơ bản, thông tin
                              tới bạn nếu hàng có vấn đề.
                            </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 5 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>
                                Weshop hỗ trợ gói lại hàng nhằm tăng cường sự bảo vệ và an toàn cho
                                hàng
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 5 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(5)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon6']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          VẬN CHUYỂN NHANH, TỪ 10-14 NGÀY TIẾT KIỆM 30% PHÍ VẬN CHUYỂN
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>
                              Là đại lý vận chuyển lớn của các hãng hàng không, Weshop có chính sách
                              giá phí vận chuyển tốt nhất.
                            </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 6 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>
                                Weshop hỗ trợ gom hàng và gói lại kiện hàng giúp bạn tiết kiệm chi
                                phí vận chuyển hàng cồng kênh hoặc đơn lẻ.
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 6 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(6)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon7']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          THUẾ/PHÍ RÕ RÀNG, KHÔNG PHÍ TIỀM ẨN
                        </h5>
                        <div className={styles['benefit-content-2']} />
                        <div className={styles['benefit-content']} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon8']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          PHÍ DỊCH VỤ THẤP PHÙ HỢP VỚI NHIỀU CẤP THÀNH VIÊN
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>Cơ bản: phù hợp cá nhân thỉng thoảng mua </li>
                            <li>Vàng: phù hợp cá nhân hay mua hàng nhập </li>
                          </ul>
                        </div>
                        {this.state.indexMore == 8 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>Kim cương: phù hợp thương nhân</li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 8 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(8)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon9']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>BẢO VỆ NGƯỜI MUA TUYỆT ĐỐI</h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>Chính sách bảo hiểm hàng rõ ràng, chi phí thấp </li>
                            <li>Miễn phí bảo hiểm hàng hoá với mức tối đa 2.000.000 VND </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon10']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>KHIẾU NẠI, ĐỔI TRẢ DỄ DÀNG</h5>
                        <div className={styles['benefit-content-2']}>
                          <div>
                            Nhiều người bán cho phép đổi trả hàng trong thời hạn nhất định, với lợi
                            thế kho hàng tại Mỹ và kiểm tra hàng hoá cơ bản, Weshop hỗ trợ bạn thực
                            hiện khiếu nại, đổi trả khi hàng có vấn đề.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles['col-sm-6'] + ' ' + styles['list-benefit'] + ' ' + styles['form-group']
                  }
                >
                  <div
                    className={
                      styles['icon-box'] + ' ' + styles['style-2'] + ' ' + styles['sm-mb-30']
                    }
                  >
                    <div className={styles['box-container']}>
                      <div className={styles['icon-box-icon']}>
                        <div className={styles['icon-container']}>
                          <div className={styles['ic-icon11']} />
                        </div>
                      </div>
                      <div className={styles['icon-box-text']}>
                        <div className={styles['icon-box-lines-top']} />
                        <div className={styles['icon-box-lines-bottom']} />
                        <h5 className={styles['heading-uppercase']}>
                          NHIỀU DỊCH VỤ GIÁ TRỊ GIA TĂNG
                        </h5>
                        <div className={styles['benefit-content-2']}>
                          <ul>
                            <li>Lưu kho hàng: miễn phí tối đa 60 ngày</li>
                            <li>Gom hàng chuyển kiện: Miễn phí</li>
                          </ul>
                        </div>
                        {this.state.indexMore == 11 && (
                          <div className={styles['benefit-content']}>
                            <ul>
                              <li>Gói lại hàng: Miễn phí </li>
                              <li>
                                Khác: chụp hình sản phẩm trước khi chuyển về, gói quà tặng, gỡ bỏ
                                hoá đơn của người bán...
                              </li>
                            </ul>
                          </div>
                        )}
                        <div className={styles['text-right']}>
                          {this.state.indexMore != 11 ? (
                            <span
                              onClick={() => this.handleClickSeeMore(11)}
                              className={styles['see-more']}
                            >
                              Xem thêm
                            </span>
                          ) : (
                            <span
                              onClick={() => this.handleClickHide()}
                              style={{
                                marginTop: 0,
                                display: 'inherit',
                                fontSize: '13px',
                                cursor: 'pointer',
                                color: '#e67425',
                                marginTop: '0px',
                              }}
                            >
                              Ẩn
                            </span>
                          )}
                        </div>
                      </div>
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

export default HelpAbout;
