import request from '@/utils/request'
// 用户登录
export function login(formData) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data: formData
  })
}

// 获取用户信息
export function getUserInfo(formData) {
  return request({
    url: '/sys/profile',
    method: 'POST',
    data: formData
  })
}
