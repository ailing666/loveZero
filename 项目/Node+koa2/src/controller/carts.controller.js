const {
  cartsUpdateError,
  goodsInsufficientError,
  cartsFindError,
} = require('../constant/err.type');
const { createOrUpdate, findAllCarts } = require('../service/carts.service');
class CartsController {
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

  // 获取购物车列表
  async findAll(ctx) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query;
    try {
      const res = await findAllCarts(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: '获取购物车列表成功',
        result: {
          pageNum,
          pageSize,
          total: res.count,
          list: res.rows,
        },
      };
    } catch (err) {
      return ctx.app.emit('error', cartsFindError, err);
    }
  }
}

module.exports = new CartsController();
