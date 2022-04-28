const { Op } = require('sequelize');
const Carts = require('../model/carts.model');
class CartsService {
  // 创建商品
  async createOrUpdate(goods_id, user_id) {
    // 同时查询 goods_id 和 user_id字段
    const res = await Carts.findOne({
      where: {
        [Op.and]: [{ goods_id }],
      },
    });
    if (res) {
      // 已有数据，就将number+1
      await res.increment('number');
      return await res.reload();
    } else {
      // 没有数据，就创建一条
      return await Carts.create({ user_id, goods_id });
    }
  }
}

module.exports = new CartsService();
