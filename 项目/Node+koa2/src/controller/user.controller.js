const { createUser, getUerInfo } = require('../service/user.service');
class UserController {
  async register(ctx, next) {
    // 获取数据
    const { user_name, password } = ctx.request.body;

    // 合法性
    // 判断必填项是否存在
    if (!user_name || !password) {
      // 记录错误日志
      console.error('用户名或密码为空', ctx.request.body);

      ctx.status = 400;

      ctx.body = {
        code: '10001',
        message: '用户名或密码为空',
        result: '',
      };

      return;
    }
    // 合理性
    // 判断用户是否已存在
    if (getUerInfo({ user_name })) {
      ctx.status = 409;
      ctx.body = {
        code: '10002',
        message: '用户已经存在',
        result: '',
      };
      return;
    }

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
  }

  async login(ctx, next) {
    ctx.body = '登录成功';
  }
}

module.exports = new UserController();
