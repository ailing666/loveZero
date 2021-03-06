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
  goodsRemoveError: {
    code: '10206',
    message: '商品下架失败',
    result: '',
  },
  invalidGoodsID: {
    code: '10207',
    message: '无效的商品ID',
    result: '',
  },
  goodsRestoreError: {
    code: '10208',
    message: '商品上架失败',
    result: '',
  },
  goodsFindError: {
    code: '10209',
    message: '商品查询失败',
    result: '',
  },

  // 购物车模块
  cartsAddError: {
    code: '10302',
    message: '添加购物车失败',
    result: '',
  },

  goodsInsufficientError: {
    code: '10303',
    message: '库存不足添加失败',
    result: '',
  },
  cartsFindError: {
    code: '10304',
    message: '购物车列表获取失败',
    result: '',
  },
  cartsInvalidError: {
    code: '10305',
    message: 'number和select不能同时为空',
    result: '',
  },
  cartsUpdateError: {
    code: '10306',
    message: '更新购物车失败',
    result: '',
  },
  cartsDelError: {
    code: '10307',
    message: '删除购物车商品失败',
    result: '',
  },
  cartsSelectAllError: {
    code: '10308',
    message: '切换选中状态失败',
    result: '',
  },

  // 地址
  AddressCreateError: {
    code: '10401',
    message: '添加地址失败',
    result: '',
  },
  AddressUpdateError: {
    code: '10402',
    message: '修改地址失败',
    result: '',
  },
  AddressRemoveError: {
    code: '10403',
    message: '删除地址失败',
    result: '',
  },
  AddressFindError: {
    code: '10404',
    message: '获取地址列表失败',
    result: '',
  },
  AddressDefaultError: {
    code: '10405',
    message: '设置默认地址失败',
    result: '',
  },
  // 订单
  OrderCreateError: {
    code: '10501',
    message: '添加订单失败',
    result: '',
  },
  OrderUpdateError: {
    code: '10502',
    message: '修改订单失败',
    result: '',
  },
  OrderFindError: {
    code: '10503',
    message: '获取订单列表失败',
    result: '',
  },
};
