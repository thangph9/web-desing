var moment      = require('moment');
const jwt       = require('jsonwebtoken');
const fs        = require('fs');
const async           = require("async");
const bcrypt          = require("bcryptjs");
const Uuid            = require("cassandra-driver").types.Uuid;
const models          = require("../settings");
var publicKEY  = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');  
const sharp = require('sharp');
function productList(req,res){
    let results={};
    
    async.series([
        function(callback){
            callback(null,null);    
        },
        function(callback){
            models.instance.category.find({$solr_query:'{"q": "category: *929a9341-4a98-43bf-8005-74feeaf30391*"}'},{select: ['title','thumbnail']},function(err,res){
                if(res){
                    results['news']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
            models.instance.category.find({$solr_query:'{"q": "category: *b355844-0263-4ab7-ab09-c9893e5d107f*"}'},{select: ['title','thumbnail']},function(err,res){
                if(res){
                    results['days']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
             models.instance.category.find({$solr_query:'{"q": "category: *71ad52b3-46e9-45b0-ad18-ba8ab6e411b3*"}'},{select: ['title','thumbnail']},function(err,res){
                if(res){
                    results['hotnew']=res;
                }
                callback(err,null);
            })
        },
        function(callback){
             models.instance.category.find({$solr_query:'{"q": "category: *502c412f-8a85-4356-b892-90920caba630*"}'},{select: ['title','thumbnail']},function(err,res){
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
function getRaito(req,res){
    let raito={};
    async.series([
       function(callback){
            callback(null,null);    
       },
       function(callback){
           models.instance.currency_raito.find({},function(err,items){
               if(items){
                   raito=items;
               }
               callback(err,null);
           });
       }
    ],function(err,result){
        if(err) return res.send({status: 'error'});
        res.send({status: 'ok',data:raito});
    });
}

function productDetail(req,res){
    let results={};
    let productid='';
    let raito={};
    async.series([
        function(callback){
            try{
                let rawImage=req.body.productid;
                let uuid=rawImage.substring(0,7)+'-'+rawImage.substring(7,11)+'-'+rawImage.substring(11,15)+'-'+rawImage.substring(15,20)+'-'+rawImage.substring(20,32)
                
                productid=models.uuidFromString(uuid);
            }catch(e){
                
                return res.send({status: 'error_invalid'})
            }
            callback(null,null);    
        },
        function(callback){
            models.instance.product_detail.find({productid: productid},function(err,res){
                if(res){
                    results=res[0];
                }
                callback(err,null);
            })
        },
        function(callback){
            if(results && results.currency){
                models.instance.currency_raito.find({currency: results.currency},function(err,items){
                   if(items){
                       let n=JSON.stringify(results);
                       results=JSON.parse(n);
                       results['_price']=items[0].raito*results.price;
                       results['_sale_price']=items[0].raito*results.sale_price;
                   }
                   callback(err,null);
               });
                
            }else{
                callback(null,null);
            }        
        }
    ],function(err,result){
        if(err) return res.send({status: 'error'});
        res.send({status: 'ok',data: results})
    })
}
function productCategory(req,res){
    
}
function bestSeller(req,res){
    
}
function dealday(req,res){
    
}
function hotnew(req,res){
    
}

function image(req,res){
    let image=null;
    let imageid='';
    async.series([
        function(callback){
            try{
                
                let rawImage=req.params.imageid.substring(0,32) ;
                let uuid=rawImage.substring(0,7)+'-'+rawImage.substring(7,11)+'-'+rawImage.substring(11,15)+'-'+rawImage.substring(15,20)+'-'+rawImage.substring(20,32)
                
                imageid=models.uuidFromString(uuid);
            }catch(e){
                res.contentType('image/jpeg');
                return res.end('','binary');
            }
            callback(null,null)
        },
        function(callback){
            models.instance.images.find({imageid: imageid},function(err,img){
                if(img && img.length > 0){
                    image=img[0].image; 
                }
                callback(err,null);
            })
            
        }
    ],function(err,result){
        if(err){
            res.contentType('image/jpeg');
            res.end('','binary');
        }else if(image!=null){
            res.writeHead(200, {'Content-Type': 'image/jpg'});
            res.end(image,'binary');
        }else{
            res.contentType('image/jpeg');
            res.end('','binary');
        }
    })
}
function image320w(req,res){
    let image=null;
    let imageid='';
    let resizedata='';
    async.series([
        function(callback){
            try{
                
                let rawImage=req.params.imageid.substring(0,32) ;
                let uuid=rawImage.substring(0,7)+'-'+rawImage.substring(7,11)+'-'+rawImage.substring(11,15)+'-'+rawImage.substring(15,20)+'-'+rawImage.substring(20,32)
                
                imageid=models.uuidFromString(uuid);
            }catch(e){
                res.contentType('image/jpeg');
                return res.end('','binary');
            }
            callback(null,null)
        },
        function(callback){
            models.instance.images.find({imageid: imageid},function(err,img){
                if(img && img.length > 0){
                    image=img[0].image; 
                }
                callback(err,null);
            })
            
        },
        function(callback){
            if(image){
                resize(image,456,202,function(err,img){
                   resizedata=img
                   callback(err,null)
               });
            }else{
                callback(null,null);
            }
           
        }
    ],function(err,result){
        if(err){
            res.contentType('image/jpeg');
            res.end('','binary');
        }else if(image!=null){
            res.writeHead(200, {'Content-Type': 'image/jpg'});
            res.end(resizedata,'binary');
        }else{
            res.contentType('image/jpeg');
            res.end('','binary');
        }
    })
}
function resize(image,w,h,callback){
     sharp(image).resize(w,h)
                .toBuffer()
                .then(data => {callback(null,data) })
                .catch(err => callback(err,null))
     return;
}
function image1178w(req,res){
     res.send({status: 'ok'})
}
function image1280w(req,res){
     let image=null;
    let imageid='';
    let resizedata='';
    async.series([
        function(callback){
            try{
                
                let rawImage=req.params.imageid.substring(0,32) ;
                let uuid=rawImage.substring(0,7)+'-'+rawImage.substring(7,11)+'-'+rawImage.substring(11,15)+'-'+rawImage.substring(15,20)+'-'+rawImage.substring(20,32)
                
                imageid=models.uuidFromString(uuid);
            }catch(e){
                res.contentType('image/jpeg');
                return res.end('','binary');
            }
            callback(null,null)
        },
        function(callback){
            models.instance.images.find({imageid: imageid},function(err,img){
                if(img && img.length > 0){
                    image=img[0].image; 
                }
                callback(err,null);
            })
            
        },
        function(callback){
            if(image){
                resize(image,1500,1000,function(err,img){
                   resizedata=img
                   callback(err,null)
               });
            }else{
                callback(null,null);
            }
        }
    ],function(err,result){
        if(err){
            res.contentType('image/jpeg');
            res.end('','binary');
        }else if(image!=null){
            res.writeHead(200, {'Content-Type': 'image/jpg'});
            res.end(resizedata,'binary');
        }else{
            res.contentType('image/jpeg');
            res.end('','binary');
        }
    })
}
function imagew(req,res){
     res.send({status: 'ok'})
}
function image90w(req,res){
    let image=null;
    let imageid='';
    let resizedata='';
    async.series([
        function(callback){
            try{
                
                let rawImage=req.params.imageid.substring(0,32) ;
                let uuid=rawImage.substring(0,7)+'-'+rawImage.substring(7,11)+'-'+rawImage.substring(11,15)+'-'+rawImage.substring(15,20)+'-'+rawImage.substring(20,32)
                
                imageid=models.uuidFromString(uuid);
            }catch(e){
                res.contentType('image/jpeg');
                return res.end('','binary');
            }
            callback(null,null)
        },
        function(callback){
            models.instance.images.find({imageid: imageid},function(err,img){
                if(img && img.length > 0){
                    image=img[0].image; 
                }
                callback(err,null);
            })
            
        },
        function(callback){
          if(image){
            resize(image,80,100,function(err,img){
               resizedata=img
               callback(err,null)
            });
          } else{
                callback(null,null);
            }   
          
        }
    ],function(err,result){
        if(err){
            res.contentType('image/jpeg');
            res.end('','binary');
        }else if(image!=null){
            res.writeHead(200, {'Content-Type': 'image/jpg'});
            res.end(resizedata,'binary');
        }else{
            res.contentType('image/jpeg');
            res.end('','binary');
        }
    })
}               
export default {
    'GET /api/product/list' : productList,
    'POST /api/product/DT' : productDetail,
    'GET /images/:imageid'           :image,
    'GET /images/w320/:imageid'      :image320w,
    'GET /images/w1178/:imageid'      :image1178w,
    'GET /images/w1280/:imageid'      :image1280w,
    'GET /images/w/:imageid'      :imagew,
    'GET /images/w90/:imageid' :image90w,
    'GET /api/raito'                :getRaito
    
}