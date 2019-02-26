/* eslint-disable no-self-assign */
/* eslint-disable no-useless-return */
/* eslint-disable no-useless-concat */
/* eslint-disable operator-assignment */
/* eslint-disable no-eval */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-sequences */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable one-var */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable prefer-template */
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
import Slider from 'react-slick';
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
  Skeleton,
} from 'antd';
import DocumentMeta from 'react-document-meta';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
var currencyFormatter = require('currency-formatter');
const radioStyle = {
  display: 'inline',
  height: '30px',
  lineHeight: '30px',
};
@connect(({ loading, category }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  category,
}))
class ProductItem extends PureComponent {
  render() {
    var { data } = this.props;
    const filter = this.props;
    const price = currencyFormatter.format(data['price'], { locale: 'vi-VN' });
    const sale_price = currencyFormatter.format(data['sale_price'], { locale: 'vi-VN' });
    return (
      <div
        className={
          styles['cart-item']
        }
      >

        <Link
          className={styles['product-card__productCard___2lSYu']}
          to={`/productbytri/${data.productid.replace(/\-/g, '')}`}
        >

          <div>

            <div
              style={data.avatar && { backgroundImage: `url(/images/ft/${data.avatar.replace(/\-/g, '')}` }}
              className={!filter ? (styles['product-card__imageContainer___1apY_'] +
                ' ' +
                styles['product-card__sale-product-card____fjbZ'] + ' ' + styles['background-item'] + ' ' + styles['border-style']) : (
                  styles['product-card__imageContainer___1apY_'] +
                  ' ' +
                  styles['product-card__sale-product-card____fjbZ'] + ' ' + styles['background-item-filter'] + ' ' + styles['border-style']
                )}
            >

              <div className={styles['product-card__discount___2R4sK']}>{data.sale}% Off</div>
            </div>
            <div className={styles['product-card__titleContainer___1HE6o']} >
              <h4 className={styles['product-card__brand___3np4R']}>{data.brand}</h4>
              <h4 className={styles['product-card__title___3l79X']}>{data.name_product}</h4>
              <div>
                <span className={styles['product-card__retailPrice___2urqH']}>{price}</span>
                <span className={styles['product-card__salePrice___3PSWy']}>{sale_price}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
@connect(({ loading, category, list, product }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  category,
  list,
  product,
}))
@Form.create()
class ListCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      globalProduct: [],
      filterString: [],
      filterStringSize: [],
      totalSize: [],
      valueRadioPrice: 0,
      valueRadioBrand: 0,
      arrFilter: [0, 0],
      arrBrand: [],
      tempData:[]
    };
  }
  componentDidMount() {
    var { dispatch, match } = this.props;
    var sort = this.props.location.query.sort
    dispatch({
      type: 'product/getproductincategory',
      payload: {
        categoryid: match.params.categoryid,
        sort,
      },
    });
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      sizeScreen: window.innerWidth,
    });
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.state.sizeScreen !== nextState.sizeScreen) {
      if (nextState.sizeScreen < 768) {
        this.setState({
          filter: false
        })
      }
    }
    if (this.state.arrFilter !== nextState.arrFilter) {
      if (nextState.arrFilter) {
        let dataArr = this.state.globalProduct
        console.log(dataArr)
        for (let i = 0; i < nextState.arrFilter.length; i++) {
          dataArr = dataArr.filter((value, index) => {
            if (i === 0) {
              if (nextState.arrFilter[i] === 0) return value;
              else if (nextState.arrFilter[i] === 1) return value.sale_price < 1000000
              else if (nextState.arrFilter[i] === 2) return value.sale_price > 1000000 && value.sale_price < 3000000
              else if (nextState.arrFilter[i] === 3) return value.sale_price > 3000000 && value.sale_price < 5000000
              else if (nextState.arrFilter[i] === 4) return value.sale_price > 5000000 && value.sale_price < 7000000
              else if (nextState.arrFilter[i] === 5) return value.sale_price > 7000000 && value.sale_price < 10000000
              else if (nextState.arrFilter[i] === 6) return value.sale_price > 10000000 && value.sale_price < 20000000
              else if (nextState.arrFilter[i] === 7) return value.sale_price > 20000000
            }
            else if (nextState.arrFilter[i] === 0) return value
            else return value.brand === nextState.arrFilter[i]
          })
        }
        this.setState({
          dataFilter: dataArr,
          tempData:dataArr
        })
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.product.getproductincategory !== this.props.product.getproductincategory) {
      let arrBrand = []
      nextProps.product.getproductincategory.data.forEach((v, i) => {
        arrBrand.push(v.brand)
      })
      this.setState({
        globalProduct: nextProps.product.getproductincategory.data,
        tempData:nextProps.product.getproductincategory.data,
        arrBrand: arrBrand.filter(function (elem, index, self) {
          return index == self.indexOf(elem);
        })
      });
    }
  }


  renderEndTime() {
    var {
      category: { list },
    } = this.props;
    let timeline = '';
    let start, end;
    let isDeath = false;
    if (list.death_clock) {
      isDeath = true;
      start = new Date().getTime();
      end = new Date(list.death_clock.end).getTime();
      let tmpTime = (end - start) / 1000;

      let day = '';
      let hours = '';
      let munite = '';
      if (tmpTime > 2629743) {
        timeline = Math.round(tmpTime / 2629743) + ' Tháng';
      }
      if (tmpTime > 604800 && tmpTime < 2629743) {
        timeline = Math.round(tmpTime / 604800) + ' Tuần';
      }
      if (tmpTime > 86400 && tmpTime < 604800) {
        timeline = Math.round(tmpTime / 86400) + ' Ngày ';
      }
      if (tmpTime > 3600 && tmpTime < 86400) {
        timeline = Math.round(tmpTime / 3600) + ' Giờ ';
      }
      if (tmpTime > 60 && tmpTime < 3600) {
        timeline = Math.round(tmpTime / 60) + ' Phút ';
      }
    }
    return (
      <div
        className={
          styles['hidden-sm-down'] +
          ' ' +
          styles['sale__col-md-4___UhAyk'] +
          ' ' +
          styles['sale__end-time___MKUlz']
        }
      >
        {isDeath && (
          <span>
            <i className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']} />{' '}
            <span className={styles['end-time__text___1A-sx']}>Còn</span>{' '}
            <span className={styles['end-time__timer___LMsIT']}>{timeline}</span>
          </span>
        )}
      </div>
    );
  }

  handleClickFilterDestop() {
    this.setState({
      filter: !this.state.filter
    })
  }

  handleChangeRadioPrice(e) {
    this.setState({
      valueRadioPrice: e.target.value
    }, () => {
      let arrFilter = this.state.arrFilter;
      arrFilter[0] = this.state.valueRadioPrice
      this.setState({
        arrFilter: undefined
      }, () => {
        this.setState({
          arrFilter
        })
      })
    })

  }

  handleChangeRadioBrand(e) {
    this.setState({
      valueRadioBrand: e.target.value
    }, () => {
      let arrFilter = this.state.arrFilter;
      arrFilter[1] = this.state.valueRadioBrand
      this.setState({
        arrFilter: undefined
      }, () => {
        this.setState({
          arrFilter
        })
      })
    })
  }



  handleClickFilter(value) {
    this.setState({
      [value]: !this.state[value]
    })
  }
  handleChangeSelect1(e){

  }
  handleChangeSelect(e) {
    console.log(e)

    if(this.state.dataFilter){
      if(e==='lth'){
        this.setState({
          dataFilter:this.state.dataFilter.sort((a,b)=>{
            return a.sale_price-b.sale_price
          })
        })
      }
      if(e==='htl'){
        this.setState({
          dataFilter:this.state.dataFilter.sort((a,b)=>{
            return b.sale_price-a.sale_price
          })
        })
      }
      if(e==='maxsale'){
        this.setState({
          dataFilter:this.state.dataFilter.sort((a,b)=>{
            return b.sale-a.sale
          })
        })
      }
      if(e==='normal'){
        this.setState({
          dataFilter:this.state.tempData
        })
      }
    }
    else{
      if(e==='lth'){
        this.setState({
          globalProduct:this.state.globalProduct.sort((a,b)=>{
            return a.sale_price-b.sale_price
          })
        })
      }
      if(e==='htl'){
        this.setState({
          globalProduct:this.state.globalProduct.sort((a,b)=>{
            return b.sale_price-a.sale_price
          })
        })
      }
      if(e==='maxsale'){
        this.setState({
          globalProduct:this.state.globalProduct.sort((a,b)=>{
            return b.sale-a.sale
          })
        })
      }
      if(e==='normal'){
        this.setState({
          globalProduct:this.state.tempData
        })
      }
    }
    this.setState({
      [e]:!this.state[e]
    })
  }
  handleClickFilterMobile() {
    this.setState({
      filterMobile: !this.state.filterMobile
    })
  }
  handleClickFilterItem(value) {
    this.setState({
      [value]: !this.state[value]
    })
  }
  render() {
    var { test, globalProduct, filterString, filterStringSize, totalSize, sizeScreen, dataFilter, arrBrand } = this.state;
    const title = 'Danh sách sản phẩm';
    const meta_description = '123order ';
    const meta_data = '123order,order';
    console.log(this.state.arrFilter)
    console.log(this.state.dataFilter)
    const meta = {
      title,
      description: meta_description,
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: meta_data,
        },
      },
    };
    console.log(this.state.globalProduct)
    if (!this.state.filterMobile) {
      return (
        <DocumentMeta {...meta}>
          <div className={styles['container__container___1fvX0']}>
            <div className={styles['sale__sale___1auiY']}>
              <div className={styles['total-product-mobile']}>
                ( Hiện có {(dataFilter ? dataFilter : globalProduct).length} sản phẩm )
                  </div>
              <div style={{ marginBottom: '15px' }} className={styles['sale__sale-header___1lQxA'] + ' ' + styles['total-sort']}>

                <div
                  className={
                    styles['sale__total-items___u7EoB'] + ' ' + styles['total-items__text___1TBmn']
                  }
                >

                  <span className={styles['button-filter-destop']}>
                    <Button onClick={() => this.handleClickFilterDestop()} icon="filter">Bộ lọc destop</Button>
                  </span>
                  <span className={styles['button-filter-mobile']}>
                    <Button onClick={() => this.handleClickFilterMobile()} icon="filter">Bộ lọc mobile</Button>
                  </span>
                  <span className={styles['total-product-destop']}>
                    ( Hiện có {(dataFilter ? dataFilter : globalProduct).length} sản phẩm )
                  </span>
                </div>
                <Select style={(sizeScreen && sizeScreen > 768) ? { width: '20%' } : { width: '35%' }} placeholder="Sắp sếp theo" onSelect={(e)=>this.handleChangeSelect1(e)} onChange={(e) => this.handleChangeSelect(e)}>
                  <Option value="lth">Giá thấp đến cao</Option>
                  <Option value="htl">Giá cao đến thấp</Option>
                  <Option value="maxsale">Giảm giá nhiều nhất</Option>
                  <Option value="normal">Mặc định</Option>
                </Select>
              </div>

              <div className={styles['sale__sale-content___1M-Lr']}>
                <div className={styles['row__row___2roCA']}>
                  {this.state.filter && (
                    <div className={styles['filter-list']}>
                      <div className={styles['item-filter']}>
                        <div onClick={() => this.handleClickFilter('gia')} className={styles['title-filter']}>Lọc theo giá {this.state.gia ? (<Icon style={radioStyle} type="plus" />) : (<Icon style={radioStyle} type="minus" />)} </div>
                        {(!this.state[`gia`]) && (
                          <ul className={styles['ul-list-filter']}>
                            <RadioGroup value={this.state.valueRadioPrice} onChange={(e) => this.handleChangeRadioPrice(e)} style={{ width: '100%' }}>
                              <li><Radio style={radioStyle} value={1}>Dưới 1.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={2}>Từ 1.000.000 đến 3.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={3}>Từ 3.000.000 đến 5.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={4}>Từ 5.000.000 đến 7.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={5}>Từ 7.000.000 đến 10.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={6}>Từ 10.000.000 đến 20.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={7}>Trên 20.000.000</Radio></li>
                              <li><Radio style={radioStyle} value={0}>Tất cả</Radio></li>
                            </RadioGroup>
                          </ul>
                        )}
                      </div>
                      <div className={styles['item-filter']}>
                        <div onClick={() => this.handleClickFilter('hang')} className={styles['title-filter']}>Lọc theo hãng {this.state.hang ? (<Icon style={radioStyle} type="plus" />) : (<Icon style={radioStyle} type="minus" />)}</div>
                        {(!this.state[`hang`]) && (
                          <ul className={styles['ul-list-filter']}>
                            <RadioGroup value={this.state.valueRadioBrand} onChange={(e) => this.handleChangeRadioBrand(e)} style={{ width: '100%' }}>
                              {this.state.arrBrand.map((v, i) => {
                                return <li key={i}><Radio value={v} style={radioStyle}>{v}</Radio></li>
                              })}
                              <li><Radio value={0} style={radioStyle} >Tất cả</Radio></li>
                            </RadioGroup>
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                  <div

                    className={
                      !this.state.filter ? (styles['sale__products-list___2pc3u'] + ' ' + styles['col-12']) :
                        styles['sale__products-list___2pc3u'] + ' ' + styles['product-item']
                    }
                  >
                    <div className={styles['row__row___2roCA']}>

                      {(dataFilter ? dataFilter : globalProduct).map((value, index) => {
                        return <ProductItem filter={this.state.filter} data={value} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocumentMeta>
      );
    }
    else {
      return (
        <div className={styles['filter-list-mobile']}>
          <div className={styles['title-filter-mobile']}>
            <div style={{ cursor: 'pointer' }} onClick={() => this.handleClickFilterMobile()}>Xong</div>
            <div>Hiện có 4 sản phẩm</div>
          </div>
          <div>
            <div onClick={() => this.handleClickFilterItem('gia-mobile')} className={styles['item-filter-mobile']}>Lọc theo giá {this.state['gia-mobile'] ? (<Icon style={radioStyle} type="plus" />) : <Icon style={radioStyle} type="minus" />} </div>
            {!this.state['gia-mobile'] && (
              <ul className={styles['ul-mobile']}>
                <RadioGroup value={this.state.valueRadioPrice} onChange={(e) => this.handleChangeRadioPrice(e)} style={{ width: '100%' }}>
                  <li><Radio style={radioStyle} value={1}>Dưới 1.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={2}>Từ 1.000.000 đến 3.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={3}>Từ 3.000.000 đến 5.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={4}>Từ 5.000.000 đến 7.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={5}>Từ 7.000.000 đến 1.000.0000</Radio></li>
                  <li><Radio style={radioStyle} value={6}>Từ 10.000.000 đến 20.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={7}>Trên 20.000.000</Radio></li>
                  <li><Radio style={radioStyle} value={0}>Tất cả</Radio></li>
                </RadioGroup>
              </ul>
            )}
          </div>
          <div>
            <div onClick={() => this.handleClickFilterItem('hang-mobile')} className={styles['item-filter-mobile']}>Lọc theo hãng  {this.state['hang-mobile'] ? (<Icon style={radioStyle} type="plus" />) : <Icon style={radioStyle} type="minus" />}</div>
            {!this.state['hang-mobile'] && (
              <ul className={styles['ul-mobile']}>
                <RadioGroup value={this.state.valueRadioBrand} onChange={(e) => this.handleChangeRadioBrand(e)} style={{ width: '100%' }}>
                  {this.state.arrBrand.map((v, i) => {
                    return <li key={i}><Radio value={v} style={radioStyle}>{v}</Radio></li>
                  })}
                  <li><Radio value={0} style={radioStyle} >Tất cả</Radio></li>
                </RadioGroup>
              </ul>
            )}
          </div>
        </div>
      )
    }
  }
}
export default ListCategory;
