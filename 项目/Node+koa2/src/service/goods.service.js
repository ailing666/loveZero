const Goods = require('../model/goods.model');
const {
  goodsCreateError,
  goodsUpdateError,
  goodsRemoveError,
  goodsRestoreError,
} = require('../constant/err.type');
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
      return ctx.app.emit('error', goodsUpdateError, ctx, err);
    }
  }

  // 下架商品
  async removeGoods(id) {
    try {
      // 软删除这个id的信息，删除成功返回1，删除失败返回0
      return await Goods.destroy({ where: { id } });
    } catch (err) {
      return ctx.app.emit('error', goodsRemoveError, ctx, err);
    }
  }

  // 上架商品
  async restoreGoods(id) {
    try {
      // 将这个id的数据恢复，恢复成功返回1，恢复失败返回0
      return await Goods.restore({ where: { id } });
    } catch (err) {
      return ctx.app.emit('error', goodsRestoreError, ctx, err);
    }
  }
}

module.exports = new GoodsService();
