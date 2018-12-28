var express = require('express');
var http = require('http');
var bodyParser = require("body-parser");

var app = express();
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended:true}));

/*允许跨域*/
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH,OPTIONS");
  next();
});

const API = {
  userInfo: '/getUserInfo'
};

app.get(API.userInfo, function(req, res, next){
  const name = req.query.name;
  console.log(name);
  res.json({
    code: '200',
    data:{
      name: name
    }
  });
});
app.post(API.userInfo, function(req, res, next){
  const name = req.body.name;
  res.json({
    code: '200',
    data:{
      name: name
    }
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var ws = require("nodejs-websocket");
console.log("开始建立连接...")
var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
var server = ws.createServer(function(conn){
  conn.on("text", function (str) {
    console.log("收到的信息为:"+str)
    if(str==="game1"){
      game1 = conn;
      game1Ready = true;
      conn.sendText("success");
    }
    if(str==="game2"){
      game2 = conn;
      game2Ready = true;
    }

    if(game1Ready&&game2Ready){
      game2.sendText(str);
    }

    conn.sendText(str)
  })
  conn.on("close", function (code, reason) {
    console.log("关闭连接")
  });
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  });
}).listen(8001);