/* eslint-disable no-nested-ternary */
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
  Avatar,
  Modal,
  Table,
  InputNumber,
  Radio,
  Icon,
  Switch,
  Tooltip,
  Row,
  Col,
  Checkbox,
  Skeleton,
  Cascader,
  Popover,
  Progress,
  Popconfirm,
  message,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import { element } from 'prop-types';
var currencyFormatter = require('currency-formatter');
const FormItem = Form.Item;
const EditableContext = React.createContext();
const Option = Select.Option;
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  render() {
    const { editing, dataIndex, title, inputType, record, index, ...restProps } = this.props;

    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `Vui lòng nhập ${title}!`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(
                    <Input
                      disabled={dataIndex === 'link' && true}
                      type={dataIndex === 'total' ? 'number' : undefined}
                      min={dataIndex === 'total' ? '1' : undefined}
                    />
                  )}
                </FormItem>
              ) : (
                  restProps.children
                )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class TableProduct extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: '5%',
      align: 'center',
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'productid',
      key: 'productid',
      width: '15%',
      align: 'center',

    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'title',
      key: 'title',
      width: '35%',
      align: 'center',

    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      align: 'center',
    },
    {
      title: 'Số lượng',
      dataIndex: 'total',
      key: 'total',
      width: '10%',
      align: 'center',
    },
    {
      title: 'Ảnh đại diện',
      dataIndex: 'image',
      key: 'image',
      width: '20%',
      align: 'center',
    },
    ];
  }

  render() {
    var data = this.props.dataList
    console.log(data)
    var dataTable = [];
    data.forEach((v, i) => {
      var productTable = {};
      productTable.key = i + '';
      productTable.index = i + 1;
      productTable.productid = v.productid;
      productTable.title = v.title;
      productTable.image = (
        <img style={{ width: '100%' }} src={`/images/ft/${v.image.replace(/\-/g, '')}`} />
      )
      productTable.price = currencyFormatter.format(v.price, { locale: 'vi-VN' });
      productTable.total = v.total;
      dataTable.push(productTable)
    })

    return (
      <Table
        style={{ marginTop: '30px' }}
        columns={this.columns}
        dataSource={dataTable}
        bordered
      />)
  }
}
@connect(({ user, product }) => ({
  user,
  product,
}))
@Form.create()
class ListOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editingKey: '',
      list: [],
      categoryOption: [],
      changeCategory: '',
    };
    this.columns = [
      {
        title: 'STT',
        dataIndex: 'index',
        key: 'index',
        width: '5%',
        align: 'center',
      },
      {
        title: 'Mã đơn hàng',
        dataIndex: 'orderid',
        key: 'orderid',
        width: '20%',
        align: 'center',

      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
        width: '15%',
        align: 'center',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createat',
        key: 'createat',
        width: '10%',
        align: 'center',
      },
      {
        title: 'Tổng giá',
        dataIndex: 'total_price',
        key: 'total_price',
        align: 'center',
        width: '15%',
      },
      {
        title: 'Đơn hàng',
        dataIndex: 'detail',
        key: 'detail',
        align: 'center',
        width: '15%',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        width: '13%',
      },
      {
        title: 'Xoá đơn hàng',
        dataIndex: 'delete',
        key: 'delete',
        align: 'center',
        width: '7%',
      },
    ]

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.getproductorder !== nextProps.product.getproductorder) {
      if (nextProps.product.getproductorder.status === 'ok') {
        this.setState({
          list: nextProps.product.getproductorder.data,
        })
      }
    }
    if(this.props.product.changeorderstatus!==nextProps.product.changeorderstatus){
      if(nextProps.product.changeorderstatus.status==='ok' && this.props.product.changeorderstatus.timeline!==nextProps.product.changeorderstatus.timeline){
        message.success('Thay đổi trạng thái thành công')
        this.props.dispatch({
          type: 'product/getproductorder'
        })
      }
      if(nextProps.product.changeorderstatus.status==='error'){
        message.success('Thay đổi trạng thái thất bại')
      }
    }
    if(this.props.product.deleteproductorder!==nextProps.product.deleteproductorder){
      if(nextProps.product.deleteproductorder.status==='ok' && this.props.product.deleteproductorder.timeline!==nextProps.product.deleteproductorder.timeline){
        message.success('Xóa đơn hàng thành công')
        this.props.dispatch({
          type: 'product/getproductorder'
        })
      }
      if(nextProps.product.deleteproductorder.status==='error'){
        message.success('Xóa đơn hàng thất bại')
      }
    }
  }
  ConfirmStatus(value,value2){
    this.props.dispatch({
      type:'product/changeorderstatus',
      payload:{
        orderid:value,
        status:!value2
      }
    })
  }
  ConfirmDelete(value){
    this.props.dispatch({
      type:'product/deleteproductorder',
      payload:{
        orderid:value,
      }
    })
  }
  cancelDelete(e) {
  }
  cancelStatus(e) {
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'product/getproductorder'
    })
  }
  showModal = (value) => {
    this.setState({
      [value]: true,
    });
  }

  handleOk = (value) => {
    this.setState({
      [value]: false,
    });
  }
  handleCancel = (value) => {
    this.setState({
      [value]: false,
    });
  }

  render() {
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    const { list } = this.state
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
    var dataTable = [];
    list.forEach((v, i) => {
      var timeCreate = new Date(v.createat);
      var stringTime =
        timeCreate.getDate() +
        '/' +
        Number(timeCreate.getMonth() + 1) +
        '/' +
        timeCreate.getFullYear();
      var productTable = {};
      productTable.key = i + '';
      productTable.index = i + 1;
      productTable.createat = stringTime;
      productTable.orderid = v.orderid;
      productTable.productid = v.productid;
      productTable.detail = (
        <div>
          <span>Có {v.list_product.length} sản phẩm </span>
          <span onClick={() => this.showModal(`modal-${i}`)} style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>Chi tiết</span>
          <Modal
            width={992}
            title="Basic Modal"
            visible={this.state[`modal-${i}`]}
            onOk={() => this.handleOk(`modal-${i}`)}
            onCancel={() => this.handleCancel(`modal-${i}`)}
          >
            <TableProduct dataList={v.list_product} />
          </Modal>
        </div>
      )
      productTable.phone = v.phone;
      productTable.status = (
        <div>
          {(v.status) ? (
            <div>Đã xác nhận</div>
          ) : (
              <div>Chưa xác nhận</div>
            )}
          <span style={{ color: 'red', textDecoration: 'underline' }}>
            <Popconfirm title="Bạn có chắc muốn cập nhật trạng lại thái không" onConfirm={()=>this.ConfirmStatus(v.orderid,v.status)} onCancel={()=>this.cancelStatus()} okText="Đồng ý" cancelText="Hủy">
              <a href="#">Thay đổi</a>
            </Popconfirm>
          </span>
        </div>
      )
      productTable.total_price = currencyFormatter.format(v.total_price, { locale: 'vi-VN' });
      productTable.delete = (
        <Popconfirm title="Bạn có chắc muốn xoá đơn hàng này không" onConfirm={()=>this.ConfirmDelete(v.orderid)} onCancel={()=>this.cancelDelete()} okText="Đồng ý" cancelText="Hủy">
            <a style={{color:'red'}} href="#">Xoá</a>
        </Popconfirm>
      )
      dataTable.push(productTable);
    });
    return (
      <DocumentMeta {...meta}>
        <div className={styles['paste-link-head']}>

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

              <section id={styles['pastelink']}>

                <div style={{ margin: '0 auto' }} className={styles['container']}>
                  <div className={styles['row']}>
                    <div className={styles['col-xs-12']}>
                      <Table
                        style={{ marginTop: '30px' }}
                        columns={this.columns}
                        dataSource={dataTable}
                        bordered
                      />
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

export default ListOrder;
