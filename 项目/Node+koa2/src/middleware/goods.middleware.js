const { goodsFormatError } = require('../constant/err.type');

// 参数校验
const goodsValidator = async (ctx, next) => {
  try {
    // koa-parameter校验，校验不通过会返回具体的err
    ctx.verifyParams({
      goods_name: { type: 'string', required: true },
      goods_price: { type: 'number', required: true },
      goods_num: { type: 'number', required: true },
      goods_img: { type: 'string', required: true },
    });
  } catch (err) {
    goodsFormatError.result = err.errors;
    return ctx.app.emit('error', goodsFormatError, ctx, err);
  }

  await next();
};

module.exports = {
  goodsValidator,
};
