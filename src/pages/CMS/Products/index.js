/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable vars-on-top */
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
import Slider from 'react-slick';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Card,
  message,
  Select,
  InputNumber,
  Radio,
  Row,
  Col,
  Upload,
  Icon,
  Modal,
  Tooltip,
  Affix,
  Skeleton,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
const topColResponsiveProps = {
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
  style: { marginBottom: 24 },
};
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 13 },
  },
};

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);
@connect(({ user, product }) => ({
  user,
  product,
}))
@Form.create()
class Products extends React.PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    previewVisibleAvatar: false,
    previewImageAvatar: '',
    visibleInformation: false,
    visibleBrand: false,
    visibleSize: false,
    visibleUse: false,
    desc_information: 1,
    value_information: [],
    desc_brand: 1,
    value_brand: [],
    desc_size: 1,
    value_size: [],
    desc_use: 1,
    value_use: [],
    fileList: [],
    fileListAvatar: [],
    categoryOption: [],
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'product/getcategory',
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.product.getcategory !== nextProps.product.getcategory) {
      if (nextProps.product.getcategory.status === 'ok') {
        this.setState({
          categoryOption: nextProps.product.getcategory.data,
        });
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const rangeValue = values['range-picker'];
      const valuesTime = {
        ...values,
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      };
      this.props.dispatch({
        type: 'product/saveproduct',
        payload: valuesTime,
      });
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handleCancelAvatar = () => this.setState({ previewVisibleAvatar: false });
  handleAddInformation() {
    this.setState({
      desc_information: this.state.desc_information + 1,
    });
  }
  handleClickRemoveInformation() {
    if (this.state.desc_information > 1) {
      this.setState({
        desc_information: this.state.desc_information - 1,
      });
    }
  }
  showModalInformation = () => {
    this.setState({
      visibleInformation: true,
    });
  };

  handleOkInformation = e => {
    console.log(e);
    const { form } = this.props;
    const { desc_information } = this.state;
    var arr = [];
    for (let i = 0; i < desc_information; i++) {
      var result = form.getFieldValue(`desc_information_${i}`);
      arr.push(result);
    }
    this.setState(
      {
        value_information: arr,
      },
      () => {
        form.setFields({
          information: {
            value: this.state.value_information,
          },
        });
        this.setState({
          visibleInformation: false,
        });
      }
    );
  };
  handleCancelInformation = e => {
    console.log(e);
    this.setState({
      visibleInformation: false,
    });
  };

  handleAddBrand() {
    this.setState({
      desc_brand: this.state.desc_brand + 1,
    });
  }

  handleClickRemoveBrand() {
    if (this.state.desc_brand > 1) {
      this.setState({
        desc_brand: this.state.desc_brand - 1,
      });
    }
  }
  showModalBrand = () => {
    this.setState({
      visibleBrand: true,
    });
  };

  handleOkBrand = e => {
    console.log(e);
    const { form } = this.props;
    const { desc_brand } = this.state;
    var arr = [];
    for (let i = 0; i < desc_brand; i++) {
      var result = form.getFieldValue(`desc_brand_${i}`);
      arr.push(result);
    }
    this.setState(
      {
        value_brand: arr,
      },
      () => {
        form.setFields({
          descbrand: {
            value: this.state.value_brand,
          },
        });
        this.setState({
          visibleBrand: false,
        });
      }
    );
  };
  handleCancelBrand = e => {
    console.log(e);
    this.setState({
      visibleBrand: false,
    });
  };

  handleAddSize() {
    this.setState({
      desc_size: this.state.desc_size + 1,
    });
  }

  handleClickRemoveSize() {
    if (this.state.desc_size > 1) {
      this.setState({
        desc_size: this.state.desc_size - 1,
      });
    }
  }
  showModalSize = () => {
    this.setState({
      visibleSize: true,
    });
  };

  handleOkSize = e => {
    console.log(e);
    const { form } = this.props;
    const { desc_size } = this.state;
    var arr = [];
    for (let i = 0; i < desc_size; i++) {
      var result = form.getFieldValue(`desc_size_${i}`);
      arr.push(result);
    }
    this.setState(
      {
        value_size: arr,
      },
      () => {
        form.setFields({
          descsize: {
            value: this.state.value_size,
          },
        });
        this.setState({
          visibleSize: false,
        });
      }
    );
  };
  handleCancelSize = e => {
    console.log(e);
    this.setState({
      visibleSize: false,
    });
  };

  handleAddUse() {
    this.setState({
      desc_use: this.state.desc_use + 1,
    });
  }
  handleClickRemoveUse() {
    if (this.state.desc_use > 1) {
      this.setState({
        desc_use: this.state.desc_use - 1,
      });
    }
  }
  showModalUse = () => {
    this.setState({
      visibleUse: true,
    });
  };

  handleOkUse = e => {
    console.log(e);
    const { form } = this.props;
    const { desc_use } = this.state;
    var arr = [];
    for (let i = 0; i < desc_use; i++) {
      var result = form.getFieldValue(`desc_use_${i}`);
      arr.push(result);
    }
    this.setState(
      {
        value_use: arr,
      },
      () => {
        form.setFields({
          use: {
            value: this.state.value_use,
          },
        });
        this.setState({
          visibleUse: false,
        });
      }
    );
  };
  handleCancelUse = e => {
    console.log(e);
    this.setState({
      visibleUse: false,
    });
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleChange = ({ fileList }) => {
    console.log(fileList);
    this.setState({ fileList }, () => {
      var arr = [];
      fileList.forEach(element => {
        if (element.response) arr.push(element.response.file.imageid);
      });
      this.props.form.setFields({
        images: {
          value: arr,
        },
      });
    });
  };
  handleRemove = file => {
    console.log(file);
  };
  beforeUpload = file => {
    const isJPG =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/webm' ||
      file.type === 'image/webp';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 12;
    if (!isLt2M) {
      message.error('Image must smaller than 12MB!');
    }
    return isJPG && isLt2M;
  };

  handlePreviewAvatar = file => {
    this.setState({
      previewImageAvatar: file.url || file.thumbUrl,
      previewVisibleAvatar: true,
    });
  };
  handleChangeAvatar(fileListAvatar) {
    console.log(fileListAvatar);
    this.setState({ fileListAvatar: fileListAvatar.fileList }, () => {
      var image = '';
      if (this.state.fileListAvatar[0] && this.state.fileListAvatar[0].response)
        image = this.state.fileListAvatar[0].response.file.imageid;
      this.props.form.setFields({
        avatar: {
          value: image,
        },
      });
    });
  }
  handleRemoveAvatar = file => {
    console.log(file);
  };
  beforeUploadAvatar = file => {
    const isJPG =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/webm' ||
      file.type === 'image/webp';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 12;
    if (!isLt2M) {
      message.error('Image must smaller than 12MB!');
    }
    return isJPG && isLt2M;
  };
  handleBlurSale(e) {
    var { form } = this.props;
    var sale = Number(e.target.value);
    var price = Number(form.getFieldValue(`price`));
    if (price) {
      var sale_price = price - price * (sale / 100);
      form.setFields({
        sale_price: {
          value: sale_price,
        },
      });
    }
  }
  handleBlurPrice(e) {
    var { form } = this.props;
    var price = Number(e.target.value);
    var sale = Number(form.getFieldValue(`sale`));
    if (sale) {
      var sale_price = price - price * (sale / 100);
      form.setFields({
        sale_price: {
          value: sale_price,
        },
      });
    }
  }
  handleChangeCategory(value) {
    console.log(`selected ${value}`);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { desc_information, desc_brand, desc_size, desc_use, fileList } = this.state;
    var arrDesc_information = [];
    for (let i = 0; i < desc_information; i++) {
      arrDesc_information.push(
        <div key={i}>
          {getFieldDecorator(`desc_information_${i}`, {
            rules: [
              {
                required: true,
                message: 'Nhập mô tả thông tin',
              },
            ],
          })(
            <div>
              Mô tả {i + 1}: <Input style={{ width: '70%', marginBottom: '20px' }} />
              {i != 0 && (
                <Icon
                  onClick={() => this.handleClickRemoveInformation()}
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  style={{ marginLeft: '5px', fontSize: '14px', cursor: 'pointer' }}
                />
              )}
            </div>
          )}
        </div>
      );
    }
    var arrDesc_brand = [];
    for (let i = 0; i < desc_brand; i++) {
      arrDesc_brand.push(
        <div key={i}>
          {getFieldDecorator(`desc_brand_${i}`, {
            rules: [
              {
                required: true,
                message: 'Nhập mô tả thương hiệu',
              },
            ],
          })(
            <div>
              Mô tả {i + 1}: <Input style={{ width: '70%', marginBottom: '20px' }} />
              {i != 0 && (
                <Icon
                  onClick={() => this.handleClickRemoveBrand()}
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  style={{ marginLeft: '5px', fontSize: '14px', cursor: 'pointer' }}
                />
              )}
            </div>
          )}
        </div>
      );
    }
    var arrDesc_size = [];
    for (let i = 0; i < desc_size; i++) {
      arrDesc_size.push(
        <div key={i}>
          {getFieldDecorator(`desc_size_${i}`, {
            rules: [
              {
                required: true,
                message: 'Nhập mô tả kích cỡ',
              },
            ],
          })(
            <div>
              Mô tả {i + 1}: <Input style={{ width: '70%', marginBottom: '20px' }} />
              {i != 0 && (
                <Icon
                  onClick={() => this.handleClickRemoveSize()}
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  style={{ marginLeft: '5px', fontSize: '14px', cursor: 'pointer' }}
                />
              )}
            </div>
          )}
        </div>
      );
    }
    var arrDesc_use = [];
    for (let i = 0; i < desc_use; i++) {
      arrDesc_use.push(
        <div key={i}>
          {getFieldDecorator(`desc_use_${i}`, {
            rules: [
              {
                required: true,
                message: 'Nhập mô tả thông tin',
              },
            ],
          })(
            <div>
              Mô tả {i + 1}: <Input style={{ width: '70%', marginBottom: '20px' }} />
              {i != 0 && (
                <Icon
                  onClick={() => this.handleClickRemoveUse()}
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  style={{ marginLeft: '5px', fontSize: '14px', cursor: 'pointer' }}
                />
              )}
            </div>
          )}
        </div>
      );
    }
    console.log(this.state.fileListAvatar);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Affix offsetTop={20}>
          <FormItem style={{ left: '20px' }}>
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
          </FormItem>
        </Affix>
        <Row gutter={16} justify="start" style={{ marginTop: '30px' }}>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Tên sản phẩm">
              {getFieldDecorator('name_product', {
                rules: [
                  {},
                  {
                    required: true,
                    message: 'Nhập tên sản phẩm',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Chọn danh mục">
              {getFieldDecorator('categoryid', {
                rules: [
                  {},
                  {
                    required: true,
                    message: 'Vui lòng chọn danh mục',
                  },
                ],
              })(
                <Select placeholder="Danh mục của bạn" onChange={e => this.handleChangeCategory(e)}>
                  {this.state.categoryOption.map((v, i) => {
                    return (
                      <Option key={i} value={v.categoryid}>
                        {v.title}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Số lượng">
              {getFieldDecorator('total', {
                rules: [
                  {},
                  {
                    required: true,
                    message: 'Nhập lượng sản phẩm',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Thương hiệu">
              {getFieldDecorator('brand', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập thương hiệu',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Màu sắc">
              {getFieldDecorator('color', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập màu sắc sản phẩm',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Giá gốc">
              {getFieldDecorator('price', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập giá gốc',
                  },
                ],
              })(<Input onBlur={e => this.handleBlurPrice(e)} />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Giảm giá (%)">
              {getFieldDecorator('sale', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập số lượng giảm',
                  },
                ],
              })(<Input onBlur={e => this.handleBlurSale(e)} />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Giảm đã giảm">
              {getFieldDecorator('sale_price', {})(<Input disabled />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Kích cỡ">
              {getFieldDecorator('size', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập kích cỡ giảm',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Thời gian giảm giá">
              {getFieldDecorator('range-picker', {
                rules: [{ type: 'array', required: true, message: 'Please select time!' }],
              })(<RangePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} justify="start" style={{ marginTop: '30px' }}>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Thông tin mô tả">
              {getFieldDecorator('information', {})(
                <div>
                  <Button block type="primary" onClick={this.showModalInformation}>
                    Thêm mô tả thông tin
                  </Button>
                  <Modal
                    title="Mô tả sản phẩm"
                    visible={this.state.visibleInformation}
                    onOk={this.handleOkInformation}
                    onCancel={this.handleCancelInformation}
                    centered
                  >
                    {arrDesc_information}

                    <Button
                      type="dashed"
                      onClick={() => this.handleAddInformation()}
                      style={{ width: '50%', margin: '20px auto', display: 'table' }}
                    >
                      <Icon type="plus" /> Thêm mô tả
                    </Button>
                  </Modal>
                </div>
              )}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Mô tả thương hiệu">
              {getFieldDecorator('descbrand', {})(
                <div>
                  <Button block type="primary" onClick={this.showModalBrand}>
                    Thêm mô tả thương hiệu
                  </Button>
                  <Modal
                    title="Mô tả thương hiệu"
                    visible={this.state.visibleBrand}
                    onOk={this.handleOkBrand}
                    onCancel={this.handleCancelBrand}
                    centered
                  >
                    {arrDesc_brand}

                    <Button
                      type="dashed"
                      onClick={() => this.handleAddBrand()}
                      style={{ width: '50%', margin: '20px auto', display: 'table' }}
                    >
                      <Icon type="plus" /> Thêm mô tả
                    </Button>
                  </Modal>
                </div>
              )}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Mô tả kích cỡ">
              {getFieldDecorator('descsize', {})(
                <div>
                  <Button block type="primary" onClick={this.showModalSize}>
                    Thêm mô tả kích cỡ
                  </Button>
                  <Modal
                    title="Mô tả kích cỡ"
                    visible={this.state.visibleSize}
                    onOk={this.handleOkSize}
                    onCancel={this.handleCancelSize}
                    centered
                  >
                    {arrDesc_size}

                    <Button
                      type="dashed"
                      onClick={() => this.handleAddSize()}
                      style={{ width: '50%', margin: '20px auto', display: 'table' }}
                    >
                      <Icon type="plus" /> Thêm mô tả
                    </Button>
                  </Modal>
                </div>
              )}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Mô tả cách sd">
              {getFieldDecorator('use', {})(
                <div>
                  <Button block type="primary" onClick={this.showModalUse}>
                    Thêm mô tả cách sử dụng
                  </Button>
                  <Modal
                    title="Mô tả cách sử dụng"
                    visible={this.state.visibleUse}
                    onOk={this.handleOkUse}
                    onCancel={this.handleCancelUse}
                    centered
                  >
                    {arrDesc_use}

                    <Button
                      type="dashed"
                      onClick={() => this.handleAddUse()}
                      style={{ width: '50%', margin: '20px auto', display: 'table' }}
                    >
                      <Icon type="plus" /> Thêm mô tả
                    </Button>
                  </Modal>
                </div>
              )}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <FormItem label="Hình ảnh" {...formItemLayout}>
              <Upload
                action="/api/upload/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                onRemove={this.handleRemove}
                beforeUpload={this.beforeUpload}
                multiple
              >
                {fileList.length > 15 ? null : uploadButton}
              </Upload>

              <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
              </Modal>
            </FormItem>
          </Col>
          <Col {...topColResponsiveProps}>
            <FormItem label="Ảnh đại diện" {...formItemLayout}>
              <Upload
                action="/api/upload/avatar/"
                listType="picture-card"
                fileList={this.state.fileListAvatar}
                onPreview={this.handlePreviewAvatar}
                onChange={e => this.handleChangeAvatar(e)}
                onRemove={this.handleRemoveAvatar}
                beforeUpload={this.beforeUploadAvatar}
              >
                {this.state.fileListAvatar.length > 0 ? null : uploadButton}
              </Upload>

              <Modal
                visible={this.state.previewVisibleAvatar}
                footer={null}
                onCancel={this.handleCancelAvatar}
              >
                <img alt="example" style={{ width: '100%' }} src={this.state.previewImageAvatar} />
              </Modal>
            </FormItem>
          </Col>
          <Col {...topColResponsiveProps}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('images', {})(<Input type="hidden" />)}
            </FormItem>
          </Col>
          <Col {...topColResponsiveProps}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('avatar', {})(<Input type="hidden" />)}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Products;
