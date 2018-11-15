var express     = require('express')
var moment      = require('moment');
const jwt       = require('jsonwebtoken');
const fs        = require('fs');
const async           = require("async");
const bcrypt          = require("bcryptjs");
const Uuid            = require("cassandra-driver").types.Uuid;
const models          = require("../settings");

var publicKEY  = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');  
var router = express.Router()
function list(req,res,next){
    let result=[];
    let nodeid='';
    async.series([
        function(callback){
            
            callback(null,null);    
        },
        function(callback){
            models.instance.product_detail.find({$solr_query: '{"q": "nodeid: '+nodeid+'"}'},function(err,res){
                
                if(res){
                    result=res;
                }
                callback(err,null);
            })
        },
    ],function(err,results){
        if(err) return res.send({status: 'error'});
        res.send({status: 'oke',data: result})
    })
}
router.get('/',list);
router.post('/',list);
module.exports = router