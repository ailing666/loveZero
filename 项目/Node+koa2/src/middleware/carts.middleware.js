const { cartsFormatError, invalidGoodsID } = require('../constant/err.type');
const { getGoodsInfo } = require('../service/goods.service');

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

// good_id是否合法
const verifyGoodsID = async (ctx, next) => {
  const { goods_id } = ctx.request.body;
  // 判断good_id是否存在
  const res = await getGoodsInfo({ id: goods_id });
  if (!res) {
    return ctx.app.emit('error', invalidGoodsID, ctx);
  } else {
    ctx.state.user.goods_num = res.goods_num;
  }
  await next();
};

module.exports = {
  cartsValidator,
  verifyGoodsID,
};
