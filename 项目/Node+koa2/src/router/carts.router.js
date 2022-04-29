const Router = require('koa-router');
const { validator } = require('../middleware/validator.middleware');
const { verifyGoodsID } = require('../middleware/carts.middleware');
const { auth } = require('../middleware/auth.middleware');
const {
  addCarts,
  findAll,
  update,
  remove,
  toggleSelectAll,
} = require('../controller/carts.controller');
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

// 更新购物车：先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 接口控制器
// patch:传什么修改什么，局部更新，但是put就会把没有传的字段清空
router.patch(
  '/:id',
  auth,
  validator({
    number: { type: 'number', required: false },
    selected: { type: 'bool', required: false },
  }),
  update
);

// 批量删除购物车商品：先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 接口控制器
router.delete('/', auth, validator({ ids: 'array' }), remove);

// 全选或全不选接口：先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 接口控制器
router.post('/select', auth, validator({ isAll: 'bool' }), toggleSelectAll);
module.exports = router;
