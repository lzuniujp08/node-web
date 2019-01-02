var pg = require('pg');
//数据库配置
var conString = "tcp://postgres:root@localhost/lzugis"; //tcp://用户名：密码@localhost/数据库名
var client = new pg.Client(conString);

