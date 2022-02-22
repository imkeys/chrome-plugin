const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/skins/global.less')
      ]
    }
  },
  transpileDependencies: [
    'vue-draggable-resizable-gorkys'
  ],
  css: {
    extract: {
      filename: 'static/css/[name].css?hash=[hash:8]',
      chunkFilename: 'static/css/[name].css?hash=[hash:8]'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = 'static/img/[name].[ext]?hash=[hash:8]'
        return options
      })
    config
      .when(process.env.NODE_ENV !== 'development',
        config => config.devtool('none')
      )
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  },
  configureWebpack: {
    output: {
      filename: 'static/js/[name].js?hash=[hash:8]',
      chunkFilename: 'static/js/[name].js?hash=[hash:8]'
    },
    externals: {},
    devServer: {
      disableHostCheck: true,
      port: '9201',
      open: 'http://localhost:9201/#/login',
      proxy: {
        '/': {
          target: 'https://result.eolinker.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api/': '/Y9fD8sD59b6e75646e487c626b0b4aa09f83631ed98d005?uri=/'
          }
        }
      }
    }
  }
}
