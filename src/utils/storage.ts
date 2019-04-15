/*
 * @Description: Storage
 * @Version: 0.0.1
 * @Company: ybl
 * @Author: hweilp
 * @LastEditors: hweilp
 * @Date: 2019-04-12 18:10:03
 * @LastEditTime: 2019-04-15 11:02:28
 */

interface DataType {
  data: any,
  beginTime?: any,
  duration?: number
}

class SessionStorage {
  /**
   * getStorage
   */
  public getStorage(key: string) {
    return window.sessionStorage[key]
  }
  /**
   * removeStorage
   */
  public removeStorage(key?: string, isAll?: boolean) {
    if (isAll) {
      window.sessionStorage.clear()
    } else {
      const itemKey: string = key || ''
      window.sessionStorage.removeItem(itemKey)
    }
  }
  /**
   * setStorage
   */
  public setStorage(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}


// class CookieStorage {
//   /**
//    * setCookie
//    */
//   public setCookie(key: string, val: any, time?: number) {
//     // 开始 到期 时间
//     if (time) {
//       let now = new Date()
//       let exp = new Date(now.getTime() + time * 1000)
//       document.cookie = `${key}=${encodeURI(val)};expires=${exp.toUTCString}`
//     } else {
//       document.cookie = `${key}=${encodeURI(val)}`
//     }
//   }

//   /**
//    * getCookie
//    */
//   public getCookie(key: string) {
//     let arr: any[] = []
//     let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
//     if (arr === document.cookie.match(reg)) {
//       return decodeURI(arr[2])
//     } else {
//       return null
//     }
//   }

//   /**
//    * removeCookie
//    */
//   public removeCookie(key?: string, isAll?: boolean) {
//     let exp = new Date()
//     exp.setTime(exp.getTime() - 1)
//     if (isAll) {
//       const keys = document.cookie.match(/[^ =;]+(?=\=)/g)
//       if (keys) {
//         for (let i = keys.length; i--;) {
//           document.cookie = `${keys[i]}=0; expire=" + ${exp.toUTCString()}; path=/`
//         }
//       }
//     }
//     if (key) {
//       let val = this.getCookie(key)
//       if (val !== null) {
//         document.cookie = key + '=' + val + ';expires=' + exp.toUTCString()
//       }
//     }
//   }
// }

class LocalStorage {
  /**
   * setStorage
   * key: strign   
   */
  public setStorage(key: string, value: any, time?: number) {
    const NowDate = new Date()
    let target: DataType = {
      data: value,
      beginTime: NowDate
    }
    if (time) {
      let Duration = time * 1000
      target.duration = Duration
      localStorage.setItem(key, JSON.stringify(target))
    } else {
      localStorage.setItem(key, JSON.stringify(target))
    }
  }
  /**
   * getStorage
   */
  public getStorage(key: string) {
    const data = localStorage.getItem(key)
    if (!data) {
      return null
    } else {
      let dataObj = JSON.parse(data)

      let beginTime = new Date(dataObj.beginTime)
      let duration = dataObj.duration

      // 内容已超时
      if (new Date().getTime() - duration > beginTime.getTime()) {
        this.removeStorage(key)
        return null
      }
      return dataObj.data
    }
  }

  /**
   * removeStorage
   */
  public removeStorage(key?: string, isAll?: boolean) {
    if (isAll) {
      localStorage.clear()
    } else {
      const itemKey: string = key || ''
      localStorage.removeItem(itemKey)
    }
  }
}

const Storage = new SessionStorage()
export default Storage
