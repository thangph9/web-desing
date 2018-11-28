/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var express = require('express');
var moment = require('moment');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const async = require('async');
const bcrypt = require('bcryptjs');
const Uuid = require('cassandra-driver').types.Uuid;
const models = require('../settings');

var publicKEY = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
var router = express.Router();
function category(req,res){
      let result = {};
      let category=[];
      let nodeid='';
      let PARAMS_IS_VALID={};
      async.series(
        [
          function(callback) {
           let rawNodeid=req.body.nodeid;
            nodeid=rawNodeid.substring(0, 8) +
              '-' +
              rawNodeid.substring(8, 12) +
              '-' +
              rawNodeid.substring(12, 16) +
              '-' +
              rawNodeid.substring(16, 20) +
              '-' +
              rawNodeid.substring(20, 32);
              try{
                  PARAMS_IS_VALID.nodeid=models.uuidFromString(nodeid);
              }catch(e){
                  
              }
            
            callback(null, null);
          },     
          function(callback) {
              try{
                  models.instance.category.find({},function(err,items){
                     if(items && items.length > 0){
                         category=items; 
                     }
                    callback(err,null);     
                 });
              }catch(e){
                    return res.send({status: 'error'})
              }
             
          },
          function(callback){
              if(nodeid!='' && nodeid !=undefined && category.length > 0 ){
                  result.breadcrumb=generateMap(category,nodeid);
                  result.current=category.filter(e=> e.nodeid.toString()==nodeid)[0]
              }
              callback(null,null);
          }
        ],
        function(err, results) {
          if (err) return res.send({ status: 'error' });
          res.send({ status: 'ok', data: result });
        }
      );
}
function getBreadcumb(category,nodeid){
    return category.filter(node => {
        return node.nodeid.toString()==nodeid;
    });
}
function generateMap(category,nodeid){
    let parent=[];
    let temp={};
    let children={};
    var i=0;
    var node=nodeid;
    children=getBreadcumb(category,node);
    parent.push(children[0]);
    var i=1;
    while(children[0].category!=null && i < 100){
        if(children[0] && children[0].category && children[0].category.length > 0){
            node=children[0].category[0]
            children=getBreadcumb(category,node);
            parent.push(children[0]);
        }else{
           children=getBreadcumb(category,node);
           parent.push(children[0]);
        }
        i++;
    }
    return parent.reverse();
}
router.post('/CT',category);
module.exports = router;
