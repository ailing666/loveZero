const fs = require('fs');

const Router = require('koa-router');
const router = new Router();
fs.readdirSync(__dirname).forEach(file => {
  // file 就是router下的每个文件
  if (file !== 'index.js') {
    // 将除了 index 以外的文件都引入
    let r = require('./' + file);
    // 注册路由
    router.use(r.routes());
  }
});

module.exports = router;
