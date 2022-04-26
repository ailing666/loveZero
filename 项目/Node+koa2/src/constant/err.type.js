// 错误处理返回模板
module.exports = {
  // user
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户已存在',
    result: '',
  },
  userRegisterError: {
    code: '10003',
    message: '用户注册失败',
    result: '',
  },
  userDoesNotExited: {
    code: '10004',
    message: '用户不存在',
    result: '',
  },
  userLoginError: {
    code: '10005',
    message: '用户登录失败',
    result: '',
  },
  invalidPassword: {
    code: '10006',
    message: '用户名密码不匹配',
    result: '',
  },
  changePasswordError: {
    code: '10007',
    message: '修改密码失败',
    result: '',
  },
  samePasswordError: {
    code: '10008',
    message: '两次密码相同',
    result: '',
  },
  // auth
  tokenExpiredError: {
    code: '10101',
    message: 'token已过期',
    result: '',
  },
  invalidToken: {
    code: '10102',
    message: '无效的token',
    result: '',
  },
};
