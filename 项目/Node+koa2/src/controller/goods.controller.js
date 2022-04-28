const path = require('path');
const {
  fileUploadError,
  fileTypeError,
  goodsCreateError,
  goodsUpdateError,
  goodsRemoveError,
  goodsRestoreError,
  invalidGoodsID,
} = require('../constant/err.type');
const { createGoods, updateGoods, removeGoods, restoreGoods } = require('../service/goods.service');
class GoodsController {
  // 上传图片接口
  async upload(ctx, next) {
    // 文件格式不正确
    if (ctx.app.fileTypeError) {
      return ctx.app.emit('error', fileTypeError, ctx);
    }
    const { file } = ctx.request.files;
    if (file) {
      ctx.body = {
        code: 0,
        message: '商品图片上传成功',
        result: {
          goods_img: path.basename(file.filepath),
        },
      };
    } else {
      return ctx.app.emit('error', fileUploadError, ctx);
    }
  }

  // 上传商品接口
  async create(ctx, next) {
    try {
      // 返回给前端的数据剔除 createdAt 和  updatedAt
      const { createdAt, updatedAt, ...res } = await createGoods(ctx.request.body);
      ctx.body = {
        code: 0,
        message: '商品上传成功',
        result: res,
      };
    } catch (err) {
      return ctx.app.emit('error', goodsCreateError, ctx, err);
    }
  }

  // 修改商品接口
  async update(ctx) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body);
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品修改成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', goodsUpdateError, ctx);
      }
    } catch (err) {
      return ctx.app.emit('error', goodsUpdateError, ctx, err);
    }
  }

  // 下架商品接口
  async remove(ctx) {
    try {
      const res = await removeGoods(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品下架成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsID, ctx);
      }
    } catch (err) {
      console.log(11);
      return ctx.app.emit('error', goodsRemoveError, ctx, err);
    }
  }

  // 上架商品接口
  async restore(ctx) {
    try {
      const res = await restoreGoods(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品上架成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsID, ctx);
      }
    } catch (err) {
      return ctx.app.emit('error', goodsRestoreError, ctx, err);
    }
  }
}

module.exports = new GoodsController();
