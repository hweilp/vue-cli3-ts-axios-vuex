/*
 * @Description: axios config
 * @Version: 
 * @Company: 
 * @Author: hweilp
 * @LastEditors: hweilp
 * @Date: 2019-04-04 16:38:23
 * @LastEditTime: 2019-04-04 18:37:19
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

import router from '@/router'
import { getStorage } from '@/utils'

const BaseURL: string = process.env.VUE_APP_BASEURL || location.origin
const Token: string = getStorage('token')

// 创建axios实例
// const service = axios.create({
//   baseURL: BaseURL,
//   timeout: 5000
// })

class YBLRequest {
  public requsetList: any
  public constructor() {
    this.requsetList = {}
  }
  // request delete
  destroy(url: string) {
    delete this.requsetList[url]
    if (!Object.keys(this.requsetList).length) {
      // hide loading
    }
  }
  // requset interceptors
  interceptors(instance: any, url?: string) {
    // 拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 携带token
      if (Token) {
        config.headers.token = Token
      }
      if (Object.keys(this.requsetList).length === 1) {
        // show loading
      }
      return config
    })

    // 响应
    instance.interceptors.response.use((response: AxiosResponse) => {
      // 
      if (url) {
        this.destroy(url)
      }
      const { data, status } = response
      if (status === 200) { return data } // 请求成功
      return requestFail(response) // 失败回调
    }, (err: any) => {
      if (url) {
        this.destroy(url)
      }
      console.error(err)
    })
  }

  // 请求
  async request(options: AxiosRequestConfig) {
    const instance = axios.create({
      baseURL: BaseURL,
      timeout: 5000
    })
    await this.interceptors(instance, options.url)
    return instance(options)
  }
}

// 请求失败
const requestFail = (res: AxiosResponse) => {
  let errStr = '网络繁忙！'
  // token失效重新登录
  if (res.data.code === 1000001) {
    console.error('token失效重新登录')
    return router.replace({ name: 'home' })
  }

  return {
    err: console.error({
      code: res.data.errcode || res.data.code,
      msg: res.data.errmsg || errStr
    })
  }
}
const HTTP = new YBLRequest()
export default HTTP