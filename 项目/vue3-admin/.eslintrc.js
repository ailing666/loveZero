module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		//
		'prettier/prettier': [
			'error',
			{
				requireConfig: false,
				semi: false,
				trailingComma: 'none',
				singleQuote: true,
				printWidth: 150,
				tabWidth: 2,
				bracketSpacing: true,
				useTabs: true
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
}
