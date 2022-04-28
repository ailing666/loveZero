const Router = require('koa-router');
const { create, update, remove, setDefault, findAll } = require('../controller/address.controller');
const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/validator.middleware');
const router = new Router({ prefix: '/address' });
// 地址校验规则
const addressRules = {
  consignee: 'string',
  phone: { type: 'string', format: /^1\d{10}$/ },
  address: 'string',
};

// 添加地址接口： 先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 控制器
router.post('/', auth, validator(addressRules), create);

// 修改地址接口，携带id： 先匹配路由 -> 执行中间件认证token是否正确 -> 参数校验 -> 控制器
router.put('/:id', auth, validator(addressRules), update);

// 删除地址接口，携带id： 先匹配路由 -> 执行中间件认证token是否正确 -> 控制器
router.delete('/:id', auth, remove);

// 获取地址列表接口： -> 执行中间件认证token是否正确 ->控制器
router.get('/', auth, findAll);

// 设置为默认地址接口，携带id： -> 执行中间件认证token是否正确 ->控制器
router.patch('/:id', auth, setDefault);
module.exports = router;
