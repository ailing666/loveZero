// 错误处理函数
module.exports = (err, ctx) => {
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
