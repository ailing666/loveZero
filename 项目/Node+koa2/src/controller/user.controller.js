const jwt = require('jsonwebtoken');
const { createUser, getUerInfo } = require('../service/user.service');
const { userRegisterError } = require('../constant/err.type');
const { JWT_SECRET } = require('../config/config.default');
class UserController {
  // 注册接口
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

  // 登录接口
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    // 通过 user_name 查询,生成token不包含password，所以返回的数据要剔除password
    const { password, ...res } = await getUerInfo({ user_name });
    ctx.body = {
      code: 0,
      message: '登录成功',
      result: {
        // 生成token：字段{id,user_name,is_admain} ,私钥, 过期时间
        token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
      },
    };
  }
}

module.exports = new UserController();
