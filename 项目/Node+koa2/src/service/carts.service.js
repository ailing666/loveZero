const { Op } = require('sequelize');
const Carts = require('../model/carts.model');
const Goods = require('../model/goods.model');
class CartsService {
  // 创建商品
  createOrUpdate = async (goods_id, user_id, goods_num) => {
    // 同时查询 goods_id 和 user_id字段
    const res = await Carts.findOne({
      where: {
        [Op.and]: [{ goods_id }],
      },
    });
    if (res) {
      if (res.number < goods_num) {
        // 已有数据，就将number+1
        await res.increment('number');
        return await res.reload();
      } else {
        return false;
      }
    } else {
      // 没有数据，就创建一条
      return await Carts.create({ user_id, goods_id });
    }
  };

  // 获取购物车列表
  findAllCarts = async (pageNum, pageSize) => {
    const offset = (pageNum - 1) * pageSize;
    const res = await Carts.findAndCountAll({
      // 指定查询的字段
      attributes: ['id', 'number', 'selected'],
      offset,
      limit: Number(pageSize),
      // 查询关联表
      include: {
        // 关联的表
        model: Goods,
        // 表别名，要与Carts里面配置的别名对上
        as: 'goods_info',
        // 指定查询的字段
        attributes: ['id', 'goods_name', 'goods_price', 'goods_img'],
      },
    });
    return res;
  };

  // 更新购物车
  updateCarts = async (id, number, selected) => {
    // 根据id查找到对应的数据
    const res = await Carts.findByPk(id);
    // 覆盖要修改的字段
    res.number = number !== undefined && res.number;
    res.selected = selected !== undefined && res.selected;
    // 保存
    return await res.save();
  };

  // 批量删除购物车商品, 删除 id 与 ids 中所有数据匹配的项,IN [1, 2],删除多个
  removeCartsGoods = async ids => await Carts.destroy({ where: { id: { [Op.in]: ids } } });

  // 切换全选与不全选,将 user_id = id的项数据中的 selected 更新为 isAll
  toggleSelectAllGoods = async (id, selected) =>
    await Carts.update({ selected }, { where: { user_id: id } });
}

module.exports = new CartsService();
