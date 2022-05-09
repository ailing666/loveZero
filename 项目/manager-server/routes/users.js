const router = require("koa-router")();
const User = require("./../models/userSchema");
const util = require("./../utils/util");

router.prefix("/users");

router.post("/login", async (ctx) => {
  const { userName, userPwd } = ctx.request.body;
  try {
    // 按用户名和密码查找
    const res = await User.findOne({
      userName,
      userPwd,
    });

    if (res) {
      ctx.body = util.success(res._doc, "登录成功");
    } else {
      ctx.body = util.fail("账号或密码不正确");
    }
  } catch (error) {
    ctx.body = util.fail(error.msg);
  }
});

module.exports = router;
