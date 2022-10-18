import dayjs from 'dayjs';
/**
 * 将图片名转为相对路径
 * @param {*} image 图片名
 */
export const getAssetURL = image => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};

/**
 * 将date转为MM月DD日格式
 * @param {*} date
 * @returns MM月DD日
 */
export function formatMonthDay(date) {
  return dayjs(date).format('MM月DD日');
}

/**
 * 计算两个日期相差的天数
 * @param {开始时间} startDate
 * @param {结束时间} endDate
 * @returns 相差的天数
 */
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day');
}
