import service from '../utils/request'
/**
 * 添加停车场
 */
export function ParkingAdd(data = {}) {
  return service.request({
    method: 'post',
    url: '/parking/add/',
    data
  })
}

/**
 * 获取停车场详情
 */
export function ParkingDetailed(data = {}) {
  return service.request({
    method: 'post',
    url: '/parking/detailed/',
    data
  })
}
/** 停车场修改 */
export function ParkingEdit(data = {}) {
  return service.request({
    method: 'post',
    url: '/parking/edit/',
    data
  })
}

/** 停车场删除 */
export function ParkingDelete(data = {}) {
  return service.request({
    method: 'post',
    url: '/parking/delete/',
    data
  })
}
/** 停车场状态修改 */
export function ParkingStatus(data = {}) {
  return service.request({
    method: 'post',
    url: '/parking/status/',
    data
  })
}
