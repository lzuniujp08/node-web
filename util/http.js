import { API } from '../api/API.js'

let http;
let bodyParser;

let http = {
  _http: require('http'),
  _bodyParser: require("body-parser"),
  app: null,
  initHttp(app) {
    this.app = app;
    this.app.use(this._bodyParser.urlencoded({extended:true}));
  }
};

export function initHttp(app) {
  http = require('http');
  bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({extended:true}));
}

export function getUrlData(url) {
  app.get(url, function(req, res, next){
    res.json({
      code: '200',
      msg: '',
      data: results.rows
    });
  });
  app.get(url, function(req, res, next){
    res.json({
      code: '200',
      msg: '',
      data: results.rows
    });
  });
}


