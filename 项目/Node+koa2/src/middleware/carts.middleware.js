const { cartsFormatError } = require('../constant/err.type');

// 参数校验
const cartsValidator = async (ctx, next) => {
  try {
    // koa-parameter校验，校验不通过会返回具体的err
    ctx.verifyParams({
      goods_id: { type: 'number', required: true },
    });
  } catch (err) {
    cartsFormatError.result = err.errors;
    return ctx.app.emit('error', cartsFormatError, ctx, err);
  }

  await next();
};

module.exports = {
  cartsValidator,
};
