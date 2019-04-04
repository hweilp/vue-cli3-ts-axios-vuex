console.log('项目配置信息')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
console.log(process.env.NODE_ENV)
console.log(process.env.outputDir)
console.log('api = ' + process.env.VUE_APP_BASEURL)

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'build/' + process.env.outputDir || 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: process.env.assetsDir || 'static', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: true, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    // overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8088, // 端口
    proxy: '' // 设置代理
  }
}