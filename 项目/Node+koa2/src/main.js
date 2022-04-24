const Koa = require('koa');

const { APP_PORT } = require('./config/config.default');
// 导入路由
const useRouter = require('./router/user');
const app = new Koa();

// 中间件：注册路由
app.use(useRouter.routes());

// 启动
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
