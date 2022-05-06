// 通用工具函数
const log4js = require("./log4j");
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, // 参数错误
  USER_ACCOUNT_ERROR: 20001, //账号或密码错误
  USER_LOGIN_ERROR: 30001, // 用户未登录
  BUSINESS_ERROR: 40001, //业务请求失败
  AUTH_ERROR: 500001, // 认证失败或TOKEN过期
};
module.exports = {
  /**
   * 分页结构封装
   * @param {number} pageNum
   * @param {number} pageSize
   */
  pager({ pageNum = 1, pageSize = 10 }) {
    pageNum *= 1;
    pageSize *= 1;
    const offset = (pageNum - 1) * pageSize;
    return {
      page: {
        pageNum,
        pageSize,
      },
      offset,
    };
  },
  /**
   * 接口访问成功封装
   * @param {object} data 返回数据
   * @param {string} msg 成功提示信息
   * @param {number} code 状态码
   */
  success(data = "", msg = "", code = CODE.SUCCESS) {
    log4js.debug(data);
    return {
      code,
      data,
      msg,
    };
  },
  /**
   * 接口访问失败封装
   * @param {object} data 返回数据
   * @param {string} msg 失败提示信息
   * @param {number} code 状态码
   */
  fail(msg = "", code = CODE.BUSINESS_ERROR, data = "") {
    log4js.debug(msg);
    return {
      code,
      data,
      msg,
    };
  },
  CODE,
};
