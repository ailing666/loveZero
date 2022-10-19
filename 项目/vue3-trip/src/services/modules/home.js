import hyRequest from '../request'

// 热门建议
export function getHomeHotSuggests() {
  return hyRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

// 推荐类别
export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}

// 房屋列表
export function getHomeHouselist(currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
