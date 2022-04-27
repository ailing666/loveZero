// 引入包
const bcrypt = require('bcryptjs');
const { getUserInfo } = require('../service/user.service');
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  invalidPassword,
  userLoginError,
  userDoesNotExited,
  samePasswordError,
  changePasswordError,
} = require('../constant/err.type');

// 校验值是否为空
const userValidator = async (ctx, next) => {
  // 获取参数
  const { user_name, password } = ctx.request.body;

  if (!user_name || !password) {
    // 触发error事件，进行错误处理逻辑
    return ctx.app.emit('error', userFormateError, ctx);
  }

  // 校验成功，放行
  await next();
};

// 校验用户是否已存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  try {
    const res = await getUserInfo({ user_name });
    if (res) {
      // 触发error事件，进行错误处理逻辑
      return ctx.app.emit('error', userAlreadyExited, ctx);
    }
  } catch (err) {
    return ctx.app.emit('error', userRegisterError, ctx, err);
  }
  await next();
};

// 密码加密
const cryptyPassword = async (ctx, next) => {
  // 获取输入的密码
  const { password } = ctx.request.body;

  try {
    // 如果是修改密码，要判断两次密码是否相同
    if (ctx.state.user) {
      const res = await getUserInfo({ id: ctx.state.user.id });
      if (bcrypt.compareSync(password, res.password)) {
        // 两次密码相同
        return ctx.app.emit('error', samePasswordError, ctx);
      }
    }
  } catch (err) {
    return ctx.app.emit('error', changePasswordError, ctx, err);
  }
  // 加密
  const salt = bcrypt.genSaltSync(10);
  // hash就是加密后的密码
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;

  await next();
};

// 登录校验
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  try {
    // 根据 user_name 查询用户是否存在
    const res = await getUserInfo({ user_name });
    if (!res) {
      // 用户不存在
      return ctx.app.emit('error', userDoesNotExited, ctx);
    }

    // 校验输入的密码与数据库的密码是否匹配
    if (!bcrypt.compareSync(password, res.password)) {
      return ctx.app.emit('error', invalidPassword, ctx);
    }
  } catch (err) {
    return ctx.app.emit('error', userLoginError, ctx, err);
  }

  await next();
};

module.exports = { userValidator, verifyUser, cryptyPassword, verifyLogin };
