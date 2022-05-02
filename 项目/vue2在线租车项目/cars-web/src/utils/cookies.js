import Cookies from 'js-cookie'
// 变量
const tokenKey = 'tokenAdmin'
const userNameKey = 'username'
// 获取token
export const getToken = () => Cookies.get(tokenKey)
// 写入token
export const setToken = (value) => Cookies.set(tokenKey, value)
// 删除token
export const removeToken = () => Cookies.remove(tokenKey)
// 写入userName
export const setUsername = (value) => Cookies.set(userNameKey, value)
// 获取userName
export const getUsername = () => Cookies.get(userNameKey)
// 删除userName
export const removeUsername = () => Cookies.remove(userNameKey)
