const Koa = require('koa');

const app = new Koa();

// 中间件
app.use((ctx, next) => {
  ctx.body = 'hello world';
});

// 启动
app.listen(8888, () => {
  console.log('server is running on http://localhost:8888');
});
