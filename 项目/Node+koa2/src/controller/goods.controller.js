const path = require('path');
const { fileUploadError, fileTypeError } = require('../constant/err.type');
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
    ctx.body = {
      code: 0,
      message: '商品图片上传成功',
      result: '',
    };
  }
}

module.exports = new GoodsController();
