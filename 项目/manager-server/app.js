const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
// 导入 log4js
const log4js = require("./utils/log4js");
// 一级路由
const router = require("koa-router")();
const users = require("./routes/users");

// error handler
onerror(app);

// 链接数据库配置
require("./config/db");

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

app.use(async (ctx, next) => {
  await next();
});

// 一级路由前缀
router.prefix("/api");
// 注册一级路由
app.use(router.routes(), router.allowedMethods());
// 注册二级路由
router.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
