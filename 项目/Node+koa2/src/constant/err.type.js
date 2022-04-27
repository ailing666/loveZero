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
  hasNotAdminPermission: {
    code: '10103',
    message: '没有管理员权限',
    result: '',
  },
  // good:
  fileUploadError: {
    code: '10201',
    message: '商品图片上传失败',
    result: '',
  },
  fileTypeError: {
    code: '10202',
    message: '只支持图片上传',
    result: '',
  },
  goodsFormatError: {
    code: '10203',
    message: '商品参数格式错误',
    result: '',
  },
  goodsCreateError: {
    code: '10204',
    message: '商品创建失败',
    result: '',
  },
  goodsUpdateError: {
    code: '10205',
    message: '商品修改失败',
    result: '',
  },
};
