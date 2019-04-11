const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// node 去掉前两位参数信息
const rawArgv = process.argv.slice(2)
// 开发 打包 注意 test:e2e 模式 走 build 模式
const NODE_ENV = rawArgv[0] === 'build' ? 'production' : 'development'

// 设置环境
process.env.NODE_ENV = NODE_ENV

console.log('项目配置信息')
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_OUT_PUT_DIR)
console.log('api = ' + process.env.VUE_APP_BASEURL)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 线上打包路径，请根据项目实际线上情况
  outputDir: 'build/' + process.env.VUE_APP_OUT_PUT_DIR || 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: process.env.assetsDir || 'static', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
  },

  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    // overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    port: 8081, // 端口
    proxy: '' // 设置代理
  }
}