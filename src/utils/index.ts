/*
 * @Description: common function
 * @Version: 
 * @Company: 
 * @Author: hweilp
 * @LastEditors: hweilp
 * @Date: 2019-04-04 16:39:21
 * @LastEditTime: 2019-04-15 10:53:41
 */

/**
 * @description: 获取 缓存值
 * @param {key: string}
 * @return: any
 */

export const getStorage = (key: string): any => {
  if (key) {
    return window.sessionStorage[key]
  } else {
    return ''
  }
}
