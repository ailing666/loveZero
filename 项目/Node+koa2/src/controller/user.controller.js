const { createUser } = require('../service/user.service');
const { userRegisterError } = require('../constant/err.type');
class UserController {
  async register(ctx, next) {
    // 获取数据
    const { user_name, password } = ctx.request.body;

    try {
      // 操作数据库
      const res = await createUser(user_name, password);
      // 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (err) {
      ctx.app.emit('error', userRegisterError, ctx);
      return;
    }
  }

  async login(ctx, next) {
    ctx.body = '登录成功';
  }
}

module.exports = new UserController();
