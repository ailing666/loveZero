const path = require('path');
// koa相关
const Koa = require('koa');
// koa-parameter参数校验
const parameter = require('koa-parameter');
// koa-body
const KoaBody = require('koa-body');

const KoaStatic = require('koa-static');
// 导入路由
const router = require('../router');

// 错误处理函数
const errHandler = require('./errHandler');

const app = new Koa();

// koa-body在其余中间件之前
app.use(
  KoaBody({
    // 打开文件上传
    multipart: true,
    formidable: {
      // 文件储存路径，要先创建upload文件夹才能存进来
      uploadDir: path.join(__dirname, '../upload'),
      // 保持后缀名
      keepExtensions: true,
      filter: function ({ mimetype }) {
        const res = mimetype && mimetype.includes('image');
        app.fileTypeError = !res;
        return res;
      },
    },
  })
);

app.use(parameter(app));

// 开启静态服务
app.use(KoaStatic(path.join(__dirname, '../upload')));

// router.allowedMethods() 用于 当 request method 不匹配时返回 501
app.use(router.routes()).use(router.allowedMethods());

// 接受error事件，在 errHandler 中统一错误处理
app.on('error', errHandler);
module.exports = app;
