const User = require('../model/user.model');
const { userRegisterError } = require('../constant/err.type');
class UserService {
  // 创建用户
  async createUser(user_name, password) {
    try {
      const res = await User.create({ user_name, password });
      return res.dataValues;
    } catch (err) {
      ctx.app.emit('error', userRegisterError, ctx);
      return;
    }
  }

  // 获取用户信息
  async getUerInfo({ ...args }) {
    const whereOpt = { ...args };
    try {
      const res = await User.findOne({
        // 查询的字段
        attributes: ['id', 'user_name', 'password', 'is_admin'],
        // 传入的查询的条件
        where: whereOpt,
      });
      // 如果存在就返回该值，否则就返回null
      return res ? res.dataValues : null;
    } catch (err) {
      ctx.app.emit('error', userRegisterError, ctx);
      return;
    }
  }
}

module.exports = new UserService();
