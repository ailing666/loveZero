const Goods = require('../model/goods.model');
const { goodsCreateError } = require('../constant/err.type');
class GoodsService {
  // 创建商品
  async createGoods(data) {
    try {
      const { dataValues } = await Goods.create(data);

      return dataValues;
    } catch (err) {
      return ctx.app.emit('error', goodsCreateError, ctx, err);
    }
  }
  // 修改商品
  async updateGoods(id, data) {
    try {
      // 根据id查询数据，并将数据改为data
      const res = await Goods.update(data, { where: { id } });
      return res[0];
    } catch (err) {
      return ctx.app.emit('error', goodsCreateError, ctx, err);
    }
  }
}

module.exports = new GoodsService();
