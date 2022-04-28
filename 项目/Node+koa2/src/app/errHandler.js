// 错误处理函数
module.exports = (err, ctx, catchErr) => {
  // 打印错误日志：err.type定义的err，前端传入的参数，carch捕获的err
  console.error(err.message || err, ctx || ctx.request.body, catchErr);
  let status = null;

  switch (err.code) {
    case '10001':
      status = 400;
      break;
    case '10002':
      status = 400;
      break;
    default:
      // 默认是500
      status = 500;
      break;
  }
  // 错误返回码
  ctx.status = status;
  // 错误返回模板
  ctx.body = err;
};
