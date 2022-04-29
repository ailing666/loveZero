const Router = require('koa-router');
const { create, update, findAll } = require('../controller/order.controller');
const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/validator.middleware');
const router = new Router({ prefix: '/orders' });

// 提交订单接口：先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 接口控制器
router.post(
  '/',
  auth,
  validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'string',
  }),
  create
);

// 获取订单列表接口：先匹配路由 -> 执行中间件认证token是否正确 -> 接口控制器
router.get('/', auth, findAll);

// 更新订单状态接口：先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 接口控制器
router.patch(
  '/:id',
  auth,
  validator({
    status: 'number',
  }),
  update
);

module.exports = router;
