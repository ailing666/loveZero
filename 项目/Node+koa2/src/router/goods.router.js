const Router = require('koa-router');
const { upload } = require('../controller/goods.controller');
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const router = new Router({ prefix: '/goods' });

// 上传商品图片接口：先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 注册接口控制器
router.post('/upload', auth, hadAdminPermission, upload);

module.exports = router;
