const { invalidGoodsID } = require('../constant/err.type');
const { getGoodsInfo } = require('../service/goods.service');

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

module.exports = { verifyGoodsID };
