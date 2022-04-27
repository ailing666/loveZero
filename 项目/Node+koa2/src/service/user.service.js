const User = require('../model/user.model');
const { userRegisterError, changePasswordError } = require('../constant/err.type');
let that = this;
class UserService {
  // 创建用户
  async createUser(user_name, password) {
    try {
      const res = await User.create({ user_name, password });
      return res.dataValues;
    } catch (err) {
      return ctx.app.emit('error', userRegisterError, ctx, err);
    }
  }

  // 获取用户信息
  async getUserInfo({ ...args }) {
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
      return ctx.app.emit('error', userRegisterError, ctx, err);
    }
  }

  // 修改用户信息
  async updateUser({ ...args }) {
    // 传进来要改的参数
    const whereOpt = { ...args };
    try {
      // 通过id找到对应的数据进行修改
      const res = await User.update(whereOpt, { where: { id: whereOpt.id } });

      // res[0] > 0说明修改成功
      return res[0] > 0;
    } catch (err) {
      return ctx.app.emit('error', changePasswordError, ctx, err);
    }
  }
}

module.exports = new UserService();
