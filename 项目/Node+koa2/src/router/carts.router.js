const Router = require('koa-router');
const { cartsValidator, verifyGoodsID } = require('../middleware/carts.middleware');
const { auth } = require('../middleware/auth.middleware');
const { addCarts, findAll } = require('../controller/carts.controller');
const router = new Router({ prefix: '/carts' });

// 添加到购物车接口：先匹配路由 -> 执行中间件认证token是否正确 -> 校验参数 -> 接口控制器
router.post('/', auth, cartsValidator, verifyGoodsID, addCarts);

// 获取购物车列表
router.get('/', auth, findAll);
module.exports = router;
