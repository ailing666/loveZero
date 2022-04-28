const { cartsUpdateError, goodsInsufficientError } = require('../constant/err.type');
const { createOrUpdate } = require('../service/carts.service');
class GoodsController {
  // 添加购物车接口
  async addCarts(ctx) {
    const { goods_id } = ctx.request.body;
    // 用户id和库存
    const { id, goods_num } = ctx.state.user;
    try {
      const res = await createOrUpdate(goods_id, id, goods_num);
      if (res) {
        ctx.body = {
          code: 0,
          message: '添加到购物车成功',
          result: res,
        };
      } else {
        return ctx.app.emit('error', goodsInsufficientError, ctx);
      }
    } catch (err) {
      return ctx.app.emit('error', cartsUpdateError, err);
    }
  }
}

module.exports = new GoodsController();
