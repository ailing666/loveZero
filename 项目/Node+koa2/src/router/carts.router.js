const Router = require('koa-router');
const { validator } = require('../middleware/validator.middleware');
const { verifyGoodsID } = require('../middleware/carts.middleware');
const { auth } = require('../middleware/auth.middleware');
const { addCarts, findAll } = require('../controller/carts.controller');
const router = new Router({ prefix: '/carts' });

// 添加到购物车接口：先匹配路由 -> 执行中间件认证token是否正确 -> 校验参数 -> 判断good_id是否合法 -> 接口控制器
router.post(
  '/',
  auth,
  validator({
    goods_id: { type: 'number', required: true },
  }),
  verifyGoodsID,
  addCarts
);

// 获取购物车列表：先匹配路由 -> 执行中间件认证token是否正确 -> 接口控制器
router.get('/', auth, findAll);

// 获取购物车列表：先匹配路由 -> 执行中间件认证token是否正确 -> 接口控制器
router.patch(
  '/:id',
  auth,
  validator({
    number: { type: 'number', required: false },
    selected: { type: 'bool', required: false },
  }),
  ctx => {
    ctx.body = 'ok';
  }
);
module.exports = router;
