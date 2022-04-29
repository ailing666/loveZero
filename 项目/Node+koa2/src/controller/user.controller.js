const jwt = require('jsonwebtoken');
const { createUser, getUserInfo, updateUser } = require('../service/user.service');
const { userRegisterError, userLoginError, changePasswordError } = require('../constant/err.type');
const { JWT_SECRET } = require('../config/config.default');
class UserController {
  // 注册接口
  register = async ctx => {
    // 获取数据
    const { user_name, password } = ctx.request.body;

    try {
      // 操作数据库
      const { dataValues } = await createUser(user_name, password);
      // 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: dataValues.id,
          user_name: dataValues.user_name,
        },
      };
    } catch (err) {
      return ctx.app.emit('error', userRegisterError, ctx, err);
    }
  };

  // 登录接口
  login = async ctx => {
    const { user_name } = ctx.request.body;
    try {
      // 通过 user_name 查询,生成token不包含password，所以返回的数据要剔除password
      const { password, ...res } = await getUserInfo({ user_name });
      ctx.body = {
        code: 0,
        message: '登录成功',
        result: {
          // 生成token：字段{id,user_name,is_admain} ,私钥, 过期时间
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        },
      };
    } catch (err) {
      return ctx.app.emit('error', userLoginError, ctx, err);
    }
  };

  // 修改密码
  changePassword = async ctx => {
    const { id } = ctx.state.user;
    const { password } = ctx.request.body;
    try {
      if (await updateUser({ id, password })) {
        ctx.body = {
          code: 0,
          message: '修改密码成功',
          result: '',
        };
      } else {
        return ctx.app.emit('error', changePasswordError, ctx);
      }
    } catch (err) {
      return ctx.app.emit('error', changePasswordError, ctx, err);
    }
  };
}

module.exports = new UserController();
