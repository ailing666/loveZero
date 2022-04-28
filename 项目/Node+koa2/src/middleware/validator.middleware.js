// 参数校验失败提示
const formatError = {
  code: '20001',
  message: '参数格式有误',
  result: '',
};

// 参数校验
const validator = rules => {
  return async (ctx, next) => {
    try {
      // koa-parameter校验，校验不通过会返回具体的err
      ctx.verifyParams(rules);
    } catch (err) {
      formatError.result = err.errors;
      return ctx.app.emit('error', formatError, ctx, err);
    }

    await next();
  };
};

module.exports = { validator };
