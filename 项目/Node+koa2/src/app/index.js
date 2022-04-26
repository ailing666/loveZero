// koa相关
const Koa = require('koa');

// koa-body
const KoaBody = require('koa-body');

// 导入路由
const router = require('../router');

// 错误处理函数
const errHandler = require('./errHandler');

const app = new Koa();

// koa-body在其余中间件之前
app.use(KoaBody());

// router.allowedMethods() 用于 当 request method 不匹配时返回 501
app.use(router.routes()).use(router.allowedMethods());

// 接受error事件，在 errHandler 中统一错误处理
app.on('error', errHandler);
module.exports = app;
