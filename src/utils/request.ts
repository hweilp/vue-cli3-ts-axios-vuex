/*
 * @Description: axios config
 * @Author: hweilp
 * @LastEditors: hweilp
 * @Date: 2019-04-04 16:38:23
 * @LastEditTime: 2019-04-12 17:37:38
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
    let errStr = '网络异常'
    if (response.status === 200) {
      errStr = response.data.msg
      Message.error(errStr)
    } else {
      Message.error(errStr)
    }
    return Promise.reject(response)
  }

  // requset interceptors
  interceptors(instance: any, url?: string) {
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

    instance.
      interceptors.
      response.
      use((response: AxiosResponse) => {
        if (url) {
          this.destroy(url)
        }
        const { data, status } = response
        if (status === 200 && data.code === 0) {
          return data
        } else {
          return this.requsetFail(response)
        }
      }, (err: any) => {
        if (url) {
          this.destroy(url)
        }
        return this.requsetFail(err)
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

  async getRequset(params: any) {
    const Data = await this.request(params).
      then((res: any) => res).
      catch((err: any) => err)
    return Data
  }
}

const HTTP = new Request()
export default HTTP
