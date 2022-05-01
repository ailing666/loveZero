// 环境配置封装
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  // 开发环境
  dev: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/63923f5cb65f00fd17e4f45477a3435c/api'
  },
  // 测试环境
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/63923f5cb65f00fd17e4f45477a3435c/api'
  },
  // 生产环境
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/63923f5cb65f00fd17e4f45477a3435c/api'
  }
}
export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}
