// koa相关
const Koa = require('koa');

// koa-body
const KoaBody = require('koa-body');

// 导入路由
const useRouter = require('../router/user.router');

const app = new Koa();

// koa-body在其余中间件之前
app.use(KoaBody());

// 中间件：注册路由
app.use(useRouter.routes());

module.exports = app;
