const { cartsUpdateError } = require('../constant/err.type');
const { createOrUpdate } = require('../service/carts.service');
class GoodsController {
  // 添加购物车接口
  async addCarts(ctx) {
    try {
      const res = await createOrUpdate(ctx.request.body.goods_id, ctx.state.user.id);
      ctx.body = {
        code: 0,
        message: '添加到购物车成功',
        result: res,
      };
    } catch (err) {
      return ctx.app.emit('error', cartsUpdateError, err);
    }
  }
}

module.exports = new GoodsController();
