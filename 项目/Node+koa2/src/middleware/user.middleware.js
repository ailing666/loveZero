const { getUerInfo } = require('../service/user.service');
// 校验值是否为空
const userValidator = async (ctx, next) => {
  // 获取参数
  const { user_name, password } = ctx.request.body;

  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body);
    ctx.status = 400;

    ctx.body = {
      code: '10001',
      message: '用户名或密码为空',
      result: '',
    };
    return;
  }

  // 校验成功，放行
  await next();
};

// 校验用户是否已存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;

  if (getUerInfo({ user_name })) {
    ctx.status = 409;
    ctx.body = {
      code: '10002',
      message: '用户已经存在',
      result: '',
    };
    return;
  }
  await next();
};

module.exports = { userValidator, verifyUser };
