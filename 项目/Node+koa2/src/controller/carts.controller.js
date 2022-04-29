const {
  cartsAddError,
  goodsInsufficientError,
  cartsFindError,
  cartsInvalidError,
  cartsUpdateError,
  cartsDelError,
  cartsSelectAllError,
} = require('../constant/err.type');
const {
  createOrUpdate,
  findAllCarts,
  updateCarts,
  removeCartsGoods,
  toggleSelectAllGoods,
} = require('../service/carts.service');
class CartsController {
  // 添加购物车接口
  addCarts = async ctx => {
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
      return ctx.app.emit('error', cartsAddError, ctx, err);
    }
  };

  // 获取购物车列表
  findAll = async ctx => {
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
      return ctx.app.emit('error', cartsFindError, ctx, err);
    }
  };

  // 更新购物车
  update = async ctx => {
    const { number, selected } = ctx.request.body;

    if (number === undefined && selected === undefined) {
      return ctx.app.emit('error', cartsInvalidError, ctx);
    }
    try {
      const res = await updateCarts(ctx.params.id, number, selected);
      ctx.body = {
        code: 0,
        message: '更新购物车成功',
        result: res,
      };
    } catch (err) {
      return ctx.app.emit('error', cartsUpdateError, ctx, err);
    }
  };

  // 删除购物车
  remove = async ctx => {
    try {
      await removeCartsGoods(ctx.request.body.ids);
      ctx.body = {
        code: 0,
        message: '删除购物车商品成功',
        result: '',
      };
    } catch (err) {
      return ctx.app.emit('error', cartsDelError, ctx, err);
    }
  };

  // 全选或全不选
  toggleSelectAll = async ctx => {
    const { isAll } = ctx.request.body;
    try {
      await toggleSelectAllGoods(ctx.state.user.id, isAll);
      ctx.body = {
        code: 0,
        message: isAll ? '已全部选中' : '已全部取消选中',
        result: '',
      };
    } catch (err) {
      return ctx.app.emit('error', cartsSelectAllError, ctx, err);
    }
  };
}

module.exports = new CartsController();
