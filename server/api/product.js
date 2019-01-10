/* eslint-disable no-continue */
/* eslint-disable no-useless-escape */
/* eslint-disable spaced-comment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable arrow-body-style */
/* eslint-disable one-var */
/* eslint-disable no-else-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable dot-notation */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var moment = require('moment');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const async = require('async');
const bcrypt = require('bcryptjs');
const Uuid = require('cassandra-driver').types.Uuid;
const models = require('../settings');
var publicKEY = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
var express = require('express');
const sharp = require('sharp');
function productList(req, res) {
  let results = {};
  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: *ef4a584e-3497-4b55-8991-55146d5a4757*"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid', 'death_clock'] },
          function(err, res) {
            if (res) {
              results['news'] = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: *af739c5a-fa25-44bf-bc83-56fadcb1967f*"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid', 'death_clock'] },
          function(err, res) {
            if (res) {
              results['days'] = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: *07081437-d862-48d0-9987-4f656bd2de30*"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid', 'death_clock'] },
          function(err, res) {
            if (res) {
              results['hotnew'] = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: *08ecb1e-cabf-4328-9ddc-011ca55a156d*"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid', 'death_clock'] },
          function(err, res) {
            if (res) {
              results['bestSeller'] = res;
            }
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function getRaito(req, res) {
  let raito = {};
  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.currency_raito.find({}, function(err, items) {
          if (items) {
            raito = items;
          }
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: raito });
    }
  );
}
function productDetail(req, res) {
  let results = {};
  let productid = '';
  let raito = {};
  let nodeid = '';
  let breadcrumb = [];
  var category = [];
  async.series(
    [
      function(callback) {
        try {
          let rawProductid = req.body.productid;
          let uuid =
            rawProductid.substring(0, 7) +
            '-' +
            rawProductid.substring(7, 11) +
            '-' +
            rawProductid.substring(11, 15) +
            '-' +
            rawProductid.substring(15, 20) +
            '-' +
            rawProductid.substring(20, 32);

          productid = models.uuidFromString(uuid);
          if (req.body.nodeid) {
            let rawNodeid = req.body.nodeid;
            let id =
              rawNodeid.substring(0, 7) +
              '-' +
              rawNodeid.substring(7, 11) +
              '-' +
              rawNodeid.substring(11, 15) +
              '-' +
              rawNodeid.substring(15, 20) +
              '-' +
              rawNodeid.substring(20, 32);

            nodeid = models.uuidFromString(id);
          }
        } catch (e) {
          return res.send({ status: 'error_invalid' });
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.product_detail.find({ productid }, function(err, res) {
          if (res && res.length > 0) {
            results = res[0];
            if (nodeid == '') {
              try {
                nodeid = res[0].nodeid[0];
              } catch (e) {}
            }
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (results && results.currency) {
          models.instance.currency_raito.find({ currency: results.currency }, function(err, items) {
            if (items && items.length > 0) {
              raito = items[0].raito;
              let n = JSON.stringify(results);
              results = JSON.parse(n);
              results['_price'] = items[0].raito * results.price;
              results['_sale_price'] = items[0].raito * results.sale_price;
            }
            callback(err, null);
          });
        } else {
          callback(null, null);
        }
      },
      function(callback) {
        if (nodeid != '') {
          models.instance.category.find(
            {},
            { select: ['title', 'nodeid', 'category', 'seo_link'] },
            function(err, items) {
              if (items && items.length > 0) {
                category = items;
              }
              callback(err, null);
            }
          );
        } else {
          callback(null, null);
        }
      },
      /*function(callback) {
        breadcrumb = generateMap(category, nodeid);
        results.breadcrumb = breadcrumb;
        callback(null, null);
      },*/
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function productCategory(req, res) {
  let results = {};
  let PARAMS_IS_VALID = {};
  const params = req.body;
  var currency = [];
  async.series(
    [
      function(callback) {
        let rawImage = params.nodeid;
        let uuid =
          rawImage.substring(0, 8) +
          '-' +
          rawImage.substring(8, 12) +
          '-' +
          rawImage.substring(12, 16) +
          '-' +
          rawImage.substring(16, 20) +
          '-' +
          rawImage.substring(20, 32);
        PARAMS_IS_VALID['nodeid'] = uuid;
        callback(null, null);
      },
      function(callback) {
        models.instance.product_detail.find(
          { $solr_query: '{"q": "nodeid: *' + PARAMS_IS_VALID['nodeid'] + '*"}' },
          {
            select: [
              'title',
              'thumbnail',
              'seo_link',
              'nodeid',
              'productid',
              'sale',
              'price',
              'seller',
              'brand',
              'sale_price',
            ],
          },
          function(err, rs) {
            if (rs) {
              results['items'] = rs;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "nodeid: ' + PARAMS_IS_VALID['nodeid'] + '"}' },
          function(err, res) {
            if (res) {
              results['breadcrumb'] = res[0];
            }

            callback(err, null);
          }
        );
      },

      function(callback) {
        models.instance.currency_raito.find({}, function(err, items) {
          if (items && items.length > 0) {
            results['raito'] = items;
          }
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function bestSeller(req, res) {}
function dealday(req, res) {}
function hotnew(req, res) {}
function productAmazon(req, res) {
  let results = {};
  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 90c68414-48d6-4618-9002-16a537b9e992"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.news = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: dacc6da8-8439-404d-b2b8-bcfef824ff55"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.days = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 17bee6a4-aea3-4ce5-8128-718ae760aa26"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.hotnew = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 42b2279b-5aca-42c7-b38f-05f8d05fa510"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.bestSeller = res;
            }
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function productEbay(req, res) {
  let results = {};
  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 66a38a3f-1623-4f8e-9c6c-4a113cb08f24"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.news = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 97990f3a-5112-4569-a193-dd57fff59ca2"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.days = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: a2b7830e-83f4-4fdb-8095-24e5c43efac8"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.hotnew = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 50863914-762c-4d1a-abda-fb1a5a5282ff"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.bestSeller = res;
            }
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function productNike(req, res) {
  let results = {};
  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 8fffc784-7abf-4170-a49e-c43e02d4a373"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.news = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: c37e118d-7cb4-4530-a67d-9b231271d20d"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.days = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: c37e118d-7cb4-4530-a67d-9b231271d20d"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.hotnew = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category:b1f6e114-2784-487c-8a5a-4db5c5780347 "}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, res) {
            if (res && res.length > 0) {
              results.bestSeller = res;
            }
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function productAdidas(req, res) {
  let results = {};
  async.series(
    [
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: b94fc58d-3446-477b-b82c-13d002d5facc"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, items) {
            if (items && items.length > 0) {
              results['news'] = items;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 8c264c8f-c0a8-49b8-abe9-eb0e07c22337"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, items) {
            if (items && items.length > 0) {
              results.days = items;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: f07b01f1-4d4d-47b0-9043-3dad61600596"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, items) {
            if (items && items.length > 0) {
              results.hotnew = items;
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        models.instance.category.find(
          { $solr_query: '{"q": "category: 80a2e1db-cbb8-47cb-b67a-27d854cae3f8"}' },
          { select: ['title', 'thumbnail', 'seo_link', 'nodeid'] },
          function(err, items) {
            if (items && items.length > 0) {
              results.bestSeller = items;
            }
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      else res.send({ status: 'ok', data: results });
    }
  );
}
function productSearch(req, res) {
  let results = {};
  let filterMap = {};
  let raito = {};
  let query = {};
  let sort = '';
  let brand = '',
    style = '',
    size = '',
    color = '',
    nodeid = '';
  let current = 1;
  async.series(
    [
      function(callback) {
        try {
          let tempNode = req.body.nodeid;
          let sortTmp = req.body.sort;
          let brand = req.body.brand;
          let style = req.body.style;
          let size = req.body.size;
          let color = req.body.color;
          let type = req.body.type;
          let tmpQuery = '';

          if (brand) {
            tmpQuery = 'brand: *' + brand + '*';
          }
          if (style) {
            if (tmpQuery.length > 0) {
              tmpQuery = tmpQuery + ' AND style: *' + style + '*';
            } else {
              tmpQuery = '"style: *' + style + '*"';
            }
          }
          if (size) {
            if (tmpQuery.length > 0) {
              tmpQuery = tmpQuery + ' AND size: *' + size + '*';
            } else {
              tmpQuery = '"size: *' + size + '*"';
            }
          }
          if (color) {
            if (tmpQuery.length > 0) {
              tmpQuery = tmpQuery + ' AND color: *' + color + '*';
            } else {
              tmpQuery = '"color: *' + color + '*"';
            }
          }
          if (type) {
            if (tmpQuery.length > 0) {
              tmpQuery = tmpQuery + ' AND type: *' + type + '*';
            } else {
              tmpQuery = '"type: *' + type + '*"';
            }
          }

          if (tempNode) {
            let cvNodeid =
              tempNode.substring(0, 8) +
              '-' +
              tempNode.substring(8, 12) +
              '-' +
              tempNode.substring(12, 16) +
              '-' +
              tempNode.substring(16, 20) +
              '-' +
              tempNode.substring(20, 32);
            if (tmpQuery.length > 0) {
              tmpQuery = tmpQuery + ' AND nodeid: *' + cvNodeid + '*';
            } else {
              tmpQuery = '"nodeid: *' + cvNodeid + '*"';
            }
          }

          switch (sortTmp) {
            case 'HIGH_PRICE':
              sort = ' "sort": "sale_price desc "';
              break;
            case 'LOW_PRICE':
              sort = ' "sort": "sale_price asc "';
              break;
            case 'RECOMMEND':
              sort = ' "sort": "createat desc "';
              break;
            case 'HIGHEST_DISCOUNT':
              sort = ' "sort": "sale desc "';
              break;
            default:
              sort = ' "sort": "createat desc "';
              break;
          }
          let mergeQuery = brand + style + size + color + nodeid;
          if (mergeQuery.length > 0) {
            query = '{"q": ' + tmpQuery + ',' + sort + '}';
          } else {
            query = '{"q": "*:*",' + sort + '}';
          }
        } catch (e) {
          return res.send({ status: 'error_invalid' });
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.product_detail.find({ $solr_query: query }, function(err, res) {
          if (res && res.length > 0) {
            results.items = res;
          }
          callback(err, null);
        });
      },
      function(callback) {
        models.instance.currency_raito.find({}, function(err, items) {
          if (items && items.length > 0) {
            results.raito = items;
          }
          callback(err, null);
        });
      },
      function(callback) {
        renderFilter(results.items, function(err, r) {
          filterMap = r;
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      var total = 1;
      var rs = [];
      if (results.items && results.items.length > 0) {
        total = results.items.length;
        rs = results.items;
      }
      if (err) return res.send({ status: 'error' });
      res.send({
        status: 'ok',
        data: {
          list: rs,
          pagination: { total: total, current: current },
          filterMap: filterMap,
          raito: results.raito,
        },
      });
    }
  );
}
function getBreadcumb(category, nodeid) {
  return category.filter(node => {
    return node.nodeid.toString() == nodeid;
  });
}
function generateMap(category, nodeid) {
  let parent = [];
  let temp = {};
  let children = {};
  var i = 0;
  var node = nodeid;
  children = getBreadcumb(category, node);
  parent.push(children[0]);
  var i = 1;
  while (children[0].category != null && i < 100) {
    if (children[0] && children[0].category && children[0].category.length > 0) {
      node = children[0].category[0];
      children = getBreadcumb(category, node);
      parent.push(children[0]);
    } else {
      children = getBreadcumb(category, node);
      parent.push(children[0]);
    }
    i++;
  }
  return parent.reverse();
}
function renderFilter(result, callback) {
  let filterMap = {};
  filterMap.style = [];
  filterMap.color = [];
  filterMap.size = [];
  filterMap.brand = [];
  filterMap.type = [];
  async.series(
    [
      function(callback) {
        if (result && result.length > 0) {
          result.map(e => {
            if (e.style && e.style.length > 0) {
              filterMap.style.push(e.style);
            }
            if (e.color && e.color.length > 0) {
              filterMap.color.push(e.color);
            }
            if (e.size && e.size.length > 0) {
              filterMap.size.push(e.size);
            }
            if (e.brand && e.brand.length > 0) {
              filterMap.brand.push(e.brand);
            }
            if (e.type && e.type.length > 0) {
              filterMap.type.push(e.type);
            }
          });
        }

        callback(null, null);
      },
      function(callback) {
        filterMap.style = filterMap.style.filter(function(elem, pos) {
          return filterMap.style.indexOf(elem) == pos;
        });
        filterMap.color = filterMap.color.filter(function(elem, pos) {
          return filterMap.color.indexOf(elem) == pos;
        });
        filterMap.size = filterMap.size.filter(function(elem, pos) {
          return filterMap.size.indexOf(elem) == pos;
        });
        filterMap.brand = filterMap.brand.filter(function(elem, pos) {
          return filterMap.brand.indexOf(elem) == pos;
        });
        filterMap.type = filterMap.type.filter(function(elem, pos) {
          return filterMap.type.indexOf(elem) == pos;
        });
        callback(null, null);
      },
    ],
    function(err, res) {
      callback(err, filterMap);
    }
  );
}
function treeMapBreadCumb(category, nodeid, callback) {
  let treeMap = [];
  let parent = {};
  async.series(
    [
      function(callback) {
        //treeMap=generateMap(category,nodeid,parent);
        callback(null, null);
      },
    ],
    function(err, result) {
      callback(err, treeMap);
    }
  );
}
function productDetailTest(req, res) {
  let results = {};
  let productid = '';
  let raito = {};
  let nodeid = '';
  let breadcrumb = [];
  let category = [];
  async.series(
    [
      function(callback) {
        try {
          let rawProductid = req.body.productid;
          let uuid =
            rawProductid.substring(0, 7) +
            '-' +
            rawProductid.substring(7, 11) +
            '-' +
            rawProductid.substring(11, 15) +
            '-' +
            rawProductid.substring(15, 20) +
            '-' +
            rawProductid.substring(20, 32);
          productid = models.uuidFromString(uuid);
          if (req.body.nodeid) {
            let rawNodeid = req.body.nodeid;
            let id =
              rawNodeid.substring(0, 7) +
              '-' +
              rawNodeid.substring(7, 11) +
              '-' +
              rawNodeid.substring(11, 15) +
              '-' +
              rawNodeid.substring(15, 20) +
              '-' +
              rawNodeid.substring(20, 32);

            nodeid = models.uuidFromString(id);
          }
        } catch (e) {
          return res.send({ status: 'error_invalid' });
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.product.find({ productid: productid }, function(err, res) {
          if (res && res.length > 0) {
            results.product = res[0];
            if (nodeid == '') {
              nodeid = res[0].nodeid[0];
            }
          }
          callback(err, null);
        });
      },
      function(callback) {
        models.instance.variant_by_product.find({ productid: productid }, function(err, res) {
          if (res && res.length > 0) {
            /*
              let objVariant = {};
            res.forEach(element => {
              let obj = {};
              obj.variantid = element.variantid;
              obj.value = element.value;
              obj.name = element.name;
              obj.orderby = element.orderby;
              objVariant[`${element.variantid}`] = obj;
            });
            results.variant = objVariant;
            */
            results.variant = res;
          }
          callback(err, null);
        });
      },
      function(callback) {
        models.instance.options.find({ productid: productid }, function(err, res) {
          if (res && res.length > 0) {
            let arr = [];
            res.forEach(element => {
              let obj = {};
              obj.optid = element.optid.toString().replace(/\-/g, '');
              obj.attrs = element.attrs;
              obj.images = element.images;
              obj.price = element.price;
              arr.push(obj);
            });
            results.options = arr;
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (results && results.currency) {
          models.instance.currency_raito.find({ currency: results.currency }, function(err, items) {
            if (items && items.length > 0) {
              raito = items[0].raito;
              let n = JSON.stringify(results);
              results = JSON.parse(n);
              results['_price'] = items[0].raito * results.price;
              results['_sale_price'] = items[0].raito * results.sale_price;
            }
            callback(err, null);
          });
        } else {
          callback(null, null);
        }
      },
      function(callback) {
        if (nodeid != '') {
          models.instance.category.find(
            {},
            { select: ['title', 'nodeid', 'category', 'seo_link'] },
            function(err, items) {
              if (items && items.length > 0) {
                category = items;
              }
              callback(err, null);
            }
          );
        } else {
          callback(null, null);
        }
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function productSearchTest(req, res) {
  var catid = '';
  var data = [];
  var results = {};
  var dataResult = [];

  async.series(
    [
      function(callback) {
        try {
          let catidParam = req.body.catid;
          let uuid =
            catidParam.substring(0, 7) +
            '-' +
            catidParam.substring(7, 11) +
            '-' +
            catidParam.substring(11, 15) +
            '-' +
            catidParam.substring(15, 20) +
            '-' +
            catidParam.substring(20, 32);
          catid = models.uuidFromString(uuid);
        } catch (e) {
          return res.send({ status: 'error_invalid' });
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.product_by_categories.find(
          { catid },
          { select: ['productid', 'orderby'] },
          function(err, result) {
            if (result && result.length > 0) {
              result.forEach((v, i) => {
                data.push(v.productid);
              });
              dataResult = result;
            } else return res.json({ status: 'error', message: 'Mã danh mục không đúng' });
            callback(err, null);
          }
        );
      },
      function(callback) {
        try {
          let sort = req.body.sort;
          switch (sort) {
            case 'HIGHEST_DISCOUNT':
              models.instance.product.find({ productid: { $in: data } }, function(err, result) {
                if (result && result.length > 0) {
                  results.list = result.sort((c, d) => {
                    return (
                      1 -
                      (d.sale.salePrice / d.price) * 100 -
                      (1 - (c.sale.salePrice / c.price) * 100)
                    );
                  });
                }
                callback(err, null);
              });
              break;
            case 'LOW_PRICE':
              models.instance.product.find({ productid: { $in: data } }, function(err, result) {
                if (result && result.length > 0) {
                  results.list = result.sort((c, d) => {
                    return c.sale.salePrice - d.sale.salePrice;
                  });
                }
                callback(err, null);
              });
              break;
            case 'HIGH_PRICE':
              models.instance.product.find({ productid: { $in: data } }, function(err, result) {
                if (result && result.length > 0) {
                  results.list = result.sort((c, d) => {
                    return d.sale.salePrice - c.sale.salePrice;
                  });
                }
                callback(err, null);
              });
              break;
            default:
              models.instance.product.find({ productid: { $in: data } }, function(err, result) {
                if (result && result.length > 0) {
                  let arrResult = [];

                  result.forEach((v, i) => {
                    var arrData = dataResult.filter((ele, ind) => {
                      return ele.productid.toString() === v.productid.toString();
                    });

                    let a = JSON.stringify(v);
                    let b = JSON.parse(a);
                    if (arrData.length > 0) {
                      b.orderby = arrData[0].orderby;
                    }
                    arrResult.push(b);
                  });
                  results.list = arrResult.sort((c, d) => {
                    return c.orderby - d.orderby;
                  });
                }
                callback(err, null);
              });
              break;
          }
        } catch (error) {
          console.log(error);
        }
      },
      function(callback) {
        try {
          models.instance.options.find({ productid: { $in: data } }, function(err, result) {
            if (result && result.length > 0) {
              var checkproductid = '';
              var arrData = results.list;
              for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < arrData.length; j++) {
                  if (checkproductid === result[i].productid.toString()) continue;
                  if (result[i].productid.toString() === arrData[j].productid.toString()) {
                    checkproductid = result[i].productid.toString();
                    arrData[j].optid = result[i].optid;
                  }
                }
              }
              results.list = arrData;
            }
            callback(err, null);
          });
        } catch (error) {
          console.log(error);
        }
      },
      function(callback) {
        renderFilter(results.list, function(err, r) {
          results.filterMap = r;
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error' });
      return res.json({ status: 'ok', data: results });
      /*
        res.send({
         status: 'ok',
         data: {
           list: results.items,
           pagination: { total: results.items.length, current: current },
           // filterMap: filterMap,
         },
       });
      */
    }
  );
}
var router = express.Router();
router.get('/list', productList);
router.post('/DT', productDetail);
router.post('/TestDT', productDetailTest);
router.get('/CT', productCategory);
router.post('/LC', productCategory);
router.post('/SEARCH', productSearch);
router.post('/SEARCHTest', productSearchTest);
router.get('/AM', productAmazon);
router.get('/EB', productEbay);
router.get('/NK', productNike);
router.get('/AD', productAdidas);
module.exports = router;
