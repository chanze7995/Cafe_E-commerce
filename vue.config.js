const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // 想要在全域性使用，路徑根據具體需求更改
        path.resolve(__dirname, 'src/assets/scss/config/_typography.scss'),
        path.resolve(__dirname, 'src/assets/scss/config/_variables.scss'),
        path.resolve(__dirname, 'src/assets/scss/config/_mixins.scss')
      ]
    }
  },
  chainWebpack: config => {
    config.module // 修改svg預設處理,
      .rule('svg')
      .exclude
      .add(resolve('src/assets/icons')) // 在此路徑下不使用預設loader
      .end()
    config.module // 新增 svg-sprite-loader 處理
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons')) //  在此路徑下使用新loader
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 設定svg中symbol中id的值
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Cafe_E-commerce/'
    : '/'
}
