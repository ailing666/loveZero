const {
  AddressCreateError,
  AddressUpdateError,
  AddressRemoveError,
  AddressFindError,
  AddressDefaultError,
} = require('../constant/err.type');
const {
  createAddress,
  updateAddress,
  removeAddress,
  findAllAddress,
  setDefaultAddr,
} = require('../service/address.service');
class AddressController {
  // 添加地址接口
  create = async ctx => {
    try {
      const user_id = ctx.state.user.id;
      const { dataValues } = await createAddress({ user_id, ...ctx.request.body });
      ctx.body = {
        code: 0,
        message: '添加地址成功',
        result: dataValues,
      };
    } catch (err) {
      return ctx.app.emit('error', AddressCreateError, ctx, err);
    }
  };

  // 修改地址接口
  update = async ctx => {
    try {
      const res = await updateAddress(ctx.params.id, ctx.request.body);
      if (res[0]) {
        ctx.body = {
          code: 0,
          message: '修改地址成功',
          result: '',
        };
      } else {
        return ctx.app.emit('error', AddressUpdateError, ctx, err);
      }
    } catch (err) {
      return ctx.app.emit('error', AddressUpdateError, ctx, err);
    }
  };

  // 删除地址接口
  remove = async ctx => {
    try {
      const res = await removeAddress(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: '删除地址成功',
          result: '',
        };
      } else {
        return ctx.app.emit('error', AddressRemoveError, ctx, err);
      }
    } catch (err) {
      return ctx.app.emit('error', AddressRemoveError, ctx, err);
    }
  };

  // 获取地址列表接口
  findAll = async ctx => {
    const { pageNum = 1, pageSize = 10 } = ctx.request.body;
    try {
      const res = await findAllAddress(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: '获取地址列表成功',
        result: res,
      };
    } catch (err) {
      return ctx.app.emit('error', AddressFindError, ctx, err);
    }
  };

  // 设为默认地址成功
  setDefault = async ctx => {
    try {
      const res = await setDefaultAddr(ctx.state.user.id, ctx.params.id);
      if (res[0]) {
        ctx.body = {
          code: 0,
          message: '设置默认地址成功',
          result: '',
        };
      } else {
        return ctx.app.emit('error', AddressDefaultError, ctx, err);
      }
    } catch (err) {
      return ctx.app.emit('error', AddressDefaultError, ctx, err);
    }
  };
}

module.exports = new AddressController();
