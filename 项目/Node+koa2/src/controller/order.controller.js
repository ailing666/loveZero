const { OrderCreateError, OrderUpdateError, OrderFindError } = require('../constant/err.type');
const { createOrder, updateOrder, findAllOrder } = require('../service/order.service');
class OrderController {
  // 提交订单接口
  create = async ctx => {
    try {
      const user_id = ctx.state.user.id;
      const { address_id, goods_info, total } = ctx.request.body;

      const order_number = 'XZD' + Date.now();

      const { dataValues } = await createOrder({
        user_id,
        address_id,
        goods_info,
        total,
        order_number,
      });
      ctx.body = {
        code: 0,
        message: '提交订单成功',
        result: dataValues,
      };
    } catch (err) {
      return ctx.app.emit('error', OrderCreateError, ctx, err);
    }
  };

  // 修改订单接口
  update = async ctx => {
    try {
      const res = await updateOrder(ctx.params.id, ctx.request.body.status);
      if (res) {
        ctx.body = {
          code: 0,
          message: '订单修改成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', OrderUpdateError, ctx);
      }
    } catch (err) {
      return ctx.app.emit('error', OrderUpdateError, ctx, err);
    }
  };

  // 获取订单列表
  findAll = async ctx => {
    const { pageNum = 1, pageSize = 10, status = 0 } = ctx.request.query;
    try {
      const { count, rows } = await findAllOrder(pageNum, pageSize, status);
      ctx.body = {
        code: 0,
        message: '订单查询成功',
        result: {
          pageNum,
          pageSize,
          total: count,
          list: rows,
        },
      };
    } catch (err) {
      return ctx.app.emit('error', OrderFindError, ctx, err);
    }
  };
}

module.exports = new OrderController();
