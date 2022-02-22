module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'transform-remove-console'
  ]
}

// 生产环境配置
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
	prodPlugins.push('transform-remove-console')
}

module.exports = {
	plugins: [
		...prodPlugins
	]
}
