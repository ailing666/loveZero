const Router = require('koa-router');
const { cartsValidator } = require('../middleware/carts.middleware');
const { auth } = require('../middleware/auth.middleware');
const { addCarts } = require('../controller/carts.controller');
const router = new Router({ prefix: '/carts' });

// 添加到购物车接口：先匹配路由 -> 执行中间件认证token是否正确 -> 校验参数 -> 接口控制器
router.post('/', auth, cartsValidator, addCarts);

module.exports = router;
