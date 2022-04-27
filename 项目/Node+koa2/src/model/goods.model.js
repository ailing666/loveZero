const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

// 表名
const Goods = seq.define(
  'zd_goods',
  {
    goods_name: {
      // 类型
      type: DataTypes.STRING,
      // 不能为空
      allowNull: false,
      // 是否唯一
      comment: '商品名称',
    },
    goods_price: {
      // 不存在精度损失,保留两位小数
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: '商品价格',
    },
    goods_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // 默认值
      defaultValue: 0,
      comment: '商品库存',
    },
    goods_img: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品图片',
    },
  },
  {
    // 软删除，删除时会改变deletedAt字段，数据仍保留在数据库中，可以恢复
    paranoid: true,
  }
);

// 强制同步数据库(创建数据表)
// Goods.sync({ force: true });

module.exports = Goods;
