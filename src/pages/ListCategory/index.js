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
      soft: '',
    };
  }
  handleClickSort() {
    var sort = document.getElementById('sort-items');
    if (sort.style.display == 'block') {
      sort.style.display = 'none';
    } else sort.style.display = 'block';
  }
  handleScroll() {
    var scroll = document.documentElement.scrollTop;
    var scrollHeight = window.document.body.scrollHeight;
    var idFix = document.getElementById('filterFiexd');
    var saleFilter = document.getElementById('sale-filter');
    if (scroll >= 115 && idFix == null && saleFilter != null) {
      saleFilter.classList.add('order\\pages\\-list-category\\index-sale__fixed-position___P7XwH');
      var rowFilter = document.getElementById('row-filter');
      var filterFixed = document.createElement('div');
      filterFixed.setAttribute('id', 'filterFiexd');
      filterFixed.setAttribute(
        'class',
        'order\\pages\\-list-category\\index-sale__filters-container___32fTU order\\pages\\-list-category\\index-sale__col-md-4___UhAyk order\\pages\\-list-category\\index-sale__col-lg-3___2xbHl order\\pages\\-list-category\\index-sale__dumb-container___lFg-z'
      );
      rowFilter.appendChild(filterFixed);
      rowFilter.insertBefore(filterFixed, rowFilter.childNodes[1]);
      var filterDiv = document.getElementById('transform-fixed');
      if (
        filterDiv.clientHeight + 115 >= window.innerHeight &&
        filterDiv.clientHeight + 115 - window.innerHeight - (scroll - 115) > 0
      ) {
        this.setState({
          divScroll: 115 - scroll,
        });
      } else {
        this.setState({
          divScroll: -(filterDiv.clientHeight + 115 - window.innerHeight),
        });
      }
      filterDiv.style['transform'] = `translate3d(0px,${this.state.divScroll}px, 0px)`;
    }
    if ((scroll < 115 || scroll > scrollHeight - 380) && idFix != null && saleFilter != null) {
      saleFilter.classList.remove(
        'order\\pages\\-list-category\\index-sale__fixed-position___P7XwH'
      );
      var rowFilter = document.getElementById('row-filter');
      var filterFixed = document.getElementById('filterFiexd');
      rowFilter.removeChild(filterFixed);
    }
  }
  componentDidMount() {
    var { dispatch, match } = this.props;
    dispatch({
      type: 'category/list',
      payload: match.params.nodeid,
    });
    console.log(this.props);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleClickButtonFilter() {
    this.setState({
      filter: !this.state.filter,
    });
    var defautLayout = document.getElementsByClassName(
      'order\\layouts\\-home-layout-default-layout__container___13v1V'
    )[0];
    defautLayout.classList.toggle('order\\pages\\-list-category\\index-filters-expanded');
    var buttonFilter = document.getElementById('button-filter');
    buttonFilter.classList.toggle('order\\pages\\-list-category\\index-sale__filter-btn___30Ofp');
    buttonFilter.classList.toggle('order\\pages\\-list-category\\index-sale__btn-block___O8koG');
    var headerFilter = document.getElementById('header-filter');
    headerFilter.classList.toggle('order\\pages\\-list-category\\index-sale__d-t___1Trp4');
    var listProduct = document.getElementById('list-product');
    listProduct.classList.toggle('order\\pages\\-list-category\\index-sale__col-md-8___34B6S');
    listProduct.classList.toggle('order\\pages\\-list-category\\index-sale__col-lg-9___2qXAs');
    listProduct.classList.toggle('order\\pages\\-list-category\\index-sale__col-12___82vEz');
    var proudctItem = document.getElementsByClassName('product-items');
    for (var i = 0; i < proudctItem.length; i++) {
      proudctItem[i].classList.toggle('order\\pages\\-list-category\\index-sale__col-md-4___UhAyk');
      proudctItem[i].classList.toggle('order\\pages\\-list-category\\index-sale__col-md-6___3wB0o');
    }
    var titleFilter = document.getElementById('title-filter');
    if (titleFilter.textContent == 'Hiện bộ lọc') {
      titleFilter.innerText = 'Đóng bộ lọc';
      var i = document.createElement('i');
      i.setAttribute('id', 'icon-filter');
      i.setAttribute(
        'class',
        'order\\pages\\-list-category\\index-ic-ic-arrow-left order\\pages\\-list-category\\index-sale__icon-hide___3Iftv'
      );
      titleFilter.appendChild(i);
      titleFilter.insertBefore(i, titleFilter.childNodes[0]);
    } else {
      titleFilter.innerText = 'Hiện bộ lọc';
      var i = document.createElement('i');
      i.setAttribute('id', 'icon-filter');
      i.setAttribute(
        'class',
        'order\\pages\\-list-category\\index-ic-ic-arrow-right order\\pages\\-list-category\\index-sale__icon-show___3nTgw'
      );
      titleFilter.appendChild(i);
    }
  }
  handleClickSoft(sort, id) {
    this.setState(
      {
        sort,
      },
      () => {}
    );
    var liSort = document.getElementById(id);
    var ulSort = document.getElementById('sort-items');
    ulSort.style.display = 'none';
    var btnSoft = document.getElementsByClassName(
      'order\\pages\\-list-category\\index-sort__btn-text___1mPct'
    )[0];
    btnSoft.textContent = 'Sắp xếp: ' + liSort.textContent;
    var activeSoft = document.getElementsByClassName(
      'order\\pages\\-list-category\\index-sort__dropdown-item___XkHiS'
    );
    for (var i = 0; i < activeSoft.length; i++) {
      activeSoft[i].classList.remove('order\\pages\\-list-category\\index-sort__active___3DNgx');
    }
    liSort.classList.add('order\\pages\\-list-category\\index-sort__active___3DNgx');
    let pathname = this.props.location.pathname;
    let search = this.props.location.search;
    this.props.history.push({ pathname, search: '?sort=' + sort });
    this.props.dispatch({
      type: 'category/sort',
      payload: {
        nodeid: this.props.match.params.nodeid,
        sort: this.props.location.query.sort,
      },
    });
  }
  renderBreadcrumb() {
    var {
      category: { breadcrumb },
    } = this.props;

    return (
      <div className={styles['sale__col-md-8___34B6S']}>
        <ol
          className={
            styles['sale__breadcrumb___2DFJ9'] + ' ' + styles['breadcrumb__breadcrumb___3F6K8']
          }
        >
          <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
            <a href="/">Ưu đãi</a>
          </li>
          <li className={styles['breadcrumb__breadcrumb-item___3ytpk']}>
            <h1>{breadcrumb.title}</h1>
          </li>
        </ol>
      </div>
    );
  }
  renderEndTime() {
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
        <span>
          <i className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']} />{' '}
          <span className={styles['end-time__text___1A-sx']}>Còn</span>{' '}
          <span className={styles['end-time__timer___LMsIT']}>7 ngày</span>
        </span>
      </div>
    );
  }
  renderFilterList(filter) {
    var { filter } = this.state;
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
                <h5 className={styles['clearfix']}>
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="category"
                  >
                    <span className={styles['float-left']}>Phân loại</span>
                    <i
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div>
                <div className={styles['row__row___2roCA']}>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Derbys &amp; Oxfords
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Slip-Ons
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Giày tây
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Thắt dây thể thao
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Loafers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5 className={styles['clearfix']}>
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="size"
                  >
                    <span className={styles['float-left']}>Kích cỡ</span>
                    <i
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div>
                <div className={styles['row__row___2roCA']}>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        24.5
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        25
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        25.5
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        26
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        26.5
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        27
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        27.5
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        28
                      </button>
                    </div>
                  </div>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        29
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5 className={styles['clearfix']}>
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="brand"
                  >
                    <span className={styles['float-left']}>Thương hiệu</span>
                    <i
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div>
                <div className={styles['row__row___2roCA']}>
                  <div className={styles['grid__col-12___39hfZ']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        JacQ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['filter__filter-container___1hLIM']}>
              <div className={styles['filter__filter-header___3I6RP']}>
                <h5 className={styles['clearfix']}>
                  <a
                    className={styles['clearfix'] + ' ' + styles['d-block']}
                    href="javascript:void(0)"
                    id="type"
                  >
                    <span className={styles['float-left']}>TYPE</span>
                    <i
                      className={
                        styles['fa'] + ' ' + styles['float-right'] + ' ' + styles['ic-ic-minus']
                      }
                    />
                  </a>
                </h5>
              </div>
              <div>
                <div className={styles['row__row___2roCA']}>
                  <div className={styles['grid__col-6___211BX']}>
                    <div className={styles['filter-option__filter-option___3Xmf0']}>
                      <button
                        type="button"
                        className={
                          styles['filter-option__btn___2u45i'] +
                          ' ' +
                          styles['filter-option__btn-secondary___1DPfK'] +
                          ' ' +
                          styles['filter-option__btn-block___1tZOy']
                        }
                      >
                        Giày Nam
                      </button>
                    </div>
                  </div>
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
    var { filter } = this.state;
    var {
      category: { list },
    } = this.props;
    console.log(this.props.category);
    window.addEventListener('scroll', this.handleScroll.bind(this));
    return (
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
                    <div className={styles['float-right'] + ' ' + styles['sort__dropdown___2bcri']}>
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
                        <span className={styles['sort__btn-text___1mPct']}> Sắp xếp: Gợi ý</span>
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
                            id="recommend"
                            onClick={() => this.handleClickSoft('RECOMMEND', 'recommend')}
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
                            id="highest-discount"
                            onClick={() =>
                              this.handleClickSoft('HIGHEST_DISCOUNT', 'highest-discount')
                            }
                            href="javascript:void(0)"
                            className={styles['sort__dropdown-item___XkHiS']}
                          >
                            Giảm giá nhiều nhất
                          </a>
                        </li>
                        <li role="menuitem">
                          <a
                            id="low-price"
                            onClick={() => this.handleClickSoft('LOW_PRICE', 'low-price')}
                            href="javascript:void(0)"
                            className={styles['sort__dropdown-item___XkHiS']}
                          >
                            Giá thấp đến cao
                          </a>
                        </li>
                        <li role="menuitem">
                          <a
                            id="high-price"
                            onClick={() => this.handleClickSoft('HIGH_PRICE', 'high-price')}
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
              <div className={styles['hidden-md-up'] + ' ' + styles['sale__mobile-data___evUIw']}>
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
                  className={styles['sale__end-time___MKUlz'] + ' ' + styles['sale__col-6___1aN_i']}
                >
                  <i className={styles['ic-ic-time'] + ' ' + styles['end-time__icon___REEKA']} />{' '}
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
                <div className={styles['row__row___2roCA']}>
                  {list.map((value, index) => {
                    return <ProductItem data={value} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCategory;
