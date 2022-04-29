const Order = require('../model/order.model');
class OrderService {
  // 添加订单
  createOrder = async data => await Order.create(data);

  // 修改订单
  updateOrder = async (id, status) => await Order.update({ status }, { where: { id } });

  // 查找所有订单
  findAllOrder = async (pageNum, pageSize, status) =>
    await Order.findAndCountAll({
      offset: (pageNum - 1) * pageSize,
      limit: Number(pageSize),
      where: { status },
      // 设置查询的字段
      attributes: ['goods_info', 'total', 'order_number', 'status'],
    });
}

module.exports = new OrderService();
