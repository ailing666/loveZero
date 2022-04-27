const Goods = require('../model/goods.model');
const { goodsCreateError } = require('../constant/err.type');
class GoodsService {
  // 创建用户
  async createGoods(data) {
    try {
      const { dataValues } = await Goods.create(data);

      return dataValues;
    } catch (err) {
      return ctx.app.emit('error', goodsCreateError, ctx, err);
    }
  }
}

module.exports = new GoodsService();
