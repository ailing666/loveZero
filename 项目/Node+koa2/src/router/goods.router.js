const Router = require('koa-router');
const { upload, create, update, remove } = require('../controller/goods.controller');
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const { goodsValidator } = require('../middleware/goods.middleware');
const router = new Router({ prefix: '/goods' });

// 上传商品图片接口：先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 上传图片接口控制器
router.post('/upload', auth, hadAdminPermission, upload);

// 上传商品接口： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 商品参数校验 -> 上传商品控制器
router.post('/', auth, hadAdminPermission, goodsValidator, create);

// 修改商品接口，携带id： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 商品参数校验 -> 修改商品控制器
router.put('/:id', auth, hadAdminPermission, goodsValidator, update);

// 下架商品接口，携带id，off： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 下架商品控制器
router.post('/:id/off', auth, hadAdminPermission, remove);

module.exports = router;
