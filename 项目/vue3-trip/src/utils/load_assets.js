/**
 * 将图片名转为相对路径
 * @param {*} image 图片名
 * @returns 相对路径
 */
export const getAssetURL = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href
}


