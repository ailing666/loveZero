const Router = require('koa-router');
const { upload } = require('../controller/goods.controller');
const router = new Router({ prefix: '/goods' });

// 注册接口：先匹配路由 -> 执行中间件校验参数是否填写 -> 校验用户是否存在 -> 密码加密 -> 注册接口控制器
router.post('/upload', upload);

module.exports = router;
