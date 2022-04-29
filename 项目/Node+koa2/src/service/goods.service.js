const Goods = require('../model/goods.model');
class GoodsService {
  // 创建商品
  createGoods = async data => await Goods.create(data);

  // 修改商品,根据id查询数据，并将数据改为data
  updateGoods = async (id, data) => await Goods.update(data, { where: { id } });

  // 下架商品,软删除这个id的信息，删除成功返回1，删除失败返回0
  removeGoods = async id => await Goods.destroy({ where: { id } });

  // 上架商品，将这个id的数据恢复，恢复成功返回1，恢复失败返回0
  restoreGoods = async id => await Goods.restore({ where: { id } });

  // 查找所有商品
  findAllGoods = async (pageNum, pageSize) =>
    // offset:偏移量，limit:页容量，需要转为数字类型
    await Goods.findAndCountAll({ offset: (pageNum - 1) * pageSize, limit: pageSize * 1 });

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
