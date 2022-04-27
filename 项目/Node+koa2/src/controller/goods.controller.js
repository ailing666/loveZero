const path = require('path');
const { fileUploadError, fileTypeError } = require('../constant/err.type');
class GoodsController {
  // 注册接口
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
}

module.exports = new GoodsController();
