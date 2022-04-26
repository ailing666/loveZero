const Router = require('koa-router');
const {
  userValidator,
  verifyUser,
  cryptyPassword,
  verifyLogin,
} = require('../middleware/user.middleware');
const { auth } = require('../middleware/auth.middleware');
const { register, login, changePassword } = require('../controller/user.controller');
const router = new Router({ prefix: '/users' });

// 注册接口：先匹配路由 -> 执行中间件校验参数是否填写 -> 校验用户是否存在 -> 密码加密 -> 注册接口控制器
router.post('/register', userValidator, verifyUser, cryptyPassword, register);

// 登录接口: 匹配路由 -> 校验参数是否填写 -> 校验用户是否存在 -> 校验密码是否匹配 -> 登录接口控制器
router.post('/login', userValidator, verifyLogin, login);

// 修改密码接口：匹配路由 -> 鉴权token是否正确 -> 校验密码是否匹配 -> 修改密码接口控制器
router.patch('/changePassword', auth, cryptyPassword, changePassword);

module.exports = router;
