const User = require('../model/user.model');
class UserService {
  // 创建用户
  async createUser(user_name, password) {
    // 插入数据
    const res = await User.create({ user_name, password });
    return res.dataValues;
  }

  // 获取用户信息
  async getUerInfo({ ...args }) {
    const whereOpt = { ...args };
    const res = await User.findOne({
      // 查询的字段
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      // 传入的查询的条件
      where: whereOpt,
    });
    // 如果存在就返回该值，否则就返回null
    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
