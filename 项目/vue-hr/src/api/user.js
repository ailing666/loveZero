import request from '@/utils/request'
// 用户登录
export function login(formData) {
  return request({
    url: 'api/sys/login',
    method: 'POST',
    data: formData
  })
}
