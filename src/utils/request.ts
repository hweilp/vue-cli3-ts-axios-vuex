/*
 * @Description: axios config
 * @Author: hweilp
 * @LastEditors: hweilp
 * @Date: 2019-04-04 16:38:23
 * @LastEditTime: 2019-04-12 14:25:16
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import {
  Message
} from 'element-ui'
import { getStorage } from '@/utils'

const BaseURL: string = process.env.VUE_APP_BASEURL || location.origin
const Token: string = getStorage('token')

class Request {
  public requsetList: any
  public timeOut: number = 5000
  public baseUrl: string = BaseURL
  public constructor() {
    this.requsetList = {}
  }

  destroy(url: string) {
    delete this.requsetList[url]
    if (!Object.keys(this.requsetList).length) {
      // hide loading
    }
  }

  requsetFail(response: AxiosResponse) {
    let errStr = response.data.msg || '网络繁忙！'
    Message.error(response.data.errmsg || errStr)
    return Promise.reject(response.data.msg)
  }

  // requset interceptors
  interceptors(instance: any, url?: string) {
    // 拦截
    instance.
      interceptors.
      request.
      use((config: AxiosRequestConfig) => {
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
    instance.
      interceptors.
      response.
      use((response: AxiosResponse) => {
        // 
        if (url) {
          this.destroy(url)
        }
        const { data, status } = response
        if (status === 200 && data.code === 0) {
          return data.data
        } else {
          return this.requsetFail(response)
        }
      }, (err: any) => {
        if (url) {
          this.destroy(url)
        }
        return Promise.reject(err)
      })
  }

  // 请求
  async request(options: AxiosRequestConfig) {
    const instance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeOut
    })
    await this.interceptors(instance, options.url)
    return instance(options)
  }
}

const HTTP = new Request()
export default HTTP
