/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 校验手机号
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobile(str) {
  // 正则校验
  return /^1[3-9]\d{9}$/.test(str)
}
