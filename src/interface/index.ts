// app.Data 参数类型
export interface AppInfo {
  menu?: any[]
}
// user 参数类型
export interface UserInfoData {
  token: string,
  userInfo: any
}

// 目录内 参数类型
export interface MenuItem {
  id: number,
  title: string,
  path: string,
  meta?: any
}

export interface Token {
  token: string
}