
import Http from '@/utils/request'

export const userStatusEnum = () => {
  //
  return Http.request({
    url: '/v1/reconcenter/common/enums/name2titlemaps/UserStatusEnum',
    method: 'get'
  })
}
export const getPrivilegeRoles = () => {
  return Http.request({
    url: '/v1/servantmng/privilege/roles',
    method: 'get'
  })
}
