
import Http from '@/utils/request'
import { TypeHttpUrlMethods } from '@/interface'

const PrivilegeRoles: TypeHttpUrlMethods = {
  url: '/v1/servantmng/privilege/roles',
  method: 'get'
}

const UserStatusEnum: TypeHttpUrlMethods = {
  url: '/v1/reconcenter/common/enums/name2titlemaps/UserStatusEnum',
  method: 'get'
}

const personal: TypeHttpUrlMethods = {
  url: '/v1/servantmng/personalcenter/infos',
  method: 'PUT'
}

export const userStatusEnum = () => Http.request(UserStatusEnum)

// 获取 树状数据
export const getPrivilegeRoles = () => Http.request(PrivilegeRoles)

export const EditPersonalInfo = (params: any) => {
  const Params = personal
  personal.data = params
  return Http.getRequset(Params)
}