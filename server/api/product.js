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
function productList(req,res){
    let results={};
    
    async.series([
        function(callback){
            callback(null,null);    
        },
        function(callback){
            models.instance.category.find({$solr_query:'{"q": "category: *ef4a584e-3497-4b55-8991-55146d5a4757*"}'},{select: ['title','thumbnail','seo_link','nodeid']},function(err,res){
                if(res){
                    results['news']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
            models.instance.category.find({$solr_query:'{"q": "category: *af739c5a-fa25-44bf-bc83-56fadcb1967f*"}'},{select: ['title','thumbnail','seo_link','nodeid']},function(err,res){
                if(res){
                    results['days']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
             models.instance.category.find({$solr_query:'{"q": "category: *08ecb1e-cabf-4328-9ddc-011ca55a156d*"}'},{select: ['title','thumbnail','seo_link','nodeid']},function(err,res){
                if(res){
                    results['hotnew']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
             models.instance.category.find({$solr_query:'{"q": "category: *07081437-d862-48d0-9987-4f656bd2de30*"}'},{select: ['title','thumbnail','seo_link','nodeid']},function(err,res){
                if(res){
                    results['bestSeller']=res;
                }
                callback(err,null);
            })
        }
    ],function(err,result){
        if(err) return res.send({status: 'error'});
        res.send({status: 'ok',data: results})
    })

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
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.body.productid;
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          productid = models.uuidFromString(uuid);
        } catch (e) {
          return res.send({ status: 'error_invalid' });
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.product_detail.find({ productid: productid }, function(err, res) {
          if (res) {
            results = res[0];
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (results && results.currency) {
          models.instance.currency_raito.find({ currency: results.currency }, function(err, items) {
            if (items) {
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
          { select: ['title', 'thumbnail','seo_link','nodeid','productid','sale','price','seller','brand','sale_price'] },
          function(err, res) {
            if (res) {
              results['items'] = res;
            }
            callback(err, null);
          }
        );
      },
      function(callback){
          models.instance.category.find({$solr_query: '{"q": "nodeid: '+PARAMS_IS_VALID['nodeid']+'"}'},function(err,res){
              if(res){
                  results['breadcrumb']=res[0]
              }
              
              callback(err,null);
          })
      }    
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

var router = express.Router();
router.get('/list', productList);
router.post('/DT', productDetail);
router.get('/CT', productCategory);
router.post('/LC', productCategory);
module.exports = router;
