const { getUerInfo } = require('../service/user.service');
const { userFormateError, userAlreadyExited } = require('../constant/err.type');
// 校验值是否为空
const userValidator = async (ctx, next) => {
  // 获取参数
  const { user_name, password } = ctx.request.body;

  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body);
    // 触发error事件，进行错误处理逻辑
    ctx.app.emit('error', userFormateError, ctx);
    return;
  }

  // 校验成功，放行
  await next();
};

// 校验用户是否已存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;

  if (getUerInfo({ user_name })) {
    // 触发error事件，进行错误处理逻辑
    ctx.app.emit('error', userAlreadyExited, ctx);
    return;
  }
  await next();
};

module.exports = { userValidator, verifyUser };
