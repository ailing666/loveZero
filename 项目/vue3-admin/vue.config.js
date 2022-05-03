const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	devServer: {
		overlay: {
			warnings: true,
			errors: true
		},
		host: 'localhost',
		port: 8080,
		https: false,
		open: true,
		hotOnly: true,
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/95b00c513750064c634f82c6484556d0/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	chainWebpack(config) {
		// 设置 svg-sprite-loader
		config.module.rule('svg').exclude.add(resolve('src/icons')).end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			// svg目录
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
			.end()
	}
}
