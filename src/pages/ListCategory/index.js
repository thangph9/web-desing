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
var currencyFormatter = require('currency-formatter');

@connect(({ loading, category }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  category,
}))
class ProductItem extends PureComponent {
  render() {
    var { data } = this.props;
    let productid = data.productid ? data.productid.replace(/\-/g, '') : 'null';
    let seoTitle = data.seo_link + '/' + productid;
    const price = currencyFormatter.format(data['price'], { locale: 'vi-VN' });
    const sale_price = currencyFormatter.format(data['sale_price'], { locale: 'vi-VN' });
    return (
      <div
        className={
          styles['sale__col-6___1aN_i'] +
          ' ' +
          styles['sale__col-md-4___UhAyk'] +
          ' ' +
          styles['sale__col-lg-4___37sBv'] +
          ' ' +
          styles['product-items']
        }
      >
        <Link className={styles['product-card__productCard___2lSYu']} to={`/product/${seoTitle}`}>
          <div>
            <div
              className={
                styles['product-card__imageContainer___1apY_'] +
                ' ' +
                styles['product-card__sale-product-card____fjbZ']
              }
            >
              <img
                className={styles['product-card__image___QEKAk']}
                src={`/images/f/${data.thumbnail.replace(/\-/g, '')}`}
                alt="Giày Oxford Daiki Đen"
              />
              <div className={styles['product-card__discount___2R4sK']}>{data.sale}% Off</div>
            </div>
            <div className={styles['product-card__titleContainer___1HE6o']}>
              <h4 className={styles['product-card__brand___3np4R']}>{data.seller}</h4>
              <h4 className={styles['product-card__title___3l79X']}>{data.title}</h4>
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
@connect(({ loading, category }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  loading,
  category,
}))
@Form.create()
class ListCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      divFilter: 0,
      RECOMMEND: {
        title: 'Gợi ý',
        body: 'RECOMMEND',
      },
      HIGHEST_DISCOUNT: {
        title: 'Giảm giá nhiều nhất',
        body: 'HIGHEST_DISCOUNT',
      },
      LOW_PRICE: {
        title: 'Giá thấp đến cao',
        body: 'LOW_PRICE',
      },
      HIGH_PRICE: {
        title: 'Giá cao đến thấp',
        body: 'HIGH_PRICE',
      },
      search: '',
      category: [],
      size: [],
      type: [],
      brand: [],
      sortState: ['RECOMMEND'],
      total: '',
      total1: '',
    };
  }
  handleClickSort() {
    var sort = document.getElementById('sort-items');
    if (sort.style.display == 'block') {
      sort.style.display = 'none';
    } else sort.style.display = 'block';
  }
  handleScroll() {
    var screen = document.getElementById('screen');
    var scroll = document.documentElement.scrollTop;
    var scrollHeight = window.document.body.scrollHeight;
    var idFix = document.getElementById('filterFiexd');
    var rowFilter = document.getElementById('row-filter');
    var saleFilter = document.getElementById('sale-filter');
    var rowProduct = document.getElementById('row-product');
    var filterDiv = document.getElementById('transform-fixed');
    if (
      screen != null &&
      scroll != null &&
      scrollHeight != null &&
      rowFilter != null &&
      rowProduct != null &&
      filterDiv != null
    ) {
      if (rowProduct.clientHeight <= filterDiv.clientHeight) {
        return;
      }
      if (
        scroll >= 115 &&
        scroll < screen.clientHeight - 1184 &&
        idFix == null &&
        saleFilter != null
      ) {
        filterDiv = document.getElementById('transform-fixed');
        saleFilter.classList.add('order-pages-list-category-index-sale__fixed-position___P7XwH');
        filterDiv.classList.remove(
          'order-pages-list-category-index-sale__position-absolute___1tZOO'
        );
        var filterFixed = document.createElement('div');
        filterFixed.setAttribute('id', 'filterFiexd');
        filterFixed.setAttribute(
          'class',
          'order-pages-list-category-index-sale__filters-container___32fTU order-pages-list-category-index-sale__col-md-4___UhAyk order-pages-list-category-index-sale__col-lg-3___2xbHl order-pages-list-category-index-sale__dumb-container___lFg-z order-pages-list-category-index-visibility-hidden'
        );
        rowFilter.appendChild(filterFixed);
        rowFilter.insertBefore(filterFixed, rowFilter.childNodes[1]);
        filterDiv = document.getElementById('transform-fixed');
        var numberScreen = saleFilter.clientHeight + 115 - window.innerHeight;
        if (numberScreen > 0) {
          filterDiv.style.transform = `translateY(-${numberScreen}px)`;
          filterDiv.style.transition = 'transform 0.5s ease';
        }
      }
      if (scroll < 115 && idFix != null && saleFilter != null) {
        saleFilter.classList.remove('order-pages-list-category-index-sale__fixed-position___P7XwH');
        rowFilter.removeChild(idFix);
        filterDiv = document.getElementById('transform-fixed');
        filterDiv.classList.remove(
          'order-pages-list-category-index-sale__position-absolute___1tZOO'
        );
        filterDiv.style.transform = `translateY(0px)`;
        filterDiv.style.transition = 'transform 0.5s ease';
      }
      if (scroll >= screen.clientHeight - 1184 && idFix != null) {
        saleFilter.classList.remove('order-pages-list-category-index-sale__fixed-position___P7XwH');
        filterDiv = document.getElementById('transform-fixed');
        rowFilter.removeChild(idFix);
        filterDiv.classList.add('order-pages-list-category-index-sale__position-absolute___1tZOO');
      }
    }
  }
  componentDidMount() {
    var { dispatch, match } = this.props;
    var sort = this.props.location.query.sort;
    dispatch({
      type: 'category/list',
      payload: match.params.nodeid,
    });
    dispatch({
      type: 'category/sort',
      payload: {
        nodeid: this.props.match.params.nodeid,
        sort,
      },
    });
    dispatch({
      type: 'category/detail',
      payload: {
        nodeid: match.params.nodeid,
      },
    });
    window.addEventListener('scroll', this.handleScroll.bind(this));
    var btnSoft = document.getElementsByClassName(
      'order-pages-list-category-index-sort__btn-text___1mPct'
    )[0];
    btnSoft.textContent = this.props.location.query.sort
      ? 'Sắp xếp: ' + this.state[`${this.props.location.query.sort}`].title
      : 'Sắp xếp: Gợi ý';
    var liSort = document.getElementById(this.props.location.query.sort);
    var activeSoft = document.getElementsByClassName(
      'order-pages-list-category-index-sort__dropdown-item___XkHiS'
    );
    for (var i = 0; i < activeSoft.length; i++) {
      activeSoft[i].classList.remove('order-pages-list-category-index-sort__active___3DNgx');
    }
    liSort.classList.add('order-pages-list-category-index-sort__active___3DNgx');
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleClickButtonFilter() {
    this.setState({
      filter: !this.state.filter,
    });
    var defautLayout = document.getElementsByClassName(
      'order-layouts-home-layout-default-layout__container___13v1V'
    )[0];
    defautLayout.classList.toggle('order-pages-list-category-index-filters-expanded');
    var buttonFilter = document.getElementById('button-filter');
    buttonFilter.classList.toggle('order-pages-list-category-index-sale__filter-btn___30Ofp');
    buttonFilter.classList.toggle('order-pages-list-category-index-sale__btn-block___O8koG');
    var headerFilter = document.getElementById('header-filter');
    headerFilter.classList.toggle('order-pages-list-category-index-sale__d-t___1Trp4');
    var listProduct = document.getElementById('list-product');
    listProduct.classList.toggle('order-pages-list-category-index-sale__col-md-8___34B6S');
    listProduct.classList.toggle('order-pages-list-category-index-sale__col-lg-9___2qXAs');
    listProduct.classList.toggle('order-pages-list-category-index-sale__col-12___82vEz');
    var proudctItem = document.getElementsByClassName('product-items');
    for (var i = 0; i < proudctItem.length; i++) {
      proudctItem[i].classList.toggle('order-pages-list-category-index-sale__col-md-4___UhAyk');
      proudctItem[i].classList.toggle('order-pages-list-category-index-sale__col-md-6___3wB0o');
    }
    var titleFilter = document.getElementById('title-filter');
    if (titleFilter.textContent == 'Hiện bộ lọc') {
      titleFilter.innerText = 'Đóng bộ lọc';
      var i = document.createElement('i');
      i.setAttribute('id', 'icon-filter');
      i.setAttribute(
        'class',
        'order-pages-list-category-index-ic-ic-arrow-left order-pages-list-category-index-sale__icon-hide___3Iftv'
      );
      titleFilter.appendChild(i);
      titleFilter.insertBefore(i, titleFilter.childNodes[0]);
    } else {
      titleFilter.innerText = 'Hiện bộ lọc';
      var i = document.createElement('i');
      i.setAttribute('id', 'icon-filter');
      i.setAttribute(
        'class',
        'order-pages-list-category-index-ic-ic-arrow-right order-pages-list-category-index-sale__icon-show___3nTgw'
      );
      titleFilter.appendChild(i);
    }
  }
  handleClickSoft(sort1) {
    var liSort = document.getElementById(sort1);
    var ulSort = document.getElementById('sort-items');
    ulSort.style.display = 'none';
    var btnSoft = document.getElementsByClassName(
      'order-pages-list-category-index-sort__btn-text___1mPct'
    )[0];
    btnSoft.textContent = 'Sắp xếp: ' + liSort.textContent;
    var activeSoft = document.getElementsByClassName(
      'order-pages-list-category-index-sort__dropdown-item___XkHiS'
    );
    for (var i = 0; i < activeSoft.length; i++) {
      activeSoft[i].classList.remove('order-pages-list-category-index-sort__active___3DNgx');
    }
    liSort.classList.add('order-pages-list-category-index-sort__active___3DNgx');
    let pathname = this.props.location.pathname;
    let search = this.props.location.search;
    let query = this.props.location.query;
    var search1 = '';
    var ques = '?';
    this.setState({
      sortState: sort1,
    });
    this.setState({}, () => {
      var result = this.state.total.split('&');
      result.splice(result.length - 2, 2);
      this.setState(
        {
          search:
            result.length > 0
              ? result.join('&') + '&sort=' + this.state.sortState.toString()
              : this.state.total + 'sort=' + this.state.sortState.toString(),
        },
        () => {
          this.props.history.push({ pathname, search: this.state.search });
        }
      );
    });
    this.props.dispatch({
      type: 'category/sort',
      payload: {
        nodeid: this.props.match.params.nodeid,
        sort: sort1,
      },
    });
  }
  handleCheckFilter(filter, title) {
    if (title) {
      this.setState({
        [title]: !this.state[title],
      });
    }
    let pathname = this.props.location.pathname;
    let search = this.props.location.search;
    var result = this.state[filter].filter((v, i) => {
      return v == title;
    });
    if (result.length == 0) {
      this.setState(
        {
          category: filter == 'category' ? [...this.state.category, title] : this.state.category,
          size: filter == 'size' ? [...this.state.size, title] : this.state.size,
          type: filter == 'type' ? [...this.state.type, title] : this.state.type,
          brand: filter == 'brand' ? [...this.state.brand, title] : this.state.brand,
        },
        () => {}
      );
    } else {
      var arr = this.state[filter].filter(v => {
        return v != title;
      });
      this.setState(
        {
          category: filter == 'category' ? arr : this.state.category,
          size: filter == 'size' ? arr : this.state.size,
          type: filter == 'type' ? arr : this.state.type,
          brand: filter == 'brand' ? arr : this.state.brand,
        },
        () => {}
      );
    }
    this.setState({}, () => {
      var search1 = '';
      var ques = '?';
      if (this.state.category.length > 0) {
        search1 = search1 + 'category=' + this.state.category.toString() + '&';
      }
      if (this.state.size.length > 0) {
        search1 = search1 + 'size=' + this.state.size.toString() + '&';
      }
      if (this.state.brand.length > 0) {
        search1 = search1 + 'brand=' + this.state.brand.toString() + '&';
      }
      if (this.state.type.length > 0) {
        search1 = search1 + 'type=' + this.state.type.toString() + '&';
      }
      search1 = search1 + 'sort=' + this.state.sortState + '&';
      this.setState(
        {
          search: search1 != '' ? ques + search1.substring(0, search1.length - 1) : '',
          total: search1,
        },
        () => {
          this.props.history.push({ pathname, search: this.state.search });
        }
      );
    });
  }

  handleClickFilter(value, value1) {
    var rowFilter = document.getElementById(value);
    if (rowFilter.style.display == 'block') {
      rowFilter.style.display = 'none';
    } else rowFilter.style.display = 'block';
    var iconFilter = document.getElementById(value1);
    iconFilter.classList.toggle('order-pages-list-category-index-ic-ic-minus');
    iconFilter.classList.toggle('order-pages-list-category-index-ic-ic-plus');
  }
  renderBreadcrumb() {
    var {
      category: { detail },
    } = this.props;
    var dataDetail = [];
    if (dataDetail) {
      dataDetail = Array.isArray(detail) ? detail : [];
    }

    var link = '/';
    if (dataDetail[0] != undefined) {
      if (
        dataDetail[0].seo_link == 'amazon' ||
        dataDetail[0].seo_link == 'ebay' ||
        dataDetail[0].seo_link == 'nike' ||
        dataDetail[0].seo_link == 'adidas'
      ) {
        link += dataDetail[0].seo_link;
      }
    }
    return (
      <div className={styles['sale__col-md-8___34B6S']}>
        <ol
          className={
            styles['sale__breadcrumb___2DFJ9'] + ' ' + styles['breadcrumb__breadcrumb___3F6K8']
          }
        >
          {dataDetail.length > 0 && (
            <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
              <Link to={link}>{dataDetail.length > 0 ? dataDetail[0].title : ''}</Link>
            </li>
          )}
          <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
            <h1>{dataDetail.length > 0 ? dataDetail[1].title : ''}</h1>
          </li>
        </ol>
      </div>
    );
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

  renderFilterList(filter) {
    let data_filter = [
      { id: 'a-1', title: 'a-1' },
      { id: 'a-2', title: 'a-2' },
      { id: 'a-3', title: 'a-3' },
      { id: 'a-4', title: 'a-4' },
      { id: 'a-5', title: 'a-5' },
      { id: 'a-6', title: 'a-6' },
    ];
    var { filter } = this.state;
    var { sort } = this.props.category;
    var {
      category: { list },
    } = this.props;
    if (filter == true) {
      return (
        <div
          id="sale-filter"
          className={
            styles['sale__filters-container___32fTU'] +
            ' ' +
            styles['sale__col-md-4___UhAyk'] +
            ' ' +
            styles['sale__col-lg-3___2xbHl']
          }
        >
          <div className={styles['hidden-md-up'] + ' ' + styles['sale__filters-header___1Q-j0']}>
            <a
              onClick={() => this.handleClickButtonFilter()}
              className={styles['sale__btn-clearall___1YCDn']}
            >
              Xoá bộ lọc
            </a>
            <a className={styles['sale__btn-done___2Y14U']}>
              <i className={styles['fa'] + ' ' + styles['fa-caret-left'] + ' ' + styles['fa-fw']} />
              Xong
            </a>
            <div
              className={
                styles['sale__total-items___u7EoB'] + ' ' + styles['total-items__text___1TBmn']
              }
            >
              {list.length} Sản phẩm
            </div>
          </div>
          <div id="transform-fixed" className={styles['sale__fitlers-content-wrap___pU5ed']}>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5
                  id="phan-loai"
                  onClick={() => this.handleClickFilter('phan-loai-row', 'icon-phan-loai')}
                  className={styles['clearfix']}
                >
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="category"
                  >
                    <span className={styles['float-left']}>Phân loại</span>
                    <i
                      id="icon-phan-loai"
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div id="phan-loai-row" style={{ display: 'block' }}>
                <div className={styles['row__row___2roCA']}>
                  {sort.style && sort.style.length > 0
                    ? sort.style.map((e, i) => {
                        var v = e.replace(/ /g, '');
                        return (
                          <div key={i} className={styles['grid__col-12___39hfZ']}>
                            <div className={styles['filter-option__filter-option___3Xmf0']}>
                              <button
                                onClick={() => this.handleCheckFilter('category', v)}
                                type="button"
                                className={
                                  !this.state[v]
                                    ? styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy']
                                    : styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy'] +
                                      ' ' +
                                      styles['filter-option__active___1HV6C']
                                }
                              >
                                {this.state[v] && (
                                  <span
                                    className={
                                      styles['filter-option__icon___1wxyY'] +
                                      ' ' +
                                      styles['ic-ic-close']
                                    }
                                  />
                                )}
                                {e}
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5
                  id="kich-co"
                  onClick={() => this.handleClickFilter('kich-co-row', 'icon-kich-co')}
                  className={styles['clearfix']}
                >
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="size"
                  >
                    <span className={styles['float-left']}>Kích cỡ</span>
                    <i
                      id="icon-kich-co"
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div id="kich-co-row" style={{ display: 'block' }}>
                <div className={styles['row__row___2roCA']}>
                  {sort.size && sort.size.length > 0
                    ? sort.size.map((e, i) => {
                        var v = e.replace(/ /g, '');

                        return (
                          <div key={i} className={styles['grid__col-6___211BX']}>
                            <div className={styles['filter-option__filter-option___3Xmf0']}>
                              <button
                                onClick={() => this.handleCheckFilter('size', v)}
                                type="button"
                                className={
                                  styles['filter-option__btn___2u45i'] +
                                  ' ' +
                                  styles['filter-option__btn-secondary___1DPfK'] +
                                  ' ' +
                                  styles['filter-option__btn-block___1tZOy']
                                }
                              >
                                e
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5
                  id="thuong-hieu"
                  onClick={() => this.handleClickFilter('thuong-hieu-row', 'icon-thuong-hieu')}
                  className={styles['clearfix']}
                >
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="brand"
                  >
                    <span className={styles['float-left']}>Thương hiệu</span>
                    <i
                      id="icon-thuong-hieu"
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div id="thuong-hieu-row" style={{ display: 'block' }}>
                <div className={styles['row__row___2roCA']}>
                  {sort.brand && sort.brand.length > 0
                    ? sort.brand.map((e, i) => {
                        var v = e.replace(/ /g, '');
                        return (
                          <div key={i} className={styles['grid__col-12___39hfZ']}>
                            <div className={styles['filter-option__filter-option___3Xmf0']}>
                              <button
                                onClick={() => this.handleCheckFilter('brand', v)}
                                type="button"
                                className={
                                  !this.state[v]
                                    ? styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy']
                                    : styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy'] +
                                      ' ' +
                                      styles['filter-option__active___1HV6C']
                                }
                              >
                                {this.state[v] && (
                                  <span
                                    className={
                                      styles['filter-option__icon___1wxyY'] +
                                      ' ' +
                                      styles['ic-ic-close']
                                    }
                                  />
                                )}
                                {e}
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5
                  id="type"
                  onClick={() => this.handleClickFilter('type-row', 'icon-type')}
                  className={styles['clearfix']}
                >
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="type"
                  >
                    <span className={styles['float-left']}>TYPE</span>
                    <i
                      id="icon-type"
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div id="type-row" style={{ display: 'block' }}>
                <div className={styles['row__row___2roCA']}>
                  {sort.type && sort.type.length > 0
                    ? sort.type.map((e, i) => {
                        var v = e.replace(/ /g, '');
                        return (
                          <div key={i} className={styles['grid__col-12___39hfZ']}>
                            <div className={styles['filter-option__filter-option___3Xmf0']}>
                              <button
                                onClick={() => this.handleCheckFilter('type', v)}
                                type="button"
                                className={
                                  !this.state[v]
                                    ? styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy']
                                    : styles['filter-option__btn___2u45i'] +
                                      ' ' +
                                      styles['filter-option__btn-secondary___1DPfK'] +
                                      ' ' +
                                      styles['filter-option__btn-block___1tZOy'] +
                                      ' ' +
                                      styles['filter-option__active___1HV6C']
                                }
                              >
                                {this.state[v] && (
                                  <span
                                    className={
                                      styles['filter-option__icon___1wxyY'] +
                                      ' ' +
                                      styles['ic-ic-close']
                                    }
                                  />
                                )}
                                {e}
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else return '';
  }
  renderTotalProduct() {
    var { filter } = this.state;
    var {
      category: { list },
    } = this.props;
    return (
      <div
        className={
          styles['hidden-sm-down'] +
          ' ' +
          styles['sale__col-md-6___3wB0o'] +
          ' ' +
          styles['sale__left-pane___1c5Jj']
        }
      >
        <div
          className={
            styles['sale__total-items___u7EoB'] + ' ' + styles['total-items__text___1TBmn']
          }
        >
          {list.length} Sản phẩm
        </div>
      </div>
    );
  }
  render() {
    var { filter, test } = this.state;
    var {
      category: { list },
    } = this.props;
    var {
      category: { detail },
    } = this.props;
    var dataDetail = [];
    if (dataDetail) {
      dataDetail = Array.isArray(detail) ? detail : [];
      var dataBreadcrumb = typeof dataDetail[1] === 'object' ? dataDetail[1] : {};
      const title = dataBreadcrumb.title ? dataBreadcrumb.title : 'Danh sách sản phẩm';
      const meta_description = dataBreadcrumb.meta_description
        ? dataBreadcrumb.meta_description
        : '123order ';
      const meta_data = dataBreadcrumb.meta ? dataBreadcrumb.meta : '123order,order';
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
      return (
        <DocumentMeta {...meta}>
          <div className={styles['container__container___1fvX0']}>
            <div className={styles['sale__sale___1auiY']}>
              <div className={styles['sale__sale-header___1lQxA']}>
                <div
                  className={
                    styles['row__row___2roCA'] +
                    ' ' +
                    styles['clearfix'] +
                    ' ' +
                    styles['sale__header-top___3nxZf']
                  }
                >
                  {this.renderBreadcrumb()}
                  {this.renderEndTime()}
                </div>
                <div
                  id="header-filter"
                  className={
                    styles['row__row___2roCA'] +
                    ' ' +
                    styles['clearfix'] +
                    ' ' +
                    styles['sale__header-lower___20QGi'] +
                    ' ' +
                    styles['sale__d-t___1Trp4']
                  }
                >
                  <div
                    className={
                      styles['sale__left-pane___1c5Jj'] +
                      ' ' +
                      styles['sale__col-6___1aN_i'] +
                      ' ' +
                      styles['sale__col-md-4___UhAyk'] +
                      ' ' +
                      styles['sale__btn-filter-wrap___1hpsO'] +
                      ' ' +
                      styles['sale__col-lg-3___2xbHl']
                    }
                  >
                    <button
                      id="button-filter"
                      onClick={() => this.handleClickButtonFilter()}
                      type="button"
                      className={
                        styles['sale__btn___3OqFl'] +
                        ' ' +
                        styles['sale__btn-secondary___3ka36'] +
                        ' ' +
                        styles['active']
                      }
                    >
                      <span id="title-filter">
                        Hiện bộ lọc
                        <i
                          id="icon-filter"
                          className={
                            styles['ic-ic-arrow-right'] + ' ' + styles['sale__icon-show___3nTgw']
                          }
                        />
                      </span>
                    </button>
                  </div>
                  <div
                    className={
                      styles['sale__right-pane___2P_gS'] +
                      ' ' +
                      styles['sale__col-6___1aN_i'] +
                      ' ' +
                      styles[' sale__col-md-8___34B6S'] +
                      ' ' +
                      styles['sale__col-lg-9___2qXAs']
                    }
                  >
                    <div className={styles['row__row___2roCA']}>
                      {this.renderTotalProduct()}
                      <div
                        className={
                          styles['clearfix'] +
                          ' ' +
                          styles['sale__col-md-6___3wB0o'] +
                          ' ' +
                          styles['sale__right-pane___2P_gS'] +
                          ' ' +
                          styles['sale__btn-sort-wrap___nd_gy']
                        }
                      >
                        <div
                          className={styles['float-right'] + ' ' + styles['sort__dropdown___2bcri']}
                        >
                          <button
                            onClick={() => this.handleClickSort()}
                            type="button"
                            className={
                              styles['sort__btn___1Cu7A'] +
                              ' ' +
                              styles['sort__btn-secondary___2iOCb'] +
                              ' ' +
                              styles['sort__dropdown-toggle___1pM4w']
                            }
                          >
                            <span className={styles['sort__btn-text___1mPct']}>
                              {' '}
                              Sắp xếp: Gợi ý
                            </span>
                            <i
                              className={
                                styles['ic-ic-arrow-down'] + ' ' + styles['sort__icon___3yfiZ']
                              }
                            />
                          </button>
                          <ul
                            id="sort-items"
                            className={
                              styles['sort__dropdown-menu-right___1zFcq'] +
                              ' ' +
                              styles['sort__dropdown-menu___3NLmO']
                            }
                            role="menu"
                            aria-labelledby="single-button"
                          >
                            <li role="menuitem">
                              <a
                                id="RECOMMEND"
                                onClick={() => this.handleClickSoft('RECOMMEND')}
                                href="javascript:void(0)"
                                className={
                                  styles['sort__dropdown-item___XkHiS'] +
                                  ' ' +
                                  styles['sort__active___3DNgx']
                                }
                              >
                                Gợi ý
                              </a>
                            </li>
                            <li role="menuitem">
                              <a
                                id="HIGHEST_DISCOUNT"
                                onClick={() => this.handleClickSoft('HIGHEST_DISCOUNT')}
                                href="javascript:void(0)"
                                className={styles['sort__dropdown-item___XkHiS']}
                              >
                                Giảm giá nhiều nhất
                              </a>
                            </li>
                            <li role="menuitem">
                              <a
                                id="LOW_PRICE"
                                onClick={() => this.handleClickSoft('LOW_PRICE')}
                                href="javascript:void(0)"
                                className={styles['sort__dropdown-item___XkHiS']}
                              >
                                Giá thấp đến cao
                              </a>
                            </li>
                            <li role="menuitem">
                              <a
                                id="HIGH_PRICE"
                                onClick={() => this.handleClickSoft('HIGH_PRICE')}
                                href="javascript:void(0)"
                                className={styles['sort__dropdown-item___XkHiS']}
                              >
                                Giá cao đến thấp
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles['hidden-md-up'] + ' ' + styles['sale__mobile-data___evUIw']}
                  >
                    <div
                      className={
                        styles['sale__total-items___u7EoB'] +
                        ' ' +
                        styles['sale__col-6___1aN_i'] +
                        ' ' +
                        styles['total-items__text___1TBmn']
                      }
                    >
                      {list.length} sản phẩm
                    </div>
                    <span
                      className={
                        styles['sale__end-time___MKUlz'] + ' ' + styles['sale__col-6___1aN_i']
                      }
                    >
                      <i
                        className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']}
                      />{' '}
                      <span className={styles['end-time__text___1A-sx']}>Còn</span>{' '}
                      <span className={styles['end-time__timer___LMsIT']}>7 ngày</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles['sale__sale-content___1M-Lr']}>
                <div id="row-filter" className={styles['row__row___2roCA']}>
                  {this.renderFilterList(filter)}
                  <div
                    id="list-product"
                    className={
                      styles['sale__products-list___2pc3u'] + ' ' + styles['sale__col-12___82vEz']
                    }
                  >
                    <div id="row-product" className={styles['row__row___2roCA']}>
                      {list.map((value, index) => {
                        return <ProductItem data={value} key={index} />;
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
  }
}
export default ListCategory;
