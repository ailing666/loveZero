// koa相关
const Koa = require('koa');
// 导入路由
const useRouter = require('../router/user');

const app = new Koa();

// 中间件：注册路由
app.use(useRouter.routes());

module.exports = app;
