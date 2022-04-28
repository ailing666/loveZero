const Router = require('koa-router');
const {
  upload,
  create,
  update,
  remove,
  restore,
  findAll,
} = require('../controller/goods.controller');
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/validator.middleware');
const router = new Router({ prefix: '/goods' });
// 商品校验规则
const goodsRules = {
  goods_name: { type: 'string', required: true },
  goods_price: { type: 'number', required: true },
  goods_num: { type: 'number', required: true },
  goods_img: { type: 'string', required: true },
};
// 上传商品图片接口：先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 上传图片接口控制器
router.post('/upload', auth, hadAdminPermission, upload);

// 上传商品接口： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 商品参数校验 -> 上传商品控制器
router.post('/', auth, hadAdminPermission, validator(goodsRules), create);

// 修改商品接口，携带id： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 商品参数校验 -> 修改商品控制器
router.put('/:id', auth, hadAdminPermission, validator(goodsRules), update);

// 下架商品接口，携带id，off： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 下架商品控制器
router.post('/:id/off', auth, hadAdminPermission, remove);

// 上架商品接口，携带id，on： 先匹配路由 -> 执行中间件认证token是否正确 -> 鉴权是否是管理员 -> 上架商品控制器
router.post('/:id/on', auth, hadAdminPermission, restore);

// 获取商品列表接口，直接进入控制器
router.get('/', findAll);
module.exports = router;
