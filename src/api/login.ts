import Http from '@/utils/request'

export const login = (params: any) => {
  //
  return Http.request({
    url: '/v1/servantmng/security/login',
    method: 'post',
    data: params
  })
}

export const loginOut = () => {
  return Http.request({
    url: '/v1/servantmng/security/logout',
    method: 'get'
  })
}