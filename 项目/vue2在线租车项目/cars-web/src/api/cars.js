import service from '../utils/request'
/**
 * 获取车辆列表
 */
export function carsList (data = {}) {
  return service.request({
    method: 'post',
    url: `${process.env.VUE_APP_API_WEB}/cars/`,
    data
  })
}

/**
 * 获取租赁类型
 */
export function GetLeaseList (data = {}) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_WEB}/lease/`,
    data
  })
}