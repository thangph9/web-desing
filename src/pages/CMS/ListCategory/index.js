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
  Table,
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
  Popconfirm,
  message,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  render() {
    const { editing, dataIndex, title, inputType, record, index, ...restProps } = this.props;
    console.log(dataIndex);
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

@connect(({ user, product }) => ({
  user,
  product,
}))
@Form.create()
class ListCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editingKey: '',
      list:[]
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
        title: 'Mã danh mục',
        dataIndex: 'categoryid',
        key: 'categoryid',
        width: '25%',
        align: 'center',
      },
      {
        title: 'Tên danh mục',
        dataIndex: 'namecategory',
        key: 'namecategory',
        width: '15%',
        align: 'center',
      },
      {
        title: 'Người tạo',
        dataIndex: 'createby',
        key: 'createby',
        width: '10%',
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
        title: 'Ảnh đại diện',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        width: '15%',
        align: 'center',
      },
      {
        title: 'Chỉnh sửa',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        width: '15%',

      },
    ];
  }

  componentWillReceiveProps(nextProps){
    if(this.props.product.getlistcategory!==nextProps.product.getlistcategory){
      this.setState({
        list:nextProps.product.getlistcategory.data
      })
    }
    if(this.props.product.deletecategory!==nextProps.product.deletecategory){
      if(nextProps.product.deletecategory.status==='ok'&&nextProps.product.deletecategory.timeline!==this.props.product.deletecategory.timeline){
        message.info('Đã xóa sản phẩm thành công')
      }
    }
  }

  isEditing = record => record.key === this.state.editingKey;
  cancel = () => {
    this.setState({ editingKey: '' });
  };
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      this.props.dispatch({
        type: 'user/sethelpbuy',
        payload: row,
      });
      setTimeout(() => {
        this.props.dispatch({
          type: 'user/gethelpbuy',
        });
      }, 500);
    });
    this.setState({ editingKey: '' });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'product/getlistcategory',
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.form.getFieldValue('count') && this.props.form.getFieldValue('count') < 1) {
      message.error('Số lượng không hợp lệ!');
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/addhelpbuy',
          payload: values,
        });
      }
    });
  };
  confirm(value){
    this.props.dispatch({
      type:'product/deletecategory',
      payload:{
        categoryid:value
      }
    })
    this.props.dispatch({
      type: 'product/getlistcategory',
    });
  }
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'total' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });
    const tailFormItemLayout = {};
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    const {list}=this.state
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
    console.log(list)
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
      productTable.namecategory = v.title;
      productTable.categoryid = v.categoryid;
      productTable.createby=v.createby,
      productTable.thumbnail=(<Avatar style={{background:'none'}} shape='square' size={60} src={`/images/ft/${v.thumbnail.replace(/\-/g, '')}`} />)
      productTable.edit=(
        <div>
          <Link to={`/cms123order/updatecategory/${v.categoryid.replace(/\-/g, '')}`}>Chỉnh sửa</Link>
          <Popconfirm placement="bottomRight" title="Bạn có chắc muốn xóa sản phẩm này?" onConfirm={()=>this.confirm(v.categoryid)} okText="Xóa" cancelText="Hủy">
            <span> | </span>
            <span style={{color:'red',cursor:'pointer'}}> Xóa</span>
          </Popconfirm>
        </div>
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
                        components={components}
                        style={{ marginTop: '30px' }}
                        columns={columns}
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

export default ListCategory;
