const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default');
const { tokenExpiredError, invalidToken } = require('../constant/err.type');
const auth = async (ctx, next) => {
  // 拿到接口传进来的token
  const { authorization } = ctx.request.header;
  // 格式处理
  const token = authorization.replace('Bearer ', '');
  try {
    // 获取当前token的用户信息
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        ctx.app.emit('error', tokenExpiredError, ctx);
        break;
      case 'JsonWebTokenError':
        ctx.app.emit('error', invalidToken, ctx);
        break;
    }
    return;
  }

  await next();
};
module.exports = { auth };
