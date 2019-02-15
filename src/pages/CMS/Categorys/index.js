/* eslint-disable prefer-destructuring */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
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
import { Link } from 'react-router-dom';
import moment from 'moment';
import Slider from 'react-slick';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Checkbox,
  Button,
  Card,
  message,
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
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
const topColResponsiveProps = {
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
  style: { marginBottom: 24 },
};
const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);
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
@connect(({ user, product }) => ({
  user,
  product,
}))
@Form.create()
class Categorys extends React.PureComponent {
  state = {
    fileList: [],
    previewVisible: false,
    previewImage: '',
  };

  handleChangeCheck(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handleChange = ({ fileList }) => {
    this.setState({ fileList }, () => {
      var image = '';
      if (fileList[0] && fileList[0].response) image = fileList[0].response.file.imageid;
      this.props.form.setFields({
        images: {
          value: image,
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
      console.log(valuesTime);
      this.props.dispatch({
        type: 'product/savecategory',
        payload: valuesTime,
      });
    });
  };
  handleChangeMenu(value) {
    console.log(value);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    var { fileList } = this.state;
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
            <Form.Item {...formItemLayout} label="Tên danh mục">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Nhập tên danh mục',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="RangePicker">
              {getFieldDecorator('range-picker', {
                rules: [{ type: 'array', required: true, message: 'Please select time!' }],
              })(<RangePicker />)}
            </Form.Item>
          </Col>
          <Col {...topColResponsiveProps}>
            <Form.Item {...formItemLayout} label="Phân mục">
              {getFieldDecorator('menu', {})(
                <Select placeholder="Phân mục của bạn" onChange={e => this.handleChangeMenu(e)}>
                  <Option value="hotnews">Ưu đãi mới nhất</Option>
                  <Option value="special">Ưu đãi đặc biệt</Option>
                  <Option value="bestseller">Bán chạy nhất</Option>
                  <Option value="news">Đang diễn ra</Option>
                  <Option value="more">Sản phẩm nổi bật khác</Option>
                </Select>
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
                {fileList.length > 0 ? null : uploadButton}
              </Upload>

              <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
              </Modal>
            </FormItem>
          </Col>
          <Col {...topColResponsiveProps}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('images', {})(<Input type="hidden" />)}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Categorys;
