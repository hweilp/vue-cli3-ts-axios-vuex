const NODE_ENV = 'development'
const VUE_APP_BASEURL = 'http://dev.ybl.cn/mng'
const OUT_PUT_DIR = 'dev'

const rawArgv = process.argv.slice(2)
console.log(rawArgv)
console.log(process.argv)

console.log(process.arch)
console.log(process.env.NODE_ENV)
console.log(process.env.outputDir)
console.log('api = ' + process.env.VUE_APP_BASEURL)

module.exports = {
  NODE_ENV: NODE_ENV,
  VUE_APP_BASEURL: VUE_APP_BASEURL,
  OUT_PUT_DIR: OUT_PUT_DIR
}