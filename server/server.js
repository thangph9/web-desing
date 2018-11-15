const fs              = require('fs');
const express         = require('express');
const https           = require('https');
const http            = require('http');
const bodyParser      = require('body-parser');
const path            = require('path');
const jsonParser	  = require('body-parser').json();
const app             = module.exports=express();


var api = require('./api');
var images=require('./api/images');
var router = express.Router()


var privateKey = fs.readFileSync('./ssl_cert/123order.key', 'utf8');
var certificate = fs.readFileSync('./ssl_cert/123order.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };


// Use the default path '/' (Not recommended)
// app.use(mockjs(path.join(__dirname, 'mocks')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
// Use a custom path '/api'

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
//
    // Pass to next layer of middleware
    next();
});
app.use('/api',api);
app.use(images);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Here you can add any code.
var server = https.createServer(credentials, app);

if (!module.parent) {
 /*
  server.listen(443, function () {
    console.log("server running at https://123order.vn/")
  });


  http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
  }).listen(80);
  */
  app.listen(8000,function(){
      console.log("server dev running port 8000")
  })
}