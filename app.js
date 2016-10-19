/**
 * Created by Bianwangyang on 2016/10/12.
 */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//json类型的body. application/json
app.use(bodyParser.json());
//query string 类型url。parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

//静态文件目录
app.use(express.static(path.join(__dirname,'public')));
// --------------- BEGIN ROUTES ------------------
app.use('/',require('./routes/index.js'));
// --------------- END ROUTES --------------------

//启动服务器
const DEFAULT_PORT = 8080;
app.listen(DEFAULT_PORT);
console.log('express server starts at port: %d',DEFAULT_PORT);