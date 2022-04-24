const { Sequelize } = require('sequelize');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default');
// 数据库名称，数据库用户名，数据库密码，
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  // 主机名
  host: MYSQL_HOST,
  // 数据库类型
  dialect: 'mysql',
});

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.log('数据库连接失败', err);
  });

module.exports = seq;
