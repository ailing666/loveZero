/**
 * 判断当前资源是否是外部资源
 * @param {路径} path
 * @returns 是外部资源就返回 true,否者返回false
 */
export const isExternalUrl = (path) => /^(https?:|mailto:|tel:)/.test(path)
