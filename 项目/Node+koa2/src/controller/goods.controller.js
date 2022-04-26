class GoodsController {
  // 注册接口
  async upload(ctx, next) {
    ctx.body = {
      code: 0,
      message: '上传成功',
      result: '',
    };
  }
}

module.exports = new GoodsController();
