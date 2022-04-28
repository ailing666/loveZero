const Goods = require('../model/goods.model');
class GoodsService {
  // 创建商品
  async createGoods(data) {
    const { dataValues } = await Goods.create(data);

    return dataValues;
  }

  // 修改商品
  async updateGoods(id, data) {
    // 根据id查询数据，并将数据改为data
    const res = await Goods.update(data, { where: { id } });
    return res[0];
  }

  // 下架商品
  async removeGoods(id) {
    // 软删除这个id的信息，删除成功返回1，删除失败返回0
    return await Goods.destroy({ where: { id } });
  }

  // 上架商品
  async restoreGoods(id) {
    // 将这个id的数据恢复，恢复成功返回1，恢复失败返回0
    return await Goods.restore({ where: { id } });
  }

  // 查找所有商品
  async findAllGoods(pageNum, pageSize) {
    // 偏移量
    const offset = (pageNum - 1) * pageSize;
    // 需要转为数字类型
    return await Goods.findAndCountAll({ offset, limit: Number(pageSize) });
  }

  // 获取商品信息
  async getGoodsInfo({ ...args }) {
    const whereOpt = { ...args };
    const res = await Goods.findOne({
      // 查询的字段
      attributes: ['id', 'goods_name', 'goods_price', 'goods_num', 'goods_img'],
      // 传入的查询的条件
      where: whereOpt,
    });
    // 如果存在就返回该值，否则就返回null
    return res ? res.dataValues : null;
  }
}

module.exports = new GoodsService();
