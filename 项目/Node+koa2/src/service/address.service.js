const Address = require('../model/address.model');
class AddressService {
  // 添加地址
  createAddress = async data => await Address.create(data);

  // 修改地址
  updateAddress = async (id, data) => await Address.update(data, { where: { id } });

  // 删除地址
  removeAddress = async id => await Address.destroy({ where: { id } });

  // 查找所有地址
  findAllAddress = async (pageNum, pageSize) =>
    // 需要转为数字类型
    await Address.findAndCountAll({
      offset: (pageNum - 1) * pageSize,
      limit: Number(pageSize),
      // 设置查询的字段
      attributes: ['id', 'consignee', 'phone', 'address', 'is_default'],
    });

  // 设为默认地址
  setDefaultAddr = async (user_id, id) => {
    // 将用户的所有地址都设为非默认
    await Address.update({ is_default: false }, { where: { user_id } });
    // 将指定id的地址设为默认值
    return await Address.update({ is_default: true }, { where: { id } });
  };
}

module.exports = new AddressService();
